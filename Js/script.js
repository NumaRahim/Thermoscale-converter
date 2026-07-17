let conversion = document.getElementById("swap-btn"); //select an element
let celsiusInput = document.getElementById("celsius-input");

const fahrenheitOutput = document.getElementById("fahrenheit-output");
const kelvinOutput = document.getElementById("kelvin-output");

const presetButtons = document.querySelectorAll(".quick-set__item");
const validationError = document.getElementById("validation-error");

function convert() {
  let celsius = parseFloat(celsiusInput.value);
  if (celsiusInput.value.trim() === "" || isNaN(celsius)) {
    fahrenheitOutput.textContent = "--";
    kelvinOutput.textContent = "--";

    validationError.textContent = "Please enter a valid Celsius value.";
    celsiusInput.focus();

    return;
  }

  validationError.textContent = "";

  let fahrenheit = (celsius * 9) / 5 + 32;
  let kelvin = celsius + 273.15;

  fahrenheitOutput.textContent = fahrenheit.toFixed(2);
  kelvinOutput.textContent = kelvin.toFixed(2);
}
conversion.addEventListener("click", convert);

celsiusInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convert();
  }
});

//preset button logic
function quicksetItems(event) {
  celsiusInput.value = event.currentTarget.dataset.celsius;
  convert();
}

presetButtons.forEach(function (button) {
  button.addEventListener("click", quicksetItems);
});
