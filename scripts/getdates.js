// Get current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date of the document
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;