// node tools/build-app.mjs 가 만드는 파일. 직접 고치지 않는다.
// 인터넷이 되면 새 파일을 받고, 안 되면 저장본으로 실행한다.
const VERSION = 'jarvis-tutor-e64554e418';
const ASSETS = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/apple-touch-icon.png', 'vendor/katex/katex.min.css', 'style.css', 'data/physics-a.js', 'data/physics-b.js', 'data/stat-a.js', 'data/stat-b.js', 'data/stat-c.js', 'data/statf-01.js', 'data/statf-02.js', 'data/statf-03.js', 'data/statf-04.js', 'data/statf-05.js', 'data/statf-06.js', 'data/statf-07.js', 'data/statf-08.js', 'data/statf-09.js', 'data/statf-10.js', 'data/calc-01.js', 'data/calc-02.js', 'data/calc-03.js', 'data/calc-04.js', 'data/calc-05.js', 'data/calc-06.js', 'data/calc-07.js', 'data/calc-08.js', 'data/calc-09.js', 'data/why-physics-a.js', 'data/why-physics-b.js', 'data/why-stat-a.js', 'data/why-stat-b.js', 'data/why-stat-c.js', 'data/why-statf-01.js', 'data/why-statf-02.js', 'data/why-statf-03.js', 'data/why-statf-04.js', 'data/why-statf-05.js', 'data/why-statf-06.js', 'data/why-statf-07.js', 'data/why-statf-08.js', 'data/why-statf-09.js', 'data/why-statf-10.js', 'data/why-calc-01.js', 'data/why-calc-02.js', 'data/why-calc-03.js', 'data/why-calc-04.js', 'data/why-calc-05.js', 'data/why-calc-06.js', 'data/why-calc-07.js', 'data/why-calc-08.js', 'data/why-calc-09.js', 'data/gen-index.js', 'vendor/katex/katex.min.js', 'app.js', 'icons/icon-512.png', 'vendor/katex/fonts/KaTeX_AMS-Regular.woff2', 'vendor/katex/fonts/KaTeX_Caligraphic-Bold.woff2', 'vendor/katex/fonts/KaTeX_Caligraphic-Regular.woff2', 'vendor/katex/fonts/KaTeX_Fraktur-Bold.woff2', 'vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2', 'vendor/katex/fonts/KaTeX_Main-Bold.woff2', 'vendor/katex/fonts/KaTeX_Main-BoldItalic.woff2', 'vendor/katex/fonts/KaTeX_Main-Italic.woff2', 'vendor/katex/fonts/KaTeX_Main-Regular.woff2', 'vendor/katex/fonts/KaTeX_Math-BoldItalic.woff2', 'vendor/katex/fonts/KaTeX_Math-Italic.woff2', 'vendor/katex/fonts/KaTeX_SansSerif-Bold.woff2', 'vendor/katex/fonts/KaTeX_SansSerif-Italic.woff2', 'vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2', 'vendor/katex/fonts/KaTeX_Script-Regular.woff2', 'vendor/katex/fonts/KaTeX_Size1-Regular.woff2', 'vendor/katex/fonts/KaTeX_Size2-Regular.woff2', 'vendor/katex/fonts/KaTeX_Size3-Regular.woff2', 'vendor/katex/fonts/KaTeX_Size4-Regular.woff2', 'vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x.startsWith('jarvis-tutor-') && x !== VERSION).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.includes('/api/')) return;
  e.respondWith(caches.open(VERSION).then(async cache => {
    try {
      const res = await fetch(new Request(req, { cache: 'no-cache' }));
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    } catch {
      const hit = await cache.match(req, { ignoreSearch: true });
      return hit || (req.mode === 'navigate' ? cache.match('index.html') : Response.error());
    }
  }));
});
