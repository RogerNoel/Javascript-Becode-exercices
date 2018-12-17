/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    console.log(fruits);
    //Au clic sur le bouton, opère les transformations suivantes sur le tableau fruits:
        // - enlève le premier 
    fruits.shift();
        // - et le dernier élement, 
    fruits.pop();
        // - ajoute un élément "banane" au début du tableau 
    fruits.unshift("Banane");;
        // - et ajoute un élément "kiwi" à la fin du tableau.
    fruits.push("Kiwi");

    /*  /!\  -->    unshift -> array <- push
                    shift   <- array -> pop
    */

})();
