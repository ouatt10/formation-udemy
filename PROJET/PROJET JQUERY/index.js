var bg = $("#particles-js");
$(document).keydown(function(){
    $(bg).css("backgroundColor", getRandomColor());
});
 
$(".img").on("click", function() {

    //PREMIERE ACTION SUR LES IMAGES
    var name = $(this).attr("name");
    const init = name.charAt(0).toUpperCase() + name.slice(1);
    $("#titre").text(init);

    //DEUXIEME ACTION SUR LES IMAGES
    $(this).toggleClass("flash");

    //TROISIEME ACTION SUR LES IMAGES
    var music = $(this).attr("name");
    music += ".mp3";
    var audio = new Audio(music);
    audio.play();
}); 

$("#btn").on("click", function() {
    var artiste = $("#input").val();
    var titre = $("#titre").text();
    var music = artiste + ".mp3";
    var audio = new Audio(music);
    audio.play();
});
    

//FONCTION POUR CHANGER LA COULEUR DE FOND
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
