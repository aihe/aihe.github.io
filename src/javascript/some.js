function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var autreEnCours = false;

async function eyesClosed() {
    if (autreEnCours == false) {
        autreEnCours = true;
        document.getElementById('title').innerText = "-___________-";
        await sleep(350);
        document.getElementById('title').innerText = "•___________•";
        autreEnCours = false;
    }
}

async function eyesDead() {
    if (autreEnCours == false) {
        autreEnCours = true;
        document.getElementById('page').style.marginTop="10%";
        document.getElementById('title').innerText = "^___________^";
        await sleep(350);
        document.getElementById('page').style.marginTop="20%";
        await sleep(400);
        document.getElementById('title').innerText = "•___________•";
        autreEnCours = false;
    }
}

var clignotement = function(){
   if (document.getElementById('commandes').style.visibility=='visible'){
      document.getElementById('commandes').style.visibility='hidden';
   }
   else{
   document.getElementById('commandes').style.visibility='visible';
   }
};

periode = setInterval(clignotement, 800);
