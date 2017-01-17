function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function eyesClosed() {
    document.getElementById('title').innerText = "-___________-";
    await sleep(350);
    document.getElementById('title').innerText = "•___________•";
}

async function eyesDead() {
    document.getElementById('page').style.marginTop="10%";
    document.getElementById('title').innerText = "^___________^";
    await sleep(350);
    document.getElementById('page').style.marginTop="20%";
    await sleep(400);
    document.getElementById('title').innerText = "•___________•";
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
