(function () {
  const R = String.raw;
  window.TUTOR_UNITS = window.TUTOR_UNITS || [];
  window.TUTOR_UNITS.push(
    /* ===================== 11.2 벡터 ===================== */
    {
      course: "calc",
      id: "calc-02",
      no: 2,
      title: "벡터",
      subtitle: "11.2 벡터",
      source: "대학미분적분학 중간.pdf",
      minutes: 70,
      objectives: [
        "벡터의 합(삼각형 법칙·평행사변형 법칙), 스칼라곱, 차를 그림으로 설명할 수 있다",
        "두 점으로 벡터의 성분을 구하고, 크기와 성분별 합·차·스칼라배를 계산할 수 있다",
        "벡터의 여덟 가지 성질과 표준기저벡터 i, j, k 표기를 쓸 수 있다",
        "주어진 벡터와 방향이 같은 단위벡터를 구할 수 있다",
        "힘·속도를 성분으로 나누어 합성력과 장력 문제를 풀 수 있다"
      ],
      pretest: [
        {
          id: "calc-02-p01", kind: "mcq", level: 1, tag: "벡터의 기하",
          q: R`동쪽으로 $3\,\text{km}$ 걸어간 다음 북쪽으로 $4\,\text{km}$ 걸어갔어요. 지금 위치는 출발점에서 직선거리로 얼마나 떨어져 있을까요?`,
          choices: [R`$7\,\text{km}$`, R`$5\,\text{km}$`, R`$1\,\text{km}$`, R`$12\,\text{km}$`],
          answer: 1,
          explain: R`두 이동은 서로 직각이라서, 출발점에서 도착점까지는 직각삼각형의 빗변이에요. $\sqrt{3^2 + 4^2} = 5\,\text{km}$ 입니다. 이동(변위)은 방향이 있는 양이라서 크기끼리 그냥 더하면 안 되고, **벡터로** 더해야 해요. 이번 단원의 주제입니다.`
        },
        {
          id: "calc-02-p02", kind: "mcq", level: 1, tag: "벡터의 기하",
          q: R`종이 위 서로 다른 곳에 화살표 두 개가 그려져 있어요. 두 화살표는 길이가 같고 가리키는 방향도 똑같습니다. 벡터로서 이 둘은 어떤 관계일까요?`,
          choices: [
            R`시작점이 다르므로 서로 다른 벡터이다`,
            R`길이만 같으면 방향과 관계없이 같은 벡터이다`,
            R`길이와 방향이 같으므로 같은 벡터이다`,
            R`끝점까지 같아야만 같은 벡터이다`
          ],
          answer: 2,
          explain: R`벡터는 **크기와 방향**만으로 정해지는 양이에요. 그려진 위치가 달라도 길이와 방향이 같으면 같은 벡터(동치)라고 합니다.`
        },
        {
          id: "calc-02-p03", kind: "mcq", level: 1, tag: "힘과 속도 응용",
          q: R`천장에 묶은 두 줄이 한 점에서 만나 물체 하나를 매달고 있어요. 왼쪽 줄은 천장과 $50^\circ$, 오른쪽 줄은 천장과 $32^\circ$ 를 이룹니다. 어느 줄에 더 큰 힘(장력)이 걸릴까요?`,
          choices: [
            R`천장과 $50^\circ$ 를 이루는, 더 가파르게 선 줄`,
            R`천장과 $32^\circ$ 를 이루는, 더 누운 줄`,
            R`두 줄에 똑같은 힘이 걸린다`,
            R`줄의 길이를 모르면 비교할 수 없다`
          ],
          answer: 0,
          explain: R`두 줄의 **수평 성분**은 서로 상쇄되어야 하므로 $|\mathbf{T}_1|\cos 50^\circ = |\mathbf{T}_2|\cos 32^\circ$ 예요. $\cos 50^\circ < \cos 32^\circ$ 이니 $|\mathbf{T}_1|$ 이 더 커야 합니다. 교재 예제 7에서 실제로 $839\,\text{N}$ 과 $636\,\text{N}$ 이 나와요. 더 가파른 줄이 무게를 더 많이 떠받칩니다.`
        }
      ],
      steps: [
        {
          type: "explain", title: "벡터란? 시작점·끝점·동치·영벡터",
          body: R`**벡터(vector)** 는 속도나 힘처럼 **크기와 방향을 함께 가진 양**이에요. 보통 화살표(유향선분)로 그립니다. 화살표의 **길이**가 벡터의 크기이고, 화살표가 **가리키는 쪽**이 벡터의 방향이에요. 기호는 굵은 글씨 $\mathbf{v}$ 또는 화살표를 붙인 $\vec{v}$ 로 씁니다.

입자가 점 $A$ 에서 점 $B$ 로 선분을 따라 이동했다고 해 봐요. 이때의 **변위벡터(displacement vector)** $\mathbf{v}$ 는 **시작점(initial point)** 이 $A$, **끝점(terminal point)** 이 $B$ 이고 이렇게 씁니다.

> $$\mathbf{v} = \overrightarrow{AB}$$

다른 곳에 있는 벡터 $\mathbf{u} = \overrightarrow{CD}$ 가 $\mathbf{v}$ 와 **길이도 같고 방향도 같으면**, 두 벡터를 **동치(equivalent)** 또는 **같다(equal)** 고 하고 $\mathbf{u} = \mathbf{v}$ 라고 써요. 즉 벡터는 "어디에 그려져 있는가"는 따지지 않습니다. "동쪽으로 3걸음"이라는 지시는 어디에서 출발하든 같은 지시인 것과 같아요.

**영벡터(zero vector)** $\mathbf{0}$ 은 길이가 $0$ 인 벡터입니다. 특별한 방향을 갖지 않는 유일한 벡터예요.`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c01", kind: "mcq", level: 1, tag: "벡터의 기하",
            q: R`두 벡터 $\mathbf{u} = \overrightarrow{CD}$ 와 $\mathbf{v} = \overrightarrow{AB}$ 에 대해 $\mathbf{u} = \mathbf{v}$ 라고 쓸 수 있는 조건은 무엇일까요?`,
            choices: [
              R`$C = A$ 이고 $D = B$ 일 때뿐이다`,
              R`두 벡터의 길이가 같으면 된다`,
              R`두 벡터가 서로 평행하면 된다`,
              R`두 벡터의 길이와 방향이 모두 같으면 된다`
            ],
            answer: 3,
            explain: R`벡터는 크기와 방향으로 정해지므로, **길이와 방향이 모두 같으면** 그려진 위치가 달라도 같은 벡터(동치벡터)입니다. 길이만 같거나 평행하기만 해서는 부족해요.`,
            hints: [R`벡터가 가진 정보는 두 가지뿐이에요.`]
          }
        },
        {
          type: "explain", title: "벡터의 합: 삼각형 법칙과 평행사변형 법칙",
          body: R`질점이 $A$ 에서 $B$ 로 간 다음, 방향을 바꿔 $B$ 에서 $C$ 로 갔다고 해요. 두 변위를 이어 붙인 효과는 처음부터 $A$ 에서 $C$ 로 간 것과 같습니다. 그래서 이렇게 써요.

> $$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$$

이것을 일반화한 것이 **벡터의 합의 정의**입니다. $\mathbf{v}$ 의 시작점을 $\mathbf{u}$ 의 **끝점**에 맞춰 놓으면, 합 $\mathbf{u} + \mathbf{v}$ 는 **$\mathbf{u}$ 의 시작점에서 $\mathbf{v}$ 의 끝점까지** 가는 벡터예요. 세 벡터가 삼각형을 이루기 때문에 **삼각형 법칙(Triangle Law)** 이라고 부릅니다. "꼬리에 머리를 이어 붙인다"고 기억하면 돼요.

또 다른 방법도 있어요. $\mathbf{u}$ 와 $\mathbf{v}$ 의 **시작점을 같게** 놓고 둘을 변으로 하는 평행사변형을 그리면, $\mathbf{u} + \mathbf{v}$ 는 그 시작점에서 출발하는 **대각선**입니다. 이것이 **평행사변형 법칙(Parallelogram Law)** 이에요.

두 방법은 같은 벡터를 줍니다. 벡터는 옮겨도 같은 벡터이니, 평행사변형의 맞은편 변이 바로 옮겨 놓은 $\mathbf{v}$ 이기 때문이에요.`,
          fig: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" font-size="12"><defs><marker id="calc02-f1k" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor" stroke="none"/></marker><marker id="calc02-f1b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3b82f6" stroke="none"/></marker></defs><line x1="20" y1="135" x2="110" y2="115" marker-end="url(#calc02-f1k)"/><line x1="110" y1="115" x2="135" y2="40" marker-end="url(#calc02-f1k)"/><line x1="20" y1="135" x2="135" y2="40" stroke="#3b82f6" marker-end="url(#calc02-f1b)"/><text x="62" y="142" fill="currentColor" stroke="none">u</text><text x="130" y="88" fill="currentColor" stroke="none">v</text><text x="48" y="80" fill="#3b82f6" stroke="none">u + v</text><text x="40" y="162" fill="currentColor" stroke="none">삼각형 법칙</text><line x1="180" y1="135" x2="270" y2="115" marker-end="url(#calc02-f1k)"/><line x1="180" y1="135" x2="205" y2="60" marker-end="url(#calc02-f1k)"/><line x1="205" y1="60" x2="295" y2="40" stroke-dasharray="4 3"/><line x1="270" y1="115" x2="295" y2="40" stroke-dasharray="4 3"/><line x1="180" y1="135" x2="295" y2="40" stroke="#3b82f6" marker-end="url(#calc02-f1b)"/><text x="224" y="142" fill="currentColor" stroke="none">u</text><text x="178" y="95" fill="currentColor" stroke="none">v</text><text x="246" y="72" fill="#3b82f6" stroke="none">u + v</text><text x="196" y="162" fill="currentColor" stroke="none">평행사변형 법칙</text></svg>`
        },
        {
          type: "why",
          prompt: R`평행사변형 그림을 떠올려 보세요. 왜 $\mathbf{u} + \mathbf{v}$ 와 $\mathbf{v} + \mathbf{u}$ 는 항상 같은 벡터일까요? 삼각형 법칙을 써서 설명해 보세요.`,
          answer: R`$\mathbf{u}$ 와 $\mathbf{v}$ 를 같은 시작점에서 그리고 평행사변형을 완성해요. 평행사변형의 마주 보는 변은 길이와 방향이 같으니, 맞은편 변은 각각 $\mathbf{u}$, $\mathbf{v}$ 와 **동치**인 벡터입니다.

- 아래쪽 길: 먼저 $\mathbf{u}$ 를 가고, 그 끝점에서 $\mathbf{v}$ 를 간다 → 삼각형 법칙으로 $\mathbf{u} + \mathbf{v}$
- 위쪽 길: 먼저 $\mathbf{v}$ 를 가고, 그 끝점에서 $\mathbf{u}$ 를 간다 → 삼각형 법칙으로 $\mathbf{v} + \mathbf{u}$

두 길 모두 **같은 시작점에서 출발해 같은 꼭짓점(대각선의 끝)** 에 도착해요. 시작점과 끝점이 같으니 같은 벡터, 즉 $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ 입니다. 교재의 그림 4가 바로 이 내용이에요.`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c02", kind: "mcq", level: 1, tag: "벡터의 기하",
            q: R`네 점 $P, Q, R, S$ 가 있을 때, $\overrightarrow{PQ} + \overrightarrow{QR}$ 을 하나의 벡터로 나타내면 무엇일까요?`,
            choices: [
              R`$\overrightarrow{PR}$`,
              R`$\overrightarrow{RP}$`,
              R`$\overrightarrow{QR}$`,
              R`$\overrightarrow{PS}$`
            ],
            answer: 0,
            explain: R`$\overrightarrow{PQ}$ 의 끝점 $Q$ 가 $\overrightarrow{QR}$ 의 시작점과 같으니 삼각형 법칙을 그대로 쓸 수 있어요. 합은 첫 벡터의 시작점 $P$ 에서 둘째 벡터의 끝점 $R$ 까지, 즉 $\overrightarrow{PR}$ 입니다. 가운데 글자 $Q$ 가 "이어지며 사라진다"고 보면 쉬워요.`,
            hints: [R`$P$ 에서 $Q$ 로 간 뒤 $Q$ 에서 $R$ 로 가면 결국 어디에서 어디로 간 걸까요?`]
          }
        },
        {
          type: "explain", title: "스칼라곱·평행·음벡터·벡터의 차",
          body: R`벡터에 실수 $c$ 를 곱할 수 있어요. 이때 실수 $c$ 를 벡터와 구별해서 **스칼라(scalar)** 라고 부릅니다. 실수가 벡터의 길이를 늘이고 줄이는 **비례상수** 역할을 하기 때문이에요.

> **스칼라곱(scalar multiple)** $c\mathbf{v}$ : 길이는 $\mathbf{v}$ 의 길이의 $|c|$ 배. $c > 0$ 이면 $\mathbf{v}$ 와 **같은 방향**, $c < 0$ 이면 **반대 방향**. $c = 0$ 이거나 $\mathbf{v} = \mathbf{0}$ 이면 $c\mathbf{v} = \mathbf{0}$.

예를 들어 $2\mathbf{v}$ 는 $\mathbf{v} + \mathbf{v}$ 와 같은 벡터로, 방향은 같고 길이가 2배예요. $-1.5\mathbf{v}$ 는 방향이 반대이고 길이가 1.5배입니다.

- **평행**: $\mathbf{0}$ 이 아닌 두 벡터 중 하나가 다른 것의 스칼라곱이면 두 벡터는 **평행**하다고 정의해요. (방향이 반대여도 평행입니다.)
- **음벡터**: $-\mathbf{v} = (-1)\mathbf{v}$ 는 $\mathbf{v}$ 와 길이가 같고 방향이 반대인 벡터예요.
- **차**: 두 벡터의 차는 음벡터를 더하는 것으로 정의합니다.

> $$\mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v})$$

그리는 방법은 두 가지예요. (a) $-\mathbf{v}$ 를 그린 뒤 평행사변형 법칙으로 $\mathbf{u}$ 에 더한다. (b) $\mathbf{v} + (\mathbf{u} - \mathbf{v}) = \mathbf{u}$ 이므로, $\mathbf{u}$ 와 $\mathbf{v}$ 의 시작점을 같게 놓으면 $\mathbf{u} - \mathbf{v}$ 는 **$\mathbf{v}$ 의 끝점에서 $\mathbf{u}$ 의 끝점으로** 가는 벡터입니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c03", kind: "mcq", level: 1, tag: "벡터의 기하",
            q: R`$\mathbf{v}$ 가 영벡터가 아닐 때, 다음 중 $\mathbf{v}$ 와 **평행하지 않을 수 있는** 것은 무엇일까요?`,
            choices: [
              R`$-3\mathbf{v}$`,
              R`$\tfrac{1}{2}\mathbf{v}$`,
              R`$\mathbf{v}$ 와 길이가 같은 임의의 벡터`,
              R`$-\mathbf{v}$`
            ],
            answer: 2,
            explain: R`평행의 정의는 "한 벡터가 다른 벡터의 스칼라곱"이에요. $-3\mathbf{v}$, $\tfrac12\mathbf{v}$, $-\mathbf{v} = (-1)\mathbf{v}$ 는 모두 $\mathbf{v}$ 의 스칼라곱이므로 평행합니다(음수를 곱해 방향이 반대여도 평행이에요). 반면 길이만 같은 벡터는 방향이 아무 쪽이나 될 수 있어서 평행하다는 보장이 없어요.`,
            hints: [R`평행의 정의는 길이가 아니라 "스칼라곱으로 쓸 수 있는가"입니다.`]
          }
        },
        {
          type: "worked", title: "예제 1·2: 합 a + b 와 a − 2b 그리기",
          problem: R`종이 위에 두 벡터 $\mathbf{a}$, $\mathbf{b}$ 가 서로 떨어져 그려져 있어요. (1) 합 $\mathbf{a} + \mathbf{b}$ 를 그리고, (2) $\mathbf{a} - 2\mathbf{b}$ 를 그리는 절차를 말해 보세요.`,
          steps: [
            {
              ask: "떨어져 있는 두 벡터를 더하려면 먼저 무엇을 해야 할까요?",
              body: R`**$\mathbf{b}$ 를 옮겨서** $\mathbf{b}$ 의 시작점이 $\mathbf{a}$ 의 끝점과 일치하게 합니다. 이때 $\mathbf{b}$ 의 **크기와 방향이 바뀌지 않도록** 평행이동만 해야 해요. 벡터는 옮겨도 같은 벡터(동치)라서 이렇게 해도 됩니다.`
            },
            {
              ask: "옮긴 다음, 합 벡터는 어디에서 어디로 그릴까요?",
              body: R`삼각형 법칙대로 **$\mathbf{a}$ 의 시작점에서 $\mathbf{b}$ 의 끝점으로** 화살표를 그리면 그것이 $\mathbf{a} + \mathbf{b}$ 예요.

다른 방법으로는 $\mathbf{b}$ 의 시작점을 $\mathbf{a}$ 의 **시작점**에 맞춘 뒤 평행사변형을 그리고, 공통 시작점에서 나가는 대각선을 그려도 같은 벡터가 나옵니다(평행사변형 법칙).`
            },
            {
              ask: "이제 a − 2b 차례예요. −2b 는 b 와 비교해 어떤 벡터일까요?",
              body: R`스칼라곱의 정의에서 $-2\mathbf{b}$ 는 **$\mathbf{b}$ 와 방향이 반대이고 길이가 2배**인 벡터예요. 먼저 이 벡터를 그립니다.`
            },
            {
              ask: "−2b 를 어디에 붙이면 a − 2b 가 될까요?",
              body: R`$\mathbf{a} - 2\mathbf{b} = \mathbf{a} + (-2\mathbf{b})$ 이므로 그냥 **합**으로 보면 돼요. $-2\mathbf{b}$ 의 시작점을 $\mathbf{a}$ 의 끝점에 붙이고, 삼각형 법칙으로 $\mathbf{a}$ 의 시작점에서 $-2\mathbf{b}$ 의 끝점까지 그립니다. 빼기를 "반대 벡터 더하기"로 바꾸는 것이 핵심이에요.`
            }
          ],
          answer: R`(1) $\mathbf{b}$ 를 평행이동해 $\mathbf{a}$ 의 끝점에 붙이고, $\mathbf{a}$ 의 시작점에서 $\mathbf{b}$ 의 끝점까지 그린다. (2) $\mathbf{b}$ 와 반대 방향으로 길이 2배인 $-2\mathbf{b}$ 를 $\mathbf{a}$ 의 끝점에 붙이고, $\mathbf{a}$ 의 시작점에서 $-2\mathbf{b}$ 의 끝점까지 그린다.`
        },
        {
          type: "explain", title: "성분과 위치벡터",
          body: R`벡터를 계산으로 다루려면 좌표계를 도입하는 것이 좋아요. 벡터 $\mathbf{a}$ 의 시작점을 **원점**에 놓으면 끝점의 좌표가 $(a_1, a_2)$ (평면) 또는 $(a_1, a_2, a_3)$ (공간)으로 정해집니다. 이 좌표를 $\mathbf{a}$ 의 **성분(components)** 이라 하고 이렇게 써요.

> $$\mathbf{a} = \langle a_1, a_2 \rangle \quad\text{또는}\quad \mathbf{a} = \langle a_1, a_2, a_3 \rangle$$

점의 좌표 $(a_1, a_2)$ 와 헷갈리지 않도록 벡터는 **꺾쇠괄호** $\langle\ \rangle$ 로 씁니다.

예를 들어 $\mathbf{a} = \langle 3, 2 \rangle$ 는 "시작점에서 오른쪽으로 3칸, 위로 2칸"이라는 뜻이에요. 점 $(1,3)$ 에서 $(4,5)$ 로 가는 화살표도, 원점에서 $(3,2)$ 로 가는 화살표도 모두 같은 벡터 $\langle 3, 2\rangle$ 의 **표현**입니다. 그중 원점에서 점 $P$ 로 가는 특별한 표현 $\overrightarrow{OP}$ 를 점 $P$ 의 **위치벡터(position vector)** 라고 해요.

시작점이 원점이 아닐 때는 다음 공식을 씁니다.

> **공식 1.** 두 점 $A(x_1, y_1, z_1)$, $B(x_2, y_2, z_2)$ 에 대하여 $\overrightarrow{AB}$ 로 표현되는 벡터는
> $$\mathbf{a} = \langle x_2 - x_1,\; y_2 - y_1,\; z_2 - z_1 \rangle$$

한마디로 **끝점 − 시작점**이에요.`
        },
        {
          type: "why",
          prompt: R`$\overrightarrow{AB}$ 의 성분이 왜 "끝점 좌표 − 시작점 좌표"가 될까요? $\mathbf{a} = \langle a_1, a_2, a_3\rangle$ 가 무엇을 뜻하는지에서 출발해 설명해 보세요.`,
          answer: R`$\mathbf{a} = \langle a_1, a_2, a_3\rangle$ 는 "시작점에서 $x$ 방향으로 $a_1$, $y$ 방향으로 $a_2$, $z$ 방향으로 $a_3$ 만큼 가면 끝점"이라는 뜻이에요. 시작점을 $A(x_1, y_1, z_1)$ 에 놓으면 끝점은 $(x_1 + a_1,\, y_1 + a_2,\, z_1 + a_3)$ 가 됩니다.

이 끝점이 $B(x_2, y_2, z_2)$ 여야 하므로

$$x_1 + a_1 = x_2,\qquad y_1 + a_2 = y_2,\qquad z_1 + a_3 = z_2$$

이고, 이것을 풀면 $a_1 = x_2 - x_1$, $a_2 = y_2 - y_1$, $a_3 = z_2 - z_1$ 이에요. "얼마나 이동했는가 = 도착 좌표 − 출발 좌표"라는 당연한 사실을 식으로 쓴 것입니다.`
        },
        {
          type: "worked", title: "예제 3: 두 점으로 벡터의 성분 구하기",
          problem: R`시작점이 $A(2, -3, 4)$, 끝점이 $B(-2, 1, 1)$ 인 유향선분을 벡터로 나타내세요.`,
          steps: [
            {
              ask: "어떤 공식을 쓰고, 어느 점에서 어느 점을 빼야 할까요?",
              body: R`공식 1을 씁니다. $\overrightarrow{AB}$ 는 $A$ 에서 출발해 $B$ 에 도착하므로 **끝점 $B$ 의 좌표에서 시작점 $A$ 의 좌표를 뺍니다.** 순서를 거꾸로 하면 반대 방향 벡터 $\overrightarrow{BA}$ 가 되니 주의해요.`
            },
            {
              ask: "성분별로 빼 보세요. 음수를 뺄 때 부호에 주의!",
              body: R`$$\mathbf{a} = \langle -2 - 2,\; 1 - (-3),\; 1 - 4 \rangle = \langle -4,\, 4,\, -3 \rangle$$

$y$ 성분에서 $1 - (-3) = 1 + 3 = 4$ 가 되는 부분이 가장 틀리기 쉬워요. 괄호를 꼭 써서 계산합니다.`
            },
            {
              ask: "답이 맞는지 어떻게 검산할 수 있을까요?",
              body: R`시작점에 벡터를 더하면 끝점이 나와야 해요. $A(2, -3, 4)$ 에서 $\langle -4, 4, -3\rangle$ 만큼 이동하면 $(2 - 4,\; -3 + 4,\; 4 - 3) = (-2, 1, 1)$ 로 정확히 $B$ 입니다.`
            }
          ],
          answer: R`$\mathbf{a} = \langle -4,\, 4,\, -3 \rangle$`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c04", kind: "mcq", level: 2, tag: "성분과 크기",
            q: R`시작점이 $A(1, -2, 3)$, 끝점이 $B(4, 0, -1)$ 일 때 $\overrightarrow{AB}$ 로 표현되는 벡터는 무엇일까요?`,
            choices: [
              R`$\langle -3,\, -2,\, 4 \rangle$`,
              R`$\langle 3,\, 2,\, -4 \rangle$`,
              R`$\langle 5,\, -2,\, 2 \rangle$`,
              R`$\langle 3,\, -2,\, -4 \rangle$`
            ],
            answer: 1,
            explain: R`끝점 − 시작점: $\langle 4 - 1,\; 0 - (-2),\; -1 - 3 \rangle = \langle 3,\, 2,\, -4 \rangle$. 검산: $A$ 에 더하면 $(1+3,\, -2+2,\, 3-4) = (4, 0, -1) = B$.`,
            hints: [R`끝점의 좌표에서 시작점의 좌표를 뺍니다.`, R`$y$ 성분은 $0 - (-2)$ 예요.`],
            trap: R`시작점에서 끝점을 빼서 부호가 전부 반대인 $\langle -3, -2, 4\rangle$ 를 쓰는 실수, 그리고 $0 - (-2)$ 를 $-2$ 로 계산하는 실수.`
          }
        },
        {
          type: "explain", title: "벡터의 크기(길이)",
          body: R`벡터 $\mathbf{v}$ 의 **크기(magnitude)** 또는 **길이(length)** 는 그 벡터를 나타내는 화살표의 길이이고, 기호로 $|\mathbf{v}|$ 또는 $\|\mathbf{v}\|$ 라고 써요.

시작점을 원점에 놓으면 끝점이 $(a_1, a_2, a_3)$ 이므로, 크기는 원점에서 그 점까지의 거리입니다. 11.1절의 거리 공식을 쓰면 바로 나와요.

> 이차원 벡터 $\mathbf{a} = \langle a_1, a_2\rangle$ 의 크기: $\;|\mathbf{a}| = \sqrt{a_1^2 + a_2^2}$
>
> 삼차원 벡터 $\mathbf{a} = \langle a_1, a_2, a_3\rangle$ 의 크기: $\;|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$

예를 들어 $\mathbf{a} = \langle 4, 0, 3\rangle$ 이면 $|\mathbf{a}| = \sqrt{16 + 0 + 9} = \sqrt{25} = 5$ 예요. 성분이 음수여도 제곱하면 양수가 되므로 크기는 항상 $0$ 이상이고, 크기가 $0$ 인 벡터는 영벡터뿐입니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c05", kind: "num", level: 2, tag: "성분과 크기",
            q: R`벡터 $\mathbf{a} = \langle 2, -3, 6 \rangle$ 의 크기 $|\mathbf{a}|$ 를 구하세요.`,
            answer: 7, tol: 0.01, unit: "",
            explain: R`$|\mathbf{a}| = \sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.`,
            hints: [R`각 성분을 제곱해서 더한 뒤 제곱근을 씌워요.`, R`$(-3)^2 = 9$ 로 양수입니다.`],
            trap: R`$(-3)^2$ 을 $-9$ 로 넣어 $\sqrt{31}$ 을 얻거나, 제곱근을 빼먹고 $49$ 라고 답하는 실수.`
          }
        },
        {
          type: "explain", title: "성분으로 하는 합·차·스칼라배",
          body: R`그림으로 정의한 합과 스칼라곱을 성분으로 옮기면 아주 간단해집니다. $\mathbf{a} = \langle a_1, a_2\rangle$ 의 끝점에 $\mathbf{b} = \langle b_1, b_2\rangle$ 를 이어 붙이면, 가로로 $a_1 + b_1$, 세로로 $a_2 + b_2$ 만큼 간 셈이에요. 또 $c\mathbf{a}$ 는 $\mathbf{a}$ 가 만드는 직각삼각형을 $c$ 배로 닮음 확대한 것이라 가로·세로가 모두 $c$ 배가 됩니다.

> $\mathbf{a} = \langle a_1, a_2, a_3\rangle$, $\mathbf{b} = \langle b_1, b_2, b_3\rangle$, $c$ 가 스칼라일 때
> $$\mathbf{a} + \mathbf{b} = \langle a_1 + b_1,\; a_2 + b_2,\; a_3 + b_3 \rangle$$
> $$\mathbf{a} - \mathbf{b} = \langle a_1 - b_1,\; a_2 - b_2,\; a_3 - b_3 \rangle$$
> $$c\,\mathbf{a} = \langle c a_1,\; c a_2,\; c a_3 \rangle$$

이차원이면 성분이 두 개일 뿐 똑같아요. 즉 **더하기·빼기는 같은 자리 성분끼리, 스칼라배는 모든 성분에** 하면 됩니다.

주의할 점: 크기는 이렇게 성분별로 나눠 계산되지 않아요. $|\mathbf{a} + \mathbf{b}|$ 를 구할 때는 먼저 $\mathbf{a} + \mathbf{b}$ 를 구한 다음 그 벡터의 크기를 구해야 합니다.`
        },
        {
          type: "worked", title: "예제 4: 크기와 성분 연산",
          problem: R`$\mathbf{a} = \langle 4, 0, 3 \rangle$, $\mathbf{b} = \langle -2, 1, 5 \rangle$ 일 때 $|\mathbf{a}|$ 와 벡터 $\mathbf{a} + \mathbf{b}$, $\mathbf{a} - \mathbf{b}$, $3\mathbf{b}$, $2\mathbf{a} + 5\mathbf{b}$ 를 각각 구하세요.`,
          steps: [
            {
              ask: "|a| 는 어떻게 구할까요?",
              body: R`크기 공식에 성분을 넣어요.

$$|\mathbf{a}| = \sqrt{4^2 + 0^2 + 3^2} = \sqrt{25} = 5$$`
            },
            {
              ask: "a + b 와 a − b 를 구해 보세요. 어떤 성분끼리 계산하나요?",
              body: R`**같은 자리 성분끼리** 더하고 뺍니다.

$$\mathbf{a} + \mathbf{b} = \langle 4 + (-2),\; 0 + 1,\; 3 + 5 \rangle = \langle 2,\, 1,\, 8 \rangle$$
$$\mathbf{a} - \mathbf{b} = \langle 4 - (-2),\; 0 - 1,\; 3 - 5 \rangle = \langle 6,\, -1,\, -2 \rangle$$

뺄셈에서 $4 - (-2) = 6$ 처럼 음수를 빼는 자리에 주의해요.`
            },
            {
              ask: "3b 는요?",
              body: R`스칼라는 **모든 성분에** 곱합니다.

$$3\mathbf{b} = \langle 3(-2),\; 3(1),\; 3(5) \rangle = \langle -6,\, 3,\, 15 \rangle$$`
            },
            {
              ask: "2a + 5b 는 어떤 순서로 계산하면 될까요?",
              body: R`**스칼라배를 먼저** 하고, 그 결과를 더해요.

$$2\mathbf{a} + 5\mathbf{b} = \langle 8,\, 0,\, 6 \rangle + \langle -10,\, 5,\, 25 \rangle = \langle -2,\, 5,\, 31 \rangle$$

성분별로 한 번에 계산해도 같아요: $x$ 성분 $2(4) + 5(-2) = -2$, $y$ 성분 $2(0) + 5(1) = 5$, $z$ 성분 $2(3) + 5(5) = 31$.`
            }
          ],
          answer: R`$|\mathbf{a}| = 5$, $\;\mathbf{a} + \mathbf{b} = \langle 2, 1, 8\rangle$, $\;\mathbf{a} - \mathbf{b} = \langle 6, -1, -2\rangle$, $\;3\mathbf{b} = \langle -6, 3, 15\rangle$, $\;2\mathbf{a} + 5\mathbf{b} = \langle -2, 5, 31\rangle$`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c06", kind: "num", level: 2, tag: "벡터 연산",
            q: R`$\mathbf{a} = \langle 3, -1, 2 \rangle$, $\mathbf{b} = \langle 1, 4, -2 \rangle$ 일 때, 벡터 $2\mathbf{a} - 3\mathbf{b}$ 의 $y$ 성분을 구하세요.`,
            answer: -14, tol: 0.01, unit: "",
            explain: R`$2\mathbf{a} = \langle 6, -2, 4\rangle$, $3\mathbf{b} = \langle 3, 12, -6\rangle$ 이므로 $2\mathbf{a} - 3\mathbf{b} = \langle 6 - 3,\; -2 - 12,\; 4 - (-6)\rangle = \langle 3,\, -14,\, 10\rangle$. $y$ 성분은 $-14$ 입니다.`,
            hints: [R`스칼라배를 먼저 한 뒤 같은 자리 성분끼리 뺍니다.`, R`$y$ 성분만 보면 $2(-1) - 3(4)$ 예요.`],
            trap: R`$-2 - 12$ 를 $10$ 으로 계산하는 부호 실수.`
          }
        },
        {
          type: "explain", title: "n차원 벡터와 벡터의 여덟 가지 성질",
          body: R`모든 이차원 벡터의 집합을 $V_2$, 모든 삼차원 벡터의 집합을 $V_3$ 라고 써요. 더 일반적으로 $V_n$ 은 모든 **$n$ 차원 벡터** $\mathbf{a} = \langle a_1, a_2, \dots, a_n\rangle$ 의 집합입니다. 합과 스칼라배는 이차원·삼차원과 똑같이 성분별로 정의해요. (예: 여섯 가지 원료의 가격을 한꺼번에 담은 6차원 벡터, 위치 $x, y, z$ 와 시간 $t$ 를 담은 사차원 벡터 $\langle x, y, z, t\rangle$)

> **벡터의 성질.** $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 가 $V_n$ 의 벡터이고 $c, d$ 가 스칼라일 때
>
> 1. $\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}$
> 2. $\mathbf{a} + (\mathbf{b} + \mathbf{c}) = (\mathbf{a} + \mathbf{b}) + \mathbf{c}$
> 3. $\mathbf{a} + \mathbf{0} = \mathbf{a}$
> 4. $\mathbf{a} + (-\mathbf{a}) = \mathbf{0}$
> 5. $c(\mathbf{a} + \mathbf{b}) = c\mathbf{a} + c\mathbf{b}$
> 6. $(c + d)\mathbf{a} = c\mathbf{a} + d\mathbf{a}$
> 7. $(cd)\mathbf{a} = c(d\mathbf{a})$
> 8. $1\mathbf{a} = \mathbf{a}$

