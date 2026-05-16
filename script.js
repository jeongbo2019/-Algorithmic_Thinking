// 1. 문제 정보 및 맞춤형 문제별 일러스트(SVG) 데이터베이스 정의
const bebrasDatabase = {
    easy: {
        title: "이상한 화폐 계산법 🪙",
        difficulty: "하 (Easy) - 정보의 표현",
        color: "#10b981",
        svg: `
            <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="90" width="220" height="15" rx="5" fill="#64748b"/>
                <line x1="120" y1="30" x2="120" y2="90" stroke="#475569" stroke-width="6"/>
                <path d="M70,30 L170,30" stroke="#475569" stroke-width="4"/>
                <circle cx="70" cy="55" r="20" fill="#f59e0b" opacity="0.8"/>
                <text x="70" y="60" font-size="12" font-weight="bold" text-anchor="middle" fill="white">27</text>
                <circle cx="170" cy="55" r="16" fill="#10b981" opacity="0.8"/>
                <text x="170" y="60" font-size="11" font-weight="bold" text-anchor="middle" fill="white">21+9</text>
            </svg>
        `,
        story: "비버 델릴라는 물건을 사고 정확히 <strong>21 비버코인</strong>을 지불하려고 합니다. 오늘 델릴라와 상점 주인은 각각 <strong>1원, 3원, 9원, 27원</strong>짜리 동전을 <strong>딱 1개씩만</strong> 가지고 있습니다. 거스름돈을 주고받는 행위도 가능합니다.",
        question: "델릴라가 물건값 21 비버코인을 정확하게 지불하기 위해 점원과 동전을 어떤 방식으로 주고받아야 할까요?",
        options: [
            { id: "1", text: "① 27원과 3원을 점원에게 주고, 9원을 거스름돈으로 돌려받는다." },
            { id: "2", text: "② 9원짜리 2개와 3원짜리 1개를 조합하여 지불한다." },
            { id: "3", text: "③ 27원을 점원에게 지불하고 남은 6원은 다른 물건으로 받아온다." },
            { id: "4", text: "④ 동전이 1개씩뿐이므로 어떤 방법으로도 21원은 정확히 만들 수 없다." }
        ],
        correct: "1",
        customVisual: `
            <div class="coin-info-box">
                <div class="info-item">🪙 27원 자릿수</div>
                <div class="info-item">🪙 9원 자릿수</div>
                <div class="info-item">🪙 3원 자릿수</div>
                <div class="info-item">🪙 1원 자릿수</div>
            </div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>①번 (27 + 3 - 9 = 21)</strong> 입니다. 동전을 무조건 주기만 하는 것이 아니라, 거스름돈을 통해 값을 차감(-)하는 역방향 절차적 사고를 요구하는 변별력 있는 문제입니다. ②번은 동전이 종류별로 한 개씩만 있다는 규칙에 위배됩니다.</p>
            <h4>🖥️ 컴퓨터 과학 개념 (균형 삼진법)</h4>
            <p>이 문제는 자릿수 가중치가 3의 거듭제곱이면서 각 자리의 값이 [+1(주기), 0(안 쓰기), -1(받기)] 상태를 가지는 <strong>'균형 삼진법(Balanced Ternary)'</strong>의 계산 논리를 담고 있습니다. 이는 초창기 삼진법 컴퓨터의 데이터 연산 최적화 설계의 모태가 되었습니다.</p>
        `,
        hint: "동전을 점원에게 내밀기만(+ 연산) 해야 할까요? 점원에게 거스름돈으로 돌려받는 것(- 연산)도 수식의 한 부분입니다!"
    },
    medium: {
        title: "스마트 사과 포장 창고 🍎",
        difficulty: "중 (Medium) - 데이터 표현",
        color: "#f59e0b",
        svg: `
            <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                <g fill="#b45309" stroke="#78350f" stroke-width="2">
                    <rect x="15" y="45" width="30" height="30" rx="3"/>
                    <rect x="55" y="40" width="35" height="35" rx="3"/>
                    <rect x="100" y="35" width="40" height="40" rx="3"/>
                    <rect x="150" y="30" width="45" height="45" rx="3"/>
                </g>
                <text x="30" y="100" font-size="11" text-anchor="middle" font-weight="bold">1개</text>
                <text x="72" y="100" font-size="11" text-anchor="middle" font-weight="bold">2개</text>
                <text x="120" y="100" font-size="11" text-anchor="middle" font-weight="bold">4개</text>
                <text x="172" y="100" font-size="11" text-anchor="middle" font-weight="bold">8개...</text>
                <circle cx="120" cy="55" r="8" fill="#ef4444"/>
            </svg>
        `,
        story: "비버가 수확한 사과 31개를 5개의 상자에 담아 못을 박아 밀봉했습니다. 비버의 목표는 향후 손님이 1개부터 31개 사이 중 어떤 개수의 사과를 요구하더라도, <strong>상자를 뜯지 않고 일부 상자 통째로만 조합해서 정확한 개수를 맞추어 배달</strong>하는 것입니다.",
        question: "손님이 원하는 모든 경우의 수에 대응하기 위해 비버는 5개의 상자에 사과를 각각 몇 개씩 나누어 담아야 할까요?",
        options: [
            { id: "1", text: "①번 구성: [ 1개, 3개, 6개, 9개, 12개 ] (2개를 채울 수 없음)" },
            { id: "2", text: "②번 구성: [ 1개, 2개, 4개, 8개, 16개 ] (정답)" },
            { id: "3", text: "③번 구성: [ 6개, 6개, 6개, 6개, 7개 ] (소량 주문 대응 불가)" },
            { id: "4", text: "④번 구성: [ 1개, 2개, 3개, 4개, 5개 ] (전체 합이 15개로 부족함)" }
        ],
        correct: "2",
        customVisual: `
            <div class="visual-title">🔬 [실험도구] 상자 조합을 클릭하여 진짜 모든 숫자가 나오는지 확인해 보세요:</div>
            <div class="apple-box-wrapper">
                <div class="apple-box-item" data-val="1">📦 1개</div>
                <div class="apple-box-item" data-val="2">📦 2개</div>
                <div class="apple-box-item" data-val="4">📦 4개</div>
                <div class="apple-box-item" data-val="8">📦 8개</div>
                <div class="apple-box-item" data-val="16">📦 16개</div>
            </div>
            <div class="live-counter">🧺 선택된 상자의 사과 합계: <span id="live-sum">0</span>개</div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>②번 [1, 2, 4, 8, 16]</strong> 입니다. 이 숫자 조합을 사용하면 1부터 31까지의 어떠한 정수도 단 한 가지의 유일한 조합으로 다 쪼개어 표현해 낼 수 있습니다. (예: 13개 = 8 + 4 + 1 상자)</p>
            <h4>🖥️ 컴퓨터 과학 개념 (이진법과 비트)</h4>
            <p>이 상자들은 컴퓨터 데이터 저장의 최소 단위인 <strong>비트(Bit)</strong>와 이진법을 나타냅니다. 각 상자를 선택한다(1), 선택하지 않는다(0)의 두 가지 이진 상태를 조합하면 5개의 비트 정보량만으로 총 32가지(0~31)의 정보를 오차 없이 완벽히 식별·출력할 수 있습니다.</p>
        `,
        hint: "중앙의 사과 상자 실험도구를 교대로 눌러보세요! 수들이 빈틈없이 1부터 차례대로 연속되게 빌드되는 유일한 수의 규칙 집합이 존재합니다."
    },
    hard: {
        title: "자동 조립 기계의 부품 흐름 ⚙️",
        difficulty: "상 (Hard) - 자료구조와 알고리즘",
        color: "#8b5cf6",
        svg: `
            <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="70" x2="220" y2="70" stroke="#475569" stroke-width="4" stroke-dasharray="8,4"/>
                <circle cx="30" cy="70" r="8" fill="#94a3b8"/>
                <circle cx="210" cy="70" r="8" fill="#94a3b8"/>
                <rect x="80" y="25" width="25" height="25" fill="#3b82f6" rx="3"/>
                <text x="92" y="42" font-size="12" fill="white" font-weight="bold" text-anchor="middle">N</text>
                <circle cx="140" cy="37" r="13" fill="#ef4444"/>
                <text x="140" y="41" font-size="12" fill="white" font-weight="bold" text-anchor="middle">B</text>
                <path d="M180,20 L210,20 L210,50 L180,50 Z" fill="none" stroke="#334155" stroke-width="2"/>
                <text x="195" y="40" font-size="10" text-anchor="middle">바구니</text>
            </svg>
        `,
        story: "공장 레일 위로 너트(N)와 볼트(B)가 차례대로 들어옵니다. 규칙은 간단합니다. 너트(N)가 오면 조립 바구니에 일단 담아두고, 볼트(B)가 오면 바구니 안에 쌓여있던 너트(N) 중 하나를 꺼내 즉시 조립시킵니다. 단, 바구니에 너트가 없는데 볼트가 들어오거나, 모든 공급이 끝났는데 바구니에 너트가 남아있으면 공정 에러(실패)가 납니다.",
        question: "부품들이 왼쪽에서 오른쪽 순서대로 투입될 때, 조립 마비(에러) 없이 정상적으로 가동이 완료되는 투입 시퀀스는 무엇일까요?",
        options: [
            { id: "1", text: "①번 순서: N ➔ B ➔ B ➔ N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B (중간에 너트 부족으로 중단)" },
            { id: "2", text: "②번 순서: N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B ➔ B ➔ B ➔ B (종료 직전 볼트 매칭 오류)" },
            { id: "3", text: "③번 순서: N ➔ N ➔ B ➔ N ➔ B ➔ B ➔ N ➔ N ➔ N ➔ B (종료 후 너트가 바구니에 남음)" },
            { id: "4", text: "④번 순서: N ➔ B ➔ N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B ➔ B (완벽한 조립 공정)" }
        ],
        correct: "4",
        customVisual: `
            <div class="coin-info-box">
                <div class="info-item" style="background:#eff6ff; color:#2563eb;">⚙️ 너트(N) = 바구니 넣기 (Push)</div>
                <div class="info-item" style="background:#fef2f2; color:#dc2626;">🔩 볼트(B) = 바구니에서 꺼내 조립 (Pop)</div>
            </div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>④번</strong>입니다. ④번 공정의 흐름대로 바구니 속 너트의 개수 추이를 기록해 보면 [1 ➔ 0 ➔ 1 ➔ 2 ➔ 1 ➔ 2 ➔ 3 ➔ 2 ➔ 1 ➔ 0]으로, 중간에 음수(-1)가 되어 마비되는 지점이 없고 최종 마감 시 정확히 바구니가 비어 성공하게 됩니다.</p>
            <h4>🖥️ 컴퓨터 과학 개념 (스택과 문법 분석)</h4>
            <p>이 알고리즘 문제는 데이터 구조의 기본인 <strong>스택(Stack, 후입선출)</strong> 연산을 시각적으로 표현한 것입니다. 실제 컴파일러나 인터프리터 소스코드가 실행될 때 소스코드 안의 괄호 쌍 <code>( )</code>이나 연산자 매칭 유효성을 프로그램이 실시간으로 검사하는 아키텍처와 동일한 원리입니다.</p>
        `,
        hint: "부품이 순서대로 지나갈 때 머릿속으로 바구니 내부의 너트 개수 누적 현황을 카운팅해 보세요. 단 한 번이라도 마이너스가 되거나, 마지막에 0으로 끝나지 않으면 불량 공정입니다!"
    }
};

