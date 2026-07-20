
// --- Footer Information ---

// Display the current year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Display the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// --- Weather Data (Static Values) ---

const temperature = 10; // Celsius
const windSpeed = 5; // km/h

// --- Wind Chill Function ---

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

// --- Display Wind Chill ---

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}