1은 교환법칙, 2는 결합법칙, 5와 6은 분배법칙이에요. 결론은 간단합니다. **벡터의 덧셈과 스칼라배는 문자식 계산하듯이 해도 된다**는 것이에요. 예를 들어 $2(\mathbf{a} + 3\mathbf{b}) - \mathbf{a} = \mathbf{a} + 6\mathbf{b}$ 처럼 전개하고 동류항을 모을 수 있습니다.`
        },
        {
          type: "why",
          prompt: R`성질 1 ($\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}$) 을 $n = 2$ 인 경우에 성분으로 증명해 보세요. 그리고 성질 2(결합법칙)는 그림으로 어떻게 보일 수 있을까요?`,
          answer: R`**성질 1 (대수적 증명).** $\mathbf{a} = \langle a_1, a_2\rangle$, $\mathbf{b} = \langle b_1, b_2\rangle$ 라 하면

$$\mathbf{a} + \mathbf{b} = \langle a_1 + b_1,\; a_2 + b_2\rangle = \langle b_1 + a_1,\; b_2 + a_2\rangle = \mathbf{b} + \mathbf{a}$$

가운데 등호는 **실수의 덧셈이 교환법칙을 만족한다**는 사실을 각 성분에 쓴 거예요. 벡터의 성질은 이렇게 "성분으로 풀어 쓰면 실수의 성질로 돌아간다"는 방식으로 증명됩니다. (기하학적으로는 평행사변형 법칙 그림으로도 알 수 있었죠.)

