// ===== App State =====
const state = {
    currentSection: 'dashboard',
    timerRunning: false, timerSeconds: 1200, timerInterval: null,
    todayMinutes: 0, todayWords: 0, todayQuiz: 0, todayTotal: 0,
    streak: 0, totalXP: 0,
    hiraganaIdx: 0, katakanaIdx: 0,
    hiraganaCorrect: 0, hiraganaWrong: 0,
    katakanaCorrect: 0, katakanaWrong: 0,
    quizQuestions: [], quizIdx: 0, quizScore: 0, quizTotal: 10,
    learnedHiragana: new Set(), learnedKatakana: new Set(),
    studyHistory: {}
};

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupNav();
    setupDashboard();
    setupKanaChart('hiragana');
    setupKanaChart('katakana');
    setupFlashcards();
    setupPractice();
    setupVocabulary();
    setupGrammar();
    setupQuiz();
    setupTimer();
    setupQuickActions();
    updateUI();
});

// ===== Local Storage =====
function saveState() {
    const s = {
        streak: state.streak, totalXP: state.totalXP,
        todayMinutes: state.todayMinutes, todayWords: state.todayWords,
        todayQuiz: state.todayQuiz, todayTotal: state.todayTotal,
        learnedHiragana: [...state.learnedHiragana],
        learnedKatakana: [...state.learnedKatakana],
        studyHistory: state.studyHistory,
        lastDate: getTodayStr()
    };
    localStorage.setItem('nihongoApp', JSON.stringify(s));
}

function loadState() {
    const raw = localStorage.getItem('nihongoApp');
    if (!raw) return;
    try {
        const s = JSON.parse(raw);
        if (s.lastDate !== getTodayStr()) {
            // New day - check streak
            const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
            const yStr = formatDate(yesterday);
            state.streak = (s.studyHistory && s.studyHistory[yStr]) ? (s.streak || 0) + 1 : 0;
            state.todayMinutes = 0; state.todayWords = 0; state.todayQuiz = 0; state.todayTotal = 0;
        } else {
            state.streak = s.streak || 0;
            state.todayMinutes = s.todayMinutes || 0;
            state.todayWords = s.todayWords || 0;
            state.todayQuiz = s.todayQuiz || 0;
            state.todayTotal = s.todayTotal || 0;
        }
        state.totalXP = s.totalXP || 0;
        state.learnedHiragana = new Set(s.learnedHiragana || []);
        state.learnedKatakana = new Set(s.learnedKatakana || []);
        state.studyHistory = s.studyHistory || {};
    } catch(e) { console.error(e); }
}

function getTodayStr() { return formatDate(new Date()); }
function formatDate(d) { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }

// ===== Navigation =====
function setupNav() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            switchSection(section);
        });
    });
}

function switchSection(name) {
    state.currentSection = name;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.section === name));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('section' + name.charAt(0).toUpperCase() + name.slice(1));
    if (el) el.classList.add('active');
}

// ===== Dashboard =====
function setupDashboard() {
    const dateEl = document.getElementById('todayDate');
    const now = new Date();
    const days = ['일','월','화','수','목','금','토'];
    dateEl.textContent = `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 (${days[now.getDay()]}요일)`;
    buildWeekGrid();
}

function buildWeekGrid() {
    const grid = document.getElementById('weekGrid');
    const dayNames = ['일','월','화','수','목','금','토'];
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    grid.innerHTML = '';
    for (let i = 0; i < 7; i++) {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        const dStr = formatDate(d);
        const isToday = dStr === getTodayStr();
        const completed = state.studyHistory[dStr];
        const div = document.createElement('div');
        div.className = 'week-day' + (isToday ? ' today' : '') + (completed ? ' completed' : '');
        div.innerHTML = `<span class="day-label">${dayNames[i]}</span><span class="day-num">${d.getDate()}</span>`;
        grid.appendChild(div);
    }
}

