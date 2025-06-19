//fonction utilitaire pour afficher les resultats
<script>
// app.js - JavaScript code for the portfolio website
// liens pour afficher le menu de navigation
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("ouvrir");
    });
});
// JavaScript code for the portfolio website

// This script handles the navigation menu toggle and other interactive features


//console.log("Bienvenue dans mon Portfolio!");
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("ouvrir");
    });
});

// Add any additional JavaScript functionality here
// For example, smooth scrolling, form validation, etc.
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
    // Form validation example
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            // Perform validation here
            const name = form.querySelector('input[name="name"]').value;
            const email = form.querySelector('input[name="email"]').value;
            if (name && email) {
                alert("Form submitted successfully!");
                form.reset();
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
    // Add any other JavaScript functionality you need
});

// End of JavaScript code
console.log("Bienvenue dans mon Portfolio!");
console.log("JavaScript loaded successfully!");
const competences = ["HTML", "CSS", "JavaScript"];
console.log("Compétences:", competences.join(", "));
console.log("Portfolio loaded successfully!");

// accueil

console.log("Bienvenue sur la page d'accueil de mon portfolio!");

    
</script>