// ===== Question bank: Module 2 — Integration Technologies and Protocols =====
const QUESTIONS = [
  {
    topic: "Web Services & APIs",
    q: "What is a web service?",
    options: [
      "A defined method for facilitating communication and interoperability between software systems over a network, delivered via the Web",
      "Any page rendered in a browser for a human to read",
      "A database used only for internal storage",
      "A physical server rack in a data center"
    ],
    correct: 0
  },
  {
    topic: "Web Services & APIs",
    q: "The book names three open standards that web services are built on. Which set is correct?",
    options: [
      "HTML, CSS, JavaScript",
      "XML, SOAP, HTTP",
      "JSON, REST, TCP",
      "FTP, SMTP, XML"
    ],
    correct: 1
  },
  {
    topic: "Web Services & APIs",
    q: "When a browser requests a page, what does a web service return instead?",
    options: [
      "HTML for a human to read",
      "XML or JSON for another program to use",
      "A printed report",
      "Nothing — web services don't respond"
    ],
    correct: 1
  },
  {
    topic: "Web Services & APIs",
    q: "SOAP is best described as which of the following?",
    options: [
      "An architectural style",
      "A query language",
      "A communications protocol based on XML",
      "A database engine"
    ],
    correct: 2
  },
  {
    topic: "Web Services & APIs",
    q: "Besides HTTP, what two other protocols can SOAP use?",
    options: [
      "FTP and DNS",
      "SMTP and TCP",
      "UDP and SSH",
      "IMAP and POP3"
    ],
    correct: 1
  },
  {
    topic: "Web Services & APIs",
    q: "REST is best described as which of the following?",
    options: [
      "A strict messaging protocol",
      "A type of architecture that uses features already present in HTTP",
      "A database query language",
      "A hardware standard"
    ],
    correct: 1
  },
  {
    topic: "Web Services & APIs",
    q: "What does REST emphasize as its core communication style?",
    options: [
      "Stateful client-server communication",
      "Stateless client-server communication",
      "Peer-to-peer file sharing",
      "One-way broadcast messaging"
    ],
    correct: 1
  },
  {
    topic: "Web Services & APIs",
    q: "GraphQL is best described as which of the following?",
    options: [
      "A protocol for XML exchange",
      "A query language for APIs and a runtime for executing those queries",
      "A type of database",
      "A message queue"
    ],
    correct: 1
  },
  {
    topic: "Web Services & APIs",
    q: "What problem does GraphQL solve that a fixed REST endpoint often can't?",
    options: [
      "It removes the need for any network connection",
      "It cuts down over-fetching and under-fetching by letting clients request exactly the data they need",
      "It eliminates the need for authentication",
      "It converts all data to XML automatically"
    ],
    correct: 1
  },
  {
    topic: "Web Services & APIs",
    q: "Which data format does SOAP require?",
    options: ["JSON only", "XML", "Plain text", "CSV"],
    correct: 1
  },
  {
    topic: "HTTP Verbs",
    q: "What does the GET verb do?",
    options: ["Reads something", "Creates something", "Updates something", "Removes something"],
    correct: 0
  },
  {
    topic: "HTTP Verbs",
    q: "What does the POST verb do?",
    options: ["Reads something", "Creates something", "Updates something", "Removes something"],
    correct: 1
  },
  {
    topic: "HTTP Verbs",
    q: "What does the PUT verb do?",
    options: ["Reads something", "Creates something", "Updates something", "Removes something"],
    correct: 2
  },
  {
    topic: "HTTP Verbs",
    q: "What does the DELETE verb do?",
    options: ["Reads something", "Creates something", "Updates something", "Removes something"],
    correct: 3
  },
  {
    topic: "HTTP Verbs",
    q: "What does it mean for REST that the server is 'stateless'?",
    options: [
      "The server remembers every previous request from a client",
      "The server keeps nothing about you between requests, so every request must carry everything it needs",
      "The server has no data at all",
      "The server never responds to requests"
    ],
    correct: 1
  },
  {
    topic: "Sync vs Async",
    q: "In synchronous communication, what does the sender do after sending a request?",
    options: [
      "Waits for a response before continuing",
      "Carries on immediately without waiting",
      "Deletes the request",
      "Shuts down"
    ],
    correct: 0
  },
  {
    topic: "Sync vs Async",
    q: "Which analogy does the book use for synchronous communication?",
    options: ["Sending a parcel by courier", "A phone call", "Mailing a letter", "Leaving a voicemail"],
    correct: 1
  },
  {
    topic: "Sync vs Async",
    q: "Which analogy does the book use for asynchronous communication?",
    options: ["A phone call", "A video conference", "Sending a parcel through a courier — drop it off and leave", "Shouting across a room"],
    correct: 2
  },
  {
    topic: "Sync vs Async",
    q: "If the receiving system is down, what happens to a synchronous request?",
    options: [
      "It waits patiently in a queue",
      "It fails",
      "It is automatically retried forever",
      "It gets converted to asynchronous"
    ],
    correct: 1
  },
  {
    topic: "Sync vs Async",
    q: "If the receiving system is down, what happens to an asynchronous message?",
    options: [
      "It fails immediately",
      "It is discarded",
      "It waits in the queue until the receiver is available",
      "It is sent to a human operator"
    ],
    correct: 2
  },
  {
    topic: "MOM & Message Queuing",
    q: "What is message-oriented middleware (MOM)?",
    options: [
      "A software architecture that helps applications communicate by exchanging messages, managing delivery, routing, and transformation",
      "A type of database index",
      "A programming language for writing APIs",
      "A hardware firewall"
    ],
    correct: 0
  },
  {
    topic: "MOM & Message Queuing",
    q: "What is the key guarantee MOM provides?",
    options: [
      "Messages are delivered instantly or not at all",
      "Messages are delivered even if sender and receiver are never online at the same time, or the network has problems",
      "Messages are always encrypted",
      "Messages never exceed 1KB"
    ],
    correct: 1
  },
  {
    topic: "MOM & Message Queuing",
    q: "Which of these is NOT one of the four benefits of message queues?",
    options: ["Asynchronous communication", "Reliable delivery", "Load balancing", "Automatic UI design"],
    correct: 3
  },
  {
    topic: "MOM & Message Queuing",
    q: "Which message queue benefit is described as distributing tasks over numerous consumers to improve scalability?",
    options: ["Fault tolerance", "Load balancing", "Reliable delivery", "Message persistence"],
    correct: 1
  },
  {
    topic: "MOM & Message Queuing",
    q: "In the book's order-processing example, what happens after an order is placed?",
    options: [
      "The order is emailed directly to a manager",
      "The order details are added to a message queue, and downstream systems consume from it",
      "The order is deleted after checkout",
      "The order bypasses all other systems"
    ],
    correct: 1
  },
  {
    topic: "SOA",
    q: "What does Service-Oriented Architecture (SOA) emphasize?",
    options: [
      "Developing services as reusable components to enable interoperability and flexibility",
      "Writing all code in a single monolithic application",
      "Avoiding the use of interfaces between systems",
      "Storing all data in one central spreadsheet"
    ],
    correct: 0
  },
  {
    topic: "SOA",
    q: "Which SOA principle is achieved through service registries and directories?",
    options: ["Service reusability", "Service discoverability", "Service composability", "Service loose coupling"],
    correct: 1
  },
  {
    topic: "SOA",
    q: "Which SOA principle involves combining services into more intricate business processes via orchestration or choreography?",
    options: ["Service interoperability", "Service reusability", "Service composability", "Service discoverability"],
    correct: 2
  },
  {
    topic: "SOA",
    q: "Which SOA principle relies on open standards like XML, SOAP, REST, and WSDL?",
    options: ["Service interoperability", "Service composability", "Service reusability", "Service discoverability"],
    correct: 0
  },
  {
    topic: "EDA",
    q: "How does EDA differ from SOA?",
    options: [
      "SOA is event-driven; EDA is request-driven",
      "SOA is request-driven; EDA is event-driven",
      "They are identical in every way",
      "EDA has no consumers"
    ],
    correct: 1
  },
  {
    topic: "EDA",
    q: "In EDA, which component subscribes to events it's interested in and reacts?",
    options: ["Event producer", "Event consumer", "Event channel", "Event router"],
    correct: 1
  },
  {
    topic: "EDA",
    q: "Which EDA principle facilitates communication between producers and consumers, using things like message queues and event streaming platforms?",
    options: ["Event processing", "Event channels", "Event-driven middleware", "Event producers"],
    correct: 1
  },
  {
    topic: "EDA",
    q: "In the book's IoT example, what triggers real-time actions like adjusting a smart-home device?",
    options: [
      "A scheduled monthly report",
      "Events generated by connected devices from sensor data or environmental conditions",
      "A manual override by a technician",
      "A static configuration file"
    ],
    correct: 1
  },
  {
    topic: "Microservices",
    q: "How does microservices architecture organize an application?",
    options: [
      "As one large application with a single database",
      "As a collection of small, independent services, each geared toward a specific business capability",
      "As a single service that handles all functionality",
      "As a set of static HTML pages"
    ],
    correct: 1
  },
  {
    topic: "Microservices",
    q: "Why does each microservice have its own database, per the independent data management principle?",
    options: [
      "To waste storage space intentionally",
      "So no service can be broken by another service's schema change, preserving loose coupling",
      "Because shared databases are illegal",
      "Because it makes deployment slower on purpose"
    ],
    correct: 1
  },
  {
    topic: "Microservices",
    q: "In a monolith, what happens when one component crashes?",
    options: [
      "Only that component is affected",
      "The whole application goes down",
      "Nothing happens",
      "The database automatically repairs itself"
    ],
    correct: 1
  },
  {
    topic: "Microservices",
    q: "Which of these is listed as a DIFFICULTY of microservices architecture, not a benefit?",
    options: [
      "Scalability",
      "Improved team autonomy",
      "Managing communication between services and ensuring data consistency",
      "Fault tolerance"
    ],
    correct: 2
  },
  {
    topic: "Platforms & Tools",
    q: "What distinguishes an integration platform from an integration tool?",
    options: [
      "A platform is an all-inclusive environment for planning, executing, and managing integrations; a tool is standalone and focused on one feature or use case",
      "A platform is always free, a tool is always paid",
      "There is no meaningful difference",
      "A tool can only be used once"
    ],
    correct: 0
  },
  {
    topic: "Platforms & Tools",
    q: "Apache Kafka is best known as which of the following?",
    options: [
      "A relational database",
      "A fault-tolerant, high-throughput real-time event streaming platform used in EDA and microservice communication",
      "A no-code automation tool for consumer apps",
      "A word processor"
    ],
    correct: 1
  },
  {
    topic: "Platforms & Tools",
    q: "What is Postman, correctly stated (ignoring the book's faulty attribution)?",
    options: [
      "A product of the company Postgres",
      "An API development and testing tool, made by Postman Inc.",
      "A relational database system",
      "A message queue"
    ],
    correct: 1
  },
  {
    topic: "Platforms & Tools",
    q: "Zapier is best described as which of the following?",
    options: [
      "A cloud-based, no-code automation platform that links web apps via triggered 'Zaps'",
      "An enterprise message broker requiring extensive coding",
      "A relational database engine",
      "A hardware networking appliance"
    ],
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
    headline.textContent = "Module 2, mastered.";
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