// 2. 전역 상태 변수
let activeLevel = "easy";
let currentSelectedOption = null;

// 3. 핵심 화면 렌더링 엔진 함수
function renderBebrasQuiz(levelKey) {
    const data = bebrasDatabase[levelKey];
    activeLevel = levelKey;
    currentSelectedOption = null;

    // 테마 및 헤더 요소 업데이트
    document.querySelector('.quiz-card').style.borderColor = data.color;
    const badge = document.getElementById('quiz-difficulty-badge');
    badge.innerText = data.difficulty;
    badge.style.backgroundColor = data.color;
    
    document.getElementById('quiz-title').innerText = data.title;
    document.getElementById('quiz-story-text').innerHTML = data.story;
    document.getElementById('quiz-question-text').innerText = data.question;
    
    // 맞춤형 그래픽 레이아웃 업데이트
    document.getElementById('quiz-image-zone').innerHTML = data.svg;
    
    // 인터랙티브 조작 교구 구역 바인딩
    const interactiveZone = document.getElementById('interactive-zone');
    interactiveZone.innerHTML = data.customVisual;

    // 중 난이도 사과상자 계산기 초기화
    if (levelKey === "medium") {
        initAppleBoxes();
    }

    // 선지 리스트 바인딩
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

    // 피드백 패널 숨김 리셋
    document.getElementById('feedback-panel').classList.add('hidden');
}

