let numero = prompt("Ingresa un número:");

numero = Number(numero);

if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else {
    if (numero >= 10 && numero <= 20) {
        alert("El número " + numero + " está entre 10 y 20.");
    } else {
        alert("El número " + numero + " no está entre 10 y 20.");
    }
}