function updateUI() {
    document.getElementById('streakCount').textContent = state.streak;
    document.getElementById('totalXP').textContent = state.totalXP;
    document.getElementById('todayMinutes').textContent = state.todayMinutes;
    document.getElementById('todayWords').textContent = state.todayWords;
    document.getElementById('todayQuiz').textContent = state.todayQuiz;

    const pct = Math.min(100, Math.round((state.todayMinutes / 20) * 100));
    document.getElementById('dailyProgress').querySelector('.progress-fill').style.width = pct + '%';
    document.getElementById('progressText').textContent = pct + '%';

    const accuracy = state.todayTotal > 0 ? Math.round((state.todayQuiz / state.todayTotal) * 100) : 0;
    document.getElementById('todayAccuracy').textContent = accuracy + '%';

    // Mini progress bars
    const hPct = Math.round((state.learnedHiragana.size / HIRAGANA.length) * 100);
    const kPct = Math.round((state.learnedKatakana.size / KATAKANA.length) * 100);
    document.getElementById('hiraganaProgress').style.width = hPct + '%';
    document.getElementById('katakanaProgress').style.width = kPct + '%';

    saveState();
}

// ===== Timer =====
function setupTimer() {
    document.getElementById('btnStartTimer').addEventListener('click', toggleTimer);
}

function toggleTimer() {
    if (state.timerRunning) {
        clearInterval(state.timerInterval);
        state.timerRunning = false;
        document.getElementById('timerBtnText').textContent = '학습 시작';
        document.getElementById('btnStartTimer').classList.remove('running');
    } else {
        state.timerRunning = true;
        document.getElementById('timerBtnText').textContent = '일시 정지';
        document.getElementById('btnStartTimer').classList.add('running');
        state.timerInterval = setInterval(() => {
            state.timerSeconds--;
            if (state.timerSeconds <= 0) {
                clearInterval(state.timerInterval);
                state.timerRunning = false;
                state.timerSeconds = 0;
                showToast('🎉 오늘의 학습 완료! 수고하셨습니다!', 'success');
                state.studyHistory[getTodayStr()] = true;
                state.streak++;
                state.totalXP += 50;
                updateUI();
                buildWeekGrid();
            }
            // Update every minute
            const elapsed = 1200 - state.timerSeconds;
            state.todayMinutes = Math.floor(elapsed / 60);
            updateTimerDisplay();
            updateUI();
        }, 1000);
    }
}

function updateTimerDisplay() {
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    document.getElementById('timerDisplay').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// ===== Kana Chart =====
function setupKanaChart(type) {
    const data = type === 'hiragana' ? HIRAGANA : KATAKANA;
    const gridEl = document.getElementById(type + 'ChartGrid');
    const rows = KANA_ROWS[type];
    const rowSizes = [5, 5, 5, 5, 5, 5, 5, 3, 5, 3];
    let idx = 0;

    let html = '<div class="kana-grid">';
    for (let r = 0; r < rows.length; r++) {
        html += `<div class="kana-row-label">${rows[r]}</div>`;
        for (let c = 0; c < rowSizes[r]; c++) {
            if (idx < data.length) {
                const item = data[idx];
                const learned = (type === 'hiragana' ? state.learnedHiragana : state.learnedKatakana).has(item.char);
                html += `<div class="kana-cell ${learned ? 'learned' : ''}" data-type="${type}" data-idx="${idx}">
                    <span class="kana-main">${item.char}</span>
                    <span class="kana-romaji">${item.romaji}</span>
                </div>`;
                idx++;
            }
        }
    }
    html += '</div>';
    gridEl.innerHTML = html;

    gridEl.querySelectorAll('.kana-cell').forEach(cell => {
        cell.addEventListener('click', () => {
            const t = cell.dataset.type;
            const i = parseInt(cell.dataset.idx);
            const d = t === 'hiragana' ? HIRAGANA[i] : KATAKANA[i];
            const set = t === 'hiragana' ? state.learnedHiragana : state.learnedKatakana;
            set.add(d.char);
            cell.classList.add('learned');
            state.todayWords++;
            state.totalXP += 2;
            showToast(`${d.char} (${d.romaji}) - ${d.example}`, 'success');
            updateUI();
        });
    });
}

// ===== Mode Switching =====
document.querySelectorAll('.mode-selector').forEach(sel => {
    sel.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.closest('.section');
            section.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            section.querySelectorAll('.mode-content').forEach(c => c.classList.remove('active'));
            const mode = btn.dataset.mode;
            const contents = section.querySelectorAll('.mode-content');
            const idx = mode === 'chart' ? 0 : mode === 'flashcard' ? 1 : 2;
            if (contents[idx]) contents[idx].classList.add('active');
        });
    });
});

