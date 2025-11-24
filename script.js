// Simple slider controls
document.querySelectorAll("[data-slider]").forEach(function (slider) {
    const track = slider.querySelector(".slider-track");
    const prev = slider.querySelector("[data-prev]");
    const next = slider.querySelector("[data-next]");
  
    if (!track || !prev || !next) return;
  
    const scrollAmount = 320;
  
    prev.addEventListener("click", function () {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  
    next.addEventListener("click", function () {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  
  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
  