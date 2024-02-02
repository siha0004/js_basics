const knap = document.querySelector("button");

knap.addEventListener("click", test);
let tal = Math.floor(Math.random() * 11);

function test() {
  console.log(tal);
  const input = document.querySelector("#tal").value;
  if (tal == input) {
    confirm(input + " er RIGTIGT! Vil du prøve med et nyt tal?");
    tal = Math.floor(Math.random() * 11);
  } else if (input < tal) {
    confirm(input + " er for lavt!. Prøv igen");
  } else {
    confirm(input + " er for højt!. Prøv igen");
  }
}
