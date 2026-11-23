(function () {
  const R = String.raw;
  window.TUTOR_UNITS = window.TUTOR_UNITS || [];
  window.TUTOR_UNITS.push(
    /* ===================== 11.4 벡터곱 ===================== */
    {
      course: "calc",
      id: "calc-04",
      no: 4,
      title: "벡터곱(외적)",
      subtitle: "11.4 벡터곱",
      source: "대학미분적분학 중간.pdf",
      minutes: 60,
      objectives: [
        "행렬식 표현을 이용해 두 3차원 벡터의 벡터곱(cross product)을 계산할 수 있다",
        "벡터곱의 방향(두 벡터에 수직, 오른손 법칙)과 크기(평행사변형의 넓이)를 설명하고 넓이·수직 벡터 문제에 쓸 수 있다",
        "벡터곱의 대수 성질 6가지를 알고, 교환법칙·결합법칙이 성립하지 않음을 설명할 수 있다",
        "스칼라 삼중곱으로 평행육면체의 부피를 구하고 세 벡터가 같은 평면 위에 있는지 판정할 수 있다",
        "염력(torque)을 벡터곱으로 나타내고 그 크기를 구할 수 있다"
      ],
      pretest: [
        {
          id: "calc-04-p01", kind: "mcq", level: 1, tag: "방향·직교",
          q: R`내적 $\mathbf{a}\cdot\mathbf{b}$ 의 결과는 수(스칼라)였어요. 그렇다면 이번에 배울 벡터곱 $\mathbf{a}\times\mathbf{b}$ 의 결과는 무엇일까요?`,
          choices: [
            R`내적처럼 하나의 수(스칼라)`,
            R`$\mathbf{a}$ 와 $\mathbf{b}$ 가 놓인 평면 안에 있는 벡터`,
            R`$\mathbf{a}$ 와 $\mathbf{b}$ 모두에 수직인 벡터`,
            R`$\mathbf{a}$ 와 $\mathbf{b}$ 의 성분끼리 곱해서 만든 벡터`
          ],
          answer: 2,
          explain: R`벡터곱 $\mathbf{a}\times\mathbf{b}$ 는 이름 그대로 **벡터**이고, $\mathbf{a}$ 와 $\mathbf{b}$ **둘 다에 수직**이 되도록 만들어진 벡터예요. 애초에 "두 벡터에 동시에 수직인 벡터를 구하고 싶다"는 필요에서 나온 곱입니다.`
        },
        {
          id: "calc-04-p02", kind: "mcq", level: 1, tag: "대수 성질",
          q: R`수의 곱셈은 $2\times 3 = 3\times 2$ 처럼 순서를 바꿔도 같아요. 벡터곱에서 $\mathbf{a}\times\mathbf{b}$ 와 $\mathbf{b}\times\mathbf{a}$ 는 어떤 관계일까요?`,
          choices: [
            R`항상 같다`,
            R`크기는 같고 방향이 정반대이다`,
            R`서로 수직이다`,
            R`아무 관계가 없다`
          ],
          answer: 1,
          explain: R`$\mathbf{a}\times\mathbf{b} = -\,\mathbf{b}\times\mathbf{a}$ 입니다. 순서를 바꾸면 **부호가 바뀌어** 정반대 방향의 벡터가 돼요. 그래서 벡터곱은 교환법칙이 성립하지 않습니다.`
        },
        {
          id: "calc-04-p03", kind: "mcq", level: 1, tag: "크기·넓이",
          q: R`벡터곱의 크기 $|\mathbf{a}\times\mathbf{b}|$ 는 $\mathbf{a}$, $\mathbf{b}$ 를 이웃한 두 변으로 하는 평행사변형의 넓이와 같다고 해요. 그러면 영이 아닌 두 벡터가 **평행**할 때 $\mathbf{a}\times\mathbf{b}$ 는 어떻게 될까요?`,
          choices: [
            R`영벡터 $\mathbf{0}$ 이 된다`,
            R`크기가 $|\mathbf{a}||\mathbf{b}|$ 로 가장 커진다`,
            R`$\mathbf{a}$ 와 같은 방향의 벡터가 된다`,
            R`정의되지 않는다`
          ],
          answer: 0,
          explain: R`두 벡터가 평행하면 평행사변형이 납작하게 눌려 넓이가 $0$ 이 돼요. 크기가 $0$ 인 벡터는 영벡터뿐이므로 $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ 입니다. 이것이 뒤에서 배울 "평행 판정법"이에요.`
        }
      ],
      steps: [
        {
          type: "explain", title: "벡터곱은 어디서 나왔을까: 두 벡터에 모두 수직인 벡터",
          body: R`영이 아닌 두 벡터 $\mathbf{a} = \langle a_1, a_2, a_3\rangle$, $\mathbf{b} = \langle b_1, b_2, b_3\rangle$ 가 있을 때, **둘 다에 수직인** 벡터 $\mathbf{c} = \langle c_1, c_2, c_3\rangle$ 를 구하고 싶다고 해요. 수직이면 내적이 $0$ 이므로

$$a_1c_1 + a_2c_2 + a_3c_3 = 0,\qquad b_1c_1 + b_2c_2 + b_3c_3 = 0$$

첫 식에 $b_3$, 둘째 식에 $a_3$ 를 곱해 빼면 $c_3$ 가 사라지고 $(a_1b_3 - a_3b_1)c_1 + (a_2b_3 - a_3b_2)c_2 = 0$ 이 남아요. $pc_1 + qc_2 = 0$ 꼴이니 $c_1 = q$, $c_2 = -p$ 로 잡으면 되고, 이것을 원래 식에 넣으면 $c_3$ 도 나옵니다. 이렇게 얻은 벡터가 바로 벡터곱이에요.

> **정의** $\mathbf{a} = \langle a_1, a_2, a_3\rangle$, $\mathbf{b} = \langle b_1, b_2, b_3\rangle$ 일 때 벡터곱(cross product, 외적)은
> $$\mathbf{a}\times\mathbf{b} = \langle a_2b_3 - a_3b_2,\; a_3b_1 - a_1b_3,\; a_1b_2 - a_2b_1\rangle$$

내적(dot product)과 달리 결과가 **벡터**라서 벡터곱(vector product)이라고 불러요. 그리고 $\mathbf{a}\times\mathbf{b}$ 는 $\mathbf{a}$, $\mathbf{b}$ 가 **3차원 벡터일 때만** 정의됩니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c01", kind: "mcq", level: 1, tag: "방향·직교",
            q: R`벡터곱 $\mathbf{a}\times\mathbf{b}$ 에 대한 설명으로 옳은 것은 무엇일까요?`,
            choices: [
              R`결과는 스칼라이고, 2차원·3차원 벡터 모두에서 정의된다`,
              R`결과는 벡터이고, 2차원 벡터에서도 그대로 정의된다`,
              R`결과는 스칼라이고, 3차원 벡터에서만 정의된다`,
              R`결과는 벡터이고, 3차원 벡터에서만 정의된다`
            ],
            answer: 3,
            explain: R`$\mathbf{a}\times\mathbf{b}$ 는 성분이 세 개인 **벡터**이고, 정의식 자체가 세 성분 $a_1, a_2, a_3$ 를 모두 쓰기 때문에 **3차원 벡터에서만** 정의돼요. 결과가 스칼라이고 차원에 상관없이 정의되는 것은 내적입니다.`,
            hints: [R`정의식에 성분이 몇 개 나오는지, 결과가 꺾쇠괄호 $\langle\ \rangle$ 로 묶여 있는지 떠올려 보세요.`]
          }
        },
        {
          type: "explain", title: "준비물: 이차·삼차행렬식",
          body: R`정의식을 그대로 외우기는 힘들어요. 그래서 행렬식(determinant) 표기를 빌려 씁니다.

> **이차행렬식** $$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

"왼쪽 위에서 오른쪽 아래로 곱한 것"에서 "오른쪽 위에서 왼쪽 아래로 곱한 것"을 빼요. 예를 들어

$$\begin{vmatrix} 2 & 1 \\ -6 & 4 \end{vmatrix} = 2(4) - 1(-6) = 14$$

> **삼차행렬식** (첫째 행으로 전개)
> $$\begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix} = a_1\begin{vmatrix} b_2 & b_3 \\ c_2 & c_3 \end{vmatrix} - a_2\begin{vmatrix} b_1 & b_3 \\ c_1 & c_3 \end{vmatrix} + a_3\begin{vmatrix} b_1 & b_2 \\ c_1 & c_2 \end{vmatrix}$$

첫째 행의 수 $a_i$ 마다, **그 수가 있는 행과 열을 지우고 남은** 이차행렬식을 곱해요. 그리고 **가운데 항만 부호가 $-$** 라는 점을 꼭 기억하세요. 교재의 예:

$$\begin{vmatrix} 1 & 2 & -1 \\ 3 & 0 & 1 \\ -5 & 4 & 2 \end{vmatrix} = 1(0-4) - 2(6+5) + (-1)(12-0) = -38$$`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c02", kind: "num", level: 2, tag: "벡터곱 계산",
            q: R`다음 삼차행렬식의 값을 구하세요.

$$\begin{vmatrix} 2 & 1 & -1 \\ 0 & 3 & 2 \\ 4 & -1 & 1 \end{vmatrix}$$`,
            answer: 30, tol: 0.01, unit: "",
            explain: R`첫째 행으로 전개합니다.

$$2\begin{vmatrix} 3 & 2 \\ -1 & 1 \end{vmatrix} - 1\begin{vmatrix} 0 & 2 \\ 4 & 1 \end{vmatrix} + (-1)\begin{vmatrix} 0 & 3 \\ 4 & -1 \end{vmatrix} = 2(3+2) - 1(0-8) - 1(0-12) = 10 + 8 + 12 = 30$$`,
            hints: [R`첫째 행의 수 $2, 1, -1$ 각각에 대해, 그 수의 행과 열을 지운 이차행렬식을 구해요.`, R`부호는 $+,\,-,\,+$ 순서예요. 가운데 항 앞에 $-$ 를 붙이는 것을 잊지 마세요.`],
            trap: R`가운데 항의 $-$ 부호를 빠뜨려 $10 - 8 + 12 = 14$ 로 계산하는 실수가 가장 흔해요.`
          }
        },
        {
          type: "explain", title: "행렬식으로 쓰는 벡터곱 공식",
          body: R`표준기저벡터 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 를 써서 $\mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$, $\mathbf{b} = b_1\mathbf{i} + b_2\mathbf{j} + b_3\mathbf{k}$ 라 하면, 정의식은 이차행렬식 세 개로 다시 쓸 수 있어요.

$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} a_2 & a_3 \\ b_2 & b_3 \end{vmatrix}\mathbf{i} - \begin{vmatrix} a_1 & a_3 \\ b_1 & b_3 \end{vmatrix}\mathbf{j} + \begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix}\mathbf{k}$$

이 모양은 삼차행렬식의 전개와 똑같죠. 그래서 다음처럼 한 줄로 기억합니다.

> $$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}$$

첫째 행에 수 대신 벡터 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 가 들어 있지만, 보통의 행렬식처럼 첫째 행으로 전개하면 됩니다. 교재도 "이 공식이 벡터곱을 기억하고 계산하는 가장 쉬운 방법"이라고 말해요.

순서가 중요합니다: **둘째 행이 앞 벡터 $\mathbf{a}$, 셋째 행이 뒤 벡터 $\mathbf{b}$** 예요. 그리고 여기서도 $\mathbf{j}$ 항 앞의 $-$ 를 잊으면 안 됩니다.`
        },
        {
          type: "worked", title: "예제 1: 벡터곱 계산하기",
          problem: R`$\mathbf{a} = \langle 1, 3, 4\rangle$, $\mathbf{b} = \langle 2, 7, -5\rangle$ 일 때 $\mathbf{a}\times\mathbf{b}$ 를 구하세요.`,
          steps: [
            {
              ask: "행렬식의 세 행에 각각 무엇을 써야 할까요?",
              body: R`첫째 행에 $\mathbf{i}, \mathbf{j}, \mathbf{k}$, 둘째 행에 **앞 벡터** $\mathbf{a}$, 셋째 행에 **뒤 벡터** $\mathbf{b}$ 의 성분을 씁니다.

$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 3 & 4 \\ 2 & 7 & -5 \end{vmatrix}$$

행의 순서를 바꾸면 $\mathbf{b}\times\mathbf{a}$ 가 되어 부호가 뒤집히니 순서를 지켜야 해요.`
            },
            {
              ask: "첫째 행으로 전개하면 이차행렬식 세 개는 각각 무엇일까요?",
              body: R`$\mathbf{i}$ 는 첫째 열을 지우고, $\mathbf{j}$ 는 둘째 열을, $\mathbf{k}$ 는 셋째 열을 지운 이차행렬식과 짝을 이룹니다. 부호는 $+,\,-,\,+$ 예요.

$$= \begin{vmatrix} 3 & 4 \\ 7 & -5 \end{vmatrix}\mathbf{i} - \begin{vmatrix} 1 & 4 \\ 2 & -5 \end{vmatrix}\mathbf{j} + \begin{vmatrix} 1 & 3 \\ 2 & 7 \end{vmatrix}\mathbf{k}$$`
            },
            {
              ask: "각 이차행렬식의 값을 계산해 보세요. j 성분의 부호는 어떻게 될까요?",
              body: R`$ad - bc$ 로 하나씩 계산합니다.

$$= (-15 - 28)\,\mathbf{i} - (-5 - 8)\,\mathbf{j} + (7 - 6)\,\mathbf{k} = -43\,\mathbf{i} + 13\,\mathbf{j} + \mathbf{k}$$

$\mathbf{j}$ 의 이차행렬식 값은 $-13$ 인데 앞에 $-$ 가 있어서 $+13$ 이 됩니다.`
            },
            {
              ask: "답이 맞는지 어떻게 빠르게 검산할 수 있을까요?",
              body: R`벡터곱은 두 벡터 모두에 수직이어야 하므로, **내적이 둘 다 $0$** 인지 확인하면 돼요.

$$\langle -43, 13, 1\rangle\cdot\langle 1, 3, 4\rangle = -43 + 39 + 4 = 0$$
$$\langle -43, 13, 1\rangle\cdot\langle 2, 7, -5\rangle = -86 + 91 - 5 = 0$$

둘 다 $0$ 이니 맞습니다. 시험에서 10초면 할 수 있는 검산이니 습관으로 만드세요.`
            }
          ],
          answer: R`$\mathbf{a}\times\mathbf{b} = -43\,\mathbf{i} + 13\,\mathbf{j} + \mathbf{k} = \langle -43, 13, 1\rangle$`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c03", kind: "mcq", level: 2, tag: "벡터곱 계산",
            q: R`$\mathbf{a} = \langle 2, 1, -3\rangle$, $\mathbf{b} = \langle 1, 4, 2\rangle$ 일 때 $\mathbf{a}\times\mathbf{b}$ 는 무엇일까요?`,
            choices: [
              R`$\langle 14, 7, 7\rangle$`,
              R`$\langle 14, -7, 7\rangle$`,
              R`$\langle -14, 7, -7\rangle$`,
              R`$\langle 2, 4, -6\rangle$`
            ],
            answer: 1,
            explain: R`$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 1 & -3 \\ 1 & 4 & 2 \end{vmatrix} = (2 + 12)\,\mathbf{i} - (4 + 3)\,\mathbf{j} + (8 - 1)\,\mathbf{k} = \langle 14, -7, 7\rangle$$

검산: $\langle 14,-7,7\rangle\cdot\langle 2,1,-3\rangle = 28 - 7 - 21 = 0$, $\langle 14,-7,7\rangle\cdot\langle 1,4,2\rangle = 14 - 28 + 14 = 0$.`,
            hints: [R`행렬식의 둘째 행에 $\mathbf{a}$, 셋째 행에 $\mathbf{b}$ 를 쓰고 첫째 행으로 전개해요.`, R`구한 답과 $\mathbf{a}$, $\mathbf{b}$ 의 내적이 모두 $0$ 인지 확인해 보세요.`],
            trap: R`$\mathbf{j}$ 항 앞의 $-$ 를 빠뜨리거나, 행의 순서를 바꿔 $\mathbf{b}\times\mathbf{a}$ 를 계산하는 실수.`
          }
        },
        {
          type: "why",
          prompt: "예제 2: 어떤 3차원 벡터 a 를 가져와도 a × a = 0(영벡터)이 되는 이유를 설명해 보세요. 계산으로도, 직관으로도 말해 볼 수 있을까요?",
          answer: R`**계산으로:** $\mathbf{a} = \langle a_1, a_2, a_3\rangle$ 라 하면 행렬식의 둘째 행과 셋째 행이 똑같아요.

$$\mathbf{a}\times\mathbf{a} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ a_1 & a_2 & a_3 \end{vmatrix} = (a_2a_3 - a_3a_2)\,\mathbf{i} - (a_1a_3 - a_3a_1)\,\mathbf{j} + (a_1a_2 - a_2a_1)\,\mathbf{k} = \mathbf{0}$$

각 성분이 "같은 것끼리의 뺄셈"이라 전부 $0$ 이 됩니다.

**직관으로:** $\mathbf{a}$ 와 $\mathbf{a}$ 사이의 각은 $0$ 이라 두 벡터로 만든 평행사변형이 완전히 납작해요. 넓이가 $0$ 이니 벡터곱의 크기도 $0$ 이고, 크기가 $0$ 인 벡터는 영벡터뿐입니다.

주의: 답은 수 $0$ 이 아니라 **영벡터 $\mathbf{0}$** 이에요. 벡터곱의 결과는 언제나 벡터입니다.`
        },
        {
          type: "explain", title: "정리: 벡터곱의 방향 — 둘 다에 수직, 오른손 법칙",
          body: R`벡터곱에서 가장 중요한 성질은 방향입니다.

> **정리** 벡터 $\mathbf{a}\times\mathbf{b}$ 는 $\mathbf{a}$ 와 $\mathbf{b}$ **모두와 직교한다.**

$\mathbf{a}$ 와 $\mathbf{b}$ 를 같은 시작점에서 그리면 둘은 하나의 평면을 정해요. $\mathbf{a}\times\mathbf{b}$ 는 그 **평면에 수직**인 방향을 가리킵니다.

그런데 평면에 수직인 방향은 위·아래 두 가지죠. 어느 쪽인지는 **오른손 법칙(right-hand rule)** 이 정해 줍니다.

> 오른손의 네 손가락을 $\mathbf{a}$ 에서 $\mathbf{b}$ 쪽으로 ($180^\circ$ 보다 작은 각으로) 감아쥐면, **엄지손가락**이 $\mathbf{a}\times\mathbf{b}$ 의 방향을 가리킨다.

예를 들어 $\mathbf{i}$ ($x$ 축)에서 $\mathbf{j}$ ($y$ 축)로 손가락을 감으면 엄지는 $z$ 축 위쪽, 즉 $\mathbf{k}$ 를 가리켜요. 반대로 $\mathbf{j}$ 에서 $\mathbf{i}$ 로 감으면 엄지가 아래($-\mathbf{k}$)를 향합니다. 순서를 바꾸면 방향이 뒤집히는 이유가 여기에 있어요.`
        },
        {
          type: "why",
          prompt: "a × b 가 a 와 직교한다는 정리는 어떻게 증명할 수 있을까요? 무엇을 계산하면 '직교'를 보일 수 있는지부터 생각해 보세요.",
          answer: R`두 벡터가 직교한다는 것은 **내적이 $0$** 이라는 뜻이에요. 그래서 $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{a}$ 를 직접 계산합니다.

$$(\mathbf{a}\times\mathbf{b})\cdot\mathbf{a} = a_1(a_2b_3 - a_3b_2) - a_2(a_1b_3 - a_3b_1) + a_3(a_1b_2 - a_2b_1)$$
$$= a_1a_2b_3 - a_1b_2a_3 - a_1a_2b_3 + b_1a_2a_3 + a_1b_2a_3 - b_1a_2a_3 = 0$$

여섯 개의 항이 둘씩 짝지어 모두 지워져요. 같은 방법으로 $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{b} = 0$ 도 나옵니다. 따라서 $\mathbf{a}\times\mathbf{b}$ 는 $\mathbf{a}$, $\mathbf{b}$ 둘 다와 직교해요.

사실 이건 당연한 결과이기도 합니다. 벡터곱의 정의 자체가 "$\mathbf{a}\cdot\mathbf{c} = 0$, $\mathbf{b}\cdot\mathbf{c} = 0$ 을 만족하는 $\mathbf{c}$" 를 풀어서 만든 것이니까요.`
        },
        {
          type: "explain", title: "정리: 벡터곱의 크기 |a × b| = |a||b| sin θ",
          body: R`방향을 알았으니 이제 길이를 알면 벡터곱이 완전히 정해집니다.

> **정리** $\theta$ ($0 \le \theta \le \pi$)가 $\mathbf{a}$ 와 $\mathbf{b}$ 사이의 각이면
> $$|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$$

내적의 공식 $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$ 와 짝을 이루는 공식이에요. 내적은 $\cos$, 벡터곱의 **크기**는 $\sin$ 입니다.

정리하면 $\mathbf{a}\times\mathbf{b}$ 는

- **방향**: $\mathbf{a}$, $\mathbf{b}$ 모두에 수직이고 오른손 법칙을 따르는 방향
- **크기**: $|\mathbf{a}||\mathbf{b}|\sin\theta$

인 벡터예요. 교재에 따르면 물리학자들은 바로 이 기하학적 특징으로 $\mathbf{a}\times\mathbf{b}$ 를 정의합니다.

$\sin\theta$ 는 $\theta = \pi/2$ (수직)일 때 $1$ 로 가장 크고, $\theta = 0$ 또는 $\pi$ (평행)일 때 $0$ 이에요. 즉 벡터곱은 두 벡터가 **수직일 때 가장 길고, 평행일 때 사라집니다.** 내적과 정반대죠.`
        },
        {
          type: "why",
          prompt: "|a × b| = |a||b| sin θ 는 어떻게 증명할까요? 힌트: |a × b|² 을 성분으로 전개하면 |a|²|b|² − (a·b)² 이 됩니다. 그다음은?",
          answer: R`증명의 뼈대는 세 걸음이에요.

**1. 제곱을 전개한다.** 정의에서 $|\mathbf{a}\times\mathbf{b}|^2 = (a_2b_3 - a_3b_2)^2 + (a_3b_1 - a_1b_3)^2 + (a_1b_2 - a_2b_1)^2$ 를 다 펼쳐서 정리하면

$$|\mathbf{a}\times\mathbf{b}|^2 = (a_1^2 + a_2^2 + a_3^2)(b_1^2 + b_2^2 + b_3^2) - (a_1b_1 + a_2b_2 + a_3b_3)^2 = |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2$$

**2. 내적 공식을 넣는다.** $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$ 이므로

$$|\mathbf{a}\times\mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2(1 - \cos^2\theta) = |\mathbf{a}|^2|\mathbf{b}|^2\sin^2\theta$$

**3. 제곱근을 씌운다.** $0 \le \theta \le \pi$ 에서는 $\sin\theta \ge 0$ 이라 $\sqrt{\sin^2\theta} = \sin\theta$ 예요. 그래서 절댓값 없이 $|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ 가 됩니다.

중간에 나온 $|\mathbf{a}\times\mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2$ 은 그 자체로 연습문제에 나오는 항등식이니 함께 기억해 두세요.`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c04", kind: "num", level: 2, tag: "크기·넓이",
            q: R`두 벡터 $\mathbf{u}$, $\mathbf{v}$ 의 크기가 $|\mathbf{u}| = 5$, $|\mathbf{v}| = 8$ 이고 두 벡터 사이의 각이 $60^\circ$ 예요. $|\mathbf{u}\times\mathbf{v}|$ 를 소수 첫째 자리까지 구하세요.`,
            answer: 34.6, tol: 0.1, unit: "",
            explain: R`$$|\mathbf{u}\times\mathbf{v}| = |\mathbf{u}||\mathbf{v}|\sin\theta = 5\cdot 8\cdot\sin 60^\circ = 40\cdot\frac{\sqrt{3}}{2} = 20\sqrt{3} \approx 34.6$$`,
            hints: [R`벡터곱의 크기 공식에는 $\cos$ 이 아니라 $\sin$ 이 들어가요.`, R`$\sin 60^\circ = \dfrac{\sqrt{3}}{2}$ 입니다.`],
            trap: R`내적 공식과 헷갈려 $5\cdot 8\cdot\cos 60^\circ = 20$ 으로 계산하는 실수.`
          }
        },
        {
          type: "explain", title: "따름정리: 평행 판정과 평행사변형의 넓이",
          body: R`크기 공식에서 곧바로 두 가지가 따라 나옵니다.

> **따름정리** 영이 아닌 두 벡터 $\mathbf{a}$, $\mathbf{b}$ 가 평행일 필요충분조건은
> $$\mathbf{a}\times\mathbf{b} = \mathbf{0}$$

평행이면 $\theta = 0$ 또는 $\pi$ 이고, 어느 경우나 $\sin\theta = 0$ 이므로 $|\mathbf{a}\times\mathbf{b}| = 0$, 즉 $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ 이에요. 내적으로는 **수직**을 판정하고($\mathbf{a}\cdot\mathbf{b} = 0$), 벡터곱으로는 **평행**을 판정합니다.

두 번째는 넓이예요. $\mathbf{a}$ 와 $\mathbf{b}$ 를 같은 시작점에서 그려 평행사변형을 만들면 밑변이 $|\mathbf{a}|$, 높이가 $|\mathbf{b}|\sin\theta$ 이므로

$$A = |\mathbf{a}|\,(|\mathbf{b}|\sin\theta) = |\mathbf{a}\times\mathbf{b}|$$

> 벡터곱 $\mathbf{a}\times\mathbf{b}$ 의 크기는 $\mathbf{a}$ 와 $\mathbf{b}$ 로 결정되는 **평행사변형의 넓이**와 같다.

삼각형은 평행사변형의 절반이니, 두 변이 $\mathbf{a}$, $\mathbf{b}$ 인 삼각형의 넓이는 $\tfrac12|\mathbf{a}\times\mathbf{b}|$ 입니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c05", kind: "mcq", level: 1, tag: "크기·넓이",
            q: R`다음 중 $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ 이 되는 두 벡터의 쌍은 어느 것일까요?`,
            choices: [
              R`$\mathbf{a} = \langle 1, 2, 3\rangle$, $\mathbf{b} = \langle 2, 4, 6\rangle$`,
              R`$\mathbf{a} = \langle 1, 0, 0\rangle$, $\mathbf{b} = \langle 0, 1, 0\rangle$`,
              R`$\mathbf{a} = \langle 1, 1, 0\rangle$, $\mathbf{b} = \langle 1, -1, 0\rangle$`,
              R`$\mathbf{a} = \langle 1, 2, 3\rangle$, $\mathbf{b} = \langle 3, 2, 1\rangle$`
            ],
            answer: 0,
            explain: R`$\langle 2, 4, 6\rangle = 2\langle 1, 2, 3\rangle$ 이므로 두 벡터가 **평행**해요. 따름정리에 따라 $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ 입니다. 실제로 계산해도 $\langle 2\cdot 6 - 3\cdot 4,\; 3\cdot 2 - 1\cdot 6,\; 1\cdot 4 - 2\cdot 2\rangle = \langle 0, 0, 0\rangle$ 이에요.`,
            hints: [R`벡터곱이 영벡터가 되는 것은 두 벡터가 어떤 관계일 때였죠?`, R`한 벡터가 다른 벡터의 스칼라배인 쌍을 찾아보세요.`]
          }
        },
        {
          type: "worked", title: "예제 3·4: 평면에 수직인 벡터와 삼각형의 넓이",
          problem: R`세 점 $P(1, 4, 6)$, $Q(-2, 5, -1)$, $R(1, -1, 1)$ 이 있어요.

1. 세 점을 지나는 평면에 수직인 벡터를 구하세요.
2. 꼭짓점이 $P, Q, R$ 인 삼각형의 넓이를 구하세요.`,
          steps: [
            {
              ask: "평면에 수직인 벡터를 벡터곱으로 구하려면, 먼저 어떤 두 벡터가 필요할까요?",
              body: R`평면 **안에 놓인** 두 벡터가 필요해요. 한 점 $P$ 에서 나머지 두 점으로 가는 벡터 $\overrightarrow{PQ}$, $\overrightarrow{PR}$ 를 잡으면 둘 다 평면 위에 있습니다. 이 둘의 벡터곱은 두 벡터 모두에 수직이므로 평면 전체에 수직이에요.

끝점에서 시작점을 빼서 구합니다.

$$\overrightarrow{PQ} = (-2-1)\,\mathbf{i} + (5-4)\,\mathbf{j} + (-1-6)\,\mathbf{k} = -3\,\mathbf{i} + \mathbf{j} - 7\,\mathbf{k}$$
$$\overrightarrow{PR} = (1-1)\,\mathbf{i} + (-1-4)\,\mathbf{j} + (1-6)\,\mathbf{k} = -5\,\mathbf{j} - 5\,\mathbf{k}$$`
            },
            {
              ask: "두 벡터의 벡터곱을 행렬식으로 계산해 보세요.",
              body: R`$$\overrightarrow{PQ}\times\overrightarrow{PR} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -3 & 1 & -7 \\ 0 & -5 & -5 \end{vmatrix} = (-5 - 35)\,\mathbf{i} - (15 - 0)\,\mathbf{j} + (15 - 0)\,\mathbf{k} = -40\,\mathbf{i} - 15\,\mathbf{j} + 15\,\mathbf{k}$$

따라서 $\langle -40, -15, 15\rangle$ 이 평면에 수직인 벡터예요.`
            },
            {
              ask: "평면에 수직인 벡터는 이것 하나뿐일까요?",
              body: R`아니에요. 이 벡터의 **영이 아닌 스칼라배**는 모두 평면에 수직입니다. 예를 들어 $5$ 로 나눈 $\langle -8, -3, 3\rangle$ 도 평면에 수직이에요. 숫자가 작은 쪽이 다루기 편하니, 다음 절에서 평면의 방정식을 세울 때는 보통 이렇게 줄여서 씁니다.

(단, 2번의 넓이를 구할 때는 줄이지 않은 원래 벡터곱의 크기를 써야 해요.)`
            },
            {
              ask: "삼각형 PQR 의 넓이는 벡터곱과 어떤 관계일까요?",
              body: R`$\overrightarrow{PQ}$ 와 $\overrightarrow{PR}$ 를 이웃한 두 변으로 하는 **평행사변형**의 넓이가 $|\overrightarrow{PQ}\times\overrightarrow{PR}|$ 이에요.

$$|\overrightarrow{PQ}\times\overrightarrow{PR}| = \sqrt{(-40)^2 + (-15)^2 + 15^2} = \sqrt{2050} = 5\sqrt{82}$$

삼각형 $PQR$ 은 이 평행사변형의 **절반**이므로 넓이는 $\tfrac{5}{2}\sqrt{82} \approx 22.6$ 입니다.`
            }
          ],
          answer: R`평면에 수직인 벡터: $\langle -40, -15, 15\rangle$ (또는 그 스칼라배 $\langle -8, -3, 3\rangle$). 삼각형의 넓이: $\tfrac{5}{2}\sqrt{82} \approx 22.6$`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c06", kind: "num", level: 2, tag: "크기·넓이",
            q: R`꼭짓점이 $A(1, 1, 1)$, $B(3, 2, 1)$, $C(2, 4, 3)$ 인 삼각형의 넓이를 소수 둘째 자리까지 구하세요.`,
            answer: 3.35, tol: 0.01, unit: "",
            explain: R`$\overrightarrow{AB} = \langle 2, 1, 0\rangle$, $\overrightarrow{AC} = \langle 1, 3, 2\rangle$ 입니다.

$$\overrightarrow{AB}\times\overrightarrow{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 1 & 0 \\ 1 & 3 & 2 \end{vmatrix} = (2 - 0)\,\mathbf{i} - (4 - 0)\,\mathbf{j} + (6 - 1)\,\mathbf{k} = \langle 2, -4, 5\rangle$$

크기는 $\sqrt{4 + 16 + 25} = \sqrt{45} = 3\sqrt{5}$ 이고, 삼각형은 평행사변형의 절반이므로 넓이는 $\tfrac{3\sqrt{5}}{2} \approx 3.35$ 예요.`,
            hints: [R`한 꼭짓점에서 나머지 두 꼭짓점으로 가는 벡터 두 개를 만드세요.`, R`두 벡터의 벡터곱의 크기는 평행사변형의 넓이예요. 삼각형은 그 절반입니다.`],
            trap: R`$\tfrac12$ 을 곱하지 않고 평행사변형의 넓이 $3\sqrt{5} \approx 6.71$ 을 답으로 쓰는 실수.`
          }
        },
        {
          type: "explain", title: "표준기저벡터의 벡터곱 — 교환·결합법칙이 안 된다",
          body: R`방향 정리와 크기 정리를 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 에 적용해 봐요. 서로 수직($\theta = \pi/2$)이고 길이가 $1$ 이니 벡터곱의 크기는 $1\cdot 1\cdot\sin(\pi/2) = 1$ 이고, 방향은 오른손 법칙으로 정해집니다.

> $$\mathbf{i}\times\mathbf{j} = \mathbf{k},\qquad \mathbf{j}\times\mathbf{k} = \mathbf{i},\qquad \mathbf{k}\times\mathbf{i} = \mathbf{j}$$
> $$\mathbf{j}\times\mathbf{i} = -\mathbf{k},\qquad \mathbf{k}\times\mathbf{j} = -\mathbf{i},\qquad \mathbf{i}\times\mathbf{k} = -\mathbf{j}$$

외우는 요령: $\mathbf{i}\to\mathbf{j}\to\mathbf{k}\to\mathbf{i}$ 로 도는 **순환 순서대로** 곱하면 다음 것이 $+$ 로 나오고, 거꾸로 곱하면 $-$ 가 붙어요.

여기서 두 가지 경고가 나옵니다.

- $\mathbf{i}\times\mathbf{j} \ne \mathbf{j}\times\mathbf{i}$ 이므로 **교환법칙이 성립하지 않는다.**
- $\mathbf{i}\times(\mathbf{i}\times\mathbf{j}) = \mathbf{i}\times\mathbf{k} = -\mathbf{j}$ 이지만 $(\mathbf{i}\times\mathbf{i})\times\mathbf{j} = \mathbf{0}\times\mathbf{j} = \mathbf{0}$ 이다. 즉 **결합법칙도 일반적으로 성립하지 않는다.**

> $$(\mathbf{a}\times\mathbf{b})\times\mathbf{c} \ne \mathbf{a}\times(\mathbf{b}\times\mathbf{c})\quad\text{(일반적으로)}$$

그래서 벡터곱이 세 개 이상 이어질 때는 **괄호의 위치**를 반드시 지켜야 해요.`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c07", kind: "mcq", level: 2, tag: "대수 성질",
            q: R`행렬식을 쓰지 않고 표준기저벡터의 벡터곱만 이용해서 $(\mathbf{i}\times\mathbf{j})\times\mathbf{j}$ 를 구하면 무엇일까요?`,
            choices: [
              R`$\mathbf{0}$`,
              R`$\mathbf{i}$`,
              R`$-\mathbf{i}$`,
              R`$\mathbf{k}$`
            ],
            answer: 2,
            explain: R`괄호 안부터 계산해요. $\mathbf{i}\times\mathbf{j} = \mathbf{k}$ 이므로 $(\mathbf{i}\times\mathbf{j})\times\mathbf{j} = \mathbf{k}\times\mathbf{j}$ 입니다. 순환 순서 $\mathbf{j}\to\mathbf{k}$ 의 **반대 순서**이므로 $\mathbf{k}\times\mathbf{j} = -\mathbf{i}$ 예요.

참고로 괄호를 옮긴 $\mathbf{i}\times(\mathbf{j}\times\mathbf{j}) = \mathbf{i}\times\mathbf{0} = \mathbf{0}$ 은 다른 값입니다. 결합법칙이 안 된다는 또 하나의 예죠.`,
            hints: [R`괄호 안의 $\mathbf{i}\times\mathbf{j}$ 부터 구해요.`, R`$\mathbf{j}\times\mathbf{k} = \mathbf{i}$ 입니다. 순서를 바꾸면 어떻게 되죠?`]
          }
        },
        {
          type: "explain", title: "정리: 벡터곱의 대수 성질 6가지",
          body: R`교환·결합법칙은 안 되지만, 쓸 수 있는 법칙도 많아요.

> **정리** $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 가 벡터, $c$ 가 스칼라이면
> 1. $\mathbf{a}\times\mathbf{b} = -\,\mathbf{b}\times\mathbf{a}$
> 2. $(c\,\mathbf{a})\times\mathbf{b} = c\,(\mathbf{a}\times\mathbf{b}) = \mathbf{a}\times(c\,\mathbf{b})$
> 3. $\mathbf{a}\times(\mathbf{b} + \mathbf{c}) = \mathbf{a}\times\mathbf{b} + \mathbf{a}\times\mathbf{c}$
> 4. $(\mathbf{a} + \mathbf{b})\times\mathbf{c} = \mathbf{a}\times\mathbf{c} + \mathbf{b}\times\mathbf{c}$
> 5. $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}$
> 6. $\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\cdot\mathbf{c})\,\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\,\mathbf{c}$

말로 풀면 이렇습니다.

- 성질 1: 순서를 바꾸면 **부호가 바뀐다** (반교환).
- 성질 2: 스칼라는 **밖으로 꺼낼 수 있다.**
- 성질 3·4: **분배법칙**은 성립한다. 단, 전개할 때 **곱의 앞뒤 순서를 그대로 유지**해야 해요.
- 성질 5: 내적과 벡터곱의 **점과 가위표를 서로 바꿔도** 된다. 이 값을 스칼라 삼중곱이라고 해요(다음 단계).
- 성질 6: $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$ 를 **벡터 삼중곱(vector triple product)** 이라고 합니다. 결과가 $\mathbf{b}$ 와 $\mathbf{c}$ 의 조합으로 나와요.

이 성질들은 모두 벡터를 성분으로 쓰고 정의를 적용하면 증명됩니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c08", kind: "mcq", level: 2, tag: "대수 성질",
            q: R`$\mathbf{a}\times\mathbf{b} = \langle 3, -1, 2\rangle$ 일 때 $(2\mathbf{b})\times\mathbf{a}$ 는 무엇일까요?`,
            choices: [
              R`$\langle 6, -2, 4\rangle$`,
              R`$\langle -6, 2, -4\rangle$`,
              R`$\langle -3, 1, -2\rangle$`,
              R`$\langle 3, -1, 2\rangle$`
            ],
            answer: 1,
            explain: R`성질 2로 스칼라를 꺼내고, 성질 1로 순서를 바꿉니다.

$$(2\mathbf{b})\times\mathbf{a} = 2\,(\mathbf{b}\times\mathbf{a}) = -2\,(\mathbf{a}\times\mathbf{b}) = -2\langle 3, -1, 2\rangle = \langle -6, 2, -4\rangle$$`,
            hints: [R`스칼라 $2$ 는 벡터곱 밖으로 꺼낼 수 있어요.`, R`$\mathbf{b}\times\mathbf{a}$ 와 $\mathbf{a}\times\mathbf{b}$ 는 부호가 반대입니다.`]
          }
        },
        {
          type: "why",
          prompt: "성질 5, a·(b × c) = (a × b)·c 는 어떻게 증명할까요? 그리고 이 식에서 괄호를 a·(b × c) 대신 (a·b) × c 로 옮기면 왜 안 될까요?",
          answer: R`**증명 아이디어:** 양쪽을 성분으로 다 펼쳐서 같은 여섯 항이 나오는지 봅니다. $\mathbf{c} = \langle c_1, c_2, c_3\rangle$ 라 하면

$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = a_1(b_2c_3 - b_3c_2) + a_2(b_3c_1 - b_1c_3) + a_3(b_1c_2 - b_2c_1)$$

여섯 항으로 펼친 뒤 이번에는 $c_1, c_2, c_3$ 로 묶으면

$$= (a_2b_3 - a_3b_2)c_1 + (a_3b_1 - a_1b_3)c_2 + (a_1b_2 - a_2b_1)c_3 = (\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}$$

괄호 안이 정확히 $\mathbf{a}\times\mathbf{b}$ 의 세 성분이에요. 같은 여섯 항을 $a$ 로 묶느냐 $c$ 로 묶느냐의 차이일 뿐입니다.

**괄호를 옮기면 안 되는 이유:** $\mathbf{a}\cdot\mathbf{b}$ 는 **스칼라**예요. 벡터곱은 벡터 두 개 사이에서만 정의되므로 (스칼라)$\times\mathbf{c}$ 는 의미가 없는 표현입니다. 그래서 $\mathbf{a}\cdot\mathbf{b}\times\mathbf{c}$ 처럼 괄호가 없더라도 벡터곱을 먼저 하는 것으로 읽을 수밖에 없어요.`
        },
        {
          type: "explain", title: "스칼라 삼중곱과 평행육면체의 부피",
          body: R`성질 5에 나온 $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$ 를 **스칼라 삼중곱(scalar triple product)** 이라고 해요. 결과는 스칼라이고, 세 벡터의 성분을 차례로 쌓은 삼차행렬식으로 계산합니다.

> $$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

기하학적 의미는 **부피**입니다. $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 를 세 모서리로 하는 평행육면체(parallelepiped)를 생각해요.

- 밑면은 $\mathbf{b}$, $\mathbf{c}$ 로 만든 평행사변형이므로 넓이가 $A = |\mathbf{b}\times\mathbf{c}|$.
- $\mathbf{b}\times\mathbf{c}$ 는 밑면에 수직이에요. $\mathbf{a}$ 와 $\mathbf{b}\times\mathbf{c}$ 사이의 각을 $\theta$ 라 하면 높이는 $h = |\mathbf{a}||\cos\theta|$. ($\theta > \pi/2$ 일 수 있어서 절댓값을 씌워요.)

$$V = Ah = |\mathbf{b}\times\mathbf{c}||\mathbf{a}||\cos\theta| = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|$$

> 벡터 $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 로 결정되는 평행육면체의 부피는 스칼라 삼중곱의 **크기(절댓값)** 이다.
> $$V = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|$$

부피가 $0$ 이면 평행육면체가 납작하다는 뜻이므로, 세 벡터는 **같은 평면 위에 놓여 있습니다(coplanar).** 즉 $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = 0$ 이 공면 판정법이에요.`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c09", kind: "num", level: 2, tag: "삼중곱·부피",
            q: R`벡터 $\mathbf{a} = \langle 1, 2, 3\rangle$, $\mathbf{b} = \langle -1, 1, 2\rangle$, $\mathbf{c} = \langle 2, 1, 4\rangle$ 로 결정되는 평행육면체의 부피를 구하세요.`,
            answer: 9, tol: 0.01, unit: "",
            explain: R`$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \begin{vmatrix} 1 & 2 & 3 \\ -1 & 1 & 2 \\ 2 & 1 & 4 \end{vmatrix} = 1(4 - 2) - 2(-4 - 4) + 3(-1 - 2) = 2 + 16 - 9 = 9$$

부피는 절댓값이므로 $V = |9| = 9$ 입니다.`,
            hints: [R`세 벡터의 성분을 세 행에 차례로 써서 삼차행렬식을 만드세요.`, R`첫째 행으로 전개: $1(\cdots) - 2(\cdots) + 3(\cdots)$.`],
            trap: R`행렬식 값이 음수로 나올 때 절댓값을 씌우지 않고 음수 부피를 답하는 실수.`
          }
        },
        {
          type: "worked", title: "예제 5: 세 벡터가 같은 평면 위에 있음을 보이기",
          problem: R`스칼라 삼중곱을 이용하여 벡터 $\mathbf{a} = \langle 1, 4, -7\rangle$, $\mathbf{b} = \langle 2, -1, 4\rangle$, $\mathbf{c} = \langle 0, -9, 18\rangle$ 이 같은 평면 위에 놓여 있음을 보이세요.`,
          steps: [
            {
              ask: "'같은 평면 위에 있다'는 것을 스칼라 삼중곱의 어떤 값으로 확인할 수 있을까요?",
              body: R`세 벡터가 같은 평면 위에 있으면 그 셋으로 만든 평행육면체가 납작해서 **부피가 $0$** 이에요. 부피는 $|\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|$ 이므로, 스칼라 삼중곱이 $0$ 임을 보이면 됩니다.`
            },
            {
              ask: "스칼라 삼중곱을 행렬식으로 쓰고 첫째 행으로 전개해 보세요.",
              body: R`$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \begin{vmatrix} 1 & 4 & -7 \\ 2 & -1 & 4 \\ 0 & -9 & 18 \end{vmatrix} = 1\begin{vmatrix} -1 & 4 \\ -9 & 18 \end{vmatrix} - 4\begin{vmatrix} 2 & 4 \\ 0 & 18 \end{vmatrix} - 7\begin{vmatrix} 2 & -1 \\ 0 & -9 \end{vmatrix}$$

셋째 항은 $a_3 = -7$ 이라 $+(-7)$, 즉 $-7$ 이 됩니다.`
            },
            {
              ask: "세 이차행렬식의 값은 각각 얼마일까요?",
              body: R`- $(-1)(18) - (4)(-9) = -18 + 36 = 18$
- $(2)(18) - (4)(0) = 36$
- $(2)(-9) - (-1)(0) = -18$

$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = 1(18) - 4(36) - 7(-18) = 18 - 144 + 126 = 0$$`
            },
            {
              ask: "이 결과에서 어떤 결론을 내릴 수 있을까요?",
              body: R`스칼라 삼중곱이 $0$ 이므로 $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 로 결정되는 평행육면체의 부피가 $0$ 입니다. 이것은 세 벡터가 **같은 평면 위에 놓여 있다**는 뜻이에요.`
            }
          ],
          answer: R`$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = 0$ 이므로 평행육면체의 부피가 $0$ 이고, 세 벡터는 같은 평면 위에 있다.`
        },
        {
          type: "explain", title: "염력(토크): 물리에서 쓰이는 벡터곱",
          body: R`렌치로 볼트를 조일 때를 생각해 보세요. 볼트(원점)에서 손이 닿는 곳까지의 위치벡터를 $\mathbf{r}$, 손이 가하는 힘을 $\mathbf{F}$ 라 하면, 이 힘이 물체를 **돌리려는 효과**가 염력(torque, 비틀리는 힘)입니다.

> $$\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}$$

