
/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    /* -------------------------------------------------> premier essai
    var flag = false;

    for (var i = 0; i < fruits.length; i++) {
        if (fruits[i] === "pomme") {
            flag = true;
        }
    }

    flag === true ? console.log("Pomme existe dans le tableau"): console.log("Pomme n'existe pas dans le tableau");
    --------------------------------------------------------- fin premier essai */

    // TIP --> http://sametmax.com/la-fonction-anonyme-appelee-immediatement-en-javascript-function/
document.getElementById("run").addEventListener("click", function(){
    // -> La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur undefined est renvoyée.
    var existe = fruits.find(function(element) {
        return element === "pomme";
    });
    existe === "pomme" ? console.log("Pomme existe dans le tableau") : console.log("Pomme n'existe pas dans le tableau");

});

})();
