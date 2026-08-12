// ===== Question bank: Module 1 — Introduction to System Integration and Architecture =====
const QUESTIONS = [
  {
    topic: "Definitions",
    q: "What is System Integration?",
    options: [
      "The process of combining all virtual and physical components into a single, cohesive infrastructure",
      "The process of writing code for a single application",
      "A document describing hardware purchase orders",
      "A method for backing up databases only"
    ],
    correct: 0
  },
  {
    topic: "Definitions",
    q: "In System Integration, what are 'virtual components'?",
    options: [
      "Computer hardware modules",
      "Data recorded in software, applications, and databases",
      "Physical network cables",
      "Server room temperature controls"
    ],
    correct: 1
  },
  {
    topic: "Definitions",
    q: "In System Integration, what are 'physical components'?",
    options: [
      "Computer hardware modules",
      "Data recorded in software, applications, and databases",
      "Business process diagrams",
      "Cloud subscription plans"
    ],
    correct: 0
  },
  {
    topic: "Definitions",
    q: "What is System Architecture?",
    options: [
      "A budget plan for IT departments",
      "The arrangement of components, their relationships, and how they interact to attain the system's goals",
      "A list of software licenses",
      "A network security certificate"
    ],
    correct: 1
  },
  {
    topic: "Definitions",
    q: "Which statement best distinguishes the two: System Integration is a ___, while System Architecture is a ___.",
    options: [
      "Process; design",
      "Design; process",
      "Hardware; software",
      "Team; budget"
    ],
    correct: 0
  },
  {
    topic: "Purposes",
    q: "Which of these is NOT one of the 4 purposes of System Integration?",
    options: [
      "Ensure all systems operate in unison",
      "Streamline internal communication",
      "Replace all legacy hardware immediately",
      "Expedite information flow and reduce operating cost"
    ],
    correct: 2
  },
  {
    topic: "Purposes",
    q: "Besides operating in unison and streamlining internal communication, what else is a purpose of System Integration?",
    options: [
      "Streamline communication with external partners",
      "Increase the number of vendors used",
      "Eliminate the need for any documentation",
      "Standardize employee dress code"
    ],
    correct: 0
  },
  {
    topic: "Types",
    q: "Which type of integration answers: 'How do we keep using an old system we cannot replace?'",
    options: [
      "Enterprise Application Integration",
      "Legacy System Integration",
      "Data Integration",
      "Electronic Data Interchange"
    ],
    correct: 1
  },
  {
    topic: "Types",
    q: "Which type of integration answers: 'How do we unify the many applications we bought as we grew?'",
    options: [
      "Enterprise Application Integration",
      "Enterprise to Enterprise",
      "Legacy System Integration",
      "Data Integration"
    ],
    correct: 0
  },
  {
    topic: "Types",
    q: "Which type of integration answers: 'How do we get one view of data spread across many databases?'",
    options: [
      "Electronic Data Interchange",
      "Enterprise to Enterprise",
      "Data Integration",
      "Legacy System Integration"
    ],
    correct: 2
  },
  {
    topic: "Types",
    q: "Which type of integration answers: 'How do we automate work that crosses company boundaries?'",
    options: [
      "Enterprise to Enterprise",
      "Data Integration",
      "Legacy System Integration",
      "Enterprise Application Integration"
    ],
    correct: 0
  },
  {
    topic: "Types",
    q: "Which type of integration answers: 'How do we stop exchanging paper documents with other companies?'",
    options: [
      "Data Integration",
      "Electronic Data Interchange",
      "Enterprise Application Integration",
      "Legacy System Integration"
    ],
    correct: 1
  },
  {
    topic: "Methods",
    q: "What is Point to Point integration?",
    options: [
      "A central hub connecting all systems",
      "A direct connection between 2 system components",
      "A layer common to all subsystems",
      "A format that removes the need for adapters"
    ],
    correct: 1
  },
  {
    topic: "Methods",
    q: "In the Star method, how many connections are needed for 5 systems?",
    options: ["5", "10", "15", "25"],
    correct: 1
  },
  {
    topic: "Methods",
    q: "The Star method is only sensible under which condition?",
    options: [
      "When there is unlimited budget",
      "With a limited number of subsystems",
      "When all systems use the same programming language",
      "When there is no central hub"
    ],
    correct: 1
  },
  {
    topic: "Methods",
    q: "In Hub and Spoke, how many connections are needed for 5 systems?",
    options: ["10", "5", "1", "20"],
    correct: 1
  },
  {
    topic: "Methods",
    q: "What does the hub do in a Hub and Spoke method?",
    options: [
      "It decouples data senders from receivers",
      "It doubles the number of required connections",
      "It stores paper documents",
      "It removes the need for security controls"
    ],
    correct: 0
  },
  {
    topic: "Methods",
    q: "What is a downside of Vertical Integration?",
    options: [
      "It requires extensive coding knowledge",
      "Any new functionality requires its own silo",
      "It needs 10 connections for 5 systems",
      "It cannot be used for basic single-function integrations"
    ],
    correct: 1
  },
  {
    topic: "Methods",
    q: "In Horizontal Integration, how do subsystems communicate?",
    options: [
      "Through one common layer that all subsystems connect to",
      "Directly to every other subsystem one by one",
      "Only through paper-based exchange",
      "They cannot communicate with each other"
    ],
    correct: 0
  },
  {
    topic: "Methods",
    q: "What is a trade-off of the Common Data Format method?",
    options: [
      "It is simple and requires no coding",
      "It is fairly complex and requires extensive coding knowledge",
      "It increases the number of adapters needed",
      "It only works with 2 systems"
    ],
    correct: 1
  },
  {
    topic: "Advantages & Challenges",
    q: "Which of these is listed as an ADVANTAGE of System Integration?",
    options: [
      "Systems are genuinely hard to integrate",
      "Centralized storage removes duplicate stores and their cost",
      "Too expensive for many enterprises",
      "Variety of tools makes choosing difficult"
    ],
    correct: 1
  },
  {
    topic: "Advantages & Challenges",
    q: "Which of these is listed as a CHALLENGE of System Integration?",
    options: [
      "Improves data accessibility",
      "Eliminates repetitive manual data entry",
      "Integrating diverse systems is complex and time-consuming",
      "Consolidates and streamlines correlated data"
    ],
    correct: 2
  },
  {
    topic: "Project Stages",
    q: "Which is the FIRST of the 7 stages of a System Integration project?",
    options: ["Analyze Feasibility", "Determine Requirements", "Implementation", "Architect Design"],
    correct: 1
  },
  {
    topic: "Project Stages",
    q: "Which is the LAST of the 7 stages of a System Integration project?",
    options: ["Implementation", "System Integration Design", "Maintenance", "Develop the Management Plan"],
    correct: 2
  },
  {
    topic: "The Integrator",
    q: "The System Integrator specializes in what?",
    options: [
      "Bringing disparate internal and external applications into a single integrated solution",
      "Writing marketing copy for software products",
      "Manufacturing computer hardware",
      "Setting company HR policy"
    ],
    correct: 0
  },
  {
    topic: "The Integrator",
    q: "Where does the reviewer say System Integrator roles exist in the Philippines?",
    options: [
      "Only in small startups",
      "At every large PH bank, telco, and BPO",
      "Only in government agencies",
      "Only in schools and universities"
    ],
    correct: 1
  },
  {
    topic: "The Integrator",
    q: "What is the payoff of good system integration according to the module?",
    options: [
      "Slower but more accurate reporting",
      "Streamlined, real-time data sharing and increased efficiency",
      "Reduced need for any IT staff",
      "Elimination of all hardware costs"
    ],
    correct: 1
  },
  {
    topic: "Principles",
    q: "What does the principle of Loose Coupling emphasize?",
    options: [
      "Designing systems with minimal interdependencies",
      "Tightly binding every component together",
      "Using only one programming language across all systems",
      "Removing all security controls"
    ],
    correct: 0
  },
  {
    topic: "Principles",
    q: "Security and Governance, as a principle, covers which of the following?",
    options: [
      "Marketing and sales alignment",
      "Authentication, authorization, data protection, and access control",
      "Employee scheduling",
      "Office space planning"
    ],
    correct: 1
  },
  {
    topic: "Patterns & Styles",
    q: "Which pattern involves components emitting events that other components react to?",
    options: ["Batch Processing", "Event-Driven Architecture", "Point to Point", "Vertical Integration"],
    correct: 1
  },
  {
    topic: "Patterns & Styles",
    q: "Which pattern splits an application into small, independent services?",
    options: ["Microservices", "Enterprise Service Bus", "Publish/Subscribe", "Common Data Format"],
    correct: 0
  },
  {
    topic: "Patterns & Styles",
    q: "Which pattern uses a centralized message backbone that mediates communication?",
    options: ["Enterprise Service Bus", "Star", "Hub and Spoke", "Horizontal Integration"],
    correct: 0
  }
];

