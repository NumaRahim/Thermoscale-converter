let conversion = document.getElementById("swap-btn"); //select an element
let celsiusInput = document.getElementById("celsius-input");

const fahrenheitOutput = document.getElementById("fahrenheit-output");
const kelvinOutput = document.getElementById("kelvin-output");

const presetButtons = document.querySelectorAll(".quick-set__item");

function convert() {
  let celsius = parseFloat(celsiusInput.value);
  if (Number.isNaN(celsius)) {
    fahrenheitOutput.textContent = "--";
    kelvinOutput.textContent = "--";

    alert("Please enter a valid Celsius value.");
    celsiusInput.focus();

    return;
  }
  let fahrenheit = (celsius * 9) / 5 + 32;
  let kelvin = celsius + 273.15;

  fahrenheitOutput.textContent = fahrenheit.toFixed(2);
  kelvinOutput.textContent = kelvin.toFixed(2);
}
conversion.addEventListener("click", convert);

//preset button logic
function quicksetItems(event) {
  celsiusInput.value = event.currentTarget.dataset.celsius;
  convert();
}

presetButtons.forEach(function (button) {
  button.addEventListener("click", quicksetItems);
});
