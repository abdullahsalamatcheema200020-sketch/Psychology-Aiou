const { semester, revisionSuggestions, courses } = window.STUDY_DATA;

const storageKeys = {
  theme: 'aiou-final-theme',
  focus: 'aiou-final-focus-mode',
  tasks: 'aiou-final-tasks',
  quizStats: 'aiou-final-quiz-stats'
};

const state = {
  activeLibraryCourse: 0,
  activeCourseTab: 0,
  filteredQuery: '',
  quizCourseIndex: 0,
  quizPosition: 0,
  quizScore: 0,
  quizAnswersLocked: false,
  tasks: loadJSON(storageKeys.tasks, []),
  quizStats: loadJSON(storageKeys.quizStats, {})
};

const librarySidebar = document.getElementById('librarySidebar');
const readerMount = document.getElementById('readerMount');
const readerTitle = document.getElementById('readerTitle');
const readerMeta = document.getElementById('readerMeta');
const openReaderBtn = document.getElementById('openReaderBtn');
const courseTabs = document.getElementById('courseTabs');
const courseContent = document.getElementById('courseContent');
const courseSearch = document.getElementById('courseSearch');
const quizCourseSelect = document.getElementById('quizCourseSelect');
const quizMount = document.getElementById('quizMount');
const assignmentCourse = document.getElementById('assignmentCourse');
const assignmentUnit = document.getElementById('assignmentUnit');
const assignmentPreview = document.getElementById('assignmentPreview');
const studentName = document.getElementById('studentName');
const rollNumber = document.getElementById('rollNumber');
const assignmentNumber = document.getElementById('assignmentNumber');
const assignmentTone = document.getElementById('assignmentTone');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskSummary = document.getElementById('taskSummary');
const taskProgressFill = document.getElementById('taskProgressFill');
const revisionSuggestionsMount = document.getElementById('revisionSuggestions');

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function byId(id) {
  return document.getElementById(id);
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function initializeTheme() {
  const theme = localStorage.getItem(storageKeys.theme) || 'dark';
  if (theme === 'light') document.body.classList.add('light');
  const focusMode = localStorage.getItem(storageKeys.focus) === 'true';
  if (focusMode) document.body.classList.add('focus-mode');
}

function renderLibrarySidebar() {
  librarySidebar.innerHTML = courses.map((course, index) => `
    <article class="library-card ${index === state.activeLibraryCourse ? 'active' : ''}">
      <button type="button" data-library-index="${index}">
        <img class="library-cover" src="${course.cover}" alt="${escapeHtml(course.title)} cover" />
        <div class="library-card-body">
          <h3>${course.code} • ${course.title}</h3>
          <p class="library-meta">${course.summary}</p>
          <div class="quick-meta">
            <span>${course.credits}</span>
            <span>${course.kind === 'pdf' ? 'Local PDF' : 'Internal Guide'}</span>
          </div>
        </div>
      </button>
    </article>
  `).join('');

  librarySidebar.querySelectorAll('[data-library-index]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeLibraryCourse = Number(btn.dataset.libraryIndex);
      renderLibrarySidebar();
      renderReader();
    });
  });
}

