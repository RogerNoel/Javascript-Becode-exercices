/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au clic sur le bouton, vérifie que les deux mots de passe dans les inputs sont identiques. Si ça n'est pas le cas, ajoute la classe "error" aux inputs
    document.getElementById("run").addEventListener("click", function(){
    	var pass1 = document.getElementById("pass-one").value;
    	var pass2 = document.getElementById("pass-two").value;

    	//pass1 === pass2 ? console.log("identiques") : console.log(pass1 + " " + pass2);

    	if (pass1 !== pass2) {
	    	var inputs = document.querySelectorAll(".material input");
	    	console.log(inputs);
	    	inputs.forEach(function(element) { element.setAttribute("class", "error"); });
    	}


    	



    });
    // fin

})();
