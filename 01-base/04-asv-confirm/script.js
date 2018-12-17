/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var confirm = "N";

while (confirm === "N") {
	var age = prompt("Quel est votre âge?");
	var genre = prompt("Quel est votre genre?");
	var ville = prompt("De quelle ville venez-vous?");
	var confirm = prompt("Vous avez " + age + " ans, vous êtes du genre " + genre + " et vous venez de " + ville +". \nConfirmez-vous ces informations ? \nRépondez par O ou par N.");
	while (confirm != "O" & confirm != "N") {
		var confirm = prompt("Vous avez " + age + " ans, vous êtes du genre " + genre + " et vous venez de " + ville +". \nConfirmez-vous ces informations ? \nRépondez par O ou par N.");
	}
}

})();
