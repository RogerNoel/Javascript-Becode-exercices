/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au clic sur le bouton, génére une couleur aléatoire et utilise-la comme couleur de fond de la page.


    document.getElementById("run").addEventListener("click", function(){
    	var red = Math.floor(Math.random() * 256);
    	var green = Math.floor(Math.random() * 256);
    	var blue = Math.floor(Math.random() * 256);
    	var rgb = ("rgb("+red+", "+green+", "+blue+")");
    	document.body.style.backgroundColor = rgb;
    });
    // La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre 
    
    //alert(typeof rgb);
    

    // fin exercice

})();
