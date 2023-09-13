const MAYUSCULA = (string) => {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

let apellido = prompt("Hola, Ingresa tu Apellido para continuar!");
let nombre = prompt("¿Cual es tu Nombre completo?");
apellido = MAYUSCULA(apellido);
nombre = MAYUSCULA(nombre);
const NOMBRE_COMPLETO = nombre + " " + apellido;
let total = 0;
let promedio = 0;
let cantidad = 0;

function materiaIngresada(){
    if(NOMBRE_COMPLETO !== null && NOMBRE_COMPLETO !== NaN) {
        let materia = prompt("Hola " + NOMBRE_COMPLETO + ", ¿En cual Materia queres consultar tu promedio?");
        materia = MAYUSCULA(materia);
        alert("Buenisimo!" + " Para saber tu promedio en " + materia.trim() + ", ingrese sus calificaciones a continuación...");
        return materia;
    }
}


materiaIngresada();
let calificacion = parseFloat(prompt("Ingrese la nota N°1:"));
while (!isNaN(calificacion) && calificacion > 0 && calificacion < 10.01){
    total = total + calificacion;
    cantidad++;
    calificacion = parseFloat(prompt("Ingrese la nota N°" + (cantidad + 1) + ":"));
}


promedio = total / cantidad;
function notaFinal() {
    if (promedio >= 7) {
        alert("Felicitaciones! Aprobaste " + nombre + " !Tu promedio es de " + promedio);
    } else if (promedio < 7) {
        alert(nombre + ", lamentamos informarte que reprobaste " + ". Tu promedio es de " + promedio);
    }
}

notaFinal();