- **방향**: 염력벡터의 방향은 **회전축**을 나타내요.
- **크기**: $\theta$ 가 위치벡터와 힘벡터 사이의 각일 때

> $$|\boldsymbol{\tau}| = |\mathbf{r}\times\mathbf{F}| = |\mathbf{r}||\mathbf{F}|\sin\theta$$

회전을 일으키는 것은 $\mathbf{F}$ 중에서 $\mathbf{r}$ 에 **수직인 성분** $|\mathbf{F}|\sin\theta$ 뿐이에요. 렌치를 손잡이 방향으로 잡아당기기만 하면($\theta = 0$) 볼트가 전혀 돌지 않는 것과 같습니다. 그리고 염력의 크기는 $\mathbf{r}$ 과 $\mathbf{F}$ 로 결정되는 평행사변형의 넓이와 같아요.

단위는 길이(m)와 힘(N)을 곱한 $\text{N·m}$ 입니다. 길이가 cm 로 주어지면 m 로 바꿔서 계산하세요.`
        },
        {
          type: "worked", title: "예제 6: 렌치로 볼트 조이기",
          problem: R`길이 $0.25\,\text{m}$ 인 렌치의 끝에 $40\,\text{N}$ 의 힘을 가해 볼트를 조이고 있어요. 렌치(위치벡터 $\mathbf{r}$)의 방향과 힘 $\mathbf{F}$ 의 방향 사이의 각은 $75^\circ$ 입니다. 볼트의 중심에 대한 염력의 크기를 구하세요.`,
          steps: [
            {
              ask: "어떤 공식에 무엇을 대입해야 할까요?",
              body: R`염력의 크기는 $|\boldsymbol{\tau}| = |\mathbf{r}||\mathbf{F}|\sin\theta$ 예요. 여기서 $|\mathbf{r}| = 0.25\,\text{m}$ (볼트 중심에서 힘의 작용점까지의 거리), $|\mathbf{F}| = 40\,\text{N}$, $\theta = 75^\circ$ ($\mathbf{r}$ 과 $\mathbf{F}$ 사이의 각)입니다.`
            },
            {
              ask: "값을 대입해 계산해 보세요.",
              body: R`$$|\boldsymbol{\tau}| = |\mathbf{r}\times\mathbf{F}| = (0.25)(40)\sin 75^\circ = 10\sin 75^\circ \approx 9.66\,\text{N·m}$$

