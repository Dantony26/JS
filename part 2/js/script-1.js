function message() {
    let hello = "Hello";
    alert(hello);
}

function sentence() {
    let firstPart = "Ceci est";
    let lastPart = "une phrase.";
    alert(firstPart + " " + lastPart);
}

function blabla() {
    let firstName = "name";
    let age = "45";
    let city = "city";
    alert("Bonjour, je m'appelle " + firstName + " , j'ai " + age + " ans et j'habite " + city);
}

function formInfo() {
    let result;
    var alpha = /^[A-Za-zÀ-ÿ]+$/; // que des lettres (avec ou sans accents)
    var notAlpha = /^[^A-Za-zÀ-ÿ]+$/; // tout sauf des lettres
    let firstName = prompt("Nom :", ""); // alert avec input demandant le nom
    if (firstName != "" && firstName.match(alpha)) { // si firstname n'est pas vide et contient des lettres

    } else { // sinon
        while (firstName == "" || firstName.match(notAlpha)) { // tant que firstname est vide ou contient autre chose que des lettres 
            alert("Merci de remplir ce champ correctement");
            firstName = prompt("Nom :", "");
        }
    }

    let age = prompt("Age :", ""); // alert avec input demandant l'age
    if (age == "" || isNaN(age)) { // si age est vide ou n'est pas un nombre
        alert("Merci de remplir ce champ correctement");
        age = prompt("Age :", "");
    }

    let city = prompt("Ville :", ""); // alert avec input demandant la ville
    if (city != "" && city.match(alpha)) {

    } else { // sinon
        while (city == "" || city.match(notAlpha)) { // tant que city est vide ou contient autre chose que des lettres
            alert("Merci de remplir ce champ correctement");
            city = prompt("Ville :", "");
        }    
    }
    result = "Bonjour, je m'appelle " + firstName + " , j'ai " +  parseInt(age) + " ans et j'habite " + city;
    alert(result);
}

function calcul() {
    let number = /[0-9]/; // que des nombres
    let alpha = /[A-Za-zÀ-ÿ]/; // que des lettres (avec ou sans accents)
    let symbols = /[^\p{L}\d\s@#]/u; // que des symboles
    let firstNumber = prompt("Premier numero :", ""); // alert avec input demandant le premier numéro 
    if (firstNumber != "" && firstNumber.match(number)) { // si firstnumber n'est pas vide et contient des nombres
    
    } else { // sinon
        while (firstNumber == "" || firstNumber.match(symbols) || firstNumber.match(alpha)) { // tant que firstnumber est vide ou contient des symboles ou des nombres 
            alert("Merci de remplir ce champ correctement");
            firstNumber = prompt("Premier numero :", "");
        }
    }
    let secondNumber = prompt("Deuxieme numero :", ""); // alert avec input demandant le deuxieme numéro 
    if (secondNumber != "" && secondNumber.match(number)) { // si secondnumber n'est pas vide et contient des lettres

    } else { // sinon
        while (secondNumber == "" || secondNumber.match(symbols) || secondNumber.match(alpha)) { // tant que secondnumber est vide ou contient des symboles ou des nombres 
            alert("Merci de remplir ce champ correctement");
            secondNumber = prompt("Deuxieme numero :", "");
        }
    }
    let result = parseInt(firstNumber) + parseInt(secondNumber); // parseInt pour transformer les strings en integer
    if (isNaN(result)) { // si result n'est pas un nombre
        alert("Merci de mettre QUE des numeros")
    } else {
        console.log(firstNumber + " + " + secondNumber + " = " + result);
    }
}