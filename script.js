const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

        document.body.classList.toggle("menu-open");

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            document.body.classList.remove("menu-open");

        });

    });

}
