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
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    // gridElement.addEventListener("mouseover", changeColor);
    // gridElement.addEventListener("mousedown", changeColor);
    grid.appendChild(gridElement);
  }
}
// gridCreator();
