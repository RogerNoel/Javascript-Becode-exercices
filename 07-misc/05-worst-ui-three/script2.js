/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var minCompteur1 = document.getElementById("part-one").getAttribute("data-min");
    var maxCompteur1 = document.getElementById("part-one").getAttribute("data-max");
    var minAutresCompteurs = document.getElementById("part-two").getAttribute("data-min");
    var maxAutresCompteurs = document.getElementById("part-two").getAttribute("data-max");

    // --------------------------------------------compteur 1
    var compteur1 = minCompteur1; // min 460 max 499
    var increment_var;			// pour stocker le setTimeout

    function increment_fn (compt_par, min_par, max_par){
    	if (compt_par == min_par) {
            compt_par = max_par;
            //console.log(compteur1);
        } else {
        compt_par ++;
        }
        //console.log(compt_par);
        increment_var = setTimeout(increment_fn, 3000);
        document.getElementById("part-one").setAttribute("value", compt_par); // pour afficher le compteur
     }

	var trigger = false;  // création d'un flag
	document.getElementById("fix-part-one").addEventListener("click", function(){
		trigger=!trigger  // inverse le flag à chaque clic
		if (trigger) {
			increment_fn(compteur1, minCompteur1, maxCompteur1);  // lance l'incrémentation
		}
		else {
			clearTimeout(increment_var); // stoppe l'incrémentation
		}
	});	// ------------------------------------------fin compteur 1



    // Fin

})();
