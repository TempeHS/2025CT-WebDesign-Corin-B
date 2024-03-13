let entername = prompt("enter your name");
let playerfeedback= "test";
let computerguess = randomnNUM();
playerfeedback = computerguess;
loadDIV();

function randomnNUM() {
    return Math.floor(Math.random () * (10 - 1 + 1) + 1)
}

function loadDIV () {
document.getElementById("ScriptThisDIV").innerHTML = "<H1>hello there " + entername + "</H1>"
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2> guess a number between 1 and 10" + "</H2>"
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerfeedback
}

function enternumber () {
    playerguess = prompt("enter a number")
}