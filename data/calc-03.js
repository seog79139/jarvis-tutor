(function () {
  const R = String.raw;
  window.TUTOR_UNITS = window.TUTOR_UNITS || [];
  window.TUTOR_UNITS.push(
    /* ===================== 11.3 내적 ===================== */
    {
      course: "calc",
      id: "calc-03",
      no: 3,
      title: "내적",
      subtitle: "11.3 내적",
      source: "대학미분적분학 중간.pdf",
      minutes: 70,
      objectives: [
        "성분으로 두 벡터의 내적(dot product)을 계산하고 내적의 성질 5가지를 쓸 수 있다",
        "정리 a·b = |a||b|cos θ 를 이용해 두 벡터 사이의 각을 구하고 수직 여부를 판정할 수 있다",
        "벡터의 방향각과 방향코사인을 구할 수 있다",
        "스칼라 사영과 벡터 사영을 구할 수 있다",
        "일정한 힘이 한 일을 내적 W = F·D 로 계산할 수 있다"
      ],
      pretest: [
        {
          id: "calc-03-p01", kind: "mcq", level: 1, tag: "내적의 정의·성질",
          q: R`두 벡터를 "곱하는" 방법 중 하나인 내적은 대응되는 성분끼리 곱해서 모두 더하는 연산이에요. 그렇다면 $\langle 2, 4 \rangle \cdot \langle 3, -1 \rangle$ 의 결과는 무엇일까요?`,
          choices: [
            R`벡터 $\langle 6, -4 \rangle$`,
            R`스칼라 $2$`,
            R`스칼라 $10$`,
            R`벡터 $\langle 5, 3 \rangle$`
          ],
          answer: 1,
          explain: R`$\langle 2, 4 \rangle \cdot \langle 3, -1 \rangle = 2(3) + 4(-1) = 6 - 4 = 2$ 입니다. 내적의 결과는 벡터가 아니라 **실수(스칼라)** 예요. 그래서 내적을 스칼라곱(scalar product)이라고도 부릅니다.`
        },
        {
          id: "calc-03-p02", kind: "mcq", level: 1, tag: "수직 판정",
          q: R`영벡터가 아닌 두 벡터 $\mathbf{a}$, $\mathbf{b}$ 의 내적이 $\mathbf{a} \cdot \mathbf{b} = 0$ 이라면, 두 벡터는 어떤 관계일까요?`,
          choices: [
            R`같은 방향으로 평행하다`,
            R`서로 반대 방향이다`,
            R`서로 수직이다`,
            R`길이가 같다`
          ],
          answer: 2,
          explain: R`$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$ 인데 두 벡터의 길이가 0이 아니므로 $\cos\theta = 0$, 즉 $\theta = \pi/2$ 입니다. 내적이 0이라는 것은 두 벡터가 **수직(직교)** 이라는 뜻이에요.`
        },
        {
          id: "calc-03-p03", kind: "mcq", level: 1, tag: "일",
          q: R`짐수레의 손잡이를 수평에서 $35^\circ$ 위쪽으로 $70\,\text{N}$ 의 힘으로 당기며 수평한 길을 $100\,\text{m}$ 끌었어요. 이 힘이 한 일을 계산할 때 거리에 곱해야 하는 것은 무엇일까요?`,
          choices: [
            R`힘 중에서 이동 방향(수평) 성분인 $70\cos 35^\circ$`,
            R`힘의 크기 전체인 $70$`,
            R`힘 중에서 위쪽(수직) 성분인 $70\sin 35^\circ$`,
            R`힘이 비스듬하므로 아무것도 곱할 수 없고 일은 0이다`
          ],
          answer: 0,
          explain: R`일은 **움직인 방향의 힘의 성분** 과 움직인 거리의 곱이에요. 그래서 $W = (70\cos 35^\circ)(100) \approx 5734\,\text{J}$ 입니다. 이것이 바로 내적 $\mathbf{F} \cdot \mathbf{D}$ 예요.`
        }
      ],
      steps: [
        {
          type: "explain", title: "내적의 정의",
          body: R`지금까지 벡터끼리의 덧셈과 스칼라배를 배웠어요. 이제 벡터 두 개를 "곱하는" 방법을 배웁니다. 곱은 두 가지가 있는데, 이 절의 **내적** 과 다음 절의 벡터곱(cross product)이에요. (교재는 벡터를 굵은 글씨 $\mathbf{a}$ 로 써요. 손으로는 $\vec{a}$ 로 쓰면 됩니다.)

> **정의 1** $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$, $\mathbf{b} = \langle b_1, b_2, b_3 \rangle$ 의 **내적(dot product)** 은
> $$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

방법은 간단해요. **대응되는 성분끼리 곱한 다음 모두 더합니다.** 가장 중요한 점은 결과가 벡터가 아니라 **실수(스칼라)** 라는 것이에요. 그래서 내적을 스칼라곱(scalar product) 또는 inner product 라고도 부릅니다.

이차원 벡터도 똑같아요: $\langle a_1, a_2 \rangle \cdot \langle b_1, b_2 \rangle = a_1 b_1 + a_2 b_2$.

교재 예제 1을 볼까요.

- $\langle 2, 4 \rangle \cdot \langle 3, -1 \rangle = 2(3) + 4(-1) = 2$
- $\langle -1, 7, 4 \rangle \cdot \langle 6, 2, -\tfrac{1}{2} \rangle = (-1)(6) + 7(2) + 4(-\tfrac{1}{2}) = 6$
- $(\mathbf{i} + 2\mathbf{j} - 3\mathbf{k}) \cdot (2\mathbf{j} - \mathbf{k}) = 1(0) + 2(2) + (-3)(-1) = 7$

세 번째처럼 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 로 쓰인 벡터에서 빠진 성분은 **0** 으로 채워서 계산해요.`
        },
        {
          type: "check",
          q: {
            id: "calc-03-c01", kind: "num", level: 1, tag: "내적의 정의·성질",
            q: R`$\mathbf{a} = \langle 4, -1, 3 \rangle$, $\mathbf{b} = \langle 2, 5, -2 \rangle$ 일 때 $\mathbf{a} \cdot \mathbf{b}$ 의 값을 구하세요.`,
            answer: -3, tol: 0.001, unit: "",
            explain: R`대응되는 성분끼리 곱해서 더해요.

$$\mathbf{a} \cdot \mathbf{b} = 4(2) + (-1)(5) + 3(-2) = 8 - 5 - 6 = -3$$

내적은 이렇게 음수가 나올 수도 있어요. 부호의 의미는 뒤에서 배웁니다.`,
            hints: [R`첫째 성분끼리, 둘째 성분끼리, 셋째 성분끼리 곱해요.`, R`$4 \cdot 2$, $(-1) \cdot 5$, $3 \cdot (-2)$ 세 값을 더합니다.`],
            trap: R`음수 성분의 부호를 빠뜨려 $8 + 5 + 6 = 19$ 로 계산하는 실수.`
          }
        },
        {
          type: "explain", title: "내적의 성질 5가지",
          body: R`내적은 실수의 곱셈과 비슷한 법칙을 많이 따라요.

> **정리 2 (내적의 성질)** $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 가 벡터이고 $c$ 가 스칼라이면
> 1. $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$
> 2. $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$
> 3. $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$
> 4. $(c\mathbf{a}) \cdot \mathbf{b} = c(\mathbf{a} \cdot \mathbf{b}) = \mathbf{a} \cdot (c\mathbf{b})$
> 5. $\mathbf{0} \cdot \mathbf{a} = 0$

성질 2는 교환법칙, 성질 3은 분배법칙, 성질 4는 "스칼라는 밖으로 꺼낼 수 있다"는 뜻이에요. 성질 1은 특히 자주 써요. **자기 자신과의 내적은 길이의 제곱** 이라서, 길이가 나오는 식을 내적으로 바꿔 계산할 수 있게 해 줍니다.

주의할 점이 있어요. 성질 5의 좌변 $\mathbf{0}$ 은 영벡터이고 우변 $0$ 은 숫자 0입니다. 그리고 내적의 결과는 스칼라이므로 $(\mathbf{a} \cdot \mathbf{b}) \cdot \mathbf{c}$ 처럼 **스칼라와 벡터를 내적하는 식은 의미가 없어요.**`
        },
        {
          type: "why",
          prompt: R`성질 1 ($\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$) 과 성질 3 (분배법칙) 은 왜 성립할까요? 정의 $\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$ 만 써서 설명해 보세요.`,
          answer: R`둘 다 **성분으로 풀어 쓰면** 바로 나와요.

**성질 1.** $\mathbf{a} \cdot \mathbf{a} = a_1^2 + a_2^2 + a_3^2$ 인데, 길이가 $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$ 이므로 이것은 $|\mathbf{a}|^2$ 과 같습니다.

**성질 3.** $\mathbf{b} + \mathbf{c} = \langle b_1 + c_1, b_2 + c_2, b_3 + c_3 \rangle$ 이므로

$$\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = a_1(b_1 + c_1) + a_2(b_2 + c_2) + a_3(b_3 + c_3)$$

괄호를 풀고(실수의 분배법칙) $b$ 가 들어간 항과 $c$ 가 들어간 항끼리 다시 묶으면

$$= (a_1 b_1 + a_2 b_2 + a_3 b_3) + (a_1 c_1 + a_2 c_2 + a_3 c_3) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$$

즉 벡터의 내적 법칙은 결국 **각 성분에서 실수의 곱셈 법칙이 성립하기 때문** 이에요. 나머지 성질 2, 4, 5도 같은 방법으로 증명합니다(교재 연습문제 59).`
        },
        {
          type: "check",
          q: {
            id: "calc-03-c02", kind: "mcq", level: 1, tag: "내적의 정의·성질",
            q: R`$\mathbf{a}, \mathbf{b}, \mathbf{c}$ 가 삼차원 벡터일 때, 다음 중 **의미가 있는** 표현은 어느 것일까요?`,
            choices: [
              R`$(\mathbf{a} \cdot \mathbf{b}) \cdot \mathbf{c}$`,
              R`$\mathbf{a} \cdot \mathbf{b} + \mathbf{c}$`,
              R`$|\mathbf{a}| \cdot (\mathbf{b} + \mathbf{c})$`,
              R`$(\mathbf{a} \cdot \mathbf{b})\,\mathbf{c}$`
            ],
            answer: 3,
            explain: R`$\mathbf{a} \cdot \mathbf{b}$ 는 스칼라이므로 $(\mathbf{a} \cdot \mathbf{b})\,\mathbf{c}$ 는 **스칼라 × 벡터**, 즉 $\mathbf{c}$ 의 스칼라배라서 의미가 있어요.

나머지는 모두 연산의 재료가 맞지 않습니다. 내적($\cdot$)은 **벡터와 벡터** 사이에서만 정의되고, 덧셈은 **같은 종류끼리만** 할 수 있어요.`,
            hints: [R`각 부분이 스칼라인지 벡터인지 먼저 표시해 보세요.`, R`내적은 벡터 두 개가 있어야 하고, 스칼라와 벡터는 더할 수 없어요.`]
          }
        },
        {
          type: "explain", title: "내적의 기하학적 의미: 사이의 각",
          body: R`내적은 두 벡터 **사이의 각** $\theta$ 로도 표현돼요. 여기서 사이의 각은 두 벡터의 시작점을 원점에 맞췄을 때 이루는 각으로, $0 \le \theta \le \pi$ 범위에서 정합니다. 두 벡터가 평행이면 $\theta = 0$ (같은 방향) 또는 $\theta = \pi$ (반대 방향)예요.

> **정리 3** $\theta$ 가 벡터 $\mathbf{a}$ 와 $\mathbf{b}$ 사이의 각이면
> $$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$$

물리학에서는 이 식을 내적의 정의로 쓰기도 해요. 예를 들어(예제 2) 길이가 각각 4와 6인 벡터 사이의 각이 $\pi/3$ 이면 $\mathbf{a} \cdot \mathbf{b} = 4 \cdot 6 \cdot \tfrac{1}{2} = 12$ 입니다.

이 식을 $\cos\theta$ 에 대해 풀면 각을 구하는 공식이 돼요.

> **따름정리 6** $\theta$ 가 영이 아닌 벡터 $\mathbf{a}$ 와 $\mathbf{b}$ 사이의 각이면
> $$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$$

즉 내적은 **성분으로 계산하는 방법** (정의 1)과 **길이와 각으로 계산하는 방법** (정리 3) 두 가지가 있고, 둘을 같다고 놓으면 각을 알아낼 수 있습니다.`
        },
        {
          type: "why",
          prompt: R`정리 3 ($\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$) 은 어떻게 증명할까요? 원점 $O$, $\mathbf{a}$ 의 끝점 $A$, $\mathbf{b}$ 의 끝점 $B$ 로 만든 삼각형 $OAB$ 를 떠올리고 증명의 흐름을 설명해 보세요.`,
          answer: R`핵심은 **코사인 법칙 + 내적의 성질** 이에요.

**1단계 (코사인 법칙).** 삼각형 $OAB$ 에서 세 변의 길이는 $|OA| = |\mathbf{a}|$, $|OB| = |\mathbf{b}|$, $|AB| = |\mathbf{a} - \mathbf{b}|$ 이고, $O$ 에서의 각이 $\theta$ 이므로

$$|\mathbf{a} - \mathbf{b}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2 - 2|\mathbf{a}||\mathbf{b}|\cos\theta$$

**2단계 (좌변을 내적으로 전개).** 성질 1, 2, 3을 쓰면

$$|\mathbf{a} - \mathbf{b}|^2 = (\mathbf{a} - \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) = \mathbf{a} \cdot \mathbf{a} - \mathbf{a} \cdot \mathbf{b} - \mathbf{b} \cdot \mathbf{a} + \mathbf{b} \cdot \mathbf{b} = |\mathbf{a}|^2 - 2\,\mathbf{a} \cdot \mathbf{b} + |\mathbf{b}|^2$$

**3단계 (비교).** 두 식의 우변을 같다고 놓으면 $|\mathbf{a}|^2$, $|\mathbf{b}|^2$ 이 지워지고 $-2\,\mathbf{a} \cdot \mathbf{b} = -2|\mathbf{a}||\mathbf{b}|\cos\theta$ 가 남아요. 양변을 $-2$ 로 나누면 정리 3이 됩니다.

같은 길이 $|\mathbf{a} - \mathbf{b}|^2$ 을 **기하(코사인 법칙)** 와 **대수(내적 전개)** 두 방법으로 계산해 비교한 것이에요.`
        },
        {
          type: "check",
          q: {
            id: "calc-03-c03", kind: "num", level: 1, tag: "사이의 각",
            q: R`길이가 각각 $|\mathbf{a}| = 5$, $|\mathbf{b}| = 8$ 인 두 벡터 사이의 각이 $2\pi/3$ 일 때, $\mathbf{a} \cdot \mathbf{b}$ 의 값을 구하세요.`,
            answer: -20, tol: 0.01, unit: "",
            explain: R`정리 3을 그대로 써요.

$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\frac{2\pi}{3} = 5 \cdot 8 \cdot \left(-\frac{1}{2}\right) = -20$$

사이의 각이 둔각이라 $\cos\theta < 0$ 이고, 그래서 내적이 음수예요.`,
            hints: [R`$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$ 를 씁니다.`, R`$\cos(2\pi/3) = \cos 120^\circ = -\tfrac{1}{2}$ 이에요.`],
            trap: R`$\cos(2\pi/3)$ 을 $+\tfrac{1}{2}$ 로 써서 $20$ 이라고 답하는 실수. $2\pi/3$ 은 둔각이므로 코사인이 음수예요.`
          }
        },
        {
          type: "worked", title: "예제 3: 두 벡터 사이의 각",
          problem: R`벡터 $\mathbf{a} = \langle 2, 2, -1 \rangle$ 과 $\mathbf{b} = \langle 5, -3, 2 \rangle$ 사이의 각을 구하세요.`,
          steps: [
            {
              ask: "어떤 공식을 쓰고, 그러려면 무엇 세 가지를 계산해야 할까요?",
              body: R`성분이 주어졌으니 따름정리 6 $\cos\theta = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$ 를 씁니다. 필요한 것은 **두 벡터의 길이** $|\mathbf{a}|$, $|\mathbf{b}|$ 와 **내적** $\mathbf{a} \cdot \mathbf{b}$ 세 가지예요.`
            },
            {
              ask: "두 벡터의 길이는 각각 얼마일까요?",
              body: R`길이는 성분 제곱의 합에 루트를 씌웁니다.

$$|\mathbf{a}| = \sqrt{2^2 + 2^2 + (-1)^2} = \sqrt{9} = 3,\qquad |\mathbf{b}| = \sqrt{5^2 + (-3)^2 + 2^2} = \sqrt{38}$$`
            },
            {
              ask: "내적 a·b 는 얼마일까요?",
              body: R`대응 성분끼리 곱해서 더해요.

$$\mathbf{a} \cdot \mathbf{b} = 2(5) + 2(-3) + (-1)(2) = 10 - 6 - 2 = 2$$`
            },
            {
              ask: "이제 cos θ 와 θ 를 구해 보세요. 결과가 그럴듯한지도 확인해 볼까요?",
              body: R`$$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|} = \frac{2}{3\sqrt{38}} \approx 0.108$$

$$\theta = \cos^{-1}\!\left(\frac{2}{3\sqrt{38}}\right) \approx 1.46\ \text{(라디안)} \approx 84^\circ$$

내적이 양수지만 길이의 곱 $3\sqrt{38} \approx 18.5$ 에 비해 아주 작으므로, 직각보다 조금 작은 예각이 나온 것이 자연스러워요.`
            }
          ],
          answer: R`$\theta = \cos^{-1}\!\left(\dfrac{2}{3\sqrt{38}}\right) \approx 1.46$ 라디안 (약 $84^\circ$)`
        },
        {
          type: "explain", title: "수직 조건과 내적의 부호",
          body: R`영이 아닌 두 벡터 사이의 각이 $\pi/2$ 일 때 두 벡터는 **수직** 또는 **직교**(perpendicular, orthogonal)한다고 해요. 이때 $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos(\pi/2) = 0$ 이고, 거꾸로 $\mathbf{a} \cdot \mathbf{b} = 0$ 이면 $\cos\theta = 0$ 이라 $\theta = \pi/2$ 입니다. 영벡터는 모든 벡터에 수직인 것으로 약속해요.

> **7** 두 벡터 $\mathbf{a}$ 와 $\mathbf{b}$ 가 수직일 필요충분조건은 $\mathbf{a} \cdot \mathbf{b} = 0$ 이다.

예제 4: $(2\mathbf{i} + 2\mathbf{j} - \mathbf{k}) \cdot (5\mathbf{i} - 4\mathbf{j} + 2\mathbf{k}) = 2(5) + 2(-4) + (-1)(2) = 0$ 이므로 두 벡터는 수직입니다. 각도를 구할 필요 없이 **내적 한 번** 으로 끝나요.

내적의 **부호** 도 정보를 줍니다. 길이는 항상 양수라서 부호는 $\cos\theta$ 가 결정해요.

- $\mathbf{a} \cdot \mathbf{b} > 0$ : $\theta$ 는 예각 (대체로 같은 방향)
- $\mathbf{a} \cdot \mathbf{b} = 0$ : $\theta = \pi/2$ (수직)
- $\mathbf{a} \cdot \mathbf{b} < 0$ : $\theta$ 는 둔각 (대체로 반대 방향)

극단적인 경우, 완전히 같은 방향이면 $\theta = 0$ 이라 $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|$ 이고, 정반대 방향이면 $\theta = \pi$ 라 $\mathbf{a} \cdot \mathbf{b} = -|\mathbf{a}||\mathbf{b}|$ 입니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-03-c04", kind: "mcq", level: 2, tag: "수직 판정",
            q: R`$\mathbf{a} = \langle 3, -1, 2 \rangle$, $\mathbf{b} = \langle 2, 4, -1 \rangle$ 은 서로 어떤 관계일까요?`,
            choices: [
              R`평행하다`,
              R`직교한다`,
              R`평행도 직교도 아니고 사이의 각이 예각이다`,
              R`평행도 직교도 아니고 사이의 각이 둔각이다`
            ],
            answer: 1,
            explain: R`$\mathbf{a} \cdot \mathbf{b} = 3(2) + (-1)(4) + 2(-1) = 6 - 4 - 2 = 0$ 이므로 두 벡터는 **직교** 합니다.

평행이려면 한 벡터가 다른 벡터의 스칼라배여야 하는데, 성분의 비 $3:2$, $-1:4$, $2:-1$ 이 서로 달라서 평행은 아니에요.`,
            hints: [R`먼저 내적을 계산해 보세요.`, R`내적이 0이면 직교, 한쪽이 다른 쪽의 스칼라배이면 평행이에요.`]
          }
        },
        {
          type: "explain", title: "방향각과 방향코사인",
          body: R`영이 아닌 벡터 $\mathbf{a}$ 가 $x$ 축, $y$ 축, $z$ 축의 **양의 방향** 과 이루는 각 $\alpha, \beta, \gamma$ (각각 $[0, \pi]$ 범위)를 **방향각(direction angles)** 이라고 해요. 그 코사인 $\cos\alpha, \cos\beta, \cos\gamma$ 가 **방향코사인(direction cosines)** 입니다.

따름정리 6에서 $\mathbf{b}$ 자리에 $\mathbf{i} = \langle 1, 0, 0 \rangle$ 를 넣으면 $\mathbf{a} \cdot \mathbf{i} = a_1$, $|\mathbf{i}| = 1$ 이므로 바로 나와요. $\mathbf{j}$, $\mathbf{k}$ 도 마찬가지예요.

> $$\cos\alpha = \frac{a_1}{|\mathbf{a}|},\qquad \cos\beta = \frac{a_2}{|\mathbf{a}|},\qquad \cos\gamma = \frac{a_3}{|\mathbf{a}|}$$

즉 방향코사인은 **각 성분을 길이로 나눈 것** 이에요. 여기서 두 가지 중요한 결과가 나옵니다.

> $$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$$
> $$\frac{1}{|\mathbf{a}|}\,\mathbf{a} = \langle \cos\alpha, \cos\beta, \cos\gamma \rangle$$

두 번째 식은 $\mathbf{a} = \langle |\mathbf{a}|\cos\alpha, |\mathbf{a}|\cos\beta, |\mathbf{a}|\cos\gamma \rangle = |\mathbf{a}|\langle \cos\alpha, \cos\beta, \cos\gamma \rangle$ 에서 나와요. **$\mathbf{a}$ 와 방향이 같은 단위벡터의 성분이 곧 방향코사인** 이라는 뜻입니다.`
        },
        {
          type: "why",
          prompt: R`왜 어떤 벡터든 $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$ 이 성립할까요? 그리고 이 식은 방향각 세 개에 대해 무엇을 알려 줄까요?`,
          answer: R`방향코사인 식 $\cos\alpha = \dfrac{a_1}{|\mathbf{a}|}$, $\cos\beta = \dfrac{a_2}{|\mathbf{a}|}$, $\cos\gamma = \dfrac{a_3}{|\mathbf{a}|}$ 을 각각 제곱해서 더하면

$$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = \frac{a_1^2 + a_2^2 + a_3^2}{|\mathbf{a}|^2} = \frac{|\mathbf{a}|^2}{|\mathbf{a}|^2} = 1$$

분자가 바로 길이의 제곱이기 때문이에요. 다른 말로 하면 $\langle \cos\alpha, \cos\beta, \cos\gamma \rangle$ 가 **단위벡터** 이므로 그 길이의 제곱이 1인 것입니다.

이 식이 알려 주는 것은 **세 방향각을 마음대로 정할 수 없다** 는 점이에요. 두 개를 정하면 나머지 하나의 $\cos^2$ 값이 정해집니다. 그리고 두 각의 $\cos^2$ 합이 이미 1보다 크면 그런 벡터는 존재하지 않아요.`
        },
        {
          type: "worked", title: "예제 5: 방향각 구하기",
          problem: R`벡터 $\mathbf{a} = \langle 1, 2, 3 \rangle$ 의 방향각을 구하세요.`,
          steps: [
            {
              ask: "방향코사인을 구하려면 가장 먼저 무엇이 필요할까요?",
              body: R`방향코사인은 "성분 ÷ 길이" 이므로 먼저 **길이** 를 구해요.

$$|\mathbf{a}| = \sqrt{1^2 + 2^2 + 3^2} = \sqrt{14}$$`
            },
            {
              ask: "세 방향코사인은 각각 얼마일까요?",
              body: R`각 성분을 $\sqrt{14}$ 로 나눕니다.

$$\cos\alpha = \frac{1}{\sqrt{14}},\qquad \cos\beta = \frac{2}{\sqrt{14}},\qquad \cos\gamma = \frac{3}{\sqrt{14}}$$`
            },
            {
              ask: "방향각은 어떻게 구할까요? 어느 축과 이루는 각이 가장 작을지 먼저 예상해 보세요.",
              body: R`역코사인을 취해요.

$$\alpha = \cos^{-1}\!\left(\frac{1}{\sqrt{14}}\right) \approx 74^\circ,\quad \beta = \cos^{-1}\!\left(\frac{2}{\sqrt{14}}\right) \approx 58^\circ,\quad \gamma = \cos^{-1}\!\left(\frac{3}{\sqrt{14}}\right) \approx 37^\circ$$

$z$ 성분이 가장 크니까 벡터가 $z$ 축 쪽으로 가장 많이 기울어 있고, 그래서 $z$ 축과의 각 $\gamma$ 가 가장 작습니다.`
            },
            {
              ask: "답이 맞는지 어떻게 검산할 수 있을까요?",
              body: R`방향코사인의 제곱의 합이 1인지 확인해요.

$$\frac{1}{14} + \frac{4}{14} + \frac{9}{14} = \frac{14}{14} = 1$$

주의: 세 **각도** 의 합 $74^\circ + 58^\circ + 37^\circ = 169^\circ$ 는 아무 의미가 없어요. 삼각형의 내각이 아니니까 $180^\circ$ 가 될 이유가 없습니다.`
            }
          ],
          answer: R`$\alpha \approx 74^\circ$, $\beta \approx 58^\circ$, $\gamma \approx 37^\circ$`
        },
        {
          type: "check",
          q: {
            id: "calc-03-c05", kind: "num", level: 2, tag: "방향각",
            q: R`어떤 벡터의 방향각이 $\alpha = \pi/3$, $\beta = \pi/3$ 이고 세 번째 방향각 $\gamma$ 는 예각이에요. $\gamma$ 는 몇 도일까요?`,
            answer: 45, tol: 0.1, unit: "°",
            explain: R`$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$ 에 대입해요.

$$\cos^2\gamma = 1 - \left(\tfrac{1}{2}\right)^2 - \left(\tfrac{1}{2}\right)^2 = \tfrac{1}{2}$$

$\cos\gamma = \pm\tfrac{1}{\sqrt{2}}$ 인데 $\gamma$ 가 예각이므로 $\cos\gamma = \tfrac{1}{\sqrt{2}}$, 즉 $\gamma = 45^\circ$ 입니다. (예각이라는 조건이 없다면 $135^\circ$ 도 가능해요.)`,
            hints: [R`방향코사인의 제곱의 합은 항상 1이에요.`, R`$\cos(\pi/3) = \tfrac{1}{2}$ 이므로 $\cos^2\gamma = 1 - \tfrac{1}{4} - \tfrac{1}{4}$ 입니다.`],
            trap: R`세 각의 합이 $180^\circ$ 라고 생각해 $180 - 60 - 60 = 60^\circ$ 로 답하는 실수. 방향각에는 그런 관계가 없어요.`
          }
        },
        {
          type: "explain", title: "스칼라 사영과 벡터 사영",
          body: R`같은 시작점 $P$ 를 갖는 두 벡터 $\mathbf{a} = \overrightarrow{PQ}$, $\mathbf{b} = \overrightarrow{PR}$ 를 생각해요. $R$ 에서 직선 $PQ$ 에 내린 수선의 발을 $S$ 라 하면, 벡터 $\overrightarrow{PS}$ 를 **$\mathbf{a}$ 위로의 $\mathbf{b}$ 의 벡터 사영(vector projection)** 이라 하고 $\text{proj}_{\mathbf{a}}\mathbf{b}$ 로 씁니다. $\mathbf{b}$ 가 $\mathbf{a}$ 방향 직선 위에 드리운 **그림자** 라고 생각하면 돼요.

그 그림자의 "부호 있는 길이" $|\mathbf{b}|\cos\theta$ 가 **스칼라 사영(scalar projection)**, 다른 말로 **$\mathbf{a}$ 방향의 $\mathbf{b}$ 의 성분** 이고 $\text{comp}_{\mathbf{a}}\mathbf{b}$ 로 씁니다. $\theta$ 가 둔각이면 이 값은 음수가 돼요.

$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}|\,(|\mathbf{b}|\cos\theta)$ 이므로 양변을 $|\mathbf{a}|$ 로 나누면 공식이 나와요.

> 스칼라 사영: $$\text{comp}_{\mathbf{a}}\mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|}$$
> 벡터 사영: $$\text{proj}_{\mathbf{a}}\mathbf{b} = \left(\frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|}\right)\frac{\mathbf{a}}{|\mathbf{a}|} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2}\,\mathbf{a}$$

기억할 것은 하나예요. **벡터 사영 = 스칼라 사영 × ($\mathbf{a}$ 방향의 단위벡터)**. 그래서 벡터 사영은 항상 $\mathbf{a}$ 의 스칼라배이고, 분모는 "사영을 **받는** 쪽" 인 $\mathbf{a}$ 의 길이입니다.`,
          fig: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" font-size="13"><line x1="40" y1="160" x2="290" y2="160"/><polyline points="282,155 290,160 282,165"/><line x1="40" y1="160" x2="200" y2="45"/><polyline points="190,46 200,45 196,55"/><line x1="200" y1="45" x2="200" y2="160" stroke-dasharray="5 4"/><polyline points="190,160 190,150 200,150"/><line x1="40" y1="166" x2="200" y2="166" stroke="#3b82f6" stroke-width="3"/><text x="28" y="165" fill="currentColor" stroke="none">P</text><text x="296" y="165" fill="currentColor" stroke="none">Q</text><text x="204" y="40" fill="currentColor" stroke="none">R</text><text x="204" y="180" fill="currentColor" stroke="none">S</text><text x="105" y="95" fill="currentColor" stroke="none">b</text><text x="250" y="150" fill="currentColor" stroke="none">a</text><text x="72" y="152" fill="currentColor" stroke="none">θ</text><text x="85" y="188" fill="#3b82f6" stroke="none">proj_a b (길이 |b|cos θ)</text></svg>`
        },
        {
          type: "worked", title: "예제 6: 스칼라 사영과 벡터 사영",
          problem: R`$\mathbf{a} = \langle -2, 3, 1 \rangle$ 위로의 $\mathbf{b} = \langle 1, 1, 2 \rangle$ 의 스칼라 사영과 벡터 사영을 구하세요.`,
          steps: [
            {
              ask: "두 공식에 공통으로 필요한 것은 무엇일까요?",
              body: R`스칼라 사영 $\dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|}$ 와 벡터 사영 $\dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2}\mathbf{a}$ 모두 **내적 $\mathbf{a} \cdot \mathbf{b}$** 와 **$\mathbf{a}$ 의 길이** 가 필요해요. "$\mathbf{a}$ 위로의" 사영이므로 길이를 재야 하는 쪽은 $\mathbf{a}$ 입니다($\mathbf{b}$ 의 길이는 필요 없어요).`
            },
            {
              ask: "a 의 길이와 내적을 계산해 보세요.",
              body: R`$$|\mathbf{a}| = \sqrt{(-2)^2 + 3^2 + 1^2} = \sqrt{14}$$
$$\mathbf{a} \cdot \mathbf{b} = (-2)(1) + 3(1) + 1(2) = 3$$`
            },
            {
              ask: "스칼라 사영은 얼마일까요?",
              body: R`$$\text{comp}_{\mathbf{a}}\mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|} = \frac{3}{\sqrt{14}}$$

양수이므로 $\mathbf{b}$ 의 그림자는 $\mathbf{a}$ 와 같은 방향으로 생겨요.`
            },
            {
              ask: "벡터 사영은 스칼라 사영에 무엇을 곱하면 될까요?",
              body: R`$\mathbf{a}$ 방향의 단위벡터 $\dfrac{\mathbf{a}}{|\mathbf{a}|}$ 를 곱합니다.

$$\text{proj}_{\mathbf{a}}\mathbf{b} = \frac{3}{\sqrt{14}} \cdot \frac{\mathbf{a}}{\sqrt{14}} = \frac{3}{14}\,\mathbf{a} = \frac{3}{14}\langle -2, 3, 1 \rangle = \left\langle -\frac{3}{7}, \frac{9}{14}, \frac{3}{14} \right\rangle$$

결과가 $\mathbf{a}$ 의 스칼라배 $\tfrac{3}{14}\mathbf{a}$ 인 것을 확인하세요. 벡터 사영은 언제나 $\mathbf{a}$ 와 평행합니다.`
            }
          ],
          answer: R`$\text{comp}_{\mathbf{a}}\mathbf{b} = \dfrac{3}{\sqrt{14}}$, $\quad \text{proj}_{\mathbf{a}}\mathbf{b} = \left\langle -\dfrac{3}{7}, \dfrac{9}{14}, \dfrac{3}{14} \right\rangle$`
        },
        {
          type: "check",
          q: {
            id: "calc-03-c06", kind: "num", level: 2, tag: "사영",
            q: R`$\mathbf{a} = \langle 3, -4 \rangle$, $\mathbf{b} = \langle 7, 1 \rangle$ 일 때, $\mathbf{a}$ 위로의 $\mathbf{b}$ 의 스칼라 사영 $\text{comp}_{\mathbf{a}}\mathbf{b}$ 를 구하세요. (소수 첫째 자리까지)`,
            answer: 3.4, tol: 0.01, unit: "",
            explain: R`$|\mathbf{a}| = \sqrt{3^2 + (-4)^2} = 5$, $\mathbf{a} \cdot \mathbf{b} = 3(7) + (-4)(1) = 17$ 이므로

$$\text{comp}_{\mathbf{a}}\mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|} = \frac{17}{5} = 3.4$$`,
            hints: [R`$\text{comp}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|}$ 입니다.`, R`분모는 $\mathbf{a}$ 의 길이 5예요. $\mathbf{b}$ 의 길이가 아닙니다.`],
            trap: R`분모에 $|\mathbf{b}| = \sqrt{50}$ 을 넣는 실수. 그러면 $\mathbf{b}$ 위로의 $\mathbf{a}$ 의 스칼라 사영(약 2.4)이 돼요.`
          }
        },
        {
          type: "explain", title: "응용: 일 W = F · D",
          body: R`사영이 쓰이는 대표적인 예가 물리의 **일(work)** 이에요. 일정한 힘 $F$ 로 물체를 거리 $d$ 만큼 옮겼을 때 한 일은 $W = Fd$ 인데, 이 식은 힘이 **움직인 방향으로** 작용할 때만 맞습니다.

힘이 다른 방향을 향하는 벡터 $\mathbf{F} = \overrightarrow{PR}$ 이고 물체가 $P$ 에서 $Q$ 로 움직였다면, **변위벡터(displacement vector)** 는 $\mathbf{D} = \overrightarrow{PQ}$ 예요. 이때 일은 "$\mathbf{D}$ 방향의 힘의 성분 × 움직인 거리" 로 정의합니다.

$$W = (|\mathbf{F}|\cos\theta)\,|\mathbf{D}|$$

정리 3을 쓰면 이것이 바로 내적이에요.

> $$W = |\mathbf{F}||\mathbf{D}|\cos\theta = \mathbf{F} \cdot \mathbf{D}$$

즉 **일정한 힘 $\mathbf{F}$ 가 변위 $\mathbf{D}$ 동안 한 일은 내적 $\mathbf{F} \cdot \mathbf{D}$** 입니다. 크기와 각도가 주어지면 $|\mathbf{F}||\mathbf{D}|\cos\theta$ 로, 성분이 주어지면 성분끼리 곱해 더하면 돼요. 힘이 뉴턴(N), 거리가 미터(m)이면 일의 단위는 줄(J = N·m)입니다.`
        },
        {
          type: "worked", title: "예제 7·8: 힘이 한 일",
          problem: R`**(가)** $70\,\text{N}$ 의 일정한 힘으로 짐수레를 수평한 길을 따라 $100\,\text{m}$ 끌었어요. 손잡이와 수평인 길이 이루는 각이 $35^\circ$ 일 때 한 일을 구하세요.

**(나)** 힘 $\mathbf{F} = 3\mathbf{i} + 4\mathbf{j} + 5\mathbf{k}$ 가 물체를 점 $P(2, 1, 0)$ 에서 $Q(4, 6, 2)$ 로 이동시켰을 때 한 일을 구하세요. (힘은 N, 길이는 m)`,
          steps: [
            {
              ask: "(가)에서는 무엇이 주어졌나요? 내적의 두 계산법 중 어느 쪽을 써야 할까요?",
              body: R`(가)는 힘의 **크기** $|\mathbf{F}| = 70$, 변위의 **크기** $|\mathbf{D}| = 100$, 그리고 둘 **사이의 각** $35^\circ$ 가 주어졌어요. 성분이 없으니 $W = \mathbf{F} \cdot \mathbf{D} = |\mathbf{F}||\mathbf{D}|\cos\theta$ 를 씁니다. 힘은 손잡이 방향, 변위는 수평 방향이라 사이의 각이 $35^\circ$ 예요.`
            },
            {
              ask: "(가)의 일을 계산해 보세요.",
              body: R`$$W = (70)(100)\cos 35^\circ \approx 5734\,\text{N·m} = 5734\,\text{J}$$

힘을 전부 이동 방향으로 썼다면 $7000\,\text{J}$ 이었을 텐데, 비스듬히 당겨서 $\cos 35^\circ \approx 0.82$ 배만 일로 쓰였어요.`
            },
            {
              ask: "(나)에서는 변위벡터 D 가 직접 주어지지 않았어요. 어떻게 구할까요?",
              body: R`변위벡터는 **끝점 − 시작점** 이에요.

$$\mathbf{D} = \overrightarrow{PQ} = \langle 4 - 2,\ 6 - 1,\ 2 - 0 \rangle = \langle 2, 5, 2 \rangle$$`
            },
            {
              ask: "(나)의 일을 계산해 보세요.",
              body: R`이번에는 성분이 있으니 성분끼리 곱해 더합니다.

$$W = \mathbf{F} \cdot \mathbf{D} = \langle 3, 4, 5 \rangle \cdot \langle 2, 5, 2 \rangle = 6 + 20 + 10 = 36$$

힘이 뉴턴, 길이가 미터이므로 한 일은 $36\,\text{J}$ 입니다.`
            }
          ],
          answer: R`(가) $W \approx 5734\,\text{J}$, (나) $W = 36\,\text{J}$`
        },
        {
          type: "check",
          q: {
            id: "calc-03-c07", kind: "num", level: 2, tag: "일",
            q: R`힘 $\mathbf{F} = 5\mathbf{i} - 2\mathbf{j} + 4\mathbf{k}$ (N) 가 물체를 점 $P(1, 3, 0)$ 에서 점 $Q(4, 7, 6)$ 까지 직선으로 이동시켰어요(거리 단위는 m). 이 힘이 한 일은 몇 J 일까요?`,
            answer: 31, tol: 0.01, unit: "J",
            explain: R`변위벡터는 $\mathbf{D} = \overrightarrow{PQ} = \langle 4 - 1, 7 - 3, 6 - 0 \rangle = \langle 3, 4, 6 \rangle$ 입니다.

$$W = \mathbf{F} \cdot \mathbf{D} = 5(3) + (-2)(4) + 4(6) = 15 - 8 + 24 = 31\,\text{J}$$`,
            hints: [R`먼저 변위벡터 $\mathbf{D} = \overrightarrow{PQ}$ 를 구해요(끝점 − 시작점).`, R`$\mathbf{D} = \langle 3, 4, 6 \rangle$ 이고 $W = \mathbf{F} \cdot \mathbf{D}$ 입니다.`],
            trap: R`변위벡터 대신 도착점 $Q$ 의 좌표 $\langle 4, 7, 6 \rangle$ 을 그대로 내적하는 실수(그러면 30이 나와요).`
          }
        }
      ],
      keypoints: [
        R`내적은 대응 성분끼리 곱해 더한 값 $\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$ 이고, 결과는 벡터가 아니라 스칼라이다.`,
        R`내적의 성질: $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$, 교환법칙, 분배법칙, $(c\mathbf{a}) \cdot \mathbf{b} = c(\mathbf{a} \cdot \mathbf{b})$, $\mathbf{0} \cdot \mathbf{a} = 0$.`,
        R`$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$ ($0 \le \theta \le \pi$) 이고, 코사인 법칙과 $|\mathbf{a} - \mathbf{b}|^2$ 의 내적 전개를 비교해서 증명한다.`,
        R`사이의 각은 $\cos\theta = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$ 로 구한다.`,
        R`두 벡터가 수직일 필요충분조건은 $\mathbf{a} \cdot \mathbf{b} = 0$ 이고, 내적이 양수면 예각, 음수면 둔각이다.`,
        R`방향코사인은 $\cos\alpha = a_1/|\mathbf{a}|$, $\cos\beta = a_2/|\mathbf{a}|$, $\cos\gamma = a_3/|\mathbf{a}|$ 이고 제곱의 합이 1이며, $\mathbf{a}$ 방향 단위벡터의 성분과 같다.`,
        R`스칼라 사영은 $\text{comp}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|}$, 벡터 사영은 $\text{proj}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2}\mathbf{a}$ 이다.`,
        R`일정한 힘 $\mathbf{F}$ 가 변위 $\mathbf{D}$ 동안 한 일은 $W = \mathbf{F} \cdot \mathbf{D} = |\mathbf{F}||\mathbf{D}|\cos\theta$ 이다.`
      ],
      bank: [
        {
          id: "calc-03-b01", kind: "short", level: 1, tag: "내적의 정의·성질",
          q: R`$\mathbf{a}, \mathbf{b}, \mathbf{c}$ 가 벡터일 때 $(\mathbf{a} \cdot \mathbf{b}) \cdot \mathbf{c}$ 는 의미가 없는 표현이지만 $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c})$ 는 의미가 있는 표현이에요. 각각 그 이유를 설명하세요.`,
          answer: R`$\mathbf{a} \cdot \mathbf{b}$ 는 스칼라예요. 내적은 벡터와 벡터 사이에서만 정의되므로, 스칼라 $(\mathbf{a} \cdot \mathbf{b})$ 와 벡터 $\mathbf{c}$ 를 내적하는 $(\mathbf{a} \cdot \mathbf{b}) \cdot \mathbf{c}$ 는 의미가 없습니다.

반면 $\mathbf{b} + \mathbf{c}$ 는 벡터끼리의 합이라 벡터이고, $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c})$ 는 벡터와 벡터의 내적이므로 의미가 있으며 그 값은 스칼라예요.`,
          rubric: ["내적의 결과가 스칼라임을 말했다", "내적은 벡터와 벡터 사이에서만 정의된다고 말했다", "b + c 가 벡터이므로 a 와 내적할 수 있다고 말했다"],
          explain: R`각 부분이 **스칼라인지 벡터인지** 를 따지는 것이 핵심이에요. $(\mathbf{a} \cdot \mathbf{b})$ 는 스칼라, $(\mathbf{b} + \mathbf{c})$ 는 벡터입니다. 내적 기호 $\cdot$ 의 양쪽에는 반드시 벡터가 와야 해요.`,
          hints: [R`$\mathbf{a} \cdot \mathbf{b}$ 의 결과는 어떤 종류의 양인가요?`]
        },
        {
          id: "calc-03-b02", kind: "num", level: 2, tag: "내적의 정의·성질",
          q: R`$\mathbf{a} = 2\mathbf{i} - 3\mathbf{j} + \mathbf{k}$, $\mathbf{b} = 4\mathbf{i} + 7\mathbf{k}$ 일 때 $\mathbf{a} \cdot \mathbf{b}$ 의 값을 구하세요.`,
          answer: 15, tol: 0.001, unit: "",
          explain: R`$\mathbf{b}$ 에는 $\mathbf{j}$ 항이 없으므로 $\mathbf{b} = \langle 4, 0, 7 \rangle$ 입니다.

$$\mathbf{a} \cdot \mathbf{b} = 2(4) + (-3)(0) + 1(7) = 8 + 0 + 7 = 15$$`,
          hints: [R`두 벡터를 $\langle\ ,\ ,\ \rangle$ 꼴로 먼저 써 보세요.`, R`$\mathbf{b}$ 의 $\mathbf{j}$ 성분은 0이에요.`],
          trap: R`$\mathbf{b}$ 에 $\mathbf{j}$ 가 없다는 것을 놓치고 $7$ 을 둘째 성분으로 보아 $2(4) + (-3)(7) = -13$ 으로 계산하는 실수.`
        },
        {
          id: "calc-03-b03", kind: "mcq", level: 1, tag: "내적의 정의·성질",
          q: R`벡터 $\mathbf{a}, \mathbf{b}$ 와 스칼라 $c$ 에 대해 다음 중 **항상 성립한다고 할 수 없는** 것은 어느 것일까요?`,
          choices: [
            R`$\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$`,
            R`$\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$`,
            R`$\mathbf{a} \cdot \mathbf{b} = 0$ 이면 $\mathbf{a} = \mathbf{0}$ 또는 $\mathbf{b} = \mathbf{0}$ 이다`,
            R`$(c\mathbf{a}) \cdot \mathbf{b} = \mathbf{a} \cdot (c\mathbf{b})$`
          ],
          answer: 2,
          explain: R`실수에서는 $xy = 0$ 이면 $x = 0$ 또는 $y = 0$ 이지만 내적은 그렇지 않아요. 영이 아닌 두 벡터라도 **수직** 이면 내적이 0입니다. 예: $\langle 1, 0 \rangle \cdot \langle 0, 1 \rangle = 0$.

나머지 셋은 내적의 성질 1, 2, 4예요.`,
          hints: [R`내적이 0이 되는 경우를 기하학적으로 떠올려 보세요.`]
        },
        {
          id: "calc-03-b04", kind: "num", level: 2, tag: "내적의 정의·성질",
          q: R`$|\mathbf{a}| = 3$, $|\mathbf{b}| = 4$, $\mathbf{a} \cdot \mathbf{b} = 5$ 일 때 $|\mathbf{a} - \mathbf{b}|^2$ 의 값을 구하세요.`,
          answer: 15, tol: 0.001, unit: "",
          explain: R`성질 1로 길이의 제곱을 내적으로 바꾸고 분배법칙으로 전개해요(정리 3의 증명에서 쓴 계산과 같아요).

$$|\mathbf{a} - \mathbf{b}|^2 = (\mathbf{a} - \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) = |\mathbf{a}|^2 - 2\,\mathbf{a} \cdot \mathbf{b} + |\mathbf{b}|^2 = 9 - 10 + 16 = 15$$`,
          hints: [R`$|\mathbf{v}|^2 = \mathbf{v} \cdot \mathbf{v}$ 를 $\mathbf{v} = \mathbf{a} - \mathbf{b}$ 에 써 보세요.`, R`전개하면 $|\mathbf{a}|^2 - 2\,\mathbf{a} \cdot \mathbf{b} + |\mathbf{b}|^2$ 입니다.`],
          trap: R`$|\mathbf{a} - \mathbf{b}| = |\mathbf{a}| - |\mathbf{b}|$ 라고 생각해 $(3 - 4)^2 = 1$ 로 답하는 실수. 길이는 그렇게 빼지지 않아요.`
        },
        {
          id: "calc-03-b05", kind: "num", level: 1, tag: "사이의 각",
          q: R`$|\mathbf{a}| = 3$, $|\mathbf{b}| = 8$ 이고 $\mathbf{a} \cdot \mathbf{b} = -12$ 일 때, 두 벡터 사이의 각은 몇 도일까요?`,
          answer: 120, tol: 0.1, unit: "°",
          explain: R`$$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|} = \frac{-12}{3 \cdot 8} = -\frac{1}{2}$$

$0 \le \theta \le \pi$ 에서 $\cos\theta = -\tfrac{1}{2}$ 인 각은 $\theta = 120^\circ$ 입니다. 내적이 음수이니 둔각이 나오는 것이 맞아요.`,
          hints: [R`$\cos\theta = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$ 를 씁니다.`, R`$\cos\theta = -\tfrac{1}{2}$ 이 되는 $0^\circ$ ~ $180^\circ$ 사이의 각을 찾아요.`],
          trap: R`음의 부호를 버리고 $\cos\theta = \tfrac{1}{2}$ 로 보아 $60^\circ$ 라고 답하는 실수.`
        },
        {
          id: "calc-03-b06", kind: "num", level: 2, tag: "사이의 각",
          q: R`$\mathbf{a} = \langle 3, 4 \rangle$ 와 $\mathbf{b} = \langle 5, 12 \rangle$ 사이의 각은 몇 도일까요? (소수 첫째 자리까지)`,
          answer: 14.3, tol: 0.1, unit: "°",
          explain: R`$|\mathbf{a}| = 5$, $|\mathbf{b}| = 13$, $\mathbf{a} \cdot \mathbf{b} = 3(5) + 4(12) = 63$ 이므로

$$\cos\theta = \frac{63}{5 \cdot 13} = \frac{63}{65},\qquad \theta = \cos^{-1}\!\left(\frac{63}{65}\right) \approx 14.3^\circ$$`,
          hints: [R`먼저 정확한 식 $\cos\theta = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$ 의 값을 분수로 구해요.`, R`$|\mathbf{a}| = 5$, $|\mathbf{b}| = 13$, $\mathbf{a} \cdot \mathbf{b} = 63$ 입니다.`]
        },
        {
          id: "calc-03-b07", kind: "num", level: 3, tag: "사이의 각",
          q: R`세 점 $P(1, 0)$, $Q(0, 2)$, $R(3, 3)$ 을 꼭짓점으로 하는 삼각형에서 꼭짓점 $P$ 의 내각은 몇 도일까요? (소수 첫째 자리까지)`,
          answer: 60.3, tol: 0.1, unit: "°",
          explain: R`꼭짓점 $P$ 의 내각은 $P$ 에서 **출발하는** 두 벡터 사이의 각이에요.

$$\overrightarrow{PQ} = \langle -1, 2 \rangle,\qquad \overrightarrow{PR} = \langle 2, 3 \rangle$$

$\overrightarrow{PQ} \cdot \overrightarrow{PR} = -2 + 6 = 4$, $|\overrightarrow{PQ}| = \sqrt{5}$, $|\overrightarrow{PR}| = \sqrt{13}$ 이므로

$$\cos\theta = \frac{4}{\sqrt{5}\sqrt{13}} = \frac{4}{\sqrt{65}} \approx 0.496,\qquad \theta \approx 60.3^\circ$$`,
          hints: [R`내각을 이루는 두 변을 벡터로 나타내요. 두 벡터 모두 $P$ 에서 시작해야 합니다.`, R`$\overrightarrow{PQ} = \langle -1, 2 \rangle$, $\overrightarrow{PR} = \langle 2, 3 \rangle$ 사이의 각을 구해요.`],
          trap: R`한 벡터만 방향을 뒤집어 $\overrightarrow{QP}$ 와 $\overrightarrow{PR}$ 사이의 각을 구하면 $180^\circ - 60.3^\circ = 119.7^\circ$ (외각)가 나와요.`
        },
        {
          id: "calc-03-b08", kind: "num", level: 3, tag: "사이의 각",
          q: R`한 모서리의 길이가 1인 정육면체를 한 꼭짓점이 원점에 오고 세 모서리가 좌표축의 양의 방향에 놓이도록 두었어요. 원점에서 출발하는 정육면체의 대각선 $\langle 1, 1, 1 \rangle$ 과, 원점에서 출발하는 한 면의 대각선 $\langle 1, 1, 0 \rangle$ 이 이루는 각은 몇 도일까요? (소수 첫째 자리까지)`,
          answer: 35.3, tol: 0.1, unit: "°",
          explain: R`$\mathbf{a} = \langle 1, 1, 1 \rangle$, $\mathbf{b} = \langle 1, 1, 0 \rangle$ 로 두면 $\mathbf{a} \cdot \mathbf{b} = 2$, $|\mathbf{a}| = \sqrt{3}$, $|\mathbf{b}| = \sqrt{2}$ 입니다.

$$\cos\theta = \frac{2}{\sqrt{3}\sqrt{2}} = \frac{2}{\sqrt{6}} \approx 0.8165,\qquad \theta \approx 35.3^\circ$$

참고로 대각선과 한 **모서리** $\langle 1, 0, 0 \rangle$ 이 이루는 각은 $\cos^{-1}(1/\sqrt{3}) \approx 54.7^\circ$ 예요.`,
          hints: [R`두 대각선을 벡터로 보고 따름정리 6을 씁니다.`, R`내적은 2, 길이는 $\sqrt{3}$ 과 $\sqrt{2}$ 입니다.`]
        },
        {
          id: "calc-03-b09", kind: "mcq", level: 1, tag: "수직 판정",
          q: R`$\mathbf{a} = \langle 2, 1, -3 \rangle$, $\mathbf{b} = \langle 1, 4, 1 \rangle$ 사이의 각 $\theta$ 에 대해 옳은 것은 어느 것일까요?`,
          choices: [
            R`$\theta$ 는 직각이다`,
            R`$\theta$ 는 예각이다`,
            R`$\theta$ 는 둔각이다`,
            R`$\theta = 0$ 이다 (같은 방향)`
          ],
          answer: 1,
          explain: R`$\mathbf{a} \cdot \mathbf{b} = 2(1) + 1(4) + (-3)(1) = 3 > 0$ 이므로 $\cos\theta > 0$, 즉 **예각** 입니다. 각도를 직접 구하지 않아도 내적의 부호만으로 알 수 있어요.

두 벡터는 성분의 비가 서로 달라 평행이 아니므로 $\theta = 0$ 은 아니에요.`,
          hints: [R`내적의 부호만 보면 됩니다.`]
        },
        {
          id: "calc-03-b10", kind: "mcq", level: 2, tag: "수직 판정",
          q: R`$\mathbf{a} = \langle -6, 9, 3 \rangle$, $\mathbf{b} = \langle 4, -6, -2 \rangle$ 는 서로 어떤 관계일까요?`,
          choices: [
            R`직교한다`,
            R`평행하고 방향이 같다`,
            R`평행하고 방향이 반대이다`,
            R`직교도 평행도 아니다`
          ],
          answer: 2,
          explain: R`$\mathbf{b} = -\tfrac{2}{3}\mathbf{a}$ 예요($-6 \times (-\tfrac{2}{3}) = 4$, $9 \times (-\tfrac{2}{3}) = -6$, $3 \times (-\tfrac{2}{3}) = -2$). 한 벡터가 다른 벡터의 **음수 배** 이므로 평행하고 방향이 반대입니다.

내적으로도 확인돼요. $\mathbf{a} \cdot \mathbf{b} = -24 - 54 - 6 = -84$ 이고 $|\mathbf{a}||\mathbf{b}| = \sqrt{126}\sqrt{56} = 84$ 이므로 $\mathbf{a} \cdot \mathbf{b} = -|\mathbf{a}||\mathbf{b}|$, 즉 $\theta = \pi$ 입니다.`,
          hints: [R`내적이 0인지 먼저 확인하고, 아니면 성분의 비를 비교해 보세요.`, R`$4 / (-6)$, $-6 / 9$, $-2 / 3$ 을 각각 계산해 보세요.`]
        },
        {
          id: "calc-03-b11", kind: "num", level: 2, tag: "수직 판정",
          q: R`두 벡터 $\langle 2, x, -1 \rangle$ 과 $\langle x, 3, 4 \rangle$ 가 서로 수직이 되도록 하는 $x$ 의 값을 구하세요.`,
          answer: 0.8, tol: 0.001, unit: "",
          explain: R`수직일 필요충분조건은 내적이 0인 것이에요.

$$2(x) + x(3) + (-1)(4) = 5x - 4 = 0 \quad\Longrightarrow\quad x = \frac{4}{5} = 0.8$$`,
          hints: [R`수직이면 내적이 0이에요.`, R`내적을 $x$ 의 식으로 쓰면 $2x + 3x - 4$ 입니다.`]
        },
        {
          id: "calc-03-b12", kind: "mcq", level: 1, tag: "방향각",
          q: R`영이 아닌 벡터 $\mathbf{a} = \langle a_1, a_2, a_3 \rangle$ 의 방향각이 $\alpha, \beta, \gamma$ 일 때, $\mathbf{a}$ 와 방향이 같은 **단위벡터** 는 무엇일까요?`,
          choices: [
            R`$\langle \alpha, \beta, \gamma \rangle$`,
            R`$\langle \sin\alpha, \sin\beta, \sin\gamma \rangle$`,
            R`$\langle a_1, a_2, a_3 \rangle$ 그 자체`,
            R`$\langle \cos\alpha, \cos\beta, \cos\gamma \rangle$`
          ],
          answer: 3,
          explain: R`$\cos\alpha = a_1/|\mathbf{a}|$, $\cos\beta = a_2/|\mathbf{a}|$, $\cos\gamma = a_3/|\mathbf{a}|$ 이므로

$$\frac{1}{|\mathbf{a}|}\mathbf{a} = \langle \cos\alpha, \cos\beta, \cos\gamma \rangle$$

즉 방향코사인이 곧 $\mathbf{a}$ 방향 단위벡터의 성분이에요.`,
          hints: [R`단위벡터는 벡터를 자기 길이로 나눈 것이에요.`]
        },
        {
          id: "calc-03-b13", kind: "num", level: 2, tag: "방향각",
          q: R`벡터 $\mathbf{a} = \langle 2, -6, 3 \rangle$ 이 $y$ 축의 양의 방향과 이루는 방향각 $\beta$ 는 몇 도일까요? (소수 첫째 자리까지)`,
          answer: 149.0, tol: 0.1, unit: "°",
          explain: R`$|\mathbf{a}| = \sqrt{2^2 + (-6)^2 + 3^2} = \sqrt{49} = 7$ 이므로

$$\cos\beta = \frac{a_2}{|\mathbf{a}|} = -\frac{6}{7},\qquad \beta = \cos^{-1}\!\left(-\frac{6}{7}\right) \approx 149.0^\circ$$

$y$ 성분이 음수라서 벡터가 $y$ 축의 음의 방향 쪽을 향하고, 그래서 양의 방향과는 둔각을 이룹니다.`,
          hints: [R`$\cos\beta = \dfrac{a_2}{|\mathbf{a}|}$ 입니다.`, R`$|\mathbf{a}| = 7$ 이고 $a_2 = -6$ 이에요. 부호를 그대로 둡니다.`],
          trap: R`부호를 빼고 $\cos^{-1}(6/7) \approx 31.0^\circ$ 로 답하는 실수. 방향각은 $0^\circ$ ~ $180^\circ$ 범위라 둔각도 나올 수 있어요.`
        },
        {
          id: "calc-03-b14", kind: "mcq", level: 3, tag: "방향각",
          q: R`방향각 중 두 개가 $\alpha = 30^\circ$, $\beta = 45^\circ$ 인 벡터가 있다면 세 번째 방향각 $\gamma$ 는 얼마일까요?`,
          choices: [
            R`그런 벡터는 존재하지 않는다`,
            R`$\gamma = 105^\circ$`,
            R`$\gamma = 75^\circ$`,
            R`$\gamma = 90^\circ$`
          ],
          answer: 0,
          explain: R`$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$ 이어야 하는데

$$\cos^2 30^\circ + \cos^2 45^\circ = \frac{3}{4} + \frac{1}{2} = \frac{5}{4} > 1$$

이므로 $\cos^2\gamma = -\tfrac{1}{4}$ 이 되어야 해요. 제곱이 음수일 수는 없으니 그런 벡터는 **존재하지 않습니다.** 벡터가 $x$ 축과 $y$ 축 양쪽에 동시에 그렇게 가까이 붙을 수는 없다는 뜻이에요.`,
          hints: [R`방향코사인 제곱의 합이 1이라는 식에 넣어 보세요.`, R`$\cos^2 30^\circ = \tfrac{3}{4}$, $\cos^2 45^\circ = \tfrac{1}{2}$ 입니다.`]
        },
        {
          id: "calc-03-b15", kind: "num", level: 2, tag: "사영",
          q: R`$\mathbf{a} = \langle 2, -1, 2 \rangle$, $\mathbf{b} = \langle 3, 5, 4 \rangle$ 일 때 $\mathbf{a}$ 위로의 $\mathbf{b}$ 의 스칼라 사영 $\text{comp}_{\mathbf{a}}\mathbf{b}$ 를 구하세요.`,
          answer: 3, tol: 0.01, unit: "",
          explain: R`$|\mathbf{a}| = \sqrt{4 + 1 + 4} = 3$, $\mathbf{a} \cdot \mathbf{b} = 2(3) + (-1)(5) + 2(4) = 9$ 이므로

$$\text{comp}_{\mathbf{a}}\mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|} = \frac{9}{3} = 3$$`,
          hints: [R`$\text{comp}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|}$ 입니다.`, R`$\mathbf{a} \cdot \mathbf{b} = 9$, $|\mathbf{a}| = 3$ 이에요.`],
          trap: R`$|\mathbf{a}|^2 = 9$ 로 나누어 $1$ 이라고 답하는 실수. $|\mathbf{a}|^2$ 으로 나누는 것은 벡터 사영에서 $\mathbf{a}$ 앞에 붙는 계수예요.`
        },
        {
          id: "calc-03-b16", kind: "mcq", level: 2, tag: "사영",
          q: R`$\mathbf{a} = \langle 1, 2, -2 \rangle$, $\mathbf{b} = \langle 4, 1, -3 \rangle$ 일 때 $\mathbf{a}$ 위로의 $\mathbf{b}$ 의 벡터 사영 $\text{proj}_{\mathbf{a}}\mathbf{b}$ 는 무엇일까요?`,
          choices: [
            R`$\langle 4, 8, -8 \rangle$`,
            R`$\left\langle \tfrac{24}{13}, \tfrac{6}{13}, -\tfrac{18}{13} \right\rangle$`,
            R`$\langle 4, 2, 6 \rangle$`,
            R`$\left\langle \tfrac{4}{3}, \tfrac{8}{3}, -\tfrac{8}{3} \right\rangle$`
          ],
          answer: 3,
          explain: R`$\mathbf{a} \cdot \mathbf{b} = 1(4) + 2(1) + (-2)(-3) = 12$, $|\mathbf{a}|^2 = 1 + 4 + 4 = 9$ 이므로

$$\text{proj}_{\mathbf{a}}\mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2}\,\mathbf{a} = \frac{12}{9}\langle 1, 2, -2 \rangle = \left\langle \frac{4}{3}, \frac{8}{3}, -\frac{8}{3} \right\rangle$$

검산: 스칼라 사영은 $12/3 = 4$ 이고, 구한 벡터의 길이도 $\tfrac{4}{3} \cdot 3 = 4$ 로 일치해요.`,
          hints: [R`$\text{proj}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2}\,\mathbf{a}$ 입니다.`, R`결과는 반드시 $\mathbf{a} = \langle 1, 2, -2 \rangle$ 의 스칼라배여야 해요.`]
        },
        {
          id: "calc-03-b17", kind: "num", level: 3, tag: "사영",
          q: R`$\mathbf{a} = \langle 3, 4 \rangle$, $\mathbf{b} = \langle 5, 10 \rangle$ 일 때, $\mathbf{b}$ 에서 벡터 사영을 뺀 벡터 $\mathbf{b} - \text{proj}_{\mathbf{a}}\mathbf{b}$ (교재 연습문제에서 $\text{orth}_{\mathbf{a}}\mathbf{b}$, 수직 사영이라 부르는 벡터)의 크기를 구하세요.`,
          answer: 2, tol: 0.01, unit: "",
          explain: R`$\mathbf{a} \cdot \mathbf{b} = 15 + 40 = 55$, $|\mathbf{a}|^2 = 25$ 이므로

$$\text{proj}_{\mathbf{a}}\mathbf{b} = \frac{55}{25}\langle 3, 4 \rangle = \langle 6.6, 8.8 \rangle$$
$$\mathbf{b} - \text{proj}_{\mathbf{a}}\mathbf{b} = \langle 5 - 6.6,\ 10 - 8.8 \rangle = \langle -1.6, 1.2 \rangle$$

크기는 $\sqrt{1.6^2 + 1.2^2} = \sqrt{4} = 2$ 입니다.

이 벡터는 $\mathbf{a}$ 와 수직이에요: $\langle -1.6, 1.2 \rangle \cdot \langle 3, 4 \rangle = -4.8 + 4.8 = 0$. 즉 $\mathbf{b}$ 를 "$\mathbf{a}$ 와 평행한 부분 + $\mathbf{a}$ 와 수직인 부분" 으로 쪼갠 것이고, 구한 값 2는 $\mathbf{b}$ 의 끝점에서 $\mathbf{a}$ 방향 직선까지의 거리예요.`,
          hints: [R`먼저 $\text{proj}_{\mathbf{a}}\mathbf{b}$ 를 구해요.`, R`$\text{proj}_{\mathbf{a}}\mathbf{b} = \tfrac{55}{25}\langle 3, 4 \rangle$ 을 $\mathbf{b}$ 에서 성분별로 뺍니다.`],
          trap: R`벡터의 크기끼리 빼서 $|\mathbf{b}| - |\text{proj}_{\mathbf{a}}\mathbf{b}| = \sqrt{125} - 11 \approx 0.18$ 로 계산하는 실수. 벡터를 먼저 빼고 나서 크기를 구해야 해요.`
        },
        {
          id: "calc-03-b18", kind: "num", level: 1, tag: "일",
          q: R`썰매를 수평한 눈길 위에서 $40\,\text{m}$ 끌었어요. 줄을 당기는 힘은 $50\,\text{N}$ 으로 일정하고, 줄은 수평과 $60^\circ$ 의 각을 이룹니다. 이 힘이 한 일은 몇 J 일까요?`,
          answer: 1000, tol: 1, unit: "J",
          explain: R`$$W = |\mathbf{F}||\mathbf{D}|\cos\theta = (50)(40)\cos 60^\circ = 2000 \times \tfrac{1}{2} = 1000\,\text{J}$$`,
          hints: [R`$W = \mathbf{F} \cdot \mathbf{D} = |\mathbf{F}||\mathbf{D}|\cos\theta$ 입니다.`, R`힘과 변위 사이의 각은 $60^\circ$ 이고 $\cos 60^\circ = \tfrac{1}{2}$ 이에요.`],
          trap: R`각도를 무시하고 $50 \times 40 = 2000\,\text{J}$ 로 계산하는 실수.`
        },
        {
          id: "calc-03-b19", kind: "num", level: 2, tag: "일",
          q: R`수평 방향으로 $200\,\text{N}$ 의 힘을 가해 상자를 경사각 $30^\circ$ 인 경사면을 따라 위로 $5\,\text{m}$ 밀어 올렸어요. 이 수평력이 상자에 한 일은 몇 J 일까요? (소수 첫째 자리까지)`,
          answer: 866.0, tol: 0.5, unit: "J",
          explain: R`힘은 **수평** 방향, 변위는 **경사면** 방향이므로 둘 사이의 각이 경사각과 같은 $30^\circ$ 예요.

$$W = |\mathbf{F}||\mathbf{D}|\cos 30^\circ = (200)(5)\frac{\sqrt{3}}{2} \approx 866.0\,\text{J}$$

성분으로 확인하면 $\mathbf{F} = \langle 200, 0 \rangle$, $\mathbf{D} = \langle 5\cos 30^\circ, 5\sin 30^\circ \rangle$ 이라 $\mathbf{F} \cdot \mathbf{D} = 1000\cos 30^\circ$ 로 같습니다.`,
          hints: [R`힘의 방향과 변위의 방향 사이의 각이 얼마인지부터 정해요.`, R`수평선과 경사면이 이루는 각이 $30^\circ$ 이므로 $\theta = 30^\circ$ 입니다.`],
          trap: R`힘이 이동 방향과 나란하다고 보고 $200 \times 5 = 1000\,\text{J}$ 로 계산하는 실수. 힘은 수평, 이동은 경사 방향이에요.`
        },
        {
          id: "calc-03-b20", kind: "num", level: 3, tag: "일",
          q: R`N$30^\circ$W 방향(북쪽에서 서쪽으로 $30^\circ$ 기울어진 방향)으로 $80\,\text{N}$ 의 힘이 물체에 작용하고 있어요. 이 물체가 정서쪽으로 $10\,\text{m}$ 움직였다면 이 힘이 한 일은 몇 J 일까요?`,
          answer: 400, tol: 1, unit: "J",
          explain: R`힘의 방향은 북쪽에서 서쪽으로 $30^\circ$ 이므로, **서쪽** 방향과는 $90^\circ - 30^\circ = 60^\circ$ 를 이룹니다.

$$W = |\mathbf{F}||\mathbf{D}|\cos 60^\circ = (80)(10)\left(\tfrac{1}{2}\right) = 400\,\text{J}$$

성분으로 확인하면(동쪽을 $+x$, 북쪽을 $+y$) $\mathbf{F} = \langle -80\sin 30^\circ, 80\cos 30^\circ \rangle = \langle -40, 40\sqrt{3} \rangle$, $\mathbf{D} = \langle -10, 0 \rangle$ 이라 $\mathbf{F} \cdot \mathbf{D} = 400$ 입니다.`,
          hints: [R`필요한 것은 힘의 방향과 **이동 방향(서쪽)** 사이의 각이에요.`, R`북쪽과 서쪽은 $90^\circ$ 를 이루므로, 힘과 서쪽 사이의 각은 $90^\circ - 30^\circ$ 입니다.`],
          trap: R`문제에 나온 $30^\circ$ 를 그대로 써서 $800\cos 30^\circ \approx 692.8\,\text{J}$ 로 계산하는 실수. $30^\circ$ 는 북쪽에서 잰 각이지 이동 방향에서 잰 각이 아니에요.`
        },
        {
          id: "calc-03-b21", kind: "short", level: 3, tag: "사이의 각",
          q: R`정리 3 ($\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$) 을 이용해 코시–슈바르츠 부등식(Cauchy–Schwarz inequality) $|\mathbf{a} \cdot \mathbf{b}| \le |\mathbf{a}||\mathbf{b}|$ 가 성립함을 보이고, 등호가 성립하는 경우를 말하세요.`,
          answer: R`정리 3의 양변에 절댓값을 씌우면

$$|\mathbf{a} \cdot \mathbf{b}| = |\mathbf{a}||\mathbf{b}||\cos\theta|$$

입니다. 모든 $\theta$ 에 대해 $|\cos\theta| \le 1$ 이고 $|\mathbf{a}||\mathbf{b}| \ge 0$ 이므로 $|\mathbf{a} \cdot \mathbf{b}| \le |\mathbf{a}||\mathbf{b}|$ 가 됩니다.

등호는 $|\cos\theta| = 1$, 즉 $\theta = 0$ 또는 $\theta = \pi$ 일 때(두 벡터가 평행할 때) 성립해요. 둘 중 하나가 영벡터일 때도 양변이 모두 0이라 등호가 성립합니다.`,
          rubric: ["정리 3에 절댓값을 씌워 |a·b| = |a||b||cos θ| 로 썼다", "|cos θ| ≤ 1 임을 이용했다", "등호 조건이 두 벡터가 평행(θ = 0 또는 π)일 때임을 말했다"],
          explain: R`핵심은 $|\cos\theta| \le 1$ 한 줄이에요. 내적의 크기는 두 길이의 곱을 넘을 수 없고, 두 벡터가 같은 직선 위에 있을 때 최대가 됩니다. 이 부등식은 교재 연습문제 61이고, 삼각부등식 $|\mathbf{a} + \mathbf{b}| \le |\mathbf{a}| + |\mathbf{b}|$ 를 증명할 때도 쓰여요.`,
          hints: [R`정리 3의 양변에 절댓값을 씌워 보세요.`, R`$\cos\theta$ 가 가질 수 있는 값의 범위를 떠올려 보세요.`]
        },
        {
          id: "calc-03-b22", kind: "short", level: 3, tag: "내적의 정의·성질",
          q: R`두 벡터 $\mathbf{u} + \mathbf{v}$ 와 $\mathbf{u} - \mathbf{v}$ 가 직교하면 $\mathbf{u}$ 와 $\mathbf{v}$ 는 반드시 같은 길이를 가짐을 내적의 성질을 써서 보이세요.`,
          answer: R`직교하므로 내적이 0입니다: $(\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v}) = 0$.

좌변을 분배법칙(성질 3)으로 전개하면

$$\mathbf{u} \cdot \mathbf{u} - \mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{u} - \mathbf{v} \cdot \mathbf{v}$$

이고, 교환법칙(성질 2)으로 가운데 두 항이 지워지며, 성질 1로 $\mathbf{u} \cdot \mathbf{u} = |\mathbf{u}|^2$, $\mathbf{v} \cdot \mathbf{v} = |\mathbf{v}|^2$ 이므로

$$|\mathbf{u}|^2 - |\mathbf{v}|^2 = 0$$

길이는 0 이상이므로 $|\mathbf{u}| = |\mathbf{v}|$ 입니다.`,
          rubric: ["직교 조건을 (u+v)·(u−v) = 0 으로 썼다", "분배법칙으로 전개하고 교환법칙으로 가운데 항을 지웠다", "u·u = |u|² 을 써서 |u|² = |v|² 을 얻었다"],
          explain: R`내적의 성질 1, 2, 3을 모두 쓰는 전형적인 증명이에요(교재 연습문제 64). 기하학적으로는 $\mathbf{u}$, $\mathbf{v}$ 로 만든 평행사변형의 두 대각선이 $\mathbf{u} + \mathbf{v}$ 와 $\mathbf{u} - \mathbf{v}$ 이므로, "대각선이 수직인 평행사변형은 네 변의 길이가 같다(마름모)" 는 뜻입니다.`,
          hints: [R`"직교한다" 를 내적의 식으로 바꿔 쓰세요.`, R`$(\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v})$ 를 실수의 곱셈처럼 전개해 보세요.`]
        }
      ]
    }
  );
})();
