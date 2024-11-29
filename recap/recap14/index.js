let tieneCuenta = prompt("¿Tienes una cuenta? (si/no)").toLowerCase();

if (tieneCuenta === "si") {
    let conoceContraseña = prompt("¿Conoces la contraseña? (si/no)").toLowerCase();
    
    if (conoceContraseña === "si") {
        alert("Acceso concedido");
    } else {
        alert("Acceso denegado: No conoces la contraseña.");
    }
} else {
    alert("Acceso denegado: No tienes una cuenta.");
}
