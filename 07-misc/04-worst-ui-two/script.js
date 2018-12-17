/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // chaque clic sur un bouton incrémente la valeur sélectionnée.
    //Chaque bouton cycle entre les valeurs indiquée dans ses attributs <em>data-min</em> et <em>data-max</em>

    // creer des click event listeners sur les 4 boutons (id part-one, two, three, four)

    var minCompteur1 = document.getElementById("part-one").getAttribute("data-min");
    var maxCompteur1 = document.getElementById("part-one").getAttribute("data-max");
    var minAutresCompteurs = document.getElementById("part-two").getAttribute("data-min");
    var maxAutresCompteurs = document.getElementById("part-two").getAttribute("data-max");

    var compteur1 = minCompteur1;
    document.getElementById("part-one").addEventListener("click", function() {
        if (compteur1 == maxCompteur1) {
            compteur1 = minCompteur1;
            //console.log(compteur1);
        } else {
            compteur1++
            //console.log(compteur1);
        }
        concat();
        document.getElementById("part-one").innerHTML = compteur1;
    });

    var compteur2 = minAutresCompteurs;
    document.getElementById("part-two").addEventListener("click", function() {
        if (compteur2 == maxAutresCompteurs) {
            compteur2 = minAutresCompteurs;
            //console.log(compteur2);
        } else {
            compteur2++
            //console.log(compteur2);
        }

        if (compteur2 < 10) {
            compteur2 = "0" + compteur2;
        }
        concat();
        document.getElementById("part-two").innerHTML = compteur2;
    });

    compteur3 = minAutresCompteurs;
    document.getElementById("part-three").addEventListener("click", function() {
        if (compteur3 == maxAutresCompteurs) {
            compteur3 = minAutresCompteurs;
            //console.log(compteur3);
        } else {
            compteur3++
            //console.log(compteur3);
        }

        if (compteur3 < 10) {
            compteur3 = "0" + compteur3;
        }
        concat();
        document.getElementById("part-three").innerHTML = compteur3;
    });

    compteur4 = minAutresCompteurs;
    document.getElementById("part-four").addEventListener("click", function() {
        if (compteur4 == maxAutresCompteurs) {
            compteur4 = minAutresCompteurs;
            //console.log(compteur4);
        } else {
            compteur4++
            //console.log(compteur4);
        }

        if (compteur4 < 10) {
            compteur4 = "0" + compteur4;
        }
        concat();
        document.getElementById("part-four").innerHTML = compteur4;
    });

    function concat() {// fonction pour concaténer les 4 valeurs
        var affichage = compteur1 + "" + compteur2 + "" + compteur3 + "" + compteur4;
        document.getElementById("target").innerHTML = affichage;
    }

    // afficher la concaténation

    // fin
})();