$\sin 75^\circ \approx 0.9659$ 입니다. 힘이 렌치에 완전히 수직($90^\circ$)이었다면 $10\,\text{N·m}$ 였을 텐데, 조금 비스듬해서 그보다 약간 작아요.`
            },
            {
              ask: "염력벡터 자체는 어느 방향을 가리킬까요?",
              body: R`염력벡터는 $\mathbf{r}$ 과 $\mathbf{F}$ 가 놓인 평면(렌치를 그린 지면)에 **수직**이고, 방향은 오른손 법칙으로 정해져요. 교재의 그림에서는 지면의 **뒤쪽**을 향합니다. 볼트가 오른나사라면 볼트가 그 방향으로 들어가며 조여지는 거예요.

지면의 뒤쪽을 향하는 단위벡터를 $\mathbf{n}$ 이라 하면 $\boldsymbol{\tau} = |\boldsymbol{\tau}|\,\mathbf{n} \approx 9.66\,\mathbf{n}$ 으로 쓸 수 있습니다.`
            }
          ],
          answer: R`$|\boldsymbol{\tau}| = 10\sin 75^\circ \approx 9.66\,\text{N·m}$ (염력벡터는 $\boldsymbol{\tau} \approx 9.66\,\mathbf{n}$, $\mathbf{n}$ 은 지면 뒤쪽을 향하는 단위벡터)`
        },
        {
          type: "check",
          q: {
            id: "calc-04-c10", kind: "num", level: 2, tag: "염력",
            q: R`길이 $30\,\text{cm}$ 인 렌치의 끝에 $50\,\text{N}$ 의 힘을 가하고 있어요. 렌치의 방향과 힘의 방향 사이의 각이 $30^\circ$ 일 때, 볼트의 중심에 대한 염력의 크기는 몇 $\text{N·m}$ 일까요? (소수 첫째 자리까지)`,
            answer: 7.5, tol: 0.05, unit: "N·m",
            explain: R`$30\,\text{cm} = 0.30\,\text{m}$ 로 바꿔서 대입합니다.

