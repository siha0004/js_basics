//Laver en konstant med mit array, som jeg navngiver 'playliste'
const playliste = ["sang 1", "sang 2", "sang 3", "sang 4", "sang 5", "sang 6", "sang 7"];

//Laver en konstant som går over og peger på mit ul-element i DOM'en
const ul = document.querySelector("ul");

// For hvert element i mit array 'Playliste' kører jeg funktionen bygliste
playliste.forEach(bygListe);

function bygListe(sang) {
  // Tjekker at min funktion bliver kaldt
  console.log("bygListe");

  //   I mit ul-element, tilføjer jeg (OBS på det lille plus foran lighedstegnet)
  ul.innerHTML += "<li>" + sang + "</li>";
}
