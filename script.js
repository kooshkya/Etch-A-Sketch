// colors
const backgroundDefaultColor = "#ffffff";
const foregroundDefaultColor = "#000000";

// element declarations:
let foregroundColorPicker;
let foregroundColorPickerLabel;
let backgroundColorPicker;
let backgroundColorPickerLabel;


function findElements() {
    foregroundColorPickerLabel = document.querySelector("#foreground-color-picker-label");
    foregroundColorPicker = document.querySelector("#foreground-color-picker");
    backgroundColorPickerLabel = document.querySelector("#background-color-picker-label");
    backgroundColorPicker = document.querySelector("#background-color-picker");
}


function initializePage() {
    foregroundColorPicker.addEventListener("input", (event) => {
        foregroundColorPickerLabel.style.backgroundColor = event.target.value;
    });
    foregroundColorPicker.value = foregroundDefaultColor;
    foregroundColorPickerLabel.style.backgroundColor = foregroundDefaultColor;
    backgroundColorPicker.addEventListener("input", (event) => {
        backgroundColorPickerLabel.style.backgroundColor = event.target.value;
    });
    backgroundColorPicker.value = backgroundDefaultColor;
    backgroundColorPickerLabel.style.backgroundColor = backgroundDefaultColor;
}

findElements();
initializePage();

