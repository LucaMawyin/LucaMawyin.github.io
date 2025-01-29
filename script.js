document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#main-nav a");

    links.forEach((link,index) => {
        setTimeout(() => {
            link.style.animationDelay = `${index * 500}ms`;
        }, index * 500);
    });
});