// ===== Flashcards =====
function setupFlashcards() {
    // Hiragana
    updateFlashcard('hiragana');
    document.getElementById('hiraganaFlashcardInner').parentElement.addEventListener('click', () => {
        document.getElementById('hiraganaFlashcardInner').parentElement.classList.toggle('flipped');
    });
    document.getElementById('hiraganaPrev').addEventListener('click', () => { state.hiraganaIdx = (state.hiraganaIdx - 1 + HIRAGANA.length) % HIRAGANA.length; updateFlashcard('hiragana'); });
    document.getElementById('hiraganaNext').addEventListener('click', () => { state.hiraganaIdx = (state.hiraganaIdx + 1) % HIRAGANA.length; updateFlashcard('hiragana'); });
    ['hiraganaHard','hiraganaOk','hiraganaEasy'].forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            const xp = id.includes('Easy') ? 5 : id.includes('Ok') ? 3 : 1;
            state.totalXP += xp;
            state.learnedHiragana.add(HIRAGANA[state.hiraganaIdx].char);
            state.todayWords++;
            state.hiraganaIdx = (state.hiraganaIdx + 1) % HIRAGANA.length;
            updateFlashcard('hiragana');
            updateUI();
        });
    });

    // Katakana
    updateFlashcard('katakana');
    document.getElementById('katakanaFlashcardInner').parentElement.addEventListener('click', () => {
        document.getElementById('katakanaFlashcardInner').parentElement.classList.toggle('flipped');
    });
    document.getElementById('katakanaPrev').addEventListener('click', () => { state.katakanaIdx = (state.katakanaIdx - 1 + KATAKANA.length) % KATAKANA.length; updateFlashcard('katakana'); });
    document.getElementById('katakanaNext').addEventListener('click', () => { state.katakanaIdx = (state.katakanaIdx + 1) % KATAKANA.length; updateFlashcard('katakana'); });
    ['katakanaHard','katakanaOk','katakanaEasy'].forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            const xp = id.includes('Easy') ? 5 : id.includes('Ok') ? 3 : 1;
            state.totalXP += xp;
            state.learnedKatakana.add(KATAKANA[state.katakanaIdx].char);
            state.todayWords++;
            state.katakanaIdx = (state.katakanaIdx + 1) % KATAKANA.length;
            updateFlashcard('katakana');
            updateUI();
        });
    });
}

function updateFlashcard(type) {
    const data = type === 'hiragana' ? HIRAGANA : KATAKANA;
    const idx = type === 'hiragana' ? state.hiraganaIdx : state.katakanaIdx;
    const item = data[idx];
    document.getElementById(type + 'FlashChar').textContent = item.char;
    document.getElementById(type + 'FlashReading').textContent = item.romaji;
    document.getElementById(type + 'FlashExample').textContent = item.example;
    document.getElementById(type + 'Counter').textContent = `${idx + 1} / ${data.length}`;
    // Reset flip
    const card = document.getElementById(type + 'FlashcardInner').parentElement;
    card.classList.remove('flipped');
}

// ===== Practice =====
function setupPractice() {
    setupPracticeType('hiragana');
    setupPracticeType('katakana');
}

