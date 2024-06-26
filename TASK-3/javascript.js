// script.js

function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultElement = document.getElementById('result');

    if (tempInput === '') {
        resultElement.textContent = 'Please enter a temperature.';
        resultElement.style.color = 'red';
        return;
    }

    const temperature = parseFloat(tempInput);
    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid number.';
        resultElement.style.color = 'red';
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case 'Celsius':
            celsius = temperature;
            fahrenheit = (temperature * 9 / 5) + 32;
            kelvin = temperature + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (temperature - 32) * 5 / 9;
            fahrenheit = temperature;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            celsius = temperature - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
            kelvin = temperature;
            break;
    }

    resultElement.innerHTML = `
        <p>${temperature.toFixed(2)} ${unit}</p>
        <p>= ${celsius.toFixed(2)} °C</p>
        <p>= ${fahrenheit.toFixed(2)} °F</p>
        <p>= ${kelvin.toFixed(2)} K</p>
    `;
    resultElement.style.color = '#333';
}
