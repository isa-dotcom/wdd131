// scripts/scripts.js

// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Event listener for the "Add Chapter" button
button.addEventListener('click', function () {
    // Check if the input is empty
    if (input.value.trim() === '') {
        alert('Please enter a chapter!');
        input.focus(); // Return focus to the input field
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = input.value; // Set the text content of the li

    // Create a delete button for the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; // Set the button text

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the unordered list
    list.appendChild(li);

    // Clear the input field for the user
    input.value = '';
    input.focus(); // Return focus to the input field

    // Event listener for delete button to remove the list item
    deleteButton.addEventListener('click', function () {
        list.removeChild(li); // Remove the clicked list item
    });
});