// 4. 사과 상자 시뮬레이션 제어 함수
function initAppleBoxes() {
    const boxes = document.querySelectorAll('.apple-box-item');
    const sumSpan = document.getElementById('live-sum');
    
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('checked');
            
            let sum = 0;
            document.querySelectorAll('.apple-box-item.checked').forEach(cb => {
                sum += parseInt(cb.getAttribute('data-val'));
            });
            sumSpan.innerText = sum;
        });
    });
}

// 5. 초기 이벤트 처리기 바인딩
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const teacherCheckbox = document.getElementById('teacher-mode-checkbox');
    const teacherDashboard = document.getElementById('teacher-dashboard');
    const submitBtn = document.getElementById('submit-answer-btn');
    const feedbackPanel = document.getElementById('feedback-panel');
    const fbIcon = document.getElementById('feedback-icon');
    const fbTitle = document.getElementById('feedback-title');
    const fbContent = document.getElementById('feedback-content');

    // 탭 메뉴 리스너
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderBebrasQuiz(tab.getAttribute('data-level'));
        });
    });

    // 교사용 모드 토글 감지 리스너
    teacherCheckbox.addEventListener('change', () => {
        if (teacherCheckbox.checked) {
            teacherDashboard.classList.remove('hidden');
            submitBtn.innerText = "정답 확인 및 피드백 보기";
        } else {
            teacherDashboard.classList.add('hidden');
            submitBtn.innerText = "정답 제출하기";
        }
        // 모드 전환 시 기존 피드백은 깔끔하게 숨김
        feedbackPanel.classList.add('hidden');
    });

    // 정답 제출 및 보안 제어 처리 리스너
    submitBtn.addEventListener('click', () => {
        if (!currentSelectedOption) {
            alert("정답 보기를 먼저 선택해 주세요! 🤔");
            return;
        }

        const currentData = bebrasDatabase[activeLevel];
        const isTeacherMode = teacherCheckbox.checked;

        feedbackPanel.classList.remove('hidden', 'correct', 'incorrect', 'student-mode');

        if (!isTeacherMode) {
            // [업데이트] 학생 모드: 정답 유출을 막기 위해 단순히 제출되었음만 표기
            feedbackPanel.classList.add('student-mode');
            fbIcon.innerText = "📝";
            fbTitle.innerText = "답안 제출 완료!";
            fbContent.innerHTML = `
                <p>작성한 답안 <strong>${currentSelectedOption}번</strong>이 성공적으로 저장되었습니다.</p>
                <p style="margin-top: 8px; font-size: 0.88rem; color: #475569;">
                    🔒 <strong>보안 안내:</strong> 현재 학생 평가 모드이므로 실시간 정오답 결과는 표시되지 않습니다. 선생님이 수업 중에 <strong>'교사용 모드'</strong>를 켜면 이 자리에 상세 해설판이 열립니다.
                </p>
            `;
        } else {
            // 교사용 모드: 즉시 정오답 유무 판별 및 컴퓨터과학 정교화 피드백 출력
            if (currentSelectedOption === currentData.correct) {
                feedbackPanel.classList.add('correct');
                fbIcon.innerText = "🎉";
                fbTitle.innerText = "정답입니다! (교사용 상세 피드백 활성화)";
                fbContent.innerHTML = currentData.explanation;
            } else {
                feedbackPanel.classList.add('incorrect');
                fbIcon.innerText = "❌";
                fbTitle.innerText = "오답입니다! (교사용 지도 힌트 활성화)";
                fbContent.innerHTML = `
                    <p style="margin-bottom: 8px;"><strong>💡 학생 대상 유도 힌트:</strong> ${currentData.hint}</p>
                    <p style="font-size: 0.85rem; color: #b91c1c; opacity: 0.8;">
                        * 교사용 모드에서는 오답을 눌러도 다른 힌트 시연이 가능하므로 수업 피드백 시 활용하세요.
                    </p>
                `;
            }
        }

        feedbackPanel.scrollIntoView({ behavior: 'smooth' });
    });

    // 최초 로드 ('하' 난이도 세팅)
    renderBebrasQuiz("easy");
});            <p>정답은 <strong>①번 (27 + 3 - 9 = 21)</strong> 입니다. 동전을 무조건 주기만 하는 것이 아니라, 거스름돈을 통해 값을 차감(-)하는 역방향 절차적 사고를 요구하는 변별력 있는 문제입니다. ②번은 동전이 종류별로 한 개씩만 있다는 규칙에 위배됩니다.</p>
            <h4>🖥️ 컴퓨터 과학 개념 (균형 삼진법)</h4>
            <p>이 문제는 자릿수 가중치가 3의 거듭제곱이면서 각 자리의 값이 [+1(주기), 0(안 쓰기), -1(받기)] 상태를 가지는 <strong>'균형 삼진법(Balanced Ternary)'</strong>의 계산 논리를 담고 있습니다. 이는 초창기 삼진법 컴퓨터의 데이터 연산 최적화 설계의 모태가 되었습니다.</p>
        `,
        hint: "동전을 점원에게 내밀기만(+ 연산) 해야 할까요? 점원에게 거스름돈으로 돌려받는 것(- 연산)도 수식의 한 부분입니다!"
    },
    medium: {
        title: "스마트 사과 포장 창고 🍎",
        difficulty: "중 (Medium) - 데이터 표현",
        color: "#f59e0b",
        svg: `
            <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                <g fill="#b45309" stroke="#78350f" stroke-width="2">
                    <rect x="15" y="45" width="30" height="30" rx="3"/>
                    <rect x="55" y="40" width="35" height="35" rx="3"/>
                    <rect x="100" y="35" width="40" height="40" rx="3"/>
                    <rect x="150" y="30" width="45" height="45" rx="3"/>
                </g>
                <text x="30" y="100" font-size="11" text-anchor="middle" font-weight="bold">1개</text>
                <text x="72" y="100" font-size="11" text-anchor="middle" font-weight="bold">2개</text>
                <text x="120" y="100" font-size="11" text-anchor="middle" font-weight="bold">4개</text>
                <text x="172" y="100" font-size="11" text-anchor="middle" font-weight="bold">8개...</text>
                <circle cx="120" cy="55" r="8" fill="#ef4444"/>
            </svg>
        `,
        story: "비버가 수확한 사과 31개를 5개의 상자에 담아 못을 박아 밀봉했습니다. 비버의 목표는 향후 손님이 1개부터 31개 사이 중 어떤 개수의 사과를 요구하더라도, <strong>상자를 뜯지 않고 일부 상자 통째로만 조합해서 정확한 개수를 맞추어 배달</strong>하는 것입니다.",
        question: "손님이 원하는 모든 경우의 수에 대응하기 위해 비버는 5개의 상자에 사과를 각각 몇 개씩 나누어 담아야 할까요?",
        options: [
            { id: "1", text: "①번 구성: [ 1개, 3개, 6개, 9개, 12개 ] (2개를 채울 수 없음)" },
            { id: "2", text: "②번 구성: [ 1개, 2개, 4개, 8개, 16개 ] (정답)" },
            { id: "3", text: "③번 구성: [ 6개, 6개, 6개, 6개, 7개 ] (소량 주문 대응 불가)" },
            { id: "4", text: "④번 구성: [ 1개, 2개, 3개, 4개, 5개 ] (전체 합이 15개로 부족함)" }
        ],
        correct: "2",
        customVisual: `
            <div class="visual-title">🔬 [실험도구] 상자 조합을 클릭하여 진짜 모든 숫자가 나오는지 확인해 보세요:</div>
            <div class="apple-box-wrapper">
                <div class="apple-box-item" data-val="1">📦 1개</div>
                <div class="apple-box-item" data-val="2">📦 2개</div>
                <div class="apple-box-item" data-val="4">📦 4개</div>
                <div class="apple-box-item" data-val="8">📦 8개</div>
                <div class="apple-box-item" data-val="16">📦 16개</div>
            </div>
            <div class="live-counter">🧺 선택된 상자의 사과 합계: <span id="live-sum">0</span>개</div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>②번 [1, 2, 4, 8, 16]</strong> 입니다. 이 숫자 조합을 사용하면 1부터 31까지의 어떠한 정수도 단 한 가지의 유일한 조합으로 다 쪼개어 표현해 낼 수 있습니다. (예: 13개 = 8 + 4 + 1 상자)</p>
            <h4>🖥️ 컴퓨터 과학 개념 (이진법과 비트)</h4>
            <p>이 상자들은 컴퓨터 데이터 저장의 최소 단위인 <strong>비트(Bit)</strong>와 이진법을 나타냅니다. 각 상자를 선택한다(1), 선택하지 않는다(0)의 두 가지 이진 상태를 조합하면 5개의 비트 정보량만으로 총 32가지(0~31)의 정보를 오차 없이 완벽히 식별·출력할 수 있습니다.</p>
        `,
        hint: "중앙의 사과 상자 실험도구를 교대로 눌러보세요! 수들이 빈틈없이 1부터 차례대로 연속되게 빌드되는 유일한 수의 규칙 집합이 존재합니다."
    },
    hard: {
        title: "자동 조립 기계의 부품 흐름 ⚙️",
        difficulty: "상 (Hard) - 자료구조와 알고리즘",
        color: "#8b5cf6",
        svg: `
            <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="70" x2="220" y2="70" stroke="#475569" stroke-width="4" stroke-dasharray="8,4"/>
                <circle cx="30" cy="70" r="8" fill="#94a3b8"/>
                <circle cx="210" cy="70" r="8" fill="#94a3b8"/>
                <rect x="80" y="25" width="25" height="25" fill="#3b82f6" rx="3"/>
                <text x="92" y="42" font-size="12" fill="white" font-weight="bold" text-anchor="middle">N</text>
                <circle cx="140" cy="37" r="13" fill="#ef4444"/>
                <text x="140" y="41" font-size="12" fill="white" font-weight="bold" text-anchor="middle">B</text>
                <path d="M180,20 L210,20 L210,50 L180,50 Z" fill="none" stroke="#334155" stroke-width="2"/>
                <text x="195" y="40" font-size="10" text-anchor="middle">바구니</text>
            </svg>
        `,
        story: "공장 레일 위로 너트(N)와 볼트(B)가 차례대로 들어옵니다. 규칙은 간단합니다. 너트(N)가 오면 조립 바구니에 일단 담아두고, 볼트(B)가 오면 바구니 안에 쌓여있던 너트(N) 중 하나를 꺼내 즉시 조립시킵니다. 단, 바구니에 너트가 없는데 볼트가 들어오거나, 모든 공급이 끝났는데 바구니에 너트가 남아있으면 공정 에러(실패)가 납니다.",
        question: "부품들이 왼쪽에서 오른쪽 순서대로 투입될 때, 조립 마비(에러) 없이 정상적으로 가동이 완료되는 투입 시퀀스는 무엇일까요?",
        options: [
            { id: "1", text: "①번 순서: N ➔ B ➔ B ➔ N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B (중간에 너트 부족으로 중단)" },
            { id: "2", text: "②번 순서: N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B ➔ B ➔ B ➔ B (종료 직전 볼트 매칭 오류)" },
            { id: "3", text: "③번 순서: N ➔ N ➔ B ➔ N ➔ B ➔ B ➔ N ➔ N ➔ N ➔ B (종료 후 너트가 바구니에 남음)" },
            { id: "4", text: "④번 순서: N ➔ B ➔ N ➔ N ➔ B ➔ N ➔ N ➔ B ➔ B ➔ B (완벽한 조립 공정)" }
        ],
        correct: "4",
        customVisual: `
            <div class="coin-info-box">
                <div class="info-item" style="background:#eff6ff; color:#2563eb;">⚙️ 너트(N) = 바구니 넣기 (Push)</div>
                <div class="info-item" style="background:#fef2f2; color:#dc2626;">🔩 볼트(B) = 바구니에서 꺼내 조립 (Pop)</div>
            </div>
        `,
        explanation: `
            <h4>✏️ 문제 핵심 해설</h4>
            <p>정답은 <strong>④번</strong>입니다. ④번 공정의 흐름대로 바구니 속 너트의 개수 추이를 기록해 보면 [1 ➔ 0 ➔ 1 ➔ 2 ➔ 1 ➔ 2 ➔ 3 ➔ 2 ➔ 1 ➔ 0]으로, 중간에 음수(-1)가 되어 마비되는 지점이 없고 최종 마감 시 정확히 바구니가 비어 성공하게 됩니다.</p>
            <h4>🖥️ 컴퓨터 과학 개념 (스택과 문법 분석)</h4>
            <p>이 알고리즘 문제는 데이터 구조의 기본인 <strong>스택(Stack, 후입선출)</strong> 연산을 시각적으로 표현한 것입니다. 실제 컴파일러나 인터프리터 소스코드가 실행될 때 소스코드 안의 괄호 쌍 <code>( )</code>이나 연산자 매칭 유효성을 프로그램이 실시간으로 검사하는 아키텍처와 동일한 원리입니다.</p>
        `,
        hint: "부품이 순서대로 지나갈 때 머릿속으로 바구니 내부의 너트 개수 누적 현황을 카운팅해 보세요. 단 한 번이라도 마이너스가 되거나, 마지막에 0으로 끝나지 않으면 불량 공정입니다!"
    }
};

// 2. 전역 상태 변수
let activeLevel = "easy";
let currentSelectedOption = null;

// 3. 핵심 화면 렌더링 엔진 함수
function renderBebrasQuiz(levelKey) {
    const data = bebrasDatabase[levelKey];
    activeLevel = levelKey;
    currentSelectedOption = null;

    // 테마 및 헤더 요소 업데이트
    document.querySelector('.quiz-card').style.borderColor = data.color;
    const badge = document.getElementById('quiz-difficulty-badge');
    badge.innerText = data.difficulty;
    badge.style.backgroundColor = data.color;
    
    document.getElementById('quiz-title').innerText = data.title;
    document.getElementById('quiz-story-text').innerHTML = data.story;
    document.getElementById('quiz-question-text').innerText = data.question;
    
    // 맞춤형 그래픽 레이아웃 업데이트
    document.getElementById('quiz-image-zone').innerHTML = data.svg;
    
    // 인터랙티브 조작 교구 구역 바인딩
    const interactiveZone = document.getElementById('interactive-zone');
    interactiveZone.innerHTML = data.customVisual;

    // 중 난이도 사과상자 계산기 초기화
    if (levelKey === "medium") {
        initAppleBoxes();
    }

    // 선지 리스트 바인딩
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

    // 피드백 패널 숨김 리셋
    document.getElementById('feedback-panel').classList.add('hidden');
}

// 4. 사과 상자 시뮬레이션 제어 함수
function initAppleBoxes() {
    const boxes = document.querySelectorAll('.apple-box-item');
    const sumSpan = document.getElementById('live-sum');
    
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('checked');
            
            let sum = 0;
            document.querySelectorAll('.apple-box-item.checked').forEach(cb => {
                sum += parseInt(cb.getAttribute('data-val'));
            });
            sumSpan.innerText = sum;
        });
    });
}

// 5. 초기 이벤트 처리기 바인딩
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const teacherCheckbox = document.getElementById('teacher-mode-checkbox');
    const teacherDashboard = document.getElementById('teacher-dashboard');
    const submitBtn = document.getElementById('submit-answer-btn');
    const feedbackPanel = document.getElementById('feedback-panel');
    const fbIcon = document.getElementById('feedback-icon');
    const fbTitle = document.getElementById('feedback-title');
    const fbContent = document.getElementById('feedback-content');

    // 탭 메뉴 리스너
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderBebrasQuiz(tab.getAttribute('data-level'));
        });
    });

    // 교사용 모드 토글 감지 리스너 (비밀번호 "7777" 검증 추가 완료)
    teacherCheckbox.addEventListener('change', () => {
        if (teacherCheckbox.checked) {
            // 1. 스위치를 켤 때 사용자에게 비밀번호 입력을 요구합니다.
            const password = prompt("교사용 모드 진입을 위한 비밀번호 4자리를 입력하세요.🔑");
            
            // 2. 입력한 비밀번호가 "7777"과 일치하는지 확인합니다.
            if (password === "7777") {
                alert("🔓 교사용 인증에 성공했습니다.");
                teacherDashboard.classList.remove('hidden');
                submitBtn.innerText = "정답 확인 및 피드백 보기";
            } else {
                // 3. 틀렸을 경우 알림을 띄우고 스위치를 강제로 다시 끕니다.
                alert("❌ 비밀번호가 틀렸습니다. 교사용 인증 실패!");
                teacherCheckbox.checked = false; 
                teacherDashboard.classList.add('hidden');
                submitBtn.innerText = "정답 제출하기";
            }
        } else {
            // 스위치를 끌 때는 비밀번호를 묻지 않고 바로 비활성화합니다.
            teacherDashboard.classList.add('hidden');
            submitBtn.innerText = "정답 제출하기";
        }
        // 모드 전환 시 기존에 띄워져 있던 결과창은 숨깁니다.
        feedbackPanel.classList.add('hidden');
    });

    // 정답 제출 및 보안 제어 처리 리스너
    submitBtn.addEventListener('click', () => {
        if (!currentSelectedOption) {
            alert("정답 보기를 먼저 선택해 주세요! 🤔");
            return;
        }

        const currentData = bebrasDatabase[activeLevel];
        const isTeacherMode = teacherCheckbox.checked;

        feedbackPanel.classList.remove('hidden', 'correct', 'incorrect', 'student-mode');

        if (!isTeacherMode) {
            // 학생 모드: 정답 유출을 막기 위해 단순히 제출되었음만 표기
            feedbackPanel.classList.add('student-mode');
            fbIcon.innerText = "📝";
            fbTitle.innerText = "답안 제출 완료!";
            fbContent.innerHTML = `
                <p>작성한 답안 <strong>${currentSelectedOption}번</strong>이 성공적으로 저장되었습니다.</p>
                <p style="margin-top: 8px; font-size: 0.88rem; color: #475569;">
                    🔒 <strong>보안 안내:</strong> 현재 학생 평가 모드이므로 실시간 정오답 결과는 표시되지 않습니다. 선생님이 수업 중에 <strong>'교사용 모드'</strong>를 켜면 이 자리에 상세 해설판이 열립니다.
                </p>
            `;
        } else {
            // 교사용 모드: 즉시 정오답 유무 판별 및 피드백 출력
            if (currentSelectedOption === currentData.correct) {
                feedbackPanel.classList.add('correct');
                fbIcon.innerText = "🎉";
                fbTitle.innerText = "정답입니다! (교사용 상세 피드백 활성화)";
                fbContent.innerHTML = currentData.explanation;
            } else {
                feedbackPanel.classList.add('incorrect');
                fbIcon.innerText = "❌";
                fbTitle.innerText = "오답입니다! (교사용 지도 힌트 활성화)";
                fbContent.innerHTML = `
                    <p style="margin-bottom: 8px;"><strong>💡 학생 대상 유도 힌트:</strong> ${currentData.hint}</p>
                    <p style="font-size: 0.85rem; color: #b91c1c; opacity: 0.8;">
                        * 교사용 모드에서는 오답을 눌러도 다른 힌트 시연이 가능하므로 수업 피드백 시 활용하세요.
                    </p>
                `;
            }
        }

        feedbackPanel.scrollIntoView({ behavior: 'smooth' });
    });

    // 최초 로드 ('하'
