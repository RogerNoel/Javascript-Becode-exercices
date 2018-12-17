/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    
    document.getElementById("run").addEventListener("click", function(){
    // your code here
        function removeDups(myArray) {
            var unique = {};
            myArray.forEach(function(i) {   // --> function(i) = fonction anonyme
                if(!unique[i]) {
                    unique[i] = true;
                }
            });
            return Object.keys(unique);
            /*La méthode Object.keys() renvoie un tableau contenant les noms des propriétés propres à un objet 
            (qui ne sont pas héritées via la chaîne de prototypes) et qui sont énumérables. 
            L'ordre de ce tableau est le même que celui obtenu par une boucle for...in 
            (à la différence qu'une boucle for-in liste également les propriétés héritées).
            */
        }
        removeDups(fruits);

    });
    

    // fin

})();
