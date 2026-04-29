
const githubDarkPath = "images/github-dark.svg";
const githubLightPath = "images/github-light.svg";
const mailDarkPath = "images/mail-dark.svg";
const mailLightPath = "images/mail-light.svg";
const linkedinDarkPath = "images/linkedin-dark.svg";
const linkedinLightPath = "images/linkedin-light.svg";

// Animation delay for splash page nav links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#main-nav a");

    links.forEach((link,index) => {
        setTimeout(() => {
            link.style.animationDelay = `${index * 500}ms`;
        }, index * 500);
    });
});


// Changing themes
const githubImg = document.getElementById("github-img");
const mailImg = document.getElementById("mail-img");
const linkedinImg = document.getElementById("linkedin-img");
const toggleSwitch = document.getElementById("check");

document.addEventListener("DOMContentLoaded", () => {
    // Check if there is a saved theme in local storage
    const savedTheme = localStorage.getItem('theme');

    // If saved theme is dark then apply dark
    if (savedTheme === 'dark') {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");

        if (githubImg) {
            githubImg.src = githubLightPath;
        }

        if (mailImg) {
            mailImg.src = mailLightPath;
        }

        if (linkedinImg) {
            linkedinImg.src = linkedinLightPath;
        }

        // Match switch to respective theme
        if (toggleSwitch) {
            toggleSwitch.checked = true;
        }

    // If theme is light then apply light
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");

        if (githubImg) {
            githubImg.src = githubDarkPath;

        }

        if (mailImg) {
            mailImg.src = mailDarkPath;
        }

        if (linkedinImg) {
            linkedinImg.src = linkedinDarkPath;
        }

        // Match switch to respective theme
        if (toggleSwitch) {
            toggleSwitch.checked = false;
        }
    }

    // Check theme toggle and apply themes
    function checkToggle() {

        githubImg.style.opacity = 0;
        mailImg.style.opacity = 0;
        linkedinImg.style.opacity = 0;

        setTimeout(() => {
            if (toggleSwitch.checked) {

                document.body.classList.add("dark-mode");
                document.body.classList.remove("light-mode");

                githubImg.src = githubLightPath;
                mailImg.src = mailLightPath;
                linkedinImg.src = linkedinLightPath;

                localStorage.setItem('theme', 'dark');

            } else {
                document.body.classList.remove("dark-mode");
                document.body.classList.add("light-mode");

                githubImg.src = githubDarkPath;
                mailImg.src = mailDarkPath;
                linkedinImg.src = linkedinDarkPath;

                localStorage.setItem('theme', 'light');
            }
        }, 100);


        githubImg.style.opacity = 1;
        mailImg.style.opacity = 1;
        linkedinImg.style.opacity = 1;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", checkToggle);
    }

});