let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let divDays = document.getElementById("days");
days.forEach(myFunction);

function myFunction(item, index) {

    divDays.innerHTML += `<p>${index} : ${(index == 5 || index == 6) ? item.bold() : item}</p>`;
      
}