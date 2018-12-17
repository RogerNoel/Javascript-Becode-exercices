/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // Affiche le texte de ton choix dans la balise prévue, avec un "effet machine à écrire" : chaque lettre doit s'afficher l'une après l'autre. Bonus : fais en sorte que le délai entre chaque lettre soit aléatoire.
    var head = document.head;
    var style = document.createElement("style"); //-> création d'un élément style dans une variable style
    style.innerHTML = // insertion de css dans la balise "style" via la variable style
        "@font-face  {" +
        "font-family: 'momstypewriterregular';" +
        "src: url('Moms_typewriter-webfont.ttf') format('truetype');" +
        "font-weight: normal;" +
        "font-style: normal;" +
        "};";
    // -> La méthode ParentNode.append insère un ensemble d’objets Node ou DOMString après le dernier enfant de ParentNode.
    document.head.append(style); // -> insertion de la balise "style" et son contenu dans la balise head

    var target = document.getElementById("target");
    target.setAttribute("style", "font-family:momstypewriterregular"); // insertion de l'attribut style dans le paragraphe "target" pour définir la police de caractères

    var i = 0;
    var txt = "“Et si un jour ou une nuit, un démon se glissait furtivement dans ta plus solitaire solitude et te disait : ” Cette vie, telle que tu la vis et l’as vécue, il te faudra la vivre encore une fois et encore d’innombrables fois; et elle ne comportera rien de nouveau, au contraire, chaque douleur et chaque plaisir et chaque pensée et soupir et tout ce qu’il y a dans ta vie d’indiciblement petit et grand doit pour toi revenir, et tout suivant la même succession et le même enchaînement – et également cette araignée et ce clair de lune entre les arbres, et également cet instant et moi-même. Un éternel sablier de l’existence est sans cesse renversé, et toi avec lui, poussière des poussières !”"; /* The text */
    
    var speed = Math.floor(Math.random() * 450);


    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i); // -> ajouter le texte par caractère dans le paragaphe à l'endroit "i"
            i++;
            // ->The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    // fin

})();
