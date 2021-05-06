function num() {

    let num = parseInt(prompt("Nombre :"));

    const answer = num > 21 ? "est superieur a 21" : "est inferieur a 21";
    alert(num + " " + answer);


    //if (num > 21) alert(num + " est superieur a 21");
    //else alert(num + " est inferieur a 21");

}

function age() {

    let age = parseInt(prompt("Age :"));

    const answer = age > 18 ? "Vous etes majeur" : "Vous etes mineur";
    alert(answer);

    //if (age >= 18) alert("Vous etes majeur");
    //else alert("Vous etes mineur");

}

function exercice3() {

    let num = parseInt(prompt("Nombre :"));

    if (num % 2 == 0) alert("Le nombre est pair");
    else alert("Le nombre est impair");

    //const answer = num % 2 == 0 ? "Le nombre est pair" : "Le nombre est impair";
    //alert(answer + " (" + num + ")");

}

function notes() {

    let note = parseInt(prompt("Note :"));
    if (note >= 0 && note <= 10) {
        if (note >= 0 && note <= 2) alert("Nul");
        else if (note >= 3 && note <= 5) alert("Moyen");
        else if (note >= 6 && note <= 7) alert("Assez Bien");
        else if (note >= 8 && note <= 9) alert("Bien");
        else alert("Excellent");
    }
    else alert("Debilus ...")

}

function days() {

    let day = parseInt(prompt("Chiffre entre 1 et 7 :"));

    if (day >= 1 && day <= 7) {

        switch (day) {
            case 1:
                day = "Lundi";
                break;
            case 2:
                day = "Mardi";
                break;
            case 3:
                day = "Mercredi";
                break;
            case 4:
                day = "Jeudi";
                break;
            case 5:
                day = "Vendredi";
                break;
            case 6:
                day = "Samedi";
                break;
            case 7:
                day = "Dimanche";
        }

        alert(day);

    }

}