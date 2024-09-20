let switchSpans = document.querySelectorAll(".tablist span");
let paths = document.querySelectorAll(".paths a");

switchSpans.forEach((span) => {
  span.addEventListener("click", removeActive);
  span.addEventListener("click", managePaths);
});

// Remove Active Class From All Spans And Add To Current
function removeActive() {
  switchSpans.forEach((span) => {
    span.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Paths
function managePaths() {
  paths.forEach((path) => {
    path.style.display = "none";
  });
  document.querySelectorAll(this.dataset.list).forEach((el) => {
    el.style.display = "block";
  });
}
