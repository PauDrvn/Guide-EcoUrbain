

const sentier = document.getElementById("sentier");
let imageZoom = false;

sentier.addEventListener("click", function() {
  if (imageZoom) {
    sentier.style.transform = "scale(1)";
    imageZoom = false;
  } else {
    sentier.classList.add("zoom");
    imageZoom = true;
  }
});

