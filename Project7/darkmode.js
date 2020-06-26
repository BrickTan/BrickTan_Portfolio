function App()
{
    
    let darkMode = localStorage.getItem('darkMode');

    let darkModeToggle = document.querySelector("#dark-mode");


    let enableDarkMode = () =>
    {
        let body= document.getElementById('Content');
        body.classList.add('-dark');

        localStorage.setItem('darkMode', "enabled");
    };

    let disableDarkMode = () =>
    {
        let body= document.getElementById('Content');
        body.classList.remove('-dark');

        localStorage.setItem('darkMode', null);
    };

    if(darkMode === "enabled")
    {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {

        darkMode = localStorage.getItem("darkMode");
        if(darkMode !== 'enabled')
        {
            enableDarkMode();
        }
        else
        {
            disableDarkMode();
        } 
    });
}



document.addEventListener('DOMContentLoaded', App);
