const html = document.querySelector("html");
const darkButton = document.querySelector("#dark-btn");
const buttonIcon = document.querySelector("#db-icon");

function changeTheme(){
    if(html.className == "light-mode"){
        html.setAttribute("class", "dark-mode");
        buttonIcon.setAttribute("class", "fa-brands fa-jedi-order");
    
    } else {
        html.setAttribute("class", "light-mode");
        buttonIcon.setAttribute("class", "fa-brands fa-galactic-republic");
    }
}
darkButton.addEventListener("click", changeTheme, false);


