// ================= SMOOTH SCROLL =================
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        if (el.classList.contains("active")) return;

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

/* ================= SKILL BAR ANIMATION ================= */
const skillBars = document.querySelectorAll(".skill-fill");

function animateSkillCards() {
    skillBars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.width;
        }
    });
}

window.addEventListener("scroll", animateSkillCards);
window.addEventListener("load", animateSkillCards);

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
