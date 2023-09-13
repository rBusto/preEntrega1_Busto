let apellido = prompt("Hola, Ingresa tu Apellido para continuar!");
let nombre = prompt("¿Cual es tu Nombre completo?");
const NOMBRE_COMPLETO = nombre + " " + apellido;
let total = 0;
let promedio = 0;
let cantidad = 0;

function materiaIngresada(){
    if(NOMBRE_COMPLETO !== null && NOMBRE_COMPLETO !== NaN) {
        let materia = prompt("Hola " + NOMBRE_COMPLETO + ", ¿En cual Materia queres consultar tu promedio?")
        alert("Buenisimo!" + " Para saber tu promedio en " + materia + ", ingrese sus calificaciones a continuación...")
    }
}


materiaIngresada();
let calificacion = parseFloat(prompt("Ingrese la nota N°1:"));
while (calificacion !== NaN && calificacion > 0 && calificacion < 10.01){
    total = total + calificacion;
    cantidad++;
    calificacion = parseFloat(prompt("Ingrese la nota N°" + (cantidad + 1) + ":"));
}


promedio = total / cantidad;
function notaFinal(){
    if (promedio >= 7) {
        alert("Felicitaciones! Aprobaste" + materia + nombre + "! " + "Tu promedio es de " + promedio);
    } else if (promedio < 7) {
        alert(nombre + ", lamentamos informarte que Reprobaste " + materia + "Tu promedio es de " + promedio);
    }
}
alert(promedio)
notaFinal();