**성질 2 (기하학적 증명).** 점 $P$ 에서 출발해 $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ 를 차례로 이어 붙여 끝점을 $Q$ 라 해요. 삼각형 법칙을 두 번 쓰면
- 먼저 $\mathbf{a} + \mathbf{b}$ 를 만든 뒤 $\mathbf{c}$ 를 더해도 $\overrightarrow{PQ}$,
- $\mathbf{a}$ 에 미리 만든 $\mathbf{b} + \mathbf{c}$ 를 더해도 $\overrightarrow{PQ}$

입니다. 어느 쪽으로 묶든 같은 시작점 $P$ 에서 같은 끝점 $Q$ 로 가므로 $(\mathbf{a} + \mathbf{b}) + \mathbf{c} = \mathbf{a} + (\mathbf{b} + \mathbf{c})$ 예요(교재 그림 16).`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c07", kind: "mcq", level: 1, tag: "벡터의 성질",
            q: R`$\mathbf{a}, \mathbf{b}$ 가 벡터이고 $c, d$ 가 스칼라일 때, 다음 중 일반적으로 **성립하지 않는** 식은 무엇일까요?`,
            choices: [
              R`$(cd)\mathbf{a} = c(d\mathbf{a})$`,
              R`$(c + d)\mathbf{a} = c\mathbf{a} + d\mathbf{a}$`,
              R`$\mathbf{a} + (-\mathbf{a}) = \mathbf{0}$`,
              R`$c(\mathbf{a} + \mathbf{b}) = c\mathbf{a} + \mathbf{b}$`
            ],
            answer: 3,
            explain: R`분배법칙(성질 5)은 $c(\mathbf{a} + \mathbf{b}) = c\mathbf{a} + c\mathbf{b}$ 로, $c$ 가 **두 벡터 모두에** 곱해져야 해요. 반례: $c = 2$, $\mathbf{a} = \langle 1, 0\rangle$, $\mathbf{b} = \langle 0, 1\rangle$ 이면 좌변은 $\langle 2, 2\rangle$, $c\mathbf{a} + \mathbf{b}$ 는 $\langle 2, 1\rangle$ 로 다릅니다. 나머지 셋은 차례로 성질 7, 6, 4예요.`,
            hints: [R`여덟 가지 성질의 목록과 한 글자씩 비교해 보세요.`]
          }
        },
        {
          type: "explain", title: "표준기저벡터 i, j, k",
          body: R`$V_3$ 에는 특별한 역할을 하는 벡터가 세 개 있어요.

