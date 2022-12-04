function updateForm() {
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

function calculatePerimeter() {
  // get the selected shape
  let shape = document.getElementById("shapes").value;

  // calculate the perimeter of the shape
  let perimeter = 0;
  switch (shape) {
    case "circle":
      let radius = document.getElementById("radius").value;
      perimeter = Math.PI * 2 * radius;
      break;
    case "triangle":
      let base = document.getElementById("base").value;
      let sideA = document.getElementById("sideA").value;
      let sideB = document.getElementById("sideB").value;
      perimeter = base + sideA + sideB;
      break;
    case "square":
      let side = document.getElementById("side").value;
      perimeter = 4 * side;
      break;
    case "rectangle":
      let length = document.getElementById("length").value;
      let width = document.getElementById("width").value;
      perimeter = 2 * length + 2 * width;
      break;
  }

  // output the perimeter
  document.getElementById("output").innerHTML = "Périmètre = " + perimeter.toFixed(2);
}
