"strict mode";

//variable declarations
const startBtn = document.getElementById("start-btn");
const main = document.getElementById("main");
const infoSctn = document.getElementById("info-section");
const nextBtn = document.getElementById("next-btn");
const questionSection = document.getElementById("question-container");
const formSection = document.getElementById("form-container");
const pointsCounter = document.querySelector(".ptsTotal");
const timeBar = document.querySelector(".time-bar");
const bestScore = document.querySelector(".best-score");
const submitBtn = document.querySelector(".submit-btn");
const heroTitle = document.querySelector(".hero-title");
let ul, h1Question;
let points = 0;
let questionIndex = 0;
let count = questions.length * 6;

//question Array
//callback Fns
const initLS = function () {
  const highScoreLS = JSON.parse(localStorage.getItem("hsResults"));

  //if not exist, set empty string
  if (!highScoreLS) {
    localStorage.setItem("hsResults", JSON.stringify([]));
  }
};

const storeInLS = function (key, value) {
  const arrFromLS = JSON.parse(localStorage.getItem(key));
  arrFromLS.push(value);
  localStorage.setItem(key, JSON.stringify(arrFromLS));
};

const removeStartButton = function () {
  startBtn.remove();
  heroTitle.remove();
};

const handleFormSubmit = function (e) {
  e.preventDefault();
  const initials = document.getElementById("initials").value;
  const score = bestScore.textContent;
  if (initials) {
    const scoreObj = {
      initials: initials,
      score: score,
    };

    storeInLS("hsResults", scoreObj);
  } else {
    alert("Please Enter your initials!");
  }
  submitBtn.setAttribute("disabled", "disabled");
  submitBtn.textContent = "Submitted";
};

const gameOverRender = function () {
  questionSection.remove();
  formSection.classList.remove("section-hide");
  bestScore.textContent = pointsCounter.textContent;
  formSection.addEventListener("submit", handleFormSubmit);
};

const startTimer = function () {
  const countdownTimer = function () {
    if (questionIndex >= questions.length) {
      clearInterval(timer);
    } else if (count < 0) {
      clearInterval(timer);
      removeQuestionSctn();
      gameOverRender();
    } else {
      count -= 1;
      const timerCount = document.querySelector(".time");
      timerCount.textContent = count;
    }
  };

  const timer = setInterval(countdownTimer, 1000);
};

const qSctnRender = function () {
  //get current question. 1st question is 0, array zero based
  const currentQuestion = questions[questionIndex];

  //create h1 question title
  h1Question = document.createElement("h1");
  h1Question.setAttribute("class", "question-section-title");
  h1Question.textContent = `${questionIndex + 1}: ${currentQuestion.question}`;

  ul = document.createElement("ul");
  ul.setAttribute("class", "choice-list");
  ul.setAttribute("data-answer", currentQuestion.correctOption);

  currentQuestion.options.forEach((opt) => {
    const li = document.createElement("li");
    li.setAttribute("class", "choice-item");
    li.setAttribute("data-option", opt);
    li.textContent = opt;
    ul.append(li);
  });
  //append structure
  main.append(questionSection);
  questionSection.append(h1Question, ul);

  ul.addEventListener("click", optionHandler);
};

const removeQuestionSctn = function () {
  ul.remove();
  h1Question.remove();
};

const optionHandler = function (e) {
  console.log(questionIndex);
  const currentTarget = e.currentTarget;
  const target = e.target;
  console.log(target);
  if (target.matches("li")) {
    const userOption = target.getAttribute("data-option");

    const correctOption = currentTarget.getAttribute("data-answer");
    userOption === correctOption
      ? (points += 10)
      : ((points -= 5), (count -= 10));
    pointsCounter.textContent = points;
    questionIndex++;
    if (questionIndex < questions.length) {
      removeQuestionSctn();
      qSctnRender();
    } else {
      removeQuestionSctn();
      gameOverRender();
    }
  }
};

const renderInfoSection = function () {
  infoSctn.classList.remove("section-hide");
  infoSctn.classList.add("section-active");
};

const startQuiz = function () {
  infoSctn.remove();
  questionSection.classList.remove("section-hide");
  qSctnRender();
  startTimer();
};
const infoSectionLoad = function () {
  //initialise Local Storage
  initLS();

  //remove Start Button
  removeStartButton();

  //render info section
  renderInfoSection();

  //add event listener on next button
  nextBtn.addEventListener("click", startQuiz);
};

//Event Listeners AEL

startBtn.addEventListener("click", infoSectionLoad);

console.log(Object.values(questions));
