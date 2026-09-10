var bg = document.getElementById("particles-js");
document.addEventListener("keydown", function (event) {
    bg.style.backgroundColor = getRandomColor();
    var key = event.key.toLowerCase();
    playMusic(key);
});
function playMusic(key) {
    switch (key) {
        case "d":
            var audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "e":
            var audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("Clap1.wav");
            audio.play();
            break;
        default:
            var audio = new Audio("Clap1.wav");
            audio.play();
            break;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}