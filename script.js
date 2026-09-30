// ============================================
// INTERVIEW AI - JAVASCRIPT
// ============================================


// ============================================
// 1. QUESTION BANK
// ============================================

const questionBank = {

    "Software Engineer": [

        {
            question: "Tell me about yourself.",
            expectedKeywords: ["student", "computer", "programming", "project", "skill"]
        },

        {
            question: "What is JavaScript and where is it used?",
            expectedKeywords: ["programming", "language", "web", "browser", "dynamic"]
        },

        {
            question: "What is Object-Oriented Programming?",
            expectedKeywords: ["object", "class", "inheritance", "encapsulation", "polymorphism"]
        },

        {
            question: "What is the difference between HTML, CSS and JavaScript?",
            expectedKeywords: ["html", "structure", "css", "style", "javascript", "behavior"]
        },

        {
            question: "Tell me about a technical project you have worked on.",
            expectedKeywords: ["project", "technology", "problem", "solution", "result"]
        }

    ],


    "Web Developer": [

        {
            question: "Tell me about yourself.",
            expectedKeywords: ["student", "web", "website", "project", "skill"]
        },

        {
            question: "What is responsive web design?",
            expectedKeywords: ["screen", "mobile", "layout", "media", "device"]
        },

        {
            question: "What is the DOM in JavaScript?",
            expectedKeywords: ["document", "object", "element", "html", "javascript"]
        },

        {
            question: "What is the difference between Flexbox and CSS Grid?",
            expectedKeywords: ["layout", "flexbox", "grid", "row", "column"]
        },

        {
            question: "How would you improve the performance of a website?",
            expectedKeywords: ["image", "cache", "load", "minify", "speed"]
        }

    ],


    "Data Analyst": [

        {
            question: "Tell me about yourself.",
            expectedKeywords: ["student", "data", "analysis", "project", "skill"]
        },

        {
            question: "What is data analysis?",
            expectedKeywords: ["data", "analysis", "pattern", "insight", "decision"]
        },

        {
            question: "What is SQL?",
            expectedKeywords: ["database", "query", "data", "table", "sql"]
        },

        {
            question: "What is data visualization?",
            expectedKeywords: ["data", "visual", "chart", "graph", "insight"]
        },

        {
            question: "Tell me about a data-related project you have worked on.",
            expectedKeywords: ["data", "project", "analysis", "result", "technology"]
        }

    ],


    "Java Developer": [

        {
            question: "Tell me about yourself.",
            expectedKeywords: ["student", "java", "programming", "project", "skill"]
        },

        {
            question: "What is the JVM and why is Java platform independent?",
            expectedKeywords: ["jvm", "bytecode", "platform", "compile", "machine"]
        },

        {
            question: "What is the difference between an interface and an abstract class?",
            expectedKeywords: ["interface", "abstract", "method", "class", "implement"]
        },

        {
            question: "What is exception handling in Java?",
            expectedKeywords: ["exception", "try", "catch", "error", "finally"]
        },

        {
            question: "What are collections in Java?",
            expectedKeywords: ["list", "set", "map", "arraylist", "collection"]
        }

    ],


    "Marketing": [

        {
            question: "Tell me about yourself.",
            expectedKeywords: ["student", "marketing", "communication", "project", "skill"]
        },

        {
            question: "What is digital marketing?",
            expectedKeywords: ["marketing", "digital", "online", "social", "customer"]
        },

        {
            question: "What is SEO?",
            expectedKeywords: ["search", "engine", "optimization", "website", "ranking"]
        },

        {
            question: "How would you promote a new product?",
            expectedKeywords: ["customer", "social", "marketing", "content", "campaign"]
        },

        {
            question: "How do you measure the success of a marketing campaign?",
            expectedKeywords: ["traffic", "conversion", "engagement", "sales", "roi"]
        }

    ]

};


// Role card details (description + small line icon)

const roleInfo = {

    "Software Engineer": {
        description: "Programming fundamentals, OOP and project discussion.",
        icon: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>'
    },

    "Web Developer": {
        description: "HTML, CSS, JavaScript, DOM and responsive design.",
        icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>'
    },

    "Data Analyst": {
        description: "SQL, data analysis and visualization concepts.",
        icon: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
    },

    "Java Developer": {
        description: "JVM, OOP in Java, exceptions and collections.",
        icon: '<path d="M6 10h11v4a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5v-4zM17 11h1.5a2.5 2.5 0 0 1 0 5H17M9 3v3M12 3v3"/>'
    },

    "Marketing": {
        description: "Digital marketing, SEO and campaign strategy.",
        icon: '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1zM16 8a5 5 0 0 1 0 8"/>'
    }

};


