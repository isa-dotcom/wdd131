// JavaScript Debugging Example

// Select elements from the DOM
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

// Add an event listener for the button click
greetButton.addEventListener('click', () => {
    const name = nameInput.value; // Get the input value

    // Check if the input is empty
    if (name.trim() === '') {
        greetingMessage.textContent = 'Please enter a valid name!';
    } else {
        // Display a greeting message
        greetingMessage.textContent = `Hello, ${name}!`;
    }

    // Clear the input field
    nameInput.value = '';
    // Set focus back to the input field
    nameInput.focus();
});