$$|\boldsymbol{\tau}| = |\mathbf{r}||\mathbf{F}|\sin\theta = (0.30)(50)\sin 30^\circ = 15\cdot\frac12 = 7.5\,\text{N·m}$$`,
            hints: [R`먼저 길이의 단위를 m 로 바꾸세요.`, R`$|\boldsymbol{\tau}| = |\mathbf{r}||\mathbf{F}|\sin\theta$ 이고 $\sin 30^\circ = \tfrac12$ 입니다.`],
            trap: R`cm 를 m 로 바꾸지 않아 $750$ 이 나오거나, $\sin$ 대신 $\cos 30^\circ$ 를 써서 $13.0$ 이 나오는 실수.`
          }
        }
      ],
      keypoints: [
        R`벡터곱 $\mathbf{a}\times\mathbf{b} = \langle a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1\rangle$ 는 3차원 벡터에서만 정의되는 **벡터**이고, 첫째 행이 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 인 삼차행렬식으로 계산한다.`,
        R`$\mathbf{a}\times\mathbf{b}$ 는 $\mathbf{a}$ 와 $\mathbf{b}$ 모두에 수직이고, 방향은 오른손 법칙($\mathbf{a}$ 에서 $\mathbf{b}$ 로 손가락을 감을 때 엄지 방향)으로 정해진다.`,
        R`크기는 $|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ 이고, 이것은 $\mathbf{a}$, $\mathbf{b}$ 로 만든 평행사변형의 넓이와 같다(삼각형은 그 절반).`,
        R`영이 아닌 두 벡터가 평행일 필요충분조건은 $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ 이고, 특히 $\mathbf{a}\times\mathbf{a} = \mathbf{0}$ 이다.`,
        R`$\mathbf{i}\times\mathbf{j} = \mathbf{k}$, $\mathbf{j}\times\mathbf{k} = \mathbf{i}$, $\mathbf{k}\times\mathbf{i} = \mathbf{j}$ 이고 순서를 바꾸면 부호가 바뀐다: $\mathbf{a}\times\mathbf{b} = -\mathbf{b}\times\mathbf{a}$. 교환법칙과 결합법칙은 성립하지 않는다.`,
        R`스칼라배는 밖으로 꺼낼 수 있고 분배법칙은 성립하며, $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}$, $\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\cdot\mathbf{c})\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\mathbf{c}$ 이다.`,
        R`스칼라 삼중곱 $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$ 는 세 벡터를 행으로 쌓은 삼차행렬식이고, 그 절댓값이 평행육면체의 부피이다. 값이 $0$ 이면 세 벡터는 같은 평면 위에 있다.`,
        R`염력은 $\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}$ 이고 크기는 $|\mathbf{r}||\mathbf{F}|\sin\theta$ 이며, 방향은 회전축을 나타낸다.`
      ],
      bank: [
        {
          id: "calc-04-b01", kind: "mcq", level: 1, tag: "벡터곱 계산",
          q: R`$\mathbf{a} = \langle a_1, a_2, a_3\rangle$, $\mathbf{b} = \langle b_1, b_2, b_3\rangle$ 일 때 $\mathbf{a}\times\mathbf{b}$ 의 정의로 옳은 것은 무엇일까요?`,
          choices: [
            R`$\langle a_2b_3 - a_3b_2,\ a_1b_3 - a_3b_1,\ a_1b_2 - a_2b_1\rangle$`,
            R`$\langle a_1b_1,\ a_2b_2,\ a_3b_3\rangle$`,
            R`$\langle a_3b_2 - a_2b_3,\ a_1b_3 - a_3b_1,\ a_2b_1 - a_1b_2\rangle$`,
            R`$\langle a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1\rangle$`
          ],
          answer: 3,
          explain: R`정의는 $\mathbf{a}\times\mathbf{b} = \langle a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1\rangle$ 예요. 첨자가 $23 \to 31 \to 12$ 로 순환한다고 기억하면 쉽습니다. 행렬식으로 전개하면 가운데 성분은 $-(a_1b_3 - a_3b_1) = a_3b_1 - a_1b_3$ 이 됩니다.`,
          hints: [R`첫째 행이 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 인 행렬식을 전개해 보세요. 가운데 항의 부호에 주의하세요.`],
          trap: R`가운데 성분의 부호. 행렬식 전개에서 $\mathbf{j}$ 앞의 $-$ 를 반영해야 해요.`
        },
        {
          id: "calc-04-b02", kind: "mcq", level: 1, tag: "크기·넓이",
          q: R`영이 아닌 두 3차원 벡터 $\mathbf{a}$, $\mathbf{b}$ 가 **평행**일 필요충분조건은 무엇일까요?`,
          choices: [
            R`$\mathbf{a}\cdot\mathbf{b} = 0$`,
            R`$\mathbf{a}\times\mathbf{b} = \mathbf{0}$`,
            R`$|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|$`,
            R`$\mathbf{a}\cdot(\mathbf{a}\times\mathbf{b}) = 0$`
          ],
          answer: 1,
          explain: R`평행이면 사이의 각이 $0$ 또는 $\pi$ 라서 $\sin\theta = 0$, 따라서 $|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta = 0$ 이고 $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ 입니다. 거꾸로 $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ 이면 $\sin\theta = 0$ 이라 평행이에요.`,
          hints: [R`$|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ 에서 평행일 때 $\sin\theta$ 의 값은?`]
        },
        {
          id: "calc-04-b03", kind: "num", level: 1, tag: "크기·넓이",
          q: R`$|\mathbf{u}| = 4$, $|\mathbf{v}| = 9$ 이고 두 벡터 사이의 각이 $150^\circ$ 일 때 $|\mathbf{u}\times\mathbf{v}|$ 를 구하세요.`,
          answer: 18, tol: 0.01, unit: "",
          explain: R`$$|\mathbf{u}\times\mathbf{v}| = 4\cdot 9\cdot\sin 150^\circ = 36\cdot\frac12 = 18$$

