// 1. 가이드북 연계 난이도별 문제 공통 데이터셋 정의
const bebrasDatabase = {
    easy: {
        title: "이상한 화폐 계산법 🪙",
        difficulty: "하 (Easy) - 정보의 표현",
        color: "#4caf50",
        story: "비버 델릴라(Delilah)는 댐을 강화하기 위해 로프를 사려고 합니다. 로프 가격은 정확히 <strong>21 비버코인</strong>입니다. 현재 마을에는 <strong>1원, 3원, 9원, 27원</strong>짜리 동전만 유통되며, 오늘 델릴라와 점원은 각각 이 네 종류의 동전을 <strong>단 1개씩만</strong> 지갑에 가지고 있습니다. 잔돈 거래 수단은 오직 이 동전들뿐입니다.",
        question: "❓ 델릴라가 물건값 21 비버코인을 정확하게 지불하기 위해 점원과 동전을 어떻게 주고받아야 할까요?",
        options: [
            { id: "1", text: "① 27원과 3원을 점원에게 주고, 9원을 거스름돈으로 돌려받는다." },
            { id: "2", text: "② 9원짜리 2개와 3원짜리 1개를 조합하여 지불한다." },
            { id: "3", text: "③ 27원을 점원에게 지불하고 6원을 다른 물품으로 대신 받아온다." },
            { id: "4", text: "④ 각 종류별 동전이 1개씩뿐이므로 무슨 수를 써도 21원은 지불 불가능하다." }
        ],
        correct: "1",
        customVisual: `
            <div class="visual-title">💡 유통되는 동전 가치 정보 (3의 거듭제곱):</div>
            <div class="coin-container">
                <div class="visual-item">🪙 27원 ($3^3$)</div>
                <div class="visual-item">🪙 9원 ($3^2$)</div>
                <div class="visual-item">🪙 3원 ($3^1$)</div>
                <div class="visual-item">🪙 1원 ($3^0$)</div>
            </div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>①번 ($27 + 3 - 9 = 21$)</strong> 입니다. 동전을 내밀기만 하는 것이 아니라 점원이 가진 동전을 '거스름돈' 개념으로 마이너스 연산하는 절차적 조합을 유도하는 문제입니다. ②번은 동전이 1개씩만 있다는 제약 조건에 어긋납니다.</p>
            <h4>🖥️ 컴퓨터 과학 배경지식 (균형 삼진법)</h4>
            <p>이 문제는 컴퓨터가 데이터를 처리하는 수의 표현 원리인 <strong>'균형 삼진법(Balanced Ternary Numeral System)'</strong>에 해당합니다. 일반적인 디지털 컴퓨터는 0과 1의 이진법을 쓰지만, 역사적으로 1958년 모스크바 국립대에서 개발한 '세툰(Setun)' 컴퓨터는 이 균형 삼진법(자리값이 +1, 0, -1 상태를 가짐)을 활용하여 논리 회로를 매우 효율적으로 최적화하기도 했습니다.</p>
        `,
        hint: "동전을 무조건 점원에게 '주기만(+)' 해야 할까요? 점원에게 '돌려받는 것(-)'도 수학적 연산 과정에 포함될 수 있습니다!"
    },
    medium: {
        title: "스마트 사과 포장 공장 🍎",
        difficulty: "중 (Medium) - 데이터 표현과 이진수",
        color: "#3b82f6",
        story: "비버가 사과 31개를 수확해 5개의 상자에 나누어 밀봉 포장했습니다. 상자를 한 번 못 박으면 다시 열어 사과를 쪼갤 수 없습니다. 비버의 목표는 손님이 찾아와 '1개부터 31개 사이의 아무 숫자나' 요구하더라도, <strong>상자 몇 개를 통째로 골라 조합해 넘겨주면 단 한 개의 오차도 없이 그 개수를 즉시 배달</strong>하는 것입니다.",
        question: "❓ 과연 비버는 5개의 상자에 사과를 각각 몇 개씩 나누어 담아야 할까요?",
        options: [
            { id: "1", text: "①번 구성: [ 1개, 3개, 6개, 9개, 12개 ] (2개를 만들 수 없음)" },
            { id: "2", text: "②번 구성: [ 1개, 2개, 4개, 8개, 16개 ] (정답)" },
            { id: "3", text: "③번 구성: [ 6개, 6개, 6개, 6개, 7개 ] (소량 주문 불가)" },
            { id: "4", text: "④번 구성: [ 1개, 2개, 3개, 4개, 5개 ] (총합이 15개뿐이라 부족)" }
        ],
        correct: "2",
        customVisual: `
            <div class="visual-title">🔬 [실험실 고구] 정답 조합(②번) 클릭 테스트 시뮬레이터:</div>
            <div class="apple-box-wrapper">
                <div class="apple-box-item" data-val="1">📦<br>1개</div>
                <div class="apple-box-item" data-val="2">📦<br>2개</div>
                <div class="apple-box-item" data-val="4">📦<br>4개</div>
                <div class="apple-box-item" data-val="8">📦<br>8개</div>
                <div class="apple-box-item" data-val="16">📦<br>16개</div>
            </div>
            <div class="live-counter"> basket 🧺 선택된 사과 총합: <span id="live-sum">0</span>개</div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>②번 [1, 2, 4, 8, 16]</strong> 입니다. 이 수들은 2의 거듭제곱($2^0, 2^1, 2^2, 2^3, 2^4$) 구조입니다. 예를 들어 11개를 달라고 하면 [1 + 2 + 8] 상자를 꺼내어 완벽히 응대할 수 있으며, 다섯 개 상자의 전체 합은 정확히 31개가 됩니다 ($1+2+4+8+16 = 31$).</p>
            <h4>🖥️ 컴퓨터 과학 배경지식 (이진수와 비트)</h4>
            <p>이 문제는 컴퓨터 메모리가 정보를 저장하는 근본 단위인 <strong>이진법(Binary System)</strong>과 <strong>비트(Bit)</strong> 자릿수의 가중치를 상징합니다. 상자를 포함한다(1 / On), 포함하지 않는다(0 / Off)라는 상태 조건을 연결하면 5비트 정보량만으로 0부터 31까지의 모든 숫자를 빈틈없이 중복 없이 고유하게 표현할 수 있음을 체득할 수 있습니다.</p>
        `,
        hint: "화면의 상자들을 직접 클릭해 보세요! 1부터 31까지 구멍 없이 연속적인 정수가 전부 만들어지는 숫자의 마법 같은 규칙성이 숨어 있습니다."
    },
    hard: {
        title: "공장 컨베이어 벨트의 비밀 ⚙️",
        difficulty: "상 (Hard) - 자료구조와 알고리즘",
        color: "#a855f7",
        story: "비버 건설 공장의 브누아(Benoit)는 컨베이어 벨트를 통해 무작위 순서로 밀려오는 너트(N)와 볼트(B)를 조립하는 업무를 맡았습니다. 조립 규칙은 간단합니다.<br>이때 다음과 같은 상황이 발생하면 작업 공정이 마비되어 <strong>실패(오류)</strong> 처리됩니다.<br>1. 볼트(B)를 집었는데, 바구니에 같이 조립할 너트(N)가 한 개도 들어있지 않을 때.<br>2. 벨트의 모든 부품 공급이 끝났는데, 정작 바구니에 짝을 찾지 못한 너트(N)가 남아있을 때.",
        question: "❓ 컨베이어 벨트가 왼쪽에서 오른쪽 방향으로 하나씩 들어옵니다. 브누아가 공정 오류(실패) 없이 완벽하게 조립 완료할 수 있는 부품 공급 순서는 무엇일까요?",
        options: [
            { id: "1", text: "①번 순서: N ➔ B ➔ B ➔ N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B (세 번째 볼트에서 너트 부족)" },
            { id: "2", text: "②번 순서: N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B ➔ B ➔ B ➔ B (마지막 볼트에서 너트 부족)" },
            { id: "3", text: "③번 순서: N ➔ N ➔ B ➔ N ➔ B ➔ B ➔ N ➔ N ➔ N ➔ B (종료 후 바구니에 너트 잔여)" },
            { id: "4", text: "④번 순서: N ➔ B ➔ N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B ➔ B (완벽한 조립)" }
        ],
        correct: "4",
        customVisual: `
            <div class="visual-title">🏭 조립 라인 규칙 규칙: [너트 N] ➔ 바구니 보관 | [볼트 B] ➔ 바구니에서 N 꺼내서 결합</div>
            <div class="conveyor-container">
                <span style="color:#2563eb; font-weight:bold;">[입력 방향]</span> ➔ 🔩N ➔ ⚙️B ➔ 🔩N ➔ 🔩N ➔ ⚙️B ➔ 🔩N ➔ 🔩N ➔ ⚙️B ➔ ⚙️B ➔ ⚙️B
            </div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>④번</strong>입니다. ④번의 공정 흐름을 순서대로 추적하면 다음과 같습니다:
            <ol>
                <li>N 진입 ➔ 바구니에 N 저장 (바구니 잔량: 1)</li>
                <li>B 진입 ➔ 바구니 N 꺼내 조립 (바구니 잔량: 0)</li>
                <li>N, N 진입 ➔ 바구니 연속 저장 (바구니 잔량: 2)</li>
                <li>B 진입 ➔ 1개 조립 (바구니 잔량: 1)</li>
                <li>N, N 진입 ➔ 바구니 저장 (바구니 잔량: 3)</li>
                <li>B, B, B 진입 ➔ 남아있던 3개의 N과 각각 매칭되어 깔끔하게 바구니가 비어 작업 성공!</li>
            </ol>
            </p>
            <h4>🖥️ 컴퓨터 과학 배경지식 (스택과 오토마타)</h4>
            <p>이 문제는 컴퓨터 과학의 기본 자료구조인 <strong>스택(Stack, LIFO - 후입선출)</strong>과 <strong>푸시다운 오토마타(Push-down Automaton, PDA)</strong>의 연산 메커니즘을 시각화한 훌륭한 예시입니다. 프로그래밍 언어에서 코딩을 할 때 괄호 쌍 <code>( )</code>이나 <code>{ }</code>이 문법적으로 올바르게 닫혔는지 컴파일러가 유효성을 검증(Parsing)하는 내부 논리 알고리즘이 바로 이 너트와 볼트 문제의 매칭 방식과 완벽히 동일합니다.</p>
        `,
        hint: "순서대로 부품을 꺼낼 때마다 종이에 바구니 안의 너트 개수를 적어보세요. 숫자가 마이너스(-)가 되거나, 부품 공급이 끝났는데 숫자가 0이 아닌 양수로 남아있으면 공정 오류가 발생한 것입니다!"
    }
};

