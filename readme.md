# ThermoScale Converter

A clean and responsive temperature conversion application built with **HTML, CSS, and vanilla JavaScript**. ThermoScale Converter converts Celsius values into Fahrenheit and Kelvin, supports quick temperature presets, validates user input, and updates results dynamically through DOM manipulation.

## Preview

![ThermoScale Converter Preview](./assest/thermoscale-converter-preview.png)

## Features

- Convert Celsius values into Fahrenheit and Kelvin
- Display formatted results with two decimal places
- Quick-set presets for freezing, body, boiling, and baking temperatures
- Input validation for empty or invalid values
- Dynamic result rendering using JavaScript DOM manipulation
- Clean, minimalist, and responsive user interface
- Semantic HTML structure with accessibility-focused attributes

## Technologies Used

- **HTML5** — semantic page structure
- **CSS3** — responsive layout, typography, and visual styling
- **JavaScript (ES6)** — calculations, event handling, validation, and DOM updates

## Project Structure

```text
thermoscale-converter/
├── index.html
├── CSS/
│   └── style.css
├── Js/
│   └── script.js
├── assets/
│   └── thermoscale-converter-preview.png
└── README.md
```

## How It Works

1. The user enters a Celsius value or selects a quick-set preset.
2. JavaScript reads the input value and converts it from a string into a number.
3. The application calculates Fahrenheit and Kelvin values using the following formulas:

```text
Fahrenheit = (Celsius × 9/5) + 32
Kelvin = Celsius + 273.15
```

4. The calculated values are displayed dynamically on the page.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/thermoscale-converter.git
```

### 2. Open the project folder

```bash
cd thermoscale-converter
```

### 3. Run the project

Open `index.html` directly in your browser, or use the **Live Server** extension in Visual Studio Code.

## Usage

1. Enter a Celsius temperature in the input field.
2. Click the conversion button to calculate Fahrenheit and Kelvin.
3. Select any quick-set option to insert a preset Celsius value and run the conversion automatically.

## JavaScript Concepts Practised

This project demonstrates the practical use of:

- Variables and constants
- Functions
- Event listeners
- DOM element selection
- Input values and type conversion
- Conditional validation
- Template-independent DOM updates
- `forEach()` iteration
- Custom `data-*` attributes and `dataset`

## Future Enhancements

- Add Fahrenheit-to-Celsius and Kelvin-to-Celsius conversion modes
- Update the comfort-status badge dynamically
- Allow conversion when the Enter key is pressed
- Add dark mode support
- Save the most recent conversion in local storage
- Deploy the project with GitHub Pages

## Author

**Numa Rahim**  
Software Engineer and Front-End Developer

## License