function setupPracticeType(type) {
    const data = type === 'hiragana' ? HIRAGANA : KATAKANA;
    let currentIdx = Math.floor(Math.random() * data.length);

    function showNext() {
        currentIdx = Math.floor(Math.random() * data.length);
        document.getElementById(type + 'PracticeChar').textContent = data[currentIdx].char;
        document.getElementById(type + 'PracticeInput').value = '';
        document.getElementById(type + 'PracticeFeedback').textContent = '';
        document.getElementById(type + 'PracticeFeedback').className = 'practice-feedback';
        document.getElementById(type + 'PracticeInput').focus();
    }

    function checkAnswer() {
        const input = document.getElementById(type + 'PracticeInput').value.trim().toLowerCase();
        const correct = data[currentIdx].romaji.toLowerCase();
        const fb = document.getElementById(type + 'PracticeFeedback');
        state.todayTotal++;

        if (input === correct) {
            fb.textContent = '정답! ✨ ' + data[currentIdx].example;
            fb.className = 'practice-feedback correct';
            if (type === 'hiragana') { state.hiraganaCorrect++; state.learnedHiragana.add(data[currentIdx].char); }
            else { state.katakanaCorrect++; state.learnedKatakana.add(data[currentIdx].char); }
            state.todayQuiz++;
            state.totalXP += 5;
        } else {
            fb.textContent = `오답! 정답: ${correct} (${data[currentIdx].example})`;
            fb.className = 'practice-feedback wrong';
            if (type === 'hiragana') state.hiraganaWrong++;
            else state.katakanaWrong++;
        }
        document.getElementById(type + 'Correct').textContent = type === 'hiragana' ? state.hiraganaCorrect : state.katakanaCorrect;
        document.getElementById(type + 'Wrong').textContent = type === 'hiragana' ? state.hiraganaWrong : state.katakanaWrong;
        updateUI();
        setTimeout(showNext, 1500);
    }

    document.getElementById(type + 'PracticeSubmit').addEventListener('click', checkAnswer);
    document.getElementById(type + 'PracticeInput').addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
    showNext();
}

// ===== Vocabulary =====
function setupVocabulary() {
    renderVocab('greetings');
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderVocab(btn.dataset.category);
        });
    });
}