// ============================================
// 2. VARIABLES
// ============================================

let selectedRole = "";

let questions = [];

let currentQuestionIndex = 0;

let totalScore = 0;

let totalKeywordMatches = 0;

let totalKeywords = 0;

let questionScores = [];

let timer;

let timeLeft = 45;

const QUESTION_TIME = 45;


// ============================================
// 3. GET HTML ELEMENTS
// ============================================

const welcomeScreen = document.getElementById("welcomeScreen");
const roleScreen = document.getElementById("roleScreen");
const interviewScreen = document.getElementById("interviewScreen");
const resultScreen = document.getElementById("resultScreen");

const brandButton = document.getElementById("brandButton");
const startButton = document.getElementById("startButton");
const roleBackButton = document.getElementById("roleBackButton");
const roleGrid = document.getElementById("roleGrid");
const beginButton = document.getElementById("beginButton");

const roleTitle = document.getElementById("roleTitle");
const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");
const progressSteps = document.getElementById("progressSteps");
const questionCard = document.querySelector(".question-card");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const characterCount = document.getElementById("characterCount");
const timerDisplay = document.getElementById("timer");
const timerBox = document.getElementById("timerBox");
const timerProgress = document.getElementById("timerProgress");
const submitButton = document.getElementById("submitButton");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackContent = document.getElementById("feedbackContent");
const nextButton = document.getElementById("nextButton");

const resultRole = document.getElementById("resultRole");
const finalRing = document.getElementById("finalRing");
const finalScore = document.getElementById("finalScore");
const readinessText = document.getElementById("readinessText");
const answeredQuestions = document.getElementById("answeredQuestions");
const averageScore = document.getElementById("averageScore");
const averageBar = document.getElementById("averageBar");
const keywordScore = document.getElementById("keywordScore");
const keywordBar = document.getElementById("keywordBar");
const questionResults = document.getElementById("questionResults");
const retryButton = document.getElementById("retryButton");


// ============================================
// 4. HELPERS
// ============================================

// Show one screen and hide the others (with a fade-in animation)
function showScreen(screen) {

    [welcomeScreen, roleScreen, interviewScreen, resultScreen].forEach(function (s) {
        s.classList.add("hidden");
    });

    screen.classList.remove("hidden");

    window.scrollTo(0, 0);

}

// Returns "good", "warn" or "bad" for colouring scores
function scoreLevel(score) {

    if (score >= 80) return "good";
    if (score >= 60) return "warn";
    return "bad";

}

// Count a number up from 0 (used for scores)
function animateNumber(element, target, suffix) {

    const duration = 900;
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.round(target * eased) + (suffix || "");
        if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);

}

// Fill a conic-gradient score ring from 0 to target
function animateRing(ring, target) {

    const duration = 900;
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        ring.style.setProperty("--p", target * eased);
        if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);

}


// ============================================
// 5. LANDING + ROLE SELECTION
// ============================================

startButton.onclick = function () {

    showScreen(roleScreen);

};

roleBackButton.onclick = function () {

    showScreen(welcomeScreen);

};

brandButton.onclick = function () {

    clearInterval(timer);

    showScreen(welcomeScreen);

};


// Build role cards from the question bank

Object.keys(questionBank).forEach(function (role, index) {

    const info = roleInfo[role];

    const card = document.createElement("button");

    card.className = "role-card";

    card.style.animationDelay = (index * 0.04) + "s";

    card.innerHTML = `
        <div class="role-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${info.icon}</svg>
        </div>
        <div class="role-body">
            <h3>${role}</h3>
            <p>${info.description}</p>
            <span class="role-tag">${questionBank[role].length} questions · ${QUESTION_TIME}s each</span>
        </div>
        <div class="role-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>
        </div>
    `;

    card.onclick = function () {
        selectRole(role);
    };

    // Double click starts the interview straight away
    card.ondblclick = function () {
        selectRole(role);
        beginButton.click();
    };

    card.dataset.role = role;

    roleGrid.appendChild(card);

});


