window.addEventListener("load", sidenVises);

let promille;

function sidenVises() {
  console.log("Siden Vises");
  document.querySelector("#cola").addEventListener("mousedown", alkoholfri);
  document.querySelector("#faxe").addEventListener("mousedown", alkoholfri);
  document.querySelector("#beer").addEventListener("mousedown", alkohol);
  document.querySelector("#snaps").addEventListener("mousedown", alkohol);
}

function alkohol() {
  promille = 1;

  alkoholTjek();
}

function alkoholfri() {
  promille = 0;

  alkoholTjek();
}

function alkoholTjek() {
  console.log("alkoholTjek");

  if (promille == 0) {
    console.log("Drikken er alkoholfri");
  } else {
    console.log("Drikken indeholder alkohol");
  }
}
