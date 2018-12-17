/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        // Au clic sur le bouton, récupère les nombres affichés dans l'input, et affiche-les, classés du plus petit au plus grand
        var entreesUtilisateur = document.getElementById("numbers").value;
        var tableau = entreesUtilisateur.split(" ");
        tableau = entreesUtilisateur.split(",");
        // console.log(tableau); ------------> pour test

        // -> La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. Exemple: var racines = nombres.map(Math.sqrt);
        var tableauTrie = tableau.map(Number); 

        // -> By default the sort() method sorts the array: 1) In ascending order 2) With the items casted to strings
        // -> "SORT" needs to be explicitly told how to sort numbers not as strings; with a callback function.
        // -> The callback function or, technically, comparison function receives two arguments ...
        // -> explication détaillée étape par étape: -->  https://alligator.io/js/array-sort-numbers/
        tableauTrie.sort((a, b) => a - b);
        alert(tableauTrie);
     
        // fin exercice

    });

})();