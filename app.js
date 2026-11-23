(() => {
  'use strict';

  // ───────────────────────── 데이터 ─────────────────────────
  const COURSES = [
    { id: 'physics', name: '공학물리', sub: '정역학 · Statics' },
    { id: 'stat', name: '확률과통계', sub: '확률 · 통계 기초' },
    { id: 'statf', name: '확통 기말', sub: '9~13주 · 가설검정과 비모수 검정' },
    { id: 'calc', name: '대학미적분학', sub: '벡터와 공간기하학 · 벡터함수' },
  ];
  const UNITS = (window.TUTOR_UNITS || []).slice().sort((a, b) =>
    a.course === b.course ? a.no - b.no : (a.course < b.course ? -1 : 1));
  const UNIT = new Map(UNITS.map(u => [u.id, u]));
  const Q = new Map(); // 문제 id → { q, unit, src }
  for (const u of UNITS) {
    u.pretest.forEach(q => Q.set(q.id, { q, unit: u, src: 'pretest' }));
    u.steps.forEach(s => { if (s.type === 'check') Q.set(s.q.id, { q: s.q, unit: u, src: 'check' }); });
    u.bank.forEach(q => Q.set(q.id, { q, unit: u, src: 'bank' }));
  }
  // 객관식 보기별 "왜 틀렸는지" (data/why-*.js) — 보기와 같은 순서의 배열, 정답 자리는 null
  for (const [id, why] of Object.entries(window.TUTOR_WHY || {})) { const e = Q.get(id); if (e && e.q.kind === 'mcq') e.q.why = why; }
  const unitsOf = c => UNITS.filter(u => u.course === c);
  const courseOf = id => COURSES.find(c => c.id === id);

  // ───────────────────────── 저장 ─────────────────────────
  const KEY = 'jarvis-tutor-v1';
  const blank = () => ({ v: 1, q: {}, units: {}, log: [], days: {}, exams: [], settings: { exam: {} } });
  let S = blank();
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { /* 처음 실행 */ }
  S.settings = Object.assign({ exam: {} }, S.settings);
  S.settings.exam.statf ||= '2026-12-09';
  const store =() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { /* 저장 불가 환경 */ } };
  // at = 마지막으로 고친 시각. 기기끼리 기록을 맞출 때 더 새것을 고르는 기준이다.
  const save = () => { S.at = Date.now(); store(); cloudPush(); };

  // ───────────────────────── 기기 간 기록 맞추기 ─────────────────────────
  // 인터넷에 올린 화면(claude.ai)에서만 켜진다. 내 계정 전용 칸에 기록을 두고, 더 새로 고친 쪽을 따른다.
  const CLOUD = !!(window.claude && window.claude.use) && !/^(127\.0\.0\.1|localhost)$/.test(location.hostname);
  const sync = { ref: null, state: CLOUD ? '연결하는 중…' : '', busy: false, dirty: false, timer: 0, sent: 0 };
  const syncDraw = () => { const n = document.getElementById('syncNote'); if (n) n.textContent = sync.state; };
  const syncSay = s => { sync.state = s; syncDraw(); };
  function cloudPush() {
    if (!sync.ref) return;
    clearTimeout(sync.timer);
    sync.timer = setTimeout(cloudFlush, 1500); // 연달아 푼 문제는 한 번에 모아 보낸다
  }
  async function cloudFlush() {
    if (!sync.ref) return;
    if (sync.busy) { sync.dirty = true; return; }
    sync.busy = true; sync.dirty = false;
    const at = S.at || 0;
    try { await sync.ref.set({ at, s: JSON.stringify(S) }); sync.sent = at; syncSay('모든 기기에 저장됨'); }
    catch (e) { syncSay(e && e.code === 'invalid_argument' ? '이 계정으로는 저장할 수 없어 이 기기에만 남습니다.' : '저장이 잠시 안 됩니다. 다음에 풀 때 다시 보냅니다.'); }
    sync.busy = false;
    if (sync.dirty) cloudFlush();
  }
  function cloudAdopt(snap) {
    if (!snap.exists || snap.metadata.hasPendingWrites) return;
    const d = snap.data();
    if (!d || !d.s || !(d.at > (S.at || 0))) return;
    try { S = Object.assign(blank(), JSON.parse(d.s)); } catch { return; }
    S.settings = Object.assign({ exam: {} }, S.settings);
    S.settings.exam.statf ||= '2026-12-09';
    sync.sent = S.at; store();
    // 수업·문제 풀이 중에는 화면을 갈아엎지 않는다
    if (!/^#\/(lesson|practice|recall)\b/.test(location.hash)) route(); else renderNav(decodeURIComponent(location.hash.slice(1) || '/'));
    toast('다른 기기의 기록을 불러왔어요');
  }
  async function cloudStart() {
    try {
      const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
      const uid = db && user ? await user.id() : null;
      if (!uid) { syncSay('로그인한 화면이 아니라 이 기기에만 저장됩니다.'); return; }
      const ref = db.doc('data/users/' + uid + '/progress');
      const first = await ref.get();
      sync.ref = ref;
      cloudAdopt(first);
      const d = first.exists ? first.data() : null;
      if ((S.at || 0) > ((d && d.at) || 0) || (!d && Object.keys(S.q).length)) { if (!S.at) S.at = Date.now(); cloudFlush(); }
      else syncSay('모든 기기에 저장됨');
      ref.onSnapshot(cloudAdopt, () => syncSay('연결이 끊겼습니다. 새로 고치면 다시 이어집니다.'));
    } catch { syncSay('연결하지 못해 이 기기에만 저장됩니다.'); }
  }

  const today = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); };
  const dayName = n => '일월화수목금토'[new Date(n * 864e5).getUTCDay()];
  const ustate = id => (S.units[id] ||= { step: 0, pre: null, missed: [], done: false });

  // ───────────────────────── 유틸 ─────────────────────────
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const app = $('#app');

  function tex(src, display) {
    try { return katex.renderToString(src, { displayMode: display, throwOnError: false, strict: 'ignore' }); }
    catch { return esc(src); }
  }
  // 본문 문법: 빈 줄=문단, "- "/"1. " 목록, "> " 강조 상자, **굵게**, $수식$, $$블록 수식$$
  function md(src) {
    if (!src) return '';
    const math = [];
    const keep = html => { math.push(html); return `\u0001${math.length - 1}\u0002`; };
    let s = String(src)
      .replace(/\$\$([\s\S]+?)\$\$/g, (m, t) => keep(tex(t, true)))
      .replace(/\$([^$\n]+?)\$/g, (m, t) => keep(tex(t, false)));
    s = esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    const out = [];
    let para = [], list = null, quote = [];
    const flushP = () => { if (para.length) { out.push(`<p>${para.join('<br>')}</p>`); para = []; } };
    const flushL = () => { if (list) { out.push(`<${list.tag}>${list.items.map(i => `<li>${i}</li>`).join('')}</${list.tag}>`); list = null; } };
    const flushQ = () => { if (quote.length) { out.push(`<blockquote><p>${quote.join('<br>')}</p></blockquote>`); quote = []; } };
    for (const raw of s.split('\n')) {
      const line = raw.trim();
      let m;
      if (!line) { flushP(); flushL(); flushQ(); }
      else if ((m = line.match(/^&gt;\s?(.*)$/))) { flushP(); flushL(); quote.push(m[1]); }
      else if ((m = line.match(/^[-•]\s+(.*)$/))) { flushP(); flushQ(); if (!list || list.tag !== 'ul') { flushL(); list = { tag: 'ul', items: [] }; } list.items.push(m[1]); }
      else if ((m = line.match(/^\d+[.)]\s+(.*)$/))) { flushP(); flushQ(); if (!list || list.tag !== 'ol') { flushL(); list = { tag: 'ol', items: [] }; } list.items.push(m[1]); }
      else { flushL(); flushQ(); para.push(line); }
    }
    flushP(); flushL(); flushQ();
    return out.join('').replace(/\u0001(\d+)\u0002/g, (m, i) => math[i]);
  }
  const inline = src => md(src).replace(/^<p>([\s\S]*)<\/p>$/, '$1');
  const fig = svg => svg ? `<div class="fig">${svg}</div>` : '';

  let toastTimer = 0;
  function toast(msg, ms = 2600) {
    const t = $('#toast'); t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, ms);
  }

  // ───────────────────────── 간격 반복 ─────────────────────────
  // conf: 2 확실 · 1 아마도 · 0 찍음.  맞히고 확실할수록 다음 복습이 멀어진다.
  function recordAnswer(entry, ok, conf, usedHint, pick) {
    const { q, unit } = entry;
    const st = (S.q[q.id] ||= { iv: 0, due: 0, n: 0, ok: 0, lapses: 0 });
    const t = today();
    st.n++; st.last = t;
    if (!ok) {
      st.lapses++; st.iv = 0; st.due = t + 1;
      if (conf === 2) st.star = true;
      if (Number.isInteger(pick)) st.pick = pick; // 마지막으로 고른 오답 보기
    } else {
      st.ok++;
      const c = usedHint ? Math.min(conf, 1) : conf;
      if (c === 0) st.iv = 1;
      else if (c === 1) st.iv = st.iv < 1 ? 1 : Math.ceil(st.iv * 1.6);
      else st.iv = st.iv < 1 ? 3 : Math.ceil(st.iv * 2.5);
      st.iv = Math.min(st.iv, 60);
      st.due = t + st.iv;
    }
    S.log.push({ d: t, id: q.id, ok: ok ? 1 : 0, c: conf, tag: q.tag, u: unit.id });
    if (S.log.length > 5000) S.log.splice(0, S.log.length - 5000);
    const day = (S.days[t] ||= { n: 0, ok: 0 });
    day.n++; if (ok) day.ok++;
    save();
    return st;
  }
  const isActive = u => { const us = S.units[u.id]; return !!us && (us.done || us.step > 0); };
  // 오늘 풀어야 할 문제: 기한이 된 복습 + 수업을 끝낸 단원의 아직 안 푼 문제은행 문제
  function dueIds(course) {
    const t = today(), review = [], fresh = [];
    for (const [id, e] of Q) {
      if (e.src === 'pretest' || (course && e.unit.course !== course)) continue;
      const st = S.q[id];
      if (st) { if (st.due <= t) review.push(id); }
      else if (e.src === 'bank' && S.units[e.unit.id]?.done) fresh.push(id);
    }
    return { review, fresh };
  }
  function mastery(u) {
    const done = u.bank.filter(q => (S.q[q.id]?.iv || 0) >= 3).length;
    return pct(done, u.bank.length);
  }
  function tagStats() {
    const m = new Map();
    for (const l of S.log) {
      const u = UNIT.get(l.u); if (!u) continue;
      const k = u.course + '|' + l.tag;
      const r = m.get(k) || { course: u.course, tag: l.tag, n: 0, ok: 0 };
      r.n++; r.ok += l.ok; m.set(k, r);
    }
    return [...m.values()].map(r => ({ ...r, acc: r.ok / r.n }));
  }
  const weakTags = () => tagStats().filter(r => r.n >= 3 && r.acc < 0.75).sort((a, b) => a.acc - b.acc);
  function streak() {
    let n = 0, t = today();
    if (!S.days[t]) t--;
    while (S.days[t]) { n++; t--; }
    return n;
  }
  function dday(course) {
    const v = S.settings.exam[course]; if (!v) return null;
    const [y, m, d] = v.split('-').map(Number);
    return Math.floor(Date.UTC(y, m - 1, d) / 864e5) - today();
  }

  // ───────────────────────── 문제 한 개 ─────────────────────────
  let keyHandler = null;
  document.addEventListener('keydown', e => { if (keyHandler && !e.ctrlKey && !e.metaKey && !e.altKey) keyHandler(e); });

  function parseNum(str) {
    const s = String(str).trim().replace(/,/g, '').replace(/[−–]/g, '-').replace(/\s+/g, '');
    let m = s.match(/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)\/([-+]?\d*\.?\d+(?:e[-+]?\d+)?)/i);
    if (m && Number(m[2]) !== 0) return Number(m[1]) / Number(m[2]);
    m = s.match(/^[-+]?\d*\.?\d+(?:e[-+]?\d+)?/i);
    return m ? Number(m[0]) : NaN;
  }
  const numTol = q => (q.tol !== undefined ? q.tol : Math.max(Math.abs(q.answer) * 0.01, 0.005)) + 1e-9;
  const choiceOrder = q => {
    const idx = q.choices.map((_, i) => i);
    return q.choices.some(c => /위의|위 |모두|전부|둘 다|모든 보기|해당 없음|[①②③ㄱㄴㄷ]/.test(c)) ? idx : shuffle(idx);
  };
  const answerText = q => q.kind === 'mcq' ? inline(q.choices[q.answer])
    : q.kind === 'num' ? `<b>${q.answer}</b>${q.unit ? ' ' + esc(q.unit) : ''}` : md(q.answer);

  // 고른 오답 보기 + 그 보기가 틀린 이유
  function pickedWhy(q, pick, label = '내가 고른 답') {
    if (q.kind !== 'mcq' || !Number.isInteger(pick) || pick === q.answer || !q.choices[pick]) return '';
    const why = q.why?.[pick];
    return `<div class="mine"><div><span class="lbl">${label}</span> ${inline(q.choices[pick])}</div>
      ${why ? `<div class="why"><b>왜 틀렸을까</b> · ${inline(why)}</div>` : ''}</div>`;
  }
  // 나머지 오답 보기들의 이유 (접어 둠)
  function otherWhys(q, pick) {
    if (q.kind !== 'mcq' || !q.why) return '';
    const rest = q.choices.map((c, i) => i).filter(i => i !== q.answer && i !== pick && q.why[i]);
    if (!rest.length) return '';
    return `<details class="others"><summary>${pick === q.answer || !Number.isInteger(pick) ? '오답 보기가' : '다른 보기가'} 틀린 이유</summary>
      ${rest.map(i => `<div class="other"><div class="c">${inline(q.choices[i])}</div><div class="w">${inline(q.why[i])}</div></div>`).join('')}</details>`;
  }

  // mode: 'learn'(확신도 + 즉시 피드백) | 'pretest'(고르면 끝) | 'exam'(피드백 없이 제출)
  function askQuestion(host, entry, opts = {}) {
    const { q } = entry;
    const mode = opts.mode || 'learn';
    return new Promise(resolve => {
      let hints = 0, sel = null, finished = false;
      const order = q.kind === 'mcq' ? choiceOrder(q) : null;
      host.innerHTML = `
        <div class="prose">${md(q.q)}</div>${fig(q.fig)}
        <div class="qbody"></div><div class="qhints"></div><div class="qact"></div><div class="qfb"></div>`;
      const body = $('.qbody', host), act = $('.qact', host), fb = $('.qfb', host);

      const confRow = () => `
        <div class="conf">
          <span class="lbl">얼마나 확실해요?</span>
          <button class="btn primary" data-conf="2" disabled>확실해요</button>
          <button class="btn" data-conf="1" disabled>아마도</button>
          <button class="btn" data-conf="0" disabled>찍었어요</button>
          ${q.hints?.length ? `<button class="btn ghost sm" data-hint>힌트 보기 (${q.hints.length})</button>` : ''}
        </div>`;
      const examRow = () => `
        <div class="conf">
          <button class="btn primary" data-conf="1" disabled>제출</button>
          <button class="btn ghost" data-skip>모르겠어요</button>
        </div>`;
      const ready = on => $$('[data-conf]', act).forEach(b => { b.disabled = !on; });

      if (q.kind === 'mcq') {
        body.innerHTML = `<div class="choices">${order.map((oi, k) => `
          <button class="choice" data-i="${oi}"><span class="key">${k + 1}</span><span class="prose grow">${md(q.choices[oi])}</span></button>`).join('')}</div>`;
        act.innerHTML = mode === 'learn' ? confRow() : mode === 'exam' ? examRow() : '';
        const pick = b => {
          if (finished) return;
          $$('.choice', body).forEach(x => x.classList.toggle('sel', x === b));
          sel = Number(b.dataset.i);
          if (mode === 'pretest') finish(sel === q.answer, 0); else ready(true);
        };
        $$('.choice', body).forEach(b => { b.onclick = () => pick(b); });
        keyHandler = e => {
          if (finished) return;
          const b = $$('.choice', body)[Number(e.key) - 1];
          if (b) pick(b);
        };
      } else if (q.kind === 'num') {
        body.innerHTML = `<div class="numrow mt"><input type="text" inputmode="decimal" placeholder="숫자로 답하기" autocomplete="off">${q.unit ? `<span class="muted">${esc(q.unit)}</span>` : ''}</div>`;
        act.innerHTML = mode === 'exam' ? examRow() : confRow();
        const inp = $('input', body);
        inp.oninput = () => ready(!Number.isNaN(parseNum(inp.value)));
        inp.onkeydown = e => { if (e.key === 'Enter' && !finished && !Number.isNaN(parseNum(inp.value))) { e.stopPropagation(); submit(mode === 'exam' ? 1 : 1); } };
        setTimeout(() => inp.focus(), 30);
        keyHandler = null;
      } else {
        body.innerHTML = `<textarea class="mt" placeholder="안 보고 직접 써 보세요. 완벽하지 않아도 꺼내 보는 것 자체가 공부입니다."></textarea>`;
        act.innerHTML = `<div class="conf"><button class="btn primary" data-reveal>모범 답안과 비교하기</button>
          ${q.hints?.length ? `<button class="btn ghost sm" data-hint>힌트 보기 (${q.hints.length})</button>` : ''}</div>`;
        keyHandler = null;
        $('[data-reveal]', act).onclick = () => {
          $('textarea', body).disabled = true;
          act.innerHTML = '';
          fb.innerHTML = `
            <div class="fb neutral"><h3>모범 답안</h3><div class="prose">${md(q.answer)}</div>
              <div class="rubric mt"><div class="small muted">내 답에 들어 있던 요점을 체크하세요.</div>
                ${q.rubric.map((r, i) => `<label><input type="checkbox" data-r="${i}"><span>${inline(r)}</span></label>`).join('')}
              </div>
            </div>
            <div class="nextrow"><button class="btn primary" data-grade>채점 완료</button></div>`;
          $('[data-grade]', fb).onclick = () => {
            const got = $$('[data-r]:checked', fb).length;
            finish(got === q.rubric.length, got === q.rubric.length ? 1 : 0, `${got}/${q.rubric.length} 요점`);
          };
        };
      }

      const hintBtn = $('[data-hint]', act);
      if (hintBtn) hintBtn.onclick = () => {
        if (hints >= q.hints.length) return;
        $('.qhints', host).insertAdjacentHTML('beforeend', `<div class="hint"><b>힌트 ${hints + 1}</b> · ${inline(q.hints[hints])}</div>`);
        hints++;
        hintBtn.textContent = hints >= q.hints.length ? '힌트 끝' : `힌트 더 보기 (${q.hints.length - hints})`;
        if (hints >= q.hints.length) hintBtn.disabled = true;
      };
      $$('[data-conf]', act).forEach(b => { b.onclick = () => submit(Number(b.dataset.conf)); });
      const skip = $('[data-skip]', act);
      if (skip) skip.onclick = () => finish(false, 0, null, true);

      function submit(conf) {
        if (finished) return;
        if (q.kind === 'mcq') { if (sel === null) return; finish(sel === q.answer, conf); }
        else {
          const v = parseNum($('input', body).value);
          if (Number.isNaN(v)) return;
          const ok = Math.abs(v - q.answer) <= numTol(q);
          const signOnly = !ok && Math.abs(v + q.answer) <= numTol(q) && q.answer !== 0;
          finish(ok, conf, signOnly ? '크기는 맞았는데 부호가 반대예요.' : null);
        }
      }

      function finish(ok, conf, note, skipped) {
        if (finished) return;
        finished = true; keyHandler = null;
        $$('button, input, textarea', body).forEach(x => { x.disabled = true; });
        if (mode === 'pretest') return setTimeout(() => resolve({ ok, conf, hints }), 250);
        if (mode === 'exam') return resolve({ ok, conf, hints, skipped, given: q.kind === 'mcq' ? sel : $('input', body)?.value });

        const st = recordAnswer(entry, ok, conf, hints > 0, sel);
        if (q.kind === 'mcq') $$('.choice', body).forEach(b => {
          const i = Number(b.dataset.i);
          if (i === q.answer) b.classList.add('right'); else if (i === sel) b.classList.add('wrong');
        });
        act.innerHTML = '';
        let meta = '';
        if (!ok && conf === 2) meta = '확신했는데 틀린 문제예요. 이런 오답은 바로잡으면 가장 오래 기억에 남습니다 — 오답노트에 ★로 표시했어요.';
        else if (!ok) meta = '오답노트에 넣었어요. 내일 다시 물어볼게요.';
        else if (ok && (conf === 0 || hints > 0)) meta = `${conf === 0 ? '찍어서' : '힌트를 보고'} 맞혔으니 금방 다시 물어볼게요 · 다음 복습 ${st.iv}일 뒤`;
        else meta = `다음 복습 ${st.iv}일 뒤`;
        fb.innerHTML = `
          <div class="fb ${ok ? 'ok' : 'no'}">
            <h3>${ok ? '정답이에요' : '아쉬워요'}${note ? ` <span class="small muted">· ${esc(note)}</span>` : ''}</h3>
            ${!ok ? pickedWhy(q, sel) : ''}
            ${!ok && q.kind !== 'short' ? `<div class="mt">정답: ${answerText(q)}</div>` : ''}
            <div class="prose mt">${md(q.explain)}</div>
            ${otherWhys(q, sel)}
            ${q.trap ? `<div class="trap"><b>흔한 실수</b> · ${inline(q.trap)}</div>` : ''}
            <div class="meta">${meta}</div>
          </div>
          <div class="nextrow"><span class="tiny muted">Enter</span><button class="btn primary" data-next>${esc(opts.nextLabel || '다음')}</button></div>`;
        const go = () => { keyHandler = null; resolve({ ok, conf, hints, pick: sel }); };
        $('[data-next]', fb).onclick = go;
        setTimeout(() => { keyHandler = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } }; }, 150);
        $('[data-next]', fb).scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });
  }

  // 버튼을 누를 때까지 기다리기: data-act 값이 돌아온다
  function waitAct(root, enterAct) {
    return new Promise(resolve => {
      const done = v => { keyHandler = null; resolve(v); };
      $$('[data-act]', root).forEach(b => { b.onclick = () => done(b.dataset.act); });
      keyHandler = enterAct ? e => {
        if (e.key === 'Enter' && !/TEXTAREA|INPUT/.test(e.target.tagName)) { e.preventDefault(); done(enterAct); }
      } : null;
    });
  }

  // ───────────────────────── 화면: 홈 ─────────────────────────
  function nextUnit(course) { return unitsOf(course).find(u => !S.units[u.id]?.done); }
  const recallDue = () => UNITS.filter(u => { const r = S.units[u.id]?.recall; return r && r.due <= today(); });

  function viewHome() {
    if (!UNITS.length) {
      app.innerHTML = `<div class="card empty"><h2>수업 데이터가 아직 없습니다</h2><p>data 폴더에 단원 파일이 있어야 합니다.</p></div>`;
      return;
    }
    const { review, fresh } = dueIds();
    const t = today();
    const todayN = S.days[t]?.n || 0;
    const total = Object.values(S.days).reduce((a, d) => a + d.n, 0);
    const doneUnits = UNITS.filter(u => S.units[u.id]?.done).length;
    const todos = [];
    if (review.length + fresh.length) todos.push({
      ico: '🔁', title: `오늘의 복습 ${Math.min(review.length + fresh.length, 20)}문제`,
      sub: `기한이 된 복습 ${review.length} · 새 문제 ${fresh.length} — 두 과목·여러 단원을 섞어서 냅니다`, href: '#/practice/due', label: '복습 시작',
    });
    for (const u of recallDue()) todos.push({
      ico: '📝', title: `백지 복습 · ${u.title}`, sub: `${courseOf(u.course).name} — 아무것도 보지 않고 기억나는 대로 써 보기`, href: `#/recall/${u.id}`, label: '써 보기',
    });
    for (const c of COURSES) {
      const u = nextUnit(c.id); if (!u) continue;
      const us = S.units[u.id];
      todos.push({
        ico: c.id === 'physics' ? '⚙️' : c.id === 'calc' ? '📐' : '🎲', title: `${c.name} ${u.no}. ${u.title}`,
        sub: `${us?.step ? `이어서 듣기 (${us.step}/${u.steps.length})` : '새 수업'} · 약 ${u.minutes || 20}분`, href: `#/lesson/${u.id}`, label: us?.step ? '이어하기' : '수업 시작',
      });
    }
    const weak = weakTags();
    if (weak.length) todos.push({
      ico: '🎯', title: '약점 연습', sub: `정답률이 낮은 개념: ${weak.slice(0, 3).map(w => w.tag).join(', ')}`, href: '#/practice/weak', label: '연습하기',
    });

    const week = [];
    for (let d = t - 6; d <= t; d++) week.push({ d, n: S.days[d]?.n || 0 });
    const maxN = Math.max(10, ...week.map(w => w.n));

    app.innerHTML = `
      <div class="card hero">
        <div class="row spread">
          <div>
            <h1>오늘도 조금씩, 확실하게.</h1>
            <div class="muted">${COURSES.map(c => { const d = dday(c.id); return d === null ? '' : `${c.name} 시험 ${d > 0 ? 'D-' + d : d === 0 ? 'D-DAY' : '종료'}`; }).filter(Boolean).join(' · ') || '설정에서 시험 날짜를 넣으면 D-day가 표시됩니다.'}</div>
          </div>
        </div>
        <div class="stats">
          <div class="tile"><b>${streak()}일</b><span>연속 학습</span></div>
          <div class="tile"><b>${todayN}</b><span>오늘 푼 문제</span></div>
          <div class="tile"><b>${doneUnits}/${UNITS.length}</b><span>끝낸 단원</span></div>
          <div class="tile"><b>${total}</b><span>누적 풀이</span></div>
        </div>
      </div>

      <div class="section-title">오늘 할 일</div>
      <div class="card">
        ${todos.length ? todos.map(x => `
          <div class="todo"><div class="ico">${x.ico}</div>
            <div class="grow"><h3>${esc(x.title)}</h3><div class="small muted">${esc(x.sub)}</div></div>
            <a class="btn primary" href="${x.href}">${x.label}</a></div>`).join('')
          : `<div class="empty">오늘 할 일을 모두 끝냈어요. 내일 복습이 다시 올라옵니다.</div>`}
      </div>

      <div class="section-title">과목</div>
      <div class="grid2">
        ${COURSES.map(c => {
          const us = unitsOf(c.id); if (!us.length) return `<div class="card"><h3>${c.name}</h3><p class="muted">단원 데이터 없음</p></div>`;
          const done = us.filter(u => S.units[u.id]?.done).length;
          const mast = Math.round(us.reduce((a, u) => a + mastery(u), 0) / us.length);
          return `<div class="card">
            <div class="row spread"><h3>${c.name}</h3><span class="badge ${c.id}">${c.sub}</span></div>
            <div class="small muted mt">수업 진도 ${done}/${us.length}</div><div class="bar ${c.id}"><i style="width:${pct(done, us.length)}%"></i></div>
            <div class="small muted mt">장기 기억 정착률 ${mast}%</div><div class="bar good"><i style="width:${mast}%"></i></div>
            <div class="row mt"><a class="btn" href="#/course/${c.id}">단원 보기</a><a class="btn ghost" href="#/practice/exam/${c.id}">모의시험</a></div>
          </div>`;
        }).join('')}
      </div>

      <div class="grid2 mt2">
        <div class="card">
          <h3>최근 7일</h3>
          <div class="week">${week.map(w => `<div class="${w.n ? '' : 'zero'}"><i style="height:${Math.round(w.n / maxN * 56) + 3}px"></i>${w.n || ''}<br>${dayName(w.d)}</div>`).join('')}</div>
        </div>
        <div class="card">
          <h3>약한 개념</h3>
          ${weak.length ? weak.slice(0, 5).map(w => `
            <div class="tagrow"><span class="name small"><span class="badge ${w.course}">${courseOf(w.course).name[0]}</span> ${esc(w.tag)}</span>
              <div class="bar"><i style="width:${Math.round(w.acc * 100)}%;background:var(--bad)"></i></div><span class="pct">${Math.round(w.acc * 100)}%</span></div>`).join('')
            : `<p class="muted small mt">문제를 풀수록 개념별 정답률이 쌓이고, 약한 개념이 여기에 나타납니다.</p>`}
        </div>
      </div>

      <div class="card mt2">
        <details class="methods">
          <summary>이 프로그램이 가르치는 방식</summary>
          <ul class="small">
            <li><b>사전 질문</b> — 배우기 전에 먼저 찍어 봅니다. 틀려도 그 뒤의 설명이 더 잘 남습니다.</li>
            <li><b>짧게 쪼갠 설명 + 바로 확인</b> — 한 번에 한 개념, 읽자마자 꺼내 봅니다(인출 연습).</li>
            <li><b>왜? 질문</b> — 스스로 이유를 설명하게 해서 암기가 아니라 이해로 묶습니다(정교화·자기 설명).</li>
            <li><b>풀이 예제 → 단계 예측</b> — 다음 단계를 먼저 생각한 뒤 풀이를 봅니다.</li>
            <li><b>확신도 체크</b> — 확실/아마도/찍음을 함께 답합니다. 아는 것과 안다고 착각하는 것을 구분합니다.</li>
            <li><b>간격 반복</b> — 잊을 만할 때 다시 냅니다. 맞히고 확실할수록 간격이 1→3→8→20일로 벌어집니다.</li>
            <li><b>교차 연습</b> — 복습은 단원과 과목을 섞어 냅니다. 어떤 공식을 쓸지 고르는 힘이 시험 실력입니다.</li>
            <li><b>백지 복습·파인만 설명</b> — 아무것도 안 보고 단원을 통째로 써 본 뒤 핵심과 비교합니다.</li>
            <li><b>오답노트·약점 연습·모의시험</b> — 틀린 문제와 약한 개념을 따로 모아 다시 풉니다.</li>
          </ul>
        </details>
      </div>`;
  }

  // ───────────────────────── 화면: 과목 ─────────────────────────
  function viewCourse(cid, alive) {
    const c = courseOf(cid), us = unitsOf(cid);
    if (!c) return viewHome();
    const d = dday(cid);
    const left = us.filter(u => !S.units[u.id]?.done).length;
    app.innerHTML = `
      <div class="row spread">
        <div><h1>${c.name}</h1><div class="muted">${c.sub}${d !== null && d > 0 ? ` · 시험 D-${d} · 남은 단원 ${left}개${left ? ` (하루 ${Math.max(1, Math.ceil(left / d))}단원 페이스)` : ''}` : ''}</div></div>
        <div class="row"><a class="btn" href="#/practice/due/${cid}">이 과목 복습</a><a class="btn" href="#/practice/exam/${cid}">모의시험</a></div>
      </div>
      <div class="card mt">
        ${us.length ? us.map(u => {
          const s = S.units[u.id]; const m = mastery(u);
          const cls = s?.done ? 'done' : s?.step ? 'doing' : '';
          return `<div class="unit ${cls}" data-id="${u.id}">
            <div class="num">${s?.done ? '✓' : u.no}</div>
            <div class="grow">
              <h3>${esc(u.title)}</h3>
              <div class="small muted">${esc(u.subtitle)}</div>
              <div class="row small muted" style="gap:8px;margin-top:4px">
                ${s?.done ? `<span class="badge good">수업 완료</span>` : s?.step ? `<span class="badge">진행 ${s.step}/${u.steps.length}</span>` : `<span class="badge gray">미시작</span>`}
                <span>문제 ${u.bank.length}개 · 정착률 ${m}%</span>
              </div>
            </div>
            <div class="acts">
              <a class="btn ${s?.done ? '' : 'primary'}" href="#/lesson/${u.id}">${s?.done ? '수업 다시 보기' : s?.step ? '이어하기' : '수업 시작'}</a>
              <a class="btn" href="#/practice/unit/${u.id}">문제 연습</a>
              <a class="btn ghost" href="#/recall/${u.id}">백지 복습</a>
            </div>
          </div>`;
        }).join('') : `<div class="empty">이 과목의 단원 데이터가 없습니다.</div>`}
      </div>
      <div class="card mt" id="maker"></div>`;
    setupMaker(cid, alive);
  }

  // ───────────────────────── PDF로 새 단원 만들기 ─────────────────────────
  // 서버(server.mjs)로 열었을 때만 동작한다. 파일을 직접 연 경우에는 안내만 보여 준다.
  const HAS_SERVER = /^https?:$/.test(location.protocol) && /^(127\.0\.0\.1|localhost)$/.test(location.hostname);
  const IS_FILE = location.protocol === 'file:';
  const api = (url, opt = {}) => fetch(url, { ...opt, headers: { 'X-Tutor': '1' } }).then(async r => {
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || '요청이 실패했습니다.');
    return j;
  });
  // 파일을 직접 연 화면이면 서버 화면으로 가는 길을 알려 준다 (진도는 주소마다 따로 저장됨)
  const SERVER_URL = 'http://127.0.0.1:4747/';
  if (IS_FILE) {
    app.insertAdjacentHTML('beforebegin', `<div class="filebar">지금은 파일을 직접 연 화면이에요. PDF로 단원 만들기는 서버 화면에서만 됩니다 →
      <a href="${SERVER_URL}" data-server>${SERVER_URL} 로 가기</a> <span class="muted">(안 열리면 폴더의 <b>자비스 튜터 시작.bat</b> 을 먼저 더블클릭)</span></div>`);
    $('[data-server]').onclick = e => { e.preventDefault(); location.href = SERVER_URL + location.hash; };
  }
  function setupMaker(cid, alive) {
    const box = $('#maker'); if (!box) return;
    if (!HAS_SERVER && !IS_FILE && document.body.classList.contains('pwa')) { box.remove(); return; } // 설치형 앱에는 PC 전용 기능을 숨긴다
    if (!HAS_SERVER && !IS_FILE) {
      box.innerHTML = `<h3>PDF로 새 단원 만들기</h3>
        <p class="muted small">새 단원은 PC에서 <b>자비스 튜터 시작.bat</b> 으로 연 화면에서 만들 수 있습니다. 만든 뒤 자비스에게 올려 달라고 하면 여기에도 나타납니다.</p>`;
      return;
    }
    if (!HAS_SERVER) {
      box.innerHTML = `<h3>PDF로 새 단원 만들기</h3>
        <p class="muted small">이 기능은 폴더의 <b>자비스 튜터 시작.bat</b> 을 더블클릭해서 열었을 때 쓸 수 있습니다. (지금은 파일을 직접 연 상태예요)</p>`;
      return;
    }
    box.innerHTML = `<h3>PDF로 새 단원 만들기</h3>
      <p class="muted small">강의 PDF를 넣으면 자비스가 읽고 수업·문제·오답 이유를 만들어 이 과목에 추가합니다. PDF 하나에 몇 분에서 십몇 분쯤 걸려요.</p>
      <label class="drop"><input type="file" accept="application/pdf,.pdf" multiple hidden>
        <b>PDF를 여기에 끌어다 놓기</b><span class="small muted">또는 눌러서 고르기 · PDF 하나가 단원 하나가 됩니다</span></label>
      <div class="joblist"></div>`;
    const drop = $('.drop', box), list = $('.joblist', box), watching = new Set();

    const send = async files => {
      for (const f of files) {
        if (!/\.pdf$/i.test(f.name)) { toast(`PDF 파일만 넣을 수 있어요: ${f.name}`); continue; }
        try { await api(`/api/jobs?course=${cid}&name=${encodeURIComponent(f.name)}`, { method: 'POST', body: f }); }
        catch (e) { toast(e.message, 5000); }
      }
      poll();
    };
    $('input', drop).onchange = e => { send([...e.target.files]); e.target.value = ''; };
    drop.ondragover = e => { e.preventDefault(); drop.classList.add('over'); };
    drop.ondragleave = () => drop.classList.remove('over');
    drop.ondrop = e => { e.preventDefault(); drop.classList.remove('over'); send([...e.dataTransfer.files]); };

    let timer = 0;
    async function poll() {
      clearTimeout(timer);
      if (!alive()) return;
      let st;
      try { st = await api('/api/state'); } catch { list.innerHTML = `<p class="small muted">서버와 연결이 끊겼습니다. 시작 파일을 다시 실행해 주세요.</p>`; return; }
      if (!alive()) return;
      const mine = st.jobs.filter(j => j.course === cid).reverse();
      list.innerHTML = mine.map(j => {
        const active = j.status === 'queued' || j.status === 'running';
        const mins = j.startedAt ? Math.floor(((j.endedAt || Date.now()) - j.startedAt) / 60000) : 0;
        return `<div class="job ${j.status}">
          <div class="row spread"><b class="grow">${esc(j.name)}</b>
            <span class="badge ${j.status === 'done' ? 'good' : j.status === 'error' ? 'bad' : ''}">${j.status === 'done' ? '완성' : j.status === 'error' ? '실패' : j.status === 'queued' ? '대기' : `만드는 중 · ${mins}분`}</span></div>
          <div class="small muted">${active ? '<span class="spin"></span>' : ''}${esc(j.msg || '').replace(/\n/g, '<br>')}</div></div>`;
      }).join('');
      // 지켜보던 작업이 끝나면 새 단원을 불러오도록 새로고침
      const finished = mine.find(j => watching.has(j.id) && j.status === 'done');
      mine.forEach(j => { if (j.status === 'queued' || j.status === 'running') watching.add(j.id); else if (j.status === 'error') watching.delete(j.id); });
      if (finished) { toast(`새 단원이 추가됐어요: ${finished.title || finished.unitId}`); return setTimeout(() => { if (alive()) location.reload(); }, 1400); }
      // PDF로 만든 단원에는 삭제 버튼을 붙인다
      for (const id of st.gen) {
        const acts = $(`.unit[data-id="${id}"] .acts`);
        if (!acts || $('[data-del]', acts)) continue;
        acts.insertAdjacentHTML('beforeend', `<button class="btn ghost sm" data-del="${id}">삭제</button>`);
        const b = $('[data-del]', acts);
        b.onclick = async () => {
          if (!b.dataset.sure) { b.dataset.sure = '1'; b.textContent = '정말 삭제?'; return setTimeout(() => { delete b.dataset.sure; b.textContent = '삭제'; }, 3000); }
          try { await api(`/api/units/${id}`, { method: 'DELETE' }); location.reload(); } catch (e) { toast(e.message, 5000); }
        };
      }
      if (watching.size && mine.some(j => j.status === 'queued' || j.status === 'running')) timer = setTimeout(poll, 2000);
    }
    poll();
  }

  // ───────────────────────── 화면: 수업 ─────────────────────────
  function stageHead(label, done, total, back) {
    return `<div class="stage-head">
      <a class="btn ghost sm" href="${back}">✕ 나가기</a>
      <div class="bar"><i style="width:${pct(done, total)}%"></i></div>
      <span class="count">${esc(label)}</span></div>`;
  }

  async function viewLesson(uid, alive) {
    const u = UNIT.get(uid);
    if (!u) return viewHome();
    const c = courseOf(u.course), back = `#/course/${u.course}`;
    const us = ustate(uid);
    if (us.step >= u.steps.length && us.done) us.step = 0; // 다시 보기
    const totalStages = u.steps.length + 2;
    const frame = (stage, label, inner) => {
      app.innerHTML = `${stageHead(label, stage, totalStages, back)}<div class="card step">${inner}</div>`;
      window.scrollTo(0, 0);
    };

    // ① 시작 화면 + 사전 질문
    if (us.step === 0 && !us.pre) {
      frame(0, '시작', `
        <div class="kicker">${c.name} · ${u.no}단원</div>
        <h2>${esc(u.title)}</h2><div class="muted">${esc(u.subtitle)} · 약 ${u.minutes || 20}분</div>
        <div class="prose mt"><p><b>이 수업이 끝나면</b></p><ul>${u.objectives.map(o => `<li>${inline(o)}</li>`).join('')}</ul></div>
        <div class="fb neutral small">먼저 <b>사전 질문 ${u.pretest.length}개</b>를 찍어 봅니다. 아직 안 배웠으니 틀리는 게 정상이에요.
          먼저 고민해 본 질문은 설명을 들을 때 훨씬 잘 남습니다. 수업 끝에 같은 질문을 다시 냅니다.</div>
        <div class="nextrow"><button class="btn primary big" data-act="go">시작하기</button></div>`);
      await waitAct(app, 'go'); if (!alive()) return;
      const pre = {};
      for (let i = 0; i < u.pretest.length; i++) {
        frame(0, `사전 질문 ${i + 1}/${u.pretest.length}`, `<div class="kicker">사전 질문 · 찍어도 됩니다</div><div class="qhost"></div>`);
        const r = await askQuestion($('.qhost'), Q.get(u.pretest[i].id), { mode: 'pretest' });
        if (!alive()) return;
        pre[u.pretest[i].id] = r.ok;
      }
      us.pre = pre; us.missed = []; save();
    }

    // ② 단계별 수업
    let i = Math.min(us.step, u.steps.length);
    while (i < u.steps.length) {
      const s = u.steps[i];
      const label = `${i + 1} / ${u.steps.length}`;
      const prevBtn = i > 0 ? `<button class="btn ghost" data-act="prev">← 이전</button>` : '';
      let act = 'next';
      if (s.type === 'explain') {
        frame(i + 1, label, `<div class="kicker">개념</div><h2>${inline(s.title)}</h2>
          <div class="prose">${md(s.body)}</div>${fig(s.fig)}
          <div class="nextrow">${prevBtn}<span class="tiny muted">Enter</span><button class="btn primary" data-act="next">이해했어요 →</button></div>`);
        act = await waitAct(app, 'next');
      } else if (s.type === 'why') {
        frame(i + 1, label, `<div class="kicker why">왜? · 스스로 설명하기</div><h2>${inline(s.prompt)}</h2>${fig(s.fig)}
          <textarea placeholder="한두 문장이라도 직접 써 보세요. 설명하려고 애쓰는 과정이 이해를 만듭니다."></textarea>
          <div class="whyfb"></div>
          <div class="nextrow">${prevBtn}<button class="btn primary" data-act="show">모범 설명 보기</button></div>`);
        act = await waitAct(app);
        if (act === 'show' && alive()) {
          $('.nextrow').remove();
          $('.whyfb').innerHTML = `<div class="fb neutral"><h3>모범 설명</h3><div class="prose">${md(s.answer)}</div></div>
            <div class="nextrow"><span class="small muted">내 설명은?</span>
              <button class="btn" data-act="next">못 썼어요</button><button class="btn" data-act="next">일부만</button><button class="btn primary" data-act="next">비슷했어요 →</button></div>`;
          act = await waitAct(app, 'next');
        }
      } else if (s.type === 'check') {
        frame(i + 1, label, `<div class="kicker">확인 문제 · 방금 배운 것 꺼내 보기</div><div class="qhost"></div>`);
        const r = await askQuestion($('.qhost'), Q.get(s.q.id));
        if (!alive()) return;
        if (!r.ok && !us.missed.includes(s.q.id)) us.missed.push(s.q.id);
      } else if (s.type === 'worked') {
        frame(i + 1, label, `<div class="kicker worked">풀이 예제 · 다음 단계를 먼저 예측하기</div><h2>${inline(s.title)}</h2>
          <div class="prose">${md(s.problem)}</div>${fig(s.fig)}<div class="wsteps"></div><div class="nextrow"></div>`);
        const host = $('.wsteps'), row = $('.nextrow');
        for (let k = 0; k < s.steps.length; k++) {
          const w = s.steps[k];
          $$('.wstep', host).forEach(x => x.classList.remove('now'));
          host.insertAdjacentHTML('beforeend', `<div class="wstep now"><div class="n">${k + 1}단계</div>
            ${w.ask ? `<div class="ask">${inline(w.ask)}</div>` : ''}<div class="wbody"></div></div>`);
          const el = host.lastElementChild;
          if (w.ask) {
            row.innerHTML = `<span class="small muted">머릿속으로 답해 본 뒤</span><button class="btn primary" data-act="show">풀이 보기</button>`;
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            await waitAct(app, 'show'); if (!alive()) return;
          }
          $('.wbody', el).innerHTML = `<div class="prose">${md(w.body)}</div>`;
          if (k < s.steps.length - 1) {
            row.innerHTML = `<button class="btn primary" data-act="more">다음 단계</button>`;
            await waitAct(app, 'more'); if (!alive()) return;
          }
        }
        $$('.wstep', host).forEach(x => x.classList.remove('now'));
        host.insertAdjacentHTML('beforeend', `<div class="answer-box"><b>답</b> · ${inline(s.answer)}</div>`);
        row.innerHTML = `${prevBtn}<button class="btn primary" data-act="next">다음 →</button>`;
        act = await waitAct(app, 'next');
      }
      if (!alive()) return;
      if (act === 'prev') { i--; continue; }
      i++;
      if (i > us.step) { us.step = i; save(); }
    }

    // ③ 마무리 퀴즈: 사전 질문 + 수업 중 틀린 확인 문제
    const postIds = [...u.pretest.map(q => q.id), ...(us.missed || [])].filter((v, k, a) => a.indexOf(v) === k && Q.has(v));
    let postOk = 0;
    for (let k = 0; k < postIds.length; k++) {
      frame(u.steps.length + 1, `마무리 ${k + 1}/${postIds.length}`, `<div class="kicker">마무리 퀴즈 · 처음에 찍었던 질문을 다시</div><div class="qhost"></div>`);
      const r = await askQuestion($('.qhost'), Q.get(postIds[k]));
      if (!alive()) return;
      if (r.ok && k < u.pretest.length) postOk++;
    }
    const preOk = Object.values(us.pre || {}).filter(Boolean).length;

    // ④ 파인만 설명 + 핵심 정리
    frame(u.steps.length + 2, '정리', `
      <div class="kicker">정리 · 안 보고 설명하기</div><h2>친구에게 설명한다면? — ${esc(u.title)}</h2>
      <p class="muted small">사전 질문 ${preOk}/${u.pretest.length} → 지금 ${postOk}/${u.pretest.length}. 이제 화면을 보지 않고 이 단원의 핵심을 자기 말로 써 보세요.</p>
      <textarea style="min-height:140px" placeholder="예: 이 단원에서는 …를 배웠다. 핵심 공식은 …이고, …할 때 쓴다."></textarea>
      <div class="kphost"></div>
      <div class="nextrow"><button class="btn primary" data-act="show">핵심과 비교하기</button></div>`);
    await waitAct(app); if (!alive()) return;
    $('.nextrow').remove();
    $('.kphost').innerHTML = `<div class="fb neutral mt"><h3>이 단원의 핵심</h3>
      <div class="small muted">내 설명에 들어 있던 것을 체크하세요. 빠진 것은 한 번 소리 내어 읽어 보세요.</div>
      ${u.keypoints.map(k => `<label class="kp"><input type="checkbox"><span>${inline(k)}</span></label>`).join('')}</div>
      <div class="nextrow"><button class="btn primary big" data-act="done">수업 끝내기</button></div>`;
    await waitAct(app); if (!alive()) return;
    const first = !us.done;
    us.done = true; us.doneAt = today(); us.step = u.steps.length;
    if (!us.recall) us.recall = { iv: 1, due: today() + 1 };
    save();
    toast(first ? `수업 완료! 문제 ${u.bank.length}개가 복습 일정에 들어갔어요.` : '다시 보기 완료');
    location.hash = `#/practice/unit/${u.id}`;
  }

  // ───────────────────────── 화면: 백지 복습 ─────────────────────────
  async function viewRecall(uid, alive) {
    const u = UNIT.get(uid);
    if (!u) return viewHome();
    const back = `#/course/${u.course}`;
    app.innerHTML = `${stageHead('백지 복습', 0, 1, back)}
      <div class="card step"><div class="kicker">백지 복습 · ${courseOf(u.course).name}</div>
        <h2>${esc(u.title)}</h2>
        <p class="muted small">노트도 화면도 보지 않고, 이 단원에서 기억나는 것을 전부 적어 보세요. 정의·공식·푸는 순서·주의할 점 — 생각나는 순서대로.</p>
        <textarea style="min-height:200px" placeholder="기억나는 대로 전부 쓰기"></textarea>
        <div class="kphost"></div>
        <div class="nextrow"><button class="btn primary" data-act="show">핵심과 비교하기</button></div></div>`;
    await waitAct(app); if (!alive()) return;
    $('.nextrow').remove();
    $('.kphost').innerHTML = `<div class="fb neutral mt"><h3>핵심 ${u.keypoints.length}가지</h3>
      <div class="small muted">내가 쓴 것에 들어 있으면 체크.</div>
      ${u.keypoints.map(k => `<label class="kp"><input type="checkbox"><span>${inline(k)}</span></label>`).join('')}</div>
      <div class="nextrow"><button class="btn primary" data-act="done">채점하기</button></div>`;
    await waitAct(app); if (!alive()) return;
    const got = $$('.kp input:checked').length, score = got / u.keypoints.length;
    const us = ustate(uid);
    const r = us.recall || { iv: 0, due: 0 };
    r.iv = score >= 0.8 ? (r.iv < 2 ? 3 : Math.min(30, Math.ceil(r.iv * 2.3))) : score >= 0.5 ? Math.max(1, r.iv) : 1;
    r.due = today() + r.iv; r.last = today(); r.score = score;
    us.recall = r;
    const day = (S.days[today()] ||= { n: 0, ok: 0 }); day.n++; if (score >= 0.8) day.ok++;
    save();
    $('.nextrow').outerHTML = `<div class="fb ${score >= 0.8 ? 'ok' : 'no'} mt"><h3>${got}/${u.keypoints.length}개 기억</h3>
      <div>${score >= 0.8 ? '잘 남아 있어요.' : '체크하지 못한 항목이 지금 가장 공부 효율이 높은 부분입니다.'} 다음 백지 복습은 ${r.iv}일 뒤입니다.</div></div>
      <div class="nextrow"><a class="btn" href="#/lesson/${u.id}">수업 다시 보기</a><a class="btn" href="#/practice/unit/${u.id}">문제 연습</a><a class="btn primary" href="#/">홈으로</a></div>`;
  }

  // ───────────────────────── 화면: 문제 풀이 세션 ─────────────────────────
  function buildSession(kind, arg) {
    const pick = (ids, n) => ids.slice(0, n);
    if (kind === 'due') {
      const { review, fresh } = dueIds(arg);
      const byDue = review.sort((a, b) => S.q[a].due - S.q[b].due);
      const ids = shuffle([...pick(byDue, 20), ...pick(shuffle(fresh), Math.max(0, 20 - Math.min(byDue.length, 20)))]);
      return { title: arg ? `${courseOf(arg)?.name} 복습` : '오늘의 복습', ids, back: arg ? `#/course/${arg}` : '#/' };
    }
    if (kind === 'unit') {
      const u = UNIT.get(arg); if (!u) return null;
      const rank = q => { const st = S.q[q.id]; return st ? (st.due <= today() ? 1 : 2 + st.iv) : 0; };
      const ids = shuffle(u.bank).sort((a, b) => rank(a) - rank(b) || a.level - b.level).slice(0, 10).map(q => q.id);
      return { title: `${u.title} · 문제 연습`, ids, back: `#/course/${u.course}` };
    }
    if (kind === 'weak') {
      const weak = weakTags().slice(0, 4);
      const keys = new Set(weak.map(w => w.course + '|' + w.tag));
      const pool = [...Q].filter(([, e]) => e.src !== 'pretest' && keys.has(e.unit.course + '|' + e.q.tag) && isActive(e.unit)).map(([id]) => id);
      const rank = id => { const st = S.q[id]; return st ? st.iv : -1; };
      return { title: '약점 연습', ids: shuffle(pool).sort((a, b) => rank(a) - rank(b)).slice(0, 12), back: '#/' };
    }
    if (kind === 'notes') {
      const ids = Object.keys(S.q).filter(id => Q.has(id) && S.q[id].lapses > 0 && S.q[id].iv < 3);
      return { title: '오답 다시 풀기', ids: shuffle(ids).slice(0, 20), back: '#/notes' };
    }
    if (kind === 'exam') {
      let us = unitsOf(arg).filter(isActive);
      if (!us.length) us = unitsOf(arg);
      const pool = us.flatMap(u => u.bank.filter(q => q.kind !== 'short').map(q => q.id));
      const isFinal = arg === 'statf'; // 기말은 중간고사 형식에 맞춰 40문제 90분
      const ids = shuffle(pool).slice(0, isFinal ? 40 : 15);
      return { title: `${courseOf(arg)?.name} 모의시험`, ids, back: `#/course/${arg}`, exam: true, minutes: isFinal ? 90 : Math.max(10, ids.length * 2), course: arg, nUnits: us.length };
    }
    return null;
  }

  function reviewList(rows) {
    return rows.map(r => {
      const { q, unit } = Q.get(r.id);
      return `<details class="review-item"><summary>
          <span class="mark" style="color:var(--${r.ok ? 'good' : 'bad'})">${r.ok ? '○' : '✕'}</span>
          <span class="grow prose">${md(q.q)}</span><span class="badge gray">${esc(q.tag)}</span></summary>
        <div class="body">${r.ok ? '' : pickedWhy(q, r.pick)}<div>정답: ${answerText(q)}</div><div class="prose mt">${md(q.explain)}</div>
          ${q.trap ? `<div class="small mt"><b>흔한 실수</b> · ${inline(q.trap)}</div>` : ''}
          ${otherWhys(q, r.ok ? q.answer : r.pick)}
          <div class="tiny muted mt">${courseOf(unit.course).name} ${unit.no}. ${esc(unit.title)}</div></div></details>`;
    }).join('');
  }

  async function viewSession(kind, arg, alive) {
    const ses = buildSession(kind, arg);
    if (!ses) return viewHome();
    if (!ses.ids.length) {
      const why = { due: '지금 복습할 문제가 없습니다. 수업을 끝내면 그 단원 문제가 복습에 들어옵니다.', weak: '아직 약점으로 잡힌 개념이 없습니다. 문제를 더 풀면 나타납니다.', notes: '다시 풀 오답이 없습니다.' }[kind] || '낼 문제가 없습니다.';
      app.innerHTML = `<div class="card empty"><h2>${esc(ses.title)}</h2><p>${why}</p><a class="btn primary" href="${ses.back}">돌아가기</a></div>`;
      return;
    }

    if (ses.exam) {
      app.innerHTML = `<div class="card step center"><div class="kicker">모의시험</div><h2>${esc(ses.title)}</h2>
        <p class="muted">${ses.ids.length}문제 · 제한 시간 ${ses.minutes}분 · 채점과 해설은 끝난 뒤에 한꺼번에<br>
        범위: ${ses.nUnits}개 단원 (수업을 시작한 단원 기준)</p>
        <div class="nextrow" style="justify-content:center"><a class="btn" href="${ses.back}">취소</a><button class="btn primary big" data-act="go">시험 시작</button></div></div>`;
      await waitAct(app, 'go'); if (!alive()) return;
    }

    const rows = [];
    const firstTry = new Map();
    const queue = ses.ids.slice();
    const retried = new Set();
    const endAt = Date.now() + (ses.minutes || 0) * 60000;
    let timedOut = false, timer = 0;
    if (ses.exam) timer = setInterval(() => {
      if (!alive()) return clearInterval(timer);
      const left = Math.max(0, endAt - Date.now());
      const el = $('.count'); if (el) el.textContent = `${el.dataset.label} · ${Math.floor(left / 60000)}:${String(Math.floor(left / 1000) % 60).padStart(2, '0')}`;
      if (!left) { timedOut = true; clearInterval(timer); const h = $('.qhost'); if (h) h.dispatchEvent(new Event('timeup')); }
    }, 500);

    let n = 0;
    while (queue.length && !timedOut) {
      const id = queue.shift(), entry = Q.get(id);
      n++;
      const label = `${Math.min(n, ses.ids.length)} / ${ses.ids.length}${n > ses.ids.length ? ' +다시' : ''}`;
      app.innerHTML = `${stageHead(label, firstTry.size, ses.ids.length, ses.back)}
        <div class="card step"><div class="kicker">${esc(ses.title)}${ses.exam ? '' : ` · <span class="muted">${courseOf(entry.unit.course).name} ${entry.unit.no}단원</span>`}</div><div class="qhost"></div></div>`;
      $('.count').dataset.label = label;
      window.scrollTo(0, 0);
      const host = $('.qhost');
      const r = await Promise.race([
        askQuestion(host, entry, { mode: ses.exam ? 'exam' : 'learn' }),
        new Promise(res => host.addEventListener('timeup', () => res(null), { once: true })),
      ]);
      if (!alive()) return clearInterval(timer);
      if (!r) break;
      const pick = r.skipped ? null : ses.exam ? r.given : r.pick;
      if (!firstTry.has(id)) { firstTry.set(id, r.ok); rows.push({ id, ok: r.ok, pick }); }
      if (ses.exam) recordAnswer(entry, r.ok, r.skipped ? 0 : 1, false, pick);
      else if (!r.ok && !retried.has(id)) { retried.add(id); queue.push(id); } // 틀린 문제는 세션 끝에 한 번 더
    }
    clearInterval(timer); keyHandler = null;
    renderNav(decodeURIComponent(location.hash.slice(1) || '/'));

    const okN = rows.filter(r => r.ok).length, total = ses.exam ? ses.ids.length : rows.length;
    if (ses.exam) {
      for (const id of ses.ids) if (!firstTry.has(id)) rows.push({ id, ok: false });
      S.exams.push({ d: today(), course: ses.course, ok: okN, n: total }); save();
    }
    const byTag = new Map();
    for (const r of rows) { const t = Q.get(r.id).q.tag; const x = byTag.get(t) || { n: 0, ok: 0 }; x.n++; x.ok += r.ok ? 1 : 0; byTag.set(t, x); }
    const wrong = rows.filter(r => !r.ok);
    app.innerHTML = `
      <div class="card center">
        <div class="kicker">${esc(ses.title)} 결과${timedOut ? ' · 시간 종료' : ''}</div>
        <div class="result-big">${okN}<span class="muted" style="font-size:24px"> / ${total}</span></div>
        <div class="muted">${ses.exam ? `${pct(okN, total)}점` : `첫 시도 정답률 ${pct(okN, total)}%`}${!ses.exam && wrong.length ? ' · 틀린 문제는 내일 다시 나옵니다' : ''}</div>
        <div class="nextrow" style="justify-content:center">
          <a class="btn" href="${ses.back}">돌아가기</a><button class="btn" data-act="again">한 번 더</button><a class="btn primary" href="#/">홈으로</a></div>
      </div>
      <div class="card"><h3>개념별 결과</h3>
        ${[...byTag].sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n).map(([t, x]) => `
          <div class="tagrow"><span class="name small">${esc(t)}</span><div class="bar ${x.ok === x.n ? 'good' : ''}"><i style="width:${pct(x.ok, x.n)}%"></i></div><span class="pct">${x.ok}/${x.n}</span></div>`).join('')}
      </div>
      <div class="card"><h3>${ses.exam ? '전체 문제 해설' : wrong.length ? '틀린 문제 다시 보기' : '모두 맞혔어요'}</h3>
        ${reviewList(ses.exam ? rows : wrong) || `<p class="muted small">틀린 문제가 없습니다.</p>`}</div>`;
    window.scrollTo(0, 0);
    $('[data-act=again]').onclick = () => route();
  }

  // ───────────────────────── 화면: 오답노트 ─────────────────────────
  function viewNotes() {
    const ids = Object.keys(S.q).filter(id => Q.has(id) && S.q[id].lapses > 0)
      .sort((a, b) => (S.q[b].star ? 1 : 0) - (S.q[a].star ? 1 : 0) || S.q[a].iv - S.q[b].iv || S.q[b].lapses - S.q[a].lapses);
    const open = ids.filter(id => S.q[id].iv < 3);
    app.innerHTML = `
      <div class="row spread"><div><h1>오답노트</h1><div class="muted">틀린 적 있는 문제 ${ids.length}개 · 아직 못 고친 것 ${open.length}개</div></div>
        ${open.length ? `<a class="btn primary" href="#/practice/notes">오답 다시 풀기</a>` : ''}</div>
      <div class="card mt">
        ${ids.length ? ids.map(id => {
          const { q, unit } = Q.get(id), st = S.q[id];
          return `<details class="review-item"><summary>
              <span class="mark" style="color:var(--${st.iv >= 3 ? 'good' : 'bad'})">${st.star ? '★' : st.iv >= 3 ? '○' : '✕'}</span>
              <span class="grow prose">${md(q.q)}</span>
              <span class="badge ${st.iv >= 3 ? 'good' : 'bad'}">${st.iv >= 3 ? '극복' : `${st.lapses}번 틀림`}</span></summary>
            <div class="body">${pickedWhy(q, st.pick, '지난번에 고른 답')}<div>정답: ${answerText(q)}</div><div class="prose mt">${md(q.explain)}</div>
              ${q.trap ? `<div class="small mt"><b>흔한 실수</b> · ${inline(q.trap)}</div>` : ''}
              ${otherWhys(q, st.pick)}
              <div class="tiny muted mt">${courseOf(unit.course).name} ${unit.no}. ${esc(unit.title)} · ${esc(q.tag)}${st.star ? ' · ★ 확신했는데 틀린 문제' : ''}</div></div></details>`;
        }).join('') : `<div class="empty">아직 틀린 문제가 없습니다. 틀린 문제는 자동으로 여기에 모입니다.</div>`}
      </div>`;
  }

  // ───────────────────────── 화면: 설정 ─────────────────────────
  function viewSettings() {
    app.innerHTML = `
      <h1>설정</h1>
      <div class="card mt"><h3>시험 날짜</h3><p class="muted small">넣어 두면 홈과 과목 화면에 D-day와 하루 페이스가 표시됩니다.</p>
        ${COURSES.map(c => `<div class="field"><label>${c.id === 'statf' ? '확률과통계 기말고사' : c.name + ' 중간고사'}</label><input type="date" data-exam="${c.id}" value="${esc(S.settings.exam[c.id] || '')}"></div>`).join('')}
      </div>
      <div class="card"><h3>학습 기록</h3><p class="muted small">${CLOUD ? '기록은 계정에 저장되어 같은 계정으로 연 PC·휴대폰·패드에서 이어집니다.' : '기록은 이 브라우저에만 저장됩니다. 파일로 내보내 두면 다른 브라우저·PC로 옮길 수 있습니다.'}</p>
        ${CLOUD ? '<p class="small muted" id="syncNote"></p>' : ''}
        <div class="row mt"><button class="btn" data-x="export" ${CLOUD ? 'hidden' : ''}>기록 내보내기</button><button class="btn" data-x="import">기록 가져오기</button>
          <button class="btn danger" data-x="reset">기록 초기화</button><input type="file" accept=".json" hidden></div>
      </div>
      <div class="card"><h3>들어 있는 수업</h3>
        ${COURSES.map(c => `<div class="small mt"><b>${c.name}</b> — 단원 ${unitsOf(c.id).length}개 · 문제 ${unitsOf(c.id).reduce((a, u) => a + u.bank.length + u.pretest.length + u.steps.filter(s => s.type === 'check').length, 0)}개</div>`).join('')}
      </div>`;
    syncDraw();
    $$('[data-exam]').forEach(i => { i.onchange = () => { S.settings.exam[i.dataset.exam] = i.value; save(); toast('저장했어요'); }; });
    $('[data-x=export]').onclick = () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: 'application/json' }));
      a.download = 'jarvis-tutor-기록.json'; a.click();
    };
    const file = $('input[type=file]');
    $('[data-x=import]').onclick = () => file.click();
    file.onchange = async () => {
      try { const d = JSON.parse(await file.files[0].text()); if (!d.q || !d.units) throw 0; S = Object.assign(blank(), d); save(); toast('기록을 가져왔어요'); route(); }
      catch { toast('이 앱의 기록 파일이 아닙니다'); }
    };
    const reset = $('[data-x=reset]');
    reset.onclick = () => {
      if (reset.dataset.armed) { S = blank(); save(); toast('초기화했어요'); route(); }
      else { reset.dataset.armed = 1; reset.textContent = '정말 지우려면 한 번 더'; setTimeout(() => { delete reset.dataset.armed; reset.textContent = '기록 초기화'; }, 4000); }
    };
  }

  // ───────────────────────── 라우터 ─────────────────────────
  let token = 0;
  function renderNav(path) {
    const { review, fresh } = UNITS.length ? dueIds() : { review: [], fresh: [] };
    const due = review.length + fresh.length;
    const items = [['#/', '홈'], ...COURSES.map(c => [`#/course/${c.id}`, c.name]), ['#/practice/due', `복습${due ? `<span class="badge">${due}</span>` : ''}`], ['#/notes', '오답노트'], ['#/settings', '설정']];
    const isOn = h => { const p = h.slice(1); return h === '#/' ? path === '/' : path === p || path.startsWith(p + '/'); };
    $('#nav').innerHTML = items.map(([h, l]) => `<a href="${h}" class="${isOn(h) ? 'on' : ''}">${l}</a>`).join('');
    $('#nav .on')?.scrollIntoView({ block: 'nearest', inline: 'center' }); // 폰에서 현재 탭이 보이게
    const bar = $('#tabbar');
    if (bar) {
      const ico = d => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
      const tabs = [
        ['#/', '홈', 'M4 11l8-7 8 7v9h-5v-6H9v6H4z'],
        ['#/course/statf', '기말', 'M5 4h11l3 3v13H5zM8 10h8M8 14h8'],
        ['#/practice/due', '복습', 'M20 12a8 8 0 1 1-2.4-5.7M20 4v4h-4'],
        ['#/notes', '오답', 'M6 6l12 12M18 6L6 18'],
        ['#/settings', '설정', 'M4 7h10M18 7h2M4 17h2M10 17h10M16 5v4M8 15v4'],
      ];
      bar.innerHTML = tabs.map(([h, l, d]) => `<a href="${h}" class="${isOn(h) ? 'on' : ''}" ${isOn(h) ? 'aria-current="page"' : ''}>${ico(d)}<span>${l}</span>${h === '#/practice/due' && due ? `<b>${due > 99 ? '99+' : due}</b>` : ''}</a>`).join('');
    }
  }
  function route() {
    const my = ++token, alive = () => my === token;
    keyHandler = null;
    const path = decodeURIComponent(location.hash.slice(1) || '/');
    const [, a, b, c] = path.split('/');
    renderNav(path);
    window.scrollTo(0, 0);
    if (a === 'course') viewCourse(b, alive);
    else if (a === 'lesson') viewLesson(b, alive);
    else if (a === 'recall') viewRecall(b, alive);
    else if (a === 'practice') viewSession(b, c, alive);
    else if (a === 'notes') viewNotes();
    else if (a === 'settings') viewSettings();
    else viewHome();
  }
  window.addEventListener('hashchange', route);
  if (CLOUD) cloudStart();

  // ───────────────────────── 뽀모도로 ─────────────────────────
  const pomo = { mode: 'idle', end: 0 };
  const pomoBtn = $('#pomo');
  const FOCUS = 25 * 60000, REST = 5 * 60000;
  function pomoDraw() {
    const left = pomo.mode === 'idle' ? FOCUS : Math.max(0, pomo.end - Date.now());
    const mm = String(Math.floor(left / 60000)).padStart(2, '0'), ss = String(Math.floor(left / 1000) % 60).padStart(2, '0');
    pomoBtn.textContent = `${pomo.mode === 'rest' ? '☕' : '⏱'} ${mm}:${ss}`;
    pomoBtn.className = 'pomo' + (pomo.mode === 'focus' ? ' run' : pomo.mode === 'rest' ? ' rest' : '');
  }
  pomoBtn.onclick = () => {
    if (pomo.mode === 'idle') { pomo.mode = 'focus'; pomo.end = Date.now() + FOCUS; toast('25분 집중 시작'); }
    else { pomo.mode = 'idle'; toast('타이머를 껐어요'); }
    pomoDraw();
  };
  setInterval(() => {
    if (pomo.mode !== 'idle' && Date.now() >= pomo.end) {
      if (pomo.mode === 'focus') { pomo.mode = 'rest'; pomo.end = Date.now() + REST; toast('25분 끝! 5분 쉬세요 — 일어나서 눈을 쉬게 하기', 6000); }
      else { pomo.mode = 'idle'; toast('휴식 끝. 다시 시작하려면 타이머를 누르세요', 6000); }
    }
    pomoDraw();
  }, 1000);

  pomoDraw();
  route();
})();
