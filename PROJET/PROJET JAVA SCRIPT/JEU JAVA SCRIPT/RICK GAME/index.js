const clouds = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const heads = document.querySelectorAll('.head');
let lastCloud;

let timeUp = false; // false si pas fini et true si fini
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function randomeCloud(clouds) {
    const indexCloud = Math.floor(Math.random() * clouds.length);
    const cloudSelect = clouds[indexCloud];

    if (cloudSelect === lastCloud) {
        return randomeCloud(clouds);
    }
    lastCloud = cloudSelect;
    return cloudSelect;
}
function showHead1() {
    const time = randomTime(600, 1000);
    const cloud = randomeCloud(clouds); 
    cloud.classList.add('up');
    setTimeout(() => {
        cloud.classList.remove('up');
        if (!timeUp) showHead1();
    }, time);
}
function showHead2() {
    const time = randomTime(500, 800);
    const cloud = randomeCloud(clouds); 
    cloud.classList.add('up');
    setTimeout(() => {
        cloud.classList.remove('up');
        if (!timeUp) showHead2();   
    }, time);
}
function showHead3() {
    const time = randomTime(250, 500);
    const cloud = randomeCloud(clouds); 
    cloud.classList.add('up');
    setTimeout(() => {
        cloud.classList.remove('up');
        if (!timeUp) showHead3();
    }, time);
}
function playerScore(event) {
    if (!event.isTrusted) return;
    score++;
    this.classList.remove('up');    
    scoreBoard.textContent = score; 
}

heads.forEach(head => head.addEventListener('click', playerScore));

function startGame1() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    showHead1();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = `Game Over! Your score is ${score}`;
             // Fait réapparaître les boutons pour pouvoir RELANCER le jeu !
            document.getElementById("demo1").style.display = "";
            document.getElementById("demo2").style.display = "";
            document.getElementById("demo3").style.display = "";
        }, 2000);
}, 10000);
}
function startGame2() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    showHead2();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = `Game Over! Your score is ${score}`;
            // Fait réapparaître les boutons pour pouvoir RELANCER le jeu !
            document.getElementById("demo1").style.display = "";
            document.getElementById("demo2").style.display = "";
            document.getElementById("demo3").style.display = "";
        }, 2000);
}, 10000);
}
function startGame3() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    showHead3();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = `Game Over! Your score is ${score}`;
             // Fait réapparaître les boutons pour pouvoir RELANCER le jeu !
            document.getElementById("demo1").style.display = "";
            document.getElementById("demo2").style.display = "";
            document.getElementById("demo3").style.display = "";
        }, 2000);
}, 10000);
}

/* NIVEAU */
var speed = 50;
var i = 0;
var text1 = "NOVICE";

var j = 0;
var text2 = "INTERMEDIAIRE";

var k = 0;
var text3 = "EXPERT";

function typeWriter1() {
    if (i < text1.length) {
        document.getElementById("demo1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
}

function typeWriter2() {
    if (j < text2.length) {
        document.getElementById("demo2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}

function typeWriter3() {
    if (k < text3.length) {
        document.getElementById("demo3").innerHTML += text3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }
}
function myClick() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById("demo"+i).addEventListener("click", function() {
            document.getElementById("demo1").style.display = "none";
            document.getElementById("demo2").style.display = "none";
            document.getElementById("demo3").style.display = "none";
            }
        );
    } 
}
document.getElementById("morty-play").addEventListener("click", function() {
    //  ON VIDE LE TEXTE DES BOUTONS
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("demo3").innerHTML = "";

    //  ON REMET LES COMPTEURS À ZÉRO
    i = 0;
    j = 0;
    k = 0;

    //  ON RANGE LE RESTE COMME AVANT
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
});