function convertTemperature() {
	// Get the user input temperature and unit
	let temperature = parseFloat(document.getElementById("temperature").value);
	let unit = document.getElementById("unit").value;

	// Convert the temperature to the selected unit
	if (unit === "celsius") {
		temperature = (temperature - 32) * 5/9;
		document.getElementById("convertedTemperature").innerHTML = temperature.toFixed(2) + " &#8451;";
	} else if (unit === "fahrenheit") {
		temperature = (temperature * 9/5) + 32;
		document.getElementById("convertedTemperature").innerHTML = temperature.toFixed(2) + " &#8457;";
	} else if (unit === "kelvin") {
		temperature = temperature + 273.15;
		document.getElementById("convertedTemperature").innerHTML = temperature.toFixed(2) + " K";
	}
}
