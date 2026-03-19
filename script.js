// Smooth scroll (keep yours)
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        if (el.classList.contains("active")) return; // ✅ prevent repeat

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* SKILL ANIMATION */
const bars = document.querySelectorAll(".progress");

function animateSkills() {
    bars.forEach(bar => {
        if (bar.classList.contains("animated")) return; // ✅ run once

        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.width;
            bar.classList.add("animated"); // mark done
        }
    });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