function selectRole(role) {

    selectedRole = role;

    document.querySelectorAll(".role-card").forEach(function (card) {
        card.classList.toggle("selected", card.dataset.role === role);
    });

    beginButton.disabled = false;

}


// ============================================
// 6. START INTERVIEW
// ============================================

beginButton.onclick = function () {

    if (!selectedRole) return;

    questions = questionBank[selectedRole];

    currentQuestionIndex = 0;

    totalScore = 0;

    totalKeywordMatches = 0;

    totalKeywords = 0;

    questionScores = [];

    showScreen(interviewScreen);

    roleTitle.textContent = selectedRole;

    totalQuestions.textContent = questions.length;

    showQuestion();

};


// ============================================
// 7. SHOW QUESTION
// ============================================

function showQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    questionNumber.textContent = currentQuestionIndex + 1;

    // replay the fade-in animation for the new question
    questionCard.style.animation = "none";
    void questionCard.offsetWidth;
    questionCard.style.animation = "";

    answerInput.value = "";

    answerInput.readOnly = false;

    characterCount.textContent = "0";

    feedbackBox.classList.add("hidden");

    submitButton.disabled = false;

    submitButton.style.display = "";

    nextButton.firstChild.textContent =
        currentQuestionIndex === questions.length - 1
            ? "View Results "
            : "Next Question ";

    renderProgress();

    window.scrollTo({ top: 0, behavior: "smooth" });

    answerInput.focus({ preventScroll: true });

    startTimer();

}


// Progress indicator: 01 — 02 — 03 — 04 — 05

function renderProgress() {

    let html = "";

    questions.forEach(function (q, i) {

        let state = "";

        if (i < currentQuestionIndex) state = "done";
        else if (i === currentQuestionIndex) state = "current";

        if (i > 0) {
            html += `<div class="step-line ${i <= currentQuestionIndex ? "done" : ""}"></div>`;
        }

        html += `<div class="step ${state}">${String(i + 1).padStart(2, "0")}</div>`;

    });

    progressSteps.innerHTML = html;

}


// ============================================
// 8. CHARACTER COUNTER
// ============================================

answerInput.oninput = function () {

    characterCount.textContent = answerInput.value.length;

};


// ============================================
// 9. TIMER
// ============================================

function startTimer() {

    clearInterval(timer);

    timeLeft = QUESTION_TIME;

    timerDisplay.textContent = timeLeft;

    timerBox.classList.remove("warning");

    timerProgress.classList.remove("warning");

    // reset the bar instantly (no transition), then let it shrink smoothly
    timerProgress.style.transition = "none";
    timerProgress.style.width = "100%";
    void timerProgress.offsetWidth;
    timerProgress.style.transition = "";

    timer = setInterval(function () {

        timeLeft--;

        timerDisplay.textContent = timeLeft;

        const percentage = (timeLeft / QUESTION_TIME) * 100;

        timerProgress.style.width = percentage + "%";

        const warning = timeLeft <= 10;

        timerBox.classList.toggle("warning", warning);

        timerProgress.classList.toggle("warning", warning);

        if (timeLeft <= 0) {

            clearInterval(timer);

            evaluateAnswer();

        }

    }, 1000);

}


// ============================================
// 10. SUBMIT ANSWER
// ============================================

submitButton.onclick = function () {

    evaluateAnswer();

};


// ============================================
// 11. EVALUATE ANSWER
// Score = Answer Length (40%) + Keyword Match (60%)
// ============================================

