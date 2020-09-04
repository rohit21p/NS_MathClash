let grid = document.getElementById("grid");
let maxRows = 6,
  maxColumns = 6,
  totalRows = 0;
for (let i = 0; i < maxRows; i++) {
  for (let j = 0; j < maxColumns; j++) {
    let cell = document.createElement("div");
    cell.className = "cell blank";
    cell.id = i + "" + j;
    grid.appendChild(cell);
  }
}
let numbers = [];

function renderBoard() {
  for (let i = 0; i < totalRows; i++) {
    for (let j = 0; j < maxColumns; j++) {
      let cell = document.getElementById(i + "" + j);
      cell.innerText = numbers[i][j];
      cell.style.color = "white";
    }
  }
}

let id = setInterval(() => {
  if (totalRows >= maxRows) {
    clearInterval(id);
    let timer = document.querySelector(".timer-animation");
    timer.style.animation = "none";
    timer.style["background-color"] = "grey";
    return;
  }
  let newRow = [];
  for (let i = 0; i < maxColumns; i++) {
    newRow.push(1 + Math.floor(Math.random() * 9));
  }
  numbers = [newRow, ...numbers];
  totalRows++;
  renderBoard();
}, 5000);
