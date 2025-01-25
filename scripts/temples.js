// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger button and nav menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle navigation visibility
    hamburger.addEventListener('click', () => {
        navMenu.querySelector('ul').classList.toggle('visible');
    });

    // Set last modified date in footer
    document.getElementById('last-modified').textContent = document.lastModified;
});
