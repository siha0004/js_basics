window.addEventListener("load", hilsen);

let klokken;

function hilsen() {
  klokken = new Date().getHours();
  console.log(klokken);

  if (klokken < 5) {
    console.log("Godnat");
  } else if (klokken < 10) {
    console.log("Godmorgen");
  } else if (klokken < 18) {
    console.log("Goddag");
  } else console.log("Godaften");
}
