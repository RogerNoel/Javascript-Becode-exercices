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

    // your code here
    document.getElementById("run").addEventListener("click", function(){
    // Au clic sur le bouton, affiche dans la console
    //le tableau fruits, après l'avoir dédoublonné : chaque valeur ne doit apparaître qu'une seule fois.

    /* ---------------------------------------------TIP
    L'objet Set (Ensemble en français) permet de stocker des valeurs uniques, de n'importe quel type, que ce soit des valeurs d'un type primitif ou des objets.
    ------------------------------------------------------ */
    let fruits_nodubs = [...new Set(fruits)];
    console.log(fruits_nodubs);
    });
    // fin

})();