// 2. 어플리케이션 상태 제어 변수
let activeLevel = "easy";
let currentSelectedOption = null;

// 3. UI 렌더링 동적 제어 함수
function renderBebrasQuiz(levelKey) {
    const data = bebrasDatabase[levelKey];
    activeLevel = levelKey;
    currentSelectedOption = null;

    // 테마 컬러 및 기본 텍스트 렌더링
    document.querySelector('.quiz-card').style.borderColor = data.color;
    const badge = document.getElementById('quiz-difficulty-badge');
    badge.innerText = data.difficulty;
    badge.style.backgroundColor = data.color;
    
    document.getElementById('quiz-title').innerText = data.title;
    document.getElementById('quiz-story-text').innerHTML = data.story;
    document.getElementById('quiz-question-text').innerText = data.question;
    
    // 실험실/시뮬레이션 전용 구역 바인딩
    const interactiveZone = document.getElementById('interactive-zone');
    interactiveZone.innerHTML = data.customVisual;

    // [특수 제어] Medium 단계 사과상자 시뮬레이터 이벤트 바인딩
    if (levelKey === "medium") {
        initAppleBoxes();
    }

    // 선지 리스트 빌드
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";
    
    data.options.forEach(opt => {
        const div = document.createElement('div');
        div.className = "option-card";
        div.innerText = opt.text;
        div.setAttribute('data-id', opt.id);
        
        div.addEventListener('click', () => {
            document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            div.classList.add('selected');
            currentSelectedOption = opt.id;
        });
        
        optionsContainer.appendChild(div);
    });

    // 기존 결과창 초기화
    const feedbackPanel = document.getElementById('feedback-panel');
    feedbackPanel.classList.add('hidden');
    feedbackPanel.classList.remove('correct', 'incorrect');
}

