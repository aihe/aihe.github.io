<!-- Debut
function voleur(e) {
    return false;
}

function bien() {
    return true;
}

document.onselectstart=new Function ("return false");

if (window.sidebar) {
  document.onmousedown=voleur;
  document.onclick=bien;
}
