const band = {
  navn: "Blæst",
  medlemmer: ["Fernanda", "Anders", "Valentin", "Peter"],
  dannet: "2018",
  albums: ["Vindstille", "Stiv kuling"],
  billede: "filnavn.webp",
};

const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const img = document.querySelector("img");

h2.textContent = `Bandnavn: ${band.navn}`;
p.textContent += "Bandets medlemmer er " + band.medlemmer;
p.textContent += ". De har udgivet albumene" + band.albums[1] + "og" + band.albums[0];
img.src = band.billede;
img.alt = "Billede af bandet " + band.navn;
