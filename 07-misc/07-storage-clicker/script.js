/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au clic sur le bouton, le compteur augmente de 1.
    // Utilise le localStorage pour sauvegarder et restaurer la valeur du compteur entre chaque chargement de page.

    // --------------------------------------------> TIP
    // https://www.alsacreations.com/article/lire/1402-web-storage-localstorage-sessionstorage.html

    var compteur = localStorage.getItem("cle");
    document.getElementById("target").innerHTML = compteur;
    document.getElementById("increment").addEventListener("click", function() {
        // Incrémentation
        compteur++;
        //console.log(compteur);
        document.getElementById("target").innerHTML = compteur;
        localStorage.setItem("cle", compteur);

    });

    // test
    //var reset = prompt("faut-il supprimer le localStorage? o ou n");
    //if (reset === o) {
    //compteur = 0;
    //localStorage.setItem("cle", compteur);
    //}


    // fin

})();
