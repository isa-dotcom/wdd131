document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Atualiza a última modificação do documento
    document.getElementById('last-modified').textContent = document.lastModified;

    // Definir valores estáticos para temperatura e vento
    const temperature = 20; // Celsius
    const windSpeed = 5; // km/h

    // Calcular e exibir sensação térmica
    if (temperature <= 10 && windSpeed > 4.8) {
        document.getElementById('wind-chill').textContent = ${calculateWindChill(temperature, windSpeed)} °C;
    } else {
        document.getElementById('wind-chill').textContent = 'N/A';
    }
});

// Função para calcular a sensação térmica
function calculateWindChill(temp, windSpeed) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
}
  