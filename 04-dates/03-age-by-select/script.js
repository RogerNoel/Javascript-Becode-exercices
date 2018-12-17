/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Au clic sur le bouton, récupère la date de naissance du visiteur et affiche son âge exact
    
    document.getElementById("run").addEventListener("click", function() {
        
        // today
        var age = "";
        var date = new Date();
        var year = date.getFullYear();
        var mois = date.getMonth()+1;
        var jour = date.getDate();

        // alert(jour + " " + mois + " " + year);

        var jourNais = document.getElementById("dob-day").value;
        var moisNais = document.getElementById("dob-month").value;
        var anneeNais = document.getElementById("dob-year").value;

        if (moisNais < mois) {
            age = year - anneeNais;
        }
        else if (moisNais = mois && jourNais <= jour) {
            age = year - anneeNais;
        }
        else {
            age = (year - anneeNais)-1;
        }

        alert("Vous avez " + age + " ans.");

    });





    // fin exercice

})();
