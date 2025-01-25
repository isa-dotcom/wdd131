// Select the menu button and navigation menu
const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

// Add a click event listener to the menu button
menuButton.addEventListener('click', () => {
    // Toggle the "show" class on the navMenu
    const isExpanded = navMenu.classList.toggle('show');

    // Update the aria-expanded attribute for accessibility
    menuButton.setAttribute('aria-expanded', isExpanded);

    // Change the button text based on the menu state
    menuButton.textContent = isExpanded ? '❎' : '≡';
});