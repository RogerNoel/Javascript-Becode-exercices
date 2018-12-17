/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au clic sur le bouton, vérifie que les deux mots de passe dans les inputs sont <strong>identiques</strong>. Si ça n'est pas le cas, <em>colore les bordures des inputs en rouge
    document.getElementById("run").addEventListener("click",function(){

    	var pass_1 = document.getElementById("pass-one").value;
    	var pass_2 = document.getElementById("pass-two").value;
    	var inputs = document.getElementsByTagName("input");
    	
	   	if (pass_1 !== pass_2) {
    		for(i=0; i<inputs.length; i++)
    		inputs[i].style.border="2px solid red";
    	}

	    

	});    
    // fin

})();
