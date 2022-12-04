function updateForm() {
  //  hide all inputs
  document.getElementById("inputs-sphere").hidden = true;
  document.getElementById("inputs-prism").hidden = true;
  document.getElementById("inputs-cone").hidden = true;
  document.getElementById("inputs-cylinder").hidden = true;

  // get the selected shape and show inputs
  let shape = document.getElementById("shapes").value;
  switch (shape) {
    case "sphere":
      document.getElementById("inputs-sphere").hidden = false;
      break;
    case "prism":
      document.getElementById("inputs-prism").hidden = false;
      break;
    case "cone":
      document.getElementById("inputs-cone").hidden = false;
      break;
    case "cylinder":
      document.getElementById("inputs-cylinder").hidden = false;
      break;
  }
}

function calculateVolume() {
  // get the selected shape
  let shape = document.getElementById("shapes").value;

  // calculate the volume of the shape
  let volume = 0;
  switch (shape) {
    case "sphere":
      let radiusSphere = document.getElementById("radiusSphere").value;
      volume = 4 * Math.PI * radius * radius * radius / 3;
      break;
    case "prism":
      let lengthPrism = document.getElementById("lengthPrism").value;
      let widthPrism = document.getElementById("widthPrism").value;
      let heightPrism = document.getElementById("heightPrism").value;
      volume = lengthPrism * widthPrism * heightPrism;
      break;
    case "cone":
      let side = document.getElementById("side").value;
      volume = side * side;
      break;
    case "cylinder":
      let lengthCylinder = document.getElementById("lengthCylinder").value;
      let widthCylinder = document.getElementById("widthCylinder").value;
      volume = length * width;
      break;
  }

  // output the volume
  document.getElementById("output").innerHTML = "Volume = " + volume.toFixed(2);
}
