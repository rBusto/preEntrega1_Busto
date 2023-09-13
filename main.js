let apellido = prompt("Hola, Ingresa tu Apellido para continuar!");
let nombre = prompt("¿Cual es tu Nombre completo?");

if(apellido !== null && apellido !== NaN && nombre !== null && nombre !== NaN) {
    alert("Hola " + nombre + apellido + "Para saber tu promedio, ingrese sus calificaciones a continuación")
    for(let promedio; promedio <=5; promedio++){
        calificacion = parseFloat(prompt("Ingresa tu primer calificacion"))
    }
}