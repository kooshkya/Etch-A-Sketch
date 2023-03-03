// colors
const backgroundDefaultColor = "#ffffff";
const foregroundDefaultColor = "#000000";

// element declarations:
let foregroundColorPicker;
let foregroundColorPickerLabel;


function findElements() {
    foregroundColorPickerLabel = document.querySelector("#foreground-color-picker-label");
    foregroundColorPicker = document.querySelector("#foreground-color-picker");
}


function initializePage() {
    foregroundColorPicker.addEventListener("change", (event) => {
        foregroundColorPickerLabel.style.backgroundColor = event.target.value;
    });
    foregroundColorPicker.value = foregroundDefaultColor;
    foregroundColorPickerLabel.style.backgroundColor = foregroundDefaultColor;
}

findElements();
initializePage();