// ===== State =====
let order = [];
let current = 0;
let score = 0;
let answered = false;

const screenIntro = document.getElementById("screen-intro");
const screenQuiz = document.getElementById("screen-quiz");
const screenResults = document.getElementById("screen-results");

const qTopic = document.getElementById("q-topic");
const qText = document.getElementById("q-text");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const progressFill = document.getElementById("progress-fill");
const qCounter = document.getElementById("q-counter");
const qScore = document.getElementById("q-score");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  order = shuffle(QUESTIONS.map((_, i) => i));
  current = 0;
  score = 0;
  answered = false;
  screenIntro.classList.add("hidden");
  screenResults.classList.add("hidden");
  screenQuiz.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  feedbackEl.classList.add("hidden");
  const qIndex = order[current];
  const question = QUESTIONS[qIndex];

  qTopic.textContent = question.topic;
  qText.textContent = question.q;
  qCounter.textContent = `Question ${current + 1} / ${QUESTIONS.length}`;
  qScore.textContent = `Score: ${score}`;
  progressFill.style.width = `${(current / QUESTIONS.length) * 100}%`;

  // Shuffle option order but remember correct answer's new index
  const letters = ["A", "B", "C", "D"];
  const optIndices = shuffle(question.options.map((_, i) => i));

  optionsEl.innerHTML = "";
  optIndices.forEach((origIndex, pos) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="opt-letter">${letters[pos]}</span><span>${question.options[origIndex]}</span>`;
    btn.addEventListener("click", () => selectAnswer(origIndex, question, btn));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(chosenIndex, question, btnEl) {
  if (answered) return;
  answered = true;

  const allButtons = optionsEl.querySelectorAll(".option");
  allButtons.forEach((b) => (b.disabled = true));

  const isCorrect = chosenIndex === question.correct;
  if (isCorrect) score++;

  allButtons.forEach((b) => {
    const label = b.querySelector("span:last-child").textContent;
    if (label === question.options[question.correct]) {
      b.classList.add("correct");
    } else if (b === btnEl && !isCorrect) {
      b.classList.add("wrong");
    } else {
      b.classList.add("dim");
    }
  });

  feedbackText.innerHTML = isCorrect
    ? `<strong>Correct!</strong> Nice recall.`
    : `<strong>Not quite.</strong> The right answer is highlighted above.`;
  feedbackEl.classList.remove("hidden");
  qScore.textContent = `Score: ${score}`;
}

function nextQuestion() {
  current++;
  if (current >= QUESTIONS.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  progressFill.style.width = "100%";
  screenQuiz.classList.add("hidden");
  screenResults.classList.remove("hidden");

  const pct = Math.round((score / QUESTIONS.length) * 100);
  document.getElementById("result-score").textContent = score;

  const headline = document.getElementById("result-headline");
  const sub = document.getElementById("result-sub");
  if (pct >= 90) {
    headline.textContent = "Module 1, mastered.";
  } else if (pct >= 70) {
    headline.textContent = "Solid grasp.";
  } else if (pct >= 50) {
    headline.textContent = "Getting there.";
  } else {
    headline.textContent = "Back to the reviewer.";
  }
  sub.textContent = `You got ${score} out of ${QUESTIONS.length} right (${pct}%).`;

  const ring = document.getElementById("ring-fg");
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (pct / 100) * circumference;
  ring.style.strokeDasharray = `${circumference}`;
  // reset then animate
  ring.style.strokeDashoffset = `${circumference}`;
  requestAnimationFrame(() => {
    ring.style.strokeDashoffset = `${offset}`;
  });
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("retake-btn").addEventListener("click", startQuiz);
