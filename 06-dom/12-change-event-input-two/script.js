/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Observe les changements de l'input et affiche "ok" si le contenu fait 8 caractères au minimum, et contient au moins 2 chiffres.
    document.getElementById("pass-one").addEventListener("input", function(){
    var entreeUtilisateur = document.getElementById("pass-one");
  //  console.log(entreeUtilisateur.value);
  //  console.log(entreeUtilisateur.value.length);
    // -> La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.
    if (entreeUtilisateur.value.length >= 8 && entreeUtilisateur.value.match(/\d/g).length >= 2) {
  //    console.log("ça marche");
      document.getElementById("validity").innerHTML = "ok";
    }


    });
    // fin

})();
