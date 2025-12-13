let array = [0, 1, 2];
let arrayLength = 10;
const barMin = 1;
const barMax = 100;

const algorithms = {
    "bubble": {
        "name": "Bubble Sort",
        "description": "",
        "time_complexity": ""
    }
}

const arrayLengthSlider = document.getElementById("array-length-slider");
const generateArrayButton = document.getElementById("generate-array-button");
const arrayInput = document.getElementById("array-input");
const sortButton = document.getElementById("sort-button");
const pauseButton = document.getElementById("pause-button");
const arrayLengthLabel = document.getElementById("array-length");
const barContainer = document.getElementById("bar-container");

arrayLengthSlider.addEventListener("input", () => {
    arrayLength = arrayLengthSlider.value;
    arrayLengthLabel.textContent = arrayLength;
})

generateArrayButton.addEventListener("click", () =>  {
    array = generateRandomArray();
    renderBars();
})

function generateRandomArray() {
    const randomArray = Array.from({ length: arrayLength}, () => {
        return Math.floor(Math.random() * (barMax - barMin + 1) + barMin);
    })
    arrayInput.value = randomArray;
    console.log(randomArray);
    return randomArray
}

function renderBars() {
    let barWidth = (100/arrayLength) + '%';
    array.forEach()
    barContainer.appendChild(bar)
}

function bubbleSort(array) {
    return array
}