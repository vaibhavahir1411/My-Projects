/* ========================== Sidebar Toggle =========================== */
const navToggler = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".aside");
const navLinks = document.querySelectorAll(".aside .nav a");  // Select all links inside the sidebar

// When the nav-toggler is clicked, toggle the "open" class on the sidebar
navToggler.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// When any of the sidebar links are clicked, close the sidebar
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });
});

/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* ========================== theme colors =========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
 