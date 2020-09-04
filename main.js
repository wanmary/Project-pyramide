var nb = prompt("Salut! Bienvenue dans ma super pyramide! Combien d'étages veux-tu?")
console.log("Nombre d'étages demandés: ", nb); 

if (nb <25){
    for (i = 0; i < nb; i++) {
        var nb_espaces = nb - i - 1;
        var nb_diezes = 2*i + 1;
        var ligne = ecrire(" ",nb_espaces) + ecrire("#",nb_diezes) + ecrire(" ",nb_espaces);
        console.log(ligne);
    }
}

function ecrire(car,nb_fois){
    var chaine = "";
    for (j = 0; j < nb_fois; j++){
        chaine += car;
    }
    return chaine;
}
