// constants:
const dimension=5;

// colors
const backgroundDefaultColor = "#EEEEEE";
const foregroundDefaultColor = "#000000";

// element declarations:
let foregroundColorPicker;
let foregroundColorPickerLabel;
let backgroundColorPicker;
let backgroundColorPickerLabel;
let canvas;


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

    canvas = document.querySelector("#canvas");
    canvas.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    for (let i = 0; i < dimension * dimension; i++) {
        let newBlock = document.createElement("div");
        newBlock.style.backgroundColor = backgroundColorPicker.value;
        canvas.appendChild(newBlock);
    } 
}

findElements();
initializePage();

