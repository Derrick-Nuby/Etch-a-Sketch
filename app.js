// const slider = document.getElementById("slider");
const grid = document.getElementById("grid-container");
const playInstructions = document.getElementById("playInstructions");
const playNow = document.getElementById("play-now");
const notification = document.getElementById("notification");
// const clearAll = document.getElementById("clearAll");

let sliderSize = 16;

function updateSlider() {
  sliderSize = slider.value;
  document.getElementById("sizeValue").innerText =
    slider.value + " X " + slider.value;
  gridCreator(sliderSize);
}

playInstructions.addEventListener("click", () => {
  notification.style.cssText =
    "display: block;display: flex;flex-direction: column; gap: 20px; align-items: center;";
  grid.style.cssText = "display: none;";
});

playNow.addEventListener("click", () => {
  notification.style.cssText = "display: none;";
  grid.style.cssText = "display: grid;";
  gridCreator(sliderSize);
});

function clearAll() {
  grid.innerHTML = "";
  gridCreator(sliderSize);
}

function gridCreator(gridSize) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.addEventListener("mouseover", colorEffect);
    // gridElement.addEventListener("mouseover", colorEffect);
    grid.appendChild(gridElement);
  }
}

function colorEffect(e) {
  e.target.style.backgroundColor = "#000000";
}

window.onload = () => {
  gridCreator(sliderSize);
};
