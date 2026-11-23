(function () {
  const R = String.raw;
  window.TUTOR_UNITS = window.TUTOR_UNITS || [];
  window.TUTOR_UNITS.push(
    /* ===================== statf-07 : 12주 순위합 검정 ===================== */
    {
      course: "statf",
      id: "statf-07",
      no: 7,
      title: "순위합 검정과 Mann-Whitney U",
      subtitle: "12주 — Wilcoxon-Mann-Whitney 순위합 검정",
      source: "확률과통계2026_12_01.pdf",
      minutes: 45,
      objectives: [
        "순위합 검정의 귀무가설과 교환가능성을 설명할 수 있다",
        "두 표본을 합쳐 동순위까지 처리한 순위와 순위합을 구할 수 있다",
        "순위합에서 U 통계량을 계산하고, U 를 맞대결에서 이긴 횟수로 해석할 수 있다",
        "U 의 가우시안 근사로 z 값을 구하고 동순위 보정의 역할을 설명할 수 있다"
      ],
      pretest: [
        {
          id: "statf-07-p01", kind: "mcq", level: 1, tag: "순위합",
          q: R`자료 10개 중 가장 큰 값 $30$ 이 사실은 $300$ 이었다고 고쳐 적습니다. 자료의 **평균**과 그 값의 **순위**는 각각 어떻게 될까요? (감으로 골라 보세요)`,
          choices: [
            R`평균도 크게 변하고, 순위도 크게 변한다`,
            R`평균은 크게 변하지만, 순위는 10위 그대로다`,
            R`평균은 그대로이고, 순위만 변한다`,
            R`평균과 순위 모두 전혀 변하지 않는다`
          ],
          answer: 1,
          explain: R`값이 $270$ 늘면 평균은 $27$ 이나 올라가요. 하지만 가장 큰 값은 $30$ 이든 $300$ 이든 똑같이 10위입니다. 이번 시간의 검정이 값 대신 순위를 쓰는 이유가 바로 이것이에요.`
        },
        {
          id: "statf-07-p02", kind: "mcq", level: 1, tag: "순위합",
          q: R`번호표 $1, 2, \ldots, 10$ 을 두 집단이 5장씩 나눠 가집니다. 두 집단에 **아무 차이가 없다면**, 한 집단이 가진 번호의 합은 대략 얼마쯤일까요?`,
          choices: [R`약 $5$`, R`약 $10$`, R`약 $15$`, R`약 $27.5$`],
          answer: 3,
          explain: R`번호 전체의 합은 $1 + 2 + \cdots + 10 = 55$ 입니다. 차이가 없다면 두 집단이 이 합을 반씩 나눠 가지므로 각각 $27.5$ 근처가 됩니다.`
        },
        {
          id: "statf-07-p03", kind: "mcq", level: 1, tag: "동순위",
          q: R`값을 작은 순서로 세웠더니 $15$ 가 두 개 있어서 5번째와 6번째 자리를 함께 차지했습니다. 이 두 값에 어떤 순위를 주는 것이 가장 공평할까요?`,
          choices: [
            R`둘 다 5위`,
            R`둘 다 6위`,
            R`둘 다 5.5위`,
            R`아무렇게나 하나는 5위, 하나는 6위`
          ],
          answer: 2,
          explain: R`누가 앞인지 가릴 수 없으므로 두 자리의 평균인 $(5+6)/2 = 5.5$ 를 똑같이 줍니다. 이것을 평균순위라고 해요.`
        }
      ],
      steps: [
        {
          type: "explain", title: "비모수 검정: 값 대신 순위로",
          body: R`**비모수 검정(nonparametric test)** 은 자료가 특정 모수분포를 따른다고 가정하지 않는 검정으로, **분포무관 검정**이라고도 불러요. 대표적인 방법은 자료값 대신 **순위(rank)** 를 쓰는 것입니다.

- 독립표본: **Wilcoxon-Mann-Whitney 순위합 검정(rank-sum test)** ↔ 독립 2표본 $t$ 검정
- 대응표본: Wilcoxon 부호순위 검정(signed-rank test) ↔ 대응표본 $t$ 검정

달리기 기록을 초 단위로 비교하는 대신 "몇 등으로 들어왔는가"만 보는 셈이에요. 그래서 두 가지 장점이 생깁니다.

- **resistant:** 극단값이 몇 개 있어도 결과가 크게 변하지 않아요.
- **robust:** $t$ 검정의 가정이 만족되는 경우에도 검정력이 크게 떨어지지 않아요.

다만 $t$ 검정처럼 검정을 역으로 이용해 **신뢰구간을 구하기는 어렵다**는 단점이 있습니다.`
        },
        {
          type: "why",
          prompt: R`10개 자료 중 가장 큰 값이 $30$ 에서 $300$ 으로 바뀌어도 순위합 검정의 결과는 그대로입니다. 왜 그럴까요?`,
          answer: R`순위는 값 사이의 **거리**를 버리고 **순서**만 남기기 때문입니다. $30$ 도 $300$ 도 전체에서 가장 크므로 똑같이 10위이고, 다른 값들의 순위도 바뀌지 않아요. 순위가 그대로이니 순위합과 검정 결과도 그대로입니다. 반면 평균을 쓰는 $t$ 검정은 이 값 하나에 크게 흔들려요.`
        },
        {
          type: "explain", title: "귀무가설과 교환가능성",
          body: R`이 검정은 흔히 "두 표본의 중앙값이 같다"로 설명하지만, 엄밀한 귀무가설은 다음과 같아요.

> $H_0$: 두 표본이 **동일한 분포**에서 추출되었다

$H_0$ 가 참이면 첫 번째 모집단에서 뽑은 값이 두 번째 모집단의 값보다 클 가능성과 작을 가능성이 같아요. 그래서 Sample 1, Sample 2 라는 이름표는 본질적으로 임의적입니다. 같은 항아리에서 꺼낸 공에 이름표만 나중에 붙인 것과 같아요. 이렇게 $H_0$ 아래에서 집단표시를 서로 바꾸어도 되는 성질이 **교환가능성(exchangeability)** 이고, **순열검정의 기본 원리**입니다.

그래서 $n = n_1 + n_2$ 개의 자료를 $n_1$ 개와 $n_2$ 개로 나누는 모든 경우가 똑같은 확률로 나올 수 있어요.

> 가능한 분할 수 $= \dfrac{n!}{n_1!\,n_2!}$

예를 들어 $n_1 = n_2 = 5$ 이면 $252$ 개, $n_1 = n_2 = 10$ 이면 $184{,}756$ 개의 분할이 있어요.`
        },
        {
          type: "check",
          q: {
            id: "statf-07-c01", kind: "num", level: 2, tag: "교환가능성",
            q: R`표본크기가 $n_1 = 4$, $n_2 = 3$ 인 두 표본을 합친 뒤 다시 4개와 3개로 나누는 서로 다른 분할은 모두 몇 개인가요? (정수)`,
            answer: 35, tol: 0.01, unit: "개",
            hints: [R`분할 수 공식은 $n!/(n_1!\,n_2!)$ 입니다.`, R`$7!/(4!\,3!)$ 에서 $7!/4! = 7 \times 6 \times 5$ 로 먼저 줄여 보세요.`],
            explain: R`$\dfrac{7!}{4!\,3!} = \dfrac{7 \times 6 \times 5}{3 \times 2 \times 1} = \dfrac{210}{6} = 35$ 개입니다.`,
            trap: R`분모의 $3!$ 을 빼먹고 $210$ 으로 답하는 실수. 같은 집단 안의 순서는 구분하지 않습니다.`
          }
        },
        {
          type: "explain", title: "순위 매기기와 순위합",
          body: R`두 표본을 **합친 뒤** 전체 자료에 작은 값부터 $1, 2, \ldots, n$ 의 순위를 줍니다. 값이 같으면(**동순위, tie**) 차지한 자리들의 **평균순위**를 똑같이 줘요. 각 표본이 받은 순위를 더한 것이 **순위합** $R_1$, $R_2$ 입니다.

> $R_1 + R_2 = 1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$

두 관측소의 일강수량(mm, 가상 자료)으로 볼게요. A 는 $12, 15, 18, 22, 30$ 이고 B 는 $5, 8, 10, 15, 16$ 입니다. 15가 두 번 나오므로 5위와 6위의 평균인 $5.5$ 를 각각 줍니다.

- $R_1 = 4 + 5.5 + 8 + 9 + 10 = 36.5$ (A)
- $R_2 = 1 + 2 + 3 + 5.5 + 7 = 18.5$ (B)
- 검산: $36.5 + 18.5 = 55 = 10 \times 11 / 2$

표본크기가 다를 수 있으니 **평균 순위** $R_1/n_1$, $R_2/n_2$ 로 비교해요. 여기서는 $7.3$ 과 $3.7$ 이라 A 의 값이 대체로 큽니다. 순위합이 한쪽으로 크게 치우치면 두 표본의 분포가 다르다는 증거예요.`,
          fig: "<svg viewBox='0 0 320 104' role='img' aria-label='합친 자료를 작은 값부터 세운 순위' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' text-anchor='middle'><text x='160' y='12' font-size='10' fill='currentColor'>파랑 = 관측소 A, 테두리 = 관측소 B</text><rect x='6' y='22' width='27' height='36' rx='4' fill='none' stroke='currentColor'/><text x='19.5' y='36' font-size='9' fill='currentColor'>B</text><text x='19.5' y='51' font-size='11' fill='currentColor'>5</text><text x='19.5' y='76' font-size='10' fill='currentColor'>1</text><rect x='37' y='22' width='27' height='36' rx='4' fill='none' stroke='currentColor'/><text x='50.5' y='36' font-size='9' fill='currentColor'>B</text><text x='50.5' y='51' font-size='11' fill='currentColor'>8</text><text x='50.5' y='76' font-size='10' fill='currentColor'>2</text><rect x='68' y='22' width='27' height='36' rx='4' fill='none' stroke='currentColor'/><text x='81.5' y='36' font-size='9' fill='currentColor'>B</text><text x='81.5' y='51' font-size='11' fill='currentColor'>10</text><text x='81.5' y='76' font-size='10' fill='currentColor'>3</text><rect x='99' y='22' width='27' height='36' rx='4' fill='#3b82f6'/><text x='112.5' y='36' font-size='9' fill='#ffffff'>A</text><text x='112.5' y='51' font-size='11' fill='#ffffff'>12</text><text x='112.5' y='76' font-size='10' fill='currentColor'>4</text><rect x='130' y='22' width='27' height='36' rx='4' fill='#3b82f6'/><text x='143.5' y='36' font-size='9' fill='#ffffff'>A</text><text x='143.5' y='51' font-size='11' fill='#ffffff'>15</text><text x='143.5' y='76' font-size='10' fill='currentColor'>5.5</text><rect x='161' y='22' width='27' height='36' rx='4' fill='none' stroke='currentColor'/><text x='174.5' y='36' font-size='9' fill='currentColor'>B</text><text x='174.5' y='51' font-size='11' fill='currentColor'>15</text><text x='174.5' y='76' font-size='10' fill='currentColor'>5.5</text><rect x='192' y='22' width='27' height='36' rx='4' fill='none' stroke='currentColor'/><text x='205.5' y='36' font-size='9' fill='currentColor'>B</text><text x='205.5' y='51' font-size='11' fill='currentColor'>16</text><text x='205.5' y='76' font-size='10' fill='currentColor'>7</text><rect x='223' y='22' width='27' height='36' rx='4' fill='#3b82f6'/><text x='236.5' y='36' font-size='9' fill='#ffffff'>A</text><text x='236.5' y='51' font-size='11' fill='#ffffff'>18</text><text x='236.5' y='76' font-size='10' fill='currentColor'>8</text><rect x='254' y='22' width='27' height='36' rx='4' fill='#3b82f6'/><text x='267.5' y='36' font-size='9' fill='#ffffff'>A</text><text x='267.5' y='51' font-size='11' fill='#ffffff'>22</text><text x='267.5' y='76' font-size='10' fill='currentColor'>9</text><rect x='285' y='22' width='27' height='36' rx='4' fill='#3b82f6'/><text x='298.5' y='36' font-size='9' fill='#ffffff'>A</text><text x='298.5' y='51' font-size='11' fill='#ffffff'>30</text><text x='298.5' y='76' font-size='10' fill='currentColor'>10</text><text x='160' y='96' font-size='10' fill='currentColor'>아래 숫자가 순위 (15 두 개는 평균순위 5.5)</text></svg>"
        },
        {
          type: "check",
          q: {
            id: "statf-07-c02", kind: "num", level: 2, tag: "동순위",
            q: R`표본 A 는 $4, 9, 9, 13$ 이고 표본 B 는 $2, 6, 9, 11, 15$ 입니다. 두 표본을 합쳐 작은 값부터 순위를 매기고 동순위는 평균순위로 처리할 때, **A 의 순위합** $R_A$ 를 구하세요. (정수)`,
            answer: 20, tol: 0.01,
            hints: [R`합친 자료는 $2, 4, 6, 9, 9, 9, 11, 13, 15$ 입니다.`, R`$9$ 세 개는 4, 5, 6번째 자리를 차지하므로 평균순위는 $5$ 입니다.`],
            explain: R`순위는 $2 \to 1$, $4 \to 2$, $6 \to 3$, $9 \to 5$ (세 개 모두), $11 \to 7$, $13 \to 8$, $15 \to 9$ 입니다. A 의 순위합은 $R_A = 2 + 5 + 5 + 8 = 20$ 이에요. B 는 $1 + 3 + 5 + 7 + 9 = 25$ 이고, 합이 $45 = 9 \times 10 / 2$ 로 맞습니다.`,
            trap: R`동순위 다음 값의 순위를 잘못 잇는 실수. $9$ 세 개가 4~6번째를 쓰므로 $11$ 은 7위입니다.`
          }
        },
        {
          type: "explain", title: "Mann-Whitney U 통계량",
          body: R`순위합에서 "그 표본만 따로 놓았을 때의 순위합"을 빼면 **U 통계량**이 됩니다.

> $U_1 = R_1 - \dfrac{n_1}{2}(n_1 + 1) \qquad U_2 = R_2 - \dfrac{n_2}{2}(n_2 + 1)$

$U_1$ 은 두 표본에서 하나씩 뽑아 만든 $n_1 n_2$ 개의 쌍을 모두 맞대결시켰을 때 **A 의 값이 B 의 값보다 큰 쌍의 수**예요. 비기면 $0.5$ 로 셉니다. 어느 쪽으로 계산해도 되고, 두 값은 같은 정보를 담고 있어요.

> $U_1 + U_2 = n_1 n_2$

**자료 오타 주의:** 강의자료 9쪽에는 $R_1 = 4 + 5.5 + 8 + 9 = 26.5$ 라고 적혀 있지만, A 의 다섯 번째 값의 순위 $10$ 이 빠진 오타입니다. 맞는 값은 7쪽과 10쪽에 나온 대로 $R_1 = 4 + 5.5 + 8 + 9 + 10 = 36.5$ 예요.`
        },
        {
          type: "worked", title: "예제: 관측소 A·B 의 U 구하기",
          problem: R`관측소 A 의 일강수량은 $12, 15, 18, 22, 30$ 이고 관측소 B 는 $5, 8, 10, 15, 16$ 입니다 (mm). 순위합은 $R_1 = 36.5$, $R_2 = 18.5$ 입니다. $U_1$, $U_2$ 를 구하고 맞대결로 검산하세요.`,
          steps: [
            {
              ask: "순위합에서 무엇을 빼야 할까요?",
              body: R`각 표본만 따로 놓았을 때의 순위합을 뺍니다. $n_1 = n_2 = 5$ 이므로 둘 다 $\dfrac{5 \times 6}{2} = 15$ 예요. 이 부분은 자료와 상관없이 고정된 값입니다.`
            },
            {
              ask: "U1 과 U2 는 각각 얼마일까요?",
              body: R`$U_1 = 36.5 - 15 = 21.5$, $U_2 = 18.5 - 15 = 3.5$ 입니다.`
            },
            {
              ask: "두 값의 합은 무엇과 같아야 할까요?",
              body: R`$U_1 + U_2 = 21.5 + 3.5 = 25 = 5 \times 5 = n_1 n_2$ 로 맞습니다. 25번의 맞대결에서 나온 점수가 두 관측소에 나뉜 것이기 때문이에요.`
            },
            {
              ask: "A 의 각 값은 B 의 값을 몇 개씩 이길까요?",
              body: R`A 의 $12$ 는 B 의 $5, 8, 10$ 을 이겨 $3$ 점, $15$ 는 셋을 이기고 $15$ 와 비겨 $3.5$ 점, $18, 22, 30$ 은 다섯 개를 모두 이겨 각각 $5$ 점입니다. 합이 $3 + 3.5 + 5 + 5 + 5 = 21.5$ 로 공식의 $U_1$ 과 정확히 같아요.`
            }
          ],
          answer: R`$U_1 = 21.5$, $U_2 = 3.5$ (보통 둘 중 작은 값 $U = 3.5$ 를 검정통계량으로 씁니다)`
        },
        {
          type: "why",
          prompt: R`왜 순위합에서 $\dfrac{n_1(n_1+1)}{2}$ 를 빼면 "A 가 B 를 이긴 횟수"가 남을까요?`,
          answer: R`A 의 값 하나의 순위는 **(자기 앞에 선 B 의 수) + (A 안에서 몇 번째인지)** 로 나뉩니다. 예를 들어 A 의 $18$ 은 순위가 $8$ 인데, 앞에 B 가 $5$ 개 있고 A 중 $3$ 번째라서 $5 + 3 = 8$ 이에요. 동순위인 A 의 $15$ 는 값이 같은 B 의 $15$ 를 $0.5$ 개로 세어 $3.5 + 2 = 5.5$ 가 됩니다.

이것을 A 전체에 대해 더하면 "A 안에서 몇 번째인지"의 합은 항상 $1 + 2 + \cdots + n_1 = \dfrac{n_1(n_1+1)}{2}$ 로 고정됩니다. 그래서 순위합에서 이 고정된 부분을 빼면 앞에 선 B 의 수, 즉 A 가 이긴 횟수만 남아요.`
        },
        {
          type: "explain", title: "귀무분포로 판정하기",
          body: R`$H_0$ 가 참이면 현재의 나눔은 가능한 분할 중 하나일 뿐이에요. 모든 분할에서 통계량을 계산해 쌓으면 **귀무분포**가 되고, 관측값이 이 분포에서 매우 극단적인 위치에 있으면 $H_0$ 를 기각합니다.

관측소 예제의 분할은 $252$ 개입니다. 평균순위 $5.5$ 를 그대로 넣어 모두 세어 보면 $R_1 \ge 36.5$ 인 분할이 $8$ 개이고(강의자료 7쪽), 순위가 대칭이라 반대쪽 $R_1 \le 18.5$ 도 $8$ 개예요.

- 단측: $P = 8/252 \approx 0.032$
- 양측: $P = 16/252 \approx 0.063$

강의자료 33쪽(⑧번 그림)의 $p \approx 14/252 \approx 0.056$ 은 15 동점을 무시한 표준 분포의 값이에요. 이 분포에는 $3.5$ 가 없어서 $U \le 3$ 인 $7$ 개와 반대쪽 $7$ 개를 셉니다. 같은 분포에서 유의수준 5% 의 기각역은 작은 쪽 $U \le 2$ 이고, $U = 3.5$ 는 그 밖에 있어요. 그래서 $0.063$ 과 $0.056$ 어느 쪽으로 봐도 **양측 5% 에서는 $H_0$ 를 기각하지 못합니다.**

그림은 표준 분포로, $12.5$ 근처가 가장 많고 파란 막대가 우리 자료만큼 또는 더 극단적인 경우입니다.`,
          fig: "<svg viewBox='0 0 320 190' role='img' aria-label='두 표본이 5개씩일 때 U 의 귀무분포' xmlns='http://www.w3.org/2000/svg' font-family='sans-serif' text-anchor='middle'><text x='160' y='13' font-size='10' fill='currentColor'>252개 분할의 U 분포 (동순위 무시)</text><rect x='17' y='148.5' width='9' height='6.5' fill='#3b82f6'/><rect x='28' y='148.5' width='9' height='6.5' fill='#3b82f6'/><rect x='39' y='142' width='9' height='13' fill='#3b82f6'/><rect x='50' y='135.5' width='9' height='19.5' fill='#3b82f6'/><rect x='61' y='122.5' width='9' height='32.5' fill='currentColor' opacity='0.35'/><rect x='72' y='109.5' width='9' height='45.5' fill='currentColor' opacity='0.35'/><rect x='83' y='96.5' width='9' height='58.5' fill='currentColor' opacity='0.35'/><rect x='94' y='83.5' width='9' height='71.5' fill='currentColor' opacity='0.35'/><rect x='105' y='64' width='9' height='91' fill='currentColor' opacity='0.35'/><rect x='116' y='51' width='9' height='104' fill='currentColor' opacity='0.35'/><rect x='127' y='38' width='9' height='117' fill='currentColor' opacity='0.35'/><rect x='138' y='31.5' width='9' height='123.5' fill='currentColor' opacity='0.35'/><rect x='149' y='25' width='9' height='130' fill='currentColor' opacity='0.35'/><rect x='160' y='25' width='9' height='130' fill='currentColor' opacity='0.35'/><rect x='171' y='31.5' width='9' height='123.5' fill='currentColor' opacity='0.35'/><rect x='182' y='38' width='9' height='117' fill='currentColor' opacity='0.35'/><rect x='193' y='51' width='9' height='104' fill='currentColor' opacity='0.35'/><rect x='204' y='64' width='9' height='91' fill='currentColor' opacity='0.35'/><rect x='215' y='83.5' width='9' height='71.5' fill='currentColor' opacity='0.35'/><rect x='226' y='96.5' width='9' height='58.5' fill='currentColor' opacity='0.35'/><rect x='237' y='109.5' width='9' height='45.5' fill='currentColor' opacity='0.35'/><rect x='248' y='122.5' width='9' height='32.5' fill='currentColor' opacity='0.35'/><rect x='259' y='135.5' width='9' height='19.5' fill='#3b82f6'/><rect x='270' y='142' width='9' height='13' fill='#3b82f6'/><rect x='281' y='148.5' width='9' height='6.5' fill='#3b82f6'/><rect x='292' y='148.5' width='9' height='6.5' fill='#3b82f6'/><line x1='14' y1='155' x2='306' y2='155' stroke='currentColor'/><text x='21.5' y='168' font-size='9' fill='currentColor'>0</text><text x='76.5' y='168' font-size='9' fill='currentColor'>5</text><text x='131.5' y='168' font-size='9' fill='currentColor'>10</text><text x='186.5' y='168' font-size='9' fill='currentColor'>15</text><text x='241.5' y='168' font-size='9' fill='currentColor'>20</text><text x='296.5' y='168' font-size='9' fill='currentColor'>25</text><text x='160' y='184' font-size='10' fill='currentColor'>U (파랑: U ≤ 3 또는 U ≥ 22, 모두 14개)</text></svg>"
        },
        {
          type: "check",
          q: {
            id: "statf-07-c03", kind: "mcq", level: 2, tag: "교환가능성",
            q: R`두 관측소의 자료($n_1 = n_2 = 5$, $U = 3.5$)에서 동순위를 반영해 $252$ 개 분할을 모두 세어 구한 양측 $p$ 값은 $16/252 \approx 0.063$ 입니다. 유의수준 5% 의 **양측 검정** 결론으로 알맞은 것은?`,
            choices: [
              R`$p \gt 0.05$ 이므로 두 관측소에 차이가 있다고 단정할 수 없다`,
              R`단측 $p \approx 0.032$ 가 $0.05$ 보다 작으므로 양측 검정에서도 $H_0$ 를 기각한다`,
              R`$H_0$ 를 기각하지 못했으므로 두 관측소의 분포가 같다는 것이 증명되었다`,
              R`$U = 3.5$ 가 $0$ 이 아니므로 $H_0$ 를 기각한다`
            ],
            answer: 0,
            hints: [R`양측 검정이면 양측 $p$ 값을 유의수준과 비교합니다.`],
            explain: R`양측 $p \approx 0.063$ 은 $0.05$ 보다 크므로 $H_0$ 를 기각하지 못합니다. 즉 5% 수준에서는 차이가 있다고 단정할 근거가 부족하다는 뜻이에요.`,
            trap: R`기각하지 못한 것을 "같다고 증명했다"로 읽는 실수.`
          }
        },
        {
          type: "explain", title: "표본이 크면 가우시안 근사",
          body: R`표본이 커지면 분할 수가 너무 많아져요. 대략 $n_1 \gt 10$, $n_2 \gt 10$ 이면 $U$ 의 귀무분포를 **가우시안분포**로 근사합니다.

$$\mu_U = \frac{n_1 n_2}{2} \qquad \sigma_U = \left[\frac{n_1 n_2 (n_1 + n_2 + 1)}{12}\right]^{1/2}$$

평균은 직관적이에요. $H_0$ 아래에서 각 쌍에서 A 가 이길 확률이 $1/2$ 이고 쌍이 $n_1 n_2$ 개이니까요.

분산에는 각 비교의 분산 $0.5 \times 0.5 = 0.25$ 뿐 아니라 공분산도 들어갑니다. 같은 A 값(또는 같은 B 값)을 공유하는 두 비교는 함께 1점을 받을 확률이 $1/3$ 이라 공분산이 $1/3 - (1/2)^2 = 1/12$ 이고, 한 쌍마다 이런 상대가 $(n_2 - 1) + (n_1 - 1) = n_1 + n_2 - 2$ 개 있어요.

$$\mathrm{Var}(U_1) = \frac{n_1 n_2}{4} + n_1 n_2 (n_1 + n_2 - 2) \cdot \frac{1}{12} = \frac{n_1 n_2 (n_1 + n_2 + 1)}{12}$$

예를 들어 $n_1 = n_2 = 10$ 이면 $\mu_U = 50$, $\sigma_U = \sqrt{175} \approx 13.2$ 입니다. 판정은 $z = (U - \mu_U)/\sigma_U$ 로 하고, 이때 연속성 보정을 적용할 수도 있어요.`
        },
        {
          type: "worked", title: "예제: 가우시안 근사로 판정하기",
          problem: R`두 독립표본의 크기가 $n_1 = 24$, $n_2 = 25$ 이고 $U = 200$ 입니다. 동순위는 없습니다. 가우시안 근사로 $z$ 를 구하고 유의수준 5% 양측 검정($|z| \gt 1.96$ 이면 기각)으로 판정하세요. 연속성 보정은 하지 않습니다.`,
          steps: [
            {
              ask: "귀무분포의 평균은 얼마일까요?",
              body: R`$\mu_U = \dfrac{24 \times 25}{2} = \dfrac{600}{2} = 300$ 입니다. 차이가 없다면 $600$ 번의 맞대결 중 절반을 이기는 셈이에요.`
            },
            {
              ask: "표준편차는 어떻게 구할까요?",
              body: R`$\sigma_U^2 = \dfrac{24 \times 25 \times (24 + 25 + 1)}{12} = \dfrac{600 \times 50}{12} = 2500$ 이므로 $\sigma_U = \sqrt{2500} = 50$ 입니다.`
            },
            {
              ask: "z 값은 얼마일까요?",
              body: R`$z = \dfrac{200 - 300}{50} = \dfrac{-100}{50} = -2.0$ 입니다.`
            },
            {
              ask: "결론은 무엇일까요?",
              body: R`$|z| = 2.0 \gt 1.96$ 이므로 유의수준 5% 에서 $H_0$ 를 기각합니다. 두 표본이 같은 분포에서 나왔다고 보기 어려워요.`
            }
          ],
          answer: R`$\mu_U = 300$, $\sigma_U = 50$, $z = -2.0$ → $H_0$ 기각`
        },
        {
          type: "explain", title: "동순위 보정",
          body: R`$\sigma_U$ 식은 모든 자료값이 서로 다를 때 정확해요. 같은 값이 많은 **동순위(tie)** 가 생기면 이 식은 **분산을 과대평가**하므로 다음과 같이 보정합니다.

$$\sigma_U = \left[\frac{n_1 n_2 (n_1 + n_2 + 1)}{12} - \frac{n_1 n_2}{12(n_1 + n_2)(n_1 + n_2 - 1)} \sum_{j=1}^{J} (t_j^3 - t_j)\right]^{1/2}$$

$J$ 는 동순위 집단의 수, $t_j$ 는 $j$ 번째 동순위 집단에 포함된 자료의 개수예요. 관측소 예제는 15가 두 번 나오므로 $J = 1$, $t_1 = 2$ 입니다.

값이 하나뿐인 자료는 $t^3 - t = 0$ 이라 보정에 영향을 주지 않아요. 표본이 너무 작아 가우시안 근사가 어려우면 별도의 임계값 표나 정확한 계산법을 사용합니다.

> 순위 부여 → 순위합 → $U$ 통계량 → 귀무분포로 판정`
        },
        {
          type: "check",
          q: {
            id: "statf-07-c04", kind: "num", level: 3, tag: "동순위 보정",
            q: R`관측소 예제($n_1 = n_2 = 5$, 15가 두 번 나와 $J = 1$, $t_1 = 2$)에서 동순위 보정을 적용한 **분산** $\sigma_U^2$ 을 구하세요. (소수 셋째 자리에서 반올림해 둘째 자리까지)`,
            answer: 22.78, tol: 0.01,
            hints: [R`보정 전 분산은 $5 \times 5 \times 11 / 12$ 입니다.`, R`빼는 항은 $\dfrac{25}{12 \times 10 \times 9} \times (2^3 - 2)$ 입니다.`],
            explain: R`보정 전 분산은 $\dfrac{25 \times 11}{12} = \dfrac{275}{12} \approx 22.92$ 입니다. 빼는 항은 $\dfrac{25}{1080} \times 6 = \dfrac{5}{36} \approx 0.14$ 이므로 $\sigma_U^2 = \dfrac{275}{12} - \dfrac{5}{36} = \dfrac{820}{36} = \dfrac{205}{9} \approx 22.78$ 입니다. 표준편차로는 약 $4.79$ 에서 $4.77$ 로 조금 줄어요.`,
            trap: R`$t^3 - t$ 대신 $t$ 만 넣거나, 분모의 $(n_1+n_2-1)$ 을 빠뜨리는 실수.`
          }
        }
      ],
      keypoints: [
        "순위합 검정은 분포를 가정하지 않고 자료값 대신 순위를 쓰는 비모수 검정으로, 독립 2표본 t 검정에 대응한다.",
        "순위를 쓰므로 극단값에 강하고(resistant) t 검정 가정이 맞아도 검정력 손실이 작지만(robust), 검정을 역으로 이용해 신뢰구간을 구하기는 어렵다.",
        "엄밀한 귀무가설은 두 표본이 동일한 분포에서 추출되었다는 것이고, 이때 집단표시를 바꾸어도 되는 성질이 교환가능성이다.",
        "두 표본을 합쳐 작은 값부터 순위를 주고 동순위에는 평균순위를 주며, R1 + R2 = n(n+1)/2 이다.",
        "U1 = R1 - n1(n1+1)/2 는 A 의 값이 B 의 값보다 큰 쌍의 수(비기면 0.5)이고, U1 + U2 = n1 n2 이다.",
        "귀무분포는 가능한 모든 분할 n!/(n1! n2!) 에서 계산한 통계량의 분포이고, 관측값이 극단적이면 귀무가설을 기각한다.",
        "표본이 크면 U 는 평균 n1 n2 / 2, 분산 n1 n2 (n1+n2+1) / 12 인 가우시안분포로 근사한다.",
        "동순위가 많으면 기본 분산식이 분산을 과대평가하므로 t^3 - t 의 합을 이용한 보정식을 쓴다."
      ],
      bank: [
        {
          id: "statf-07-b01", kind: "mcq", level: 1, tag: "교환가능성",
          q: R`Wilcoxon-Mann-Whitney 순위합 검정의 **엄밀한** 귀무가설은?`,
          choices: [
            R`두 표본의 표본평균이 같다`,
            R`두 표본의 중앙값이 같다`,
            R`두 표본이 동일한 분포에서 추출되었다`,
            R`두 표본의 분산이 같다`
          ],
          answer: 2,
          hints: [R`집단 이름표를 서로 바꾸어도 괜찮으려면 두 집단이 어떤 관계여야 할까요?`],
          explain: R`엄밀한 귀무가설은 "두 표본이 동일한 분포에서 추출되었다"입니다. 그래야 집단표시를 바꾸어도 되는 교환가능성이 성립해요.`,
          trap: R`흔한 설명인 "중앙값이 같다"를 엄밀한 귀무가설로 착각하는 실수.`
        },
        {
          id: "statf-07-b02", kind: "mcq", level: 1, tag: "순위합",
          q: R`강의에서 순위합 검정을 **resistant** 하다고 한 것은 어떤 성질을 뜻하나요?`,
          choices: [
            R`극단값이 몇 개 있어도 결과가 크게 변하지 않는다`,
            R`$t$ 검정의 가정이 만족될 때도 검정력이 크게 떨어지지 않는다`,
            R`귀무가설 아래에서 집단표시를 서로 바꾸어도 된다`,
            R`검정을 역으로 이용해 신뢰구간을 쉽게 구할 수 있다`
          ],
          answer: 0,
          hints: [R`가장 큰 값이 $30$ 이든 $300$ 이든 순위가 같다는 예를 떠올려 보세요.`],
          explain: R`resistant 는 극단값에 강하다는 뜻입니다. 순위는 값의 크기를 버리고 순서만 남기므로 극단값 몇 개에 결과가 흔들리지 않아요.`
        },
        {
          id: "statf-07-b03", kind: "num", level: 1, tag: "순위합",
          q: R`표본크기 $n_1 = 5$, $n_2 = 7$ 인 두 표본을 합쳐 순위를 매겼더니 $R_1 = 25$ 였습니다. $R_2$ 를 구하세요. (정수)`,
          answer: 53, tol: 0.01,
          hints: [R`전체 자료 수는 $n = 12$ 입니다.`, R`$R_1 + R_2 = n(n+1)/2$ 를 이용하세요.`],
          explain: R`$R_1 + R_2 = \dfrac{12 \times 13}{2} = 78$ 이므로 $R_2 = 78 - 25 = 53$ 입니다.`,
          trap: R`$n$ 에 전체 자료 수가 아닌 한 표본의 크기를 넣는 실수.`
        },
        {
          id: "statf-07-b04", kind: "mcq", level: 1, tag: "U 통계량",
          q: R`표본 A, B 의 크기가 각각 $5$ 이고 동순위가 없습니다. A 를 기준으로 계산한 $U_A = 0$ 이면 어떤 상황인가요?`,
          choices: [
            R`A 와 B 의 값이 골고루 섞여 차이가 전혀 없다`,
            R`A 의 모든 값이 B 의 모든 값보다 크다`,
            R`A 의 순위합이 $0$ 이다`,
            R`A 의 모든 값이 B 의 모든 값보다 작다`
          ],
          answer: 3,
          hints: [R`$U_A$ 는 A 의 값이 B 의 값보다 큰 쌍의 수입니다.`],
          explain: R`$U_A = 0$ 은 25번의 맞대결에서 A 가 한 번도 이기지 못했다는 뜻입니다. 즉 작은 값부터 줄을 세우면 A 5개가 모두 앞에, B 5개가 모두 뒤에 서서 두 집단이 완전히 갈린 상태예요.`
        },
        {
          id: "statf-07-b05", kind: "num", level: 2, tag: "동순위",
          q: R`표본 A 는 $3, 7, 7, 12$ 이고 표본 B 는 $5, 7, 9, 14$ 입니다. 합쳐서 작은 값부터 순위를 매기고 동순위는 평균순위로 처리할 때 **A 의 순위합** $R_A$ 를 구하세요. (정수)`,
          answer: 16, tol: 0.01,
          hints: [R`합친 자료는 $3, 5, 7, 7, 7, 9, 12, 14$ 입니다.`, R`$7$ 세 개는 3, 4, 5번째 자리이므로 평균순위는 $4$ 입니다.`],
          explain: R`순위는 $3 \to 1$, $5 \to 2$, $7 \to 4$ (세 개 모두), $9 \to 6$, $12 \to 7$, $14 \to 8$ 입니다. $R_A = 1 + 4 + 4 + 7 = 16$ 이고, $R_B = 2 + 4 + 6 + 8 = 20$ 으로 합이 $36 = 8 \times 9 / 2$ 입니다.`,
          trap: R`A 에 $7$ 이 두 개라고 해서 A 끼리만 평균을 내는 실수. 동순위는 두 표본을 합친 전체에서 처리합니다.`
        },
        {
          id: "statf-07-b06", kind: "num", level: 2, tag: "U 통계량",
          q: R`표본 A 는 $3, 7, 7, 12$ 이고 표본 B 는 $5, 7, 9, 14$ 이며 $R_A = 16$ 입니다. A 기준 통계량 $U_A$ 를 구하세요. (필요하면 소수 첫째 자리까지)`,
          answer: 6, tol: 0.01,
          hints: [R`$U_A = R_A - n_A(n_A + 1)/2$ 입니다.`, R`$n_A = 4$ 이므로 빼는 값은 $10$ 입니다.`],
          explain: R`$U_A = 16 - \dfrac{4 \times 5}{2} = 6$ 입니다. 맞대결로 검산하면 $3$ 은 $0$ 점, $7$ 은 $5$ 를 이기고 $7$ 과 비겨 $1.5$ 점씩, $12$ 는 $5, 7, 9$ 를 이겨 $3$ 점이므로 $0 + 1.5 + 1.5 + 3 = 6$ 입니다.`,
          trap: R`$n(n+1)/2$ 의 $n$ 에 전체 자료 수 $8$ 을 넣는 실수.`
        },
        {
          id: "statf-07-b07", kind: "mcq", level: 2, tag: "U 통계량",
          q: R`표본크기가 $n_1 = 6$, $n_2 = 8$ 이고 $U_1 = 13$ 입니다. $U_2$ 는?`,
          choices: [R`$13$`, R`$35$`, R`$48$`, R`$61$`],
          answer: 1,
          hints: [R`두 $U$ 의 합은 전체 맞대결 수입니다.`],
          explain: R`$U_1 + U_2 = n_1 n_2 = 48$ 이므로 $U_2 = 48 - 13 = 35$ 입니다.`
        },
        {
          id: "statf-07-b08", kind: "num", level: 2, tag: "교환가능성",
          q: R`표본크기가 $n_1 = 3$, $n_2 = 5$ 일 때 합친 자료를 3개와 5개로 나누는 서로 다른 분할은 모두 몇 개인가요? (정수)`,
          answer: 56, tol: 0.01, unit: "개",
          hints: [R`$8!/(3!\,5!)$ 을 계산하세요.`, R`$8!/5! = 8 \times 7 \times 6$ 으로 먼저 줄이세요.`],
          explain: R`$\dfrac{8!}{3!\,5!} = \dfrac{8 \times 7 \times 6}{3 \times 2 \times 1} = \dfrac{336}{6} = 56$ 개입니다.`
        },
        {
          id: "statf-07-b09", kind: "num", level: 2, tag: "가우시안 근사",
          q: R`$n_1 = 12$, $n_2 = 15$ 일 때 귀무가설 아래에서 $U$ 의 평균 $\mu_U$ 를 구하세요. (정수)`,
          answer: 90, tol: 0.01,
          hints: [R`각 쌍에서 A 가 이길 확률은 $1/2$ 입니다.`],
          explain: R`$\mu_U = \dfrac{n_1 n_2}{2} = \dfrac{12 \times 15}{2} = 90$ 입니다.`,
          trap: R`2로 나누는 것을 잊고 쌍의 수 $180$ 을 답하는 실수.`
        },
        {
          id: "statf-07-b10", kind: "num", level: 2, tag: "가우시안 근사",
          q: R`$n_1 = 15$, $n_2 = 20$ 이고 동순위가 없을 때 $U$ 의 표준편차 $\sigma_U$ 를 구하세요. (정수)`,
          answer: 30, tol: 0.01,
          hints: [R`$\sigma_U^2 = n_1 n_2 (n_1 + n_2 + 1) / 12$ 입니다.`, R`$n_1 + n_2 + 1 = 36$ 이므로 $36/12 = 3$ 으로 먼저 줄이세요.`],
          explain: R`$\sigma_U^2 = \dfrac{15 \times 20 \times 36}{12} = 300 \times 3 = 900$ 이므로 $\sigma_U = 30$ 입니다.`,
          trap: R`제곱근을 씌우지 않고 분산 $900$ 을 답하는 실수.`
        },
        {
          id: "statf-07-b11", kind: "num", level: 3, tag: "가우시안 근사",
          q: R`$n_1 = 15$, $n_2 = 20$, 동순위 없음, 관측된 $U = 96$ 입니다. 연속성 보정 없이 $z = (U - \mu_U)/\sigma_U$ 를 부호까지 구하세요. (소수 첫째 자리까지)`,
          answer: -1.8, tol: 0.01,
          hints: [R`$\mu_U = 150$ 입니다.`, R`$\sigma_U^2 = 15 \times 20 \times 36 / 12 = 900$ 입니다.`],
          explain: R`$\mu_U = 150$, $\sigma_U = 30$ 이므로 $z = \dfrac{96 - 150}{30} = -1.8$ 입니다. $|z| \lt 1.96$ 이므로 유의수준 5% 양측 검정에서는 $H_0$ 를 기각하지 못해요.`,
          trap: R`분모에 표준편차 대신 분산 $900$ 을 넣는 실수.`
        },
        {
          id: "statf-07-b12", kind: "num", level: 3, tag: "동순위 보정",
          q: R`$n_1 = n_2 = 6$ 인 자료에 동순위 집단이 두 개 있고, 각 집단의 자료 수는 $t_1 = 4$, $t_2 = 2$ 입니다. 동순위 보정을 적용한 분산 $\sigma_U^2$ 을 구하세요. (소수 첫째 자리까지)`,
          answer: 37.5, tol: 0.01,
          hints: [R`보정 전 분산은 $6 \times 6 \times 13 / 12 = 39$ 입니다.`, R`$\sum (t_j^3 - t_j) = 60 + 6 = 66$ 이고, 앞의 계수는 $\dfrac{36}{12 \times 12 \times 11} = \dfrac{1}{44}$ 입니다.`],
          explain: R`보정 전 분산은 $39$ 입니다. 빼는 항은 $\dfrac{36}{12 \times 12 \times 11} \times (60 + 6) = \dfrac{66}{44} = 1.5$ 이므로 $\sigma_U^2 = 39 - 1.5 = 37.5$ 입니다.`,
          trap: R`$t^3 - t$ 를 집단별로 따로 계산해 더하지 않고, $t$ 를 먼저 더해 $6^3 - 6$ 으로 계산하는 실수.`
        },
        {
          id: "statf-07-b13", kind: "mcq", level: 3, tag: "교환가능성",
          q: R`$n_1 = n_2 = 3$ 이고 표본 A 의 세 값이 표본 B 의 세 값보다 **모두 큽니다** (동순위 없음). 귀무분포를 직접 세어 구한 **양측** $p$ 값과 유의수준 5% 의 결론은?`,
          choices: [
            R`$p = 0.05$ 이므로 경계에서 $H_0$ 를 기각한다`,
            R`$p = 0.025$ 이므로 $H_0$ 를 기각한다`,
            R`$p = 0.10$ 이므로 $H_0$ 를 기각하지 못한다`,
            R`$p \approx 0.33$ 이므로 $H_0$ 를 기각하지 못한다`
          ],
          answer: 2,
          hints: [R`가능한 분할은 $6!/(3!\,3!)$ 개입니다.`, R`양측이면 "A 가 모두 큼"과 "A 가 모두 작음"을 함께 셉니다.`],
          explain: R`분할은 $\dfrac{6!}{3!\,3!} = 20$ 개이고, 이만큼 극단적인 경우는 A 가 모두 큰 경우와 모두 작은 경우의 $2$ 개입니다. 따라서 양측 $p = 2/20 = 0.10$ 으로 $0.05$ 보다 커서 $H_0$ 를 기각하지 못해요. 표본이 너무 작으면 완전히 갈려도 5% 양측 유의성에 닿을 수 없습니다.`,
          trap: R`완전히 갈렸으니 무조건 유의하다고 생각하는 실수.`
        },
        {
          id: "statf-07-b14", kind: "short", level: 3, tag: "U 통계량",
          q: R`순위합 $R_1$ 에서 $\dfrac{n_1(n_1+1)}{2}$ 를 뺀 $U_1$ 이 왜 "A 의 값이 B 의 값보다 큰 쌍의 수"가 되는지 설명하세요.`,
          answer: R`A 의 각 값의 순위는 그 값 앞에 선 B 의 수와 A 안에서의 순서를 더한 것입니다. A 전체에 대해 더하면 A 안에서의 순서의 합은 항상 $1 + 2 + \cdots + n_1 = n_1(n_1+1)/2$ 로 고정되므로, 이것을 $R_1$ 에서 빼면 각 A 값 앞에 선 B 의 수의 합, 즉 A 가 B 보다 큰 쌍의 수만 남습니다.`,
          rubric: [
            "한 값의 순위를 앞에 선 상대 표본의 수와 자기 표본 안의 순서로 나누었다",
            "자기 표본 안의 순서의 합이 n1(n1+1)/2 로 고정됨을 말했다",
            "빼고 남는 값이 A 가 B 를 이긴 쌍의 수임을 말했다"
          ],
          hints: [R`관측소 예제에서 A 의 $18$ 은 순위 $8$ 인데, 앞에 B 가 5개 있고 A 중 3번째입니다.`],
          explain: R`순위를 "앞에 선 상대 수 + 내 표본 안의 순서"로 분해하는 것이 핵심입니다. 내 표본 안의 순서 합은 자료와 무관한 상수이므로, 그 상수를 빼면 맞대결 승수만 남아요. 비긴 쌍은 평균순위 덕분에 $0.5$ 로 계산됩니다.`
        }
      ]
    }
  );
})();
