// const slider = document.getElementById("slider");
const grid = document.getElementById("grid-container");
const playInstructions = document.getElementById("playInstructions");
const playNow = document.getElementById("play-now");
const notification = document.getElementById("notification");
// const clearAll = document.getElementById("clearAll");

function updateSlider() {
  const gridSize = slider.value;
  document.getElementById("sizeValue").innerText =
    slider.value + " X " + slider.value;
  gridCreator(gridSize);
}

playInstructions.addEventListener("click", () => {
  notification.style.cssText =
    "display: block;display: flex;flex-direction: column; gap: 20px; align-items: center;";
  grid.style.cssText = "display: none;";
});

playNow.addEventListener("click", () => {
  notification.style.cssText = "display: none;";
  grid.style.cssText = "display: block;";
});

function clearAll() {
  grid.innerHTML = "";
}

function gridCreator(gridSize) {
  for (let index = 0; index < gridSize; index++) {
    const rwflex = document.createElement("div");
    rwflex.classList.add("rwflex");
    const bxflex = document.createElement("div");
    bxflex.classList.add("bxflex");
    rwflex.innerText = "hello world";
    bxflex.innerText = "hello world";
    grid.appendChild(rwflex);
    rwflex.appendChild(bxflex);
  }
}
// gridCreator();
