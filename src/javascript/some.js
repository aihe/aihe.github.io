var autreEnCours = false;

function eyesClosed() {
    if (autreEnCours == false) {
        autreEnCours = true;
        document.getElementById('title').innerText = "( -___________-)";
        setTimeout(function(){
            document.getElementById('title').innerText = "( •___________•)";
            autreEnCours = false;
        }, 350);
    }
}

function eyesHappy() {
    if (autreEnCours == false) {
        autreEnCours = true;
        document.getElementById('page').style.marginTop="10%";
        document.getElementById('title').innerText = "ヽ( ^___________^)ﾉ";

        setTimeout(function(){
            document.getElementById('page').style.marginTop="20%";
        }, 400);

        setTimeout(function(){
            document.getElementById('title').innerText = "( •___________•)";
            autreEnCours = false;
        }, 800);
    }
}

function dancing() {
    document.getElementById('title').innerText = "( ^___________^)";
    var nb = Math.random();
    console.log(nb);

    if (nb < 0.333) {
        document.getElementById('page').style.marginLeft="5%";
        document.getElementById('title').innerText = "ᕕ(^___________^ )ᕗ";

        setTimeout(function(){
            document.getElementById('page').style.marginLeft="15%";
			document.getElementById('title').innerText = "ᕕ( ^___________^)ᕗ";
        }, 450);
        setTimeout(function(){
        }, 850);

    } else if (nb > 0.333 && nb < 0.666) {
        document.getElementById('page').style.marginLeft="25%";
        document.getElementById('title').innerText = "(づ ^___________^)づ";

        setTimeout(function(){
            document.getElementById('page').style.marginLeft="15%";
        }, 450);
        setTimeout(function(){
        }, 850);

    } else if (nb > 0.666) {
        document.getElementById('page').style.marginTop="10%";
        document.getElementById('title').innerText = "ᑫ( ^___________^)ᑷ";

        setTimeout(function(){
            document.getElementById('page').style.marginTop="20%";
        }, 450);
        setTimeout(function(){
        }, 850);
    }

    setTimeout(function(){if (autreEnCours) {
        dancing();
    }}, 850);
}

function play() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        document.getElementById('dancing').style.display="inline";
        document.getElementById('icone').style.opacity=1;
        document.getElementById('icone').innerHTML=
        "<i class='fa fa-pause-circle fa-2x' aria-hidden='true'></i>";
        autreEnCours = true;
        dancing();
    } else {
        audio.pause();
        document.getElementById('icone').style.opacity=0.4;
        audio.currentTime = 0;
        autreEnCours = false;
        document.getElementById('title').innerText = "( •___________•)";
        document.getElementById('dancing').style.display="none";
        document.getElementById('icone').innerHTML=
        "<i class='fa fa-play-circle fa-2x' aria-hidden='true'></i>";
    }
}

function clignotement() {
    document.getElementById('commandes').style.visibility =
    document.getElementById('commandes').style.visibility=='visible' ? 'hidden'
                                                                     : 'visible';
};

periode = setInterval(clignotement, 800);
