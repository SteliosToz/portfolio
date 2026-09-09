const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.5
});

sections.forEach((section) => {
    observer.observe(section);
});

const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("show");

    if (navUl.classList.contains("show")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navUl.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});