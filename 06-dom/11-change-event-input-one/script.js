/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Observe les changements de l'input et affiche le nombre de caractères utilisés. Si ce nombre est plus grand que 10, empêche la saisie de nouveau caractère.

    var compteur = 0;
    var saisieMax = document.getElementById("pass-one");
    saisieMax.setAttribute("maxlength", "10");
    var saisieCompteur = document.getElementById("counter");
    //console.log(saisieCompteur);
    document.getElementById('pass-one').addEventListener("keyup", function() { // -> pour chaque touche relevée...

        compteur = compteur + 1;
        //return compteur;
        saisieCompteur.innerHTML = compteur + "/10";
        if (compteur>=10) {
          saisieCompteur.innerHTML = "10/10";
        }


    });




    // Fin

})();
