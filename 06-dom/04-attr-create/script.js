/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //Récupère la valeur de l'attribut "data-image" de la balise dont l'id est "source".
   	var data_image = document.getElementById("source");
   	var valeur = data_image.getAttribute("data-image"); // -> récupération du lien http
   	// console.log(valeur);  pour test

    // Crée ensuite une balise image dans la balise d'id "target" qui affichera cette valeur.
    document.getElementById("target").innerHTML += ('<img src="'+valeur+'"/>');
    // Enfin, supprime la balise source.</p>
    document.querySelector(".material").removeChild(document.getElementById("source"));

    // fin

})();
