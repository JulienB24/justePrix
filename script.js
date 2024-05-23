const objets = [
  "Sac à main",
  "Costume d'Halloween",
  "Grill",
  "Guitare",
  "Chaise de bureau",
];
const images = [
  "sac-a-main.png",
  "costume-halloween.png",
  "grill.png",
  "guitare.png",
  "chaise.png",
];

let prixATrouver;
let prixPropose;
let nbrTentative = 10;
let nbrAlea = Math.floor(Math.random() * objets.length);
const logo = document.querySelector("#photo");
const imageElement = document.querySelector("#img");
const nomImgElement = document.querySelector("#nomImg");
const jouerButton = document.querySelector("#jouer");
const validerButton = document.querySelector("#valider");
const affichTentative = document.querySelector("#affichTentative");
const message = document.querySelector("#message");
const input = document.querySelector("#input");

message.style.display = "none";
affichTentative.style.display = "none";

validerButton.style.display = "none";
input.style.display = "none";
function afficherImg(valeur) {
  return (
    '<img src="./img/' +
    valeur +
    '" class="offset-md-5 col-md-2 mt-2 col-4 offset-4" />'
  );
}

jouerButton.addEventListener("click", function () {
  logo.style.display = "none";
  jouerButton.style.display = "none";
  message.style.display = "none";
  affichTentative.style.display = "block";
  validerButton.style.display = "inline";
  input.style.display = "block";
  jouer.innerHTML = "Rejouer !";
  prixATrouver = Math.floor(Math.random() * 100);
  nbrAlea = Math.floor(Math.random() * objets.length);
  imageElement.innerHTML = afficherImg(images[nbrAlea]);
  nomImgElement.innerHTML = objets[nbrAlea];
  nbrTentative = 10;
  affichTentative.innerHTML =
    "Nombre de tentatives restantes : " + nbrTentative; // Initialisation du nombre de tentatives
  message.innerHTML = "";
  jouerButton.disabled = true;
});

validerButton.addEventListener("click", function () {
  prixPropose = parseInt(document.querySelector("#prix").value);
  message.style.display = "block";
  if (
    isNaN(prixPropose) ||
    prixPropose == "" ||
    prixPropose < 0 ||
    prixPropose > 100
  ) {
    message.innerHTML =
      "PRIX INVALIDE ! Veuillez entrer un chiffre entre 1 et 100";
  } else {
    if (prixATrouver > prixPropose) {
      message.innerHTML =
        "  C'est plus ! <i class='fa-solid fa-arrow-trend-up' ></i>";
    } else if (prixATrouver < prixPropose) {
      message.innerHTML =
        "C'est moins ! <i class='fa-solid fa-arrow-trend-down'></i>";
    } else {
      message.innerHTML =
        "<div class=' bg-success text-white row justify-content-center col-md-12 border rounded ' >FÉLICITATIONS ! Vous avez trouvé le juste prix !</div>";
      input.style.display = "none";

      validerButton.style.display = "none";
      jouerButton.style.display = "block";

      jouerButton.disabled = false;
    }
    nbrTentative--;
  }
  if (nbrTentative === 0 && prixATrouver !== prixPropose) {
    message.innerHTML =
      "VOUS AVEZ PERDU !! <br> Le juste prix était : " + prixATrouver + " €";
    jouerButton.style.display = "block";

    validerButton.style.display = "none";
    input.style.display = "none";
    jouerButton.disabled = false;
  }
  affichTentative.innerHTML =
    "Nombre de tentatives restantes : </div>" + nbrTentative;
});
