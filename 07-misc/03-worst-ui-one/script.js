/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Petit exercice, réaliser des interfaces horribles pour encoder un numéro de téléphone : utilise la valeur du slider pour afficher un numéro de téléphone (de 0460000000 à 0499999999).
  document.getElementById("slider").addEventListener("input", function(){
    var slider = document.getElementById("slider").value;
    //console.log(slider);
    var target = document.getElementById("target");
    target.innerHTML = slider;
});
    // fin

})();
