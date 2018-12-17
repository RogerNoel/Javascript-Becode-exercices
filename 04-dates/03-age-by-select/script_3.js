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
        //var ageAnnees="";
        var date = new Date();
        var year = date.getYear()+1900;
        var month = date.getMonth()+1;
        var day = date.getDate();
        //alert(year + " " + month + " " + day);  // pour test
        var jourNais = document.getElementById("dob-day").value;
        var moisNais = document.getElementById("dob-month").value;
        var anneeNais = document.getElementById("dob-year").value;
        //alert(jourNais);  // pour test
        //alert(moisNais);   // pour test
        //alert(anneeNais);  // pour test

        // détermination de l'âge en années
        if (moisNais<month) {
            ageAnnees = year - anneeNais;
            ageMois = month - moisNais;
            //alert(ageAnnees);
        }
        else {
            ageAnnees = (year - anneeNais)-1;
            ageMois= (month+12) - moisNais;
            //alert(ageAnnees);
        }

        /*if (moisNais<month) {
            ageMois = month - moisNais;
        }
        else {
            ageMois= (month+12) - moisNais;
        }*/

        alert(ageAnnees);
        alert(ageMois);

    });





    // fin exercice

})();
