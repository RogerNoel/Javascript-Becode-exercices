/* becode/javascript
*
* /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
*
* coded by leny@BeCode
* started at 26/10/2018
*/
// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {
  // your code here
  // Génère, dans la balise dont l'id est "target", un tableau HTML qui affichera les dix premières tables de multiplication de 1 à 10
  // créer un tableau de 11 x 11 (11 tr contenant chacun 11 td)
  var element = document.getElementById("target");  // -> récupération du noeud "target" pour y insérer le tableau
  element.innerHTML = "<table><body></body></table>";      // -> insertion d'un tableau dans target
  var monTableau = document.querySelector("table");// -> récupération du noeud "tableau"
  // console.log(monTableau); pour test
  monTableau.style.border = "1px solid black";    // -> assignation d'un style au tableau
  monTableau.setAttribute("id", "tabMulti");    // -> assignation d'un ID au tableau

  var lignes ="";
  var colonnes = "";
  for (var i=0; i<10; i++) {
    lignes = lignes + "<tr id='tr-"+(i+1)+"'></tr>";  // -> création des tr dans la variable "lignes"
    colonnes = colonnes + "<td></td>";                // -> création des td dans la variable "colonnes"
  }
  monTableau.innerHTML = lignes;  // -> ajout des tr dans le tableau

  var tab_colonnes = document.querySelectorAll("tr"); // -> création d'un tableau reprenant tous les tr
  for (i=0; i<tab_colonnes.length; i++) {
    tab_colonnes[i].innerHTML += colonnes;  // -> ajout des td dans chaque tr
  }

  // ---------------------------------------------------- fin création tableau ---------------------------

  for (i=1; i<=10; i++) {

    var currentLine = document.querySelectorAll("#tr-" +i+ " td");  // -> récupération de tous les td de la 1° ligne ...
    for (j=0; j<currentLine.length; j++){   // -> ... pour y insérer les chiffres de 1 à 10
      currentLine[j].innerHTML = (j+1)*i;
    }
  }  
  
  // FIN
  })();