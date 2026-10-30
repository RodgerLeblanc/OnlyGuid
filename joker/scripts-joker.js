var countDownInterval = 0;
var countDownDate = new Date("Dec 2, 2023 23:00:00").getTime();

function updateCountDown() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distanceToCountDown = countDownDate - now;
  
    // If the count down is finished, write some text
    if (distanceToCountDown < 0) {
      clearInterval(countDownInterval);
      document.getElementById("countdown").innerHTML = "BOOM !!!";
    }
    else {
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distanceToCountDown / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distanceToCountDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distanceToCountDown % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distanceToCountDown % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("countdown").innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";
    }
  }

function refreshCrypto() {
  const crypto = generateCrypto();
  document.getElementById("uncrypted").innerHTML = crypto;
  document.getElementById("crypted").innerHTML = crypto;
}

function generateCrypto() {
  const words = [
    "Rock Ferland",
    "Yves Goulet",
    "France Houde",
    "Jean-Francois Gosselin",
    "Yves Lepine",
    "Steve Lavoie",
    "Steve Riley",
    "Bernard Lavallee",
    "Micromedica",
    "Multihexa",
    "Party",
    "Quarante ans",
    "Chalet",
  ];

  return words[Math.floor(Math.random() * words.length)];
}

function init() {
  document.getElementById("joker-button").addEventListener("click", refreshCrypto);
  updateCountDown();
  countDownInterval = setInterval(updateCountDown, 1000);

  const dialog = document.querySelector("dialog");
  const addUsernamePasswordButton = document.getElementById("add-username-password-button");
  const closeButton = document.querySelector("dialog button");
  
  addUsernamePasswordButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dialogMessage = document.getElementById("dialog-message");

    dialogMessage.innerHTML = getRandomMessage(username, password);

    dialog.showModal();
  });
  
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}

function getRandomMessage(username, password) {
  const messages = [
    "Criss que t'es patient !!!",
    "Essayez encore, seulement 1$ pour rejouer",
    "Manqué!!! Ouin, il n'y en aura pas de facile",
    "Aille!! C'est pas ça ton mot de passe le cave !",
    "Je te défie de compter combien il y a de messages d'erreur ! Ça va peut-être te servir un jour ?",
    "...Boring !",
    "Lâche PAS !!! Tu va finir par comprendre",
    "Trompe toi encore une fois et je formate ton cellulaire !",
    "Vous venez de gagner un niveau !!!",
    "Vous venez de perdre une cellule",
    "Tic tac tic tac ... Courez le plus loin de votre appareil, ne vous retournez pas!",
    "Félicitations ! Maintenant on a juste besoin de votre # de carte de crédit",
    "Erreur ! L'opération a été complétée avec succès !!",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}