> $$\mathbf{i} = \langle 1, 0, 0\rangle,\qquad \mathbf{j} = \langle 0, 1, 0\rangle,\qquad \mathbf{k} = \langle 0, 0, 1\rangle$$

$\mathbf{i}, \mathbf{j}, \mathbf{k}$ 는 각각 **길이가 1** 이고 $x$ 축, $y$ 축, $z$ 축의 **양의 방향**을 가리키는 벡터예요. 이들을 **표준기저벡터(standard basis vectors)** 라고 합니다. 이차원에서는 $\mathbf{i} = \langle 1, 0\rangle$, $\mathbf{j} = \langle 0, 1\rangle$ 로 정의해요.

어떤 벡터든 이 셋으로 쓸 수 있습니다.

$$\mathbf{a} = \langle a_1, a_2, a_3\rangle = a_1\langle 1,0,0\rangle + a_2\langle 0,1,0\rangle + a_3\langle 0,0,1\rangle$$

> **공식 2.** $\;\mathbf{a} = \langle a_1, a_2, a_3\rangle = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$
>
> **공식 3.** (이차원) $\;\mathbf{a} = \langle a_1, a_2\rangle = a_1\mathbf{i} + a_2\mathbf{j}$

예: $\langle 1, -2, 6\rangle = \mathbf{i} - 2\mathbf{j} + 6\mathbf{k}$. 그림으로 보면 "$x$ 방향으로 $a_1$, $y$ 방향으로 $a_2$, $z$ 방향으로 $a_3$ 만큼 가는 세 걸음을 이어 붙인 것"이에요.

이 표기에서 계산은 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 를 문자처럼 보고 **동류항끼리** 모으면 됩니다. 빠진 문자는 그 성분이 $0$ 이라는 뜻이에요(예: $4\mathbf{i} + 7\mathbf{k} = \langle 4, 0, 7\rangle$).`
        },
        {
          type: "worked", title: "예제 5: i, j, k 로 나타낸 벡터의 계산",
          problem: R`$\mathbf{a} = \mathbf{i} + 2\mathbf{j} - 3\mathbf{k}$, $\mathbf{b} = 4\mathbf{i} + 7\mathbf{k}$ 일 때 벡터 $2\mathbf{a} + 3\mathbf{b}$ 를 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 로 나타내세요.`,
          steps: [
            {
              ask: "먼저 무엇을 해야 할까요?",
              body: R`주어진 식을 그대로 대입합니다.

$$2\mathbf{a} + 3\mathbf{b} = 2(\mathbf{i} + 2\mathbf{j} - 3\mathbf{k}) + 3(4\mathbf{i} + 7\mathbf{k})$$

$\mathbf{b}$ 에는 $\mathbf{j}$ 항이 없다는 것($y$ 성분이 $0$)을 눈여겨봐요.`
            },
            {
              ask: "괄호는 어떻게 풀까요? 어떤 성질이 이를 허락하나요?",
              body: R`분배법칙(성질 5)과 $(cd)\mathbf{a} = c(d\mathbf{a})$ (성질 7)로 스칼라를 각 항에 곱해요.

$$= 2\mathbf{i} + 4\mathbf{j} - 6\mathbf{k} + 12\mathbf{i} + 21\mathbf{k}$$`
            },
            {
              ask: "이제 같은 기저벡터끼리 모아 보세요.",
              body: R`교환·결합법칙(성질 1, 2)으로 순서를 바꾸고, 성질 6으로 계수를 더합니다.

$$= (2 + 12)\mathbf{i} + 4\mathbf{j} + (-6 + 21)\mathbf{k} = 14\mathbf{i} + 4\mathbf{j} + 15\mathbf{k}$$

성분 표기로 검산하면 $2\langle 1, 2, -3\rangle + 3\langle 4, 0, 7\rangle = \langle 2 + 12,\; 4 + 0,\; -6 + 21\rangle = \langle 14, 4, 15\rangle$ 로 같아요.`
            }
          ],
          answer: R`$2\mathbf{a} + 3\mathbf{b} = 14\mathbf{i} + 4\mathbf{j} + 15\mathbf{k}$`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c08", kind: "mcq", level: 2, tag: "벡터 연산",
            q: R`$\mathbf{a} = 2\mathbf{i} - \mathbf{j} + 4\mathbf{k}$, $\mathbf{b} = \mathbf{i} + 3\mathbf{j} - 2\mathbf{k}$ 일 때 $3\mathbf{a} - 2\mathbf{b}$ 는 무엇일까요?`,
            choices: [
              R`$4\mathbf{i} + 3\mathbf{j} + 8\mathbf{k}$`,
              R`$\mathbf{i} - 4\mathbf{j} + 6\mathbf{k}$`,
              R`$4\mathbf{i} - 9\mathbf{j} + 16\mathbf{k}$`,
              R`$8\mathbf{i} + 3\mathbf{j} + 8\mathbf{k}$`
            ],
            answer: 2,
            explain: R`$3\mathbf{a} = 6\mathbf{i} - 3\mathbf{j} + 12\mathbf{k}$, $2\mathbf{b} = 2\mathbf{i} + 6\mathbf{j} - 4\mathbf{k}$ 이므로

$$3\mathbf{a} - 2\mathbf{b} = (6 - 2)\mathbf{i} + (-3 - 6)\mathbf{j} + (12 + 4)\mathbf{k} = 4\mathbf{i} - 9\mathbf{j} + 16\mathbf{k}$$`,
            hints: [R`$3\mathbf{a}$ 와 $2\mathbf{b}$ 를 따로 구한 뒤 같은 기저벡터끼리 빼요.`, R`$\mathbf{k}$ 의 계수는 $12 - (-4)$ 입니다.`],
            trap: R`$-2\mathbf{b}$ 의 음부호를 $\mathbf{i}$ 항에만 적용하고 $\mathbf{j}, \mathbf{k}$ 항에는 적용하지 않는 실수.`
          }
        },
        {
          type: "explain", title: "단위벡터",
          body: R`**단위벡터(unit vector)** 는 **크기가 1인 벡터**예요. $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 는 모두 단위벡터입니다. 단위벡터는 "길이 정보는 빼고 **방향만** 담은 벡터"라고 생각하면 돼요.

$\mathbf{a} \neq \mathbf{0}$ 일 때, $\mathbf{a}$ 와 **같은 방향**을 가지는 단위벡터는 $\mathbf{a}$ 를 자기 크기로 나눈 것입니다.

> **공식 4.** $$\mathbf{u} = \frac{1}{|\mathbf{a}|}\,\mathbf{a} = \frac{\mathbf{a}}{|\mathbf{a}|}$$

길이가 5인 막대를 5로 나누면 길이 1이 되는 것과 같아요. 방향은 그대로 두고 길이만 1로 맞추는 작업입니다.

이것을 응용하면 "주어진 방향으로 **원하는 길이** $L$ 인 벡터"도 만들 수 있어요. 먼저 단위벡터를 만든 뒤 $L$ 을 곱하면 됩니다: $L\,\dfrac{\mathbf{a}}{|\mathbf{a}|}$.`
        },
        {
          type: "why",
          prompt: R`$\mathbf{u} = \dfrac{1}{|\mathbf{a}|}\mathbf{a}$ 가 정말로 (1) $\mathbf{a}$ 와 같은 방향이고 (2) 크기가 1인 이유를 스칼라곱의 정의를 써서 설명해 보세요.`,
          answer: R`$c = \dfrac{1}{|\mathbf{a}|}$ 이라 두면 $\mathbf{u} = c\mathbf{a}$ 예요.

**(1) 방향.** $\mathbf{a} \neq \mathbf{0}$ 이면 $|\mathbf{a}| > 0$ 이므로 $c$ 는 **양수**입니다. 스칼라곱의 정의에서 양수를 곱한 벡터는 원래 벡터와 같은 방향이니, $\mathbf{u}$ 는 $\mathbf{a}$ 와 같은 방향이에요.

**(2) 크기.** 스칼라곱 $c\mathbf{a}$ 의 길이는 $\mathbf{a}$ 의 길이에 $|c|$ 를 곱한 것이므로

$$|\mathbf{u}| = |c\mathbf{a}| = |c|\,|\mathbf{a}| = \frac{1}{|\mathbf{a}|}\,|\mathbf{a}| = 1$$

그래서 $\mathbf{u}$ 는 $\mathbf{a}$ 와 방향이 같은 단위벡터입니다. $\mathbf{a} = \mathbf{0}$ 이면 $|\mathbf{a}| = 0$ 으로 나눌 수 없어서 이 공식을 쓸 수 없어요(영벡터는 방향이 없으니 당연합니다).`
        },
        {
          type: "worked", title: "예제 6: 방향이 같은 단위벡터",
          problem: R`벡터 $2\mathbf{i} - \mathbf{j} - 2\mathbf{k}$ 와 방향이 같은 단위벡터를 구하세요.`,
          steps: [
            {
              ask: "단위벡터를 만들려면 가장 먼저 무엇을 알아야 할까요?",
              body: R`주어진 벡터의 **크기**예요. 공식 4는 벡터를 자기 크기로 나누는 것이니까요.

$$|2\mathbf{i} - \mathbf{j} - 2\mathbf{k}| = \sqrt{2^2 + (-1)^2 + (-2)^2} = \sqrt{9} = 3$$`
            },
            {
              ask: "이제 공식 4를 적용해 보세요.",
              body: R`벡터에 $\dfrac{1}{3}$ 을 곱합니다. 스칼라는 모든 성분에 곱해져요.

$$\mathbf{u} = \tfrac{1}{3}(2\mathbf{i} - \mathbf{j} - 2\mathbf{k}) = \tfrac{2}{3}\mathbf{i} - \tfrac{1}{3}\mathbf{j} - \tfrac{2}{3}\mathbf{k}$$`
            },
            {
              ask: "정말 단위벡터인지 확인해 볼까요?",
              body: R`크기를 다시 계산해 봅니다.

$$|\mathbf{u}| = \sqrt{\tfrac{4}{9} + \tfrac{1}{9} + \tfrac{4}{9}} = \sqrt{\tfrac{9}{9}} = 1$$

