let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputBox");
let outputElement: HTMLSpanElement = <HTMLSpanElement> document.getElementById("output");

function toOunces() {
    var inputString = inputElement.value;
    var inputNumber = parseFloat(inputString) / 28.34952;
    outputElement.innerHTML = inputNumber.toString();
}

function toGrams() {
    var inputString = inputElement.value;
    var inputNumber = parseFloat(inputString) * 28.34952;
    outputElement.innerHTML = inputNumber.toString();
}

let ouncesButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ounceButton");
let gramsButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("gramButton");
ouncesButton.addEventListener("click",toOunces);
gramsButton.addEventListener("click",toGrams);