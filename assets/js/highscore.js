"strict mode";
const mainHS = document.getElementById("main");
const hsSctn = document.getElementById("highscore-section");
const footer = document.querySelector(".footer");
const resetBtn = document.getElementById("reset-btn");
const renderHSList = function () {
  const highScoresList = JSON.parse(localStorage.getItem("hsResults"));

  if (highScoresList) {
    const rankOl = document.createElement("ol");
    rankOl.setAttribute("class", "rank-list");
    highScoresList
      .slice(0, 6)
      .sort((a, b) => b.score - a.score)
      .forEach((hs) => {
        const li = document.createElement("li");
        li.setAttribute("class", "rank-item");
        li.textContent = `${hs.initials.padEnd(50, "---")}${hs.score}`;
        rankOl.append(li);
      });
    hsSctn.append(rankOl, footer);
  }
};

const resetScores = function () {
  localStorage.clear();
  const olList = document.querySelector(".rank-list");
  if (olList) {
    olList.remove();
  }
};
resetBtn.addEventListener("click", resetScores);
window.addEventListener("load", renderHSList);
