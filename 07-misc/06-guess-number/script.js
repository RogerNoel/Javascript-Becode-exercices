/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // <p>Au chargement de la page, le script choisi un nombre entre 1 et 100,

    //console.log(solution);
    var essais = 1;
    var solution = (Math.floor(Math.random() * 100)) + 1;
    var proposition;

    function demander() {
        proposition = parseInt(prompt("Entrez un nombre entre 1 et 100."));
        console.log(typeof proposition);
        if (proposition < 1 || proposition > 100 || isNaN(proposition)) {
            demander();
        } else {
            if (proposition < solution) {
                alert("Vous êtes en-dessous de la solution.\nEssai n°" + essais);
                essais++;
                demander();
            } else if (proposition > solution) {
                alert("Vous êtes au-dessus de la solution.\nEssai n°" + essais);
                essais++;
                demander();
            } else {
                alert("Bravo! Vous avez trouvé en " + essais + " essais.");

            }
        }
    }

    demander();




    //Le script répond "plus grand" ou "plus petit" en fonction, ou
    //le félicite si le nombre est correct, tout en affichant son nombre d'essais.</p>

    // fin

})();
