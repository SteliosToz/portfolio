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
const terminalLines = [
    { text: "$ whoami", color: "#e6f1ff" },
    { text: "> Stelios Tozios — Junior Web & Software Developer", color: "#38bdf8" },
    { text: "", color: "" },
    { text: "$ cat stack.txt", color: "#e6f1ff" },
    { text: "> HTML · CSS · JavaScript", color: "#38bdf8" },
    { text: "> WordPress · WooCommerce", color: "#38bdf8" },
    { text: "> Python", color: "#38bdf8" },
    { text: "", color: "" },
    { text: "$ cat studied.txt", color: "#e6f1ff" },
    { text: "> Java · C · C++", color: "#38bdf8" },
    { text: "", color: "" },
    { text: "$ cat currently.txt", color: "#e6f1ff" },
    { text: "> Building real-world projects", color: "#38bdf8" },
    { text: "> Open to junior dev opportunities", color: "#38bdf8" },
    { text: "", color: "" },
    { text: "$ contact --email", color: "#e6f1ff" },
    { text: "> steliostozios@gmail.com", color: "#22c55e" }
];

const terminalBody = document.getElementById("terminal-body");
let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
    if (lineIndex >= terminalLines.length) {
        setTimeout(restartTerminal, 5000);
        return;
    }
    function restartTerminal() {
    terminalBody.innerHTML = "";
    lineIndex = 0;
    charIndex = 0;
    typeTerminal();
}

    const currentLine = terminalLines[lineIndex];

    if (charIndex === 0) {
        const lineElement = document.createElement("p");
        lineElement.className = "terminal-line";
        lineElement.style.color = currentLine.color;
        lineElement.id = `terminal-line-${lineIndex}`;
        terminalBody.appendChild(lineElement);
    }

    const lineElement = document.getElementById(`terminal-line-${lineIndex}`);

    if (charIndex < currentLine.text.length) {
        lineElement.textContent += currentLine.text[charIndex];
        charIndex++;
        setTimeout(typeTerminal, 30);
    } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeTerminal, 300);
    }
}

typeTerminal();