(function () {
  const R = String.raw;
  window.TUTOR_UNITS = window.TUTOR_UNITS || [];
  window.TUTOR_UNITS.push(
    /* ===================== 12.1 벡터함수와 공간곡선 ===================== */
    {
      course: "calc",
      id: "calc-07",
      no: 7,
      title: "벡터함수와 공간곡선",
      subtitle: "12.1 벡터함수와 공간곡선",
      source: "대학미분적분학 중간.pdf",
      minutes: 50,
      objectives: [
        "벡터함수(vector function)의 성분함수와 정의역을 구할 수 있다",
        "벡터함수의 극한을 성분별로 계산하고, 연속의 뜻을 설명할 수 있다",
        "벡터방정식과 매개변수방정식을 오가며 직선·나선·선분 같은 공간곡선을 설명할 수 있다",
        "두 곡면의 교선을 매개변수화(parametrization)하여 벡터방정식으로 쓸 수 있다",
        "곡선이 점·곡면과 만나는지, 두 질점이 충돌하는지를 방정식으로 판정할 수 있다"
      ],
      pretest: [
        {
          id: "calc-07-p01", kind: "mcq", level: 1, tag: "공간곡선",
          q: R`시각 $t$ 에서 위치가 $(\cos t,\ \sin t,\ t)$ 인 점이 있어요. $t$ 가 커질 때 이 점은 공간에서 어떤 모양을 그릴까요?`,
          choices: [
            R`한 평면 위에서 제자리를 도는 원`,
            R`원기둥을 감으면서 위로 올라가는 스프링 모양(나선)`,
            R`비스듬히 뻗은 직선`,
            R`위로 볼록한 포물선`
          ],
          answer: 1,
          explain: R`$x = \cos t$, $y = \sin t$ 이므로 $x^2 + y^2 = 1$, 즉 점은 항상 원기둥 $x^2+y^2=1$ 위에 있어요. 위에서 내려다보면 원을 돌고 있는데, 동시에 높이 $z = t$ 가 계속 커지므로 스프링처럼 감기면서 올라갑니다. 이 곡선을 **나선(helix)** 이라고 해요.`
        },
        {
          id: "calc-07-p02", kind: "mcq", level: 1, tag: "극한·연속",
          q: R`함숫값이 벡터인 함수 $\mathbf{r}(t) = \langle f(t),\ g(t),\ h(t) \rangle$ 의 극한 $\displaystyle\lim_{t\to a}\mathbf{r}(t)$ 는 어떻게 구할까요?`,
          choices: [
            R`세 성분함수 $f, g, h$ 의 극한을 따로 구해서 다시 벡터로 묶는다`,
            R`벡터의 크기 $|\mathbf{r}(t)|$ 의 극한만 구하면 된다`,
            R`세 성분의 극한을 모두 더한 수가 극한이다`,
            R`벡터는 수가 아니므로 극한을 정의할 수 없다`
          ],
          answer: 0,
          explain: R`벡터함수의 극한은 **성분함수들의 극한을 취해서** 정의합니다. 즉 $\displaystyle\lim_{t\to a}\mathbf{r}(t) = \left\langle \lim_{t\to a} f(t),\ \lim_{t\to a} g(t),\ \lim_{t\to a} h(t) \right\rangle$ 이에요. 결과도 벡터입니다.`
        },
        {
          id: "calc-07-p03", kind: "mcq", level: 1, tag: "충돌·교점",
          q: R`두 비행기가 각자 다른 곡선을 따라 날고 있는데, 두 곡선이 공간의 한 점에서 만난다고 해요. 두 비행기는 충돌할까요?`,
          choices: [
            R`경로가 만나므로 반드시 충돌한다`,
            R`경로가 서로 다른 곡선이므로 절대 충돌하지 않는다`,
            R`두 비행기가 **같은 시각**에 그 점에 있을 때만 충돌한다`,
            R`두 비행기의 속력이 같을 때만 충돌한다`
          ],
          answer: 2,
          explain: R`곡선이 만나도 **같은 시각에 같은 위치**에 있어야 충돌이에요. 한 비행기가 그 점을 지나간 뒤에 다른 비행기가 도착하면 경로는 만나지만 충돌은 없습니다. 이 단원 마지막에서 벡터함수로 이것을 판정하는 방법을 배워요.`
        }
      ],
      steps: [
        {
          type: "explain", title: "벡터함수와 성분함수",
          body: R`지금까지의 함수는 실수를 넣으면 실수가 나오는 **실숫값 함수**였어요. **벡터함수(vector function, 벡터를 값으로 갖는 함수)** 는 정의역이 실수의 집합이고 치역이 벡터의 집합인 함수입니다. 즉 수 $t$ 하나를 넣으면 삼차원 벡터 $\mathbf{r}(t)$ 하나가 정해져요.

벡터 $\mathbf{r}(t)$ 의 세 성분을 $f(t), g(t), h(t)$ 라 하면, 이 실숫값 함수 $f, g, h$ 를 $\mathbf{r}$ 의 **성분함수(component functions)** 라고 부릅니다.

> $$\mathbf{r}(t) = \langle f(t),\ g(t),\ h(t) \rangle = f(t)\,\mathbf{i} + g(t)\,\mathbf{j} + h(t)\,\mathbf{k}$$

비유하자면 벡터함수는 "시각 $t$ 를 넣으면 그때의 위치를 알려 주는 내비게이션"이에요. 실제로 대부분의 응용에서 $t$ 는 시간을 나타내기 때문에 독립변수로 문자 $t$ 를 씁니다.

**정의역**은 따로 말이 없으면 관례에 따라 $\mathbf{r}(t)$ 의 식이 정의되는 모든 $t$ 로 잡아요. 벡터가 정해지려면 세 성분이 **모두** 정의되어야 하므로, 세 성분함수 정의역의 **공통부분(교집합)** 이 $\mathbf{r}$ 의 정의역입니다.`
        },
        {
          type: "worked", title: "예제 1: 성분함수와 정의역",
          problem: R`$\mathbf{r}(t) = \left\langle t^3,\ \ln(3-t),\ \sqrt{t} \right\rangle$ 의 성분함수와 정의역을 구하세요.`,
          steps: [
            {
              ask: "성분함수 세 개는 각각 무엇일까요?",
              body: R`꺾쇠 안의 세 식을 순서대로 읽으면 됩니다.

$$f(t) = t^3,\qquad g(t) = \ln(3-t),\qquad h(t) = \sqrt{t}$$

벡터함수 문제는 이렇게 **성분함수 세 개의 문제로 쪼개는 것**이 항상 첫걸음이에요.`
            },
            {
              ask: "각 성분함수는 어떤 t 에서 정의될까요?",
              body: R`- $t^3$ : 다항식이므로 모든 실수에서 정의돼요.
- $\ln(3-t)$ : 로그의 진수는 양수여야 하므로 $3 - t > 0$, 즉 $t < 3$.
- $\sqrt{t}$ : 제곱근 안은 0 이상이어야 하므로 $t \ge 0$.`
            },
            {
              ask: "세 조건을 어떻게 합쳐야 할까요? (합집합? 교집합?)",
              body: R`세 성분이 **동시에** 정의되어야 벡터 $\mathbf{r}(t)$ 가 정해지므로 **교집합**을 잡습니다. $t \ge 0$ 이면서 $t < 3$ 이어야 하니

$$0 \le t < 3$$

이에요. 끝점을 꼼꼼히 봐야 해요. $t = 0$ 은 $\sqrt{0} = 0$ 이 정의되므로 포함, $t = 3$ 은 $\ln 0$ 이 정의되지 않으므로 제외입니다.`
            }
          ],
          answer: R`성분함수는 $f(t) = t^3$, $g(t) = \ln(3-t)$, $h(t) = \sqrt{t}$ 이고, 정의역은 구간 $[0, 3)$`
        },
        {
          type: "check",
          q: {
            id: "calc-07-c01", kind: "mcq", level: 2, tag: "정의역",
            q: R`벡터함수 $\mathbf{r}(t) = \left\langle \ln(t+2),\ \dfrac{t}{\sqrt{16 - t^2}},\ 3^t \right\rangle$ 의 정의역은 무엇일까요?`,
            choices: [
              R`$[-2,\ 4]$`,
              R`$(-4,\ 4)$`,
              R`$(-2,\ 4)$`,
              R`$(-2,\ \infty)$`
            ],
            answer: 2,
            explain: R`성분별로 조건을 구해요.

- $\ln(t+2)$ : $t + 2 > 0$ 이므로 $t > -2$
- $\dfrac{t}{\sqrt{16-t^2}}$ : 분모가 0이 되면 안 되고 근호 안은 0 이상이어야 하므로 $16 - t^2 > 0$, 즉 $-4 < t < 4$
- $3^t$ : 모든 실수

세 조건의 교집합은 $-2 < t < 4$, 즉 $(-2, 4)$ 입니다.`,
            hints: [R`성분함수 세 개의 정의역을 따로 구한 뒤 공통부분을 잡아요.`, R`근호가 **분모**에 있으면 근호 안이 0이어도 안 됩니다. 로그의 진수는 0보다 커야 해요.`],
            trap: R`끝점을 포함시키는 실수. $t=-2$ 에서는 $\ln 0$, $t = 4$ 에서는 분모가 0이라 둘 다 빠져요.`
          }
        },
        {
          type: "explain", title: "벡터함수의 극한",
          body: R`벡터함수 $\mathbf{r}$ 의 **극한(limit)** 은 성분함수들의 극한을 취해서 정의합니다.

> $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ 일 때, 각 성분함수의 극한이 존재하면
> $$\lim_{t\to a}\mathbf{r}(t) = \left\langle \lim_{t\to a} f(t),\ \lim_{t\to a} g(t),\ \lim_{t\to a} h(t) \right\rangle$$

기하학적으로 $\displaystyle\lim_{t\to a}\mathbf{r}(t) = \mathbf{L}$ 이라는 것은, $t$ 가 $a$ 에 가까워질 때 벡터 $\mathbf{r}(t)$ 의 **길이와 방향**이 벡터 $\mathbf{L}$ 의 길이와 방향에 다가간다는 뜻이에요. 화살표 끝이 한 점으로 모여드는 그림을 떠올리면 됩니다.

성분 중 **하나라도** 극한이 존재하지 않으면 벡터함수의 극한도 존재하지 않아요.

벡터함수의 극한은 실숫값 함수의 극한과 같은 규칙을 따릅니다. $\mathbf{u}, \mathbf{v}$ 가 $t \to a$ 일 때 극한을 갖고 $c$ 가 상수이면

- $\lim\,[\mathbf{u}(t) + \mathbf{v}(t)] = \lim \mathbf{u}(t) + \lim \mathbf{v}(t)$
- $\lim\, c\,\mathbf{u}(t) = c\,\lim \mathbf{u}(t)$
- $\lim\,[\mathbf{u}(t)\cdot\mathbf{v}(t)] = \lim \mathbf{u}(t)\cdot\lim \mathbf{v}(t)$
- $\lim\,[\mathbf{u}(t)\times\mathbf{v}(t)] = \lim \mathbf{u}(t)\times\lim \mathbf{v}(t)$

실제 계산에서는 성분마다 1변수 미적분에서 배운 극한 기술(대입, 약분, $\frac{\sin x}{x} \to 1$, 로피탈 법칙 등)을 그대로 쓰면 돼요.`
        },
        {
          type: "worked", title: "예제 2: 벡터함수의 극한",
          problem: R`$\mathbf{r}(t) = (1 + t^3)\,\mathbf{i} + t e^{-t}\,\mathbf{j} + \dfrac{\sin t}{t}\,\mathbf{k}$ 일 때, $\displaystyle\lim_{t\to 0}\mathbf{r}(t)$ 를 구하세요.`,
          steps: [
            {
              ask: "벡터의 극한을 어떤 문제로 바꿔서 풀까요?",
              body: R`극한의 정의에 따라 $\mathbf{r}$ 의 극한은 성분함수의 극한을 성분으로 갖는 벡터예요. 그래서 실숫값 함수의 극한 문제 세 개로 나눕니다.

$$\lim_{t\to 0}\mathbf{r}(t) = \left[\lim_{t\to 0}(1+t^3)\right]\mathbf{i} + \left[\lim_{t\to 0} t e^{-t}\right]\mathbf{j} + \left[\lim_{t\to 0}\frac{\sin t}{t}\right]\mathbf{k}$$`
            },
            {
              ask: "첫째, 둘째 성분의 극한은 얼마일까요?",
              body: R`둘 다 $t = 0$ 에서 연속인 함수이므로 그냥 대입하면 돼요.

$$\lim_{t\to 0}(1 + t^3) = 1,\qquad \lim_{t\to 0} t e^{-t} = 0 \cdot e^{0} = 0$$`
            },
            {
              ask: "셋째 성분은 t = 0 을 대입할 수 없어요. 어떻게 할까요?",
              body: R`$\dfrac{\sin t}{t}$ 는 $t = 0$ 에서 $\dfrac{0}{0}$ 꼴이라 대입이 안 됩니다. 하지만 1변수 미적분에서 배운 유명한 극한이 있어요.

$$\lim_{t\to 0}\frac{\sin t}{t} = 1$$

**함숫값이 없어도 극한은 존재할 수 있다**는 점을 기억하세요.`
            },
            {
              ask: "세 결과를 어떻게 정리할까요?",
              body: R`세 극한을 다시 벡터로 묶습니다.

$$\lim_{t\to 0}\mathbf{r}(t) = 1\,\mathbf{i} + 0\,\mathbf{j} + 1\,\mathbf{k} = \mathbf{i} + \mathbf{k}$$

답은 수가 아니라 **벡터**라는 점에 주의해요.`
            }
          ],
          answer: R`$\displaystyle\lim_{t\to 0}\mathbf{r}(t) = \mathbf{i} + \mathbf{k} = \langle 1, 0, 1 \rangle$`
        },
        {
          type: "check",
          q: {
            id: "calc-07-c02", kind: "mcq", level: 2, tag: "극한·연속",
            q: R`$\displaystyle\lim_{t\to 0}\left\langle e^{-2t},\ \frac{\sin^2 3t}{t^2},\ 4\cos t \right\rangle$ 를 구하면?`,
            choices: [
              R`$\langle 1,\ 3,\ 4 \rangle$`,
              R`$\langle 1,\ 1,\ 4 \rangle$`,
              R`$\langle 1,\ 0,\ 4 \rangle$`,
              R`$\langle 1,\ 9,\ 4 \rangle$`
            ],
            answer: 3,
            explain: R`성분별로 계산해요.

- $e^{-2t} \to e^0 = 1$
- $\dfrac{\sin^2 3t}{t^2} = \left(\dfrac{\sin 3t}{t}\right)^2 = \left(3\cdot\dfrac{\sin 3t}{3t}\right)^2 \to (3\cdot 1)^2 = 9$
- $4\cos t \to 4\cos 0 = 4$

따라서 극한은 $\langle 1, 9, 4 \rangle$ 입니다.`,
            hints: [R`성분 세 개의 극한을 따로 구해요. 가운데 성분만 $\frac{0}{0}$ 꼴입니다.`, R`$\dfrac{\sin 3t}{t} = 3\cdot\dfrac{\sin 3t}{3t}$ 로 바꾸고, 전체가 제곱이라는 점을 잊지 마세요.`],
            trap: R`$\dfrac{\sin 3t}{t} \to 3$ 까지 구하고 제곱을 빠뜨려 3이라고 쓰는 실수가 많아요.`
          }
        },
        {
          type: "explain", title: "벡터함수의 연속",
          body: R`벡터함수 $\mathbf{r}$ 이

> $$\lim_{t\to a}\mathbf{r}(t) = \mathbf{r}(a)$$

를 만족할 때 **$a$ 에서 연속(continuous at $a$)** 이라고 합니다. 실숫값 함수의 연속과 식의 모양이 똑같아요. 이 한 줄 안에는 조건이 세 가지 들어 있습니다: $\mathbf{r}(a)$ 가 정의되고, 극한이 존재하고, 그 둘이 같아야 해요.

극한을 성분별로 정의했으므로 다음이 바로 따라 나옵니다.

> $\mathbf{r}$ 이 $a$ 에서 연속 $\iff$ 성분함수 $f, g, h$ 가 **모두** $a$ 에서 연속

예를 들어 $\mathbf{r}(t) = \langle t^3, \ln(3-t), \sqrt{t} \rangle$ 는 세 성분이 정의역 $[0, 3)$ 에서 모두 연속이므로 그 구간에서 연속인 벡터함수예요. 반대로 예제 2의 $\mathbf{r}(t)$ 는 $t \to 0$ 일 때 극한 $\mathbf{i} + \mathbf{k}$ 는 있지만, $\frac{\sin t}{t}$ 가 $t = 0$ 에서 정의되지 않아 $\mathbf{r}(0)$ 이 없으므로 $0$ 에서 연속이 아닙니다.

직관적으로 연속인 벡터함수는 화살표 끝이 **끊기거나 순간이동하지 않고** 움직이는 함수예요. 그래서 다음 단계에서 보듯이 연속인 벡터함수는 이어진 곡선 하나를 그립니다.`
        },
        {
          type: "why",
          prompt: "벡터함수의 극한과 연속을 '성분별로' 따져도 되는 이유는 무엇일까요? 벡터 r(t)가 벡터 L에 가까워진다는 것과, 세 성분이 각각 가까워진다는 것이 왜 같은 말인지 설명해 보세요.",
          answer: R`벡터 $\mathbf{r}(t)$ 가 $\mathbf{L} = \langle L_1, L_2, L_3 \rangle$ 에 가까워진다는 것은 두 벡터의 **차이의 길이** $|\mathbf{r}(t) - \mathbf{L}|$ 가 0에 가까워진다는 뜻이에요. 교재는 이것을 $\varepsilon$–$\delta$ 로 이렇게 씁니다: 임의의 $\varepsilon > 0$ 에 대하여 $0 < |t - a| < \delta$ 일 때 $|\mathbf{r}(t) - \mathbf{L}| < \varepsilon$ 을 만족하는 $\delta > 0$ 이 존재한다.

그런데 차이의 길이는

$$|\mathbf{r}(t) - \mathbf{L}| = \sqrt{(f(t)-L_1)^2 + (g(t)-L_2)^2 + (h(t)-L_3)^2}$$

이에요. 이 식에서 두 방향이 모두 보입니다.

- 길이가 작으면 성분 차이도 작아요. 각 성분의 차이 $|f(t) - L_1|$ 은 전체 길이보다 클 수 없기 때문입니다.
- 세 성분 차이가 모두 작으면 제곱해서 더한 뒤 제곱근을 씌운 길이도 작아요.

그래서 "벡터가 다가간다"와 "세 성분이 각각 다가간다"는 **같은 말**이고, 극한을 성분별로 계산해도 됩니다. 연속은 "극한 = 함숫값"이므로, 같은 이유로 $\mathbf{r}$ 이 연속인 것과 세 성분함수가 모두 연속인 것이 같아요.`
        },
        {
          type: "explain", title: "공간곡선과 매개변수방정식",
          body: R`연속인 벡터함수와 공간곡선은 밀접하게 연결되어 있어요. $f, g, h$ 가 구간 $I$ 에서 정의된 연속인 실숫값 함수라고 합시다. $t$ 가 $I$ 안에서 변할 때

> $$x = f(t),\qquad y = g(t),\qquad z = h(t)$$

를 만족하는 공간의 모든 점 $(x, y, z)$ 의 집합 $C$ 를 **공간곡선(space curve)** 이라고 부릅니다. 위 세 식을 $C$ 의 **매개변수방정식(parametric equations)**, $t$ 를 **매개변수(parameter)** 라고 해요.

$C$ 는 시각 $t$ 에서의 위치가 $(f(t), g(t), h(t))$ 인 **질점이 지나간 자취**라고 생각할 수 있습니다. 이제 벡터함수 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ 를 보면, $\mathbf{r}(t)$ 는 $C$ 위의 점 $P(f(t), g(t), h(t))$ 의 **위치벡터**예요. 원점에 꼬리를 고정한 화살표가 움직이면서 그 **끝점**이 곡선 $C$ 를 그리는 것입니다.

정리하면 같은 곡선을 두 가지로 쓸 수 있어요.

- 벡터방정식: $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$
- 매개변수방정식: $x = f(t),\ y = g(t),\ z = h(t)$

**평면곡선**도 벡터로 쓸 수 있습니다. 예를 들어 매개변수방정식 $x = t^2 - 2t$, $y = t + 1$ 로 주어진 곡선은 $\mathbf{r}(t) = \langle t^2 - 2t,\ t + 1 \rangle = (t^2 - 2t)\,\mathbf{i} + (t+1)\,\mathbf{j}$ 로 쓸 수 있어요(여기서는 $\mathbf{i} = \langle 1, 0 \rangle$, $\mathbf{j} = \langle 0, 1 \rangle$).`
        },
        {
          type: "worked", title: "예제 3: 벡터함수가 나타내는 곡선 설명하기 (직선)",
          problem: R`벡터함수 $\mathbf{r}(t) = \langle 1 + t,\ 2 + 5t,\ -1 + 6t \rangle$ 에 의하여 정의되는 곡선을 설명하세요.`,
          steps: [
            {
              ask: "먼저 벡터방정식을 어떤 꼴로 바꿔 볼까요?",
              body: R`성분을 하나씩 읽어 매개변수방정식으로 씁니다.

$$x = 1 + t,\qquad y = 2 + 5t,\qquad z = -1 + 6t$$

곡선의 정체를 알아낼 때는 이렇게 $x, y, z$ 로 풀어 쓰는 것이 출발점이에요.`
            },
            {
              ask: "세 식이 모두 t 의 1차식이에요. 11.5절에서 본 어떤 도형의 방정식일까요?",
              body: R`점 $(x_0, y_0, z_0)$ 을 지나고 벡터 $\langle a, b, c \rangle$ 에 평행한 **직선**의 매개변수방정식 $x = x_0 + at$, $y = y_0 + bt$, $z = z_0 + ct$ 와 같은 꼴이에요.

- 상수항을 모으면 지나는 점: $(1, 2, -1)$ ($t = 0$ 일 때의 위치)
- $t$ 의 계수를 모으면 방향벡터: $\langle 1, 5, 6 \rangle$`
            },
            {
              ask: "벡터 기호로는 어떻게 한 줄로 쓸 수 있을까요?",
              body: R`$\mathbf{r}_0 = \langle 1, 2, -1 \rangle$, $\mathbf{v} = \langle 1, 5, 6 \rangle$ 라 하면

$$\mathbf{r}(t) = \langle 1, 2, -1 \rangle + t\,\langle 1, 5, 6 \rangle = \mathbf{r}_0 + t\,\mathbf{v}$$

이것은 11.5절에서 배운 직선의 벡터방정식 그대로예요. $\mathbf{r}_0$ 에서 출발해 $\mathbf{v}$ 방향으로 $t$ 배만큼 간 점들의 모임입니다.`
            }
          ],
          answer: R`점 $(1, 2, -1)$ 을 지나고 벡터 $\langle 1, 5, 6 \rangle$ 에 평행한 직선`
        },
        {
          type: "worked", title: "예제 4: 나선(helix) 그리기",
          problem: R`벡터방정식이 $\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + t\,\mathbf{k}$ 인 곡선을 설명(스케치)하세요.`,
          steps: [
            {
              ask: "매개변수방정식으로 쓰면 어떻게 될까요?",
              body: R`$$x = \cos t,\qquad y = \sin t,\qquad z = t$$

이번에는 1차식이 아니라서 직선이 아니에요. 성분들 사이의 **관계식**을 찾아서 곡선이 어떤 곡면 위에 있는지 알아봅니다.`
            },
            {
              ask: "x 와 y 사이에 t 가 사라지는 관계식이 있을까요?",
              body: R`$\cos^2 t + \sin^2 t = 1$ 을 쓰면

$$x^2 + y^2 = \cos^2 t + \sin^2 t = 1$$

$z$ 에 대한 조건이 없는 $x^2 + y^2 = 1$ 은 공간에서 **원기둥**이에요. 따라서 이 곡선은 원기둥 $x^2 + y^2 = 1$ 위에 놓여 있습니다.`
            },
            {
              ask: "위에서 내려다보면(xy평면에 사영하면) 점은 어떻게 움직일까요?",
              body: R`점 $(x, y, z)$ 는 점 $(x, y, 0)$ 의 바로 위에 있어요. 그림자에 해당하는 $(x, y, 0) = (\cos t, \sin t, 0)$ 은 $xy$ 평면의 원 $x^2 + y^2 = 1$ 위를 **반시계 방향**으로 돕니다. 즉 곡선을 $xy$ 평면에 사영하면 $\mathbf{r}(t) = \langle \cos t, \sin t, 0 \rangle$ 인 원이 돼요.`
            },
            {
              ask: "그러면 높이 z 는 어떻게 변할까요?",
              body: R`$z = t$ 이므로 $t$ 가 증가하면 높이도 똑같이 증가합니다. 돌면서 동시에 올라가니까 곡선은 원기둥을 따라 **스프링 모양으로 감기면서 위로** 올라가요.

몇 점을 찍어 보면 확인됩니다: $t = 0$ 에서 $(1, 0, 0)$, $t = \frac{\pi}{2}$ 에서 $\left(0, 1, \frac{\pi}{2}\right)$. 한 바퀴($t$ 가 $2\pi$ 증가) 돌 때마다 높이가 $2\pi$ 만큼 올라가요. 이 타래송곳 모양은 감긴 스프링이나 DNA의 이중나선 구조에서도 나타납니다.`
            }
          ],
          answer: R`원기둥 $x^2 + y^2 = 1$ 위를 반시계 방향으로 돌면서 위로 올라가는 **나선(helix)**`
        },
        {
          type: "explain", title: "두 점을 잇는 선분의 벡터방정식",
          body: R`곡선의 방정식을 보고 모양을 알아냈으니, 이번에는 거꾸로 **도형이 주어졌을 때 방정식을 만드는** 연습을 해요. 가장 기본은 선분입니다.

위치벡터가 $\mathbf{r}_0$ 인 점에서 $\mathbf{r}_1$ 인 점까지를 잇는 **선분**의 벡터방정식은 11.5절에서 보인 것처럼

> $$\mathbf{r}(t) = (1 - t)\,\mathbf{r}_0 + t\,\mathbf{r}_1,\qquad 0 \le t \le 1$$

입니다. $t = 0$ 을 넣으면 $\mathbf{r}_0$ (출발점), $t = 1$ 을 넣으면 $\mathbf{r}_1$ (도착점)이 나오는지 바로 확인할 수 있어요.

식을 $\mathbf{r}(t) = \mathbf{r}_0 + t\,(\mathbf{r}_1 - \mathbf{r}_0)$ 로 고쳐 쓰면 뜻이 더 잘 보입니다. 출발점에서 **도착점을 향하는 벡터** $\mathbf{r}_1 - \mathbf{r}_0$ 의 $t$ 배만큼 간 지점이에요. 그래서 $t = \frac{1}{2}$ 이면 정확히 중점이고, $t$ 는 "전체 길이의 몇 분의 몇을 왔는가"를 나타냅니다.

범위 $0 \le t \le 1$ 이 핵심이에요. 이 제한을 빼고 $t$ 를 모든 실수로 두면 선분이 아니라 두 점을 지나는 **직선 전체**가 됩니다.`
        },
        {
          type: "worked", title: "예제 5: 선분의 벡터방정식과 매개변수방정식",
          problem: R`점 $P(1, 3, -2)$ 와 $Q(2, -1, 3)$ 을 잇는 선분의 벡터방정식과 매개변수방정식을 구하세요.`,
          steps: [
            {
              ask: "공식에 넣을 r₀ 와 r₁ 은 무엇일까요?",
              body: R`선분의 벡터방정식 $\mathbf{r}(t) = (1-t)\,\mathbf{r}_0 + t\,\mathbf{r}_1$, $0 \le t \le 1$ 에서 $\mathbf{r}_0$ 는 출발점, $\mathbf{r}_1$ 은 도착점의 위치벡터예요.

$$\mathbf{r}_0 = \langle 1, 3, -2 \rangle,\qquad \mathbf{r}_1 = \langle 2, -1, 3 \rangle$$`
            },
            {
              ask: "공식에 대입하면 벡터방정식은?",
              body: R`$$\mathbf{r}(t) = (1-t)\,\langle 1, 3, -2 \rangle + t\,\langle 2, -1, 3 \rangle,\qquad 0 \le t \le 1$$

이대로도 답이지만, 성분별로 정리하면 더 쓰기 편해요.`
            },
            {
              ask: "성분별로 정리해 보세요. x 성분은 (1−t)·1 + t·2 입니다.",
              body: R`- $x$ : $(1-t)(1) + t(2) = 1 + t$
- $y$ : $(1-t)(3) + t(-1) = 3 - 4t$
- $z$ : $(1-t)(-2) + t(3) = -2 + 5t$

$$\mathbf{r}(t) = \langle 1 + t,\ 3 - 4t,\ -2 + 5t \rangle,\qquad 0 \le t \le 1$$

$t$ 의 계수 $\langle 1, -4, 5 \rangle$ 가 바로 $\overrightarrow{PQ} = \mathbf{r}_1 - \mathbf{r}_0$ 인지 확인해 보면 검산이 됩니다.`
            },
            {
              ask: "매개변수방정식으로 쓰고, 끝점을 확인해 볼까요?",
              body: R`$$x = 1 + t,\qquad y = 3 - 4t,\qquad z = -2 + 5t,\qquad 0 \le t \le 1$$

$t = 0$ 이면 $(1, 3, -2) = P$, $t = 1$ 이면 $(2, -1, 3) = Q$ 이므로 맞아요. 범위 $0 \le t \le 1$ 을 반드시 함께 써야 선분입니다.`
            }
          ],
          answer: R`벡터방정식 $\mathbf{r}(t) = \langle 1 + t,\ 3 - 4t,\ -2 + 5t \rangle$, 매개변수방정식 $x = 1 + t$, $y = 3 - 4t$, $z = -2 + 5t$ (둘 다 $0 \le t \le 1$)`
        },
        {
          type: "explain", title: "두 곡면의 교선을 매개변수화하기",
          body: R`두 곡면이 만나면 보통 곡선이 생겨요. 이 **교선**의 벡터방정식을 구하는 것이 이 절의 대표 유형입니다. 곡선을 벡터방정식으로 나타낸 것을 그 곡선의 **매개변수화(parametrization)** 라고 해요.

방법은 "한 곡면의 식으로 $x, y$ (또는 두 변수)를 $t$ 로 나타내고, 다른 곡면의 식으로 나머지 변수를 구한다"입니다.

1. **원기둥 $x^2 + y^2 = a^2$ 가 있으면**: $xy$ 평면으로의 사영이 반지름 $a$ 인 원이므로 $x = a\cos t$, $y = a\sin t$ $(0 \le t \le 2\pi)$ 로 둡니다.
2. **$y = x^2$ 처럼 한 변수가 다른 변수의 함수이면**: 독립변수를 $x = t$ 로 두고 $y = t^2$ 으로 씁니다.
3. 이렇게 정한 $x, y$ 를 **다른 곡면의 식에 대입**해서 $z$ 를 $t$ 로 나타냅니다.

원기둥에 $\cos t, \sin t$ 를 쓰는 이유는 $\cos^2 t + \sin^2 t = 1$ 덕분에 $x^2 + y^2 = a^2$ 이 저절로 성립하기 때문이에요. 곡면의 식을 만족하도록 미리 $x, y$ 를 골라 두는 셈입니다.

답을 구한 뒤에는 $x(t), y(t), z(t)$ 를 **두 곡면의 식에 모두 대입해** 성립하는지 확인하면 실수를 잡을 수 있어요.`
        },
        {
          type: "worked", title: "예제 6: 원기둥과 평면의 교선",
          problem: R`원기둥 $x^2 + y^2 = 1$ 과 평면 $y + z = 2$ 가 만나서 생기는 곡선 $C$ 를 나타내는 벡터방정식을 구하세요.`,
          steps: [
            {
              ask: "곡선 C 를 xy평면에 사영하면(위에서 내려다보면) 어떤 도형일까요?",
              body: R`$C$ 는 원기둥 위에 있으므로 $C$ 의 모든 점은 $x^2 + y^2 = 1$ 을 만족해요. 따라서 $xy$ 평면으로의 사영은 원 $x^2 + y^2 = 1$, $z = 0$ 입니다. 비스듬한 평면이 원기둥을 자르는 것이니 $C$ 자체는 기울어진 **타원**이에요.`
            },
            {
              ask: "원 x² + y² = 1 을 매개변수 t 로 어떻게 나타낼까요?",
              body: R`원의 표준 매개변수화를 씁니다.

$$x = \cos t,\qquad y = \sin t,\qquad 0 \le t \le 2\pi$$

$t$ 가 $0$ 에서 $2\pi$ 까지 가면 원을 정확히 한 바퀴 돌아요.`
            },
            {
              ask: "z 는 어느 식에서 구할까요?",
              body: R`아직 쓰지 않은 **평면의 방정식** $y + z = 2$ 에서 구합니다.

$$z = 2 - y = 2 - \sin t$$

$x, y$ 는 원기둥에서, $z$ 는 평면에서 얻은 것이니 이 점은 두 곡면 위에 동시에 있어요.`
            },
            {
              ask: "벡터방정식으로 정리하고, 맞는지 확인해 보세요.",
              body: R`매개변수방정식은 $x = \cos t$, $y = \sin t$, $z = 2 - \sin t$ $(0 \le t \le 2\pi)$ 이고, 대응되는 벡터방정식은

$$\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + (2 - \sin t)\,\mathbf{k},\qquad 0 \le t \le 2\pi$$

검산: $x^2 + y^2 = \cos^2 t + \sin^2 t = 1$ 이고, $y + z = \sin t + (2 - \sin t) = 2$ 예요. 점도 찍어 보면 $t = 0$ 에서 $(1, 0, 2)$, $t = \frac{\pi}{2}$ 에서 $(0, 1, 1)$, $t = \pi$ 에서 $(-1, 0, 2)$, $t = \frac{3\pi}{2}$ 에서 $(0, -1, 3)$ 을 차례로 지납니다. 이 순서가 $t$ 가 증가할 때 $C$ 가 진행하는 방향이에요.`
            }
          ],
          answer: R`$\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + (2 - \sin t)\,\mathbf{k}$, $\ 0 \le t \le 2\pi$`
        },
        {
          type: "check",
          q: {
            id: "calc-07-c03", kind: "mcq", level: 2, tag: "선분·교선",
            q: R`원기둥 $x^2 + y^2 = 9$ 와 곡면 $z = xy$ 의 교선을 나타내는 벡터방정식은 무엇일까요? ($0 \le t \le 2\pi$)`,
            choices: [
              R`$\mathbf{r}(t) = \langle 3\cos t,\ 3\sin t,\ 9\sin t\cos t \rangle$`,
              R`$\mathbf{r}(t) = \langle 3\cos t,\ 3\sin t,\ 3\sin t\cos t \rangle$`,
              R`$\mathbf{r}(t) = \langle \cos t,\ \sin t,\ \sin t\cos t \rangle$`,
              R`$\mathbf{r}(t) = \langle 9\cos t,\ 9\sin t,\ 81\sin t\cos t \rangle$`
            ],
            answer: 0,
            explain: R`원기둥 $x^2 + y^2 = 9$ 는 반지름이 $3$ 이므로 $x = 3\cos t$, $y = 3\sin t$ 로 둡니다. 이것을 $z = xy$ 에 대입하면

$$z = (3\cos t)(3\sin t) = 9\sin t\cos t$$

따라서 $\mathbf{r}(t) = \langle 3\cos t,\ 3\sin t,\ 9\sin t\cos t \rangle$ 이에요. 검산: $x^2 + y^2 = 9\cos^2 t + 9\sin^2 t = 9$.`,
            hints: [R`원기둥의 반지름이 얼마인지부터 확인해요.`, R`$x = 3\cos t$, $y = 3\sin t$ 로 두고 $z = xy$ 에 그대로 대입합니다.`],
            trap: R`$x^2 + y^2 = 9$ 의 반지름을 9로 보거나, $z = xy$ 에서 3을 한 번만 곱하는 실수.`
          }
        },
        {
          type: "explain", title: "비틀린 삼차곡선: 사영과 곡면으로 공간곡선 이해하기",
          body: R`공간곡선은 평면곡선보다 그리기가 훨씬 어려워서, 모양을 파악하는 요령이 필요해요. 교재는 벡터방정식 $\mathbf{r}(t) = \langle t,\ t^2,\ t^3 \rangle$ 인 **비틀린 삼차곡선(twisted cubic)** 으로 그 요령을 보여 줍니다(예제 7). 매개변수방정식은 $x = t$, $y = t^2$, $z = t^3$ 이에요.

**요령 1 — 좌표평면에 사영해서 본다.** 좌표 하나를 무시하고 나머지 둘 사이에서 $t$ 를 소거합니다.

- 위에서 본 모습($xy$ 평면): $x = t$, $y = t^2$ 이므로 포물선 $y = x^2$
- 앞에서 본 모습($xz$ 평면): $x = t$, $z = t^3$ 이므로 삼차곡선 $z = x^3$
- 옆에서 본 모습($yz$ 평면): $y = t^2$, $z = t^3$ 이므로 $z^2 = y^3$

**요령 2 — 곡선이 놓인 곡면을 찾는다.** 처음 두 식에서 매개변수를 소거한 $y = x^2$ 은 공간에서 **포물기둥(parabolic cylinder)** 이에요. 곡선의 모든 점이 이 식을 만족하므로 곡선은 포물기둥 $y = x^2$ 위에 놓여 있습니다. 예제 4에서 나선을 원기둥 위에 그린 것과 같은 방법이에요.

**요령 3 — 두 곡면의 교선으로 본다.** 같은 식으로 곡선은 주면 $z = x^3$ 위에도 있으므로, 비틀린 삼차곡선은 두 주면 $y = x^2$ 과 $z = x^3$ 의 **교선**입니다.

컴퓨터로 그릴 때도 좌표축만 그리는 것보다 상자 안에 그리거나 여러 관측점에서 보면 모양이 잘 보여요. 교재는 컴퓨터로 그린 예로 원환면(도넛) 위에 감긴 **원환소용돌이선(toroidal spiral)** $x = (4 + \sin 20t)\cos t$, $y = (4 + \sin 20t)\sin t$, $z = \cos 20t$ 와 **3잎무늬매듭(trefoil knot)** $x = (2 + \cos 1.5t)\cos t$, $y = (2 + \cos 1.5t)\sin t$, $z = \sin 1.5t$ 도 소개합니다.`
        },
        {
          type: "why",
          prompt: "곡선 r(t) = ⟨t, t², t³⟩ 이 '포물기둥 y = x² 위에 있다'고 말할 수 있는 이유는 무엇일까요? 그리고 곡면 하나만으로는 곡선이 정해지지 않고 곡면 두 개(y = x², z = x³)가 필요한 이유도 설명해 보세요.",
          answer: R`**곡면 위에 있다는 것의 뜻**: 곡선의 모든 점 $(x, y, z) = (t, t^2, t^3)$ 에 대해 $y = t^2 = (t)^2 = x^2$ 이 $t$ 의 값에 상관없이 항상 성립해요. 곡면 $y = x^2$ 은 이 식을 만족하는 점 전체의 집합이므로, 곡선의 점은 하나도 빠짐없이 그 곡면에 속합니다. 이렇게 **매개변수를 소거해서 $t$ 가 없는 관계식을 얻으면** 그 식이 나타내는 곡면 위에 곡선이 놓여요.

**곡면 두 개가 필요한 이유**: 곡면 $y = x^2$ 에는 $z$ 에 대한 조건이 전혀 없어요. 그래서 포물선 $y = x^2$ 을 $z$ 축 방향으로 끝없이 늘린 2차원 벽(포물기둥)이 되고, 그 위에는 곡선이 무수히 많이 그려질 수 있습니다. 높이를 정해 주는 조건이 하나 더 있어야 해요.

두 번째 조건 $z = x^3$ 이 그 역할을 합니다. 포물기둥 위의 점 $(x, x^2, z)$ 가운데 $z = x^3$ 을 만족하는 점만 남기면 $(x, x^2, x^3)$, 즉 $x = t$ 로 두었을 때의 $(t, t^2, t^3)$ 만 남아요. 3차원 공간에서 식 하나는 보통 곡면(2차원)을, 식 두 개는 그 교선인 곡선(1차원)을 정한다고 기억하면 됩니다.`
        },
        {
          type: "explain", title: "곡선 위의 점, 곡면과의 교점, 충돌과 교차",
          body: R`벡터함수가 있으면 "만나는가?"를 방정식으로 판정할 수 있어요. 세 가지 유형이 나옵니다.

**① 곡선이 주어진 점을 지나는가?** 점의 좌표를 $x(t), y(t), z(t)$ 와 같다고 놓고, 세 식을 **동시에** 만족하는 $t$ 하나가 있는지 봅니다. 보통 한 식에서 $t$ 의 후보를 구하고 나머지 두 식에 넣어 확인해요.

**② 곡선과 곡면이 만나는 점.** 곡선의 $x(t), y(t), z(t)$ 를 곡면의 방정식에 **대입**하면 $t$ 에 대한 방정식 하나가 됩니다. 이것을 풀어 얻은 $t$ 를 다시 $\mathbf{r}(t)$ 에 넣으면 교점이에요.

**③ 두 질점의 충돌과 궤도의 교차.** 이 장의 첫머리에 나온 질문("두 비행기가 충돌하는가?")이에요. 두 질점의 위치가 $\mathbf{r}_1(t)$, $\mathbf{r}_2(t)$ 일 때

> **충돌**: 같은 시각에 같은 위치. $\mathbf{r}_1(t) = \mathbf{r}_2(t)$ 를 만족하는 **하나의 $t$** 가 있어야 한다.
>
> **궤도가 만남(교차)**: 시각은 달라도 된다. $\mathbf{r}_1(t) = \mathbf{r}_2(s)$ 를 만족하는 $t, s$ 가 있으면 된다.

충돌은 미지수 1개($t$)에 식 3개, 교차는 미지수 2개($t, s$)에 식 3개예요. 교차를 따질 때는 두 번째 곡선의 매개변수를 **반드시 다른 문자**로 바꿔야 합니다. 같은 문자를 쓰면 "같은 시각"이라는 조건을 몰래 넣는 것이 되어 충돌만 찾게 돼요.

충돌하면 궤도는 당연히 만나지만, 궤도가 만난다고 충돌하는 것은 아닙니다.`
        },
        {
          type: "worked", title: "연습문제 50: 두 질점은 충돌할까, 궤도는 만날까",
          problem: R`두 질점이 공간에서 곡선

$$\mathbf{r}_1(t) = \langle t,\ t^2,\ t^3 \rangle,\qquad \mathbf{r}_2(t) = \langle 1 + 2t,\ 1 + 6t,\ 1 + 14t \rangle$$

를 따라 움직입니다. 두 질점은 충돌할까요? 두 궤도는 만날까요?`,
          steps: [
            {
              ask: "충돌 조건을 식으로 쓰면? 미지수는 몇 개일까요?",
              body: R`충돌은 **같은 시각** $t$ 에 위치가 같은 것이므로 $\mathbf{r}_1(t) = \mathbf{r}_2(t)$, 즉

$$t = 1 + 2t,\qquad t^2 = 1 + 6t,\qquad t^3 = 1 + 14t$$

미지수는 $t$ 하나인데 식이 세 개라서, 세 식을 모두 만족하는 $t$ 가 있어야 해요.`
            },
            {
              ask: "가장 쉬운 식부터 풀어 t 후보를 구하고, 다른 식에 넣어 보세요.",
              body: R`첫 식 $t = 1 + 2t$ 에서 $t = -1$ 뿐입니다. 이것을 둘째 식에 넣으면

$$t^2 = 1,\qquad 1 + 6t = -5$$

로 서로 달라요. 세 식을 동시에 만족하는 $t$ 가 없으므로 **충돌하지 않습니다.**`
            },
            {
              ask: "궤도가 만나는지 보려면 식을 어떻게 바꿔야 할까요?",
              body: R`궤도의 교점은 두 질점이 **서로 다른 시각**에 지나가도 돼요. 그래서 두 번째 곡선의 매개변수를 $s$ 로 바꿔 $\mathbf{r}_1(t) = \mathbf{r}_2(s)$ 를 풉니다.

$$t = 1 + 2s,\qquad t^2 = 1 + 6s,\qquad t^3 = 1 + 14s$$

이제 미지수가 $t, s$ 두 개예요. 식 두 개로 $t, s$ 를 구한 뒤 **남은 한 식으로 반드시 확인**합니다.`
            },
            {
              ask: "첫 식을 둘째 식에 대입해 s 를 구해 보세요.",
              body: R`$t = 1 + 2s$ 를 $t^2 = 1 + 6s$ 에 넣으면

$$(1 + 2s)^2 = 1 + 6s \;\Rightarrow\; 4s^2 + 4s + 1 = 1 + 6s \;\Rightarrow\; 4s^2 - 2s = 0 \;\Rightarrow\; 2s(2s - 1) = 0$$

따라서 $s = 0$ 또는 $s = \frac{1}{2}$ 이고, 이때 $t = 1$ 또는 $t = 2$ 입니다.`
            },
            {
              ask: "셋째 식 t³ = 1 + 14s 로 두 후보를 검사하면?",
              body: R`- $s = 0$, $t = 1$ : $t^3 = 1$, $1 + 14s = 1$ 로 같아요. 교점은 $\mathbf{r}_1(1) = (1, 1, 1)$.
- $s = \frac{1}{2}$, $t = 2$ : $t^3 = 8$, $1 + 14s = 8$ 로 같아요. 교점은 $\mathbf{r}_1(2) = (2, 4, 8)$.

둘 다 통과하므로 궤도는 **두 점에서 만납니다.** 첫 질점은 시각 $1$ 과 $2$ 에, 둘째 질점은 시각 $0$ 과 $\frac{1}{2}$ 에 그 점들을 지나므로 시각이 어긋나 충돌은 없는 거예요.`
            }
          ],
          answer: R`충돌하지 않는다. 그러나 두 궤도는 점 $(1, 1, 1)$ 과 $(2, 4, 8)$ 에서 만난다.`
        }
      ],
      keypoints: [
        R`벡터함수 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ 는 실수 $t$ 에 벡터를 대응시키는 함수이고, 정의역은 세 성분함수 정의역의 교집합이다.`,
        R`벡터함수의 극한은 성분함수의 극한을 각각 구해 벡터로 묶은 것이며, 한 성분이라도 극한이 없으면 존재하지 않는다.`,
        R`$\displaystyle\lim_{t\to a}\mathbf{r}(t) = \mathbf{r}(a)$ 이면 $a$ 에서 연속이고, 이는 세 성분함수가 모두 $a$ 에서 연속인 것과 같다.`,
        R`연속인 벡터함수 $\mathbf{r}(t)$ 의 끝점이 그리는 자취가 공간곡선이며, 벡터방정식은 매개변수방정식 $x = f(t)$, $y = g(t)$, $z = h(t)$ 와 같은 내용이다.`,
        R`$\mathbf{r}(t) = \mathbf{r}_0 + t\,\mathbf{v}$ 는 직선이고, $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ 는 원기둥 $x^2 + y^2 = 1$ 을 감으며 올라가는 나선이다.`,
        R`두 점을 잇는 선분은 $\mathbf{r}(t) = (1-t)\,\mathbf{r}_0 + t\,\mathbf{r}_1$, $0 \le t \le 1$ 이다.`,
        R`두 곡면의 교선은 한 곡면으로 $x, y$ 를 $t$ 로 나타내고(원기둥이면 $\cos t, \sin t$) 다른 곡면의 식에 대입해 $z$ 를 구해서 매개변수화한다.`,
        R`충돌은 같은 $t$ 에서 $\mathbf{r}_1(t) = \mathbf{r}_2(t)$, 궤도의 교차는 서로 다른 매개변수로 $\mathbf{r}_1(t) = \mathbf{r}_2(s)$ 를 풀어 판정한다.`
      ],
      bank: [
        {
          id: "calc-07-b01", kind: "mcq", level: 1, tag: "정의역",
          q: R`벡터함수 $\mathbf{r}(t) = \sin t\,\mathbf{i} + \ln t\,\mathbf{j} + \dfrac{1}{t - 3}\,\mathbf{k}$ 의 정의역은?`,
          choices: [
            R`$(0,\ \infty)$`,
            R`$(0,\ 3) \cup (3,\ \infty)$`,
            R`$(-\infty,\ 3) \cup (3,\ \infty)$`,
            R`$[0,\ 3) \cup (3,\ \infty)$`
          ],
          answer: 1,
          explain: R`$\sin t$ 는 모든 실수, $\ln t$ 는 $t > 0$, $\dfrac{1}{t-3}$ 은 $t \ne 3$ 에서 정의돼요. 세 조건을 모두 만족하는 $t$ 는 $t > 0$ 이면서 $t \ne 3$, 즉 $(0, 3) \cup (3, \infty)$ 입니다.`,
          hints: [R`세 성분함수가 각각 언제 정의되는지 따로 적어 보세요.`, R`로그는 진수가 양수, 분수는 분모가 0이 아니어야 해요. 두 조건을 동시에 만족해야 합니다.`]
        },
        {
          id: "calc-07-b02", kind: "mcq", level: 2, tag: "정의역",
          q: R`벡터함수 $\mathbf{r}(t) = \left\langle \sqrt{4 - t^2},\ e^{-3t},\ \ln(t + 1) \right\rangle$ 의 정의역은?`,
          choices: [
            R`$(-1,\ 2]$`,
            R`$[-2,\ 2]$`,
            R`$(-1,\ 2)$`,
            R`$(-1,\ \infty)$`
          ],
          answer: 0,
          explain: R`- $\sqrt{4 - t^2}$ : $4 - t^2 \ge 0$ 이므로 $-2 \le t \le 2$
- $e^{-3t}$ : 모든 실수
- $\ln(t+1)$ : $t + 1 > 0$ 이므로 $t > -1$

교집합은 $-1 < t \le 2$, 즉 $(-1, 2]$ 예요. $t = 2$ 에서는 $\sqrt{0} = 0$ 이 정의되므로 포함되고, $t = -1$ 에서는 $\ln 0$ 이 정의되지 않으므로 빠집니다.`,
          hints: [R`근호 조건과 로그 조건을 각각 부등식으로 써요.`, R`두 구간 $[-2, 2]$ 와 $(-1, \infty)$ 의 공통부분을 수직선에 그려 보세요. 끝점 포함 여부에 주의합니다.`],
          trap: R`근호가 분자에 있을 때는 근호 안이 0이어도 됩니다. 끝점 $t = 2$ 를 습관적으로 빼지 마세요.`
        },
        {
          id: "calc-07-b03", kind: "short", level: 1, tag: "극한·연속",
          q: R`벡터함수 $\mathbf{r}(t) = \langle f(t), g(t), h(t) \rangle$ 가 $t = a$ 에서 **연속**이라는 것의 정의를 식으로 쓰고, 이것이 성분함수 $f, g, h$ 에 대한 어떤 조건과 같은지 설명하세요.`,
          answer: R`정의: $\displaystyle\lim_{t\to a}\mathbf{r}(t) = \mathbf{r}(a)$ 를 만족할 때 $\mathbf{r}$ 은 $a$ 에서 연속이라고 합니다. 즉 $\mathbf{r}(a)$ 가 정의되고, 극한이 존재하고, 둘이 같아야 해요.

벡터함수의 극한은 성분함수의 극한으로 정의되므로($\lim \mathbf{r}(t) = \langle \lim f(t), \lim g(t), \lim h(t) \rangle$), 위 식은 $\lim f(t) = f(a)$, $\lim g(t) = g(a)$, $\lim h(t) = h(a)$ 와 같습니다. 따라서 $\mathbf{r}$ 이 $a$ 에서 연속일 필요충분조건은 성분함수 $f, g, h$ 가 **모두** $a$ 에서 연속인 것이에요.`,
          rubric: [
            R`$\displaystyle\lim_{t\to a}\mathbf{r}(t) = \mathbf{r}(a)$ 를 썼다`,
            R`세 성분함수가 모두 $a$ 에서 연속인 것과 필요충분조건임을 말했다`,
            R`그 이유로 극한이 성분별로 정의된다는 점을 들었다`
          ],
          explain: R`연속의 정의는 실숫값 함수와 모양이 같은 $\displaystyle\lim_{t\to a}\mathbf{r}(t) = \mathbf{r}(a)$ 이고, 극한을 성분별로 취하므로 성분함수 세 개가 모두 연속인 것과 같은 조건이 됩니다.`
        },
        {
          id: "calc-07-b04", kind: "mcq", level: 2, tag: "극한·연속",
          q: R`$\displaystyle\lim_{t\to 2}\left( \frac{t^2 - 4}{t - 2}\,\mathbf{i} + \sqrt{t + 7}\,\mathbf{j} + \frac{\sin \pi t}{t - 2}\,\mathbf{k} \right)$ 를 구하면?`,
          choices: [
            R`$\langle 0,\ 3,\ 0 \rangle$`,
            R`$\langle 4,\ 3,\ \pi \rangle$`,
            R`$\langle 4,\ 3,\ 1 \rangle$`,
            R`첫째와 셋째 성분이 $\frac{0}{0}$ 꼴이므로 극한이 존재하지 않는다`
          ],
          answer: 1,
          explain: R`성분별로 구해요.

- $\dfrac{t^2 - 4}{t - 2} = \dfrac{(t-2)(t+2)}{t-2} = t + 2 \to 4$
- $\sqrt{t + 7} \to \sqrt{9} = 3$
- $\dfrac{\sin \pi t}{t - 2}$ : $\frac{0}{0}$ 꼴이므로 로피탈 법칙을 쓰면 $\dfrac{\pi\cos \pi t}{1} \to \pi\cos 2\pi = \pi$

따라서 극한은 $\langle 4, 3, \pi \rangle$ 입니다. (셋째 성분은 $u = t - 2$ 로 치환해도 돼요: $\sin(\pi u + 2\pi) = \sin \pi u$ 이므로 $\dfrac{\sin \pi u}{u} \to \pi$.)`,
          hints: [R`$\frac{0}{0}$ 꼴은 "극한 없음"이 아니라 "더 계산해야 함"이라는 신호예요.`, R`첫째 성분은 인수분해 후 약분, 셋째 성분은 로피탈 법칙이나 $u = t-2$ 치환을 써 보세요.`],
          trap: R`$\dfrac{\sin(\text{무언가})}{\text{무언가}}$ 꼴이 아닌데도 무조건 1이라고 쓰는 실수. 분자 안은 $\pi t$ 이고 분모는 $t - 2$ 예요.`
        },
        {
          id: "calc-07-b05", kind: "num", level: 2, tag: "극한·연속",
          q: R`$\mathbf{L} = \displaystyle\lim_{t\to\infty}\left\langle \frac{3 + 2t^2}{1 - t^2},\ \tan^{-1} t,\ \frac{1 - e^{-3t}}{t} \right\rangle$ 일 때, 벡터 $\mathbf{L}$ 의 크기 $|\mathbf{L}|$ 을 소수 둘째 자리까지 구하세요.`,
          answer: 2.54, tol: 0.01, unit: "",
          explain: R`성분별 극한을 구합니다.

- $\dfrac{3 + 2t^2}{1 - t^2}$ : 분자·분모를 $t^2$ 으로 나누면 $\dfrac{3/t^2 + 2}{1/t^2 - 1} \to \dfrac{2}{-1} = -2$
- $\tan^{-1} t \to \dfrac{\pi}{2}$
- $\dfrac{1 - e^{-3t}}{t}$ : 분자는 $1$ 로, 분모는 $\infty$ 로 가므로 $0$

따라서 $\mathbf{L} = \left\langle -2,\ \frac{\pi}{2},\ 0 \right\rangle$ 이고

$$|\mathbf{L}| = \sqrt{(-2)^2 + \left(\tfrac{\pi}{2}\right)^2} = \sqrt{4 + 2.4674} \approx 2.54$$`,
          hints: [R`먼저 극한 벡터 $\mathbf{L}$ 의 세 성분을 각각 구해요.`, R`유리식은 최고차항의 계수 비, $\tan^{-1} t$ 는 $t \to \infty$ 일 때 $\frac{\pi}{2}$ 로 갑니다. 그다음 $\sqrt{L_1^2 + L_2^2 + L_3^2}$ 을 계산해요.`],
          trap: R`셋째 성분을 $\frac{0}{0}$ 꼴로 착각해 로피탈 법칙을 쓰는 실수. $t \to \infty$ 일 때 분자는 0이 아니라 1로 갑니다.`
        },
        {
          id: "calc-07-b06", kind: "mcq", level: 3, tag: "극한·연속",
          q: R`$\displaystyle\lim_{t\to\infty}\left\langle t^2 e^{-t},\ \frac{3t^3 + t}{2t^3 - 1},\ t\sin\frac{2}{t} \right\rangle$ 를 구하면?`,
          choices: [
            R`$\left\langle 0,\ \frac{3}{2},\ 0 \right\rangle$`,
            R`$\left\langle 0,\ \frac{3}{2},\ 1 \right\rangle$`,
            R`첫째 성분이 $\infty \cdot 0$ 꼴이므로 극한이 존재하지 않는다`,
            R`$\left\langle 0,\ \frac{3}{2},\ 2 \right\rangle$`
          ],
          answer: 3,
          explain: R`- $t^2 e^{-t} = \dfrac{t^2}{e^t}$ : $\frac{\infty}{\infty}$ 꼴이므로 로피탈 법칙을 두 번 쓰면 $\dfrac{2t}{e^t} \to \dfrac{2}{e^t} \to 0$
- $\dfrac{3t^3 + t}{2t^3 - 1}$ : 최고차항의 계수 비 $\dfrac{3}{2}$
- $t\sin\dfrac{2}{t}$ : $u = \dfrac{2}{t}$ 로 두면 $t \to \infty$ 일 때 $u \to 0$ 이고 $t = \dfrac{2}{u}$ 이므로 $\dfrac{2\sin u}{u} \to 2$

따라서 극한은 $\left\langle 0, \frac{3}{2}, 2 \right\rangle$ 입니다.`,
          hints: [R`세 성분 모두 대입만으로는 안 돼요. 각각 어떤 부정형인지 확인하세요.`, R`$t\sin\frac{2}{t}$ 는 $u = \frac{2}{t}$ 로 치환하면 $\frac{\sin u}{u}$ 꼴이 나옵니다.`],
          trap: R`$\sin\frac{2}{t} \to 0$ 이니 셋째 성분이 0이라고 단정하는 실수. 앞에 곱해진 $t$ 가 무한대로 가는 $\infty \cdot 0$ 꼴이에요.`
        },
        {
          id: "calc-07-b07", kind: "mcq", level: 1, tag: "극한·연속",
          q: R`벡터함수 $\mathbf{r}(t) = \left\langle \dfrac{\sin t}{t},\ t^2,\ e^t \right\rangle$ 에 대해 $t = 0$ 에서의 설명으로 옳은 것은?`,
          choices: [
            R`$\displaystyle\lim_{t\to 0}\mathbf{r}(t)$ 가 존재하므로 $\mathbf{r}$ 은 $0$ 에서 연속이다`,
            R`첫째 성분이 $\frac{0}{0}$ 꼴이므로 $\displaystyle\lim_{t\to 0}\mathbf{r}(t)$ 는 존재하지 않는다`,
            R`$\displaystyle\lim_{t\to 0}\mathbf{r}(t) = \langle 1, 0, 1 \rangle$ 이지만 $\mathbf{r}(0)$ 이 정의되지 않으므로 $0$ 에서 연속이 아니다`,
            R`세 성분 중 두 개가 $0$ 에서 연속이므로 $\mathbf{r}$ 도 $0$ 에서 연속이다`
          ],
          answer: 2,
          explain: R`성분별 극한은 $\dfrac{\sin t}{t} \to 1$, $t^2 \to 0$, $e^t \to 1$ 이므로 $\displaystyle\lim_{t\to 0}\mathbf{r}(t) = \langle 1, 0, 1 \rangle$ 로 존재해요. 하지만 $\dfrac{\sin t}{t}$ 는 $t = 0$ 에서 정의되지 않으므로 $\mathbf{r}(0)$ 이 없습니다. 연속의 정의 $\displaystyle\lim_{t\to 0}\mathbf{r}(t) = \mathbf{r}(0)$ 을 쓸 수 없으니 $0$ 에서 연속이 아니에요.`,
          hints: [R`극한이 존재하는 것과 연속인 것은 다른 조건이에요.`, R`$\mathbf{r}(0)$ 을 실제로 계산할 수 있는지 확인해 보세요.`]
        },
        {
          id: "calc-07-b08", kind: "mcq", level: 1, tag: "공간곡선",
          q: R`벡터함수 $\mathbf{r}(t) = \langle 3 - t,\ 2t,\ 1 + 4t \rangle$ 가 나타내는 곡선은?`,
          choices: [
            R`점 $(3, 0, 1)$ 을 지나고 벡터 $\langle -1, 2, 4 \rangle$ 에 평행한 직선`,
            R`점 $(-1, 2, 4)$ 를 지나고 벡터 $\langle 3, 0, 1 \rangle$ 에 평행한 직선`,
            R`점 $(3, 0, 1)$ 을 지나고 벡터 $\langle 1, 2, 4 \rangle$ 에 평행한 직선`,
            R`점 $(3, 0, 1)$ 을 지나고 벡터 $\langle -1, 2, 4 \rangle$ 에 수직인 평면`
          ],
          answer: 0,
          explain: R`$\mathbf{r}(t) = \langle 3, 0, 1 \rangle + t\,\langle -1, 2, 4 \rangle = \mathbf{r}_0 + t\,\mathbf{v}$ 꼴이에요. 상수항을 모은 $(3, 0, 1)$ 이 지나는 점($t = 0$ 일 때의 위치)이고, $t$ 의 계수를 모은 $\langle -1, 2, 4 \rangle$ 가 방향벡터입니다.`,
          hints: [R`세 성분이 모두 $t$ 의 1차식이면 직선이에요.`, R`$\mathbf{r}(t)$ 를 "상수 벡터 + $t$ × 벡터"로 나눠 써 보세요.`]
        },
        {
          id: "calc-07-b09", kind: "num", level: 2, tag: "공간곡선",
          q: R`나선 $\mathbf{r}(t) = \langle 3\cos t,\ 3\sin t,\ 2t \rangle$ 위의 점이 $z$ 축 둘레를 정확히 한 바퀴 도는 동안 높이 $z$ 는 얼마나 증가할까요? 소수 둘째 자리까지 구하세요.`,
          answer: 12.57, tol: 0.01, unit: "",
          explain: R`$x = 3\cos t$, $y = 3\sin t$ 이므로 위에서 보면 반지름 $3$ 인 원을 돌고, 한 바퀴는 $t$ 가 $2\pi$ 만큼 증가하는 동안이에요. 그동안 $z = 2t$ 는

$$2(t + 2\pi) - 2t = 4\pi \approx 12.57$$

만큼 증가합니다. 반지름 $3$ 은 원기둥의 굵기만 정할 뿐 높이 증가량과는 관계가 없어요.`,
          hints: [R`한 바퀴 도는 데 매개변수 $t$ 가 얼마나 변하는지부터 생각해요.`, R`$t$ 가 $2\pi$ 증가할 때 $z = 2t$ 의 변화량을 구합니다.`],
          trap: R`$z = t$ 인 기본 나선처럼 $2\pi$ 라고 답하거나, 반지름 $3$ 을 곱해 $6\pi$ 라고 하는 실수.`
        },
        {
          id: "calc-07-b10", kind: "mcq", level: 2, tag: "공간곡선",
          q: R`매개변수방정식이 $x = t\cos t$, $y = t\sin t$, $z = t$ 인 곡선은 다음 중 어느 곡면 위에 놓여 있을까요?`,
          choices: [
            R`원기둥 $x^2 + y^2 = 1$`,
            R`구 $x^2 + y^2 + z^2 = 1$`,
            R`원뿔면 $z^2 = x^2 + y^2$`,
            R`포물면 $z = x^2 + y^2$`
          ],
          answer: 2,
          explain: R`$t$ 를 소거하는 관계식을 찾아요.

$$x^2 + y^2 = t^2\cos^2 t + t^2\sin^2 t = t^2 = z^2$$

모든 $t$ 에서 $z^2 = x^2 + y^2$ 이 성립하므로 곡선은 원뿔면 위에 있습니다. $z$ 축에서의 거리 $\sqrt{x^2+y^2} = |t|$ 가 높이와 함께 커지므로, 원뿔을 따라 점점 넓어지며 올라가는 나선 모양이에요.`,
          hints: [R`$x^2 + y^2$ 을 계산해서 $t$ 로 나타내 보세요.`, R`$x^2 + y^2 = t^2$ 이고 $z = t$ 입니다. 둘을 연결하면?`]
        },
        {
          id: "calc-07-b11", kind: "mcq", level: 2, tag: "공간곡선",
          q: R`매개변수방정식이 $x = \cos t$, $y = \sin t$, $z = \dfrac{1}{1 + t^2}$ 인 곡선($t$ 는 모든 실수)의 모양을 바르게 설명한 것은?`,
          choices: [
            R`원기둥 $x^2 + y^2 = 1$ 을 감으면서 일정한 간격으로 끝없이 위로 올라가는 나선`,
            R`원뿔면 위에서 반지름이 점점 커지며 올라가는 나선`,
            R`원기둥 $x^2 + y^2 = 1$ 위를 돌면서 높이가 $-1$ 과 $1$ 사이를 오르내리는 곡선`,
            R`원기둥 $x^2 + y^2 = 1$ 위를 돌며, $t = 0$ 에서 높이 $1$ 로 가장 높고 $|t|$ 가 커질수록 $xy$ 평면의 원에 가까이 내려앉는 곡선`
          ],
          answer: 3,
          explain: R`$x^2 + y^2 = \cos^2 t + \sin^2 t = 1$ 이므로 곡선은 원기둥 $x^2 + y^2 = 1$ 위에 있어요. 높이 $z = \dfrac{1}{1+t^2}$ 는 항상 양수이고, $t = 0$ 에서 최댓값 $1$ 을 가지며, $|t| \to \infty$ 일 때 $0$ 으로 갑니다. 따라서 원기둥을 돌면서 가운데($t = 0$)에서만 높이 솟고 양쪽으로는 $xy$ 평면의 원 쪽으로 납작하게 내려앉는 곡선이에요.`,
          hints: [R`먼저 $x^2 + y^2$ 으로 어떤 곡면 위에 있는지 찾고, 그다음 $z$ 의 움직임을 따로 봅니다.`, R`$z = \frac{1}{1+t^2}$ 의 최댓값과 $t \to \pm\infty$ 일 때의 값을 구해 보세요.`]
        },
        {
          id: "calc-07-b12", kind: "short", level: 1, tag: "공간곡선",
          q: R`벡터방정식 $\mathbf{r}(t) = \cos t\,\mathbf{i} + \sin t\,\mathbf{j} + t\,\mathbf{k}$ 로 주어진 곡선이 어떤 모양인지, 그렇게 판단하는 근거와 함께 설명하세요.`,
          answer: R`매개변수방정식은 $x = \cos t$, $y = \sin t$, $z = t$ 입니다.

$x^2 + y^2 = \cos^2 t + \sin^2 t = 1$ 이므로 곡선은 원기둥 $x^2 + y^2 = 1$ 위에 놓여 있어요. $xy$ 평면에 사영하면 $(\cos t, \sin t, 0)$ 으로, 원 $x^2 + y^2 = 1$ 을 반시계 방향으로 돕니다. 동시에 $z = t$ 이므로 $t$ 가 증가하면 높이가 계속 올라가요.

따라서 곡선은 원기둥을 따라 스프링처럼 감기면서 위로 올라가는 **나선(helix)** 입니다.`,
          rubric: [
            R`$x^2 + y^2 = 1$ 을 보여 원기둥 위에 있음을 말했다`,
            R`$xy$ 평면 사영이 원(반시계 방향 회전)임을 말했다`,
            R`$z = t$ 라서 $t$ 가 증가하면 위로 올라간다고 말했다`,
            R`결론으로 나선(helix)이라고 했다`
          ],
          explain: R`성분 사이의 관계 $x^2 + y^2 = 1$ 로 곡선이 놓인 곡면(원기둥)을 찾고, 남은 성분 $z = t$ 로 높이의 변화를 읽으면 나선이라는 결론이 나옵니다.`
        },
        {
          id: "calc-07-b13", kind: "mcq", level: 1, tag: "선분·교선",
          q: R`점 $P(2, -1, 4)$ 에서 점 $Q(4, 6, 1)$ 까지를 잇는 **선분**의 벡터방정식은?`,
          choices: [
            R`$\mathbf{r}(t) = \langle 2 + 4t,\ -1 + 6t,\ 4 + t \rangle,\ \ 0 \le t \le 1$`,
            R`$\mathbf{r}(t) = \langle 2 + 2t,\ -1 + 7t,\ 4 - 3t \rangle,\ \ 0 \le t \le 1$`,
            R`$\mathbf{r}(t) = \langle 4 + 2t,\ 6 + 7t,\ 1 - 3t \rangle,\ \ 0 \le t \le 1$`,
            R`$\mathbf{r}(t) = \langle 2 + 2t,\ -1 + 7t,\ 4 - 3t \rangle,\ \ t$ 는 모든 실수`
          ],
          answer: 1,
          explain: R`$\mathbf{r}_0 = \langle 2, -1, 4 \rangle$, $\mathbf{r}_1 = \langle 4, 6, 1 \rangle$ 을 $\mathbf{r}(t) = (1-t)\,\mathbf{r}_0 + t\,\mathbf{r}_1$ 에 넣으면

$$\mathbf{r}(t) = \mathbf{r}_0 + t\,(\mathbf{r}_1 - \mathbf{r}_0) = \langle 2, -1, 4 \rangle + t\,\langle 2, 7, -3 \rangle = \langle 2 + 2t,\ -1 + 7t,\ 4 - 3t \rangle$$

이고 범위는 $0 \le t \le 1$ 이에요. $t = 0$ 에서 $P$, $t = 1$ 에서 $Q$ 가 나오는지 확인하면 됩니다.`,
          hints: [R`$t = 0$ 과 $t = 1$ 을 넣었을 때 각각 $P$ 와 $Q$ 가 나와야 해요.`, R`$t$ 의 계수는 $Q - P$ 의 성분입니다.`]
        },
        {
          id: "calc-07-b14", kind: "num", level: 2, tag: "선분·교선",
          q: R`점 $P(1, -2, 3)$ 과 $Q(5, 6, -1)$ 을 잇는 선분을 $\mathbf{r}(t) = (1-t)\,\mathbf{r}_0 + t\,\mathbf{r}_1$ $(0 \le t \le 1$, $\mathbf{r}_0$ 는 $P$, $\mathbf{r}_1$ 은 $Q$ 의 위치벡터$)$ 로 나타낼 때, $t = \dfrac{3}{4}$ 에 해당하는 점의 $y$ 좌표를 구하세요.`,
          answer: 4, tol: 0.01, unit: "",
          explain: R`$y$ 성분만 계산하면 돼요.

$$y = (1-t)(-2) + t(6) = -2 + 8t$$

$t = \frac{3}{4}$ 을 넣으면 $y = -2 + 6 = 4$ 입니다. (참고로 그 점은 $\left(4,\ 4,\ 0\right)$ 으로, $P$ 에서 $Q$ 까지의 $\frac{3}{4}$ 지점이에요.)`,
          hints: [R`세 성분을 다 구할 필요 없이 $y$ 성분만 공식에 넣으면 됩니다.`, R`$y = (1-t)(-2) + t(6)$ 에 $t = \frac{3}{4}$ 을 대입해요.`],
          trap: R`$(1-t)$ 와 $t$ 가 곱해지는 점을 바꿔 쓰는 실수. $t = 0$ 일 때 출발점 $P$ 가 나와야 하므로 $(1-t)$ 가 $P$ 쪽입니다.`
        },
        {
          id: "calc-07-b15", kind: "mcq", level: 2, tag: "선분·교선",
          q: R`원뿔면 $z = \sqrt{x^2 + y^2}$ 과 평면 $z = 2 + y$ 의 교선을 나타내는 벡터함수는? ($x = t$ 로 둡니다.)`,
          choices: [
            R`$\mathbf{r}(t) = \left\langle t,\ t^2 - 4,\ t^2 - 2 \right\rangle$`,
            R`$\mathbf{r}(t) = \left\langle t,\ \dfrac{t^2 - 4}{4},\ \dfrac{t^2 - 4}{4} \right\rangle$`,
            R`$\mathbf{r}(t) = \left\langle t,\ \dfrac{t^2 - 4}{4},\ \dfrac{t^2 + 4}{4} \right\rangle$`,
            R`$\mathbf{r}(t) = \left\langle \cos t,\ \sin t,\ 2 + \sin t \right\rangle$`
          ],
          answer: 2,
          explain: R`두 식의 $z$ 를 같다고 놓아요: $\sqrt{x^2 + y^2} = 2 + y$. 양변을 제곱하면

$$x^2 + y^2 = 4 + 4y + y^2 \;\Rightarrow\; x^2 = 4 + 4y \;\Rightarrow\; y = \frac{x^2 - 4}{4}$$

$x = t$ 로 두면 $y = \dfrac{t^2 - 4}{4}$ 이고, 평면의 식에서 $z = 2 + y = \dfrac{8 + t^2 - 4}{4} = \dfrac{t^2 + 4}{4}$ 입니다.

검산: $x^2 + y^2 = t^2 + \dfrac{(t^2-4)^2}{16} = \dfrac{(t^2+4)^2}{16}$ 이므로 $\sqrt{x^2+y^2} = \dfrac{t^2+4}{4} = z$.`,
          hints: [R`두 곡면의 $z$ 를 같다고 놓고 $x$, $y$ 사이의 관계식을 구해요.`, R`제곱하면 $y^2$ 이 양변에서 사라져 $y$ 가 $x$ 의 식으로 풀립니다. 그다음 $z = 2 + y$ 를 쓰세요.`],
          trap: R`$(2 + y)^2$ 을 전개할 때 가운데 항 $4y$ 를 빠뜨리는 실수.`
        },
        {
          id: "calc-07-b16", kind: "num", level: 2, tag: "선분·교선",
          q: R`포물면 $z = x^2 + 3y^2$ 과 포물기둥 $y = x^2$ 의 교선 위의 점 중에서 $x = 2$ 인 점의 $z$ 좌표를 구하세요.`,
          answer: 52, tol: 0.01, unit: "",
          explain: R`$x = t$ 로 두면 포물기둥에서 $y = t^2$, 이것을 포물면에 대입하면 $z = t^2 + 3t^4$ 이에요. 교선의 벡터방정식은

$$\mathbf{r}(t) = \langle t,\ t^2,\ t^2 + 3t^4 \rangle$$

$x = 2$ 는 $t = 2$ 이므로 $y = 4$, $z = 4 + 3\cdot 16 = 52$ 입니다. (직접 확인: $z = x^2 + 3y^2 = 4 + 3\cdot 4^2 = 52$.)`,
          hints: [R`$x = t$ 로 두고 $y$, $z$ 를 차례로 $t$ 로 나타내요.`, R`$y = x^2$ 이므로 $x = 2$ 이면 $y = 4$ 입니다. 이것을 포물면의 식에 넣으세요.`],
          trap: R`$3y^2$ 에서 $y = 4$ 를 제곱하지 않고 $3 \cdot 4 = 12$ 로 계산해 $16$ 이라고 답하는 실수.`
        },
        {
          id: "calc-07-b17", kind: "mcq", level: 3, tag: "선분·교선",
          q: R`쌍곡포물면 $z = x^2 - y^2$ 과 원기둥 $x^2 + y^2 = 4$ 의 교선을 나타내는 벡터함수는? ($0 \le t \le 2\pi$)`,
          choices: [
            R`$\mathbf{r}(t) = \langle 2\cos t,\ 2\sin t,\ 4\cos 2t \rangle$`,
            R`$\mathbf{r}(t) = \langle 2\cos t,\ 2\sin t,\ \cos 2t \rangle$`,
            R`$\mathbf{r}(t) = \langle 2\cos t,\ 2\sin t,\ 4 \rangle$`,
            R`$\mathbf{r}(t) = \langle 4\cos t,\ 4\sin t,\ 16\cos 2t \rangle$`
          ],
          answer: 0,
          explain: R`원기둥의 반지름이 $2$ 이므로 $x = 2\cos t$, $y = 2\sin t$ 로 둡니다. 쌍곡포물면에 대입하면

$$z = x^2 - y^2 = 4\cos^2 t - 4\sin^2 t = 4(\cos^2 t - \sin^2 t) = 4\cos 2t$$

따라서 $\mathbf{r}(t) = \langle 2\cos t,\ 2\sin t,\ 4\cos 2t \rangle$ 예요. $z = 4\cos^2 t - 4\sin^2 t$ 로 써도 같은 답입니다.`,
          hints: [R`원기둥 $x^2 + y^2 = 4$ 의 반지름을 확인하고 $x, y$ 를 $\cos t, \sin t$ 로 나타내요.`, R`$z = x^2 - y^2$ 에 대입한 뒤 배각공식 $\cos^2 t - \sin^2 t = \cos 2t$ 를 씁니다.`],
          trap: R`$\cos^2 t - \sin^2 t$ 를 $\cos^2 t + \sin^2 t = 1$ 과 혼동해 $z$ 를 상수로 만드는 실수.`
        },
        {
          id: "calc-07-b18", kind: "mcq", level: 2, tag: "충돌·교점",
          q: R`매개변수방정식 $x = t^2$, $y = 2 - 3t$, $z = 1 + t^3$ 으로 주어진 곡선이 **지나지 않는** 점은?`,
          choices: [
            R`$(1,\ 5,\ 0)$`,
            R`$(4,\ -4,\ 9)$`,
            R`$(9,\ -7,\ 28)$`,
            R`$(4,\ 8,\ -6)$`
          ],
          answer: 3,
          explain: R`$y = 2 - 3t$ 가 1차식이라 $t$ 가 하나로 정해지므로, $y$ 좌표로 $t$ 를 구한 뒤 나머지를 확인해요.

- $(1, 5, 0)$ : $y = 5$ 에서 $t = -1$. $x = 1$, $z = 1 - 1 = 0$ 으로 일치.
- $(4, -4, 9)$ : $y = -4$ 에서 $t = 2$. $x = 4$, $z = 1 + 8 = 9$ 로 일치.
- $(9, -7, 28)$ : $y = -7$ 에서 $t = 3$. $x = 9$, $z = 1 + 27 = 28$ 로 일치.
- $(4, 8, -6)$ : $y = 8$ 에서 $t = -2$. $x = 4$ 는 맞지만 $z = 1 + (-8) = -7 \ne -6$.

따라서 $(4, 8, -6)$ 은 지나지 않습니다.`,
          hints: [R`점이 곡선 위에 있으려면 **하나의 $t$** 가 세 좌표를 모두 만들어 내야 해요.`, R`$y = 2 - 3t$ 에서 $t$ 를 구하고 $x$, $z$ 에 넣어 확인하세요.`],
          trap: R`좌표 두 개만 맞는 것을 보고 지난다고 판단하는 실수. 세 식 모두 같은 $t$ 로 성립해야 합니다.`
        },
        {
          id: "calc-07-b19", kind: "num", level: 2, tag: "충돌·교점",
          q: R`곡선 $\mathbf{r}(t) = t\,\mathbf{i} + (3t - t^2)\,\mathbf{k}$ 와 포물면 $z = x^2 + y^2$ 은 두 점에서 만납니다. 그중 원점이 아닌 교점의 $z$ 좌표를 구하세요.`,
          answer: 2.25, tol: 0.01, unit: "",
          explain: R`곡선의 성분은 $x = t$, $y = 0$, $z = 3t - t^2$ 이에요. 포물면의 식에 대입하면

$$3t - t^2 = t^2 + 0^2 \;\Rightarrow\; 2t^2 - 3t = 0 \;\Rightarrow\; t(2t - 3) = 0$$

$t = 0$ 이면 원점 $(0, 0, 0)$, $t = \frac{3}{2}$ 이면 $\left(\frac{3}{2},\ 0,\ \frac{9}{4}\right)$ 입니다. 따라서 $z = \frac{9}{4} = 2.25$. (확인: $x^2 + y^2 = \frac{9}{4}$.)`,
          hints: [R`$\mathbf{j}$ 성분이 없으니 $y = 0$ 입니다. $x, y, z$ 를 포물면의 식에 대입해요.`, R`$3t - t^2 = t^2$ 을 풀면 $t$ 가 두 개 나옵니다.`]
        },
        {
          id: "calc-07-b20", kind: "num", level: 3, tag: "충돌·교점",
          q: R`나선 $\mathbf{r}(t) = \langle \sin t,\ \cos t,\ t \rangle$ 와 구 $x^2 + y^2 + z^2 = 10$ 이 만나는 두 점 중에서 $z > 0$ 인 점의 $x$ 좌표를 소수 셋째 자리까지 구하세요. ($t$ 는 라디안)`,
          answer: 0.141, tol: 0.002, unit: "",
          explain: R`나선의 성분을 구의 식에 대입합니다.

$$\sin^2 t + \cos^2 t + t^2 = 10 \;\Rightarrow\; 1 + t^2 = 10 \;\Rightarrow\; t = \pm 3$$

$z = t > 0$ 인 쪽은 $t = 3$ 이고, 교점은 $(\sin 3,\ \cos 3,\ 3)$ 이에요. 라디안으로 $\sin 3 \approx 0.141$ 입니다. (다른 교점은 $t = -3$ 일 때의 $(-\sin 3,\ \cos 3,\ -3)$.)`,
          hints: [R`곡선과 곡면의 교점은 곡선의 성분을 곡면의 식에 대입해서 구해요.`, R`$\sin^2 t + \cos^2 t = 1$ 을 쓰면 $t^2$ 만 남습니다. $z > 0$ 인 $t$ 를 골라 $x = \sin t$ 를 계산하세요.`],
          trap: R`계산기를 도(degree) 모드로 두고 $\sin 3^\circ \approx 0.052$ 를 쓰는 실수. 매개변수 $t$ 는 라디안이에요.`
        },
        {
          id: "calc-07-b21", kind: "num", level: 3, tag: "충돌·교점",
          q: R`두 질점의 위치가 $t \ge 0$ 에서 각각

$$\mathbf{r}_1(t) = \langle t^2,\ 3t - 2,\ t^2 \rangle,\qquad \mathbf{r}_2(t) = \langle 3t - 2,\ t^2,\ 5t - 6 \rangle$$

로 주어집니다. 두 질점이 충돌하는 시각 $t$ 를 구하세요.`,
          answer: 2, tol: 0.01, unit: "",
          explain: R`충돌은 같은 시각에 세 성분이 모두 같아야 해요.

- $x$ : $t^2 = 3t - 2 \Rightarrow (t-1)(t-2) = 0 \Rightarrow t = 1, 2$
- $y$ : $3t - 2 = t^2 \Rightarrow t = 1, 2$
- $z$ : $t^2 = 5t - 6 \Rightarrow (t-2)(t-3) = 0 \Rightarrow t = 2, 3$

세 식을 모두 만족하는 것은 $t = 2$ 뿐입니다. 이때 $\mathbf{r}_1(2) = \mathbf{r}_2(2) = \langle 4, 4, 4 \rangle$ 로 두 질점은 점 $(4, 4, 4)$ 에서 충돌해요.`,
          hints: [R`$\mathbf{r}_1(t) = \mathbf{r}_2(t)$ 를 성분별 방정식 세 개로 쓰세요.`, R`각 식의 해를 구한 뒤 **세 식에 공통으로** 들어 있는 $t$ 를 찾습니다.`],
          trap: R`$x$ 성분만 같은 $t = 1$ 을 답하는 실수. $t = 1$ 에서는 $z$ 성분이 $1$ 과 $-1$ 로 달라요.`
        },
        {
          id: "calc-07-b22", kind: "mcq", level: 3, tag: "충돌·교점",
          q: R`두 질점이 각각 $\mathbf{r}_1(t) = \langle t,\ t^2,\ 2t \rangle$, $\mathbf{r}_2(t) = \langle 2t - 3,\ 4t - 7,\ 4t - 6 \rangle$ 을 따라 움직입니다. 옳은 설명은?`,
          choices: [
            R`$t = 1$ 에서 충돌한다`,
            R`충돌하지 않고, 두 궤도도 만나지 않는다`,
            R`충돌하지는 않지만, 두 궤도는 점 $(1, 1, 2)$ 에서 만난다`,
            R`$t = 3$ 에서 충돌한다`
          ],
          answer: 2,
          explain: R`**충돌**: $\mathbf{r}_1(t) = \mathbf{r}_2(t)$ 의 $x$ 성분 $t = 2t - 3$ 에서 $t = 3$ 뿐인데, 이때 $y$ 성분이 $t^2 = 9$ 와 $4t - 7 = 5$ 로 달라요. 충돌하지 않습니다.

**궤도의 교차**: 둘째 곡선의 매개변수를 $s$ 로 바꿔 $\mathbf{r}_1(t) = \mathbf{r}_2(s)$ 를 풉니다.

$$t = 2s - 3,\qquad t^2 = 4s - 7,\qquad 2t = 4s - 6$$

첫 식을 둘째 식에 넣으면 $(2s-3)^2 = 4s - 7 \Rightarrow 4s^2 - 16s + 16 = 0 \Rightarrow (s-2)^2 = 0$ 이므로 $s = 2$, $t = 1$. 셋째 식도 $2 = 2$ 로 성립해요. 교점은 $\mathbf{r}_1(1) = \mathbf{r}_2(2) = (1, 1, 2)$ 입니다. 첫 질점은 시각 $1$ 에, 둘째 질점은 시각 $2$ 에 이 점을 지나므로 충돌은 아니에요.`,
          hints: [R`충돌과 궤도의 교차는 다른 방정식을 풀어야 해요.`, R`충돌은 $\mathbf{r}_1(t) = \mathbf{r}_2(t)$, 교차는 둘째 곡선의 매개변수를 $s$ 로 바꾼 $\mathbf{r}_1(t) = \mathbf{r}_2(s)$ 입니다.`],
          trap: R`같은 문자 $t$ 로만 풀어 보고 해가 없으니 "궤도도 만나지 않는다"고 결론 내리는 실수.`
        }
      ]
    }
  );
})();
