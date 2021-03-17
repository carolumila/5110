let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
let subtractButton = document.querySelector('#subtractButton');
let multiplyButton = document.querySelector('#multButton');
let divideButton = document.querySelector('#divButton');
let outputField = document.querySelector('#output');

// add function
function add() {
    let addition1 = Number(input1.value);
    let addition2 = Number(input2.value);
    let sum = addition1 + addition2;
    outputField.value = sum;
}

additionButton.onclick = function() {
    add();
}

// subtract function
function subtract() {
    let subtract1 = Number(input1.value);
    let subtract2 = Number(input2.value);
    let difference = subtract1 - subtract2;
    outputField.value = difference;
}

subtractButton.onclick = () => subtract();

// multiply function
function multiply() {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let product = num1 * num2;
    outputField.value = product;
}

multiplyButton.onclick = () => multiply();

// divide function
function divide() {
    let div1 = Number(input1.value);
    let div2 = Number(input2.value);
    let quotient = div1 / div2;
    outputField.value = quotient;
}

divideButton.onclick = () => divide();