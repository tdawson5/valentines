let btnChange = document.querySelector("#beeButton");
let p = document.querySelector("p");
let noPress = document.querySelector("#no");
let iguess = document.querySelector("#iguess");
let love = document.querySelector("#yes");

btnChange.addEventListener("click", secondPage)

noPress.addEventListener("click", noPage)
iguess.addEventListener("click", ehPage)
love.addEventListener("click", yesPage)

function secondPage() {
    var x = document.getElementById("eyesOnly");
    var y = document.getElementById("beeButton");
    var second = document.getElementsByClassName('second');
    var yes = document.getElementById("yes");
    var rose = document.getElementById("rose");

    if(x.style.display != "none") {
        x.style.display = "none";
        y.style.display = "none";
        rose.style.display = "none";

        for(var i = 0; i < second.length; i++) { second[i].style.display = "block"; }
        
        /*yes.style.display = "flex";*/
    }

    console.log("this pussy :*");
}

function noPage() {
    var x = document.getElementsByClassName('cryPage');
    var second = document.getElementsByClassName('second');

    for(var i = 0; i < x.length; i++) { x[i].style.display = "block"; }
    for(var i = 0; i < second.length; i++) { second[i].style.display = "none"; }
}

function ehPage() {
    var x = document.getElementsByClassName('ehPage');
    var second = document.getElementsByClassName('second');

    for(var i = 0; i < x.length; i++) { x[i].style.display = "block"; }
    for(var i = 0; i < second.length; i++) { second[i].style.display = "none"; }
}

function yesPage() {
    var x = document.getElementsByClassName('lovePage');
    var y = document.getElementsByClassName('container');
    var second = document.getElementsByClassName('second');
    var audio = new Audio('cw.mp3');
    audio.play();

    for(var i = 0; i < x.length; i++) { x[i].style.display = "block"; }
    for(var i = 0; i < y.length; i++) { y[i].style.display = "block"; }
    for(var i = 0; i < second.length; i++) { second[i].style.display = "none"; }
}