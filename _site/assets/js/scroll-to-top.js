// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Show button when scrolled down
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) { // Show after scrolling 300px
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top when clicked
  scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});