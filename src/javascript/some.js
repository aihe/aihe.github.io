function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var autreEnCours = false;

async function eyesClosed() {
    if (autreEnCours == false) {
        autreEnCours = true;
        document.getElementById('title').innerText = "( -___________-)";
        await sleep(350);
        document.getElementById('title').innerText = "( •___________•)";
        autreEnCours = false;
    }
}

async function eyesHappy() {
    if (autreEnCours == false) {
        autreEnCours = true;
        document.getElementById('page').style.marginTop="10%";
        document.getElementById('title').innerText = "ヽ( ^___________^)ﾉ";
        await sleep(350);
        document.getElementById('page').style.marginTop="20%";
        await sleep(400);
        document.getElementById('title').innerText = "( •___________•)";
        autreEnCours = false;
    }
}

async function dancing() {
    while(autreEnCours) {
        document.getElementById('title').innerText = "( ^___________^)";
        var nb = Math.random();
        console.log(nb);
        if (nb < 0.333) {
            document.getElementById('page').style.marginLeft="5%";
            document.getElementById('title').innerText = "ᕕ( ^___________^)ᕗ";
            await sleep(450);
            document.getElementById('page').style.marginLeft="15%";
            await sleep(400);
        } else if (nb > 0.333 && nb < 0.666) {
            document.getElementById('page').style.marginLeft="25%";
            document.getElementById('title').innerText = "(づ ^___________^)づ";
            await sleep(400);
            document.getElementById('page').style.marginLeft="15%";
            await sleep(450);
        } else if (nb > 0.666) {
            document.getElementById('page').style.marginTop="10%";
            document.getElementById('title').innerText = "ᑫ( ^___________^)ᑷ";
            await sleep(450);
            document.getElementById('page').style.marginTop="20%";
            await sleep(400);
        }
    }
}

function play() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        document.getElementById('dancing').style.display="inline";
        document.getElementById('icone').innerHTML=
        "<i class='fa fa-pause-circle fa-2x' aria-hidden='true'></i>";
        autreEnCours = true;
        dancing();
    } else {
        audio.pause();
        audio.currentTime = 0;
        autreEnCours = false;
        document.getElementById('title').innerText = "( •___________•)";
        document.getElementById('dancing').style.display="none";
        document.getElementById('icone').innerHTML=
        "<i class='fa fa-play-circle fa-2x' aria-hidden='true'></i>";
    }
}

function clignotement() {
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
