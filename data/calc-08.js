(function () {
  const R = String.raw;
  window.TUTOR_UNITS = window.TUTOR_UNITS || [];
  window.TUTOR_UNITS.push(
    /* ===================== 12.2 벡터함수의 도함수와 적분 ===================== */
    {
      course: "calc",
      id: "calc-08",
      no: 8,
      title: "벡터함수의 도함수와 적분",
      subtitle: "12.2 벡터함수의 도함수와 적분",
      source: "대학미분적분학 중간.pdf",
      minutes: 55,
      objectives: [
        "벡터함수의 도함수를 극한으로 정의하고, 성분별 미분으로 계산할 수 있다",
        "접선벡터·단위접선벡터를 구하고 곡선의 접선의 매개변수방정식을 세울 수 있다",
        "벡터함수의 미분법칙 6가지(합, 스칼라배, 함수배, 내적, 외적, 연쇄법칙)를 쓰고 적용할 수 있다",
        "크기가 일정한 벡터함수는 자신의 도함수와 직교함을 설명할 수 있다",
        "벡터함수의 정적분·부정적분을 성분별로 계산하고, 초기 조건으로 벡터상수를 정할 수 있다"
      ],
      pretest: [
        {
          id: "calc-08-p01", kind: "mcq", level: 1, tag: "접선벡터",
          q: R`점이 원점을 중심으로 하는 원 위를 $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ 로 돌고 있어요. 어느 순간의 위치벡터 $\mathbf{r}(t)$ 와 그 순간 점이 나아가는 방향(접선 방향)은 어떤 관계일까요?`,
          choices: [R`같은 방향이다`, R`서로 수직이다`, R`정반대 방향이다`, R`항상 $45^\circ$ 를 이룬다`],
          answer: 1,
          explain: R`원의 접선은 반지름과 수직이에요. 실제로 $\mathbf{r}'(t) = \langle -\sin t, \cos t \rangle$ 이고 $\mathbf{r}(t)\cdot\mathbf{r}'(t) = -\cos t\sin t + \sin t\cos t = 0$ 입니다. 이 절에서는 이것이 원뿐 아니라 **크기가 일정한 모든 벡터함수**에 대해 성립한다는 것을 배워요.`
        },
        {
          id: "calc-08-p02", kind: "mcq", level: 1, tag: "도함수 계산",
          q: R`벡터함수 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ 의 도함수 $\mathbf{r}'(t)$ 는 어떻게 구할 것 같나요?`,
          choices: [
            R`크기 $|\mathbf{r}(t)|$ 를 $t$ 로 미분한다`,
            R`세 성분을 더한 함수 $f+g+h$ 를 미분한다`,
            R`세 성분 $f, g, h$ 를 각각 따로 미분한다`,
            R`첫 번째 성분 $f$ 만 미분하면 된다`
          ],
          answer: 2,
          explain: R`벡터함수의 미분은 **성분별로** 하면 됩니다: $\mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle$. 결과도 벡터예요. 적분도 마찬가지로 성분별로 합니다.`
        }
      ],
      steps: [
        {
          type: "explain", title: "도함수의 정의: 할선벡터에서 접선벡터로",
          body: R`벡터함수 $\mathbf{r}$ 의 도함수(derivative) $\mathbf{r}'$ 는 실숫값 함수와 똑같은 모양의 극한으로 정의해요.

> $$\frac{d\mathbf{r}}{dt} = \mathbf{r}'(t) = \lim_{h \to 0} \frac{\mathbf{r}(t+h) - \mathbf{r}(t)}{h}$$

(이 극한이 존재할 때만 정의됩니다.)

그림으로 보면 이래요. 곡선 위의 두 점 $P$, $Q$ 의 위치벡터가 $\mathbf{r}(t)$, $\mathbf{r}(t+h)$ 이면, 뺄셈 $\mathbf{r}(t+h) - \mathbf{r}(t)$ 는 $P$ 에서 $Q$ 로 가는 벡터 $\overrightarrow{PQ}$, 즉 **할선벡터**입니다. 여기에 $1/h$ 를 곱해도 ($h>0$ 이면) 방향은 그대로예요.

$h \to 0$ 이면 $Q$ 가 $P$ 로 다가오면서 이 벡터는 곡선의 **접선 위에 놓인 벡터**에 가까워집니다. 그래서 $\mathbf{r}'(t)$ 는 "그 순간 곡선이 나아가는 방향"을 가리키는 벡터예요.

중요한 점: 분자는 **벡터의 뺄셈**이고 결과 $\mathbf{r}'(t)$ 도 **벡터**입니다.`
        },
        {
          type: "why",
          prompt: "h가 음수일 때는 r(t+h) − r(t)가 곡선을 거꾸로 거슬러 가는 벡터인데, 그래도 r'(t)가 't가 증가하는 방향'을 가리키는 이유는 무엇일까요?",
          answer: R`$h<0$ 이면 $Q$ 는 $P$ 보다 **앞선 시각**의 점이라서 $\mathbf{r}(t+h) - \mathbf{r}(t)$ 는 $t$ 가 감소하는 쪽(뒤쪽)을 향해요.

하지만 정의에서는 이 벡터를 $h$ 로 **나눕니다**. $h$ 가 음수이므로 $1/h$ 을 곱하면 방향이 **뒤집혀서** 다시 $t$ 가 증가하는 쪽을 향하게 돼요.

- $h>0$: 앞쪽을 향하는 벡터 $\times$ 양수 $\Rightarrow$ 앞쪽
- $h<0$: 뒤쪽을 향하는 벡터 $\times$ 음수 $\Rightarrow$ 앞쪽

어느 쪽에서 다가가도 $\dfrac{\mathbf{r}(t+h)-\mathbf{r}(t)}{h}$ 는 $t$ 가 증가하는 방향을 가리키므로, 극한인 $\mathbf{r}'(t)$ 도 그렇습니다. 그래서 접선벡터는 항상 **매개변수가 증가하는 방향**으로 그려요.`
        },
        {
          type: "explain", title: "정리: 성분별로 미분한다",
          body: R`정의의 극한을 매번 계산할 필요는 없어요. 다음 정리 덕분에 미분은 아주 쉬워집니다.

> $f, g, h$ 가 미분가능한 함수이고 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle = f(t)\,\mathbf{i} + g(t)\,\mathbf{j} + h(t)\,\mathbf{k}$ 이면
> $$\mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle = f'(t)\,\mathbf{i} + g'(t)\,\mathbf{j} + h'(t)\,\mathbf{k}$$

즉 **각 성분을 따로 미분**하면 끝이에요. 미적분 1에서 배운 미분법(곱의 법칙, 연쇄법칙 등)을 성분마다 그대로 씁니다.

예를 들어 $\mathbf{r}(t) = \langle t^2, \sin t, e^{2t} \rangle$ 이면 $\mathbf{r}'(t) = \langle 2t, \cos t, 2e^{2t} \rangle$ 입니다. 상수 성분은 미분하면 $0$ 이 된다는 것도 잊지 마세요.`
        },
        {
          type: "check",
          q: {
            id: "calc-08-c01", kind: "mcq", level: 1, tag: "도함수 계산",
            q: R`$\mathbf{r}(t) = \langle t^2,\ e^{3t},\ \cos 2t \rangle$ 의 도함수 $\mathbf{r}'(t)$ 는?`,
            choices: [
              R`$\langle 2t,\ e^{3t},\ -\sin 2t \rangle$`,
              R`$\langle 2t,\ 3e^{3t},\ 2\sin 2t \rangle$`,
              R`$2t + 3e^{3t} - 2\sin 2t$`,
              R`$\langle 2t,\ 3e^{3t},\ -2\sin 2t \rangle$`
            ],
            answer: 3,
            explain: R`성분별로 미분합니다. $(t^2)' = 2t$, $(e^{3t})' = 3e^{3t}$ (연쇄법칙), $(\cos 2t)' = -2\sin 2t$ (연쇄법칙 + $\cos$ 의 미분은 $-\sin$). 따라서 $\mathbf{r}'(t) = \langle 2t, 3e^{3t}, -2\sin 2t \rangle$ 이고, 결과는 벡터예요.`,
            hints: [R`세 성분을 각각 따로 미분해요.`, R`$e^{3t}$ 와 $\cos 2t$ 는 속함수의 미분($3$, $2$)을 곱해야 합니다.`]
          }
        },
        {
          type: "why",
          prompt: "극한으로 정의된 r'(t)가 왜 '각 성분의 도함수를 모은 벡터'와 같아질까요? 증명의 흐름을 자기 말로 설명해 보세요.",
          answer: R`증명은 세 걸음이에요.

1. 정의에 성분을 넣습니다: $\dfrac{1}{\Delta t}\big[\langle f(t+\Delta t), g(t+\Delta t), h(t+\Delta t)\rangle - \langle f(t), g(t), h(t)\rangle\big]$.
2. 벡터의 뺄셈과 스칼라배는 **성분별로** 이루어지므로, 이것은 $\left\langle \dfrac{f(t+\Delta t)-f(t)}{\Delta t},\ \dfrac{g(t+\Delta t)-g(t)}{\Delta t},\ \dfrac{h(t+\Delta t)-h(t)}{\Delta t} \right\rangle$ 와 같아요.
3. 벡터함수의 극한은 **각 성분의 극한**으로 계산합니다(12.1절의 정의). 그러면 각 성분이 바로 $f'(t), g'(t), h'(t)$ 의 정의가 됩니다.

핵심은 "벡터 연산(덧셈·뺄셈·스칼라배)과 극한이 모두 성분별로 작동한다"는 것 하나예요. 그래서 미분도 성분별로 내려갑니다.`
        },
        {
          type: "explain", title: "접선벡터와 단위접선벡터",
          body: R`$\mathbf{r}'(t)$ 가 존재하고 $\mathbf{r}'(t) \neq \mathbf{0}$ 일 때, $\mathbf{r}'(t)$ 를 곡선 위의 점 $P$ 에서의 **접선벡터(tangent vector)** 라고 해요. $P$ 에서의 **접선**은 $P$ 를 지나고 $\mathbf{r}'(t)$ 에 평행한 직선입니다.

방향만 필요할 때는 길이를 $1$ 로 맞춘 **단위접선벡터(unit tangent vector)** 를 씁니다.

> $$\mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|}$$

구하는 순서는 언제나 같아요.

1. $\mathbf{r}'(t)$ 를 구한다.
2. 주어진 $t$ 값을 대입한다.
3. 크기 $|\mathbf{r}'(t)|$ 로 나눈다.

$\mathbf{r}'(t) = \mathbf{0}$ 이면 나눌 수 없으므로(방향이 없으므로) $\mathbf{T}$ 를 정의할 수 없습니다. 그래서 $\mathbf{r}'(t) \neq \mathbf{0}$ 이라는 조건이 붙어요.`
        },
        {
          type: "worked", title: "예제 1: 도함수와 단위접선벡터",
          problem: R`$\mathbf{r}(t) = (1 + t^3)\,\mathbf{i} + te^{-t}\,\mathbf{j} + \sin 2t\,\mathbf{k}$ 에 대하여

(a) 도함수 $\mathbf{r}'(t)$ 를 구하세요.

(b) $t = 0$ 인 점에서의 단위접선벡터를 구하세요.`,
          steps: [
            {
              ask: "(a) 세 성분 중 미분할 때 특별히 조심해야 하는 성분은 어느 것이고, 어떤 법칙이 필요할까요?",
              body: R`성분별로 미분합니다.

- $(1+t^3)' = 3t^2$
- $(te^{-t})'$ 는 **곱의 법칙**: $1\cdot e^{-t} + t\cdot(-e^{-t}) = (1-t)e^{-t}$
- $(\sin 2t)'$ 는 **연쇄법칙**: $2\cos 2t$

$$\mathbf{r}'(t) = 3t^2\,\mathbf{i} + (1-t)e^{-t}\,\mathbf{j} + 2\cos 2t\,\mathbf{k}$$`
            },
            {
              ask: "(b) 단위접선벡터를 구하려면 t = 0 에서 무엇을 계산해야 할까요?",
              body: R`$\mathbf{T}(0) = \mathbf{r}'(0)/|\mathbf{r}'(0)|$ 이므로 $\mathbf{r}'(0)$ 가 필요해요. $t=0$ 을 대입하면

$$\mathbf{r}'(0) = 0\,\mathbf{i} + (1)(1)\,\mathbf{j} + 2(1)\,\mathbf{k} = \mathbf{j} + 2\mathbf{k}$$

참고로 접점은 $\mathbf{r}(0) = \mathbf{i}$, 즉 점 $(1, 0, 0)$ 입니다. 접점($\mathbf{r}(0)$)과 접선벡터($\mathbf{r}'(0)$)를 헷갈리지 않도록 주의하세요.`
            },
            {
              ask: "이제 크기를 구해서 나눠 보세요. |r'(0)| 은 얼마일까요?",
              body: R`$|\mathbf{r}'(0)| = \sqrt{0^2 + 1^2 + 2^2} = \sqrt{5}$ 이므로

$$\mathbf{T}(0) = \frac{\mathbf{j} + 2\mathbf{k}}{\sqrt{5}} = \frac{1}{\sqrt{5}}\,\mathbf{j} + \frac{2}{\sqrt{5}}\,\mathbf{k}$$

검산: $\left(\tfrac{1}{\sqrt5}\right)^2 + \left(\tfrac{2}{\sqrt5}\right)^2 = \tfrac15 + \tfrac45 = 1$ 이라 길이가 정말 $1$ 이에요.`
            }
          ],
          answer: R`(a) $\mathbf{r}'(t) = 3t^2\,\mathbf{i} + (1-t)e^{-t}\,\mathbf{j} + 2\cos 2t\,\mathbf{k}$

(b) $\mathbf{T}(0) = \dfrac{1}{\sqrt5}\,\mathbf{j} + \dfrac{2}{\sqrt5}\,\mathbf{k}$`
        },
        {
          type: "check",
          q: {
            id: "calc-08-c02", kind: "num", level: 2, tag: "접선벡터",
            q: R`$\mathbf{r}(t) = \cos t\,\mathbf{i} + 5t\,\mathbf{j} + 6\sin 2t\,\mathbf{k}$ 일 때, $t = 0$ 에서의 단위접선벡터 $\mathbf{T}(0)$ 의 $\mathbf{k}$ 성분을 구하세요. (소수 셋째 자리까지)`,
            answer: 0.923, tol: 0.002,
            explain: R`$\mathbf{r}'(t) = -\sin t\,\mathbf{i} + 5\,\mathbf{j} + 12\cos 2t\,\mathbf{k}$ 이므로 $\mathbf{r}'(0) = 5\,\mathbf{j} + 12\,\mathbf{k}$.

$|\mathbf{r}'(0)| = \sqrt{5^2 + 12^2} = 13$ 이므로 $\mathbf{T}(0) = \tfrac{5}{13}\,\mathbf{j} + \tfrac{12}{13}\,\mathbf{k}$.

$\mathbf{k}$ 성분은 $\tfrac{12}{13} \approx 0.923$ 입니다.`,
            hints: [R`먼저 $\mathbf{r}'(t)$ 를 구하고 $t=0$ 을 대입해요.`, R`$\mathbf{r}'(0) = \langle 0, 5, 12 \rangle$ 입니다. 이 벡터의 크기로 나누세요.`],
            trap: R`$6\sin 2t$ 를 미분할 때 속함수의 미분 $2$ 를 빠뜨려 $6\cos 2t$ 로 쓰는 실수, 그리고 크기로 나누지 않고 $12$ 를 그대로 답하는 실수가 많아요.`
          }
        },
        {
          type: "worked", title: "예제 2: 평면곡선의 위치벡터와 접선벡터",
          problem: R`곡선 $\mathbf{r}(t) = \sqrt{t}\,\mathbf{i} + (2 - t)\,\mathbf{j}$ 에 대하여 $\mathbf{r}'(t)$ 를 구하고, 위치벡터 $\mathbf{r}(1)$ 과 접선벡터 $\mathbf{r}'(1)$ 이 어떻게 그려지는지 설명하세요.`,
          steps: [
            {
              ask: "r'(t) 와 r'(1) 은 무엇일까요?",
              body: R`성분별로 미분하면 $(\sqrt{t})' = \dfrac{1}{2\sqrt{t}}$, $(2-t)' = -1$ 이므로

$$\mathbf{r}'(t) = \frac{1}{2\sqrt{t}}\,\mathbf{i} - \mathbf{j}, \qquad \mathbf{r}'(1) = \frac12\,\mathbf{i} - \mathbf{j}$$`
            },
            {
              ask: "이 곡선은 xy평면에서 어떤 모양일까요? 매개변수 t 를 없애 보세요.",
              body: R`$x = \sqrt{t}$, $y = 2 - t$ 에서 $t = x^2$ 이므로

$$y = 2 - x^2, \qquad x \ge 0$$

($x = \sqrt{t} \ge 0$ 이라는 조건이 붙어요.) 즉 꼭짓점이 $(0, 2)$ 인 위로 볼록한 포물선의 **오른쪽 절반**입니다. $t$ 가 커지면 $x$ 는 커지고 $y$ 는 작아지므로 곡선은 오른쪽 아래로 진행해요.`
            },
            {
              ask: "r(1) 과 r'(1) 은 각각 어디에서 시작하는 화살표로 그려야 할까요?",
              body: R`- **위치벡터** $\mathbf{r}(1) = \mathbf{i} + \mathbf{j}$ 는 **원점**에서 시작해 점 $(1, 1)$ 에서 끝납니다.
- **접선벡터** $\mathbf{r}'(1) = \tfrac12\mathbf{i} - \mathbf{j}$ 는 곡선 위의 점 **$(1, 1)$ 에서 시작**해서 오른쪽으로 $\tfrac12$, 아래로 $1$ 만큼 가는 화살표예요.

검산: 포물선 $y = 2 - x^2$ 의 $x=1$ 에서의 기울기는 $-2x = -2$ 이고, 접선벡터의 기울기도 $\dfrac{-1}{1/2} = -2$ 로 일치합니다. 그리고 접선벡터가 오른쪽 아래를 향하므로 $t$ 가 증가하는 방향과도 맞아요.`
            }
          ],
          answer: R`$\mathbf{r}'(t) = \dfrac{1}{2\sqrt t}\,\mathbf{i} - \mathbf{j}$, $\mathbf{r}'(1) = \tfrac12\mathbf{i} - \mathbf{j}$. 곡선은 $y = 2 - x^2\ (x \ge 0)$ 이고, $\mathbf{r}(1)$ 은 원점에서 $(1,1)$ 까지, $\mathbf{r}'(1)$ 은 $(1,1)$ 에서 시작해 $t$ 가 증가하는 쪽(오른쪽 아래)을 향하는 벡터입니다.`
        },
        {
          type: "explain", title: "접선의 매개변수방정식",
          body: R`공간곡선의 접선은 "한 점 + 방향벡터"로 정해지는 직선이에요. 11.5절에서 배운 직선의 방정식을 그대로 씁니다.

> 점 $(x_0, y_0, z_0)$ 을 지나고 벡터 $\langle a, b, c \rangle$ 에 평행한 직선:
> $$x = x_0 + at, \qquad y = y_0 + bt, \qquad z = z_0 + ct$$

접선에서는 **점** $= \mathbf{r}(t_0)$, **방향벡터** $= \mathbf{r}'(t_0)$ 를 쓰면 됩니다. 순서는 이렇게 해요.

1. 주어진 점에 해당하는 매개변수 값 $t_0$ 를 찾는다(점의 좌표를 $\mathbf{r}(t)$ 에 맞춰 본다).
2. $\mathbf{r}'(t)$ 를 구하고 $t_0$ 를 대입해 **숫자 벡터**로 만든다.
3. 직선의 방정식에 넣는다.

방향벡터는 반드시 $t_0$ 를 대입한 **상수 벡터**여야 해요. 접선의 매개변수는 곡선의 매개변수 $t$ 와 다른 것이므로, 헷갈리면 $s$ 같은 다른 문자를 쓰면 좋습니다.`
        },
        {
          type: "worked", title: "예제 3: 나선의 접선",
          problem: R`매개변수방정식 $x = 2\cos t$, $y = \sin t$, $z = t$ 로 주어진 나선에 대하여, 점 $(0, 1, \pi/2)$ 에서의 접선의 매개변수방정식을 구하세요.`,
          steps: [
            {
              ask: "먼저 벡터함수로 쓰고 도함수를 구해 보세요.",
              body: R`벡터방정식은 $\mathbf{r}(t) = \langle 2\cos t, \sin t, t \rangle$ 이고, 성분별로 미분하면

$$\mathbf{r}'(t) = \langle -2\sin t, \cos t, 1 \rangle$$`
            },
            {
              ask: "점 (0, 1, π/2) 는 t 가 얼마일 때의 점일까요? 어느 성분을 보면 가장 빨리 알 수 있나요?",
              body: R`$z = t$ 이므로 $z$ 좌표를 보면 바로 $t = \pi/2$ 예요. 나머지도 확인합니다: $2\cos\tfrac{\pi}{2} = 0$, $\sin\tfrac{\pi}{2} = 1$. 맞네요.

이렇게 **가장 단순한 성분**으로 $t_0$ 를 찾고, 나머지 성분으로 검산하는 습관을 들이세요.`
            },
            {
              ask: "접선의 방향벡터는 무엇일까요?",
              body: R`$t = \pi/2$ 를 도함수에 대입합니다.

$$\mathbf{r}'\!\left(\tfrac{\pi}{2}\right) = \left\langle -2\sin\tfrac{\pi}{2},\ \cos\tfrac{\pi}{2},\ 1 \right\rangle = \langle -2, 0, 1 \rangle$$`
            },
            {
              ask: "점과 방향벡터를 직선의 방정식에 넣어 보세요.",
              body: R`점 $(0, 1, \pi/2)$ 를 지나고 $\langle -2, 0, 1 \rangle$ 에 평행한 직선이므로

$$x = 0 + (-2)t = -2t, \qquad y = 1 + 0\cdot t = 1, \qquad z = \frac{\pi}{2} + t$$

$y$ 방향 성분이 $0$ 이라서 접선 위에서는 $y$ 가 항상 $1$ 로 일정해요.`
            }
          ],
          answer: R`$x = -2t,\quad y = 1,\quad z = \dfrac{\pi}{2} + t$`
        },
        {
          type: "check",
          q: {
            id: "calc-08-c03", kind: "num", level: 2, tag: "접선의 방정식",
            q: R`곡선 $\mathbf{r}(t) = \langle t^3,\ 3t,\ t^4 \rangle$ 위의 점 $(1, 3, 1)$ 에서의 접선이 평면 $z = 9$ 와 만나는 점의 $x$ 좌표를 구하세요.`,
            answer: 7, tol: 0.01,
            explain: R`$y = 3t = 3$ 에서 $t_0 = 1$ 입니다($t^3 = 1$, $t^4 = 1$ 도 맞아요).

$\mathbf{r}'(t) = \langle 3t^2, 3, 4t^3 \rangle$ 이므로 $\mathbf{r}'(1) = \langle 3, 3, 4 \rangle$.

접선: $x = 1 + 3s$, $y = 3 + 3s$, $z = 1 + 4s$.

$z = 9$ 이면 $1 + 4s = 9 \Rightarrow s = 2$, 따라서 $x = 1 + 3(2) = 7$ 입니다. (만나는 점은 $(7, 9, 9)$.)`,
            hints: [R`점 $(1,3,1)$ 에 해당하는 $t$ 값을 먼저 찾아요.`, R`접선은 $x = 1 + 3s$, $y = 3 + 3s$, $z = 1 + 4s$ 입니다. $z = 9$ 가 되는 $s$ 를 구하세요.`],
            trap: R`접선이 아니라 **곡선**이 $z=9$ 와 만나는 점($t^4 = 9$)을 구하는 실수. 문제는 접선(직선) 위의 점을 묻고 있어요.`
          }
        },
        {
          type: "explain", title: "이계도함수",
          body: R`실숫값 함수처럼 벡터함수도 두 번 미분할 수 있어요. $\mathbf{r}$ 의 **이계도함수(second derivative)** 는 $\mathbf{r}'$ 의 도함수입니다.

> $$\mathbf{r}''(t) = (\mathbf{r}')'(t)$$

계산은 역시 성분별로 한 번 더 미분하면 됩니다. 예제 3의 나선 $\mathbf{r}(t) = \langle 2\cos t, \sin t, t \rangle$ 은 $\mathbf{r}'(t) = \langle -2\sin t, \cos t, 1 \rangle$ 이었으므로

$$\mathbf{r}''(t) = \langle -2\cos t, -\sin t, 0 \rangle$$

상수 성분 $1$ 은 미분하면 $0$ 이 돼요. 나중에(12.4절) $\mathbf{r}(t)$ 가 움직이는 입자의 위치일 때 $\mathbf{r}'(t)$ 는 **속도벡터**, $\mathbf{r}''(t)$ 는 **가속도벡터**로 해석한다는 것을 배웁니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-08-c04", kind: "mcq", level: 1, tag: "도함수 계산",
            q: R`$\mathbf{r}(t) = \langle t^3,\ e^{-t},\ \sin 2t \rangle$ 의 이계도함수 $\mathbf{r}''(t)$ 는?`,
            choices: [
              R`$\langle 6t,\ e^{-t},\ -4\sin 2t \rangle$`,
              R`$\langle 3t^2,\ -e^{-t},\ 2\cos 2t \rangle$`,
              R`$\langle 6t,\ -e^{-t},\ -4\sin 2t \rangle$`,
              R`$\langle 6t,\ e^{-t},\ -2\sin 2t \rangle$`
            ],
            answer: 0,
            explain: R`한 번 미분: $\mathbf{r}'(t) = \langle 3t^2, -e^{-t}, 2\cos 2t \rangle$.

한 번 더 미분: $(3t^2)' = 6t$, $(-e^{-t})' = +e^{-t}$ (음수가 두 번 나와 양수), $(2\cos 2t)' = -4\sin 2t$ (연쇄법칙으로 $2$ 가 한 번 더 곱해짐).

따라서 $\mathbf{r}''(t) = \langle 6t, e^{-t}, -4\sin 2t \rangle$.`,
            hints: [R`먼저 $\mathbf{r}'(t)$ 를 구한 뒤, 그것을 다시 성분별로 미분해요.`]
          }
        },
        {
          type: "explain", title: "미분법칙 6가지",
          body: R`실숫값 함수의 미분공식마다 벡터함수 버전이 있어요. $\mathbf{u}, \mathbf{v}$ 는 미분가능한 벡터함수, $c$ 는 스칼라(상수), $f$ 는 실숫값 함수입니다.

> 1. $\dfrac{d}{dt}[\mathbf{u}(t) + \mathbf{v}(t)] = \mathbf{u}'(t) + \mathbf{v}'(t)$
> 2. $\dfrac{d}{dt}[c\,\mathbf{u}(t)] = c\,\mathbf{u}'(t)$
> 3. $\dfrac{d}{dt}[f(t)\,\mathbf{u}(t)] = f'(t)\,\mathbf{u}(t) + f(t)\,\mathbf{u}'(t)$
> 4. $\dfrac{d}{dt}[\mathbf{u}(t)\cdot\mathbf{v}(t)] = \mathbf{u}'(t)\cdot\mathbf{v}(t) + \mathbf{u}(t)\cdot\mathbf{v}'(t)$
> 5. $\dfrac{d}{dt}[\mathbf{u}(t)\times\mathbf{v}(t)] = \mathbf{u}'(t)\times\mathbf{v}(t) + \mathbf{u}(t)\times\mathbf{v}'(t)$
> 6. $\dfrac{d}{dt}[\mathbf{u}(f(t))] = f'(t)\,\mathbf{u}'(f(t))$ (연쇄법칙)

외우는 요령: 3, 4, 5번은 모두 **곱의 법칙**과 같은 모양이에요. "앞을 미분하고 뒤는 그대로 + 앞은 그대로 두고 뒤를 미분". 곱셈의 종류(스칼라배, 내적, 외적)만 다릅니다.

단 하나의 주의점: 5번 **외적은 순서를 바꾸면 안 돼요**($\mathbf{a}\times\mathbf{b} = -\mathbf{b}\times\mathbf{a}$ 이므로). $\mathbf{u}$ 는 항상 왼쪽, $\mathbf{v}$ 는 항상 오른쪽에 둡니다. 그리고 4번의 결과는 스칼라, 5번의 결과는 벡터예요.`
        },
        {
          type: "why",
          prompt: "공식 4(내적의 미분)는 어떻게 증명할까요? 왜 보통의 곱의 법칙과 똑같은 모양이 되는지 설명해 보세요.",
          answer: R`$\mathbf{u}(t) = \langle f_1, f_2, f_3 \rangle$, $\mathbf{v}(t) = \langle g_1, g_2, g_3 \rangle$ 라고 성분으로 쓰면 내적은 그냥 **실숫값 함수들의 곱의 합**이에요.

$$\mathbf{u}\cdot\mathbf{v} = f_1 g_1 + f_2 g_2 + f_3 g_3$$

이제 평범한 미분을 합니다. 합은 항별로 미분하고, 각 항 $f_i g_i$ 에는 보통의 **곱의 법칙**을 써요.

$$\frac{d}{dt}(\mathbf{u}\cdot\mathbf{v}) = \sum_{i=1}^{3}\,(f_i' g_i + f_i g_i') = \sum_{i=1}^{3} f_i' g_i + \sum_{i=1}^{3} f_i g_i'$$

앞의 합은 $\mathbf{u}'\cdot\mathbf{v}$, 뒤의 합은 $\mathbf{u}\cdot\mathbf{v}'$ 의 성분 표현이므로 공식 4가 나옵니다.

즉 내적이 "성분끼리의 곱을 더한 것"이라서, 각 항마다 곱의 법칙이 적용되고 그것을 다시 내적 모양으로 묶은 거예요. 나머지 공식들도 같은 방식(성분으로 쓰고 실숫값 함수의 미분공식 적용)으로 증명합니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-08-c05", kind: "num", level: 2, tag: "미분법칙",
            q: R`$f(t) = \mathbf{u}(t)\cdot\mathbf{v}(t)$ 이고 $\mathbf{u}(1) = \langle 2, -1, 3 \rangle$, $\mathbf{u}'(1) = \langle 1, 4, -2 \rangle$, $\mathbf{v}(t) = \langle t, t^2, t^3 \rangle$ 일 때 $f'(1)$ 의 값을 구하세요.`,
            answer: 12, tol: 0.01,
            explain: R`공식 4: $f'(1) = \mathbf{u}'(1)\cdot\mathbf{v}(1) + \mathbf{u}(1)\cdot\mathbf{v}'(1)$.

$\mathbf{v}(1) = \langle 1, 1, 1 \rangle$, $\mathbf{v}'(t) = \langle 1, 2t, 3t^2 \rangle$ 이므로 $\mathbf{v}'(1) = \langle 1, 2, 3 \rangle$.

- $\mathbf{u}'(1)\cdot\mathbf{v}(1) = 1 + 4 - 2 = 3$
- $\mathbf{u}(1)\cdot\mathbf{v}'(1) = 2 - 2 + 9 = 9$

$f'(1) = 3 + 9 = 12$.`,
            hints: [R`$\mathbf{u}(t)$ 의 식을 몰라도 돼요. 내적의 미분공식에는 $t=1$ 에서의 값들만 필요합니다.`, R`$\mathbf{v}(1)$ 과 $\mathbf{v}'(1)$ 을 구한 뒤 $\mathbf{u}'(1)\cdot\mathbf{v}(1) + \mathbf{u}(1)\cdot\mathbf{v}'(1)$ 을 계산하세요.`],
            trap: R`$\mathbf{u}'(1)\cdot\mathbf{v}'(1)$ 로 계산하는 실수(도함수끼리 곱하면 안 됨), 또는 두 항 중 하나만 계산하는 실수.`
          }
        },
        {
          type: "worked", title: "예제 4: 크기가 일정하면 도함수와 직교한다",
          problem: R`$|\mathbf{r}(t)| = c$ (상수)이면, 모든 $t$ 에 대하여 $\mathbf{r}'(t)$ 는 $\mathbf{r}(t)$ 와 직교함을 보이세요.`,
          steps: [
            {
              ask: "크기 |r(t)| 에는 제곱근이 들어 있어 다루기 불편해요. 크기를 내적으로 바꿔 쓰려면 어떻게 할까요?",
              body: R`벡터를 자기 자신과 내적하면 크기의 제곱이 됩니다.

$$\mathbf{r}(t)\cdot\mathbf{r}(t) = |\mathbf{r}(t)|^2 = c^2$$

이렇게 쓰면 제곱근이 사라지고, 내적의 미분공식(공식 4)을 쓸 수 있는 모양이 돼요. "크기 조건이 나오면 $\mathbf{r}\cdot\mathbf{r}$ 로 바꾼다"는 것이 이 예제의 핵심 아이디어입니다.`
            },
            {
              ask: "이 등식의 양변을 t 로 미분하면 각각 무엇이 될까요?",
              body: R`오른쪽 $c^2$ 은 상수이므로 미분하면 $0$ 이에요. 왼쪽은 공식 4를 씁니다.

$$0 = \frac{d}{dt}[\mathbf{r}(t)\cdot\mathbf{r}(t)] = \mathbf{r}'(t)\cdot\mathbf{r}(t) + \mathbf{r}(t)\cdot\mathbf{r}'(t) = 2\,\mathbf{r}'(t)\cdot\mathbf{r}(t)$$

내적은 순서를 바꿔도 값이 같으므로 두 항이 같아서 $2$ 배로 묶였습니다.`
            },
            {
              ask: "여기서 어떤 결론이 나올까요? 기하학적으로는 무슨 뜻일까요?",
              body: R`$\mathbf{r}'(t)\cdot\mathbf{r}(t) = 0$ 이고, 내적이 $0$ 이라는 것은 두 벡터가 **직교**한다는 뜻이에요.

기하학적 의미: $|\mathbf{r}(t)| = c$ 는 곡선이 **중심이 원점이고 반지름이 $c$ 인 구면 위**에 놓여 있다는 말입니다. 그런 곡선의 접선벡터 $\mathbf{r}'(t)$ 는 언제나 위치벡터 $\mathbf{r}(t)$(구의 반지름 방향)에 수직이에요. 원의 접선이 반지름에 수직인 것을 3차원으로 넓힌 결과입니다.`
            }
          ],
          answer: R`$\mathbf{r}\cdot\mathbf{r} = c^2$ 의 양변을 미분하면 $2\,\mathbf{r}'(t)\cdot\mathbf{r}(t) = 0$ 이므로 $\mathbf{r}'(t) \perp \mathbf{r}(t)$.`
        },
        {
          type: "check",
          q: {
            id: "calc-08-c06", kind: "mcq", level: 2, tag: "미분법칙",
            q: R`어떤 곡선 $\mathbf{r}(t)$ 가 중심이 원점이고 반지름이 $5$ 인 구면 위에 놓여 있어요(즉 모든 $t$ 에서 $|\mathbf{r}(t)| = 5$). 이때 $\mathbf{r}(t)\cdot\mathbf{r}'(t)$ 의 값은?`,
            choices: [R`$25$`, R`$5$`, R`$0$`, R`곡선의 식을 모르면 알 수 없다`],
            answer: 2,
            explain: R`$\mathbf{r}\cdot\mathbf{r} = |\mathbf{r}|^2 = 25$ (상수)의 양변을 미분하면 $2\,\mathbf{r}\cdot\mathbf{r}' = 0$ 이므로 $\mathbf{r}(t)\cdot\mathbf{r}'(t) = 0$ 입니다. 곡선의 구체적인 식과 상관없이, 크기가 일정하기만 하면 항상 성립해요.`,
            hints: [R`$\mathbf{r}\cdot\mathbf{r}$ 가 얼마인지 쓰고, 양변을 미분해 보세요.`]
          }
        },
        {
          type: "explain", title: "벡터함수의 적분",
          body: R`연속인 벡터함수 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ 의 **정적분(definite integral)** 도 실숫값 함수와 같은 방식(리만 합의 극한)으로 정의하는데, 계산은 **성분별로 적분**하면 됩니다. 결과는 숫자가 아니라 **벡터**예요.

> $$\int_a^b \mathbf{r}(t)\,dt = \left(\int_a^b f(t)\,dt\right)\mathbf{i} + \left(\int_a^b g(t)\,dt\right)\mathbf{j} + \left(\int_a^b h(t)\,dt\right)\mathbf{k}$$

미적분학의 기본 정리도 그대로 성립합니다. $\mathbf{R}$ 이 $\mathbf{r}$ 의 원시함수, 즉 $\mathbf{R}'(t) = \mathbf{r}(t)$ 이면

> $$\int_a^b \mathbf{r}(t)\,dt = \Big[\mathbf{R}(t)\Big]_a^b = \mathbf{R}(b) - \mathbf{R}(a)$$

부정적분(원시함수)은 $\int \mathbf{r}(t)\,dt$ 로 쓰고, 이때 적분상수는 숫자가 아니라 **벡터상수** $\mathbf{C}$ 입니다. 성분마다 적분상수가 하나씩 생기는데, 그 셋을 묶은 것이 $\mathbf{C} = \langle C_1, C_2, C_3 \rangle$ 이에요.`
        },
        {
          type: "why",
          prompt: "벡터함수의 정적분은 원래 리만 합의 극한으로 정의되는데, 왜 '성분별로 적분한 것'과 같아질까요?",
          answer: R`정의는 $\displaystyle\int_a^b \mathbf{r}(t)\,dt = \lim_{n\to\infty}\sum_{i=1}^{n} \mathbf{r}(t_i^*)\,\Delta t$ 입니다. 여기서 더하는 것은 **벡터**들이에요.

벡터의 덧셈과 스칼라배는 성분별로 이루어지므로, 이 합을 성분으로 풀어 쓰면

$$\sum_{i=1}^{n}\mathbf{r}(t_i^*)\Delta t = \left(\sum f(t_i^*)\Delta t\right)\mathbf{i} + \left(\sum g(t_i^*)\Delta t\right)\mathbf{j} + \left(\sum h(t_i^*)\Delta t\right)\mathbf{k}$$

괄호 안의 각 합은 $f, g, h$ 의 **리만 합** 그 자체입니다. $n \to \infty$ 일 때 벡터의 극한은 성분별 극한이므로, 각 괄호가 $\int_a^b f\,dt$, $\int_a^b g\,dt$, $\int_a^b h\,dt$ 로 수렴해요.

도함수 때와 똑같은 이유입니다: 벡터 연산과 극한이 모두 성분별로 작동하기 때문에 적분도 성분별로 내려갑니다.`
        },
        {
          type: "worked", title: "예제 5: 부정적분과 정적분",
          problem: R`$\mathbf{r}(t) = 2\cos t\,\mathbf{i} + \sin t\,\mathbf{j} + 2t\,\mathbf{k}$ 일 때

(a) 부정적분 $\displaystyle\int \mathbf{r}(t)\,dt$ 를 구하세요.

(b) 정적분 $\displaystyle\int_0^{\pi/2} \mathbf{r}(t)\,dt$ 를 구하세요.`,
          steps: [
            {
              ask: "(a) 세 성분을 각각 적분하면 무엇이 될까요? 적분상수는 어떻게 쓸까요?",
              body: R`성분별로 적분합니다.

- $\displaystyle\int 2\cos t\,dt = 2\sin t$
- $\displaystyle\int \sin t\,dt = -\cos t$
- $\displaystyle\int 2t\,dt = t^2$

$$\int \mathbf{r}(t)\,dt = 2\sin t\,\mathbf{i} - \cos t\,\mathbf{j} + t^2\,\mathbf{k} + \mathbf{C}$$

성분마다 생기는 상수 세 개를 한꺼번에 **벡터상수** $\mathbf{C}$ 로 씁니다.`
            },
            {
              ask: "(b) 정적분에서는 원시함수에 무엇을 대입해서 빼야 할까요? 벡터상수 C 는 필요할까요?",
              body: R`기본 정리에 따라 위끝 $\pi/2$ 와 아래끝 $0$ 을 대입해 뺍니다. 정적분에서는 $\mathbf{C}$ 가 서로 지워지므로 쓰지 않아도 돼요.

$$\int_0^{\pi/2}\mathbf{r}(t)\,dt = \Big[2\sin t\,\mathbf{i} - \cos t\,\mathbf{j} + t^2\,\mathbf{k}\Big]_0^{\pi/2}$$`
            },
            {
              ask: "각 성분의 값을 계산해 보세요. 특히 j 성분의 부호에 주의하세요.",
              body: R`- $\mathbf{i}$: $2\sin\tfrac{\pi}{2} - 2\sin 0 = 2 - 0 = 2$
- $\mathbf{j}$: $\left(-\cos\tfrac{\pi}{2}\right) - (-\cos 0) = 0 - (-1) = 1$
- $\mathbf{k}$: $\left(\tfrac{\pi}{2}\right)^2 - 0 = \tfrac{\pi^2}{4}$

$$\int_0^{\pi/2}\mathbf{r}(t)\,dt = 2\,\mathbf{i} + \mathbf{j} + \frac{\pi^2}{4}\,\mathbf{k}$$

$\mathbf{j}$ 성분에서 아래끝의 $-\cos 0 = -1$ 을 **빼기** 때문에 $+1$ 이 되는 것을 놓치지 마세요.`
            }
          ],
          answer: R`(a) $2\sin t\,\mathbf{i} - \cos t\,\mathbf{j} + t^2\,\mathbf{k} + \mathbf{C}$

(b) $2\,\mathbf{i} + \mathbf{j} + \dfrac{\pi^2}{4}\,\mathbf{k}$`
        },
        {
          type: "check",
          q: {
            id: "calc-08-c07", kind: "num", level: 2, tag: "적분",
            q: R`$\displaystyle\int_0^2 \left(3t^2\,\mathbf{i} + 4t\,\mathbf{j} - 4t^3\,\mathbf{k}\right)dt$ 의 $\mathbf{k}$ 성분을 구하세요.`,
            answer: -16, tol: 0.01,
            explain: R`성분별로 적분합니다.

- $\mathbf{i}$: $\big[t^3\big]_0^2 = 8$
- $\mathbf{j}$: $\big[2t^2\big]_0^2 = 8$
- $\mathbf{k}$: $\big[-t^4\big]_0^2 = -16$

결과는 $8\,\mathbf{i} + 8\,\mathbf{j} - 16\,\mathbf{k}$ 이고 $\mathbf{k}$ 성분은 $-16$ 입니다.`,
            hints: [R`$\mathbf{k}$ 성분만 필요하므로 $\int_0^2 (-4t^3)\,dt$ 만 계산하면 돼요.`],
            trap: R`부호 $-$ 를 빠뜨려 $16$ 으로 답하거나, 적분 대신 미분해서 $-12t^2$ 에 $2$ 를 넣는 실수.`
          }
        },
        {
          type: "worked", title: "유형: 도함수와 한 점의 값으로 r(t) 복원하기",
          problem: R`$\mathbf{r}'(t) = 6t^2\,\mathbf{i} - 4t\,\mathbf{j} + 4t^3\,\mathbf{k}$ 이고 $\mathbf{r}(1) = 2\,\mathbf{i} + 5\,\mathbf{j}$ 일 때 $\mathbf{r}(t)$ 를 구하세요. (연습문제에 나오는 초기값 유형이에요.)`,
          steps: [
            {
              ask: "r'(t) 에서 r(t) 로 돌아가려면 무엇을 해야 할까요?",
              body: R`$\mathbf{r}$ 은 $\mathbf{r}'$ 의 원시함수이므로 **부정적분**을 합니다. 성분별로 적분하면

$$\mathbf{r}(t) = 2t^3\,\mathbf{i} - 2t^2\,\mathbf{j} + t^4\,\mathbf{k} + \mathbf{C}$$

벡터상수 $\mathbf{C}$ 를 반드시 붙여야 해요. 이것을 정하는 데 조건 $\mathbf{r}(1)$ 이 쓰입니다.`
            },
            {
              ask: "조건 r(1) = 2i + 5j 를 어떻게 써서 C 를 구할까요?",
              body: R`$t = 1$ 을 대입하면 $\mathbf{r}(1) = 2\,\mathbf{i} - 2\,\mathbf{j} + \mathbf{k} + \mathbf{C}$ 이고, 이것이 $2\,\mathbf{i} + 5\,\mathbf{j} + 0\,\mathbf{k}$ 와 같아야 해요.

$$\mathbf{C} = (2\,\mathbf{i} + 5\,\mathbf{j}) - (2\,\mathbf{i} - 2\,\mathbf{j} + \mathbf{k}) = 7\,\mathbf{j} - \mathbf{k}$$

주어진 조건에 $\mathbf{k}$ 성분이 없다는 것은 $\mathbf{k}$ 성분이 $0$ 이라는 뜻입니다. 빼먹지 않도록 주의하세요.`
            },
            {
              ask: "C 를 넣어 최종 식을 쓰고 검산해 보세요.",
              body: R`$$\mathbf{r}(t) = 2t^3\,\mathbf{i} + (7 - 2t^2)\,\mathbf{j} + (t^4 - 1)\,\mathbf{k}$$

검산 두 가지:

- 미분하면 $6t^2\,\mathbf{i} - 4t\,\mathbf{j} + 4t^3\,\mathbf{k}$ 로 주어진 $\mathbf{r}'(t)$ 와 같아요.
- $t=1$ 을 넣으면 $2\,\mathbf{i} + 5\,\mathbf{j} + 0\,\mathbf{k}$ 로 조건과 일치합니다.`
            }
          ],
          answer: R`$\mathbf{r}(t) = 2t^3\,\mathbf{i} + (7 - 2t^2)\,\mathbf{j} + (t^4 - 1)\,\mathbf{k}$`
        }
      ],
      keypoints: [
        R`벡터함수의 도함수는 $\mathbf{r}'(t) = \lim_{h\to0}\dfrac{\mathbf{r}(t+h)-\mathbf{r}(t)}{h}$ 로 정의하며, 할선벡터의 극한이라 곡선의 접선 방향($t$ 가 증가하는 방향)을 가리킨다.`,
        R`$\mathbf{r}(t) = \langle f, g, h \rangle$ 이면 $\mathbf{r}'(t) = \langle f', g', h' \rangle$, 즉 성분별로 미분한다(이계도함수 $\mathbf{r}''$ 도 마찬가지).`,
        R`$\mathbf{r}'(t) \neq \mathbf{0}$ 일 때 $\mathbf{r}'(t)$ 가 접선벡터이고, 단위접선벡터는 $\mathbf{T}(t) = \mathbf{r}'(t)/|\mathbf{r}'(t)|$ 이다.`,
        R`접선의 매개변수방정식은 점 $\mathbf{r}(t_0)$ 와 방향벡터 $\mathbf{r}'(t_0)$ 로 세운다: 먼저 점에 해당하는 $t_0$ 를 찾는다.`,
        R`미분법칙: 합, 스칼라배, $(f\mathbf{u})' = f'\mathbf{u} + f\mathbf{u}'$, $(\mathbf{u}\cdot\mathbf{v})' = \mathbf{u}'\cdot\mathbf{v} + \mathbf{u}\cdot\mathbf{v}'$, $(\mathbf{u}\times\mathbf{v})' = \mathbf{u}'\times\mathbf{v} + \mathbf{u}\times\mathbf{v}'$ (순서 유지), 연쇄법칙 $[\mathbf{u}(f(t))]' = f'(t)\mathbf{u}'(f(t))$.`,
        R`$|\mathbf{r}(t)|$ 가 상수이면 $\mathbf{r}\cdot\mathbf{r} = c^2$ 을 미분해 $\mathbf{r}'(t)\cdot\mathbf{r}(t) = 0$, 즉 구면 위 곡선의 접선벡터는 위치벡터와 직교한다.`,
        R`벡터함수의 정적분은 성분별로 적분하며 결과는 벡터이고, 기본 정리 $\int_a^b \mathbf{r}\,dt = \mathbf{R}(b) - \mathbf{R}(a)$ 가 성립한다.`,
        R`부정적분의 적분상수는 벡터상수 $\mathbf{C}$ 이고, $\mathbf{r}'(t)$ 와 한 점에서의 값 $\mathbf{r}(t_0)$ 가 주어지면 $\mathbf{C}$ 를 정해 $\mathbf{r}(t)$ 를 복원할 수 있다.`
      ],
      bank: [
        {
          id: "calc-08-b01", kind: "mcq", level: 1, tag: "도함수 계산",
          q: R`벡터함수 $\mathbf{r}$ 의 도함수 $\mathbf{r}'(t)$ 의 정의로 옳은 것은?`,
          choices: [
            R`$\displaystyle\lim_{h\to0}\,[\mathbf{r}(t+h) - \mathbf{r}(t)]$`,
            R`$\displaystyle\lim_{h\to0}\frac{\mathbf{r}(t+h) - \mathbf{r}(t)}{h}$`,
            R`$\displaystyle\lim_{h\to0}\frac{|\mathbf{r}(t+h)| - |\mathbf{r}(t)|}{h}$`,
            R`$\displaystyle\lim_{h\to0}\frac{\mathbf{r}(t+h)}{h}$`
          ],
          answer: 1,
          explain: R`도함수는 할선벡터 $\mathbf{r}(t+h) - \mathbf{r}(t)$ 를 $h$ 로 나눈 것의 극한입니다: $\mathbf{r}'(t) = \displaystyle\lim_{h\to0}\frac{\mathbf{r}(t+h)-\mathbf{r}(t)}{h}$. 분자는 벡터의 뺄셈이고 결과도 벡터예요.`
        },
        {
          id: "calc-08-b02", kind: "mcq", level: 1, tag: "도함수 계산",
          q: R`$\mathbf{r}(t) = \left\langle \sqrt{t+1},\ 5,\ \dfrac{1}{t^3} \right\rangle$ 의 도함수는?`,
          choices: [
            R`$\left\langle \dfrac{1}{2\sqrt{t+1}},\ 5,\ -\dfrac{3}{t^4} \right\rangle$`,
            R`$\left\langle \dfrac{1}{2\sqrt{t+1}},\ 0,\ -\dfrac{3}{t^2} \right\rangle$`,
            R`$\left\langle \dfrac{1}{2\sqrt{t+1}},\ 0,\ -\dfrac{3}{t^4} \right\rangle$`,
            R`$\left\langle \dfrac{1}{\sqrt{t+1}},\ 0,\ -\dfrac{3}{t^4} \right\rangle$`
          ],
          answer: 2,
          explain: R`성분별로 미분합니다. $\left((t+1)^{1/2}\right)' = \tfrac12(t+1)^{-1/2} = \dfrac{1}{2\sqrt{t+1}}$, 상수 $5$ 의 미분은 $0$, $(t^{-3})' = -3t^{-4} = -\dfrac{3}{t^4}$.`,
          hints: [R`$\sqrt{t+1} = (t+1)^{1/2}$, $\dfrac{1}{t^3} = t^{-3}$ 으로 바꿔 거듭제곱 미분을 써요.`]
        },
        {
          id: "calc-08-b03", kind: "num", level: 1, tag: "도함수 계산",
          q: R`$\mathbf{r}(t) = \langle t^3,\ e^{2t},\ 5 \rangle$ 일 때 $\mathbf{r}'(2)$ 의 $x$ 성분(첫 번째 성분)을 구하세요.`,
          answer: 12, tol: 0.01,
          explain: R`$\mathbf{r}'(t) = \langle 3t^2, 2e^{2t}, 0 \rangle$ 이므로 첫 번째 성분은 $3(2)^2 = 12$ 입니다.`,
          trap: R`미분하지 않고 $\mathbf{r}(2)$ 의 성분 $2^3 = 8$ 을 답하는 실수.`
        },
        {
          id: "calc-08-b04", kind: "short", level: 1, tag: "접선벡터",
          q: R`접선벡터 $\mathbf{r}'(t)$ 와 단위접선벡터 $\mathbf{T}(t)$ 는 각각 무엇이고 어떻게 다른가요? 또 단위접선벡터를 정의할 때 왜 $\mathbf{r}'(t) \neq \mathbf{0}$ 이라는 조건이 필요한지 설명하세요.`,
          answer: R`$\mathbf{r}'(t)$ 는 곡선 위의 점에서 접선 방향($t$ 가 증가하는 방향)을 가리키는 접선벡터이고, 길이는 매개변수화에 따라 달라질 수 있어요. 단위접선벡터는 이것을 자기 크기로 나누어 길이를 $1$ 로 만든 $\mathbf{T}(t) = \dfrac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|}$ 로, 방향 정보만 담습니다. $\mathbf{r}'(t) = \mathbf{0}$ 이면 크기가 $0$ 이라 나눌 수 없고, 영벡터는 방향이 없어서 접선 방향을 정해 주지 못하므로 조건이 필요해요.`,
          explain: R`핵심은 세 가지예요. (1) $\mathbf{r}'(t)$ 는 접선 방향을 가리키는 벡터이고 길이는 제각각이다. (2) $\mathbf{T}(t) = \mathbf{r}'(t)/|\mathbf{r}'(t)|$ 는 그 방향만 남긴 길이 $1$ 짜리 벡터다. (3) $\mathbf{r}'(t) = \mathbf{0}$ 이면 $0$ 으로 나누게 되고 방향도 없으므로 정의할 수 없다.`,
          rubric: [
            "r'(t)가 접선 방향(t가 증가하는 방향)을 가리키는 벡터임을 말했다",
            "T(t) = r'(t)/|r'(t)| 이고 길이가 1임을 말했다",
            "r'(t) = 0 이면 크기 0으로 나눌 수 없고 방향이 정해지지 않음을 말했다"
          ]
        },
        {
          id: "calc-08-b05", kind: "mcq", level: 1, tag: "미분법칙",
          q: R`미분가능한 벡터함수 $\mathbf{u}, \mathbf{v}$ 에 대하여 $\dfrac{d}{dt}[\mathbf{u}(t)\times\mathbf{v}(t)]$ 와 항상 같은 것은?`,
          choices: [
            R`$\mathbf{u}'(t)\times\mathbf{v}'(t)$`,
            R`$\mathbf{u}'(t)\times\mathbf{v}(t) + \mathbf{v}'(t)\times\mathbf{u}(t)$`,
            R`$\mathbf{u}'(t)\times\mathbf{v}(t) + \mathbf{u}(t)\times\mathbf{v}'(t)$`,
            R`$\mathbf{u}'(t)\times\mathbf{v}(t) - \mathbf{u}(t)\times\mathbf{v}'(t)$`
          ],
          answer: 2,
          explain: R`공식 5: $\dfrac{d}{dt}[\mathbf{u}\times\mathbf{v}] = \mathbf{u}'\times\mathbf{v} + \mathbf{u}\times\mathbf{v}'$. 곱의 법칙과 같은 모양이지만, 외적은 순서를 바꾸면 부호가 바뀌므로 $\mathbf{u}$ 쪽은 왼쪽, $\mathbf{v}$ 쪽은 오른쪽에 그대로 두어야 해요.`,
          trap: R`외적의 순서를 바꿔 쓰는 실수. $\mathbf{v}'\times\mathbf{u} = -\,\mathbf{u}\times\mathbf{v}'$ 입니다.`
        },
        {
          id: "calc-08-b06", kind: "mcq", level: 1, tag: "적분",
          q: R`연속인 벡터함수 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ 의 정적분 $\displaystyle\int_a^b \mathbf{r}(t)\,dt$ 에 대한 설명으로 옳은 것은?`,
          choices: [
            R`곡선 아래의 넓이를 나타내는 하나의 실수(스칼라)이다`,
            R`$f, g, h$ 를 각각 $a$ 부터 $b$ 까지 적분한 값을 성분으로 갖는 벡터이다`,
            R`$|\mathbf{r}(t)|$ 를 $a$ 부터 $b$ 까지 적분한 값이다`,
            R`항상 $\mathbf{r}(b) - \mathbf{r}(a)$ 와 같다`
          ],
          answer: 1,
          explain: R`$\displaystyle\int_a^b \mathbf{r}\,dt = \left\langle \int_a^b f\,dt,\ \int_a^b g\,dt,\ \int_a^b h\,dt \right\rangle$ 로, 성분별로 적분한 **벡터**입니다. 기본 정리로는 원시함수 $\mathbf{R}$ ($\mathbf{R}' = \mathbf{r}$)을 써서 $\mathbf{R}(b) - \mathbf{R}(a)$ 예요.`
        },
        {
          id: "calc-08-b07", kind: "num", level: 2, tag: "접선벡터",
          q: R`$\mathbf{r}(t) = \langle 2t^2,\ 4t,\ 2t^3 + t \rangle$ 일 때, $t = 1$ 에서의 단위접선벡터 $\mathbf{T}(1)$ 의 $z$ 성분(세 번째 성분)을 구하세요. (소수 셋째 자리까지)`,
          answer: 0.778, tol: 0.002,
          explain: R`$\mathbf{r}'(t) = \langle 4t, 4, 6t^2 + 1 \rangle$ 이므로 $\mathbf{r}'(1) = \langle 4, 4, 7 \rangle$.

$|\mathbf{r}'(1)| = \sqrt{16 + 16 + 49} = \sqrt{81} = 9$.

$\mathbf{T}(1) = \left\langle \tfrac49, \tfrac49, \tfrac79 \right\rangle$ 이므로 $z$ 성분은 $\tfrac79 \approx 0.778$.`,
          hints: [R`$\mathbf{r}'(1)$ 을 구한 뒤 그 크기로 나눠요.`, R`$\mathbf{r}'(1) = \langle 4, 4, 7 \rangle$ 이고 크기는 $9$ 입니다.`],
          trap: R`$\mathbf{r}(1) = \langle 2, 4, 3 \rangle$ 을 정규화하는 실수. 단위접선벡터는 위치벡터가 아니라 **도함수**를 정규화한 것이에요.`
        },
        {
          id: "calc-08-b08", kind: "mcq", level: 2, tag: "접선벡터",
          q: R`$\mathbf{r}(t) = \langle \sin 2t,\ 3e^{t},\ 6te^{t} \rangle$ 일 때 $t = 0$ 에서의 단위접선벡터 $\mathbf{T}(0)$ 는?`,
          choices: [
            R`$\langle 2,\ 3,\ 6 \rangle$`,
            R`$\langle 0,\ 1,\ 0 \rangle$`,
            R`$\left\langle \tfrac{2}{\sqrt{13}},\ \tfrac{3}{\sqrt{13}},\ 0 \right\rangle$`,
            R`$\left\langle \tfrac27,\ \tfrac37,\ \tfrac67 \right\rangle$`
          ],
          answer: 3,
          explain: R`$\mathbf{r}'(t) = \langle 2\cos 2t,\ 3e^t,\ 6e^t + 6te^t \rangle$ (셋째 성분은 곱의 법칙).

$\mathbf{r}'(0) = \langle 2, 3, 6 \rangle$, $|\mathbf{r}'(0)| = \sqrt{4 + 9 + 36} = 7$.

$\mathbf{T}(0) = \left\langle \tfrac27, \tfrac37, \tfrac67 \right\rangle$.`,
          hints: [R`$6te^t$ 는 곱의 법칙으로 미분해요.`, R`$\mathbf{r}'(0)$ 의 크기는 $\sqrt{2^2+3^2+6^2}$ 입니다.`]
        },
        {
          id: "calc-08-b09", kind: "num", level: 2, tag: "접선의 방정식",
          q: R`곡선 $x = e^{2t}\cos t$, $y = e^{2t}\sin t$, $z = e^{2t}$ 위의 점 $(1, 0, 1)$ 에서의 접선 위에서, $y$ 좌표가 $3$ 인 점의 $x$ 좌표를 구하세요.`,
          answer: 7, tol: 0.01,
          explain: R`$z = e^{2t} = 1$ 에서 $t_0 = 0$ ($x = 1$, $y = 0$ 도 확인).

곱의 법칙으로 미분하면
$\mathbf{r}'(t) = \langle 2e^{2t}\cos t - e^{2t}\sin t,\ 2e^{2t}\sin t + e^{2t}\cos t,\ 2e^{2t} \rangle$, 따라서 $\mathbf{r}'(0) = \langle 2, 1, 2 \rangle$.

접선: $x = 1 + 2s$, $y = s$, $z = 1 + 2s$.

$y = 3$ 이면 $s = 3$ 이고 $x = 1 + 6 = 7$.`,
          hints: [R`$z$ 좌표로 $t_0$ 를 찾아요.`, R`$\mathbf{r}'(0) = \langle 2, 1, 2 \rangle$ 입니다. 접선의 방정식을 세우고 $y = 3$ 이 되는 매개변수 값을 구하세요.`],
          trap: R`$e^{2t}\cos t$ 를 미분할 때 곱의 법칙의 한 항만 써서 방향벡터를 $\langle 2, 0, 2 \rangle$ 나 $\langle 0, 1, 2 \rangle$ 로 구하는 실수.`
        },
        {
          id: "calc-08-b10", kind: "mcq", level: 2, tag: "접선의 방정식",
          q: R`곡선 $x = 2\sqrt{t}$, $y = t^2 - t$, $z = t^3 + 1$ 위의 점 $(2, 0, 2)$ 에서의 접선의 매개변수방정식은? (접선의 매개변수는 $s$)`,
          choices: [
            R`$x = 1 + 2s,\quad y = 1,\quad z = 3 + 2s$`,
            R`$x = 2 + s,\quad y = s,\quad z = 2 + 3s$`,
            R`$x = 2 + 2s,\quad y = 0,\quad z = 2 + 2s$`,
            R`$x = 2 + s,\quad y = s,\quad z = 2 + 4s$`
          ],
          answer: 1,
          explain: R`$x = 2\sqrt t = 2$ 에서 $t_0 = 1$ ($y = 0$, $z = 2$ 확인).

$\mathbf{r}'(t) = \left\langle \dfrac{1}{\sqrt t},\ 2t - 1,\ 3t^2 \right\rangle$, $\mathbf{r}'(1) = \langle 1, 1, 3 \rangle$.

점 $(2, 0, 2)$ 를 지나고 $\langle 1, 1, 3 \rangle$ 에 평행: $x = 2 + s$, $y = s$, $z = 2 + 3s$.`,
          hints: [R`먼저 점 $(2,0,2)$ 가 $t$ 가 얼마일 때인지 찾아요.`, R`방향벡터는 $\mathbf{r}'(1)$, 지나는 점은 $(2, 0, 2)$ 입니다.`]
        },
        {
          id: "calc-08-b11", kind: "mcq", level: 2, tag: "도함수 계산",
          q: R`$\mathbf{r}(t) = \langle t^2,\ t,\ t^3 \rangle$ 일 때 $\mathbf{r}'(1)\times\mathbf{r}''(1)$ 은?`,
          choices: [
            R`$\langle 6,\ 6,\ -2 \rangle$`,
            R`$22$`,
            R`$\langle 6,\ -6,\ -2 \rangle$`,
            R`$\langle -6,\ 6,\ 2 \rangle$`
          ],
          answer: 2,
          explain: R`$\mathbf{r}'(t) = \langle 2t, 1, 3t^2 \rangle$, $\mathbf{r}''(t) = \langle 2, 0, 6t \rangle$ 이므로 $\mathbf{r}'(1) = \langle 2, 1, 3 \rangle$, $\mathbf{r}''(1) = \langle 2, 0, 6 \rangle$.

$$\langle 2,1,3 \rangle\times\langle 2,0,6 \rangle = \langle 1\cdot6 - 3\cdot0,\ 3\cdot2 - 2\cdot6,\ 2\cdot0 - 1\cdot2 \rangle = \langle 6, -6, -2 \rangle$$

검산: 결과는 두 벡터 모두와 수직이어야 해요. $\langle 6,-6,-2\rangle\cdot\langle 2,1,3\rangle = 12 - 6 - 6 = 0$, $\langle 6,-6,-2\rangle\cdot\langle 2,0,6\rangle = 12 - 12 = 0$.`,
          hints: [R`$\mathbf{r}'$ 과 $\mathbf{r}''$ 을 구해 $t=1$ 을 대입한 뒤 외적을 계산해요.`]
        },
        {
          id: "calc-08-b12", kind: "num", level: 2, tag: "미분법칙",
          q: R`$\mathbf{u}(t) = \langle \cos t,\ \sin t,\ t \rangle$, $\mathbf{v}(t) = \langle t,\ \sin t,\ \cos t \rangle$ 일 때 $\dfrac{d}{dt}[\mathbf{u}(t)\cdot\mathbf{v}(t)]$ 의 $t = \pi$ 에서의 값을 구하세요.`,
          answer: -2, tol: 0.01,
          explain: R`**방법 1 (공식 4).** $\mathbf{u}' = \langle -\sin t, \cos t, 1 \rangle$, $\mathbf{v}' = \langle 1, \cos t, -\sin t \rangle$. $t = \pi$ 에서 $\mathbf{u} = \langle -1, 0, \pi \rangle$, $\mathbf{v} = \langle \pi, 0, -1 \rangle$, $\mathbf{u}' = \langle 0, -1, 1 \rangle$, $\mathbf{v}' = \langle 1, -1, 0 \rangle$.

$\mathbf{u}'\cdot\mathbf{v} + \mathbf{u}\cdot\mathbf{v}' = (0 + 0 - 1) + (-1 + 0 + 0) = -2$.

**방법 2 (먼저 내적).** $\mathbf{u}\cdot\mathbf{v} = 2t\cos t + \sin^2 t$ 이고, 미분하면 $2\cos t - 2t\sin t + 2\sin t\cos t$. $t = \pi$ 에서 $-2 - 0 + 0 = -2$. 두 방법의 결과가 같아요.`,
          hints: [R`공식 4를 쓰거나, 먼저 내적을 계산해 실숫값 함수로 만든 뒤 미분해도 돼요.`, R`$\mathbf{u}\cdot\mathbf{v} = 2t\cos t + \sin^2 t$ 입니다.`]
        },
        {
          id: "calc-08-b13", kind: "mcq", level: 2, tag: "적분",
          q: R`$\displaystyle\int \left(e^{2t}\,\mathbf{i} + 3t^2\,\mathbf{j} + \ln t\,\mathbf{k}\right)dt$ 를 구하면? ($\mathbf{C}$ 는 벡터상수)`,
          choices: [
            R`$\tfrac12 e^{2t}\,\mathbf{i} + t^3\,\mathbf{j} + (t\ln t - t)\,\mathbf{k} + \mathbf{C}$`,
            R`$2e^{2t}\,\mathbf{i} + 6t\,\mathbf{j} + \dfrac{1}{t}\,\mathbf{k} + \mathbf{C}$`,
            R`$\tfrac12 e^{2t}\,\mathbf{i} + t^3\,\mathbf{j} + \dfrac{1}{t}\,\mathbf{k} + \mathbf{C}$`,
            R`$e^{2t}\,\mathbf{i} + t^3\,\mathbf{j} + (t\ln t - t)\,\mathbf{k} + \mathbf{C}$`
          ],
          answer: 0,
          explain: R`성분별로 적분합니다. $\int e^{2t}\,dt = \tfrac12 e^{2t}$, $\int 3t^2\,dt = t^3$, $\int \ln t\,dt = t\ln t - t$ (부분적분: $u = \ln t$, $dv = dt$). 적분상수는 벡터상수 $\mathbf{C}$ 하나로 씁니다.

검산: $(t\ln t - t)' = \ln t + 1 - 1 = \ln t$.`,
          hints: [R`$\ln t$ 의 적분은 부분적분으로 구해요.`]
        },
        {
          id: "calc-08-b14", kind: "num", level: 2, tag: "적분",
          q: R`$\displaystyle\int_0^1 \left(\frac{3}{t+1}\,\mathbf{i} + \frac{4}{t^2+1}\,\mathbf{j} + \frac{2t}{t^2+1}\,\mathbf{k}\right)dt$ 의 $\mathbf{j}$ 성분을 구하세요. (소수 둘째 자리까지)`,
          answer: 3.14, tol: 0.01,
          explain: R`$\mathbf{j}$ 성분: $\displaystyle\int_0^1 \frac{4}{t^2+1}\,dt = 4\big[\tan^{-1} t\big]_0^1 = 4\cdot\frac{\pi}{4} = \pi \approx 3.14$.

참고로 나머지 성분은 $\mathbf{i}$: $3\big[\ln(t+1)\big]_0^1 = 3\ln 2$, $\mathbf{k}$: $\big[\ln(t^2+1)\big]_0^1 = \ln 2$ 이므로 전체 결과는 $3\ln 2\,\mathbf{i} + \pi\,\mathbf{j} + \ln 2\,\mathbf{k}$ 입니다.`,
          hints: [R`$\dfrac{1}{t^2+1}$ 의 원시함수는 $\tan^{-1} t$ 예요.`],
          trap: R`$\dfrac{1}{t^2+1}$ 을 $\ln(t^2+1)$ 로 적분하는 실수. 분자에 $2t$ 가 있을 때만 로그가 됩니다.`
        },
        {
          id: "calc-08-b15", kind: "num", level: 2, tag: "적분",
          q: R`$\mathbf{r}'(t) = \langle 4e^{2t},\ 3t^2,\ 2 \rangle$ 이고 $\mathbf{r}(0) = \langle 1, 0, 5 \rangle$ 일 때, $\mathbf{r}(1)$ 의 $x$ 성분을 구하세요. (소수 둘째 자리까지)`,
          answer: 13.78, tol: 0.01,
          explain: R`적분하면 $\mathbf{r}(t) = \langle 2e^{2t},\ t^3,\ 2t \rangle + \mathbf{C}$.

$\mathbf{r}(0) = \langle 2, 0, 0 \rangle + \mathbf{C} = \langle 1, 0, 5 \rangle$ 이므로 $\mathbf{C} = \langle -1, 0, 5 \rangle$.

$\mathbf{r}(t) = \langle 2e^{2t} - 1,\ t^3,\ 2t + 5 \rangle$ 이고 $x$ 성분은 $2e^{2} - 1 \approx 13.78$.

검산: $\mathbf{r}(1) = \mathbf{r}(0) + \int_0^1 \mathbf{r}'(t)\,dt$ 의 $x$ 성분은 $1 + \big[2e^{2t}\big]_0^1 = 1 + 2e^2 - 2 = 2e^2 - 1$.`,
          hints: [R`$\mathbf{r}'$ 을 적분한 뒤 벡터상수 $\mathbf{C}$ 를 $\mathbf{r}(0)$ 으로 정해요.`, R`$e^0 = 1$ 이라서 $2e^{2t}$ 는 $t=0$ 에서 $0$ 이 아니라 $2$ 입니다.`],
          trap: R`$t=0$ 에서 $2e^{2t}$ 가 $0$ 이라고 생각해 $\mathbf{C} = \langle 1, 0, 5 \rangle$ 로 두면 $2e^2 + 1 \approx 15.78$ 이 나와요. 또 $\mathbf{C}$ 를 아예 빼먹으면 $2e^2 \approx 14.78$ 이 됩니다.`
        },
        {
          id: "calc-08-b16", kind: "mcq", level: 3, tag: "미분법칙",
          q: R`$\mathbf{a}, \mathbf{b}, \mathbf{c}$ 가 상수벡터일 때, $\mathbf{r}(t) = t\,\mathbf{a}\times(\mathbf{b} + t\,\mathbf{c})$ 의 도함수 $\mathbf{r}'(t)$ 는?`,
          choices: [
            R`$\mathbf{a}\times\mathbf{b} + 2t\,(\mathbf{a}\times\mathbf{c})$`,
            R`$\mathbf{a}\times\mathbf{b} + t\,(\mathbf{a}\times\mathbf{c})$`,
            R`$\mathbf{a}\times\mathbf{c}$`,
            R`$\mathbf{0}$`
          ],
          answer: 0,
          explain: R`**방법 1 (공식 5).** $\mathbf{u}(t) = t\,\mathbf{a}$, $\mathbf{v}(t) = \mathbf{b} + t\,\mathbf{c}$ 로 두면 $\mathbf{u}' = \mathbf{a}$, $\mathbf{v}' = \mathbf{c}$.

$\mathbf{r}' = \mathbf{u}'\times\mathbf{v} + \mathbf{u}\times\mathbf{v}' = \mathbf{a}\times(\mathbf{b} + t\,\mathbf{c}) + t\,\mathbf{a}\times\mathbf{c} = \mathbf{a}\times\mathbf{b} + 2t\,(\mathbf{a}\times\mathbf{c})$.

**방법 2 (먼저 전개).** $\mathbf{r}(t) = t\,(\mathbf{a}\times\mathbf{b}) + t^2\,(\mathbf{a}\times\mathbf{c})$ 이고, $\mathbf{a}\times\mathbf{b}$, $\mathbf{a}\times\mathbf{c}$ 는 상수벡터이므로 미분하면 $\mathbf{a}\times\mathbf{b} + 2t\,(\mathbf{a}\times\mathbf{c})$. 같은 결과예요.`,
          hints: [R`외적의 미분공식을 쓰거나, 먼저 외적을 분배해서 $t$ 의 다항식 꼴로 만들어요.`, R`전개하면 $t\,(\mathbf{a}\times\mathbf{b}) + t^2\,(\mathbf{a}\times\mathbf{c})$ 입니다.`]
        },
        {
          id: "calc-08-b17", kind: "num", level: 3, tag: "접선의 방정식",
          q: R`곡선 $\mathbf{r}(t) = \langle 2\cos t,\ 2\sin t,\ e^{t} \rangle$ $(0 \le t \le \pi)$ 위의 점 중에서, 그 점에서의 접선이 평면 $x + y = 1$ 과 평행한 점의 $z$ 좌표를 구하세요. (소수 둘째 자리까지)`,
          answer: 2.19, tol: 0.01,
          explain: R`직선이 평면과 평행하려면 직선의 방향벡터가 평면의 **법선벡터와 수직**이어야 해요. 평면 $x + y = 1$ 의 법선벡터는 $\mathbf{n} = \langle 1, 1, 0 \rangle$.

$\mathbf{r}'(t) = \langle -2\sin t,\ 2\cos t,\ e^t \rangle$ 이므로

$$\mathbf{r}'(t)\cdot\mathbf{n} = -2\sin t + 2\cos t = 0 \ \Rightarrow\ \tan t = 1 \ \Rightarrow\ t = \frac{\pi}{4} \quad (0 \le t \le \pi)$$

그 점은 $\left(\sqrt2, \sqrt2, e^{\pi/4}\right)$ 이고 $z = e^{\pi/4} \approx 2.19$ 입니다.`,
          hints: [R`접선이 평면과 평행 $\Leftrightarrow$ 접선벡터 $\mathbf{r}'(t)$ 가 평면의 법선벡터와 수직.`, R`$\mathbf{r}'(t)\cdot\langle 1, 1, 0 \rangle = 0$ 을 $0 \le t \le \pi$ 에서 풀어요.`],
          trap: R`접선벡터를 법선벡터와 **평행**하게 놓는 실수. 평면과 평행한 직선은 법선에 **수직**입니다.`
        },
        {
          id: "calc-08-b18", kind: "num", level: 3, tag: "접선벡터",
          q: R`두 곡선 $\mathbf{r}_1(t) = \langle t,\ t^2,\ t^3 \rangle$ 과 $\mathbf{r}_2(t) = \langle \sin t,\ \sin 2t,\ 2t \rangle$ 는 원점에서 만납니다. 원점에서 두 곡선이 이루는 교각(두 접선벡터 사이의 각)을 도($^\circ$) 단위로 구하세요. (소수 첫째 자리까지)`,
          answer: 70.5, tol: 0.1, unit: "°",
          explain: R`두 곡선 모두 $t = 0$ 일 때 원점을 지나요. 곡선의 교각은 교점에서의 **접선벡터 사이의 각**입니다.

$\mathbf{r}_1'(t) = \langle 1, 2t, 3t^2 \rangle \Rightarrow \mathbf{r}_1'(0) = \langle 1, 0, 0 \rangle$

$\mathbf{r}_2'(t) = \langle \cos t, 2\cos 2t, 2 \rangle \Rightarrow \mathbf{r}_2'(0) = \langle 1, 2, 2 \rangle$

$$\cos\theta = \frac{\langle 1,0,0\rangle\cdot\langle 1,2,2\rangle}{(1)(3)} = \frac13 \ \Rightarrow\ \theta = \cos^{-1}\frac13 \approx 70.5^\circ$$`,
          hints: [R`두 곡선이 원점을 지나는 $t$ 값을 각각 찾고, 그때의 접선벡터를 구해요.`, R`$\cos\theta = \dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$ 에 $\langle 1,0,0\rangle$, $\langle 1,2,2\rangle$ 를 넣으세요.`],
          trap: R`위치벡터 $\mathbf{r}_1(0)$, $\mathbf{r}_2(0)$ (둘 다 영벡터)로 각을 구하려 하거나, 계산기를 라디안 모드로 두어 $1.23$ 을 답하는 실수.`
        },
        {
          id: "calc-08-b19", kind: "mcq", level: 3, tag: "미분법칙",
          q: R`$\mathbf{r}(t) = \mathbf{u}(t)\times\mathbf{v}(t)$ 이고 $\mathbf{u}(1) = \langle 1, 0, 2 \rangle$, $\mathbf{u}'(1) = \langle 0, 3, 1 \rangle$, $\mathbf{v}(t) = \langle t, t^2, t^3 \rangle$ 일 때 $\mathbf{r}'(1)$ 은?`,
          choices: [
            R`$\langle 7,\ 1,\ -3 \rangle$`,
            R`$\langle 2,\ 1,\ -3 \rangle$`,
            R`$\langle 6,\ 2,\ -5 \rangle$`,
            R`$\langle -2,\ 0,\ -1 \rangle$`
          ],
          answer: 3,
          explain: R`공식 5: $\mathbf{r}'(1) = \mathbf{u}'(1)\times\mathbf{v}(1) + \mathbf{u}(1)\times\mathbf{v}'(1)$, 여기서 $\mathbf{v}(1) = \langle 1,1,1 \rangle$, $\mathbf{v}'(1) = \langle 1,2,3 \rangle$.

- $\langle 0,3,1 \rangle\times\langle 1,1,1 \rangle = \langle 3-1,\ 1-0,\ 0-3 \rangle = \langle 2, 1, -3 \rangle$
- $\langle 1,0,2 \rangle\times\langle 1,2,3 \rangle = \langle 0-4,\ 2-3,\ 2-0 \rangle = \langle -4, -1, 2 \rangle$

합: $\langle -2, 0, -1 \rangle$.`,
          hints: [R`$\mathbf{v}(1)$ 과 $\mathbf{v}'(1)$ 을 먼저 구해요.`, R`외적 두 개 $\mathbf{u}'(1)\times\mathbf{v}(1)$ 과 $\mathbf{u}(1)\times\mathbf{v}'(1)$ 을 따로 계산해서 더하세요.`]
        },
        {
          id: "calc-08-b20", kind: "short", level: 3, tag: "미분법칙",
          q: R`$\mathbf{r}''(t)$ 가 존재할 때 $\dfrac{d}{dt}[\mathbf{r}(t)\times\mathbf{r}'(t)] = \mathbf{r}(t)\times\mathbf{r}''(t)$ 가 성립함을 보이세요.`,
          answer: R`외적의 미분공식(공식 5)에서 $\mathbf{u} = \mathbf{r}$, $\mathbf{v} = \mathbf{r}'$ 으로 두면

$$\frac{d}{dt}[\mathbf{r}\times\mathbf{r}'] = \mathbf{r}'\times\mathbf{r}' + \mathbf{r}\times\mathbf{r}''$$

입니다. 그런데 어떤 벡터든 자기 자신과의 외적은 영벡터이므로($\mathbf{a}\times\mathbf{a} = \mathbf{0}$) 첫째 항 $\mathbf{r}'\times\mathbf{r}'$ 이 사라지고, $\mathbf{r}\times\mathbf{r}''$ 만 남아요.`,
          explain: R`공식 5를 적용하면 항이 두 개 나오는데, 그중 $\mathbf{r}'\times\mathbf{r}'$ 은 평행한(같은) 두 벡터의 외적이라 $\mathbf{0}$ 입니다. 그래서 $\mathbf{r}\times\mathbf{r}''$ 하나만 남아요. "자기 자신과의 외적은 영벡터"라는 사실을 떠올리는 것이 열쇠입니다.`,
          rubric: [
            "외적의 미분공식을 u = r, v = r' 으로 적용해 r'×r' + r×r'' 을 얻었다",
            "자기 자신과의 외적은 영벡터(r'×r' = 0)임을 이유로 들었다",
            "남는 항이 r×r'' 임을 결론으로 썼다"
          ],
          hints: [R`공식 5를 그대로 적용해 보세요. 항이 두 개 나옵니다.`, R`$\mathbf{a}\times\mathbf{a}$ 는 무엇일까요?`]
        },
        {
          id: "calc-08-b21", kind: "num", level: 3, tag: "미분법칙",
          q: R`$\mathbf{r}(t) \neq \mathbf{0}$ 일 때 $\dfrac{d}{dt}|\mathbf{r}(t)| = \dfrac{1}{|\mathbf{r}(t)|}\,\mathbf{r}(t)\cdot\mathbf{r}'(t)$ 가 성립합니다. 이것을 이용하여 $\mathbf{r}(t) = \langle t^2,\ 2t,\ 2 \rangle$ 일 때 $t = 3$ 에서 $\dfrac{d}{dt}|\mathbf{r}(t)|$ 의 값을 구하세요.`,
          answer: 6, tol: 0.01,
          explain: R`$\mathbf{r}(3) = \langle 9, 6, 2 \rangle$, $|\mathbf{r}(3)| = \sqrt{81 + 36 + 4} = 11$.

$\mathbf{r}'(t) = \langle 2t, 2, 0 \rangle$, $\mathbf{r}'(3) = \langle 6, 2, 0 \rangle$.

$\mathbf{r}(3)\cdot\mathbf{r}'(3) = 54 + 12 + 0 = 66$ 이므로 $\dfrac{d}{dt}|\mathbf{r}| = \dfrac{66}{11} = 6$.

검산: $|\mathbf{r}(t)|^2 = t^4 + 4t^2 + 4 = (t^2+2)^2$ 이라 $|\mathbf{r}(t)| = t^2 + 2$ 이고, 미분하면 $2t$, $t=3$ 에서 $6$.

(공식 자체는 $|\mathbf{r}|^2 = \mathbf{r}\cdot\mathbf{r}$ 의 양변을 미분한 $2|\mathbf{r}|\,\dfrac{d}{dt}|\mathbf{r}| = 2\,\mathbf{r}\cdot\mathbf{r}'$ 에서 나와요.)`,
          hints: [R`$t=3$ 에서 $\mathbf{r}$, $\mathbf{r}'$, $|\mathbf{r}|$ 을 각각 구해 공식에 넣어요.`],
          trap: R`$\dfrac{d}{dt}|\mathbf{r}|$ 과 $|\mathbf{r}'|$ 을 같은 것으로 착각하는 실수. $|\mathbf{r}'(3)| = \sqrt{40} \approx 6.32$ 는 다른 값이에요.`
        },
        {
          id: "calc-08-b22", kind: "short", level: 3, tag: "미분법칙",
          q: R`어떤 곡선의 위치벡터 $\mathbf{r}(t)$ 와 접선벡터 $\mathbf{r}'(t)$ 가 모든 $t$ 에서 수직이라고 합니다. 이 곡선이 중심이 원점인 구면 위에 놓여 있음을 보이세요.`,
          answer: R`수직이라는 것은 $\mathbf{r}(t)\cdot\mathbf{r}'(t) = 0$ 이라는 뜻이에요. 한편 내적의 미분공식에 의해

$$\frac{d}{dt}|\mathbf{r}(t)|^2 = \frac{d}{dt}[\mathbf{r}(t)\cdot\mathbf{r}(t)] = 2\,\mathbf{r}(t)\cdot\mathbf{r}'(t) = 0$$

입니다. 도함수가 항상 $0$ 이므로 $|\mathbf{r}(t)|^2$ 은 상수이고, 따라서 $|\mathbf{r}(t)| = c$ (상수)예요. 원점에서 곡선 위의 모든 점까지의 거리가 $c$ 로 일정하므로, 곡선은 중심이 원점이고 반지름이 $c$ 인 구면 위에 있습니다. (예제 4의 역이에요.)`,
          explain: R`예제 4를 거꾸로 읽으면 됩니다. $\dfrac{d}{dt}|\mathbf{r}|^2 = 2\,\mathbf{r}\cdot\mathbf{r}'$ 이라는 관계가 양쪽 방향을 모두 이어 줘요: 크기가 일정하면 $\mathbf{r}\cdot\mathbf{r}' = 0$ 이고, 반대로 $\mathbf{r}\cdot\mathbf{r}' = 0$ 이면 $|\mathbf{r}|^2$ 의 도함수가 $0$ 이라 크기가 일정합니다.`,
          rubric: [
            "수직 조건을 r·r' = 0 으로 썼다",
            "|r|² = r·r 을 미분하면 2 r·r' 이 됨을 이용했다",
            "도함수가 0이므로 |r| 이 상수임을 말했다",
            "|r| 이 상수이면 원점 중심의 구면 위에 있음을 결론지었다"
          ],
          hints: [R`예제 4의 논리를 거꾸로 따라가 보세요.`, R`$|\mathbf{r}(t)|^2 = \mathbf{r}\cdot\mathbf{r}$ 을 $t$ 로 미분하면 무엇이 되나요?`]
        }
      ]
    }
  );
})();
