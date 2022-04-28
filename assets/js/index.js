"strict mode";

//variable declarations

const startBtn = document.getElementById("start-btn");
const main = document.getElementById("main");
const infoSctn = document.getElementById("info-section");

//callback Fns

const removeStartButton = function () {
  startBtn.remove();
};

const renderInfoSection = function () {
  // //create Section
  // const section = document.createElement("section");
  // section.setAttribute("class", "section-container");
  // section.setAttribute("id", "info-section");
  // //create Header
  // const header = document.createElement("header");
  // header.setAttribute("class", "header");
  // //create JS FA logo
  // const i1 = document.createElement("i");
  // i1.setAttribute("class", "fa-brands fa-js");
  // //create Highscore Crown logo
  // const i2 = document.createElement("i");
  // i2.setAttribute("class", "fa-solid fa-crown fa-xl");
  // //create h1
  // const h1 = document.createElement("h1");
  // h1.setAttribute("class", "content-section-title");
  // h1.textContent = "Code Quiz";
  // //create div wrapper
  // const hsDiv = document.createElement("div");
  // hsDiv.setAttribute("class", "hs-btn");
  // //create anchor
  // const anchor = document.createElement("a");
  // anchor.setAttribute("href", "highscore.html");
  // anchor.textContent = i2;
  // //create ordered list
  // const ruleOl = document.createElement("ol");
  // ruleOl.setAttribute("class", "rule-list");
  // const li1 = document.createElement("li");
  // li1.setAttribute("class", "rule-list");
  // const li2 = document.createElement("li");
  // li2.setAttribute("class", "rule-list");
  // const li3 = document.createElement("li");
  // li3.setAttribute("class", "rule-list");
  // const li4 = document.createElement("li");
  // li4.setAttribute("class", "rule-list");
  // //append
  // ruleOl.append(li1, li2, li3, li4);
  // hsDiv.append(anchor);
  // header.append(h1, hsDiv);
  // section.append(header);
  // main.append(section);

  infoSctn.classList.remove("section-hide");
  infoSctn.classList.add("section-active");
};

const infoSectionLoad = function () {
  //remove Start Button
  removeStartButton();

  //render info section
  renderInfoSection();
};

//Event Listeners AEL

startBtn.addEventListener("click", infoSectionLoad);
