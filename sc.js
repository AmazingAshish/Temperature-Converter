function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultElement = document.getElementById("result");
    
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    
    let result;
    switch (unit) {
      case "celsius":
        result = {
          kelvin: temperature + 273.15,
          fahrenheit: (temperature * 9/5) + 32
        };
        break;
      case "kelvin":
        result = {
          celsius: temperature - 273.15,
          fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
        break;
      case "fahrenheit":
        result = {
          celsius: (temperature - 32) * 5/9,
          kelvin: (temperature - 32) * 5/9 + 273.15
        };
        break;
      default:
        result = {};
    }
  
    const formattedResults = Object.entries(result).map(([unit, value]) => `${value.toFixed(2)}° ${unit}`).join(" and ");
    resultElement.textContent = `Result: ${formattedResults}`;
  }
  