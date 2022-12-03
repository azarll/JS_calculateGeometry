function updateform() {
  //  hide all inputs
  document.getElementById("inputs-circle").hidden = true;
  document.getElementById("inputs-triangle").hidden = true;
  document.getElementById("inputs-square").hidden = true;
  document.getElementById("inputs-rectangle").hidden = true;

  // get the selected shape and show inputs
  let shape = document.getElementById("shapes").value;
  switch (shape) {
    case "circle":
      document.getElementById("inputs-circle").hidden = false;
      break;
    case "triangle":
      document.getElementById("inputs-triangle").hidden = false;
      break;
    case "square":
      document.getElementById("inputs-square").hidden = false;
      break;
    case "rectangle":
      document.getElementById("inputs-rectangle").hidden = false;
      break;
  }
}

function calculateArea() {
  // get the selected shape
  let shape = document.getElementById("shapes").value;

  // calculate the area of the shape
  let area = 0;
  switch (shape) {
    case "circle":
      let radius = document.getElementById("radius").value;
      area = Math.PI * radius * radius;
      break;
    case "triangle":
      let base = document.getElementById("base").value;
      let height = document.getElementById("height").value;
      area = (base * height) / 2;
      break;
    case "square":
      let side = document.getElementById("side").value;
      area = side * side;
      break;
    case "rectangle":
      let length = document.getElementById("length").value;
      let width = document.getElementById("width").value;
      area = length * width;
      break;
  }

  // output the area
  document.getElementById("output").innerHTML = "Area = " + area;
}
