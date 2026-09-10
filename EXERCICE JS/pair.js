function pair(tab){
    var newtab = [];
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] % 2 === 0) {
            newtab.push(tab[i]);
        }
    }
    return newtab;
}
pair([1, 2, 3, 4, 5, 6]);