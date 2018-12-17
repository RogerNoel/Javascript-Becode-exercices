/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Affiche le texte de ton choix dans la balise prévue, avec un "effet vague" d'au moins 5 tailles différentes.
    var phrase = document.getElementById('target').innerHTML; // récupération du text à transformer
    //console.log(phrase);
    var tableauPhrase = phrase.split(''); // décomposition des lettres du texte dans un tableau
    //console.log(tableauPhrase);
    var modifiedText = "";
    var tableauTailles = [1, 1.2, 1.5, 1.7, 2, 1.5, 1.2];
    var sizeIndex = tableauTailles.length;
    for (i = 0; i < tableauPhrase.length; i++) { // -> pour chaque lettre du texte
        if (sizeIndex < tableauTailles.length) {
          size = tableauTailles[sizeIndex];
          sizeIndex++;
        }
        else {
          sizeIndex = 0;
          size = tableauTailles[sizeIndex];
          sizeIndex++;
        }
        modifiedText += "<span style=\"font-size:" + size + "em;\">" + tableauPhrase[i] + "</span>";
    }
    console.log(modifiedText);
document.getElementById('target').innerHTML = modifiedText;

    // fin

})();