function evaluateAnswer() {

    // Stop the timer
    clearInterval(timer);

    // Disable submit button and lock the answer
    submitButton.disabled = true;

    submitButton.style.display = "none";

    answerInput.readOnly = true;

    // Get student's answer
    const answer = answerInput.value.trim().toLowerCase();

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];

    // Get expected keywords
    const keywords = currentQuestion.expectedKeywords;


    // ========================================
    // 1. CHECK ANSWER LENGTH
    // ========================================

    let lengthScore = 0;

    let lengthFeedback = "";

    let answerQuality = "";


    if (answer.length === 0) {

        lengthScore = 0;
        lengthFeedback = "No answer was provided.";
        answerQuality = "Very Poor";

    }

    else if (answer.length < 30) {

        lengthScore = 20;
        lengthFeedback = "Your answer is too short. Try explaining your idea in more detail.";
        answerQuality = "Needs Improvement";

    }

    else if (answer.length < 80) {

        lengthScore = 50;
        lengthFeedback = "Your answer is acceptable, but adding more detail would make it stronger.";
        answerQuality = "Average";

    }

    else if (answer.length < 150) {

        lengthScore = 75;
        lengthFeedback = "Good answer length. Your response contains useful information.";
        answerQuality = "Good";

    }

    else {

        lengthScore = 100;
        lengthFeedback = "Excellent answer length. You provided a detailed response.";
        answerQuality = "Excellent";

    }


    // ========================================
    // 2. CHECK KEYWORDS
    // ========================================

    let matchedKeywords = [];

    let missingKeywords = [];


    keywords.forEach(function (keyword) {

        if (answer.includes(keyword)) {
            matchedKeywords.push(keyword);
        }

        else {
            missingKeywords.push(keyword);
        }

    });


    // Calculate keyword percentage

    const keywordPercentage =
        Math.round((matchedKeywords.length / keywords.length) * 100);


    // Update overall keyword statistics

    totalKeywordMatches += matchedKeywords.length;

    totalKeywords += keywords.length;


    // ========================================
    // 3. CALCULATE FINAL SCORE
    // ========================================

    const finalQuestionScore =
        Math.round((lengthScore * 0.4) + (keywordPercentage * 0.6));


    // Add score to total

    totalScore += finalQuestionScore;


    // Save question score

    questionScores.push({
        question: currentQuestion.question,
        score: finalQuestionScore
    });


    // ========================================
    // 4. DETERMINE STRENGTHS
    // ========================================

    let strengths = [];

    if (answer.length >= 80) {
        strengths.push("Good answer length");
    }

    if (matchedKeywords.length >= Math.ceil(keywords.length / 2)) {
        strengths.push("Good use of relevant concepts");
    }

    if (matchedKeywords.length === keywords.length) {
        strengths.push("All important keywords detected");
    }

    if (strengths.length === 0) {
        strengths.push("You attempted the interview question");
    }


    // ========================================
    // 5. DETERMINE IMPROVEMENTS
    // ========================================

    let improvements = [];

    if (answer.length < 80) {
        improvements.push("Try providing a more detailed explanation");
    }

    if (missingKeywords.length > 0) {
        improvements.push("Include more relevant concepts");
    }

    if (answer.length >= 80 && matchedKeywords.length < keywords.length) {
        improvements.push("Connect your answer with specific examples");
    }

    if (improvements.length === 0) {
        improvements.push("Keep practicing to maintain consistency");
    }


    // ========================================
    // 6. CREATE AI SUGGESTION
    // ========================================

    let suggestion = "";

    if (finalQuestionScore >= 80) {

        suggestion = "Excellent response! Try adding a real-world example to make your answer even more impressive.";

    }

    else if (finalQuestionScore >= 60) {

        suggestion = "Good attempt! Focus on explaining the key concepts more clearly and support your answer with an example.";

    }

    else {

        suggestion = "Try understanding the main concepts related to the question and give a longer, more structured answer.";

    }


    // ========================================
    // 7. BUILD FEEDBACK SCREEN
    // ========================================

    const level = scoreLevel(finalQuestionScore);

    const hitChips = matchedKeywords.map(function (k) {
        return `<span class="chip hit">${k}</span>`;
    }).join("");

    const missChips = missingKeywords.map(function (k) {
        return `<span class="chip miss">${k}</span>`;
    }).join("");

    const feedbackHTML = `

        <div class="fb-top">

            <div class="ring ${level}" id="questionRing">
                <div class="ring-inner">
                    <span id="questionScore">0</span>
                    <small>/ 100</small>
                </div>
            </div>

            <div class="fb-metrics">

                <div>
                    <p class="metric-label">Answer quality</p>
                    <p class="metric-value">${answerQuality}</p>
                </div>

                <div>
                    <p class="metric-label">Keyword match</p>
                    <p class="metric-value">${matchedKeywords.length} / ${keywords.length}
                        <span class="muted">(${keywordPercentage}%)</span>
                    </p>
                </div>

                <p class="metric-note">${lengthFeedback}</p>

            </div>

        </div>

        <div class="fb-section">
            <h4>Concepts</h4>
            <div class="chips">
                ${hitChips}
                ${missChips}
            </div>
        </div>

        <div class="fb-cols">

            <div class="fb-section">
                <h4>Strengths</h4>
                <ul class="fb-list good">
                    ${strengths.map(function (s) { return `<li>${s}</li>`; }).join("")}
                </ul>
            </div>

            <div class="fb-section">
                <h4>Areas to improve</h4>
                <ul class="fb-list improve">
                    ${improvements.map(function (s) { return `<li>${s}</li>`; }).join("")}
                </ul>
            </div>

        </div>

        <div class="fb-section suggestion">
            <div class="suggestion-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/></svg>
            </div>
            <div>
                <h4>AI Suggestion</h4>
                <p>${suggestion}</p>
            </div>
        </div>

    `;


    // ========================================
    // 8. SHOW FEEDBACK
    // ========================================

    feedbackContent.innerHTML = feedbackHTML;

    feedbackBox.classList.remove("hidden");

    animateRing(document.getElementById("questionRing"), finalQuestionScore);

    animateNumber(document.getElementById("questionScore"), finalQuestionScore);

    feedbackBox.scrollIntoView({ behavior: "smooth", block: "start" });

}