// 4. [Medium 단계 연동] 사과 상자 클릭 합산 시뮬레이터 함수
function initAppleBoxes() {
    const boxes = document.querySelectorAll('.apple-box-item');
    const sumSpan = document.getElementById('live-sum');
    
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('checked');
            
            // 실시간 합산 로직
            let sum = 0;
            document.querySelectorAll('.apple-box-item.checked').forEach(checkedBox => {
                sum += parseInt(checkedBox.getAttribute('data-val'));
            });
            sumSpan.innerText = sum;
        });
    });
}

// 5. 초기 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    // 탭 전환 이벤트 바인딩
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const level = tab.getAttribute('data-level');
            renderBebrasQuiz(level);
        });
    });

    // 정답 제출 제출 이벤트 바인딩
    const submitBtn = document.getElementById('submit-answer-btn');
    const feedbackPanel = document.getElementById('feedback-panel');
    const fbIcon = document.getElementById('feedback-icon');
    const fbTitle = document.getElementById('feedback-title');
    const fbContent = document.getElementById('feedback-content');

    submitBtn.addEventListener('click', () => {
        if (!currentSelectedOption) {
            alert("정답 보기를 먼저 선택한 다음 제출해 주세요! 🤔");
            return;
        }

        const currentData = bebrasDatabase[activeLevel];
        feedbackPanel.classList.remove('hidden', 'correct', 'incorrect');

        // 정답 비교 검증
        if (currentSelectedOption === currentData.correct) {
            feedbackPanel.classList.add('correct');
            fbIcon.innerText = "🎉";
            fbTitle.innerText = "정답입니다! 컴퓨팅 사고력이 매우 뛰어납니다.";
            fbContent.innerHTML = currentData.explanation;
        } else {
            feedbackPanel.classList.add('incorrect');
            fbIcon.innerText = "❌";
            fbTitle.innerText = "아쉽게도 정답이 아닙니다. 다시 생각해 볼까요?";
            fbContent.innerHTML = `
                <p style="margin-bottom: 12px; color: #742a2a;"><strong>💡 선생님의 힌트:</strong> ${currentData.hint}</p>
                <small style="color: #9b2c2c;">* 문제 분석과 힌트를 토대로 보기 문항을 바꾸어 다시 제출할 수 있습니다.</small>
            `;
        }

        // 결과창 자동 스크롤 다운
        feedbackPanel.scrollIntoView({ behavior: 'smooth' });
    });

    // 앱 구동 시 초기 퀴즈 첫 로드 ('하' 난이도)
    renderBebrasQuiz("easy");
});