$\sin 150^\circ = \sin 30^\circ = \tfrac12$ 입니다. 둔각이어도 $\sin$ 은 양수라서 크기는 양수로 나와요.`,
          hints: [R`$|\mathbf{u}\times\mathbf{v}| = |\mathbf{u}||\mathbf{v}|\sin\theta$ 를 쓰세요.`, R`$\sin 150^\circ = \sin(180^\circ - 30^\circ) = \sin 30^\circ$ 입니다.`],
          trap: R`$\cos 150^\circ$ 를 써서 음수 $-31.2$ 를 얻는 실수. 크기는 음수가 될 수 없어요.`
        },
        {
          id: "calc-04-b04", kind: "mcq", level: 1, tag: "대수 성질",
          q: R`$\mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d}$ 가 3차원 벡터일 때, 다음 중 **의미가 없는** 표현은 어느 것일까요?`,
          choices: [
            R`$\mathbf{a}\times(\mathbf{b}\cdot\mathbf{c})$`,
            R`$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$`,
            R`$(\mathbf{a}\times\mathbf{b})\cdot(\mathbf{c}\times\mathbf{d})$`,
            R`$\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$`
          ],
          answer: 0,
          explain: R`$\mathbf{b}\cdot\mathbf{c}$ 는 **스칼라**예요. 벡터곱은 벡터와 벡터 사이에서만 정의되므로 (벡터)$\times$(스칼라)인 $\mathbf{a}\times(\mathbf{b}\cdot\mathbf{c})$ 는 의미가 없습니다. 나머지는 모두 의미가 있어요: $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$ 와 $(\mathbf{a}\times\mathbf{b})\cdot(\mathbf{c}\times\mathbf{d})$ 는 스칼라, $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$ 는 벡터입니다.`,
          hints: [R`각 괄호 안의 결과가 벡터인지 스칼라인지 먼저 적어 보세요.`, R`내적은 (벡터)·(벡터), 벡터곱은 (벡터)$\times$(벡터)일 때만 계산할 수 있어요.`]
        },
        {
          id: "calc-04-b05", kind: "short", level: 1, tag: "방향·직교",
          q: R`벡터곱 $\mathbf{a}\times\mathbf{b}$ 가 어떤 벡터인지 **방향**과 **크기** 두 가지로 나누어 기하학적으로 설명해 보세요. ($\mathbf{a}$, $\mathbf{b}$ 사이의 각은 $\theta$ 라고 하세요.)`,
          answer: R`**방향:** $\mathbf{a}\times\mathbf{b}$ 는 $\mathbf{a}$ 와 $\mathbf{b}$ 모두에 수직, 즉 두 벡터가 놓인 평면에 수직이에요. 두 수직 방향 중 어느 쪽인지는 오른손 법칙으로 정합니다: 오른손 손가락을 $\mathbf{a}$ 에서 $\mathbf{b}$ 쪽으로($180^\circ$ 보다 작은 각으로) 감으면 엄지가 가리키는 방향이에요.

