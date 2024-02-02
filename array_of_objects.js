const opskrifter = [
  {
    navn: "Cacio e pepe",
    ingredienser: ["Pasta", "Peber", "Ost", "Vand"],
    varighed: "20 min",
    portioner: "4",
    billede: "filnavn.webp",
  },
  {
    navn: "Carbona",
    ingredienser: ["Pasta", "Æg", "Ost", "Salt"],
    varighed: "20 min",
    portioner: "3",
    billede: "filnavn.webp",
  },
  {
    navn: "Kartoffelpizza",
    ingredienser: ["Pizzadej", "ricotta", "Kartoffel", "Rosmarin"],
    varighed: "30 min",
    portioner: "3",
    billede: "filnavn.webp",
  },
  {
    navn: "Hvedebrød",
    ingredienser: ["Ølandsmel", "Hvedemel", "Surdej", "Salt", "Vand"],
    varighed: "1 time",
    portioner: "6",
    billede: "filnavn.webp",
  },
];

const skabelon = document.querySelector("template").content;

opskrifter.forEach(visOpskrifter);

function visOpskrifter(opskrifter) {
  // Tjekker at min funktion bliver kaldt

  const klon = skabelon.cloneNode(true);
  console.log("klon");

  klon.querySelector("h2").textContent = opskrifter.navn;
  klon.querySelector("h3").textContent = opskrifter.varighed;
  klon.querySelector("p").textContent += "Portioner: " + opskrifter.portioner;
  klon.querySelector("img").src = opskrifter.billede;
  klon.querySelector("img").alt = "Billede af opskriften " + opskrifter.navn;

  //   ul.innerHTML += "<li>" + opskrifter.ingredienser + "</li>";

  const beholder = document.querySelector("main");
  beholder.appendChild(klon);
}
