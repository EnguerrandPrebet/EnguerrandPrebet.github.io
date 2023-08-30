document.getElementById("toggle-nav").addEventListener("click", function () {
  document.getElementById("main-nav").classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("main-nav").classList.remove("active");
  });
});