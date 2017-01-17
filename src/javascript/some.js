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

async function eyesHappy() {
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

function play(){
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        document.getElementById('dancing').style.display="inline";
        document.getElementById('icone').innerHTML=
        "<i class='fa fa-pause-circle fa-2x' aria-hidden='true'></i>";
    } else {
        audio.pause();
        audio.currentTime = 0;
        autreEnCours = false;
        document.getElementById('dancing').style.display="none";
        document.getElementById('icone').innerHTML=
        "<i class='fa fa-play-circle fa-2x' aria-hidden='true'></i>";
    }
}

var clignotement = function(){
    if (autreEnCours == false) {
        autreEnCours = true;
        if (document.getElementById('commandes').style.visibility=='visible'){
           document.getElementById('commandes').style.visibility='hidden';
        } else {
        document.getElementById('commandes').style.visibility='visible';
        }
        autreEnCours = false;
    }
};

periode = setInterval(clignotement, 800);