function renderReader() {
  const course = courses[state.activeLibraryCourse];
  readerTitle.textContent = `${course.code} - ${course.title}`;
  readerMeta.textContent = `${course.kind === 'pdf' ? 'Local textbook file' : 'Built-in guide'} • ${course.credits}`;
  if (course.kind === 'pdf') {
    readerMount.innerHTML = `<iframe class="reader-frame" title="${escapeHtml(course.title)}" src="${course.file}#view=FitH"></iframe>`;
    openReaderBtn.onclick = () => window.open(course.file, '_blank');
  } else {
    readerMount.innerHTML = `<div class="reader-html">${course.internalHtml}</div>`;
    openReaderBtn.onclick = () => {
      const newWindow = window.open('', '_blank');
      if (!newWindow) return;
      newWindow.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${escapeHtml(course.title)}</title><style>body{font-family:Inter,Arial,sans-serif;margin:24px;line-height:1.7;background:#f8fafc;color:#0f172a;}h3,h4{margin-top:0.4em;}li{margin-bottom:8px;}</style></head><body>${course.internalHtml}</body></html>`);
      newWindow.document.close();
    };
  }
}

function renderCourseTabs() {
  courseTabs.innerHTML = courses.map((course, index) => `
    <button class="tab-btn ${state.activeCourseTab === index ? 'active' : ''}" type="button" data-course-tab="${index}">${course.code}</button>
  `).join('');
  courseTabs.querySelectorAll('[data-course-tab]').forEach(button => {
    button.addEventListener('click', () => {
      state.activeCourseTab = Number(button.dataset.courseTab);
      renderCourseTabs();
      renderCourseContent();
    });
  });
}

function renderCourseContent() {
  const course = courses[state.activeCourseTab];
  const query = state.filteredQuery.trim().toLowerCase();
  const filteredUnits = course.units.filter(unit => {
    if (!query) return true;
    const bucket = [unit.title, ...unit.notes, ...unit.prompts].join(' ').toLowerCase();
    return bucket.includes(query);
  });

  courseContent.innerHTML = `
    <article class="course-box">
      <div class="course-head">
        <div>
          <p class="eyebrow">${course.code} • ${course.credits}</p>
          <h3>${course.title}</h3>
          <p class="course-summary">${course.summary}</p>
        </div>
        <div class="quick-meta">
          ${course.assessmentFocus.map(item => `<span>${item}</span>`).join('')}
        </div>
      </div>
      <div class="course-layout">
        <div class="unit-grid">
          ${filteredUnits.length ? filteredUnits.map(unit => `
            <article class="unit-card">
              <h4>${unit.title}</h4>
              <ul class="unit-points">
                ${unit.notes.map(note => `<li>${note}</li>`).join('')}
              </ul>
              <div class="status-pill">Practice prompts</div>
              <ul class="unit-prompts">
                ${unit.prompts.map(prompt => `<li>${prompt}</li>`).join('')}
              </ul>
            </article>
          `).join('') : `<div class="empty-state"><h3>No matching unit found</h3><p>Try a shorter search term such as memory, climate, grammar, or Venn.</p></div>`}
        </div>
        <aside class="side-stack">
          <div class="summary-box">
            <h4>Assignment tips</h4>
            <ul class="quiz-list">
              ${course.assignmentTips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
          <div class="fact-box">
            <h4>Best study pattern</h4>
            <ul class="quiz-list">
              <li>Read the unit summary first.</li>
              <li>Open the local book in the library and scan headings or worked examples.</li>
              <li>Use the prompts for short self-testing before the quiz.</li>
            </ul>
          </div>
          <div class="fact-box">
            <h4>Course progress hint</h4>
            <p class="muted">${course.units.length} unit blocks are available in this section. Search is live and works across titles, notes, and practice prompts.</p>
          </div>
        </aside>
      </div>
    </article>
  `;
}

function populateQuizCourseSelect() {
  quizCourseSelect.innerHTML = courses.map((course, index) => `
    <option value="${index}">${course.code} - ${course.title}</option>
  `).join('');
}

function startQuiz() {
  state.quizCourseIndex = Number(quizCourseSelect.value);
  state.quizPosition = 0;
  state.quizScore = 0;
  state.quizAnswersLocked = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const course = courses[state.quizCourseIndex];
  const items = course.quiz;
  const question = items[state.quizPosition];
  const stat = state.quizStats[course.code];

  quizMount.innerHTML = `
    <article class="quiz-card">
      <div class="course-head">
        <div>
          <p class="eyebrow">${course.code} quiz</p>
          <h3>Question ${state.quizPosition + 1} of ${items.length}</h3>
        </div>
        <div class="quick-meta">
          <span>Current score: ${state.quizScore}</span>
          <span>Best score: ${stat ? stat.best : 0}/${items.length}</span>
        </div>
      </div>
      <p><strong>${question.question}</strong></p>
      <div class="choice-grid">
        ${question.options.map((option, index) => `<button class="choice-btn" type="button" data-choice-index="${index}">${option}</button>`).join('')}
      </div>
      <div id="quizFeedback" class="summary-box hidden"></div>
      <div class="quiz-footer">
        <div class="muted">Choose one answer. Feedback appears instantly.</div>
        <button id="nextQuizBtn" class="ghost-btn hidden" type="button">${state.quizPosition + 1 === items.length ? 'Finish quiz' : 'Next question'}</button>
      </div>
    </article>
  `;

  const feedback = byId('quizFeedback');
  const nextBtn = byId('nextQuizBtn');
  quizMount.querySelectorAll('[data-choice-index]').forEach(button => {
    button.addEventListener('click', () => {
      if (state.quizAnswersLocked) return;
      state.quizAnswersLocked = true;
      const choiceIndex = Number(button.dataset.choiceIndex);
      const isCorrect = choiceIndex === question.answer;
      if (isCorrect) state.quizScore += 1;
      quizMount.querySelectorAll('[data-choice-index]').forEach((btn, idx) => {
        btn.classList.add(idx === question.answer ? 'correct' : idx === choiceIndex ? 'wrong' : '');
        btn.disabled = true;
      });
      feedback.classList.remove('hidden');
      feedback.innerHTML = `<h4>${isCorrect ? 'Correct answer' : 'Not quite'}</h4><p class="muted">${question.explanation}</p>`;
      nextBtn.classList.remove('hidden');
    });
  });

  nextBtn.addEventListener('click', () => {
    if (state.quizPosition + 1 < items.length) {
      state.quizPosition += 1;
      state.quizAnswersLocked = false;
      renderQuizQuestion();
    } else {
      completeQuiz();
    }
  });
}

function completeQuiz() {
  const course = courses[state.quizCourseIndex];
  const total = course.quiz.length;
  const previous = state.quizStats[course.code] || { best: 0, attempts: 0, latest: 0 };
  state.quizStats[course.code] = {
    best: Math.max(previous.best, state.quizScore),
    attempts: previous.attempts + 1,
    latest: state.quizScore
  };
  saveJSON(storageKeys.quizStats, state.quizStats);
  quizMount.innerHTML = `
    <article class="quiz-card">
      <p class="eyebrow">Quiz completed</p>
      <h3>${course.title}</h3>
      <p><strong>Your score: ${state.quizScore} / ${total}</strong></p>
      <p class="muted">Best score: ${state.quizStats[course.code].best} / ${total} • Attempts: ${state.quizStats[course.code].attempts}</p>
      <div class="hero-actions">
        <button id="retryQuizBtn" class="primary-btn" type="button">Retry this quiz</button>
        <button id="switchQuizBtn" class="ghost-btn" type="button">Choose another course</button>
      </div>
    </article>
  `;
  byId('retryQuizBtn').addEventListener('click', startQuiz);
  byId('switchQuizBtn').addEventListener('click', () => {
    quizMount.innerHTML = `<div class="empty-state"><h3>Select a course and start quiz mode</h3><p>Your score and last attempt are saved in your browser.</p></div>`;
  });
}

function populateAssignmentSelectors() {
  assignmentCourse.innerHTML = courses.map((course, index) => `
    <option value="${index}">${course.code} - ${course.title}</option>
  `).join('');
  refreshAssignmentUnits();
}

function refreshAssignmentUnits() {
  const course = courses[Number(assignmentCourse.value)];
  assignmentUnit.innerHTML = course.units.map((unit, index) => `
    <option value="${index}">${unit.title}</option>
  `).join('');
}

function assignmentIntro(tone) {
  return {
    'Balanced academic': 'This assignment presents the selected unit in balanced academic language with clear explanation, logical flow, and student-friendly examples.',
    'Concise exam style': 'This assignment follows a direct exam-oriented style with short but meaningful paragraphs, clear definitions, and focused explanation.',
    'Detailed explanatory': 'This assignment develops the selected unit in detail, using subheadings, explanation, examples, and conceptual expansion for better understanding.'
  }[tone] || 'This assignment explains the selected unit carefully and clearly.';
}

function buildAssignmentData() {
  const course = courses[Number(assignmentCourse.value)];
  const unit = course.units[Number(assignmentUnit.value)];
  const student = studentName.value.trim() || 'Student Name';
  const roll = rollNumber.value.trim() || 'Roll Number';
  const tone = assignmentTone.value;
  const assignmentNo = assignmentNumber.value;

  const body = `${assignmentNo}\nCourse: ${course.code} - ${course.title}\nStudent: ${student}\nRoll Number: ${roll}\nUnit: ${unit.title}\nStyle: ${tone}\n\nTitle\n${course.title}: ${unit.title}\n\nIntroduction\n${assignmentIntro(tone)}\n\nCore Explanation\n${unit.notes.join(' ')}\n\nQuestion 1\nExplain the main concept of ${unit.title.toLowerCase()} and show why it is important in the wider course.\n\nAnswer Guide\nBegin with a direct definition, explain the concept in organized paragraphs, and connect it with the aims of ${course.title}.\n\nQuestion 2\nDiscuss the most important ideas studied in this unit with suitable examples or comparisons.\n\nAnswer Guide\nUse 2 or 3 subheadings. You may compare related terms, explain a process, or connect theory with practical life.\n\nQuestion 3\nWrite a brief applied paragraph showing how this unit can help in exams, assignments, or real-life understanding.\n\nAnswer Guide\nUse one reflective paragraph and then conclude briefly.\n\nQuick Revision Prompts\n- ${unit.prompts.join('\n- ')}\n\nAssignment Writing Tips\n- ${course.assignmentTips.join('\n- ')}\n\nConclusion\n${unit.title} is an important part of ${course.title} because it strengthens conceptual understanding and supports both assignment writing and exam preparation.`;

  return { course, unit, student, roll, tone, assignmentNo, body };
}

function previewAssignment() {
  const data = buildAssignmentData();
  assignmentPreview.textContent = data.body;
}

function htmlForWord(data) {
  const paragraphs = data.body.split('\n\n').map(block => `<p>${escapeHtml(block).replaceAll('\n', '<br />')}</p>`).join('');
  return `<!DOCTYPE html><html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>${escapeHtml(data.course.code)}</title><style>body{font-family:Calibri,Arial,sans-serif;margin:36px;line-height:1.6;color:#111827;}h1{color:#1d4ed8;}p{margin:0 0 12px;} .meta{background:#eff6ff;border:1px solid #bfdbfe;padding:12px 14px;border-radius:8px;margin-bottom:18px;}</style></head><body><h1>${escapeHtml(data.assignmentNo)}</h1><div class='meta'><strong>Course:</strong> ${escapeHtml(data.course.code)} - ${escapeHtml(data.course.title)}<br /><strong>Student:</strong> ${escapeHtml(data.student)}<br /><strong>Roll Number:</strong> ${escapeHtml(data.roll)}<br /><strong>Unit:</strong> ${escapeHtml(data.unit.title)}<br /><strong>Style:</strong> ${escapeHtml(data.tone)}</div>${paragraphs}</body></html>`;
}

function downloadAssignment() {
  const data = buildAssignmentData();
  assignmentPreview.textContent = data.body;
  const blob = new Blob(['\ufeff', htmlForWord(data)], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.course.code}-${data.unit.title.replaceAll(' ', '-').toLowerCase()}-${data.assignmentNo.replaceAll(' ', '-').toLowerCase()}.doc`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderSuggestions() {
  revisionSuggestionsMount.innerHTML = `<ul class="suggestion-list">${revisionSuggestions.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function renderTasks() {
  taskList.innerHTML = state.tasks.length ? state.tasks.map((task, index) => `
    <li class="task-item ${task.done ? 'completed' : ''}">
      <div class="task-main">
        <input type="checkbox" data-task-check="${index}" ${task.done ? 'checked' : ''} />
        <span class="task-text">${escapeHtml(task.text)}</span>
      </div>
      <button class="remove-btn" type="button" data-task-remove="${index}">×</button>
    </li>
  `).join('') : `<li class="empty-state"><h3>No tasks yet</h3><p>Add your first study target for today.</p></li>`;

  const total = state.tasks.length;
  const completed = state.tasks.filter(task => task.done).length;
  taskSummary.textContent = `${completed} / ${total} tasks completed`;
  taskProgressFill.style.width = total ? `${(completed / total) * 100}%` : '0%';

  taskList.querySelectorAll('[data-task-check]').forEach(box => {
    box.addEventListener('change', () => {
      const index = Number(box.dataset.taskCheck);
      state.tasks[index].done = box.checked;
      persistTasks();
    });
  });

  taskList.querySelectorAll('[data-task-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = Number(btn.dataset.taskRemove);
      state.tasks.splice(index, 1);
      persistTasks();
    });
  });
}

