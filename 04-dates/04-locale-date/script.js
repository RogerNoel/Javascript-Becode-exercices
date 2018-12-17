/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // Change le contenu de la balise indiquée par la date du jour, en français (ex : dimanche 28 octobre 2018, 23h32)

    // your code here
    var today = new Date();
    // détermination du jour de la semaine
    var jour = today.getDay();
    switch (jour) {
    	case 0: jour = "Dimanche";
    	break;
    	case 1: jour = "Lundi";
    	break;
    	case 2: jour = "Mardi";
    	break;
    	case 3: jour = "Mercredi";
    	break;
    	case 4: jour = "Jeudi";
    	break;
    	case 5: jour = "Vendredi";
    	break;
    	case 6: jour = "Samedi";
    	break;
    	default: jour = "Inconnu";
    }

    date = today.getDate();
    mois = today.getMonth()+1;

    switch (mois) {
    	case 1: mois="janvier"; break;
    	case 2: mois="février"; break;
    	case 3: mois="mars"; break;
    	case 4: mois="avril"; break;
    	case 5: mois="mai"; break;
    	case 6: mois="juin"; break;
    	case 7: mois="juillet"; break;
    	case 8: mois="août"; break;
    	case 9: mois="septembre"; break;
    	case 10: mois="octobre"; break;
    	case 11: mois="novembre"; break;
    	case 12: mois="décembre"; break;
    }

    annee = today.getFullYear();
    heure = today.getHours();
    if (heure < 10 ) {
    	heure = ("0"+heure);
    }
    minutes = today.getMinutes();
    if (minutes < 10) {
    	minutes = ("0"+minutes);
    }


    alert(jour + " " + date + " " + mois + " " + annee + ", " + heure + "h" + minutes);

    // fin

})();
