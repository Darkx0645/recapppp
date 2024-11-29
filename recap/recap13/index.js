let edad = prompt("¿Cuál es tu edad?");

edad = Number(edad);

if (isNaN(edad) || edad <= 0) {
    alert("Por favor, ingresa una edad válida.");
} else {
    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
}