function persistTasks() {
  saveJSON(storageKeys.tasks, state.tasks);
  renderTasks();
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  state.tasks.unshift({ text, done: false });
  taskInput.value = '';
  persistTasks();
}

function registerEvents() {
  byId('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem(storageKeys.theme, document.body.classList.contains('light') ? 'light' : 'dark');
  });

  byId('focusModeBtn').addEventListener('click', () => {
    document.body.classList.toggle('focus-mode');
    localStorage.setItem(storageKeys.focus, document.body.classList.contains('focus-mode') ? 'true' : 'false');
  });

  courseSearch.addEventListener('input', event => {
    state.filteredQuery = event.target.value;
    renderCourseContent();
  });

  byId('startQuizBtn').addEventListener('click', startQuiz);
  assignmentCourse.addEventListener('change', refreshAssignmentUnits);
  byId('previewAssignmentBtn').addEventListener('click', previewAssignment);
  byId('downloadAssignmentBtn').addEventListener('click', downloadAssignment);
  byId('addTaskBtn').addEventListener('click', addTask);
  taskInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

function init() {
  initializeTheme();
  renderLibrarySidebar();
  renderReader();
  renderCourseTabs();
  renderCourseContent();
  populateQuizCourseSelect();
  populateAssignmentSelectors();
  renderSuggestions();
  renderTasks();
  registerEvents();
  registerServiceWorker();
  assignmentPreview.textContent = `Website ready. Choose a course and unit, then preview or download the assignment draft.`;
}

init();