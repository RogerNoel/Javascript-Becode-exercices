
/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) { 
    // "operation" est le nom qu'on donne au paramètre pour le fonctionnement  interne de la fonction
       
        // perform the operation
        var nombre1 = parseFloat(document.getElementById("op-one").value);
        var nombre2 = parseFloat(document.getElementById("op-two").value);
        // ATTENTION il faut utiliser une structure switch
        switch (operation) {
            case "addition":
                alert(nombre1+nombre2);
                break;
            case "substraction":
                alert(nombre1-nombre2);
                break;
            case "multiplication":
                alert(nombre1*nombre2);
                break;
            case "division":
                alert(nombre1/nombre2);
                break;
            default:
                alert("ya un bleme");

        }
        

        // fin exercice
    };
            // Array.from permet de créer une nouvelle instance d'Array à partir d'un objet itérable ou semblable à un tableau.
    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id); //$btn.id = valeur renvoyée en paramètre à performOperation
        });
    });
})();