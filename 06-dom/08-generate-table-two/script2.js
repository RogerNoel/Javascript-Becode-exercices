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
  var target = document.getElementById("target");   // -> récupération du noeud "target"
  var table = "<table><tbody>";   // -> création d'une variable table avec txt
  
  for (var i=1; i<=10; i++) {             // --> creer de 10 tr ...
    table += "<tr>";                  // --> ... et les insérer dans table
      for (var j=1; j<=10; j++) {         // --> ensuite pour chaque tr, insertion de 10 td contenant chacun le produit des abs/ord
        table += "<td>"+i*j+"</td>";
      }
    table += "</tr>";                 // --> fermeturE des tr
  }
    table += "</tbody></table>";      // --> fermeture de la table

      target.innerHTML += table;      // --> insertion du tableau complet dans le html
    

  
  // FIN
  })();