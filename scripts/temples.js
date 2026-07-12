const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("visible");

    hamburger.textContent =
        navMenu.classList.contains("visible") ? "✖" : "☰";
});

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#last-modified").textContent =
    document.lastModified;