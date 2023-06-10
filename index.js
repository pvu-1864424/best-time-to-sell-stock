'use strict';

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // Changing nav bar when resize screen
    const openBtn = document.getElementById("openmenu");
    const closeBtn = document.getElementById("closemenu");

    openBtn.addEventListener("click", openmenu);
    closeBtn.addEventListener("click", closemenu);
}

function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.top = "80px";
}

function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.top = "-500px";
}