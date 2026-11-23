(function () {
  const R = String.raw;
  window.TUTOR_UNITS = window.TUTOR_UNITS || [];
  window.TUTOR_UNITS.push(
    /* ===================== 12.3 호의 길이와 곡률 ===================== */
    {
      course: "calc",
      id: "calc-09",
      no: 9,
      title: "호의 길이와 곡률",
      subtitle: "12.3 호의 길이와 곡률",
      source: "대학미분적분학 중간.pdf",
      minutes: 70,
      objectives: [
        "공간곡선의 길이를 속력의 적분으로 계산할 수 있다",
        "호의 길이함수를 구해 곡선을 호의 길이에 관하여 재매개변수화할 수 있다",
        "곡률을 세 가지 공식으로 계산하고 그 의미를 설명할 수 있다",
        "단위접선·단위법선·종법선벡터를 구할 수 있다",
        "법평면·접촉평면·접촉원의 방정식을 구할 수 있다"
      ],
      pretest: [
        {
          id: "calc-09-p01", kind: "mcq", level: 1, tag: "곡률",
          q: R`반지름이 $1$ 인 작은 원과 반지름이 $10$ 인 큰 원이 있어요. 어느 쪽이 더 "급하게 휘어져" 있다고 해야 할까요?`,
          choices: [R`반지름이 $10$ 인 큰 원`, R`반지름이 $1$ 인 작은 원`, R`둘 다 원이므로 똑같다`, R`원은 휘어진 정도를 말할 수 없다`],
          answer: 1,
          explain: R`작은 원 위를 달리면 방향을 훨씬 빨리 틀어야 해요. 이 절에서 배우는 **곡률**은 바로 이 "방향이 바뀌는 빠르기"를 재는 값이고, 반지름 $a$ 인 원의 곡률은 $1/a$ 입니다. 그래서 작은 원(곡률 $1$)이 큰 원(곡률 $1/10$)보다 곡률이 큽니다.`
        },
        {
          id: "calc-09-p02", kind: "mcq", level: 1, tag: "호의 길이",
          q: R`같은 산책로를 한 번은 천천히, 한 번은 두 배 빠르게 걸었어요. 두 경우를 각각 시간에 대한 식으로 나타내 "걸은 길의 길이"를 계산하면 어떻게 될까요?`,
          choices: [R`빠르게 걸은 쪽이 2배 길게 나온다`, R`빠르게 걸은 쪽이 절반으로 나온다`, R`두 경우 모두 같은 길이가 나온다`, R`식이 다르므로 비교할 수 없다`],
          answer: 2,
          explain: R`길의 길이는 길 자체의 성질이지 걷는 방식의 성질이 아니에요. 빠르게 걸으면 속력은 2배지만 걸린 시간이 절반이라 (속력)×(시간)은 같습니다. 곡선을 어떤 매개변수로 나타내든 호의 길이는 같다는 것이 이 절의 중요한 사실이에요.`
        },
        {
          id: "calc-09-p03", kind: "mcq", level: 1, tag: "곡률",
          q: R`쭉 뻗은 직선 도로의 "휘어진 정도(곡률)"를 숫자로 나타낸다면 얼마가 자연스러울까요?`,
          choices: [R`$0$`, R`$1$`, R`무한대`, R`도로의 길이에 따라 다르다`],
          answer: 0,
          explain: R`직선에서는 진행 방향(접선벡터)이 전혀 바뀌지 않아요. 곡률은 방향의 변화율이므로 직선의 곡률은 어디서나 $0$ 입니다.`
        }
      ],
      steps: [
        /* ---------- 1. 곡선의 길이 ---------- */
        {
          type: "explain", title: "공간곡선의 길이: 속력을 적분한다",
          body: R`평면곡선 $x = f(t)$, $y = g(t)$ $(a \le t \le b)$ 의 길이는 곡선에 내접한 다각형(꺾은선)의 길이의 극한으로 정의했고, 그 결과가 $L = \int_a^b \sqrt{[f'(t)]^2 + [g'(t)]^2}\,dt$ 였어요. 공간곡선도 똑같은 방법으로 정의합니다.

곡선이 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ $(a \le t \le b)$ 로 주어지고 $f', g', h'$ 이 연속이며, $t$ 가 $a$ 에서 $b$ 까지 증가할 때 곡선을 **꼭 한 번** 지나간다면

> $$L = \int_a^b \sqrt{[f'(t)]^2 + [g'(t)]^2 + [h'(t)]^2}\,dt = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2 + \left(\frac{dz}{dt}\right)^2}\,dt$$

근호 안은 $\mathbf{r}'(t) = \langle f'(t), g'(t), h'(t) \rangle$ 의 크기를 제곱한 것이므로, 평면이든 공간이든 한 줄로 쓸 수 있어요.

> $$L = \int_a^b |\mathbf{r}'(t)|\,dt$$

직관은 간단해요. $\mathbf{r}(t)$ 가 움직이는 물체의 위치라면 $\mathbf{r}'(t)$ 는 속도, $|\mathbf{r}'(t)|$ 는 속력입니다. **속력을 시간으로 적분하면 이동한 거리**가 나오죠.

계산 순서는 항상 같아요: $\mathbf{r}'(t)$ 구하기 → 크기 $|\mathbf{r}'(t)|$ 구하기(여기서 식이 깔끔하게 정리되는지 확인) → 구간에서 적분.`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c01", kind: "num", level: 2, tag: "호의 길이",
            q: R`곡선 $\mathbf{r}(t) = \left\langle 2t,\ t^2,\ \tfrac{1}{3}t^3 \right\rangle$, $0 \le t \le 3$ 의 길이를 구하세요.`,
            answer: 15, tol: 0.01,
            explain: R`$\mathbf{r}'(t) = \langle 2, 2t, t^2 \rangle$ 이므로

$$|\mathbf{r}'(t)| = \sqrt{4 + 4t^2 + t^4} = \sqrt{(t^2+2)^2} = t^2 + 2$$

$$L = \int_0^3 (t^2 + 2)\,dt = \left[\tfrac{1}{3}t^3 + 2t\right]_0^3 = 9 + 6 = 15$$

근호 안이 **완전제곱**이 되도록 만든 문제가 시험에 자주 나와요.`,
            hints: [R`먼저 $\mathbf{r}'(t)$ 를 구하고 그 크기를 계산해요.`, R`$4 + 4t^2 + t^4$ 은 어떤 식의 제곱일까요?`],
            trap: R`$\sqrt{4 + 4t^2 + t^4}$ 을 $2 + 2t + t^2$ 처럼 항마다 근호를 벗기는 실수. 근호는 덧셈에 대해 나눠지지 않아요.`
          }
        },
        {
          type: "worked", title: "예제 1: 원형나선의 호의 길이",
          problem: R`벡터방정식 $\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + t\,\mathbf{k}$ 인 원형나선에서, 점 $(1, 0, 0)$ 부터 점 $(1, 0, 2\pi)$ 까지의 호의 길이를 구하세요.`,
          steps: [
            {
              ask: "두 점은 각각 매개변수 t 의 어떤 값에 해당할까요?",
              body: R`$z$ 성분이 $t$ 그 자체이므로 $(1,0,0)$ 은 $t = 0$, $(1,0,2\pi)$ 는 $t = 2\pi$ 입니다($\cos 2\pi = 1$, $\sin 2\pi = 0$ 도 맞아요). 따라서 적분 구간은 $0 \le t \le 2\pi$, 나선을 딱 한 바퀴 도는 구간이에요.`
            },
            {
              ask: "속도벡터 r'(t) 와 그 크기는?",
              body: R`성분별로 미분하면 $\mathbf{r}'(t) = -\sin t\,\mathbf{i} + \cos t\,\mathbf{j} + \mathbf{k}$ 입니다.

$$|\mathbf{r}'(t)| = \sqrt{(-\sin t)^2 + \cos^2 t + 1} = \sqrt{2}$$

$\sin^2 t + \cos^2 t = 1$ 덕분에 속력이 **상수**가 됐어요. 나선은 일정한 속력으로 감기며 올라가는 곡선입니다.`
            },
            {
              ask: "이제 길이를 적분으로 계산해 보세요.",
              body: R`$$L = \int_0^{2\pi} |\mathbf{r}'(t)|\,dt = \int_0^{2\pi} \sqrt{2}\,dt = 2\sqrt{2}\,\pi$$

속력이 상수이므로 (속력)×(시간) $= \sqrt{2} \times 2\pi$ 로 바로 나와요. 밑면 원의 둘레 $2\pi$ 보다 긴 것은 올라가는 만큼 더 가기 때문입니다.`
            }
          ],
          answer: R`$L = 2\sqrt{2}\,\pi \approx 8.89$`
        },
        {
          type: "why",
          prompt: "같은 곡선을 서로 다른 매개변수화로 나타내도 호의 길이가 같게 나오는 이유는 무엇일까요? (예: r₁(t)=⟨t, t², t³⟩, 1≤t≤2 와 r₂(u)=⟨eᵘ, e²ᵘ, e³ᵘ⟩, 0≤u≤ln 2)",
          answer: R`두 식은 $t = e^u$ 로 연결된 **같은 곡선 $C$** 의 서로 다른 매개변수화(parametrization)예요. $u$ 가 $0$ 에서 $\ln 2$ 까지 갈 때 $t = e^u$ 는 $1$ 에서 $2$ 까지 갑니다.

$\mathbf{r}_2(u) = \mathbf{r}_1(e^u)$ 이므로 연쇄법칙에서 $\mathbf{r}_2'(u) = \mathbf{r}_1'(t)\,e^u$, 즉 $|\mathbf{r}_2'(u)| = |\mathbf{r}_1'(t)|\,\dfrac{dt}{du}$ 입니다. 따라서

$$\int_0^{\ln 2} |\mathbf{r}_2'(u)|\,du = \int_0^{\ln 2} |\mathbf{r}_1'(t)|\,\frac{dt}{du}\,du = \int_1^2 |\mathbf{r}_1'(t)|\,dt$$

치환적분 그대로예요. 매개변수를 바꾸면 **속력은 달라지지만 그만큼 걸리는 "시간"이 반대로 달라져서** 곱(적분)은 변하지 않습니다. 일반적으로 구분적으로 매끄러운 곡선의 길이는 어떤 매개변수화를 쓰든 같아요.`
        },
        /* ---------- 2. 호의 길이함수 ---------- */
        {
          type: "explain", title: "호의 길이함수 s(t)",
          body: R`끝점을 고정하지 않고 "출발점에서 지금까지 온 거리"를 $t$ 의 함수로 본 것이 **호의 길이함수(arc length function)** 예요. 곡선 $C$ 가 $\mathbf{r}(t)$ $(a \le t \le b)$ 로 주어지고 $\mathbf{r}'$ 이 연속이며 곡선을 꼭 한 번 지나간다고 할 때

> $$s(t) = \int_a^t |\mathbf{r}'(u)|\,du = \int_a^t \sqrt{\left(\frac{dx}{du}\right)^2 + \left(\frac{dy}{du}\right)^2 + \left(\frac{dz}{du}\right)^2}\,du$$

$s(t)$ 는 $\mathbf{r}(a)$ 와 $\mathbf{r}(t)$ 사이의 곡선 부분의 길이입니다. 적분 위끝이 $t$ 라서 적분 변수는 다른 글자 $u$ 로 써요.

미적분학의 기본 정리로 양변을 미분하면

> $$\frac{ds}{dt} = |\mathbf{r}'(t)|$$

"거리의 변화율 = 속력"이라는 당연한 말이에요. 이 식은 뒤에서 곡률을 계산할 때 계속 쓰입니다.

**호의 길이에 관한 재매개변수화**: $s = s(t)$ 를 $t$ 에 대해 풀어 $t = t(s)$ 를 얻고 $\mathbf{r}(t(s))$ 에 대입하면 곡선을 $s$ 로 나타낼 수 있어요. 호의 길이는 좌표계나 매개변수 선택과 무관하게 곡선의 모양만으로 정해지므로 가장 "자연스러운" 매개변수입니다. 예를 들어 $\mathbf{r}(t(3))$ 은 출발점에서 곡선을 따라 길이 $3$ 만큼 간 점의 위치벡터예요.`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c02", kind: "mcq", level: 2, tag: "재매개변수화",
            q: R`곡선 $\mathbf{r}(t) = \langle 3\sin t,\ 4t,\ 3\cos t \rangle$ 에서 $t = 0$ 인 점을 출발점으로 하고 $t$ 가 증가하는 방향으로 잰 호의 길이함수 $s(t)$ 는?`,
            choices: [R`$s(t) = 5$`, R`$s(t) = 25t$`, R`$s(t) = \dfrac{t}{5}$`, R`$s(t) = 5t$`],
            answer: 3,
            explain: R`$\mathbf{r}'(t) = \langle 3\cos t, 4, -3\sin t \rangle$ 이고 $|\mathbf{r}'(t)| = \sqrt{9\cos^2 t + 16 + 9\sin^2 t} = \sqrt{25} = 5$ 입니다. 따라서

$$s(t) = \int_0^t 5\,du = 5t$$`,
            hints: [R`$|\mathbf{r}'(t)|$ 를 먼저 구해요. $\sin^2 + \cos^2 = 1$ 을 쓰면 상수가 됩니다.`, R`$s(t) = \int_0^t |\mathbf{r}'(u)|\,du$ 입니다.`]
          }
        },
        {
          type: "worked", title: "예제 2: 나선을 호의 길이로 재매개변수화",
          problem: R`나선 $\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + t\,\mathbf{k}$ 를, 시작점 $(1, 0, 0)$ 에서 $t$ 가 증가하는 방향으로 잰 호의 길이 $s$ 에 관하여 재매개변수화하세요.`,
          steps: [
            {
              ask: "시작점은 t 의 어떤 값이고, ds/dt 는 얼마일까요?",
              body: R`$(1,0,0)$ 은 $t = 0$ 에 해당합니다. 예제 1에서 구한 대로

$$\frac{ds}{dt} = |\mathbf{r}'(t)| = \sqrt{2}$$`
            },
            {
              ask: "호의 길이함수 s(t) 를 구해 보세요.",
              body: R`시작점이 $t = 0$ 이므로 아래끝이 $0$ 입니다.

$$s = s(t) = \int_0^t |\mathbf{r}'(u)|\,du = \int_0^t \sqrt{2}\,du = \sqrt{2}\,t$$`
            },
            {
              ask: "이제 t 를 s 로 나타내 대입하면?",
              body: R`$s = \sqrt{2}\,t$ 를 풀면 $t = s/\sqrt{2}$ 예요. 이것을 $\mathbf{r}(t)$ 의 $t$ 자리에 모두 넣습니다.

$$\mathbf{r}(t(s)) = \cos\!\left(\frac{s}{\sqrt{2}}\right)\mathbf{i} + \sin\!\left(\frac{s}{\sqrt{2}}\right)\mathbf{j} + \frac{s}{\sqrt{2}}\,\mathbf{k}$$

이 식에서는 $s$ 가 $1$ 늘 때마다 곡선을 따라 정확히 길이 $1$ 만큼 움직여요. 즉 $s$ 로 미분한 벡터의 크기가 항상 $1$ 입니다(직접 확인: $\tfrac{1}{2}\sin^2 + \tfrac{1}{2}\cos^2 + \tfrac{1}{2} = 1$).`
            }
          ],
          answer: R`$\mathbf{r}(t(s)) = \cos\!\left(\dfrac{s}{\sqrt{2}}\right)\mathbf{i} + \sin\!\left(\dfrac{s}{\sqrt{2}}\right)\mathbf{j} + \dfrac{s}{\sqrt{2}}\,\mathbf{k}$`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c03", kind: "mcq", level: 2, tag: "재매개변수화",
            q: R`곡선 $x = 4\sin t$, $y = 3t$, $z = 4\cos t$ 위의 점 $(0, 0, 4)$ 에서 출발해 $t$ 가 증가하는 방향으로 곡선을 따라 길이 $10$ 만큼 움직였어요. 지금의 위치는?`,
            choices: [
              R`$(4\sin 10,\ 30,\ 4\cos 10)$`,
              R`$(4\sin 2,\ 6,\ 4\cos 2)$`,
              R`$(4\sin 50,\ 150,\ 4\cos 50)$`,
              R`$(4\sin 2,\ 10,\ 4\cos 2)$`
            ],
            answer: 1,
            explain: R`$\mathbf{r}'(t) = \langle 4\cos t, 3, -4\sin t \rangle$, $|\mathbf{r}'(t)| = \sqrt{16 + 9} = 5$ 입니다. $(0,0,4)$ 는 $t = 0$ 이므로 $s = 5t$.

$s = 10$ 이면 $t = 2$ 이고, 위치는 $\mathbf{r}(2) = (4\sin 2,\ 6,\ 4\cos 2)$ 예요.`,
            hints: [R`"길이 $10$" 은 $t = 10$ 이 아니라 $s = 10$ 이라는 뜻이에요.`, R`$s = 5t$ 에서 $t$ 를 구해 $\mathbf{r}(t)$ 에 대입합니다.`],
            trap: R`움직인 거리 $10$ 을 그대로 $t = 10$ 으로 넣는 실수. $t$ 와 $s$ 는 속력이 $1$ 일 때만 같아요.`
          }
        },
        /* ---------- 3. 곡률 ---------- */
        {
          type: "explain", title: "매끄러운 곡선, 단위접선벡터, 곡률의 정의",
          body: R`구간 $I$ 에서 매개변수화 $\mathbf{r}(t)$ 가 **매끄럽다(smooth)** 는 것은 $\mathbf{r}'$ 이 연속이고 $\mathbf{r}'(t) \ne \mathbf{0}$ 이라는 뜻이에요. 매끄러운 매개변수화를 갖는 곡선을 매끄러운 곡선이라 하고, 이런 곡선에는 뾰족한 모퉁이나 첨점이 없어서 접선벡터의 방향이 연속적으로 바뀝니다.

$\mathbf{r}'(t) \ne \mathbf{0}$ 이면 나눗셈이 가능하므로 **단위접선벡터(unit tangent vector)** 를 정의할 수 있어요.

> $$\mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|}$$

$\mathbf{T}$ 는 길이가 항상 $1$ 이라 **방향만** 알려 줍니다. 곡선이 거의 직선이면 $\mathbf{T}$ 가 천천히 돌고, 급하게 구부러지면 $\mathbf{T}$ 가 빨리 돌아요.

**곡률(curvature)** 은 그 점에서 곡선이 얼마나 빠르게 방향을 바꾸는지를 잰 값으로, **호의 길이에 대한** 단위접선벡터의 변화율의 크기로 정의합니다.

> $$\kappa = \left|\frac{d\mathbf{T}}{ds}\right|$$

실제 계산은 $t$ 로 하는 편이 쉬워요. 연쇄법칙 $\dfrac{d\mathbf{T}}{dt} = \dfrac{d\mathbf{T}}{ds}\dfrac{ds}{dt}$ 와 $\dfrac{ds}{dt} = |\mathbf{r}'(t)|$ 를 쓰면

> $$\kappa(t) = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|}$$`
        },
        {
          type: "why",
          prompt: "곡률을 정의할 때 T 를 t 가 아니라 호의 길이 s 로 미분하는 이유는 무엇일까요?",
          answer: R`곡률은 **곡선의 모양**에 대한 값이어야 해요. 그런데 $|\mathbf{T}'(t)|$ 는 곡선을 얼마나 빨리 지나가느냐에 따라 달라집니다. 같은 원이라도 두 배 빨리 돌면 $\mathbf{T}$ 도 두 배 빨리 돌아서 $|d\mathbf{T}/dt|$ 가 두 배가 되죠.

호의 길이 $s$ 는 매개변수화와 무관하게 곡선 자체로 정해지는 양이에요. 그래서 "곡선을 따라 **길이 1만큼** 갈 때 방향이 얼마나 바뀌는가"로 재면 매개변수화의 영향을 받지 않습니다.

공식 $\kappa = |\mathbf{T}'(t)|/|\mathbf{r}'(t)|$ 에서 속력 $|\mathbf{r}'(t)|$ 로 나누는 것이 바로 이 보정이에요. 빨리 달려서 생긴 효과를 속력으로 나눠 없애는 것입니다.`
        },
        {
          type: "worked", title: "예제 3: 반지름 a 인 원의 곡률은 1/a",
          problem: R`반지름이 $a$ 인 원의 곡률이 $1/a$ 임을 보이세요.`,
          steps: [
            {
              ask: "원을 어떤 벡터함수로 나타내면 좋을까요?",
              body: R`곡률은 위치와 무관하니 중심을 원점에 두면 편해요.

$$\mathbf{r}(t) = a\cos t\,\mathbf{i} + a\sin t\,\mathbf{j}$$`
            },
            {
              ask: "r'(t), |r'(t)|, 그리고 T(t) 는?",
              body: R`$\mathbf{r}'(t) = -a\sin t\,\mathbf{i} + a\cos t\,\mathbf{j}$ 이고 $|\mathbf{r}'(t)| = \sqrt{a^2\sin^2 t + a^2\cos^2 t} = a$ 입니다.

$$\mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = -\sin t\,\mathbf{i} + \cos t\,\mathbf{j}$$`
            },
            {
              ask: "T'(t) 와 그 크기는?",
              body: R`$\mathbf{T}'(t) = -\cos t\,\mathbf{i} - \sin t\,\mathbf{j}$ 이므로 $|\mathbf{T}'(t)| = 1$ 입니다. (이 벡터는 원 위의 점에서 중심을 향해요.)`
            },
            {
              ask: "곡률 공식에 넣으면?",
              body: R`$$\kappa(t) = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|} = \frac{1}{a}$$

$t$ 와 무관한 상수예요. 원은 어디서나 똑같이 휘어 있고, **작은 원일수록 곡률이 크고 큰 원일수록 곡률이 작다**는 직관과 맞습니다. 또 직선은 접선벡터가 일정해서 $\mathbf{T}' = \mathbf{0}$ 이므로 곡률이 항상 $0$ 이에요.`
            }
          ],
          answer: R`$\kappa = \dfrac{1}{a}$ (모든 점에서 일정)`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c04", kind: "mcq", level: 1, tag: "곡률",
            q: R`반지름이 $4$ 인 원의 곡률은?`,
            choices: [R`$4$`, R`$\dfrac{1}{16}$`, R`$\dfrac{1}{4}$`, R`$0$`],
            answer: 2,
            explain: R`반지름 $a$ 인 원의 곡률은 $\kappa = 1/a$ 이므로 $\kappa = 1/4$ 입니다. 반지름이 클수록 완만해서 곡률이 작아져요.`,
            hints: [R`예제 3의 결과를 떠올려 보세요.`]
          }
        },
        {
          type: "explain", title: "정리: 외적으로 구하는 곡률 공식",
          body: R`$\kappa = |\mathbf{T}'|/|\mathbf{r}'|$ 은 언제나 쓸 수 있지만, $\mathbf{T}$ 에는 분모에 근호가 들어 있어 미분이 번거로운 경우가 많아요. 그럴 때 쓰는 것이 다음 정리입니다.

> 벡터함수 $\mathbf{r}$ 로 주어진 곡선의 곡률은
> $$\kappa(t) = \frac{|\mathbf{r}'(t) \times \mathbf{r}''(t)|}{|\mathbf{r}'(t)|^3}$$

장점은 **$\mathbf{T}$ 를 구할 필요가 없다**는 것이에요. $\mathbf{r}$ 을 두 번 미분하고 외적만 하면 됩니다.

계산 순서:

1. $\mathbf{r}'(t)$, $\mathbf{r}''(t)$ 를 구한다.
2. $|\mathbf{r}'(t)|$ 를 구한다.
3. 행렬식으로 $\mathbf{r}'(t) \times \mathbf{r}''(t)$ 를 계산하고 그 크기를 구한다.
4. 공식에 넣는다. **분모가 세제곱**이라는 것을 잊지 마세요.

특정한 점에서의 곡률만 필요하면, 2~3단계에서 $t$ 값을 먼저 대입해 숫자 벡터로 계산하는 것이 훨씬 빠릅니다.`
        },
        {
          type: "why",
          prompt: "κ = |r′×r″| / |r′|³ 은 어떻게 나올까요? 증명의 흐름을 설명해 보세요. (힌트: r′ = |r′|T 에서 시작)",
          answer: R`핵심은 $\mathbf{r}'$ 과 $\mathbf{r}''$ 을 $\mathbf{T}$, $\mathbf{T}'$ 으로 나타내는 거예요.

1. $\mathbf{T} = \mathbf{r}'/|\mathbf{r}'|$ 이고 $|\mathbf{r}'| = ds/dt$ 이므로 $\mathbf{r}' = \dfrac{ds}{dt}\mathbf{T}$.
2. 곱의 미분법으로 한 번 더 미분하면 $\mathbf{r}'' = \dfrac{d^2 s}{dt^2}\mathbf{T} + \dfrac{ds}{dt}\mathbf{T}'$.
3. 외적을 하면 $\mathbf{T} \times \mathbf{T} = \mathbf{0}$ 이라 첫 항이 사라져요: $\mathbf{r}' \times \mathbf{r}'' = \left(\dfrac{ds}{dt}\right)^2 (\mathbf{T} \times \mathbf{T}')$.
4. $|\mathbf{T}(t)| = 1$ 로 일정하므로 $\mathbf{T}$ 와 $\mathbf{T}'$ 은 **직교**합니다. 직교하는 두 벡터의 외적의 크기는 크기의 곱이므로 $|\mathbf{T} \times \mathbf{T}'| = |\mathbf{T}||\mathbf{T}'| = |\mathbf{T}'|$.
5. 따라서 $|\mathbf{r}' \times \mathbf{r}''| = \left(\dfrac{ds}{dt}\right)^2 |\mathbf{T}'|$, 즉 $|\mathbf{T}'| = \dfrac{|\mathbf{r}' \times \mathbf{r}''|}{|\mathbf{r}'|^2}$.
6. $\kappa = \dfrac{|\mathbf{T}'|}{|\mathbf{r}'|}$ 에 넣으면 $\kappa = \dfrac{|\mathbf{r}' \times \mathbf{r}''|}{|\mathbf{r}'|^3}$.

분모의 세제곱은 "5단계의 제곱 + 6단계의 한 번 더 나눔"에서 나온다고 기억하면 지수를 헷갈리지 않아요.`
        },
        {
          type: "worked", title: "예제 4: 비틀린 삼차곡선의 곡률",
          problem: R`비틀린 삼차곡선 $\mathbf{r}(t) = \langle t, t^2, t^3 \rangle$ 의 일반적인 점에서의 곡률과, 점 $(0, 0, 0)$ 에서의 곡률을 구하세요.`,
          steps: [
            {
              ask: "먼저 무엇을 준비해야 할까요?",
              body: R`정리의 공식에 필요한 재료는 $\mathbf{r}'$, $\mathbf{r}''$, $|\mathbf{r}'|$ 입니다.

$$\mathbf{r}'(t) = \langle 1, 2t, 3t^2 \rangle,\qquad \mathbf{r}''(t) = \langle 0, 2, 6t \rangle$$
$$|\mathbf{r}'(t)| = \sqrt{1 + 4t^2 + 9t^4}$$`
            },
            {
              ask: "외적 r′×r″ 을 계산해 보세요.",
              body: R`$$\mathbf{r}'(t) \times \mathbf{r}''(t) = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2t & 3t^2 \\ 0 & 2 & 6t \end{vmatrix} = (12t^2 - 6t^2)\,\mathbf{i} - (6t - 0)\,\mathbf{j} + (2 - 0)\,\mathbf{k} = 6t^2\,\mathbf{i} - 6t\,\mathbf{j} + 2\,\mathbf{k}$$

$\mathbf{j}$ 성분 앞의 **마이너스**를 빠뜨리지 않도록 주의해요.`
            },
            {
              ask: "외적의 크기는?",
              body: R`$$|\mathbf{r}'(t) \times \mathbf{r}''(t)| = \sqrt{36t^4 + 36t^2 + 4} = 2\sqrt{9t^4 + 9t^2 + 1}$$`
            },
            {
              ask: "공식에 넣고, 원점에서의 값을 구하면?",
              body: R`$$\kappa(t) = \frac{|\mathbf{r}'(t) \times \mathbf{r}''(t)|}{|\mathbf{r}'(t)|^3} = \frac{2\sqrt{1 + 9t^2 + 9t^4}}{(1 + 4t^2 + 9t^4)^{3/2}}$$

원점은 $t = 0$ 이므로 $\kappa(0) = \dfrac{2\sqrt{1}}{1^{3/2}} = 2$ 입니다.

원점에서의 값만 필요했다면 처음부터 $\mathbf{r}'(0) = \langle 1,0,0 \rangle$, $\mathbf{r}''(0) = \langle 0,2,0 \rangle$ 으로 외적 $\langle 0,0,2 \rangle$ 을 구해 $2/1^3 = 2$ 로 끝낼 수도 있어요.`
            }
          ],
          answer: R`$\kappa(t) = \dfrac{2\sqrt{1 + 9t^2 + 9t^4}}{(1 + 4t^2 + 9t^4)^{3/2}}$, $\ \kappa(0) = 2$`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c05", kind: "num", level: 2, tag: "곡률",
            q: R`곡선 $\mathbf{r}(t) = \langle 2t,\ t^2,\ t \rangle$ 의 $t = 0$ 인 점에서의 곡률을 구하세요. (소수 둘째 자리까지)`,
            answer: 0.4, tol: 0.005,
            explain: R`$\mathbf{r}'(t) = \langle 2, 2t, 1 \rangle$, $\mathbf{r}''(t) = \langle 0, 2, 0 \rangle$ 이므로 $t = 0$ 에서 $\mathbf{r}'(0) = \langle 2, 0, 1 \rangle$, $\mathbf{r}''(0) = \langle 0, 2, 0 \rangle$ 입니다.

$$\mathbf{r}'(0) \times \mathbf{r}''(0) = \langle 0\cdot 0 - 1\cdot 2,\ 1\cdot 0 - 2\cdot 0,\ 2\cdot 2 - 0\cdot 0 \rangle = \langle -2, 0, 4 \rangle$$

크기는 $\sqrt{20} = 2\sqrt{5}$, $|\mathbf{r}'(0)| = \sqrt{5}$ 이므로

$$\kappa(0) = \frac{2\sqrt{5}}{(\sqrt{5})^3} = \frac{2\sqrt{5}}{5\sqrt{5}} = \frac{2}{5} = 0.4$$`,
            hints: [R`$t = 0$ 을 먼저 대입해 숫자 벡터 두 개로 외적을 계산하면 편해요.`, R`분모는 $|\mathbf{r}'(0)|^3 = (\sqrt{5})^3$ 입니다.`],
            trap: R`분모를 $|\mathbf{r}'|^2 = 5$ 로 두어 $2\sqrt{5}/5 \approx 0.89$ 로 답하는 실수. 지수는 $3$ 이에요.`
          }
        },
        {
          type: "explain", title: "평면곡선 y = f(x) 의 곡률",
          body: R`방정식이 $y = f(x)$ 인 평면곡선은 $x$ 를 매개변수로 잡아 $\mathbf{r}(x) = x\,\mathbf{i} + f(x)\,\mathbf{j}$ 로 쓸 수 있어요. 그러면

- $\mathbf{r}'(x) = \mathbf{i} + f'(x)\,\mathbf{j}$, $\ \mathbf{r}''(x) = f''(x)\,\mathbf{j}$
- $\mathbf{i} \times \mathbf{j} = \mathbf{k}$, $\mathbf{j} \times \mathbf{j} = \mathbf{0}$ 이므로 $\mathbf{r}'(x) \times \mathbf{r}''(x) = f''(x)\,\mathbf{k}$
- $|\mathbf{r}'(x)| = \sqrt{1 + [f'(x)]^2}$

이것을 외적 공식에 넣으면 다음을 얻습니다.

> $$\kappa(x) = \frac{|f''(x)|}{\left[1 + (f'(x))^2\right]^{3/2}}$$

분자에 **절댓값**이 있다는 점(곡률은 음수가 될 수 없어요)과 분모의 지수가 $3/2$ 라는 점을 꼭 기억하세요. $y = f(x)$ 꼴로 주어진 곡선은 이 공식이 가장 빠릅니다.

덧붙여, 기울기가 $0$ 인 점($f' = 0$)에서는 $\kappa = |f''|$ 가 돼요. 이계도함수가 "휘어진 정도"와 연결되는 이유입니다.`
        },
        {
          type: "worked", title: "예제 5: 포물선 y = x² 의 곡률",
          problem: R`포물선 $y = x^2$ 의 점 $(0,0)$, $(1,1)$, $(2,4)$ 에서의 곡률을 구하세요.`,
          steps: [
            {
              ask: "필요한 도함수는?",
              body: R`$y' = 2x$, $y'' = 2$ 입니다.`
            },
            {
              ask: "곡률함수 κ(x) 를 세워 보세요.",
              body: R`$$\kappa(x) = \frac{|y''|}{\left[1 + (y')^2\right]^{3/2}} = \frac{2}{(1 + 4x^2)^{3/2}}$$`
            },
            {
              ask: "세 점에서의 값은?",
              body: R`- $(0,0)$: $\kappa(0) = 2$
- $(1,1)$: $\kappa(1) = \dfrac{2}{5^{3/2}} \approx 0.18$
- $(2,4)$: $\kappa(2) = \dfrac{2}{17^{3/2}} \approx 0.03$

꼭짓점에서 가장 크고 멀어질수록 급격히 작아져요.`
            },
            {
              ask: "x → ±∞ 일 때 κ(x) 는 어떻게 될까요? 그림으로는 어떤 의미일까요?",
              body: R`분모 $(1 + 4x^2)^{3/2}$ 이 한없이 커지므로 $\kappa(x) \to 0$ 입니다. 포물선이 꼭짓점에서 멀어질수록 점점 **평평해져** 직선에 가까워진다는 사실과 맞아요. 곡률이 최대인 곳은 분모가 가장 작은 $x = 0$, 즉 꼭짓점입니다.`
            }
          ],
          answer: R`$\kappa(0) = 2$, $\ \kappa(1) = 2/5^{3/2} \approx 0.18$, $\ \kappa(2) = 2/17^{3/2} \approx 0.03$`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c06", kind: "num", level: 2, tag: "곡률",
            q: R`곡선 $y = e^x$ 의 점 $(0, 1)$ 에서의 곡률을 구하세요. (소수 셋째 자리까지)`,
            answer: 0.354, tol: 0.002,
            explain: R`$f'(x) = e^x$, $f''(x) = e^x$ 이므로 $x = 0$ 에서 $f'(0) = 1$, $f''(0) = 1$ 입니다.

$$\kappa(0) = \frac{|1|}{(1 + 1^2)^{3/2}} = \frac{1}{2\sqrt{2}} \approx 0.354$$`,
            hints: [R`$\kappa(x) = \dfrac{|f''(x)|}{[1 + (f'(x))^2]^{3/2}}$ 를 씁니다.`, R`$2^{3/2} = 2\sqrt{2}$ 예요.`],
            trap: R`분모의 지수 $3/2$ 를 빼먹고 $1/(1+1) = 0.5$ 로 답하는 실수.`
          }
        },
        /* ---------- 4. 법선벡터와 종법선벡터 ---------- */
        {
          type: "explain", title: "단위법선벡터 N 과 종법선벡터 B",
          body: R`공간곡선의 한 점에서 $\mathbf{T}(t)$ 와 직교하는 벡터는 무수히 많아요. 그중 하나를 특별히 골라냅니다. $|\mathbf{T}(t)| = 1$ 이므로 $\mathbf{T}(t) \cdot \mathbf{T}'(t) = 0$, 즉 $\mathbf{T}'(t)$ 는 $\mathbf{T}(t)$ 와 직교해요. 다만 $\mathbf{T}'(t)$ 자체는 단위벡터가 아니므로, $\kappa \ne 0$ 인 점에서 크기로 나눠 줍니다.

> **주단위법선벡터(principal unit normal vector, 줄여서 단위법선벡터)**
> $$\mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|}$$

$\mathbf{N}$ 은 $\mathbf{T}$ 가 변해 가는 방향이므로, 각 점에서 **곡선이 굽어지는 쪽(오목한 쪽)** 을 가리킨다고 생각하면 돼요.

> **종법선벡터(binormal vector)**
> $$\mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t)$$

$\mathbf{B}$ 는 $\mathbf{T}$ 와 $\mathbf{N}$ 모두에 수직인 단위벡터입니다(서로 직교하는 두 단위벡터의 외적이라 크기가 $1 \cdot 1 = 1$).

곡선 위의 각 점에서 $\mathbf{T}, \mathbf{N}, \mathbf{B}$ 는 서로 직교하는 세 단위벡터의 집합을 이루고, $t$ 가 변함에 따라 곡선을 따라 움직여요. 이것을 **TNB 틀(frame)** 이라고 합니다. 곡선 위를 달리는 물체에 붙어 다니는 "움직이는 좌표축"이에요.`
        },
        {
          type: "why",
          prompt: "|T(t)| = 1 이라는 사실만으로 왜 T′(t) 가 T(t) 와 직교한다고 말할 수 있을까요?",
          answer: R`$|\mathbf{T}(t)| = 1$ 이면 $\mathbf{T}(t) \cdot \mathbf{T}(t) = |\mathbf{T}(t)|^2 = 1$ 로 **상수**예요. 양변을 $t$ 로 미분하면, 내적의 미분법에 따라

$$\mathbf{T}'(t) \cdot \mathbf{T}(t) + \mathbf{T}(t) \cdot \mathbf{T}'(t) = 2\,\mathbf{T}(t) \cdot \mathbf{T}'(t) = 0$$

이므로 $\mathbf{T}(t) \cdot \mathbf{T}'(t) = 0$ 입니다.

직관적으로는, 길이가 고정된 벡터는 **늘어나거나 줄어들 수 없고 돌기만** 할 수 있어요. 자기 자신과 나란한 방향으로 변하면 길이가 바뀌어 버리니, 변화는 반드시 수직 방향으로만 일어납니다. 원 위를 도는 점의 속도가 반지름과 수직인 것과 같은 이치예요.

이 사실은 $\mathbf{T}$ 뿐 아니라 **크기가 일정한 모든 벡터함수**에 성립합니다.`
        },
        {
          type: "worked", title: "예제 6: 원형나선의 N 과 B",
          problem: R`원형나선 $\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + t\,\mathbf{k}$ 의 단위법선벡터와 종법선벡터를 구하세요.`,
          steps: [
            {
              ask: "먼저 T(t) 를 구해 보세요.",
              body: R`$\mathbf{r}'(t) = -\sin t\,\mathbf{i} + \cos t\,\mathbf{j} + \mathbf{k}$, $|\mathbf{r}'(t)| = \sqrt{2}$ 이므로

$$\mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|} = \frac{1}{\sqrt{2}}\left(-\sin t\,\mathbf{i} + \cos t\,\mathbf{j} + \mathbf{k}\right)$$`
            },
            {
              ask: "T′(t) 와 그 크기는?",
              body: R`$$\mathbf{T}'(t) = \frac{1}{\sqrt{2}}\left(-\cos t\,\mathbf{i} - \sin t\,\mathbf{j}\right),\qquad |\mathbf{T}'(t)| = \frac{1}{\sqrt{2}}$$

상수 성분 $\mathbf{k}$ 는 미분하면 사라져요. 크기가 $1$ 이 아니므로 $\mathbf{T}'$ 을 그대로 $\mathbf{N}$ 이라 하면 안 됩니다.`
            },
            {
              ask: "N(t) 는? 어느 방향을 가리킬까요?",
              body: R`$$\mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|} = -\cos t\,\mathbf{i} - \sin t\,\mathbf{j} = \langle -\cos t, -\sin t, 0 \rangle$$

$z$ 성분이 $0$ 인 **수평벡터**이고, 점 $(\cos t, \sin t, t)$ 에서 $-(\cos t, \sin t)$ 방향이므로 **$z$ 축을 향해** 가리켜요. 나선이 $z$ 축 쪽으로 굽어 감기는 모습과 맞습니다.`
            },
            {
              ask: "마지막으로 B(t) = T(t)×N(t) 를 계산하세요.",
              body: R`$$\mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t) = \frac{1}{\sqrt{2}}\begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -\sin t & \cos t & 1 \\ -\cos t & -\sin t & 0 \end{vmatrix} = \frac{1}{\sqrt{2}}\langle \sin t, -\cos t, 1 \rangle$$

성분별로: $\mathbf{i}$ 는 $\cos t \cdot 0 - 1\cdot(-\sin t) = \sin t$, $\mathbf{j}$ 는 $-\left[(-\sin t)\cdot 0 - 1\cdot(-\cos t)\right] = -\cos t$, $\mathbf{k}$ 는 $\sin^2 t + \cos^2 t = 1$ 입니다. 크기는 $\tfrac{1}{\sqrt{2}}\sqrt{1 + 1} = 1$ 로 단위벡터가 맞아요.`
            }
          ],
          answer: R`$\mathbf{N}(t) = \langle -\cos t, -\sin t, 0 \rangle$, $\ \mathbf{B}(t) = \dfrac{1}{\sqrt{2}}\langle \sin t, -\cos t, 1 \rangle$`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c07", kind: "mcq", level: 1, tag: "TNB 벡터",
            q: R`매끄러운 공간곡선의 $\kappa \ne 0$ 인 점에서 $\mathbf{T}, \mathbf{N}, \mathbf{B}$ 에 대한 설명으로 **옳지 않은** 것은?`,
            choices: [
              R`$\mathbf{N}(t)$ 는 $\mathbf{T}'(t)$ 와 항상 같은 벡터이다`,
              R`$\mathbf{T}(t) \cdot \mathbf{N}(t) = 0$ 이다`,
              R`$\mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t)$ 는 단위벡터이다`,
              R`$\mathbf{N}(t)$ 는 곡선이 굽어지는 방향을 가리킨다`
            ],
            answer: 0,
            explain: R`$\mathbf{T}'(t)$ 는 일반적으로 단위벡터가 아니에요. $\mathbf{N}(t) = \mathbf{T}'(t)/|\mathbf{T}'(t)|$ 처럼 크기로 나눠야 합니다. 예제 6에서도 $|\mathbf{T}'(t)| = 1/\sqrt{2}$ 였어요. 나머지 세 문장은 모두 옳습니다.`,
            hints: [R`예제 6에서 $|\mathbf{T}'(t)|$ 가 얼마였는지 떠올려 보세요.`]
          }
        },
        /* ---------- 5. 법평면·접촉평면·접촉원 ---------- */
        {
          type: "explain", title: "법평면, 접촉평면, 접촉원",
          body: R`곡선 $C$ 위의 점 $P$ 에서 $\mathbf{T}, \mathbf{N}, \mathbf{B}$ 중 두 개를 고르면 평면이 정해져요.

- **법평면(normal plane)**: $\mathbf{N}$ 과 $\mathbf{B}$ 로 결정되는 평면. 접선벡터 $\mathbf{T}$ 와 직교하는 모든 직선으로 이루어져 있으므로 **법선벡터가 $\mathbf{T}$** (또는 $\mathbf{r}'$) 입니다.
- **접촉평면(osculating plane)**: $\mathbf{T}$ 와 $\mathbf{N}$ 으로 결정되는 평면. $P$ 근방의 곡선 부분을 가장 가깝게 포함하는 평면이고 **법선벡터가 $\mathbf{B}$** 입니다. 이름은 "입맞춤"을 뜻하는 라틴어 osculum 에서 왔어요. 평면곡선이라면 접촉평면은 그냥 그 곡선이 놓인 평면입니다.

평면의 방정식은 법선벡터 $\langle a, b, c \rangle$ 와 점 $(x_0, y_0, z_0)$ 로 $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$ 이었죠. 법선벡터는 **방향만** 중요하므로 $\mathbf{T}$ 대신 $\mathbf{r}'$, $\mathbf{B}$ 대신 그 상수배를 써도 됩니다.

**접촉원(osculating circle, 곡률원 circle of curvature)** 은 다음 세 조건을 만족하는 원이에요.

1. $P$ 에서의 접촉평면 위에 놓여 있다.
2. $P$ 에서 $C$ 와 같은 접선을 가진다.
3. $C$ 의 오목한 쪽($\mathbf{N}$ 이 가리키는 쪽)에 있고 반지름이 $\rho = \dfrac{1}{\kappa}$ (곡률의 역수)이다.

따라서 중심은 $P$ 에서 $\mathbf{N}$ 방향으로 $\rho$ 만큼 간 점입니다. 접촉원은 $P$ 에서 곡선과 접선벡터·법선벡터·곡률을 모두 공유하므로, $P$ 근방에서 곡선을 가장 잘 흉내 내는 원이에요.`
        },
        {
          type: "worked", title: "예제 7: 나선의 법평면과 접촉평면",
          problem: R`원형나선 $\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + t\,\mathbf{k}$ 위의 점 $P(0, 1, \pi/2)$ 에서 법평면과 접촉평면의 방정식을 구하세요.`,
          steps: [
            {
              ask: "점 P 는 t 의 어떤 값에 해당할까요?",
              body: R`$z = t = \pi/2$ 이고, 이때 $\cos(\pi/2) = 0$, $\sin(\pi/2) = 1$ 이라 $P$ 와 일치해요. 따라서 $t = \pi/2$ 입니다.`
            },
            {
              ask: "법평면의 법선벡터는 무엇이고, 방정식은?",
              body: R`법평면은 접선에 수직이므로 법선벡터로 $\mathbf{r}'(\pi/2)$ 를 쓰면 돼요. $\mathbf{r}'(t) = \langle -\sin t, \cos t, 1 \rangle$ 에서 $\mathbf{r}'(\pi/2) = \langle -1, 0, 1 \rangle$.

$$-1(x - 0) + 0(y - 1) + 1\left(z - \frac{\pi}{2}\right) = 0 \quad\Longleftrightarrow\quad z = x + \frac{\pi}{2}$$`
            },
            {
              ask: "접촉평면의 법선벡터는 무엇일까요?",
              body: R`접촉평면은 $\mathbf{T}$ 와 $\mathbf{N}$ 을 포함하므로 법선벡터는 $\mathbf{T} \times \mathbf{N} = \mathbf{B}$ 입니다. 예제 6에서 $\mathbf{B}(t) = \tfrac{1}{\sqrt{2}}\langle \sin t, -\cos t, 1 \rangle$ 이었으므로

$$\mathbf{B}\!\left(\frac{\pi}{2}\right) = \left\langle \frac{1}{\sqrt{2}},\ 0,\ \frac{1}{\sqrt{2}} \right\rangle$$

방향만 필요하니 더 간단한 $\langle 1, 0, 1 \rangle$ 을 법선벡터로 씁니다.`
            },
            {
              ask: "접촉평면의 방정식을 써 보세요.",
              body: R`$$1(x - 0) + 0(y - 1) + 1\left(z - \frac{\pi}{2}\right) = 0 \quad\Longleftrightarrow\quad z = -x + \frac{\pi}{2}$$

확인: 두 평면의 법선 $\langle -1,0,1 \rangle$ 과 $\langle 1,0,1 \rangle$ 의 내적이 $0$ 이라 서로 수직이에요. $\mathbf{T} \perp \mathbf{B}$ 이니 당연한 결과입니다.`
            }
          ],
          answer: R`법평면: $z = x + \dfrac{\pi}{2}$, 접촉평면: $z = -x + \dfrac{\pi}{2}$`
        },
        {
          type: "worked", title: "예제 8: 포물선 y = x² 의 원점에서의 접촉원",
          problem: R`포물선 $y = x^2$ 의 원점에서의 접촉원의 방정식을 구하세요.`,
          steps: [
            {
              ask: "접촉원의 반지름은 어떻게 구할까요?",
              body: R`반지름은 곡률의 역수예요. 예제 5에서 원점의 곡률이 $\kappa(0) = 2$ 였으므로

$$\rho = \frac{1}{\kappa} = \frac{1}{2}$$`
            },
            {
              ask: "중심은 어디일까요?",
              body: R`원점에서 포물선의 접선은 $x$ 축이고, 포물선은 위로 오목하므로 $\mathbf{N}$ 은 $+y$ 방향을 가리켜요. 중심은 원점에서 $\mathbf{N}$ 방향으로 $\rho = \tfrac{1}{2}$ 만큼 간 점 $\left(0, \tfrac{1}{2}\right)$ 입니다.`
            },
            {
              ask: "원의 방정식은?",
              body: R`$$x^2 + \left(y - \frac{1}{2}\right)^2 = \frac{1}{4}$$

이 원은 원점을 지나고 거기서 $x$ 축에 접해요. 그래프로 그릴 때는 매개방정식 $x = \tfrac{1}{2}\cos t$, $y = \tfrac{1}{2} + \tfrac{1}{2}\sin t$ 를 씁니다. 원점 근처에서 포물선과 원이 거의 똑같이 구부러져 있어요.`
            }
          ],
          answer: R`$x^2 + \left(y - \dfrac{1}{2}\right)^2 = \dfrac{1}{4}$ (중심 $\left(0, \tfrac12\right)$, 반지름 $\tfrac12$)`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c08", kind: "mcq", level: 2, tag: "접촉원",
            q: R`포물선 $y = \dfrac{1}{2}x^2$ 의 원점에서의 접촉원의 방정식은?`,
            choices: [
              R`$x^2 + \left(y - \dfrac{1}{2}\right)^2 = \dfrac{1}{4}$`,
              R`$x^2 + (y + 1)^2 = 1$`,
              R`$x^2 + y^2 = 1$`,
              R`$x^2 + (y - 1)^2 = 1$`
            ],
            answer: 3,
            explain: R`$y' = x$, $y'' = 1$ 이므로 $\kappa(0) = \dfrac{1}{(1 + 0)^{3/2}} = 1$, 반지름 $\rho = 1$ 입니다. 포물선이 위로 오목하므로 중심은 원점에서 $+y$ 방향으로 $1$ 만큼 간 $(0, 1)$ 이에요.

$$x^2 + (y - 1)^2 = 1$$`,
            hints: [R`먼저 원점에서의 곡률을 구하고 역수를 취해 반지름을 얻어요.`, R`중심은 곡선이 오목한 쪽에 있습니다.`]
          }
        },
        /* ---------- 6. 정리 ---------- */
        {
          type: "explain", title: "공식 총정리와 선택 요령",
          body: R`이 절의 공식을 한 번에 모으면 이렇습니다.

> $$\mathbf{T}(t) = \frac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|},\qquad \mathbf{N}(t) = \frac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|},\qquad \mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t)$$
> $$\kappa = \left|\frac{d\mathbf{T}}{ds}\right| = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|} = \frac{|\mathbf{r}'(t) \times \mathbf{r}''(t)|}{|\mathbf{r}'(t)|^3}$$

**어떤 곡률 공식을 쓸까?**

- $|\mathbf{r}'(t)|$ 가 상수이거나 간단해서 $\mathbf{T}$ 가 깔끔할 때(원, 나선), 또는 $\mathbf{N}$ 도 함께 구해야 할 때: $\kappa = |\mathbf{T}'|/|\mathbf{r}'|$
- 일반적인 공간곡선: $\kappa = |\mathbf{r}' \times \mathbf{r}''|/|\mathbf{r}'|^3$
- $y = f(x)$ 꼴 평면곡선: $\kappa = |f''|/[1 + (f')^2]^{3/2}$

**접촉평면 계산 요령**: 외적 공식의 증명에서 $\mathbf{r}' \times \mathbf{r}'' = \left(\dfrac{ds}{dt}\right)^2(\mathbf{T} \times \mathbf{T}')$ 이었고 $\mathbf{T}'$ 은 $\mathbf{N}$ 과 같은 방향이므로, $\mathbf{r}' \times \mathbf{r}''$ 은 $\mathbf{B}$ 와 **같은 방향**이에요. 그래서 접촉평면의 법선벡터로 $\mathbf{r}' \times \mathbf{r}''$ 을 바로 써도 됩니다($\mathbf{T}, \mathbf{N}$ 을 구하지 않아도 돼요).

**평면 정리**: 법평면의 법선은 $\mathbf{T}$(또는 $\mathbf{r}'$), 접촉평면의 법선은 $\mathbf{B}$(또는 $\mathbf{r}' \times \mathbf{r}''$), 접촉원의 반지름은 $\rho = 1/\kappa$.

참고로 절 끝의 연습문제에는 곡선이 접촉평면에서 벗어나며 비틀리는 정도를 재는 **비틀림률(torsion)** $\tau$ 가 $\dfrac{d\mathbf{B}}{ds} = -\tau\,\mathbf{N}$ 으로 소개되고, 평면곡선에서는 $\tau = 0$ 이라는 사실이 나와요.`
        },
        {
          type: "check",
          q: {
            id: "calc-09-c09", kind: "mcq", level: 1, tag: "곡률",
            q: R`단위접선벡터 $\mathbf{T}$ 를 구하지 않고 $\mathbf{r}'$ 과 $\mathbf{r}''$ 만으로 공간곡선의 곡률을 계산하는 올바른 공식은?`,
            choices: [
              R`$\kappa = \dfrac{|\mathbf{r}' \times \mathbf{r}''|}{|\mathbf{r}'|^2}$`,
              R`$\kappa = \dfrac{|\mathbf{r}' \cdot \mathbf{r}''|}{|\mathbf{r}'|^3}$`,
              R`$\kappa = \dfrac{|\mathbf{r}' \times \mathbf{r}''|}{|\mathbf{r}'|^3}$`,
              R`$\kappa = \dfrac{|\mathbf{r}''|}{|\mathbf{r}'|}$`
            ],
            answer: 2,
            explain: R`정리의 공식은 $\kappa = \dfrac{|\mathbf{r}' \times \mathbf{r}''|}{|\mathbf{r}'|^3}$ 입니다. 분자는 **외적**의 크기, 분모는 속력의 **세제곱**이에요. 증명에서 $|\mathbf{T}'| = |\mathbf{r}' \times \mathbf{r}''|/|\mathbf{r}'|^2$ 을 얻은 뒤 $\kappa = |\mathbf{T}'|/|\mathbf{r}'|$ 로 한 번 더 나누기 때문에 세제곱이 됩니다.`
          }
        }
      ],
      keypoints: [
        R`공간곡선의 길이는 속력의 적분 $L = \int_a^b |\mathbf{r}'(t)|\,dt$ 이고, 어떤 매개변수화를 써도 값이 같다.`,
        R`호의 길이함수는 $s(t) = \int_a^t |\mathbf{r}'(u)|\,du$ 이고 $ds/dt = |\mathbf{r}'(t)|$ 이며, $t = t(s)$ 로 풀어 대입하면 호의 길이에 관한 재매개변수화가 된다.`,
        R`곡률은 호의 길이에 대한 단위접선벡터의 변화율의 크기 $\kappa = |d\mathbf{T}/ds| = |\mathbf{T}'(t)|/|\mathbf{r}'(t)|$ 이다.`,
        R`곡률은 $\kappa = |\mathbf{r}' \times \mathbf{r}''|/|\mathbf{r}'|^3$ 으로도 계산하며, $y = f(x)$ 이면 $\kappa = |f''|/[1 + (f')^2]^{3/2}$ 이다.`,
        R`반지름 $a$ 인 원의 곡률은 $1/a$ 이고 직선의 곡률은 $0$ 이다.`,
        R`$\mathbf{T} = \mathbf{r}'/|\mathbf{r}'|$, $\mathbf{N} = \mathbf{T}'/|\mathbf{T}'|$, $\mathbf{B} = \mathbf{T} \times \mathbf{N}$ 은 서로 직교하는 단위벡터이고 $\mathbf{N}$ 은 곡선이 굽어지는 쪽을 가리킨다.`,
        R`법평면은 $\mathbf{T}$ 를 법선으로 하는 평면, 접촉평면은 $\mathbf{B}$ 를 법선으로 하는($\mathbf{T}$ 와 $\mathbf{N}$ 을 포함하는) 평면이다.`,
        R`접촉원은 접촉평면 위에서 곡선의 오목한 쪽에 놓이며 반지름이 $\rho = 1/\kappa$ 이고 곡선과 접선·법선·곡률을 공유한다.`
      ],
      bank: [
        {
          id: "calc-09-b01", kind: "mcq", level: 1, tag: "호의 길이",
          q: R`곡선 $\mathbf{r}(t)$ $(a \le t \le b)$ 의 길이 공식 $L = \int_a^b |\mathbf{r}'(t)|\,dt$ 에 대한 설명으로 옳은 것은?`,
          choices: [
            R`공간곡선에만 쓸 수 있고 평면곡선에는 다른 공식이 필요하다`,
            R`$|\mathbf{r}'(t)|$ 대신 $|\mathbf{r}(t)|$ 를 적분해도 같은 값이 나온다`,
            R`같은 곡선이라도 매개변수화를 바꾸면 $L$ 의 값이 달라진다`,
            R`$\mathbf{r}'$ 이 연속이고 $t$ 가 $a$ 에서 $b$ 로 갈 때 곡선을 꼭 한 번 지나간다는 조건에서 성립한다`
          ],
          answer: 3,
          explain: R`공식은 $\mathbf{r}'$ 이 연속이고 곡선을 **꼭 한 번** 지나갈 때 성립해요(같은 부분을 두 번 지나가면 그만큼 길이가 겹쳐 세어집니다). 이 공식은 평면곡선·공간곡선 모두에 쓰이고, 매개변수화에 따라 값이 달라지지 않으며, 적분하는 것은 위치벡터의 크기가 아니라 **속력** $|\mathbf{r}'(t)|$ 입니다.`
        },
        {
          id: "calc-09-b02", kind: "num", level: 2, tag: "호의 길이",
          q: R`곡선 $\mathbf{r}(t) = \langle 2\sin t,\ \sqrt{5}\,t,\ 2\cos t \rangle$, $-3 \le t \le 3$ 의 길이를 구하세요.`,
          answer: 18, tol: 0.01,
          explain: R`$\mathbf{r}'(t) = \langle 2\cos t, \sqrt{5}, -2\sin t \rangle$ 이므로 $|\mathbf{r}'(t)| = \sqrt{4\cos^2 t + 5 + 4\sin^2 t} = \sqrt{9} = 3$ 입니다.

$$L = \int_{-3}^{3} 3\,dt = 3 \times 6 = 18$$`,
          hints: [R`$|\mathbf{r}'(t)|$ 가 상수로 정리됩니다.`, R`구간의 길이는 $3 - (-3) = 6$ 이에요.`],
          trap: R`구간 길이를 $3$ 으로 보고 $9$ 라고 답하는 실수. 아래끝이 $-3$ 입니다.`
        },
        {
          id: "calc-09-b03", kind: "num", level: 2, tag: "호의 길이",
          q: R`곡선 $\mathbf{r}(t) = \sqrt{2}\,t\,\mathbf{i} + e^{t}\,\mathbf{j} + e^{-t}\,\mathbf{k}$, $0 \le t \le 2$ 의 길이를 구하세요. (소수 둘째 자리까지)`,
          answer: 7.25, tol: 0.01,
          explain: R`$\mathbf{r}'(t) = \langle \sqrt{2}, e^{t}, -e^{-t} \rangle$ 이므로

$$|\mathbf{r}'(t)| = \sqrt{2 + e^{2t} + e^{-2t}} = \sqrt{(e^{t} + e^{-t})^2} = e^{t} + e^{-t}$$

$$L = \int_0^2 (e^{t} + e^{-t})\,dt = \left[e^{t} - e^{-t}\right]_0^2 = e^{2} - e^{-2} \approx 7.389 - 0.135 = 7.25$$`,
          hints: [R`$2 = 2 \cdot e^{t} \cdot e^{-t}$ 라는 점에 주목해요.`, R`$e^{2t} + 2 + e^{-2t} = (e^{t} + e^{-t})^2$ 입니다.`],
          trap: R`$\int e^{-t}\,dt = -e^{-t}$ 의 부호를 놓쳐 $e^2 + e^{-2} - 2$ 로 계산하는 실수.`
        },
        {
          id: "calc-09-b04", kind: "num", level: 2, tag: "호의 길이",
          q: R`곡선 $\mathbf{r}(t) = 12t\,\mathbf{i} + 8t^{3/2}\,\mathbf{j} + 3t^2\,\mathbf{k}$, $0 \le t \le 2$ 의 길이를 구하세요.`,
          answer: 36, tol: 0.01,
          explain: R`$\mathbf{r}'(t) = \langle 12,\ 12t^{1/2},\ 6t \rangle$ 이므로

$$|\mathbf{r}'(t)| = \sqrt{144 + 144t + 36t^2} = \sqrt{36(t + 2)^2} = 6(t + 2)$$

$$L = \int_0^2 6(t + 2)\,dt = 6\left[\tfrac{1}{2}t^2 + 2t\right]_0^2 = 6(2 + 4) = 36$$`,
          hints: [R`$\dfrac{d}{dt}\,8t^{3/2} = 12t^{1/2}$ 이고, 제곱하면 $144t$ 예요.`, R`$36t^2 + 144t + 144 = 36(t+2)^2$ 입니다.`]
        },
        {
          id: "calc-09-b05", kind: "num", level: 3, tag: "호의 길이",
          q: R`곡선 $\mathbf{r}(t) = 2\,\mathbf{i} + t^2\,\mathbf{j} + t^3\,\mathbf{k}$, $0 \le t \le 2$ 의 길이를 구하세요. (소수 둘째 자리까지)`,
          answer: 9.07, tol: 0.01,
          explain: R`$\mathbf{r}'(t) = \langle 0, 2t, 3t^2 \rangle$ 이고 $t \ge 0$ 이므로

$$|\mathbf{r}'(t)| = \sqrt{4t^2 + 9t^4} = t\sqrt{4 + 9t^2}$$

$u = 4 + 9t^2$ 로 치환하면 $du = 18t\,dt$ 이고 $t: 0 \to 2$ 일 때 $u: 4 \to 40$ 입니다.

$$L = \int_0^2 t\sqrt{4 + 9t^2}\,dt = \frac{1}{18}\int_4^{40} \sqrt{u}\,du = \frac{1}{27}\left[u^{3/2}\right]_4^{40} = \frac{40^{3/2} - 8}{27} \approx \frac{252.98 - 8}{27} \approx 9.07$$`,
          hints: [R`상수 성분 $2\,\mathbf{i}$ 는 미분하면 $0$ 이에요.`, R`$\sqrt{4t^2 + 9t^4}$ 에서 $t$ 를 밖으로 꺼낸 뒤 $u = 4 + 9t^2$ 로 치환합니다.`],
          trap: R`근호 안이 완전제곱이 아닌데 억지로 $2t + 3t^2$ 으로 벗기는 실수. 이 유형은 $t$ 를 묶어 낸 뒤 치환적분을 해요.`
        },
        {
          id: "calc-09-b06", kind: "mcq", level: 1, tag: "재매개변수화",
          q: R`호의 길이함수 $s(t) = \int_a^t |\mathbf{r}'(u)|\,du$ 를 $t$ 로 미분한 $\dfrac{ds}{dt}$ 는?`,
          choices: [R`$\mathbf{r}'(t)$`, R`$|\mathbf{r}'(t)|$`, R`$|\mathbf{r}(t)|$`, R`$|\mathbf{r}''(t)|$`],
          answer: 1,
          explain: R`미적분학의 기본 정리에 따라 적분 위끝 $t$ 로 미분하면 피적분함수에 $t$ 를 넣은 값이 나와요.

$$\frac{ds}{dt} = |\mathbf{r}'(t)|$$

거리의 변화율은 속력이라는 뜻입니다. $s$ 는 스칼라함수이므로 도함수도 스칼라예요.`
        },
        {
          id: "calc-09-b07", kind: "mcq", level: 2, tag: "재매개변수화",
          q: R`직선 $\mathbf{r}(t) = (1 + 2t)\,\mathbf{i} + (3 - t)\,\mathbf{j} + 2t\,\mathbf{k}$ 를 점 $P(1, 3, 0)$ 에서 $t$ 가 증가하는 방향으로 잰 호의 길이 $s$ 에 관하여 재매개변수화한 것은?`,
          choices: [
            R`$\left\langle 1 + \dfrac{2s}{3},\ 3 - \dfrac{s}{3},\ \dfrac{2s}{3} \right\rangle$`,
            R`$\left\langle 1 + 2s,\ 3 - s,\ 2s \right\rangle$`,
            R`$\left\langle 1 + 6s,\ 3 - 3s,\ 6s \right\rangle$`,
            R`$\left\langle 1 + \dfrac{2s}{9},\ 3 - \dfrac{s}{9},\ \dfrac{2s}{9} \right\rangle$`
          ],
          answer: 0,
          explain: R`$P$ 는 $t = 0$ 입니다. $\mathbf{r}'(t) = \langle 2, -1, 2 \rangle$, $|\mathbf{r}'(t)| = \sqrt{4 + 1 + 4} = 3$ 이므로 $s = \int_0^t 3\,du = 3t$, 즉 $t = s/3$.

$$\mathbf{r}(t(s)) = \left\langle 1 + \frac{2s}{3},\ 3 - \frac{s}{3},\ \frac{2s}{3} \right\rangle$$

확인: $s$ 로 미분한 벡터 $\left\langle \tfrac23, -\tfrac13, \tfrac23 \right\rangle$ 의 크기가 $1$ 이에요.`,
          hints: [R`$|\mathbf{r}'(t)|$ 를 구해 $s(t)$ 를 만든 뒤 $t$ 에 대해 풉니다.`, R`재매개변수화가 맞다면 $s$ 로 미분한 벡터의 크기가 $1$ 이어야 해요.`]
        },
        {
          id: "calc-09-b08", kind: "num", level: 3, tag: "재매개변수화",
          q: R`곡선 $\mathbf{r}(t) = \langle e^{t}\cos t,\ e^{t}\sin t,\ e^{t} \rangle$ 위의 점 $P(1, 0, 1)$ 에서 $t$ 가 증가하는 방향으로 곡선을 따라 길이 $2\sqrt{3}$ 만큼 간 점의 $z$ 좌표를 구하세요.`,
          answer: 3, tol: 0.01,
          explain: R`$P$ 는 $t = 0$ 입니다. 곱의 미분법으로

$$\mathbf{r}'(t) = \langle e^{t}(\cos t - \sin t),\ e^{t}(\sin t + \cos t),\ e^{t} \rangle$$

$(\cos t - \sin t)^2 + (\sin t + \cos t)^2 = 2$ 이므로 $|\mathbf{r}'(t)| = \sqrt{e^{2t}(2 + 1)} = \sqrt{3}\,e^{t}$ 입니다.

$$s(t) = \int_0^t \sqrt{3}\,e^{u}\,du = \sqrt{3}\,(e^{t} - 1)$$

$s = 2\sqrt{3}$ 이면 $e^{t} - 1 = 2$, 즉 $e^{t} = 3$ 이에요. $z = e^{t}$ 이므로 $z = 3$ 입니다. (이때 $t = \ln 3$)`,
          hints: [R`$(\cos t - \sin t)^2 + (\sin t + \cos t)^2$ 을 전개하면 교차항이 지워져요.`, R`$s(t) = \sqrt{3}(e^{t} - 1)$ 에서 $e^{t}$ 의 값을 구하면 $z$ 좌표가 바로 나옵니다.`],
          trap: R`$s(t) = \sqrt{3}\,e^{t}$ 로 두어 아래끝 $t=0$ 에서의 값 $\sqrt{3}$ 을 빼지 않는 실수. 그러면 $e^t = 2$ 가 되어 답이 달라져요.`
        },
        {
          id: "calc-09-b09", kind: "mcq", level: 1, tag: "곡률",
          q: R`곡선의 곡률 $\kappa$ 의 **정의**로 옳은 것은? ($\mathbf{T}$ 는 단위접선벡터, $s$ 는 호의 길이)`,
          choices: [
            R`$\kappa = \left|\dfrac{d\mathbf{T}}{dt}\right|$`,
            R`$\kappa = \left|\dfrac{d\mathbf{r}}{ds}\right|$`,
            R`$\kappa = \left|\dfrac{d\mathbf{T}}{ds}\right|$`,
            R`$\kappa = \dfrac{ds}{dt}$`
          ],
          answer: 2,
          explain: R`곡률은 **호의 길이에 대한** 단위접선벡터의 변화율의 크기, $\kappa = |d\mathbf{T}/ds|$ 로 정의합니다. $t$ 가 아니라 $s$ 로 미분하는 것은 곡률이 매개변수화에 영향을 받지 않게 하기 위해서예요.`
        },
        {
          id: "calc-09-b10", kind: "mcq", level: 1, tag: "곡률",
          q: R`곡률에 대한 설명으로 **옳지 않은** 것은?`,
          choices: [
            R`직선의 곡률은 모든 점에서 $0$ 이다`,
            R`원의 반지름이 커질수록 곡률도 커진다`,
            R`곡률은 음수가 될 수 없다`,
            R`포물선 $y = x^2$ 의 곡률은 꼭짓점에서 최대이다`
          ],
          answer: 1,
          explain: R`반지름 $a$ 인 원의 곡률은 $1/a$ 이므로 반지름이 커질수록 곡률은 **작아져요**. 나머지는 모두 옳습니다: 직선은 $\mathbf{T}$ 가 일정해 $\kappa = 0$, 곡률은 벡터의 크기로 정의되므로 $0$ 이상, $y = x^2$ 은 $\kappa(x) = 2/(1+4x^2)^{3/2}$ 이 $x = 0$ 에서 최대입니다.`
        },
        {
          id: "calc-09-b11", kind: "num", level: 2, tag: "곡률",
          q: R`곡선 $\mathbf{r}(t) = \sqrt{6}\,t^2\,\mathbf{i} + 2t\,\mathbf{j} + 2t^3\,\mathbf{k}$ 의 $t = 1$ 인 점에서의 곡률을 구하세요. (소수 셋째 자리까지)`,
          answer: 0.077, tol: 0.001,
          explain: R`$\mathbf{r}'(t) = \langle 2\sqrt{6}\,t,\ 2,\ 6t^2 \rangle$, $\mathbf{r}''(t) = \langle 2\sqrt{6},\ 0,\ 12t \rangle$ 이므로 $t = 1$ 에서

$$\mathbf{r}'(1) = \langle 2\sqrt{6}, 2, 6 \rangle,\qquad \mathbf{r}''(1) = \langle 2\sqrt{6}, 0, 12 \rangle$$

$|\mathbf{r}'(1)| = \sqrt{24 + 4 + 36} = 8$ 이고

$$\mathbf{r}'(1) \times \mathbf{r}''(1) = \langle 2\cdot 12 - 6\cdot 0,\ 6\cdot 2\sqrt{6} - 2\sqrt{6}\cdot 12,\ 0 - 2\cdot 2\sqrt{6} \rangle = \langle 24,\ -12\sqrt{6},\ -4\sqrt{6} \rangle$$

크기는 $\sqrt{576 + 864 + 96} = \sqrt{1536} = 16\sqrt{6}$ 입니다.

$$\kappa(1) = \frac{16\sqrt{6}}{8^3} = \frac{\sqrt{6}}{32} \approx 0.077$$`,
          hints: [R`$t = 1$ 을 먼저 대입하고 숫자 벡터로 외적을 계산해요.`, R`$|\mathbf{r}'(1)| = 8$ 이므로 분모는 $8^3 = 512$ 입니다.`],
          trap: R`분모를 $|\mathbf{r}'|^2 = 64$ 로 두면 $0.61$ 이 나와요. 지수는 $3$ 입니다.`
        },
        {
          id: "calc-09-b12", kind: "num", level: 2, tag: "곡률",
          q: R`곡선 $y = x^3$ 의 $x = \dfrac{1}{2}$ 인 점에서의 곡률을 구하세요. (소수 셋째 자리까지)`,
          answer: 1.536, tol: 0.002,
          explain: R`$f'(x) = 3x^2$, $f''(x) = 6x$ 이므로 $f'\!\left(\tfrac12\right) = \tfrac34$, $f''\!\left(\tfrac12\right) = 3$ 입니다.

$$\kappa = \frac{|3|}{\left[1 + \tfrac{9}{16}\right]^{3/2}} = \frac{3}{\left(\tfrac{25}{16}\right)^{3/2}} = \frac{3}{\tfrac{125}{64}} = \frac{192}{125} = 1.536$$`,
          hints: [R`$y = f(x)$ 꼴이므로 $\kappa = |f''|/[1 + (f')^2]^{3/2}$ 를 써요.`, R`$\left(\tfrac{25}{16}\right)^{3/2} = \left(\tfrac{5}{4}\right)^3$ 입니다.`]
        },
        {
          id: "calc-09-b13", kind: "num", level: 3, tag: "곡률",
          q: R`곡선 $y = 2\ln x$ $(x > 0)$ 는 어떤 $x$ 에서 최대곡률을 가질까요? 그 $x$ 값을 구하세요. (소수 셋째 자리까지)`,
          answer: 1.414, tol: 0.002,
          explain: R`$f'(x) = \dfrac{2}{x}$, $f''(x) = -\dfrac{2}{x^2}$ 이므로

$$\kappa(x) = \frac{2/x^2}{\left(1 + 4/x^2\right)^{3/2}} = \frac{2/x^2}{(x^2 + 4)^{3/2}/x^3} = \frac{2x}{(x^2 + 4)^{3/2}}$$

미분하면

$$\kappa'(x) = \frac{2(x^2 + 4)^{3/2} - 2x \cdot \tfrac{3}{2}(x^2 + 4)^{1/2} \cdot 2x}{(x^2 + 4)^3} = \frac{2(x^2 + 4) - 6x^2}{(x^2 + 4)^{5/2}} = \frac{8 - 4x^2}{(x^2 + 4)^{5/2}}$$

$\kappa'(x) = 0$ 에서 $x = \sqrt{2} \approx 1.414$ 이고, 이 값의 왼쪽에서 $\kappa' > 0$, 오른쪽에서 $\kappa' < 0$ 이므로 최대입니다. 또한 $x \to \infty$ 일 때 $\kappa(x) \to 0$ 이에요.`,
          hints: [R`먼저 $\kappa(x)$ 를 $x$ 의 식으로 깔끔하게 정리해요($x > 0$ 이므로 $(1/x^2)^{3/2} = 1/x^3$).`, R`$\kappa(x) = \dfrac{2x}{(x^2+4)^{3/2}}$ 을 미분해 $0$ 이 되는 점을 찾습니다.`],
          trap: R`$f''$ 의 크기가 가장 큰 곳($x \to 0^+$)에서 곡률이 최대라고 생각하는 실수. 분모 $[1 + (f')^2]^{3/2}$ 도 함께 커지므로 실제로는 $x \to 0^+$ 에서 $\kappa \to 0$ 이에요.`
        },
        {
          id: "calc-09-b14", kind: "mcq", level: 2, tag: "곡률",
          q: R`꼭짓점이 원점이고 축이 $y$ 축인 포물선 중 원점에서의 곡률이 $6$ 인 것은?`,
          choices: [R`$y = 6x^2$`, R`$y = \dfrac{1}{6}x^2$`, R`$y = \dfrac{1}{12}x^2$`, R`$y = 3x^2$`],
          answer: 3,
          explain: R`$y = ax^2$ 이라 하면 $y' = 2ax$, $y'' = 2a$ 이고 원점에서 $y' = 0$ 이므로 $\kappa(0) = |2a|$ 입니다. $|2a| = 6$ 에서 $a = \pm 3$, 따라서 $y = 3x^2$ (또는 $y = -3x^2$) 이에요.`,
          hints: [R`$y = ax^2$ 으로 놓고 원점에서의 곡률을 $a$ 로 나타내 보세요.`]
        },
        {
          id: "calc-09-b15", kind: "short", level: 1, tag: "TNB 벡터",
          q: R`매끄러운 공간곡선 $\mathbf{r}(t)$ 에 대해 단위접선벡터 $\mathbf{T}$, 단위법선벡터 $\mathbf{N}$, 종법선벡터 $\mathbf{B}$ 의 정의식을 쓰고, 세 벡터가 서로 어떤 관계인지와 $\mathbf{N}$ 이 가리키는 방향을 설명하세요.`,
          answer: R`$\mathbf{T}(t) = \dfrac{\mathbf{r}'(t)}{|\mathbf{r}'(t)|}$, $\ \mathbf{N}(t) = \dfrac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|}$, $\ \mathbf{B}(t) = \mathbf{T}(t) \times \mathbf{N}(t)$ 입니다.

세 벡터는 모두 단위벡터이고 서로 직교해요. $|\mathbf{T}| = 1$ 이라 $\mathbf{T} \cdot \mathbf{T}' = 0$ 이므로 $\mathbf{N} \perp \mathbf{T}$ 이고, $\mathbf{B}$ 는 외적이라 둘 모두에 수직입니다. $\mathbf{N}$ 은 곡선이 굽어지는 쪽(오목한 쪽)을 가리키며, 세 벡터는 곡선을 따라 움직이는 TNB 틀을 이룹니다.`,
          rubric: [
            R`세 정의식 $\mathbf{T} = \mathbf{r}'/|\mathbf{r}'|$, $\mathbf{N} = \mathbf{T}'/|\mathbf{T}'|$, $\mathbf{B} = \mathbf{T} \times \mathbf{N}$ 을 정확히 썼다`,
            R`세 벡터가 서로 직교하는 단위벡터라는 점을 말했다`,
            R`$\mathbf{N}$ 이 곡선이 굽어지는(오목한) 방향을 가리킨다고 말했다`
          ],
          explain: R`정의의 순서가 중요해요: $\mathbf{r}' \to \mathbf{T} \to \mathbf{T}' \to \mathbf{N} \to \mathbf{B}$. $\mathbf{N}$ 은 $\mathbf{r}''$ 을 정규화한 것이 아니라 $\mathbf{T}'$ 을 정규화한 것이라는 점을 주의하세요.`
        },
        {
          id: "calc-09-b16", kind: "mcq", level: 2, tag: "TNB 벡터",
          q: R`곡선 $\mathbf{r}(t) = \langle 2\sin t,\ 5t,\ 2\cos t \rangle$ 의 단위법선벡터 $\mathbf{N}(t)$ 는?`,
          choices: [
            R`$\langle \sin t,\ 0,\ \cos t \rangle$`,
            R`$\dfrac{1}{\sqrt{29}}\langle 2\cos t,\ 5,\ -2\sin t \rangle$`,
            R`$\langle -\sin t,\ 0,\ -\cos t \rangle$`,
            R`$\dfrac{1}{\sqrt{29}}\langle -2\sin t,\ 0,\ -2\cos t \rangle$`
          ],
          answer: 2,
          explain: R`$\mathbf{r}'(t) = \langle 2\cos t, 5, -2\sin t \rangle$, $|\mathbf{r}'(t)| = \sqrt{4 + 25} = \sqrt{29}$ 이므로

$$\mathbf{T}(t) = \frac{1}{\sqrt{29}}\langle 2\cos t, 5, -2\sin t \rangle,\qquad \mathbf{T}'(t) = \frac{1}{\sqrt{29}}\langle -2\sin t, 0, -2\cos t \rangle$$

$|\mathbf{T}'(t)| = \dfrac{2}{\sqrt{29}}$ 이므로 $\mathbf{N}(t) = \dfrac{\mathbf{T}'(t)}{|\mathbf{T}'(t)|} = \langle -\sin t, 0, -\cos t \rangle$ 입니다. 곡선 위의 점에서 $y$ 축(나선의 축)을 향하는 벡터예요.`,
          hints: [R`$\mathbf{T}$ 를 구해 한 번 더 미분한 뒤, 그 크기로 나눕니다.`, R`$\mathbf{N}$ 은 반드시 크기가 $1$ 이어야 해요.`]
        },
        {
          id: "calc-09-b17", kind: "num", level: 2, tag: "곡률",
          q: R`곡선 $\mathbf{r}(t) = \langle 2\sin t,\ 5t,\ 2\cos t \rangle$ 의 곡률을 구하세요. (소수 셋째 자리까지)`,
          answer: 0.069, tol: 0.001,
          explain: R`$|\mathbf{r}'(t)| = \sqrt{29}$, $\mathbf{T}'(t) = \dfrac{1}{\sqrt{29}}\langle -2\sin t, 0, -2\cos t \rangle$ 에서 $|\mathbf{T}'(t)| = \dfrac{2}{\sqrt{29}}$ 이므로

$$\kappa = \frac{|\mathbf{T}'(t)|}{|\mathbf{r}'(t)|} = \frac{2/\sqrt{29}}{\sqrt{29}} = \frac{2}{29} \approx 0.069$$

외적 공식으로 확인: $\mathbf{r}'' = \langle -2\sin t, 0, -2\cos t \rangle$, $\mathbf{r}' \times \mathbf{r}'' = \langle -10\cos t, 4, 10\sin t \rangle$, 크기 $\sqrt{116} = 2\sqrt{29}$ 이므로 $\kappa = \dfrac{2\sqrt{29}}{29\sqrt{29}} = \dfrac{2}{29}$ 로 같아요. 나선은 곡률이 일정합니다.`,
          hints: [R`속력이 상수이므로 $\kappa = |\mathbf{T}'|/|\mathbf{r}'|$ 가 편해요.`, R`$|\mathbf{T}'(t)| = 2/\sqrt{29}$ 를 다시 $\sqrt{29}$ 로 나눕니다.`],
          trap: R`$|\mathbf{T}'| = 2/\sqrt{29} \approx 0.371$ 을 그대로 곡률이라고 답하는 실수. 속력으로 한 번 더 나눠야 해요.`
        },
        {
          id: "calc-09-b18", kind: "mcq", level: 2, tag: "법평면·접촉평면",
          q: R`곡선 $x = t^2$, $y = 2t$, $z = \ln t$ 위의 점 $(1, 2, 0)$ 에서의 **법평면**의 방정식은?`,
          choices: [
            R`$2x + 2y + z = 0$`,
            R`$2x + 2y + z = 6$`,
            R`$x + 2y = 5$`,
            R`$x - 2y + 2z = -3$`
          ],
          answer: 1,
          explain: R`점 $(1,2,0)$ 은 $t = 1$ 입니다. $\mathbf{r}'(t) = \left\langle 2t, 2, \tfrac{1}{t} \right\rangle$ 에서 $\mathbf{r}'(1) = \langle 2, 2, 1 \rangle$ 이고, 법평면은 접선벡터를 법선으로 가지므로

$$2(x - 1) + 2(y - 2) + 1(z - 0) = 0 \quad\Longleftrightarrow\quad 2x + 2y + z = 6$$`,
          hints: [R`법평면의 법선벡터는 접선벡터 $\mathbf{r}'$ 입니다.`, R`점 $(1,2,0)$ 을 지나야 하므로 상수항을 꼭 맞춰요.`]
        },
        {
          id: "calc-09-b19", kind: "mcq", level: 3, tag: "법평면·접촉평면",
          q: R`곡선 $x = t^2$, $y = 2t$, $z = \ln t$ 위의 점 $(1, 2, 0)$ 에서의 **접촉평면**의 방정식은?`,
          choices: [
            R`$x - 2y + 2z = -3$`,
            R`$2x + 2y + z = 6$`,
            R`$2x - z = 2$`,
            R`$x - 2y + 2z = 3$`
          ],
          answer: 0,
          explain: R`$t = 1$ 에서 $\mathbf{r}'(1) = \langle 2, 2, 1 \rangle$, $\mathbf{r}''(t) = \left\langle 2, 0, -\tfrac{1}{t^2} \right\rangle$ 이므로 $\mathbf{r}''(1) = \langle 2, 0, -1 \rangle$ 입니다. 접촉평면의 법선 $\mathbf{B}$ 는 $\mathbf{r}' \times \mathbf{r}''$ 과 같은 방향이에요.

$$\mathbf{r}'(1) \times \mathbf{r}''(1) = \langle 2\cdot(-1) - 1\cdot 0,\ 1\cdot 2 - 2\cdot(-1),\ 2\cdot 0 - 2\cdot 2 \rangle = \langle -2, 4, -4 \rangle$$

$-2$ 로 나눈 $\langle 1, -2, 2 \rangle$ 를 법선으로 쓰면

$$1(x - 1) - 2(y - 2) + 2(z - 0) = 0 \quad\Longleftrightarrow\quad x - 2y + 2z = -3$$

확인: $\langle 1,-2,2 \rangle \cdot \langle 2,2,1 \rangle = 0$ 이므로 접선이 이 평면에 포함됩니다.`,
          hints: [R`접촉평면의 법선은 $\mathbf{B}$ 이고, $\mathbf{B}$ 는 $\mathbf{r}' \times \mathbf{r}''$ 과 같은 방향이에요.`, R`$\mathbf{r}'(1) = \langle 2,2,1 \rangle$, $\mathbf{r}''(1) = \langle 2,0,-1 \rangle$ 의 외적을 구합니다.`],
          trap: R`법선벡터까지는 맞게 구하고 점 $(1,2,0)$ 을 대입할 때 $1 - 4 = -3$ 의 부호를 놓치는 실수.`
        },
        {
          id: "calc-09-b20", kind: "num", level: 2, tag: "접촉원",
          q: R`포물선 $y = x^2$ 의 점 $(1, 1)$ 에서의 접촉원의 반지름을 구하세요. (소수 둘째 자리까지)`,
          answer: 5.59, tol: 0.01,
          explain: R`$y' = 2x$, $y'' = 2$ 이므로 $\kappa(1) = \dfrac{2}{(1 + 4)^{3/2}} = \dfrac{2}{5\sqrt{5}}$ 입니다. 접촉원의 반지름은 곡률의 역수예요.

$$\rho = \frac{1}{\kappa} = \frac{5\sqrt{5}}{2} \approx 5.59$$

원점에서의 접촉원(반지름 $\tfrac12$)보다 훨씬 커요. 꼭짓점에서 멀어질수록 포물선이 완만해지기 때문입니다.`,
          hints: [R`먼저 $x = 1$ 에서의 곡률을 구해요.`, R`반지름은 $\rho = 1/\kappa$ 입니다.`],
          trap: R`곡률 $2/5^{3/2} \approx 0.18$ 을 그대로 반지름으로 답하는 실수.`
        },
        {
          id: "calc-09-b21", kind: "mcq", level: 3, tag: "접촉원",
          q: R`타원 $\dfrac{x^2}{4} + y^2 = 1$ 은 $x = 2\cos t$, $y = \sin t$ 로 매개변수화됩니다. 점 $(0, 1)$ 에서의 접촉원의 **중심**은?`,
          choices: [R`$(0,\ 5)$`, R`$\left(0,\ \dfrac{3}{4}\right)$`, R`$(0,\ -4)$`, R`$(0,\ -3)$`],
          answer: 3,
          explain: R`점 $(0,1)$ 은 $t = \pi/2$ 입니다. $\mathbf{r}(t) = \langle 2\cos t, \sin t, 0 \rangle$ 으로 보고 외적 공식을 쓰면

$$\mathbf{r}'\!\left(\tfrac{\pi}{2}\right) = \langle -2, 0, 0 \rangle,\qquad \mathbf{r}''\!\left(\tfrac{\pi}{2}\right) = \langle 0, -1, 0 \rangle$$

$\mathbf{r}' \times \mathbf{r}'' = \langle 0, 0, 2 \rangle$ 이므로 $\kappa = \dfrac{2}{2^3} = \dfrac{1}{4}$, 반지름 $\rho = 4$ 입니다.

$(0,1)$ 은 타원의 맨 위 점이고 타원은 그 아래쪽으로 오목하므로 $\mathbf{N} = \langle 0, -1 \rangle$ 이에요. 중심은 $(0, 1) + 4\langle 0, -1 \rangle = (0, -3)$ 입니다.`,
          hints: [R`평면곡선도 $z = 0$ 을 붙여 $\kappa = |\mathbf{r}' \times \mathbf{r}''|/|\mathbf{r}'|^3$ 을 쓸 수 있어요.`, R`중심은 점 $(0,1)$ 에서 오목한 쪽으로 반지름만큼 간 점입니다.`],
          trap: R`반지름 $4$ 를 구한 뒤 중심의 $y$ 좌표를 그대로 $-4$ 로 쓰는 실수. 출발점이 원점이 아니라 $(0,1)$ 이에요.`
        },
        {
          id: "calc-09-b22", kind: "mcq", level: 3, tag: "법평면·접촉평면",
          q: R`곡선 $x = t^2$, $y = 2t$, $z = t^3$ 위의 점 중에서, 그 점에서의 법평면이 평면 $2x - y - 6z = 3$ 과 평행한 점은?`,
          choices: [R`$(4,\ 4,\ 8)$`, R`$(4,\ -4,\ -8)$`, R`$(1,\ -2,\ -1)$`, R`그런 점은 없다`],
          answer: 1,
          explain: R`법평면의 법선벡터는 $\mathbf{r}'(t) = \langle 2t, 2, 3t^2 \rangle$ 이고, 주어진 평면의 법선벡터는 $\langle 2, -1, -6 \rangle$ 입니다. 두 평면이 평행하려면 $\mathbf{r}'(t) = c\langle 2, -1, -6 \rangle$ 이어야 해요.

- 둘째 성분: $2 = -c$ 에서 $c = -2$
- 첫째 성분: $2t = 2c = -4$ 에서 $t = -2$
- 셋째 성분 확인: $3t^2 = 12$, $-6c = 12$ 로 일치

따라서 $t = -2$ 이고 그 점은 $\mathbf{r}(-2) = (4, -4, -8)$ 입니다.`,
          hints: [R`법평면의 법선벡터는 $\mathbf{r}'(t)$ 입니다. 두 평면이 평행하면 법선벡터끼리 평행해요.`, R`$\langle 2t, 2, 3t^2 \rangle = c\langle 2, -1, -6 \rangle$ 을 성분별로 풉니다. 상수인 둘째 성분부터 보세요.`],
          trap: R`세 성분 중 두 개만 맞춰 보고 답을 정하는 실수. 평행하려면 세 성분의 비가 모두 같아야 해요.`
        }
      ]
    }
  );
})();
