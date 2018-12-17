/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Observe les changements de l'input et affiche "ok" si le contenu fait 8 caractères au minimum, et contient au moins 2 chiffres.

    // création d'un tableau de chiffres pour comparaison
    var nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    document.getElementById("pass-one").addEventListener("input", function() {
      var entreeUtLength = 0; // pour enregister les nombre de caractères entrés dans l'input box
        var nombreChiffres = 0; // pour stocker le nombre de chiffres que l'utilisateur entrera
        var chaine = document.getElementById("pass-one").value; // création d'une variable qui contiendra ce que tape l'utilisateur

        for (j = 0; j < chaine.length; j++) {
            var found = nombres.find(function(element) { // La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument
                if (element == chaine[j]) { // compare chaque élément du tableau de chiffres avec les entrées utilisateur
                    nombreChiffres += 1;  // pour chaque élément trouvé nombreChiffres s'incrémente
                }
            });
        }
        //entreeUtLength = chaine.length;
        if (chaine.length>=8 && nombreChiffres>=2) {
          var validite = document.getElementById("validity");
          validite.innerHTML = "ok";
        }
        //console.log(chaine);

    });
    //fin

})();