**크기:** $|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ 이고, 이는 $\mathbf{a}$ 와 $\mathbf{b}$ 로 결정되는 평행사변형의 넓이와 같습니다.`,
          rubric: [
            R`$\mathbf{a}$, $\mathbf{b}$ 모두에 수직(두 벡터의 평면에 수직)이라고 썼다`,
            R`오른손 법칙으로 방향이 정해진다고 썼다`,
            R`크기가 $|\mathbf{a}||\mathbf{b}|\sin\theta$ 라고 썼다`,
            R`크기가 평행사변형의 넓이와 같다고 썼다`
          ],
          explain: R`벡터는 크기와 방향으로 결정돼요. 벡터곱은 "오른손 법칙이 정하는, 두 벡터에 수직인 방향"과 "크기 $|\mathbf{a}||\mathbf{b}|\sin\theta$" 로 완전히 정해지며, 물리학에서는 이것을 벡터곱의 정의로 씁니다.`
        },
        {
          id: "calc-04-b06", kind: "num", level: 1, tag: "염력",
          q: R`볼트에서 $0.4\,\text{m}$ 떨어진 렌치 끝에 $30\,\text{N}$ 의 힘을 가해요. 위치벡터 $\mathbf{r}$ 과 힘 $\mathbf{F}$ 사이의 각이 $50^\circ$ 일 때 볼트에 대한 염력의 크기는 몇 $\text{N·m}$ 일까요? (소수 둘째 자리까지, $\sin 50^\circ \approx 0.7660$)`,
          answer: 9.19, tol: 0.02, unit: "N·m",
          explain: R`$$|\boldsymbol{\tau}| = |\mathbf{r}||\mathbf{F}|\sin\theta = (0.4)(30)\sin 50^\circ = 12 \times 0.7660 \approx 9.19\,\text{N·m}$$`,
          hints: [R`염력의 크기는 $|\mathbf{r}||\mathbf{F}|\sin\theta$ 예요.`],
          trap: R`$\cos 50^\circ$ 를 써서 $7.71$ 을 얻는 실수. 회전시키는 것은 $\mathbf{r}$ 에 수직인 성분 $|\mathbf{F}|\sin\theta$ 입니다.`
        },
        {
          id: "calc-04-b07", kind: "num", level: 2, tag: "벡터곱 계산",
          q: R`$\mathbf{a} = \langle 3, 2, 0\rangle$, $\mathbf{b} = \langle 1, 0, 4\rangle$ 일 때 $\mathbf{a}\times\mathbf{b}$ 의 **$\mathbf{j}$ 성분(둘째 성분)** 을 구하세요.`,
          answer: -12, tol: 0.01, unit: "",
          explain: R`$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 3 & 2 & 0 \\ 1 & 0 & 4 \end{vmatrix} = (8 - 0)\,\mathbf{i} - (12 - 0)\,\mathbf{j} + (0 - 2)\,\mathbf{k} = \langle 8, -12, -2\rangle$$

$\mathbf{j}$ 성분은 $-12$ 입니다. 검산: $\langle 8,-12,-2\rangle\cdot\langle 3,2,0\rangle = 24 - 24 = 0$, $\langle 8,-12,-2\rangle\cdot\langle 1,0,4\rangle = 8 - 8 = 0$.`,
          hints: [R`$\mathbf{j}$ 성분은 둘째 열을 지운 이차행렬식에 $-$ 를 붙인 값이에요.`, R`$-\begin{vmatrix} 3 & 0 \\ 1 & 4 \end{vmatrix}$ 를 계산하세요.`],
          trap: R`$\mathbf{j}$ 앞의 $-$ 를 빠뜨려 $+12$ 로 답하는 실수.`
        },
        {
          id: "calc-04-b08", kind: "mcq", level: 2, tag: "벡터곱 계산",
          q: R`$\mathbf{a} = 3\,\mathbf{j} - 2\,\mathbf{k}$, $\mathbf{b} = -\mathbf{i} + 2\,\mathbf{j} + \mathbf{k}$ 일 때 $\mathbf{a}\times\mathbf{b}$ 는 무엇일까요?`,
          choices: [
            R`$\langle 7, -2, 3\rangle$`,
            R`$\langle -7, -2, -3\rangle$`,
            R`$\langle 7, 2, 3\rangle$`,
            R`$\langle 0, 6, -2\rangle$`
          ],
          answer: 2,
          explain: R`$\mathbf{a} = \langle 0, 3, -2\rangle$, $\mathbf{b} = \langle -1, 2, 1\rangle$ 이므로

$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 0 & 3 & -2 \\ -1 & 2 & 1 \end{vmatrix} = (3 + 4)\,\mathbf{i} - (0 - 2)\,\mathbf{j} + (0 + 3)\,\mathbf{k} = \langle 7, 2, 3\rangle$$

검산: $\langle 7,2,3\rangle\cdot\langle 0,3,-2\rangle = 6 - 6 = 0$, $\langle 7,2,3\rangle\cdot\langle -1,2,1\rangle = -7 + 4 + 3 = 0$.`,
          hints: [R`$\mathbf{a}$ 에는 $\mathbf{i}$ 성분이 없으니 첫 성분을 $0$ 으로 쓰세요.`, R`구한 답이 $\mathbf{a}$, $\mathbf{b}$ 와 수직인지 내적으로 확인해 보세요.`],
          trap: R`없는 성분을 $0$ 으로 채우지 않고 자리를 당겨 쓰는 실수.`
        },
        {
          id: "calc-04-b09", kind: "num", level: 2, tag: "크기·넓이",
          q: R`$xy$ 평면 위의 네 점 $A(-2, 1)$, $B(1, 3)$, $C(5, 2)$, $D(2, 0)$ 을 꼭짓점으로 하는 평행사변형 $ABCD$ 의 넓이를 구하세요.`,
          answer: 11, tol: 0.01, unit: "",
          explain: R`벡터곱은 3차원에서만 정의되므로 셋째 성분을 $0$ 으로 두고 생각해요. 이웃한 두 변은 $\overrightarrow{AB} = \langle 3, 2, 0\rangle$, $\overrightarrow{AD} = \langle 4, -1, 0\rangle$ 입니다.

$$\overrightarrow{AB}\times\overrightarrow{AD} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 3 & 2 & 0 \\ 4 & -1 & 0 \end{vmatrix} = 0\,\mathbf{i} - 0\,\mathbf{j} + (-3 - 8)\,\mathbf{k} = \langle 0, 0, -11\rangle$$

넓이는 크기이므로 $|-11| = 11$ 이에요. ($\overrightarrow{AB} = \overrightarrow{DC} = \langle 3, 2\rangle$ 이므로 평행사변형이 맞습니다.)`,
          hints: [R`2차원 벡터는 셋째 성분을 $0$ 으로 두어 3차원 벡터로 만들 수 있어요.`, R`한 꼭짓점 $A$ 에서 이웃한 두 꼭짓점 $B$, $D$ 로 가는 벡터를 쓰세요. 대각선 방향의 $C$ 가 아닙니다.`],
          trap: R`이웃한 변 대신 대각선 $\overrightarrow{AC}$ 를 쓰는 실수, 넓이를 $-11$ 로 답하는 실수.`
        },
        {
          id: "calc-04-b10", kind: "num", level: 2, tag: "크기·넓이",
          q: R`꼭짓점이 $P(1, 0, 2)$, $Q(3, 1, 0)$, $R(0, 2, 3)$ 인 삼각형 $PQR$ 의 넓이를 소수 둘째 자리까지 구하세요.`,
          answer: 3.54, tol: 0.01, unit: "",
          explain: R`$\overrightarrow{PQ} = \langle 2, 1, -2\rangle$, $\overrightarrow{PR} = \langle -1, 2, 1\rangle$ 입니다.

$$\overrightarrow{PQ}\times\overrightarrow{PR} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 1 & -2 \\ -1 & 2 & 1 \end{vmatrix} = (1 + 4)\,\mathbf{i} - (2 - 2)\,\mathbf{j} + (4 + 1)\,\mathbf{k} = \langle 5, 0, 5\rangle$$

크기는 $\sqrt{25 + 0 + 25} = 5\sqrt{2}$ 이고, 삼각형의 넓이는 그 절반인 $\tfrac{5\sqrt{2}}{2} \approx 3.54$ 예요.`,
          hints: [R`$\overrightarrow{PQ}$ 와 $\overrightarrow{PR}$ 를 구해 벡터곱을 계산하세요.`, R`삼각형의 넓이 $= \tfrac12|\overrightarrow{PQ}\times\overrightarrow{PR}|$.`],
          trap: R`$\tfrac12$ 을 빠뜨려 평행사변형의 넓이 $7.07$ 을 답하는 실수.`
        },
        {
          id: "calc-04-b11", kind: "mcq", level: 2, tag: "방향·직교",
          q: R`세 점 $P(1, 1, 0)$, $Q(2, 3, 1)$, $R(0, 2, 4)$ 를 지나는 평면에 수직인 벡터는 어느 것일까요?`,
          choices: [
            R`$\langle 7, -5, 3\rangle$`,
            R`$\langle 7, 5, 3\rangle$`,
            R`$\langle -1, 2, 4\rangle$`,
            R`$\langle 10, -8, 4\rangle$`
          ],
          answer: 0,
          explain: R`평면 위의 두 벡터 $\overrightarrow{PQ} = \langle 1, 2, 1\rangle$, $\overrightarrow{PR} = \langle -1, 1, 4\rangle$ 의 벡터곱이 평면에 수직이에요.

