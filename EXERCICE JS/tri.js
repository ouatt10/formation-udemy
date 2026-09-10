function  tri(tableau){
    var max = tableau[0];
    var min = tableau[0];

    for (var i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }

    return { max: max, min: min };
}

var mesNotes = [85, 92, 78, 90, 88];
var resultat = tri(mesNotes);
console.log("La note maximale est : " + resultat.max);
console.log("La note minimale est : " + resultat.min);