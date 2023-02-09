var thumbnails = document.querySelectorAll(".thumbnail");
var overlay = document.getElementById("overlay");
var enlargedImg = document.getElementById("enlarged-img");

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function() {
    overlay.style.display = "block";
    enlargedImg.src = this.src;
    enlargedImg.style.display = "block";
  });
}

overlay.addEventListener("click", function() {
  overlay.style.display = "none";
  enlargedImg.style.display = "none";
});
