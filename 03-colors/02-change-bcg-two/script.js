/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Au clic sur le bouton, récupère la valeur de l'input et utilise-la comme couleur de fond de la page.
    // id du bouton "lancer" = run
    document.getElementById("run").addEventListener("click", function() {
    	var couleur = document.getElementById("color").value;
    	document.body.style.backgroundColor = couleur;
	});
    	
    
    // fin exercice

})();
