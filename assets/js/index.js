"strict mode";

const questions = [
  {
    question: "How can a datatype be declared to be a constant type?",
    options: ["var", "let", "const", "int"],
    correctOption: "const",
  },

  {
    question: "Which of these variables is function scoped? ",
    options: ["var", "let", "const", "int"],
    correctOption: "var",
  },
  {
    question:
      "In strict mode, what does the this keyword point to in a regular function call and not as a method or property of an object?",
    options: [
      "window object",
      "undefined",
      "the function itself",
      "global object",
    ],
    correctOption: "undefined",
  },
  {
    question:
      "Which built-in method returns the calling string value converted to lower case? ",
    options: ["lowerCase()", "toLowerCase()", "toLower()", "toLCase()"],
    correctOption: "toLowerCase()",
  },
  {
    question:
      "Which of these array methods mutates the existing array and not return an new array?",
    options: ["concat()", "push()", "map()", "reduce()"],
    correctOption: "push()",
  },
  {
    question:
      "Which of these array methods remove an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctOption: "pop()",
  },
  {
    question: "what is the result of console.log(typeof NaN)?",
    options: ["NaN", "Boolean", "Number", "String"],
    correctOption: "Number",
  },
  {
    question: "How many threads does the JS engine have?",
    options: ["single", "dual", "multi", "none"],
    correctOption: "var",
  },
];

//variable declarations

const startBtn = document.getElementById("start-btn");
const main = document.getElementById("main");
const infoSctn = document.getElementById("info-section");
const nextBtn = document.getElementById("next-btn");
const timerCount = document.querySelector(".time");
const questionContainer = document.getElementById("question-container");
let questionIndex = 0;
let count = questions.length * 6;

//question Array
//callback Fns
const initLS = function () {
  const highScoreLS = JSON.parse(localStorage.getItem("highScore"));

  //if not exist, set empty string
  if (!highScoreLS) {
    localStorage.setItem("highScore", JSON.stringify([]));
  }
};

const removeStartButton = function () {
  startBtn.remove();
};

const renderInfoSection = function () {
  infoSctn.classList.remove("section-hide");
  infoSctn.classList.add("section-active");
};

const qSctnRender = function () {
  //remove info section
  if (infoSctn) {
    infoSctn.remove();
  }

  //get current question. 1st question is 0, array zero based
  const currentQuestion = questions[questionIndex];

  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "section-container");
  section.setAttribute("id", "question-container");

  //create header
  const header = document.createElement("header");
  header.setAttribute("class", "header");

  //create header div
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header-container");

  //create h1 title
  const h1appTitle = document.createElement("h1");
  h1appTitle.setAttribute("class", "application-title");
  h1appTitle.textContent = "Code Quiz";

  //create font awesome js logo
  const jsLogo = document.createElement("i");
  jsLogo.setAttribute("class", "fa-brands fa-js");
  //create div hud wrapper
  const divHudWrapper = document.createElement("div");
  divHudWrapper.setAttribute("class", "hud-wrapper");
  //create Highscore hud div
  const divHSHud = document.createElement("div");
  divHSHud.setAttribute("class", "hs-hud");
  //highscore points div
  const hsPointsDiv = document.createElement("div");
  hsPointsDiv.setAttribute("class", "hs-points");
  hsPointsDiv.textContent = "Pts";
  //highscore div
  const highscoreDiv = document.createElement("div");
  highscoreDiv.setAttribute("class", "highscore");
  highscoreDiv.textContent = "10";
  //timer hud div
  const timerHudDiv = document.createElement("div");
  timerHudDiv.setAttribute("class", "timer-hud");
  //time left div
  const timeLeftDiv = document.createElement("div");
  timeLeftDiv.setAttribute("class", "time-left");
  timeLeftDiv.textContent = "Time";
  //time div
  const timeDiv = document.createElement("div");
  timeDiv.setAttribute("class", "time");
  timeDiv.setAttribute("id", "time");
  timeDiv.textContent = "15";
  //time bar - progress bar
  const timeBarDiv = document.createElement("div");
  timeBarDiv.setAttribute("class", "time-bar");
  //create h1 question title
  const h1Question = document.createElement("h1");
  h1Question.setAttribute("class", "question-section-title");
  h1Question.textContent = `${questionIndex + 1}: ${currentQuestion.question}`;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "choice-list");
  ul.setAttribute("data-answer", currentQuestion.correctOption);

  for (let i = 0; i < currentQuestion.options.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("class", "choice-item");
    li.setAttribute("data-option", currentQuestion.options[i]);
    li.textContent = currentQuestion.options[i];
    ul.append(li);
  }
  //append structure
  main.append(section);
  section.append(header, h1Question, ul);
  header.append(headerDiv, timeBarDiv);
  headerDiv.append(h1appTitle, divHudWrapper);
  h1appTitle.prepend(jsLogo);
  divHudWrapper.append(divHSHud, timerHudDiv);
  divHSHud.append(hsPointsDiv, highscoreDiv);
  timerHudDiv.append(timeLeftDiv, timeDiv);

  ul.addEventListener("click", handleOptionClick);
};

const handleOptionClick = function (e) {
  const currentTarget = e.currentTarget;
  const target = e.target;
  console.log(target);
  if (target.matches("li")) {
    const userOption = target.getAttribute("data-option");

    const correctOption = currentTarget.getAttribute("data-answer");

    if (userOption === correctOption) {
      questionIndex++;
      console.log(questionIndex);
      questionContainer.remove();
      if (questionIndex < questions.length) qSctnRender();
    } else {
      count -= 5;
    }
  }
};
const infoSectionLoad = function () {
  //initialise Local Storage
  initLS();

  //remove Start Button
  removeStartButton();

  //render info section
  renderInfoSection();

  //add event listener on next button
  nextBtn.addEventListener("click", qSctnRender);
};

//Event Listeners AEL

startBtn.addEventListener("click", infoSectionLoad);
