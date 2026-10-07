const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const searchButton = document.getElementById("searchButton");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");


/* ================= MOBILE MENU ================= */

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Fecha o menu quando clicar em um link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ================= SEARCH ================= */

searchButton.addEventListener("click", () => {

    searchOverlay.classList.add("active");

    setTimeout(() => {
        searchInput.focus();
    }, 100);

});


closeSearch.addEventListener("click", () => {

    searchOverlay.classList.remove("active");

});


/* Fecha pesquisa clicando fora */

searchOverlay.addEventListener("click", (event) => {

    if (event.target === searchOverlay) {

        searchOverlay.classList.remove("active");

    }

});


/* ESC fecha pesquisa */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("active");

    }

});
