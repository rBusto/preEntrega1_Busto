const MAYUSCULA = (string) => {
    /*
    Propósito: Cada String ingresado por el usuario, sin importar como se ingrese,
    la letra inicial se pasara a Mayuscula y las demas a Minuscula.
    */
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

class Alumnos {
    constructor(apellido, nombre, dni) {
    this.apellido = apellido;
    this.nombre = nombre;
    this.dni = dni;
    }
}

const alumno_ = new Alumnos("", "", "")

alumno_.apellido = prompt("Hola, Ingresa tu Apellido para continuar!");
alumno_.nombre = prompt("¿Cual es tu Nombre completo?");
alumno_.dni = prompt("Permitime saber tu numero de documento...");


let apellido = alumno_.apellido;
let nombre = alumno_.nombre;
apellido = MAYUSCULA(apellido);
nombre = MAYUSCULA(nombre);
const NOMBRE_COMPLETO = nombre + " " + apellido;
let total = 0;
let promedio = 0;
let cantidad = 0;

function materiaIngresada(){
    /*
    Propósito: Pregunta al Usuario una Materia y sus calificaciones, pasa el string a Mayuscula y retorna el valor
    de la variable materia.
    */
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
    /*
    Propósito: Si el promedio de la suma total de las notas ingresadas por el usuario es mayor o igual a 7,
    se muestra un mensaje de Aprobado con su respectivo Promedio, en caso contrario, se muestra un mensaje 
    diciendo que Desaprobo, con su respectivo Promedio.
    */
    if (promedio >= 7) {
        alert("Felicitaciones! Aprobaste " + nombre + " !Tu promedio es de " + promedio);
    } else if (promedio < 7) {
        alert(nombre + ", lamentamos informarte que reprobaste " + ". Tu promedio es de " + promedio);
    }
}







console.log(alumno_)


// notaFinal();