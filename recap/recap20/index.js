const calcularIVA = (precio) => {
  let iva = precio * 0.12;
  let precioTotal = precio + iva;
  alert("El precio total con IVA es: " + precioTotal);
}

let precio = parseFloat(prompt("Ingresa el precio del producto:"));

calcularIVA(precio);
