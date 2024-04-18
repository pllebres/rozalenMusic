const name = 'world 123';
console.log(`Hello ${name}`);


'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    // Verificar si el cuerpo tiene la clase 'dark-theme'
    var isDarkTheme = document.body.classList.contains('dark-theme');

    // Establecer las clases del cuerpo según el estado actual
    if (isDarkTheme) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }

    // Cambiar el texto del botón en función del tema actual
    var buttonText = isDarkTheme ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro';
    switcher.textContent = buttonText;

    // Imprimir el nombre de la clase actual en la consola
    var className = document.body.className;
    console.log('current class name: ' + className);
});


