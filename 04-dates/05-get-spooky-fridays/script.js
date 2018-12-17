/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au clic sur le bouton, affiche chaque mois qui contiendra un vendredi 13 pour l'année donnée.

    // -------------> while (isNaN(entreeUtilisateur)) {} <---------------------------------------- 
   document.getElementById("run").addEventListener("click", function() {
	    annee = parseInt(document.getElementById("year").value);
	    //alert(annee);

	    function comparaison (annee) {
	    	// mois = tableau -> indice 0
	    	for (var mois = 0; mois < 12; mois++) {		
	    		var date = new Date(annee, mois, 13);
	    	// position vendredi ds semaine = 5
	    		if (date.getDay() === 5) {
	    			alert(mois);  // ---------------> formater un alert convenable et lisible
	    		}
	    	}
	    }

	    comparaison(annee);
	});



    // fin

})();