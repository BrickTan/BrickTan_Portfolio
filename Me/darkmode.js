function App()
{
    //Hacemos una variable que obtenga el localStorage
    let darkMode = localStorage.getItem('darkMode');

    //hacemos la variable del botón que va a poner el modo nocturno
    let darkModeToggle = document.querySelector("#dark-mode");

    //Función para activar el modo nocturno
    let enableDarkMode = () =>
    {
        //obtenemos el id del body
        let body= document.getElementById('Content');
        //le agregamos la clase que asigna el modo nocturno
        body.classList.add('-dark');
        //guardamos la variable en localStorage
        localStorage.setItem('darkMode', "enabled");
    };

    //Función para desactivar el modo nocturno
    let disableDarkMode = () =>
    {
        //obtenemos el id del body
        let body= document.getElementById('Content');
        //removemos la clase que asigna el modo nocturno
        body.classList.remove('-dark');
        //guardamos la variable en localStorage
        localStorage.setItem('darkMode', null);
    };

    //Si la variable del local storage es igual a enabled, entonces asignamos la función del modo noctrno.
    if(darkMode === "enabled")
    {
        enableDarkMode();
    }


    //toggle del botón
    darkModeToggle.addEventListener('click', () => {

        //obtenemos la variable del localstorage
        darkMode = localStorage.getItem("darkMode");
        //Si darkmode es diferente de enable, entonces se pone el modo nocturno
        if(darkMode !== 'enabled')
        {
            enableDarkMode();
        }
        //Si no, se desactiva el modo nocturno
        else
        {
            disableDarkMode();
        } 
    });
}



document.addEventListener('DOMContentLoaded', App);
