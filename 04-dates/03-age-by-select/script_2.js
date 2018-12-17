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
    
    // pour test -> alert("today: an " + year + ", mois " + month + ", jour " + day);
        var ageAnnees="";
        var ageMois="";

    document.getElementById("run").addEventListener("click", function() {
        
        // today

        var date = new Date();
        

        var jourNais = document.getElementById("dob-day").value;
        var moisNais = document.getElementById("dob-month").value;
        var anneeNais = document.getElementById("dob-year").value;

        // création d'une variable de type date avec la date de naissance

        var birthdate = new Date(anneeNais + "-" + moisNais + "-" + jourNais);

        var difference = date - birthdate;

        alert(difference);



    });





    // fin exercice

})();
