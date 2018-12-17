/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Génère, dans la balise dont l'id est "target", un tableau HTML d'un colonne et dix rangées.

/*
    var monTableau = "<table><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></t*/

    var monTableau = "<table><tbody>";
    for (i=1; i<=10; i++){
      monTableau += "<tr><td></td></tr>";
    }
    monTableau += "</tbody></table>";

    document.getElementById("target").innerHTML = monTableau;
    // FIN

})();
