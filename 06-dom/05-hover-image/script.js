/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au survol de l'image, change sa source par celle qui se trouve dans son attribut "data-hover".

    // récupération de la balise image dans une variable "element"
    var element = document.querySelector("img");

    // initialisation d'un événement "mouseover" sur l'image via la variable "element"
    element.addEventListener("mouseover", function() {

        var original = element.getAttribute("src"); // -> sauvegarde de la valeur de la propriété "src" pour réutilisation ultérieure

        var newAttribute = element.getAttribute("data-hover"); // -> récupération de la valeur de "data-hover"
        element.setAttribute("src", newAttribute); // -> assignation de la valeur de "data-hover" à "src"

        element.addEventListener("mouseleave", function() { // -> ... à la sortie de la souris hors de l'image ...
            element.setAttribute("src", original); // -> ... on assigne à "src" sa valeur originale, qu'on avait mise au frigo sous 															"original"
        });
    });
    // ------------------------- >> I DID IT :-)  <<-----------------------
    // fin

})();
