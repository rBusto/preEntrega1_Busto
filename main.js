function enviarDatosAlServidor() {
    const documento = document.getElementById('dniAlumno').value;
    const apellido = document.getElementById('apellidoAlumno').value;
    const materia = document.getElementById('materiaAlumno').value;
    const primerNota = parseFloat(document.getElementById('primerNota').value);
    const segundaNota = parseFloat(document.getElementById('segundaNota').value);
    const tercerNota = parseFloat(document.getElementById('tercerNota').value);

    const datos = {
        DNI: documento,
        Apellido: apellido,
        Materia: materia,
        CalificaciónN1: primerNota,
        CalificaciónN2: segundaNota,
        CalificaciónN3: tercerNota
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        const promedio = calcularPromedio(primerNota, segundaNota, tercerNota);
        asignar(promedio);
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
}

function guardarEnAlmacenamiento() {
    const documento = document.getElementById('dniAlumno').value;
    const apellido = document.getElementById('apellidoAlumno').value;
    const materia = document.getElementById('materiaAlumno').value;
    const primerNota = parseFloat(document.getElementById('primerNota').value);
    const segundaNota = parseFloat(document.getElementById('segundaNota').value);
    const tercerNota = parseFloat(document.getElementById('tercerNota').value);

    sessionStorage.setItem('DNI', documento);
    sessionStorage.setItem('Apellido', apellido);
    sessionStorage.setItem('Materia', materia);

    localStorage.setItem('Calificación N°1', primerNota);
    localStorage.setItem('Calificación N°2', segundaNota);
    localStorage.setItem('Calificación N°3', tercerNota);

    const total = primerNota + segundaNota + tercerNota;
    const cantidad = 3;
    const promedio = total / cantidad;

    sessionStorage.setItem('PromedioNotaFinal', promedio);

    asignar(promedio);
    enviarDatosAlServidor();
}

function asignar(promedio) {
    document.getElementById('promedioAlumno').value = promedio;
    if (promedio >= 7) {
        document.getElementById('mensajeAprobado').innerHTML = "<label><p style='color: green;'>APROBADO</p></label>";
    } else {
        document.getElementById('mensajeAprobado').innerHTML = "<label><p style='color: red;'>DESAPROBADO</p></label>";
    }
}

const botonGuardar = document.getElementById('boton');
botonGuardar.addEventListener('click', guardarEnAlmacenamiento);