/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    // Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau "gallery". Fais-en une boucle.
    var i = 0;
    document.getElementById("next").addEventListener("click", function() {
        var imageFrame = document.querySelector("img");
        if (i >= gallery.length - 1) {
            i = 0;
        } else {
            i++
        }

        var nextImage = gallery[i];
        imageFrame.setAttribute("src", nextImage);



    });
    // FIN

})();
