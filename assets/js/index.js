"strict mode";

//variable declarations

const startBtn = document.getElementById("start-btn");
const main = document.getElementById("main");
const infoSctn = document.getElementById("info-section");
const nextBtn = document.getElementById("next-btn");
let questionIndex = 0;

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
  //get current question. 1st question is 0, array zero based
  const currentQuestion = questions[questionIndex];

  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "section-container");
  section.setAttribute("id", "question-container");

  //create header
  const header = document.createElement("header");
  header.setAttribute("class", "header-container");

  //create header div
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header-container");

  //create h1 title
  const h1appTitle = document.createElement("h1");
  h1appTitle.setAttribute("class", "application-title");
  h1appTitle.textContent = "Code Quiz";

  //create font awesome js logo
  const jsLogo = document.createElemnet("i");
  jsLogo.setAttribute("class", "fa-brands fa-js");
  //create div hud wrapper
  const divHudWrapper = document.createElement("div");
  divHudWrapper.setAttribute("class", "hud-wrapper");
  //create Highscore hud div
  const divHSHud = document.createElement("div");
  divHSHud.setAttribute("class", "hs-hud");

  const divHSHud = document.createElement("div");
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
