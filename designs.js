// add Event Listener to submit button, prevent refresh.
let submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
  event.preventDefault();
  makeGrid();
});

// take value of color from colorPicker cell and make variable color
function findColor() {
  let color = document.getElementById("colorPicker").value;
  return color;
};

// function to on click change cell background if TD to color selected in colorPicker
function changeColor() {
  findColor();
  var grid = document.getElementById('pixelCanvas');
  grid.addEventListener('click', function (event) {
    if (event.target.nodeName === "TD") {
      event.target.style.backgroundColor = findColor();
    };
  });
};

// event.target.style.backgroundColor = color
//makeGrid();  defining size by using width and height entered variables
function makeGrid() {
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;

  // give elements a variable in order to create them
  let body = document.getElementsByTagName("body")[0];

  // let table= document.createElement("table");
  var grid = document.getElementById('pixelCanvas');

  // clears old grid
  grid.innerHTML = "";
  let tbody = document.createElement("tbody");

  //loop through height and width, creating elements
  for (var i = 0; i < height; i++) {
    let row = document.createElement("tr");
    for (var j = 0; j < width; j++) {
      let cell = document.createElement("td");

      // let cellText = document.createTextNode("cell in row "+i+", column "+j);
      let cellText = document.createTextNode("");

      //append created elements to create cell and row
      cell.append(cellText);
      row.append(cell);
    };
    tbody.appendChild(row);
  };

  //append created elements to create table and make appear in body
  grid.appendChild(tbody);
  body.appendChild(grid);

  //function running awaiting click on cell to change its background color
  changeColor();

};