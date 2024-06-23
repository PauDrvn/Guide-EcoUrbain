// L'en tête ne s'affiche pas de suite
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".image-transition").classList.add("loaded");
  }, 2000); // Délai de 2 secondes avant que l'image ne soit progressivement affichée
});

// Le chant d'oiseau est lu en passant sur son image
var image = document.getElementById("chant-photo");
var audio = document.getElementById("chant-oiseaux");

image.addEventListener("mouseenter", function() {
    audio.play();
});

image.addEventListener("mouseleave", function() {
    audio.pause();
    audio.currentTime = 0; // Réinitialise la lecture à partir du début du son
});

