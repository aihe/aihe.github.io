function disabled_click(e) {
    return (false);
}

function click_workin() {
    return (true);
}

document.onselectstart = new Function("return false");

if (window.sidebar) {
  document.onmousedown = disabled_click;
  document.onclick = click_workin;
}