성분의 부호가 원래 벡터와 모두 같으니 방향도 같아요. 단위벡터 문제는 이렇게 "크기가 1인지" 검산하는 습관을 들이면 실수를 잡을 수 있습니다.`
            }
          ],
          answer: R`$\tfrac{2}{3}\mathbf{i} - \tfrac{1}{3}\mathbf{j} - \tfrac{2}{3}\mathbf{k}$`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c09", kind: "num", level: 2, tag: "단위벡터·기저",
            q: R`벡터 $\langle 2, -1, 2 \rangle$ 와 같은 방향을 가지고 길이가 $6$ 인 벡터의 $x$ 성분을 구하세요.`,
            answer: 4, tol: 0.01, unit: "",
            explain: R`$|\langle 2, -1, 2\rangle| = \sqrt{4 + 1 + 4} = 3$ 이므로 단위벡터는 $\left\langle \tfrac23, -\tfrac13, \tfrac23\right\rangle$ 예요. 여기에 길이 $6$ 을 곱하면 $\langle 4, -2, 4\rangle$ 이고 $x$ 성분은 $4$ 입니다. 검산: $\sqrt{16 + 4 + 16} = 6$.`,
            hints: [R`먼저 같은 방향의 단위벡터를 만들어요.`, R`단위벡터에 원하는 길이 $6$ 을 곱합니다.`],
            trap: R`크기로 나누지 않고 바로 $6$ 을 곱해 $12$ 라고 답하는 실수. 그러면 길이가 $18$ 인 벡터가 돼요.`
          }
        },
        {
          type: "explain", title: "응용: 힘과 합성력, 크기와 각으로 성분 구하기",
          body: R`벡터는 물리와 공학에서 아주 유용해요. **힘**은 크기(뉴턴 N 또는 파운드로 잼)와 방향을 모두 가지므로 벡터로 나타냅니다. 한 물체에 여러 힘이 작용하면, 물체가 실제로 받는 **합성력(resultant force)** 은 그 힘들의 **벡터합**이에요.

힘이나 속도는 보통 "크기와 각도"로 주어지는데, 더하려면 성분이 필요합니다. 평면에서 벡터 $\mathbf{v}$ 가 $x$ 축의 양의 방향과 각 $\theta$ 를 이루면 직각삼각형에서

> $$\mathbf{v} = |\mathbf{v}|\cos\theta\;\mathbf{i} + |\mathbf{v}|\sin\theta\;\mathbf{j}$$

즉 **수평 성분은 $|\mathbf{v}|\cos\theta$, 수직 성분은 $|\mathbf{v}|\sin\theta$** 예요. 반대로 성분을 알면 크기는 $\sqrt{a_1^2 + a_2^2}$, 각은 $\tan\theta = a_2 / a_1$ 과 벡터가 놓인 사분면으로 구합니다.

