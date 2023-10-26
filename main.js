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

const alumno1 = new Alumnos("", "", "")


alumno1.apellido = prompt("Hola, Ingresa tu Apellido para continuar!");
alumno1.nombre = prompt("¿Cual es tu Nombre completo?");
alumno1.dni = parseInt(prompt("Permitime saber tu numero de documento..."));


let apellido = alumno1.apellido;
let nombre = alumno1.nombre;
let dni = alumno1.dni;

let alumnosDocumento = apellido + " " + alumno1.dni;
const alumnosCargadosHastaAhora = []
alumnosCargadosHastaAhora.push(alumnosDocumento)


apellido = MAYUSCULA(apellido);
nombre = MAYUSCULA(nombre);
const NOMBRE_COMPLETO = nombre + " " + apellido;
let total = 0;
let promedio = 0;
let cantidad = 0;

const materiasTotales = ["Matematica, Geografia, Biologia, Programacion y Fisica "];

function materiaIngresada(){
    /*
    Propósito: Pregunta al Usuario una Materia y sus calificaciones, pasa el string a Mayuscula y retorna el valor
    de la variable materia.
    */
    if(NOMBRE_COMPLETO !== null && NOMBRE_COMPLETO !== NaN) {
        alert("Hola " + NOMBRE_COMPLETO + ", ¿En cual Materia queres consultar tu promedio?");
        let materia = prompt("Las materias disponibles son: " + materiasTotales.join(", "));
        materia = MAYUSCULA(materia);
        alert("Buenisimo!" + " Para saber tu promedio en " + materia.trim() + ", ingrese sus calificaciones a continuación...");
        materiaAlumno = materia;
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

const notasNecesarias = [7, 8, 9, 10]
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
        alert("Necesitas un minimo de " + notasNecesarias[0])
    }
}

function Asignar(){
    document.getElementById('nombreAlumno').value = nombre;
    document.getElementById('apellidoAlumno').value = apellido;
    document.getElementById('materiaAlumno').value = materiaAlumno;
    document.getElementById('promedioAlumno').value = promedio;
    if (promedio >=7) {
        document.getElementById('mensajeAprobado').innerHTML = "<label><p style='color: green;'>APROBADO</p></label>";
    } else if (promedio < 7) {
        document.getElementById('mensajeAprobado').innerHTML = "<label><p style='color: red;'>DESAPROBADO</p></label>";
    }
}

localStorage.setItem("Materias", JSON.stringify(materiasTotales));

const storage = () => {
    sessionStorage.setItem(apellido, dni);
    sessionStorage.setItem(materiaAlumno, promedio);
}

function recargarPagina(){
    window.location.reload();
} 

const boton = document.querySelector("#boton");
boton.addEventListener("click", recargarPagina);


storage();
notaFinal();
Asignar();