/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au clic sur le bouton, affiche dans les balises prévues les dix éléments d'un tableau de 10 nombres (entre 1 et 100),
    // ainsi que les statistiques suivantes : le plus petit nombre, le plus grand, la somme des nombres et la moyenne de ceux-ci.
document.getElementById("run").addEventListener("click", function(){
    // ------------- algo
    // créer tableau pour les randoms
    var randomTab = [];
    // faire une boucle FOR avec math.random pour creer 10 nombres entiers entre 1 et 100 et pusher ces nombres dans un tableau
    for (i=0; i<10; i++) {
    	var nbr = Math.floor(Math.random()*101);
    	randomTab.push(nbr);
    }
    																			//console.log(randomTab);
    // les assigner dans les balises id n-X
    																		//document.getElementById("n-1").innerHTML = "test";
    for (i=1; i<=10; i++) {
    	var newID = ("n-" + i);
    	document.getElementById(newID).innerHTML = randomTab[i-1];

/* -----------------------------------------------------------------TIP
      (...) = SYNTAXE DE DECOMPOSITION QUI permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères) en lieu et place de plusieurs arguments (pour les appels de fonctions)  ligne 39, 43 etc...
------------------------------------------------------------------------*/

    }
    // trouver le plus petit et l'assigner à id min
    var nbrMin = Math.min(...randomTab);
    document.getElementById("min").innerHTML = nbrMin;
    																					//console.log(nbrMin);
    // trouver le plus grand et l'assigner à id max
    var nbrMax = Math.max(...randomTab);
    document.getElementById("max").innerHTML = nbrMax;
    // calculer la somme et l'assigner à l'id sum
    var somme = 0;
    for (i=0; i<10; i++) {
    	somme = somme + randomTab[i];
    	document.getElementById("sum").innerHTML = somme;
    }
    // calculer la moyenne et l'assigner à l'id average
    var moyenne = somme/randomTab.length;
    document.getElementById("average").innerHTML = moyenne;


});
    // fin

})();
