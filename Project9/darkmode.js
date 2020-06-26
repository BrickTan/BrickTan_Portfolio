function toggleDarkMode(){
    let body= document.getElementById('Content');
    body.classList.toggle('-dark');
}

function App(){

    let DarkModeButton = document.getElementById('dark-mode');
    DarkModeButton.addEventListener('click', toggleDarkMode);

    console.log ('DarkModeButton');
}


document.addEventListener('DOMContentLoaded', App);