$$\overrightarrow{PQ}\times\overrightarrow{PR} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2 & 1 \\ -1 & 1 & 4 \end{vmatrix} = (8 - 1)\,\mathbf{i} - (4 + 1)\,\mathbf{j} + (1 + 2)\,\mathbf{k} = \langle 7, -5, 3\rangle$$

검산: $\langle 7,-5,3\rangle\cdot\langle 1,2,1\rangle = 7 - 10 + 3 = 0$, $\langle 7,-5,3\rangle\cdot\langle -1,1,4\rangle = -7 - 5 + 12 = 0$.`,
          hints: [R`먼저 평면 위에 놓인 두 벡터 $\overrightarrow{PQ}$, $\overrightarrow{PR}$ 를 구하세요.`, R`보기의 벡터와 $\overrightarrow{PQ}$, $\overrightarrow{PR}$ 의 내적이 모두 $0$ 인지 확인하는 방법도 있어요.`],
          trap: R`점의 좌표(위치벡터)를 그대로 벡터곱하는 실수. 평면 **안의** 벡터는 두 점의 차로 만들어야 해요.`
        },
        {
          id: "calc-04-b12", kind: "mcq", level: 2, tag: "방향·직교",
          q: R`$\langle 1, 2, 2\rangle$ 와 $\langle 2, 1, -2\rangle$ 에 모두 직교하는 **단위벡터**를 모두 구하면 무엇일까요?`,
          choices: [
            R`$\langle -6, 6, -3\rangle$ 하나뿐이다`,
            R`$\left\langle -\tfrac23, \tfrac23, -\tfrac13\right\rangle$ 하나뿐이다`,
            R`$\left\langle -\tfrac23, \tfrac23, -\tfrac13\right\rangle$ 과 $\left\langle \tfrac23, -\tfrac23, \tfrac13\right\rangle$ 두 개이다`,
            R`$\left\langle -\tfrac23, -\tfrac23, -\tfrac13\right\rangle$ 과 $\left\langle \tfrac23, \tfrac23, \tfrac13\right\rangle$ 두 개이다`
          ],
          answer: 2,
          explain: R`두 벡터에 모두 직교하는 벡터는 벡터곱으로 구해요.

$$\langle 1, 2, 2\rangle\times\langle 2, 1, -2\rangle = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2 & 2 \\ 2 & 1 & -2 \end{vmatrix} = (-4 - 2)\,\mathbf{i} - (-2 - 4)\,\mathbf{j} + (1 - 4)\,\mathbf{k} = \langle -6, 6, -3\rangle$$

크기는 $\sqrt{36 + 36 + 9} = 9$ 이므로 단위벡터는 $\tfrac19\langle -6, 6, -3\rangle = \left\langle -\tfrac23, \tfrac23, -\tfrac13\right\rangle$ 입니다. 그리고 **반대 방향**의 $\left\langle \tfrac23, -\tfrac23, \tfrac13\right\rangle$ 도 두 벡터에 직교하는 단위벡터예요. 그래서 답은 두 개입니다.`,
          hints: [R`두 벡터의 벡터곱을 구한 뒤 그 크기로 나누세요.`, R`평면에 수직인 방향은 위·아래 두 가지가 있어요.`],
          trap: R`크기로 나누지 않거나, 반대 방향의 단위벡터를 빠뜨리는 실수.`
        },
        {
          id: "calc-04-b13", kind: "num", level: 2, tag: "삼중곱·부피",
          q: R`벡터 $\mathbf{a} = \langle 2, 1, -1\rangle$, $\mathbf{b} = \langle 0, 3, 1\rangle$, $\mathbf{c} = \langle 1, -2, 4\rangle$ 에 의해 만들어지는 평행육면체의 부피를 구하세요.`,
          answer: 32, tol: 0.01, unit: "",
          explain: R`$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \begin{vmatrix} 2 & 1 & -1 \\ 0 & 3 & 1 \\ 1 & -2 & 4 \end{vmatrix} = 2(12 + 2) - 1(0 - 1) + (-1)(0 - 3) = 28 + 1 + 3 = 32$$

부피는 $V = |32| = 32$ 입니다.`,
          hints: [R`부피는 스칼라 삼중곱의 절댓값 $|\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|$ 예요.`, R`세 벡터를 행으로 쌓은 삼차행렬식을 첫째 행으로 전개하세요.`]
        },
        {
          id: "calc-04-b14", kind: "num", level: 2, tag: "삼중곱·부피",
          q: R`네 점 $P(1, 0, 1)$, $Q(3, 1, 2)$, $R(0, 2, 1)$, $S(2, 1, 4)$ 가 있어요. 이웃하는 세 변이 $PQ$, $PR$, $PS$ 인 평행육면체의 부피를 구하세요.`,
          answer: 12, tol: 0.01, unit: "",
          explain: R`세 변을 벡터로 바꿉니다: $\overrightarrow{PQ} = \langle 2, 1, 1\rangle$, $\overrightarrow{PR} = \langle -1, 2, 0\rangle$, $\overrightarrow{PS} = \langle 1, 1, 3\rangle$.

$$\begin{vmatrix} 2 & 1 & 1 \\ -1 & 2 & 0 \\ 1 & 1 & 3 \end{vmatrix} = 2(6 - 0) - 1(-3 - 0) + 1(-1 - 2) = 12 + 3 - 3 = 12$$

부피는 $|12| = 12$ 입니다.`,
          hints: [R`점의 좌표를 그대로 쓰지 말고, 공통 꼭짓점 $P$ 에서 출발하는 세 벡터를 먼저 만드세요.`, R`$\overrightarrow{PQ}\cdot(\overrightarrow{PR}\times\overrightarrow{PS})$ 를 삼차행렬식으로 계산하세요.`],
          trap: R`$Q, R, S$ 의 좌표를 그대로 행렬식에 넣는 실수. 반드시 $P$ 의 좌표를 빼서 변 벡터로 만들어야 해요.`
        },
        {
          id: "calc-04-b15", kind: "num", level: 2, tag: "삼중곱·부피",
          q: R`세 벡터 $\mathbf{a} = \langle 1, 2, -1\rangle$, $\mathbf{b} = \langle 0, 1, 3\rangle$, $\mathbf{c} = \langle 2, 5, k\rangle$ 가 같은 평면 위에 놓이도록 하는 상수 $k$ 의 값을 구하세요.`,
          answer: 1, tol: 0.01, unit: "",
          explain: R`같은 평면 위에 있으려면 스칼라 삼중곱이 $0$ 이어야 해요.

$$\begin{vmatrix} 1 & 2 & -1 \\ 0 & 1 & 3 \\ 2 & 5 & k \end{vmatrix} = 1(k - 15) - 2(0 - 6) + (-1)(0 - 2) = k - 15 + 12 + 2 = k - 1$$

$k - 1 = 0$ 에서 $k = 1$ 입니다. 실제로 $2\mathbf{a} + \mathbf{b} = \langle 2, 5, 1\rangle = \mathbf{c}$ 여서, $\mathbf{c}$ 가 $\mathbf{a}$, $\mathbf{b}$ 의 평면 안에 있음을 확인할 수 있어요.`,
          hints: [R`세 벡터가 같은 평면 위에 있으면 평행육면체의 부피가 얼마죠?`, R`삼차행렬식을 $k$ 에 대한 식으로 전개한 뒤 $0$ 으로 놓으세요.`]
        },
        {
          id: "calc-04-b16", kind: "mcq", level: 2, tag: "대수 성질",
          q: R`임의의 3차원 벡터 $\mathbf{a}$, $\mathbf{b}$ 에 대해 $(\mathbf{a} - \mathbf{b})\times(\mathbf{a} + \mathbf{b})$ 를 간단히 하면 무엇일까요?`,
          choices: [
            R`$\mathbf{0}$`,
            R`$-2\,(\mathbf{a}\times\mathbf{b})$`,
            R`$\mathbf{a}\times\mathbf{a} - \mathbf{b}\times\mathbf{b}$ 이므로 $|\mathbf{a}|^2 - |\mathbf{b}|^2$`,
            R`$2\,(\mathbf{a}\times\mathbf{b})$`
          ],
          answer: 3,
          explain: R`분배법칙으로 **순서를 유지하며** 전개합니다.

$$(\mathbf{a} - \mathbf{b})\times(\mathbf{a} + \mathbf{b}) = \mathbf{a}\times\mathbf{a} + \mathbf{a}\times\mathbf{b} - \mathbf{b}\times\mathbf{a} - \mathbf{b}\times\mathbf{b}$$

$\mathbf{a}\times\mathbf{a} = \mathbf{b}\times\mathbf{b} = \mathbf{0}$ 이고 $-\mathbf{b}\times\mathbf{a} = +\mathbf{a}\times\mathbf{b}$ 이므로 결과는 $2\,(\mathbf{a}\times\mathbf{b})$ 예요.`,
          hints: [R`분배법칙으로 네 항을 만들되, 각 항에서 앞뒤 순서를 바꾸지 마세요.`, R`$\mathbf{a}\times\mathbf{a} = \mathbf{0}$, $\mathbf{b}\times\mathbf{a} = -\mathbf{a}\times\mathbf{b}$ 를 쓰세요.`],
          trap: R`수의 곱셈 공식 $(a-b)(a+b) = a^2 - b^2$ 처럼 가운데 두 항이 지워진다고 생각하는 실수. 벡터곱은 교환이 안 돼서 오히려 두 배가 됩니다.`
        },
        {
          id: "calc-04-b17", kind: "num", level: 3, tag: "염력",
          q: R`길이 $25\,\text{cm}$ 인 렌치가 양의 $y$ 축 위에 놓여 있고, 한쪽 끝이 원점에 있는 볼트를 물고 있어요. 반대쪽 끝에 $\langle 0, 4, -3\rangle$ 방향으로 힘을 가합니다. 볼트에 $60\,\text{N·m}$ 의 염력을 전달하려면 힘의 크기가 몇 $\text{N}$ 이어야 할까요?`,
          answer: 400, tol: 1, unit: "N",
          explain: R`위치벡터는 $\mathbf{r} = \langle 0, 0.25, 0\rangle$ (m 단위)이고, 힘의 방향 단위벡터는 $\tfrac15\langle 0, 4, -3\rangle = \langle 0, 0.8, -0.6\rangle$ 이므로 $\mathbf{F} = |\mathbf{F}|\langle 0, 0.8, -0.6\rangle$ 입니다.

$$\mathbf{r}\times\mathbf{F} = |\mathbf{F}|\begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 0 & 0.25 & 0 \\ 0 & 0.8 & -0.6 \end{vmatrix} = |\mathbf{F}|\,\langle -0.15, 0, 0\rangle$$

따라서 $|\boldsymbol{\tau}| = 0.15\,|\mathbf{F}| = 60$ 에서 $|\mathbf{F}| = 400\,\text{N}$ 이에요.

