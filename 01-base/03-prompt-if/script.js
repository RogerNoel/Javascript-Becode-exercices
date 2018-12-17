
/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
  var reponse = "";

while (reponse !== "oui" && reponse !== "non")	{
	var reponse = prompt("Voulez-vous du gâteau ? \nRépondez par 'oui' ou par 'non'.");

	if (reponse === "oui") {
	alert("Vous avez raison, c'est du bon cake!");
	}
	else if (reponse === "non") {
	alert ("Du gâteau, ça ne se refuse pas !");
	}
}

	// fin exercice

})();

