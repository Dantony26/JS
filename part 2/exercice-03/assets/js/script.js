let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
let divLanguages = document.getElementById("languages");
languages.forEach(myFunction);

function myFunction(item, index) {
  divLanguages.innerHTML += `<p>${index} : ${item}</p>`; 
}