// ============================================
// 12. NEXT QUESTION
// ============================================

nextButton.onclick = function () {

    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        showResults();
    } else {
        showQuestion();
    }

};


// ============================================
// 13. SHOW RESULTS
// ============================================

function showResults() {

    // Stop timer
    clearInterval(timer);

    showScreen(resultScreen);


    // Final score = average of all question scores

    const finalAverage = Math.round(totalScore / questions.length);


    // Keyword score

    const finalKeywordPercentage =
        totalKeywords === 0
            ? 0
            : Math.round((totalKeywordMatches / totalKeywords) * 100);


    // Basic results (animated)

    resultRole.textContent = selectedRole + " · " + questions.length + " questions";

    const level = scoreLevel(finalAverage);

    finalRing.className = "ring ring-lg " + level;

    animateRing(finalRing, finalAverage);

    animateNumber(finalScore, finalAverage);

    animateNumber(averageScore, finalAverage, "%");

    animateNumber(keywordScore, finalKeywordPercentage, "%");

    animateNumber(answeredQuestions, questions.length);

    averageBar.style.width = "0";
    keywordBar.style.width = "0";

    setTimeout(function () {
        averageBar.style.width = finalAverage + "%";
        keywordBar.style.width = finalKeywordPercentage + "%";
    }, 100);


    // Readiness status

    let status = "";
    let pill = "";

    if (finalAverage >= 80) {
        status = "Interview Ready";
        pill = "Excellent";
    }

    else if (finalAverage >= 60) {
        status = "Almost Ready";
        pill = "Good — keep practicing";
    }

    else {
        status = "Needs Improvement";
        pill = "Below target";
    }

    readinessText.innerHTML =
        `<span class="status-pill ${level}">${pill}</span><br>${status}`;


    // Final recommendation

    const recommendationText = document.getElementById("recommendationText");

    if (finalAverage >= 80) {

        recommendationText.textContent =
            "Excellent performance! Your answers were detailed and contained strong relevant concepts. You are showing good interview readiness.";

    }

    else if (finalAverage >= 60) {

        recommendationText.textContent =
            "Good performance! Your fundamentals are developing well. Focus on giving more detailed answers and using practical examples.";

    }

    else {

        recommendationText.textContent =
            "Keep practicing! Focus on understanding the key concepts, structuring your answers clearly, and providing more relevant details.";

    }


    // Question performance

    questionResults.innerHTML = "";

    questionScores.forEach(function (item, index) {

        const resultDiv = document.createElement("div");

        resultDiv.className = "result-question";

        resultDiv.innerHTML = `
            <span class="rq-num">Q${index + 1}</span>
            <span class="rq-text" title="${item.question}">${item.question}</span>
            <div class="score-bar-container">
                <div class="score-bar ${scoreLevel(item.score)}"></div>
            </div>
            <span class="rq-score">${item.score}</span>
        `;

        questionResults.appendChild(resultDiv);

        // animate bar after it is on the page
        setTimeout(function () {
            resultDiv.querySelector(".score-bar").style.width = item.score + "%";
        }, 150 + index * 80);

    });

}


// ============================================
// 14. RETRY INTERVIEW
// ============================================

retryButton.onclick = function () {

    clearInterval(timer);

    // go back to role selection (previous role stays selected)
    showScreen(roleScreen);

};
