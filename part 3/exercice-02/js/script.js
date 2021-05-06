function bold() {
    
    let text = document.getElementsByTagName("p");

    for (let i = 0; i <= text.length; i++)   {

        text[i].style.fontWeight = "bold";
    }   
    
}

function color() {
    
    let text = document.getElementsByTagName("p");

    for (let i = 0; i <= text.length; i++)   {

        text[i].style.color = "red";
    }   
    
}

function size() {
    
    let text = document.getElementsByTagName("p");

    for (let i = 0; i <= text.length; i++)   {

        text[i].style.fontSize = "1.2em";
    }   
    
}