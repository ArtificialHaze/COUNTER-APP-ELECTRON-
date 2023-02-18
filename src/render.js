const mainBtn = document.querySelector(".counter");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const closeBtn = document.querySelector(".quit");

mainBtn.addEventListener("click", () => {
  mainBtn.textContent++;
});

increaseBtn.addEventListener("click", () => {
  mainBtn.textContent++;
});

decreaseBtn.addEventListener("click", () => {
  mainBtn.textContent--;
});

resetBtn.addEventListener("click", () => {
  mainBtn.textContent = 0;
});

closeBtn.addEventListener("click", () => {
  quitApp();
});

function quitApp() {
  window.myAPI.quitApp();
}