function renderVocab(category) {
    const container = document.getElementById('vocabCards');
    const words = VOCABULARY[category] || [];
    container.innerHTML = words.map((w, i) => `
        <div class="vocab-card" id="vocab-${category}-${i}">
            <div class="vocab-jp">${w.jp}</div>
            <div class="vocab-reading">${w.reading}</div>
            <div class="vocab-kr">${w.kr}</div>
            <div class="vocab-example">
                <strong>예문:</strong> ${w.ex}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.vocab-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
            if (card.classList.contains('expanded')) {
                state.todayWords++;
                state.totalXP += 3;
                updateUI();
            }
        });
    });
}

// ===== Grammar =====
function setupGrammar() {
    const container = document.getElementById('grammarLessons');
    container.innerHTML = GRAMMAR.map((g, i) => `
        <div class="grammar-card" id="grammar-${i}">
            <div class="grammar-title">
                <h4>${g.title}</h4>
                <span class="grammar-level">${g.level}</span>
            </div>
            <div class="grammar-pattern">${g.pattern}</div>
            <div class="grammar-desc">${g.desc}</div>
            <div class="grammar-examples">
                ${g.examples.map(ex => `
                    <div class="grammar-example-item">
                        <div class="ex-jp">${ex.jp}</div>
                        <div class="ex-kr">${ex.kr}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.grammar-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
            if (card.classList.contains('expanded')) {
                state.totalXP += 5;
                updateUI();
            }
        });
    });
}

// ===== Quiz =====
function setupQuiz() {
    document.getElementById('btnStartQuiz').addEventListener('click', startQuiz);
    document.getElementById('btnRetryQuiz').addEventListener('click', () => {
        document.getElementById('quizResult').style.display = 'none';
        document.getElementById('quizSetup').style.display = 'block';
    });
}

function startQuiz() {
    const type = document.getElementById('quizType').value;
    const count = parseInt(document.getElementById('quizCount').value);
    state.quizTotal = count;
    state.quizIdx = 0;
    state.quizScore = 0;
    state.quizQuestions = generateQuizQuestions(type, count);

    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('quizArea').style.display = 'block';
    showQuizQuestion();
}

function generateQuizQuestions(type, count) {
    let pool = [];
    if (type === 'hiragana' || type === 'mixed') {
        HIRAGANA.forEach(h => pool.push({ prompt: h.char, answer: h.romaji, type: 'hiragana' }));
    }
    if (type === 'katakana' || type === 'mixed') {
        KATAKANA.forEach(k => pool.push({ prompt: k.char, answer: k.romaji, type: 'katakana' }));
    }
    if (type === 'vocabulary' || type === 'mixed') {
        Object.values(VOCABULARY).flat().forEach(v => pool.push({ prompt: v.jp, answer: v.kr, type: 'vocab' }));
    }
    // Shuffle and pick
    pool.sort(() => Math.random() - 0.5);
    return pool.slice(0, count).map(q => {
        // Generate wrong choices
        const wrongs = pool.filter(p => p.answer !== q.answer).sort(() => Math.random() - 0.5).slice(0, 3).map(p => p.answer);
        const choices = [q.answer, ...wrongs].sort(() => Math.random() - 0.5);
        return { ...q, choices };
    });
}

function showQuizQuestion() {
    if (state.quizIdx >= state.quizQuestions.length) {
        endQuiz();
        return;
    }
    const q = state.quizQuestions[state.quizIdx];
    document.getElementById('quizCounter').textContent = `${state.quizIdx + 1} / ${state.quizTotal}`;
    document.getElementById('quizProgressFill').style.width = ((state.quizIdx / state.quizTotal) * 100) + '%';
    document.getElementById('quizPrompt').textContent = q.prompt;

    const choicesEl = document.getElementById('quizChoices');
    choicesEl.innerHTML = q.choices.map((c, i) => `<button class="quiz-choice" id="quizChoice${i}">${c}</button>`).join('');

    choicesEl.querySelectorAll('.quiz-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.textContent === q.answer;
            state.todayTotal++;
            if (isCorrect) {
                btn.classList.add('correct');
                state.quizScore++;
                state.todayQuiz++;
                state.totalXP += 10;
            } else {
                btn.classList.add('wrong');
                choicesEl.querySelectorAll('.quiz-choice').forEach(b => {
                    if (b.textContent === q.answer) b.classList.add('correct');
                });
            }
            choicesEl.querySelectorAll('.quiz-choice').forEach(b => b.style.pointerEvents = 'none');
            updateUI();
            setTimeout(() => {
                state.quizIdx++;
                showQuizQuestion();
            }, 1200);
        });
    });
}

function endQuiz() {
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';

    const pct = Math.round((state.quizScore / state.quizTotal) * 100);
    document.getElementById('resultScore').textContent = state.quizScore;
    document.getElementById('resultTotal').textContent = '/ ' + state.quizTotal;
    document.getElementById('resultDetails').textContent = `정답률: ${pct}%`;

    if (pct >= 80) {
        document.getElementById('resultIcon').textContent = '🎉';
        document.getElementById('resultTitle').textContent = '훌륭해요!';
        state.totalXP += 30;
    } else if (pct >= 50) {
        document.getElementById('resultIcon').textContent = '👍';
        document.getElementById('resultTitle').textContent = '잘했어요!';
        state.totalXP += 15;
    } else {
        document.getElementById('resultIcon').textContent = '💪';
        document.getElementById('resultTitle').textContent = '더 연습해봐요!';
        state.totalXP += 5;
    }
    updateUI();
    showToast(`퀴즈 완료! ${state.quizScore}/${state.quizTotal} 정답`, pct >= 50 ? 'success' : 'error');
}

// ===== Quick Actions =====
function setupQuickActions() {
    document.querySelectorAll('.action-card[data-target]').forEach(card => {
        card.addEventListener('click', () => switchSection(card.dataset.target));
    });
}

// ===== Toast =====
function showToast(msg, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
