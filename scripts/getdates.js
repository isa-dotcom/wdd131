// Dynamically set the copyright year
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Debugging: Check if the span exists
console.log('Year span:', yearSpan);

// Dynamically set the last modified date
const modifiedSpan = document.getElementById('modified');
if (modifiedSpan) {
    const lastModified = document.lastModified;
    console.log('Last Modified Date:', lastModified); // Log the value of document.lastModified
    modifiedSpan.textContent = lastModified;
} else {
    console.error('Modified span not found in the DOM.');
}