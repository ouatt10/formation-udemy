function bool(tab){
    var compteur = 0;
    for (var i = 0; i < tab.length; i++) {
        if (tab[i]%8 == 0) {
            compteur++;
        }
    }
    return compteur;
    if (compteur >= 2) {
        return true;
    }
    return false;
}
bool([8, 16, 2, 32, 40]);
