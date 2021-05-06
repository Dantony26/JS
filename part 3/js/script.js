function multiply() {

    let firstNumber = document.getElementById("number1").value;
    let secondNumber = document.getElementById("number2").value;
    let result = firstNumber * secondNumber;

    alert(result);
}



var calcul;

calcul = () => {

    let firstNumber = document.getElementById("number1Arrow").value;
    let secondNumber = document.getElementById("number2Arrow").value;
    let result = firstNumber * secondNumber;
    alert(result);
}

document.getElementById("btn").addEventListener("click", calcul);