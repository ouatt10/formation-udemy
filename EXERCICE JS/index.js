function Musicien(name, age, nationalite, instruments, tableau_musique) {
    this.name = name;
this.age = age;
    this.nationalite = nationalite;
    this.instruments = instruments;
    this.modifieNationalité = function() {  
        var newNationalite = prompt("Entrez la nouvelle nationalité :");
        this.nationalite = newNationalite;                                                                                                                                                                                                                                    
    };
}

var tableau1 = ["Guitare", "Piano"];
var tableau2 = ["Song A", "Song B", "Song C"];
var musicien1 = new Musicien("John", 30, "Américain", tableau1, tableau2);

musicien1.modifieNationalité();