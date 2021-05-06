function years() {

    let divYears = document.getElementById("years");

    for (let year = 2020; year <= 2030; year++) {

        divYears.innerHTML += `<p ${(year % 100 != 0 && year % 4 == 0) ? "style=\"color:red\"" : ""}>${year}</p>`;

    }
}


function numbers() {

    let divNumbers = document.getElementById("numbers");

    for (let num = 0; num <= 100; num++) {

        divNumbers.innerHTML += `<p> ${(num % 15 == 0) ? "..." : num}</p>`;

    }
}


function multiply() {

    let divMultiply = document.getElementById("multiply");
    let firstNumber = 5;
    let secondNumber = 2;

    while (firstNumber * secondNumber <= 250) {
        let result = firstNumber * secondNumber;
        divMultiply.innerHTML += "<p>" + firstNumber + " * " + secondNumber + " = " + result + "</p>";
        secondNumber = result;
    }

}

function divide() {

    let divDivide = document.getElementById("divide");
    let firstNumber = 86;
    let secondNumber = 2.5;

    while (firstNumber / secondNumber >= 1) {
        let result = firstNumber / secondNumber;
        divDivide.innerHTML += "<p>" + firstNumber + " / " + secondNumber + " = " + result + "</p>";
        firstNumber = result;
    }

}