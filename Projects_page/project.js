function toggleDarkMode(){
    let body= document.getElementById('Content');
    body.classList.toggle('-dark');
}

function App()
{

    let DarkModeButton = document.getElementById('dark-button');
    DarkModeButton.addEventListener('click', toggleDarkMode);
}


document.addEventListener('DOMContentLoaded', App);