물체가 **매달려 정지**해 있으면 합성력이 $\mathbf{0}$ 이에요. 그래서 "줄들이 당기는 힘의 합 = 중력의 반대 벡터"라는 식을 세우고, $\mathbf{i}$ 성분과 $\mathbf{j}$ 성분을 각각 비교해 미지수를 구합니다. 성분으로 쓴 두 벡터가 같으려면 **대응하는 성분이 각각 같아야** 하기 때문이에요.`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c10", kind: "num", level: 2, tag: "힘과 속도 응용",
            q: R`제1사분면에 있는 벡터 $\mathbf{v}$ 가 $x$ 축의 양의 방향과 $60^\circ$ 를 이루고 $|\mathbf{v}| = 8$ 입니다. $\mathbf{v}$ 의 $y$ 성분을 구하세요. (소수 둘째 자리까지)`,
            answer: 6.93, tol: 0.01, unit: "",
            explain: R`$y$ 성분은 $|\mathbf{v}|\sin\theta = 8\sin 60^\circ = 8 \cdot \dfrac{\sqrt3}{2} = 4\sqrt3 \approx 6.93$ 이에요. 참고로 $x$ 성분은 $8\cos 60^\circ = 4$ 이고, 검산하면 $\sqrt{4^2 + (4\sqrt3)^2} = \sqrt{64} = 8$ 입니다.`,
            hints: [R`각을 $x$ 축에서 쟀으므로 $x$ 성분에 $\cos$, $y$ 성분에 $\sin$ 이 붙어요.`, R`$\sin 60^\circ = \dfrac{\sqrt3}{2}$`],
            trap: R`$\sin$ 과 $\cos$ 를 바꿔 $8\cos 60^\circ = 4$ 를 $y$ 성분으로 답하는 실수.`
          }
        },
        {
          type: "worked", title: "예제 7: 두 줄에 매달린 물체의 장력",
          problem: R`질량 $100\,\text{kg}$ 인 물체가 천장에 묶인 두 줄에 매달려 정지해 있어요. 왼쪽 줄은 천장(수평)과 $50^\circ$, 오른쪽 줄은 천장과 $32^\circ$ 를 이룹니다. 왼쪽 줄의 장력을 $\mathbf{T}_1$, 오른쪽 줄의 장력을 $\mathbf{T}_2$ 라 할 때 두 장력 벡터와 그 크기를 구하세요. (중력가속도는 $9.8\,\text{m/s}^2$, 오른쪽을 $\mathbf{i}$, 위쪽을 $\mathbf{j}$ 방향으로 둡니다.)`,
          fig: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" font-size="12"><defs><marker id="calc02-f2k" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor" stroke="none"/></marker><marker id="calc02-f2b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#3b82f6" stroke="none"/></marker></defs><line x1="60" y1="40" x2="310" y2="40" stroke-width="2.4"/><line x1="160" y1="120" x2="93" y2="40" stroke="#3b82f6" marker-end="url(#calc02-f2b)"/><line x1="160" y1="120" x2="288" y2="40" stroke="#3b82f6" marker-end="url(#calc02-f2b)"/><line x1="160" y1="120" x2="160" y2="185" marker-end="url(#calc02-f2k)"/><text x="100" y="56" fill="currentColor" stroke="none">50°</text><text x="246" y="56" fill="currentColor" stroke="none">32°</text><text x="104" y="96" fill="#3b82f6" stroke="none">T₁</text><text x="232" y="96" fill="#3b82f6" stroke="none">T₂</text><text x="168" y="176" fill="currentColor" stroke="none">F (중력)</text></svg>`,
          steps: [
            {
              ask: "두 장력을 수평·수직 성분으로 어떻게 쓸 수 있을까요? 부호에 주의하세요.",
              body: R`줄은 물체를 줄 방향으로 **당겨요**. 왼쪽 줄은 왼쪽 위로, 오른쪽 줄은 오른쪽 위로 당깁니다. 각 줄이 수평과 이루는 각이 $50^\circ$, $32^\circ$ 이므로

$$\mathbf{T}_1 = -|\mathbf{T}_1|\cos 50^\circ\,\mathbf{i} + |\mathbf{T}_1|\sin 50^\circ\,\mathbf{j}$$
$$\mathbf{T}_2 = |\mathbf{T}_2|\cos 32^\circ\,\mathbf{i} + |\mathbf{T}_2|\sin 32^\circ\,\mathbf{j}$$

$\mathbf{T}_1$ 의 $\mathbf{i}$ 성분에 **음부호**가 붙는 것은 왼쪽($-x$ 방향)을 향하기 때문이에요.`
            },
            {
              ask: "물체에 작용하는 중력은 어떤 벡터이고, 정지 조건은 무엇일까요?",
              body: R`중력은 아래로 $mg = 100 \times 9.8 = 980\,\text{N}$ 이므로 $\mathbf{F} = -980\,\mathbf{j}$ 예요. 물체가 정지해 있으니 합성력이 $\mathbf{0}$, 즉 두 장력의 합이 중력과 균형을 이룹니다.

$$\mathbf{T}_1 + \mathbf{T}_2 = -\mathbf{F} = 980\,\mathbf{j}$$`
            },
            {
              ask: "이 벡터 방정식에서 스칼라 방정식 두 개를 어떻게 얻을까요?",
              body: R`좌변을 성분별로 모으면

$$\left(-|\mathbf{T}_1|\cos 50^\circ + |\mathbf{T}_2|\cos 32^\circ\right)\mathbf{i} + \left(|\mathbf{T}_1|\sin 50^\circ + |\mathbf{T}_2|\sin 32^\circ\right)\mathbf{j} = 980\,\mathbf{j}$$

**대응하는 성분끼리** 같아야 하므로

$$-|\mathbf{T}_1|\cos 50^\circ + |\mathbf{T}_2|\cos 32^\circ = 0$$
$$|\mathbf{T}_1|\sin 50^\circ + |\mathbf{T}_2|\sin 32^\circ = 980$$

첫 식은 "좌우로 당기는 힘이 상쇄된다", 둘째 식은 "위로 당기는 힘의 합이 무게와 같다"는 뜻이에요.`
            },
            {
              ask: "연립방정식을 풀어 보세요. 어느 식부터 정리하면 좋을까요?",
              body: R`첫 식에서 $|\mathbf{T}_2| = \dfrac{|\mathbf{T}_1|\cos 50^\circ}{\cos 32^\circ}$ 를 얻어 둘째 식에 대입합니다.

$$|\mathbf{T}_1|\sin 50^\circ + \frac{|\mathbf{T}_1|\cos 50^\circ}{\cos 32^\circ}\sin 32^\circ = 980$$

$\dfrac{\sin 32^\circ}{\cos 32^\circ} = \tan 32^\circ$ 이므로

$$|\mathbf{T}_1| = \frac{980}{\sin 50^\circ + \tan 32^\circ\cos 50^\circ} \approx 839\,\text{N}$$
$$|\mathbf{T}_2| = \frac{|\mathbf{T}_1|\cos 50^\circ}{\cos 32^\circ} \approx 636\,\text{N}$$`
            },
            {
              ask: "마지막으로 장력 벡터를 써 보세요.",
              body: R`구한 크기를 처음 식에 넣어요.

$$\mathbf{T}_1 \approx -539\,\mathbf{i} + 643\,\mathbf{j},\qquad \mathbf{T}_2 \approx 539\,\mathbf{i} + 337\,\mathbf{j}$$

검산: $\mathbf{i}$ 성분은 $-539 + 539 = 0$, $\mathbf{j}$ 성분은 $643 + 337 = 980$ 으로 조건과 맞아요. 두 장력의 **크기의 합** $839 + 636 = 1475\,\text{N}$ 은 무게 $980\,\text{N}$ 보다 큽니다. 줄이 비스듬해서 힘의 일부가 서로 좌우로 당기는 데 쓰이기 때문이에요.`
            }
          ],
          answer: R`$|\mathbf{T}_1| \approx 839\,\text{N}$, $|\mathbf{T}_2| \approx 636\,\text{N}$, $\;\mathbf{T}_1 \approx -539\,\mathbf{i} + 643\,\mathbf{j}$, $\;\mathbf{T}_2 \approx 539\,\mathbf{i} + 337\,\mathbf{j}$`
        },
        {
          type: "why",
          prompt: R`예제 7에서 두 장력의 크기를 그냥 더해 $|\mathbf{T}_1| + |\mathbf{T}_2| = 980$ 이라고 식을 세우면 왜 안 될까요?`,
          answer: R`힘은 벡터라서 **방향까지 고려해 벡터로** 더해야 하기 때문이에요. 정지 조건은 $\mathbf{T}_1 + \mathbf{T}_2 = 980\,\mathbf{j}$ 이지, 크기의 합이 $980$ 이라는 것이 아닙니다.

두 줄은 비스듬히 당기므로 각 장력에는 위로 당기는 **수직 성분**과 옆으로 당기는 **수평 성분**이 섞여 있어요. 무게를 받치는 것은 수직 성분($|\mathbf{T}_1|\sin 50^\circ + |\mathbf{T}_2|\sin 32^\circ = 980$)뿐이고, 수평 성분은 서로 반대 방향이라 상쇄될 뿐 무게를 받치는 데 기여하지 않습니다.

그래서 실제 크기의 합은 $839 + 636 = 1475\,\text{N}$ 으로 $980\,\text{N}$ 보다 훨씬 커요. 일반적으로 $|\mathbf{a} + \mathbf{b}|$ 와 $|\mathbf{a}| + |\mathbf{b}|$ 는 두 벡터가 같은 방향일 때만 같습니다.`
        },
        {
          type: "check",
          q: {
            id: "calc-02-c11", kind: "num", level: 2, tag: "힘과 속도 응용",
            q: R`무게가 $600\,\text{N}$ 인 물체가 천장에 묶인 두 줄에 매달려 정지해 있어요. 두 줄은 모두 천장(수평)과 $30^\circ$ 를 이루며 좌우 대칭입니다. 줄 하나에 걸리는 장력의 크기는 몇 N 일까요?`,
            answer: 600, tol: 1, unit: "N",
            explain: R`좌우 대칭이므로 두 장력의 크기는 같아요($T$ 라 둡니다). 수평 성분은 서로 상쇄되고, 수직 성분의 합이 무게와 같아야 합니다.

$$T\sin 30^\circ + T\sin 30^\circ = 600 \;\Rightarrow\; 2T \cdot \tfrac12 = 600 \;\Rightarrow\; T = 600\,\text{N}$$

줄이 많이 누워 있어서, 줄 하나에 걸리는 힘이 물체의 무게와 같을 만큼 커졌어요.`,
            hints: [R`대칭이니 두 장력의 크기는 같아요. 무게를 받치는 것은 수직 성분입니다.`, R`$2T\sin 30^\circ = 600$`],
            trap: R`무게를 둘로 나눠 $300\,\text{N}$ 이라고 답하는 실수. 그것은 각 줄의 **수직 성분**이고, 장력의 크기는 그보다 큽니다.`
          }
        }
      ],
      keypoints: [
        R`벡터는 크기와 방향을 가진 양이며, 길이와 방향이 같으면 위치가 달라도 같은 벡터(동치)이다.`,
        R`합 $\mathbf{u} + \mathbf{v}$ 는 $\mathbf{v}$ 를 $\mathbf{u}$ 의 끝점에 이어 붙여 $\mathbf{u}$ 의 시작점에서 $\mathbf{v}$ 의 끝점까지(삼각형 법칙), 또는 시작점을 맞춘 평행사변형의 대각선(평행사변형 법칙)이다.`,
        R`스칼라곱 $c\mathbf{v}$ 는 길이가 $|c|$ 배이고 $c > 0$ 이면 같은 방향, $c < 0$ 이면 반대 방향이며, $\mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v})$ 이다.`,
        R`$A(x_1, y_1, z_1)$ 에서 $B(x_2, y_2, z_2)$ 로 가는 벡터는 끝점 − 시작점, 즉 $\langle x_2 - x_1,\, y_2 - y_1,\, z_2 - z_1\rangle$ 이다.`,
        R`크기는 $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$ 이고, 합·차는 같은 자리 성분끼리, 스칼라배는 모든 성분에 한다.`,
        R`벡터의 덧셈과 스칼라배는 교환·결합·분배법칙 등 여덟 가지 성질을 만족해서 문자식처럼 계산할 수 있다.`,
        R`표준기저벡터 $\mathbf{i}, \mathbf{j}, \mathbf{k}$ 를 쓰면 $\langle a_1, a_2, a_3\rangle = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$ 이고, $\mathbf{a}$ 와 방향이 같은 단위벡터는 $\mathbf{a} / |\mathbf{a}|$ 이다.`,
        R`$x$ 축 양의 방향과 각 $\theta$ 를 이루는 평면벡터는 $|\mathbf{v}|\cos\theta\,\mathbf{i} + |\mathbf{v}|\sin\theta\,\mathbf{j}$ 이고, 합성력은 힘들의 벡터합이며 정지한 물체에서는 성분별 합이 각각 0이다.`
      ],
      bank: [
        {
          id: "calc-02-b01", kind: "mcq", level: 1, tag: "벡터의 기하",
          q: R`다음 중 **벡터**로 나타내야 하는 양은 무엇일까요?`,
          choices: [
            R`극장표 한 장의 값`,
            R`강물이 흐르는 속도(빠르기와 흐르는 방향)`,
            R`세계 인구`,
            R`어떤 선분의 길이`
          ],
          answer: 1,
          explain: R`벡터는 **크기와 방향**을 함께 가진 양이에요. 강물의 흐름은 얼마나 빠른지와 어느 쪽으로 흐르는지가 모두 필요하므로 벡터입니다. 표의 값, 인구, 길이는 수 하나로 충분한 스칼라예요.`,
          hints: [R`"어느 쪽으로?"라는 질문이 의미가 있는 양을 찾아보세요.`]
        },
        {
          id: "calc-02-b02", kind: "mcq", level: 1, tag: "성분과 크기",
          q: R`점 $(4, 7)$ 과 벡터 $\langle 4, 7\rangle$ 의 관계를 가장 바르게 설명한 것은 무엇일까요?`,
          choices: [
            R`둘은 표기만 다를 뿐 완전히 같은 대상이다`,
            R`벡터 $\langle 4, 7\rangle$ 은 반드시 점 $(4, 7)$ 에서 출발하는 화살표이다`,
            R`벡터 $\langle 4, 7\rangle$ 의 시작점을 원점에 놓으면 끝점이 점 $(4, 7)$ 이다`,
            R`점 $(4, 7)$ 은 벡터 $\langle 4, 7\rangle$ 의 크기를 나타낸다`
          ],
          answer: 2,
          explain: R`벡터 $\langle 4, 7\rangle$ 은 "오른쪽으로 4, 위로 7"이라는 이동이고, 시작점을 원점에 놓았을 때의 표현이 점 $(4,7)$ 의 **위치벡터** $\overrightarrow{OP}$ 예요. 점은 위치 하나이고, 벡터는 어디에든 옮겨 그릴 수 있는 이동이라는 점이 다릅니다.`,
          hints: [R`위치벡터의 정의를 떠올려 보세요.`]
        },
        {
          id: "calc-02-b03", kind: "mcq", level: 1, tag: "벡터의 기하",
          q: R`평행사변형 $ABCD$ 가 있어요(꼭짓점은 $A \to B \to C \to D$ 순서로 한 바퀴 돕니다). 다음 중 $\overrightarrow{AB}$ 와 동치인 벡터는 무엇일까요?`,
          choices: [
            R`$\overrightarrow{CD}$`,
            R`$\overrightarrow{BA}$`,
            R`$\overrightarrow{AD}$`,
            R`$\overrightarrow{DC}$`
          ],
          answer: 3,
          explain: R`평행사변형에서 변 $AB$ 와 변 $DC$ 는 평행하고 길이가 같아요. 꼭짓점이 $A \to B \to C \to D$ 순서이므로 $A$ 에서 $B$ 로 가는 방향은 $D$ 에서 $C$ 로 가는 방향과 같습니다. 따라서 $\overrightarrow{AB} = \overrightarrow{DC}$ 예요. 마찬가지로 $\overrightarrow{AD} = \overrightarrow{BC}$ 입니다.`,
          hints: [R`길이만이 아니라 방향(글자 순서)까지 같아야 해요.`],
          trap: R`마주 보는 변이라는 것만 보고 글자 순서를 반대로 쓴 $\overrightarrow{CD}$ 를 고르는 실수. 이것은 방향이 반대인 벡터예요.`
        },
        {
          id: "calc-02-b04", kind: "mcq", level: 1, tag: "벡터의 기하",
          q: R`$\mathbf{v} \neq \mathbf{0}$ 일 때 $-2\mathbf{v}$ 를 바르게 설명한 것은 무엇일까요?`,
          choices: [
            R`$\mathbf{v}$ 와 반대 방향이고 길이가 2배인 벡터`,
            R`$\mathbf{v}$ 와 같은 방향이고 길이가 2배인 벡터`,
            R`$\mathbf{v}$ 와 반대 방향이고 길이가 $-2$ 배인 벡터`,
            R`$\mathbf{v}$ 와 반대 방향이고 길이가 절반인 벡터`
          ],
          answer: 0,
          explain: R`스칼라곱 $c\mathbf{v}$ 의 길이는 $|c|$ 배, 방향은 $c < 0$ 이면 반대예요. $c = -2$ 이므로 길이는 $|-2| = 2$ 배, 방향은 반대입니다.`,
          hints: [R`부호는 방향을, 절댓값은 길이의 배율을 정해요.`]
        },
        {
          id: "calc-02-b05", kind: "mcq", level: 1, tag: "단위벡터·기저",
          q: R`벡터 $5\mathbf{i} - 3\mathbf{k}$ 를 성분으로 쓰면 무엇일까요?`,
          choices: [
            R`$\langle 5, -3\rangle$`,
            R`$\langle 5, -3, 0\rangle$`,
            R`$\langle 5, 0, -3\rangle$`,
            R`$\langle 0, 5, -3\rangle$`
          ],
          answer: 2,
          explain: R`$a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k} = \langle a_1, a_2, a_3\rangle$ 예요. $\mathbf{j}$ 항이 없으므로 $y$ 성분이 $0$ 이고, $-3$ 은 $\mathbf{k}$ 의 계수이니 $z$ 성분입니다. 따라서 $\langle 5, 0, -3\rangle$.`,
          hints: [R`$\mathbf{i}, \mathbf{j}, \mathbf{k}$ 는 차례로 $x, y, z$ 방향이에요. 빠진 것은 계수가 $0$ 입니다.`]
        },
        {
          id: "calc-02-b06", kind: "mcq", level: 1, tag: "단위벡터·기저",
          q: R`다음 중 단위벡터인 것은 무엇일까요?`,
          choices: [
            R`$\langle 1, 1\rangle$`,
            R`$\left\langle \tfrac12, \tfrac12\right\rangle$`,
            R`$\langle 1, -1, 1\rangle$`,
            R`$\left\langle \tfrac35, -\tfrac45\right\rangle$`
          ],
          answer: 3,
          explain: R`단위벡터는 크기가 1인 벡터예요. $\left|\left\langle \tfrac35, -\tfrac45\right\rangle\right| = \sqrt{\tfrac{9}{25} + \tfrac{16}{25}} = 1$. 나머지의 크기는 차례로 $\sqrt2$, $\tfrac{\sqrt2}{2}$, $\sqrt3$ 입니다.`,
          hints: [R`각 벡터의 크기를 직접 계산해 보세요.`]
        },
        {
          id: "calc-02-b07", kind: "mcq", level: 2, tag: "벡터의 기하",
          q: R`네 점 $P, Q, R, S$ 에 대하여 $\overrightarrow{QS} - \overrightarrow{PS}$ 를 하나의 벡터로 나타내면 무엇일까요?`,
          choices: [
            R`$\overrightarrow{PQ}$`,
            R`$\overrightarrow{QP}$`,
            R`$\mathbf{0}$`,
            R`$2\overrightarrow{QS}$`
          ],
          answer: 1,
          explain: R`빼기는 음벡터를 더하는 것이고, $-\overrightarrow{PS} = \overrightarrow{SP}$ 예요. 따라서

$$\overrightarrow{QS} - \overrightarrow{PS} = \overrightarrow{QS} + \overrightarrow{SP} = \overrightarrow{QP}$$

마지막 단계는 삼각형 법칙($Q \to S \to P$)입니다.`,
          hints: [R`$-\overrightarrow{PS}$ 는 방향이 반대인 $\overrightarrow{SP}$ 예요.`, R`$\overrightarrow{QS} + \overrightarrow{SP}$ 에 삼각형 법칙을 써 보세요.`],
          trap: R`결과의 글자 순서를 거꾸로 써서 $\overrightarrow{PQ}$ 라고 하는 실수.`
        },
        {
          id: "calc-02-b08", kind: "mcq", level: 2, tag: "벡터의 기하",
          q: R`$A, B, C$ 가 삼각형의 세 꼭짓점일 때 $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA}$ 는 무엇일까요?`,
          choices: [
            R`$2\overrightarrow{AC}$`,
            R`$\overrightarrow{AC}$`,
            R`$\mathbf{0}$`,
            R`삼각형의 둘레의 길이`
          ],
          answer: 2,
          explain: R`삼각형 법칙으로 $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ 이고, $\overrightarrow{CA} = -\overrightarrow{AC}$ 이므로

$$\overrightarrow{AC} + \overrightarrow{CA} = \overrightarrow{AC} + (-\overrightarrow{AC}) = \mathbf{0}$$

$A$ 에서 출발해 삼각형을 한 바퀴 돌아 $A$ 로 돌아왔으니 전체 변위가 없는 것이에요.`,
          hints: [R`앞의 두 벡터부터 삼각형 법칙으로 합쳐 보세요.`, R`출발한 점으로 되돌아오면 변위는 얼마일까요?`]
        },
        {
          id: "calc-02-b09", kind: "num", level: 2, tag: "벡터의 기하",
          q: R`$|\mathbf{u}| = 3$, $|\mathbf{v}| = 4$ 이고 $\mathbf{u}$ 와 $\mathbf{v}$ 는 서로 수직이에요. 세 벡터가 $\mathbf{u} + \mathbf{v} + \mathbf{w} = \mathbf{0}$ 을 만족할 때 $|\mathbf{w}|$ 를 구하세요.`,
          answer: 5, tol: 0.01, unit: "",
          explain: R`$\mathbf{w} = -(\mathbf{u} + \mathbf{v})$ 이므로 $|\mathbf{w}| = |\mathbf{u} + \mathbf{v}|$ 예요. $\mathbf{u}$ 와 $\mathbf{v}$ 가 수직이니 삼각형 법칙으로 그린 $\mathbf{u} + \mathbf{v}$ 는 두 변이 $3, 4$ 인 직각삼각형의 빗변이고, 길이는 $\sqrt{3^2 + 4^2} = 5$ 입니다. 성분으로 확인하면 $\mathbf{u} = \langle 3, 0\rangle$, $\mathbf{v} = \langle 0, 4\rangle$ 로 둘 때 $\mathbf{w} = \langle -3, -4\rangle$, $|\mathbf{w}| = 5$.`,
          hints: [R`$\mathbf{w}$ 를 $\mathbf{u}, \mathbf{v}$ 로 나타내 보세요.`, R`수직인 두 벡터의 합은 직각삼각형의 빗변이에요.`],
          trap: R`크기를 그냥 더해 $7$ 이라고 답하는 실수. 방향이 다른 벡터는 크기끼리 더할 수 없어요.`
        },
        {
          id: "calc-02-b10", kind: "mcq", level: 2, tag: "성분과 크기",
          q: R`$A(1, -2, 4)$, $B(4, 2, -1)$ 일 때 유향선분 $\overrightarrow{AB}$ 로 표현되는 벡터 $\mathbf{a}$ 는 무엇일까요?`,
          choices: [
            R`$\langle 3, 4, -5\rangle$`,
            R`$\langle -3, -4, 5\rangle$`,
            R`$\langle 5, 0, 3\rangle$`,
            R`$\langle 3, 0, -5\rangle$`
          ],
          answer: 0,
          explain: R`끝점 − 시작점: $\langle 4 - 1,\; 2 - (-2),\; -1 - 4\rangle = \langle 3, 4, -5\rangle$. 검산: $A$ 에 더하면 $(1 + 3,\, -2 + 4,\, 4 - 5) = (4, 2, -1) = B$.`,
          hints: [R`$B$ 의 좌표에서 $A$ 의 좌표를 뺍니다.`, R`$y$ 성분은 $2 - (-2)$ 예요.`]
        },
        {
          id: "calc-02-b11", kind: "num", level: 2, tag: "성분과 크기",
          q: R`$\mathbf{a} = \langle 5, -12\rangle$, $\mathbf{b} = \langle -3, -6\rangle$ 일 때 $|\mathbf{a} - \mathbf{b}|$ 를 구하세요.`,
          answer: 10, tol: 0.01, unit: "",
          explain: R`먼저 벡터의 차를 구해요: $\mathbf{a} - \mathbf{b} = \langle 5 - (-3),\; -12 - (-6)\rangle = \langle 8, -6\rangle$. 그 크기는 $\sqrt{8^2 + (-6)^2} = \sqrt{100} = 10$ 입니다.`,
          hints: [R`크기를 먼저 구하지 말고, 벡터 $\mathbf{a} - \mathbf{b}$ 부터 구합니다.`, R`$\mathbf{a} - \mathbf{b} = \langle 8, -6\rangle$`],
          trap: R`$|\mathbf{a}| - |\mathbf{b}| = 13 - \sqrt{45} \approx 6.29$ 로 계산하는 실수. $|\mathbf{a} - \mathbf{b}|$ 와 $|\mathbf{a}| - |\mathbf{b}|$ 는 다른 값이에요.`
        },
        {
          id: "calc-02-b12", kind: "mcq", level: 2, tag: "벡터 연산",
          q: R`$\mathbf{a} = 3\mathbf{i} - 2\mathbf{j} + \mathbf{k}$, $\mathbf{b} = \mathbf{i} - 5\mathbf{k}$ 일 때 $4\mathbf{a} + 2\mathbf{b}$ 는 무엇일까요?`,
          choices: [
            R`$14\mathbf{i} - 8\mathbf{j} + 14\mathbf{k}$`,
            R`$4\mathbf{i} - 2\mathbf{j} - 4\mathbf{k}$`,
            R`$12\mathbf{i} - 8\mathbf{j} - 6\mathbf{k}$`,
            R`$14\mathbf{i} - 8\mathbf{j} - 6\mathbf{k}$`
          ],
          answer: 3,
          explain: R`$4\mathbf{a} = 12\mathbf{i} - 8\mathbf{j} + 4\mathbf{k}$, $2\mathbf{b} = 2\mathbf{i} - 10\mathbf{k}$ 이므로

$$4\mathbf{a} + 2\mathbf{b} = (12 + 2)\mathbf{i} - 8\mathbf{j} + (4 - 10)\mathbf{k} = 14\mathbf{i} - 8\mathbf{j} - 6\mathbf{k}$$

$\mathbf{b}$ 에는 $\mathbf{j}$ 항이 없으므로 $\mathbf{j}$ 의 계수는 $4\mathbf{a}$ 의 것 그대로예요.`,
          hints: [R`$4\mathbf{a}$ 와 $2\mathbf{b}$ 를 따로 구한 뒤 같은 기저벡터끼리 더해요.`, R`$\mathbf{k}$ 의 계수는 $4(1) + 2(-5)$ 입니다.`]
        },
        {
          id: "calc-02-b13", kind: "mcq", level: 2, tag: "단위벡터·기저",
          q: R`벡터 $4\mathbf{i} - 4\mathbf{j} + 7\mathbf{k}$ 와 방향이 같은 단위벡터는 무엇일까요?`,
          choices: [
            R`$\tfrac{4}{81}\mathbf{i} - \tfrac{4}{81}\mathbf{j} + \tfrac{7}{81}\mathbf{k}$`,
            R`$\tfrac{4}{9}\mathbf{i} - \tfrac{4}{9}\mathbf{j} + \tfrac{7}{9}\mathbf{k}$`,
            R`$\tfrac{4}{7}\mathbf{i} - \tfrac{4}{7}\mathbf{j} + \mathbf{k}$`,
            R`$\mathbf{i} - \mathbf{j} + \mathbf{k}$`
          ],
          answer: 1,
          explain: R`크기는 $\sqrt{4^2 + (-4)^2 + 7^2} = \sqrt{16 + 16 + 49} = \sqrt{81} = 9$ 예요. 벡터를 $9$ 로 나누면 $\tfrac49\mathbf{i} - \tfrac49\mathbf{j} + \tfrac79\mathbf{k}$ 입니다. 검산: $\tfrac{16 + 16 + 49}{81} = 1$.`,
          hints: [R`먼저 주어진 벡터의 크기를 구해요.`, R`크기는 $9$ 입니다. 각 성분을 $9$ 로 나누세요.`]
        },
        {
          id: "calc-02-b14", kind: "num", level: 2, tag: "단위벡터·기저",
          q: R`벡터 $\langle 6, 2, -3\rangle$ 과 같은 방향을 가지고 길이가 $14$ 인 벡터의 $z$ 성분을 구하세요.`,
          answer: -6, tol: 0.01, unit: "",
          explain: R`$|\langle 6, 2, -3\rangle| = \sqrt{36 + 4 + 9} = 7$ 이므로 단위벡터는 $\left\langle \tfrac67, \tfrac27, -\tfrac37\right\rangle$ 이에요. 길이 $14$ 를 곱하면 $\langle 12, 4, -6\rangle$ 이고 $z$ 성분은 $-6$ 입니다. 검산: $\sqrt{144 + 16 + 36} = \sqrt{196} = 14$.`,
          hints: [R`단위벡터를 만든 다음 원하는 길이를 곱해요.`, R`원래 벡터의 크기가 $7$ 이니, 길이 $14$ 가 되려면 몇 배 해야 할까요?`],
          trap: R`크기로 나누지 않고 $14$ 를 그대로 곱해 $-42$ 라고 답하는 실수.`
        },
        {
          id: "calc-02-b15", kind: "num", level: 2, tag: "힘과 속도 응용",
          q: R`벡터 $\sqrt{3}\,\mathbf{i} + \mathbf{j}$ 가 $x$ 축의 양의 방향과 이루는 각은 몇 도일까요?`,
          answer: 30, tol: 0.1, unit: "°",
          explain: R`벡터가 제1사분면에 있고 $\tan\theta = \dfrac{1}{\sqrt3}$ 이므로 $\theta = 30^\circ$ 예요. 다른 방법: 크기가 $\sqrt{3 + 1} = 2$ 이므로 $\cos\theta = \dfrac{\sqrt3}{2}$, $\sin\theta = \dfrac12$ 이고 역시 $\theta = 30^\circ$ 입니다.`,
          hints: [R`$\tan\theta = \dfrac{y\text{ 성분}}{x\text{ 성분}}$`, R`$\tan\theta = \dfrac{1}{\sqrt3}$ 인 예각을 떠올려 보세요.`],
          trap: R`$\tan\theta = \dfrac{x\text{ 성분}}{y\text{ 성분}} = \sqrt3$ 으로 뒤집어 $60^\circ$ 라고 답하는 실수.`
        },
        {
          id: "calc-02-b16", kind: "num", level: 2, tag: "힘과 속도 응용",
          q: R`어린이가 수평면과 $35^\circ$ 를 이루는 방향으로 줄을 당겨 썰매를 $80\,\text{N}$ 의 힘으로 끌고 있어요. 이 힘의 수평 성분은 몇 N 일까요? (소수 첫째 자리까지)`,
          answer: 65.5, tol: 0.1, unit: "N",
          explain: R`수평 성분은 $|\mathbf{F}|\cos\theta = 80\cos 35^\circ \approx 80 \times 0.8192 \approx 65.5\,\text{N}$ 이에요. 참고로 수직 성분은 $80\sin 35^\circ \approx 45.9\,\text{N}$ 이고, $\sqrt{65.5^2 + 45.9^2} \approx 80$ 으로 검산됩니다.`,
          hints: [R`수평과 이루는 각이 주어졌으니 수평 성분에는 $\cos$ 를 씁니다.`],
          trap: R`$\sin$ 을 써서 수직 성분 $45.9\,\text{N}$ 을 답하는 실수.`
        },
        {
          id: "calc-02-b17", kind: "num", level: 3, tag: "힘과 속도 응용",
          q: R`원점에 두 힘이 작용해요. 한 힘은 크기 $30\,\text{N}$ 으로 $x$ 축의 양의 방향에서 **위로** $60^\circ$ 방향이고, 다른 힘은 크기 $20\,\text{N}$ 으로 $x$ 축의 양의 방향에서 **아래로** $45^\circ$ 방향입니다. 합성력의 크기는 몇 N 일까요? (소수 첫째 자리까지)`,
          answer: 31.5, tol: 0.1, unit: "N",
          explain: R`각 힘을 성분으로 나눠요. 아래로 향하는 힘의 $\mathbf{j}$ 성분은 음수입니다.

- $\mathbf{F}_1 = 30\cos 60^\circ\,\mathbf{i} + 30\sin 60^\circ\,\mathbf{j} \approx 15\,\mathbf{i} + 25.98\,\mathbf{j}$
- $\mathbf{F}_2 = 20\cos 45^\circ\,\mathbf{i} - 20\sin 45^\circ\,\mathbf{j} \approx 14.14\,\mathbf{i} - 14.14\,\mathbf{j}$

합성력은 $\mathbf{F}_1 + \mathbf{F}_2 \approx 29.14\,\mathbf{i} + 11.84\,\mathbf{j}$ 이고, 크기는 $\sqrt{29.14^2 + 11.84^2} \approx 31.5\,\text{N}$ 이에요. ($x$ 축 양의 방향과 이루는 각은 $\tan^{-1}(11.84 / 29.14) \approx 22.1^\circ$ 입니다.)`,
          hints: [R`두 힘을 각각 $\mathbf{i}, \mathbf{j}$ 성분으로 나눈 뒤 성분끼리 더해요.`, R`아래로 $45^\circ$ 인 힘은 $20\cos 45^\circ\,\mathbf{i} - 20\sin 45^\circ\,\mathbf{j}$ 입니다.`],
          trap: R`아래로 향하는 힘의 $\mathbf{j}$ 성분에 음부호를 붙이지 않아 $49.6\,\text{N}$ 을 얻거나, 크기를 그냥 더해 $50\,\text{N}$ 이라고 하는 실수.`
        },
        {
          id: "calc-02-b18", kind: "num", level: 3, tag: "힘과 속도 응용",
          q: R`배가 북쪽으로 $22\,\text{km/h}$ 의 속력으로 움직이고 있고, 한 사람이 그 배의 갑판 위에서 서쪽을 향해 $3\,\text{km/h}$ 로 걷고 있어요. 수면에 대한 이 사람의 속력은 몇 km/h 일까요? (소수 첫째 자리까지)`,
          answer: 22.2, tol: 0.1, unit: "km/h",
          explain: R`동쪽을 $\mathbf{i}$, 북쪽을 $\mathbf{j}$ 로 두면 배의 속도는 $22\,\mathbf{j}$, 배에 대한 사람의 속도는 $-3\,\mathbf{i}$ 예요. 수면에 대한 속도는 두 속도벡터의 합 $-3\,\mathbf{i} + 22\,\mathbf{j}$ 이고, 속력(속도벡터의 크기)은

$$\sqrt{(-3)^2 + 22^2} = \sqrt{493} \approx 22.2\,\text{km/h}$$

방향은 북쪽에서 서쪽으로 $\tan^{-1}(3/22) \approx 7.8^\circ$ 기울어진 방향입니다.`,
          hints: [R`속도도 벡터이므로 두 속도를 벡터로 더해야 해요.`, R`서쪽과 북쪽은 서로 수직입니다.`],
          trap: R`속력을 그냥 더해 $25\,\text{km/h}$, 또는 빼서 $19\,\text{km/h}$ 라고 답하는 실수.`
        },
        {
          id: "calc-02-b19", kind: "num", level: 3, tag: "힘과 속도 응용",
          q: R`질량 $50\,\text{kg}$ 인 물체가 천장에 묶인 두 줄에 매달려 정지해 있어요. 왼쪽 줄은 천장(수평)과 $30^\circ$, 오른쪽 줄은 천장과 $60^\circ$ 를 이룹니다. **왼쪽 줄**(천장과 $30^\circ$)의 장력의 크기는 몇 N 일까요? (중력가속도는 $9.8\,\text{m/s}^2$)`,
          answer: 245, tol: 1, unit: "N",
          explain: R`무게는 $50 \times 9.8 = 490\,\text{N}$ 이에요. 왼쪽 장력의 크기를 $T_1$, 오른쪽을 $T_2$ 라 하면

- 수평: $-T_1\cos 30^\circ + T_2\cos 60^\circ = 0 \;\Rightarrow\; T_2 = \sqrt3\,T_1$
- 수직: $T_1\sin 30^\circ + T_2\sin 60^\circ = 490$

대입하면 $\tfrac12 T_1 + \sqrt3\,T_1 \cdot \tfrac{\sqrt3}{2} = 2T_1 = 490$ 이므로 $T_1 = 245\,\text{N}$, $T_2 = 245\sqrt3 \approx 424\,\text{N}$ 입니다. 검산: 수직 성분 $245 \times 0.5 + 424.4 \times 0.866 \approx 122.5 + 367.5 = 490$.`,
          hints: [R`예제 7과 같은 방법이에요. 두 장력을 수평·수직 성분으로 쓰고 성분별 식 두 개를 세웁니다.`, R`수평 식에서 $T_2 = \sqrt3\,T_1$ 을 얻어 수직 식에 대입해요.`],
          trap: R`더 누운 줄에 더 큰 힘이 걸린다고 생각해 $424\,\text{N}$ 을 답하는 실수. 더 가파른 줄($60^\circ$)이 무게를 더 많이 받칩니다.`
        },
        {
          id: "calc-02-b20", kind: "mcq", level: 3, tag: "벡터 연산",
          q: R`$\mathbf{a} = \langle 3, 2\rangle$, $\mathbf{b} = \langle 2, -1\rangle$, $\mathbf{c} = \langle 8, 3\rangle$ 일 때, $\mathbf{c} = s\mathbf{a} + t\mathbf{b}$ 를 만족하는 스칼라 $s, t$ 의 값은 무엇일까요?`,
          choices: [
            R`$s = 1,\; t = 2$`,
            R`$s = \tfrac{8}{3},\; t = -3$`,
            R`$s = 2,\; t = 1$`,
            R`$s = 2,\; t = -1$`
          ],
          answer: 2,
          explain: R`$s\mathbf{a} + t\mathbf{b} = \langle 3s + 2t,\; 2s - t\rangle$ 이고 이것이 $\langle 8, 3\rangle$ 과 같으려면 성분별로

$$3s + 2t = 8,\qquad 2s - t = 3$$

둘째 식에서 $t = 2s - 3$ 을 첫 식에 넣으면 $3s + 4s - 6 = 8$, $s = 2$, $t = 1$ 이에요. 검산: $2\langle 3, 2\rangle + \langle 2, -1\rangle = \langle 8, 3\rangle$.`,
          hints: [R`$s\mathbf{a} + t\mathbf{b}$ 를 성분으로 쓰고 $\mathbf{c}$ 의 성분과 비교해요.`, R`연립방정식 $3s + 2t = 8$, $2s - t = 3$ 을 풉니다.`]
        },
        {
          id: "calc-02-b21", kind: "short", level: 3, tag: "벡터의 성질",
          q: R`점 $C$ 는 선분 $AB$ 위의 점으로, $B$ 로부터의 거리가 $A$ 로부터의 거리의 세 배인 위치에 있어요. $\mathbf{a} = \overrightarrow{OA}$, $\mathbf{b} = \overrightarrow{OB}$, $\mathbf{c} = \overrightarrow{OC}$ 일 때 $\mathbf{c}$ 를 $\mathbf{a}$ 와 $\mathbf{b}$ 로 나타내고 그 과정을 설명하세요.`,
          answer: R`$C$ 는 $A$ 에서 $B$ 쪽으로 전체 길이의 $\tfrac14$ 만큼 간 점이에요($AC : CB = 1 : 3$). 따라서 $\overrightarrow{AC} = \tfrac14\overrightarrow{AB}$ 입니다.

$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = \mathbf{b} - \mathbf{a}$ 이고, 삼각형 법칙으로 $\overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{AC}$ 이므로

$$\mathbf{c} = \mathbf{a} + \tfrac14(\mathbf{b} - \mathbf{a}) = \tfrac34\mathbf{a} + \tfrac14\mathbf{b}$$

$C$ 가 $A$ 에 더 가까우니 $\mathbf{a}$ 의 계수가 더 큰 것이 자연스러워요.`,
          explain: R`핵심은 두 가지예요. 내분 조건을 $\overrightarrow{AC} = \tfrac14\overrightarrow{AB}$ 라는 스칼라곱으로 바꾸는 것, 그리고 $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$ (끝점의 위치벡터 − 시작점의 위치벡터)를 쓰는 것입니다. 그러면 $\mathbf{c} = \mathbf{a} + \tfrac14(\mathbf{b} - \mathbf{a}) = \tfrac34\mathbf{a} + \tfrac14\mathbf{b}$ 가 돼요. 교재 연습문제(거리가 두 배인 경우 $\mathbf{c} = \tfrac23\mathbf{a} + \tfrac13\mathbf{b}$)와 같은 방법입니다.`,
          rubric: [
            R`$AC : CB = 1 : 3$ 에서 $\overrightarrow{AC} = \tfrac14\overrightarrow{AB}$ 임을 밝혔다`,
            R`$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$ 를 썼다`,
            R`$\overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{AC}$ (삼각형 법칙)를 썼다`,
            R`결과 $\mathbf{c} = \tfrac34\mathbf{a} + \tfrac14\mathbf{b}$ 를 얻었다`
          ],
          hints: [R`$\overrightarrow{AC}$ 는 $\overrightarrow{AB}$ 의 몇 배일까요?`, R`$\overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{AC}$ 로 시작해 보세요.`],
          trap: R`계수를 반대로 붙여 $\tfrac14\mathbf{a} + \tfrac34\mathbf{b}$ 로 쓰는 실수. 이것은 $B$ 에 더 가까운 점이에요.`
        },
        {
          id: "calc-02-b22", kind: "short", level: 3, tag: "벡터의 성질",
          q: R`삼각형 $ABC$ 에서 변 $AB$ 의 중점을 $M$, 변 $AC$ 의 중점을 $N$ 이라 해요. 벡터를 이용해 선분 $MN$ 이 변 $BC$ 와 평행하고 길이가 $BC$ 의 절반임을 증명하세요.`,
          answer: R`$M$, $N$ 이 중점이므로 $\overrightarrow{MA} = \tfrac12\overrightarrow{BA}$, $\overrightarrow{AN} = \tfrac12\overrightarrow{AC}$ 예요.

삼각형 법칙으로 $M \to A \to N$ 을 이어 붙이면

$$\overrightarrow{MN} = \overrightarrow{MA} + \overrightarrow{AN} = \tfrac12\overrightarrow{BA} + \tfrac12\overrightarrow{AC} = \tfrac12\left(\overrightarrow{BA} + \overrightarrow{AC}\right) = \tfrac12\overrightarrow{BC}$$

(세 번째 등호는 분배법칙, 마지막 등호는 삼각형 법칙 $B \to A \to C$.)

$\overrightarrow{MN}$ 이 $\overrightarrow{BC}$ 의 스칼라곱이므로 두 벡터는 평행하고, 스칼라가 $\tfrac12$ 이므로 길이는 $|\overrightarrow{MN}| = \tfrac12|\overrightarrow{BC}|$ 입니다.`,
          explain: R`경로 $M \to A \to N$ 으로 나누면 $\overrightarrow{MN} = \tfrac12\overrightarrow{BA} + \tfrac12\overrightarrow{AC} = \tfrac12\overrightarrow{BC}$ 예요. 한 벡터가 다른 벡터의 스칼라곱이면 평행이고(평행의 정의), 길이는 $|c|$ 배(스칼라곱의 정의)이므로 평행과 길이 절반이 한 번에 나옵니다.`,
          rubric: [
            R`$\overrightarrow{MN} = \overrightarrow{MA} + \overrightarrow{AN}$ 처럼 경로를 벡터의 합으로 나타냈다`,
            R`중점 조건을 $\tfrac12$ 배의 스칼라곱으로 표현했다`,
            R`$\overrightarrow{MN} = \tfrac12\overrightarrow{BC}$ 를 이끌어 냈다`,
            R`스칼라곱이므로 평행이고 길이가 절반이라고 결론지었다`
          ],
          hints: [R`$\overrightarrow{MN}$ 을 $M \to A \to N$ 경로로 나눠 보세요.`, R`$\overrightarrow{BA} + \overrightarrow{AC}$ 는 어떤 벡터일까요?`]
        }
      ]
    }
  );
})();