다른 방법: $\mathbf{r}$ ($\mathbf{j}$ 방향)과 힘 사이의 각 $\theta$ 는 $\cos\theta = 0.8$ 이므로 $\sin\theta = 0.6$. $|\boldsymbol{\tau}| = (0.25)|\mathbf{F}|(0.6) = 0.15|\mathbf{F}|$ 로 같은 결과입니다.`,
          hints: [R`$\mathbf{r} = \langle 0, 0.25, 0\rangle$ 으로 두고, 힘은 (크기)$\times$(단위벡터)로 쓰세요.`, R`$\langle 0, 4, -3\rangle$ 의 크기는 $5$ 예요. $|\mathbf{r}\times\mathbf{F}|$ 를 $|\mathbf{F}|$ 에 대한 식으로 만들어 $60$ 과 같다고 놓으세요.`],
          trap: R`$\langle 0, 4, -3\rangle$ 을 단위벡터로 만들지 않고 그대로 쓰거나, cm 를 m 로 바꾸지 않는 실수.`
        },
        {
          id: "calc-04-b18", kind: "num", level: 3, tag: "크기·넓이",
          q: R`$\mathbf{a}\cdot\mathbf{b} = 6$ 이고 $\mathbf{a}\times\mathbf{b} = \langle 4, 4, 2\rangle$ 일 때, $\mathbf{a}$ 와 $\mathbf{b}$ 가 이루는 각의 크기는 몇 도일까요?`,
          answer: 45, tol: 0.1, unit: "°",
          explain: R`두 공식을 나란히 씁니다.

- $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta = 6$
- $|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta = \sqrt{16 + 16 + 4} = 6$

아래 식을 위 식으로 나누면 $|\mathbf{a}||\mathbf{b}|$ 가 지워져 $\tan\theta = \dfrac{6}{6} = 1$ 이에요. $0 \le \theta \le \pi$ 이고 $\cos\theta > 0$ 이므로 $\theta = 45^\circ$ 입니다.`,
          hints: [R`내적은 $\cos\theta$, 벡터곱의 크기는 $\sin\theta$ 와 연결돼요.`, R`두 식을 나누면 $|\mathbf{a}||\mathbf{b}|$ 를 몰라도 $\tan\theta$ 를 구할 수 있어요.`],
          trap: R`벡터곱의 크기를 구하지 않고 성분을 그대로 쓰려는 실수. 먼저 $|\langle 4, 4, 2\rangle| = 6$ 을 구해야 해요.`
        },
        {
          id: "calc-04-b19", kind: "num", level: 3, tag: "크기·넓이",
          q: R`점 $P$ 에서 두 점 $Q$, $R$ 을 지나는 직선까지의 거리는 $\mathbf{a} = \overrightarrow{QR}$, $\mathbf{b} = \overrightarrow{QP}$ 일 때 $d = \dfrac{|\mathbf{a}\times\mathbf{b}|}{|\mathbf{a}|}$ 입니다. 이 공식을 이용해 점 $P(2, 1, 0)$ 에서 $Q(0, 1, 1)$ 과 $R(2, 3, 2)$ 를 지나는 직선까지의 거리를 구하세요.`,
          answer: 2, tol: 0.01, unit: "",
          explain: R`$\mathbf{a} = \overrightarrow{QR} = \langle 2, 2, 1\rangle$, $\mathbf{b} = \overrightarrow{QP} = \langle 2, 0, -1\rangle$ 입니다.

$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & 2 & 1 \\ 2 & 0 & -1 \end{vmatrix} = (-2 - 0)\,\mathbf{i} - (-2 - 2)\,\mathbf{j} + (0 - 4)\,\mathbf{k} = \langle -2, 4, -4\rangle$$

$|\mathbf{a}\times\mathbf{b}| = \sqrt{4 + 16 + 16} = 6$, $|\mathbf{a}| = \sqrt{4 + 4 + 1} = 3$ 이므로 $d = \dfrac{6}{3} = 2$ 예요.

공식이 성립하는 이유: $|\mathbf{a}\times\mathbf{b}|$ 는 평행사변형의 넓이(밑변 $\times$ 높이)이고 밑변이 $|\mathbf{a}|$ 이므로, 나누면 높이, 즉 $P$ 에서 직선까지의 거리가 남습니다.`,
          hints: [R`두 벡터 모두 $Q$ 에서 출발해요: $\overrightarrow{QR}$ 과 $\overrightarrow{QP}$.`, R`벡터곱의 크기를 구한 뒤 $|\overrightarrow{QR}|$ 로 나누세요.`],
          trap: R`$|\mathbf{a}|$ 대신 $|\mathbf{b}|$ 로 나누는 실수. 나누는 쪽은 **직선 방향**의 벡터 $\overrightarrow{QR}$ 입니다.`
        },
        {
          id: "calc-04-b20", kind: "short", level: 3, tag: "대수 성질",
          q: R`$\mathbf{a} \ne \mathbf{0}$ 일 때, $\mathbf{a}\times\mathbf{b} = \mathbf{a}\times\mathbf{c}$ 이면 반드시 $\mathbf{b} = \mathbf{c}$ 일까요? 맞다면 이유를, 아니라면 이유와 함께 $\mathbf{b}$ 와 $\mathbf{c}$ 사이에 어떤 관계가 성립하는지 설명해 보세요.`,
          answer: R`**아니에요.** 한쪽으로 옮기고 분배법칙을 쓰면 $\mathbf{a}\times\mathbf{b} - \mathbf{a}\times\mathbf{c} = \mathbf{a}\times(\mathbf{b} - \mathbf{c}) = \mathbf{0}$ 입니다.

벡터곱이 영벡터라는 것은 $\mathbf{b} - \mathbf{c}$ 가 $\mathbf{0}$ 이거나 $\mathbf{a}$ 와 **평행**하다는 뜻일 뿐이에요. 따라서 $\mathbf{b} - \mathbf{c} = t\,\mathbf{a}$ ($t$ 는 스칼라), 즉 $\mathbf{c} = \mathbf{b} - t\,\mathbf{a}$ 이면 언제나 등식이 성립하고, $t \ne 0$ 이면 $\mathbf{b} \ne \mathbf{c}$ 입니다.

반례: $\mathbf{a} = \mathbf{i}$, $\mathbf{b} = \mathbf{j}$, $\mathbf{c} = \mathbf{i} + \mathbf{j}$ 이면 $\mathbf{a}\times\mathbf{b} = \mathbf{k}$, $\mathbf{a}\times\mathbf{c} = \mathbf{i}\times\mathbf{i} + \mathbf{i}\times\mathbf{j} = \mathbf{k}$ 로 같지만 $\mathbf{b} \ne \mathbf{c}$ 예요.`,
          rubric: [
            R`"반드시 $\mathbf{b} = \mathbf{c}$ 인 것은 아니다"라고 답했다`,
            R`$\mathbf{a}\times(\mathbf{b} - \mathbf{c}) = \mathbf{0}$ 으로 정리했다`,
            R`$\mathbf{b} - \mathbf{c}$ 가 $\mathbf{a}$ 와 평행(스칼라배)이면 성립한다고 설명했다`,
            R`구체적인 반례를 들었다(선택)`
          ],
          explain: R`수의 곱셈에서는 $a \ne 0$ 이면 양변을 $a$ 로 나눌 수 있지만, 벡터곱에는 "나눗셈"이 없어요. $\mathbf{a}\times\mathbf{x} = \mathbf{0}$ 은 $\mathbf{x} = \mathbf{0}$ 뿐 아니라 $\mathbf{x}$ 가 $\mathbf{a}$ 와 평행한 모든 경우에 성립하기 때문에 소거법칙이 깨집니다.`,
          hints: [R`모든 항을 한쪽으로 옮긴 뒤 분배법칙(성질 3)으로 묶어 보세요.`, R`$\mathbf{a}\times\mathbf{x} = \mathbf{0}$ 이 되는 $\mathbf{x}$ 는 $\mathbf{0}$ 말고 또 무엇이 있죠?`]
        },
        {
          id: "calc-04-b21", kind: "mcq", level: 3, tag: "방향·직교",
          q: R`$\langle 2, 1, 1\rangle\times\mathbf{v} = \langle 1, 3, 4\rangle$ 를 만족하는 벡터 $\mathbf{v}$ 는 존재하지 않아요. 그 이유로 옳은 것은 무엇일까요?`,
          choices: [
            R`$\langle 1, 3, 4\rangle$ 의 크기가 $\langle 2, 1, 1\rangle$ 의 크기보다 커서, 벡터곱의 크기가 그렇게 커질 수 없기 때문이다`,
            R`벡터곱의 결과는 $\langle 2, 1, 1\rangle$ 과 수직이어야 하는데, $\langle 2, 1, 1\rangle\cdot\langle 1, 3, 4\rangle = 9 \ne 0$ 이기 때문이다`,
            R`$\langle 2, 1, 1\rangle$ 과 $\langle 1, 3, 4\rangle$ 가 평행하지 않기 때문이다`,
            R`미지수가 3개이고 식도 3개이므로 사실은 $\mathbf{v}$ 가 정확히 하나 존재한다`
          ],
          answer: 1,
          explain: R`$\mathbf{a}\times\mathbf{v}$ 는 어떤 $\mathbf{v}$ 에 대해서도 **$\mathbf{a}$ 와 직교**합니다. 그런데 $\langle 2, 1, 1\rangle\cdot\langle 1, 3, 4\rangle = 2 + 3 + 4 = 9 \ne 0$ 이라서 $\langle 1, 3, 4\rangle$ 는 $\langle 2, 1, 1\rangle$ 과 수직이 아니에요. 그러니 벡터곱의 결과가 될 수 없습니다.

반대로 우변이 $\langle 2, 1, 1\rangle$ 과 수직인 벡터라면 해가 존재합니다(하나가 아니라 무수히 많아요).`,
          hints: [R`$\mathbf{a}\times\mathbf{v}$ 가 $\mathbf{a}$ 에 대해 항상 갖는 성질을 떠올려 보세요.`, R`$\langle 2, 1, 1\rangle$ 과 $\langle 1, 3, 4\rangle$ 의 내적을 계산해 보세요.`]
        },
        {
          id: "calc-04-b22", kind: "mcq", level: 3, tag: "대수 성질",
          q: R`$\mathbf{a} = \langle 1, 0, 2\rangle$, $\mathbf{b} = \langle 2, 1, 0\rangle$, $\mathbf{c} = \langle 0, 1, 1\rangle$ 일 때 벡터 삼중곱 $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$ 는 무엇일까요?`,
          choices: [
            R`$\langle 3, 2, -2\rangle$`,
            R`$\langle -4, 0, 2\rangle$`,
            R`$\langle 4, 4, 2\rangle$`,
            R`$\langle 4, 0, -2\rangle$`
          ],
          answer: 3,
          explain: R`**성질 6으로:** $\mathbf{a}\cdot\mathbf{c} = 0 + 0 + 2 = 2$, $\mathbf{a}\cdot\mathbf{b} = 2 + 0 + 0 = 2$ 이므로

$$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\cdot\mathbf{c})\,\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\,\mathbf{c} = 2\langle 2, 1, 0\rangle - 2\langle 0, 1, 1\rangle = \langle 4, 0, -2\rangle$$

**직접 계산으로 검산:** $\mathbf{b}\times\mathbf{c} = \langle 1 - 0,\ 0 - 2,\ 2 - 0\rangle = \langle 1, -2, 2\rangle$ 이고, $\mathbf{a}\times\langle 1, -2, 2\rangle = \langle 0 + 4,\ 2 - 2,\ -2 - 0\rangle = \langle 4, 0, -2\rangle$ 로 같아요.`,
          hints: [R`괄호 안의 $\mathbf{b}\times\mathbf{c}$ 를 먼저 구하거나, 성질 6의 공식을 쓰세요.`, R`$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\cdot\mathbf{c})\,\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\,\mathbf{c}$ 입니다.`],
          trap: R`괄호를 옮겨 $(\mathbf{a}\times\mathbf{b})\times\mathbf{c}$ 를 계산하는 실수. 결합법칙이 성립하지 않아 다른 벡터가 나옵니다.`
        }
      ]
    }
  );
})();
