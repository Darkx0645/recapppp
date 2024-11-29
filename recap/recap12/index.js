let numero = prompt("Ingresa un número:");

numero = Number(numero);

if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
} else {
    if (numero % 2 === 0) {
        alert("El número " + numero + " es par.");
    } else {
        alert("El número " + numero + " es impar.");
    }
}
