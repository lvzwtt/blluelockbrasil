/* =========================
   CURSOR GLOW
========================= */

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursor.animate(
        {
            left: `${event.clientX}px`,
            top: `${event.clientY}px`
        },
        {
            duration: 700,
            fill: "forwards"
        }
    );

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const duration = 1200;

            const increment = target / (duration / 16);

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.floor(current).toLocaleString("pt-BR");

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent =
                        target.toLocaleString("pt-BR");

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: 0.8
    }
);

counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* =========================
   PARALLAX HERO
========================= */

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("scroll", () => {

    if (!heroVisual) return;

    const scroll = window.scrollY;

    heroVisual.style.transform =
        `translateY(calc(-50% + ${scroll * 0.12}px))`;

});


/* =========================
   CARD MOUSE EFFECT
========================= */

const cards = document.querySelectorAll(
    ".content-card, .character-card"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -5;

        const rotateY =
            ((x / rect.width) - 0.5) * 5;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const navLinks =
    document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});
