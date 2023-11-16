"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var decision = 0;
var tareas = [];
// Función para generar la interfaz
function generarInterfaz() {
    console.log('Hola Olivia \n'
        + ' Que deberias hacer? \n'
        + ' 1. Ver mis Tareas \n'
        + ' 2. Buscar una Tarea \n'
        + ' 3. Agregar una Tarea \n'
        + ' 4. Salir \n');
}
// Función para agregar una Tarea
function agregarTarea() {
    var creacion = new Date();
    var ultimaEdicion = creacion;
    var titulo = prompt('Título: ');
    while (titulo === '') {
        console.log('El titulo no puede estar vacio');
        titulo = prompt('Título: ');
    }
    var descripcion = prompt('Descripción: ');
    var estado = prompt('Estado(Pendiente/En curso/ Terminada/ Cancelada): ');
    if (estado !== 'Pendiente' && estado !== 'En curso' && estado !== 'Terminada' && estado !== 'Cancelada') {
        estado = 'Pendiente';
    }
    var vencimiento = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
    var dificultad = prompt('Dificultad: ');
    if (dificultad !== 'Facil' && dificultad !== 'Medio' && dificultad !== 'Dificil') {
        dificultad = 'Facil';
    }
    var tarea = {
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        creacion: creacion,
        ultimaEdicion: ultimaEdicion,
        vencimiento: vencimiento,
        dificultad: dificultad,
    };
    tareas.push(tarea);
    console.log('Tarea agregada:', tarea);
}
// Función para ver los detalles de cada Tarea
function verDetallesTarea(tipotarea) {
    var indiceTarea = parseInt(prompt('Selecciona el número de la tarea para ver detalles: '));
    if (indiceTarea < 1 || indiceTarea > tipotarea.length) {
        console.log('Opción no válida.');
        return;
    }
    else {
        indiceTarea = indiceTarea - 1;
        var tareaSeleccionada = tipotarea[indiceTarea];
        console.log('\n Detalles de la Tarea:');
        console.log("  T\u00EDtulo: ".concat(tareaSeleccionada.titulo));
        console.log("  Descripci\u00F3n: ".concat(tareaSeleccionada.descripcion));
        console.log("  Estado: ".concat(tareaSeleccionada.estado));
        console.log("  Creaci\u00F3n: ".concat(tareaSeleccionada.creacion));
        console.log("  \u00DAltima Edici\u00F3n: ".concat(tareaSeleccionada.ultimaEdicion));
        console.log("  Vencimiento: ".concat(tareaSeleccionada.vencimiento));
        console.log("  Dificultad: ".concat(tareaSeleccionada.dificultad));
        console.log('\n');
        console.log('¿Desea Editar un dato? S / N \n');
        var decision_1 = prompt('');
        if (decision_1 === 'S') {
            console.log('¿Que desea editar? (titulo,descripcion,estado,edicion,vencimiento) \n');
            decision_1 = prompt('');
            switch (decision_1) {
                case 'titulo':
                    var nuevoTitulo = prompt('Título: ');
                    while (nuevoTitulo === '') {
                        console.log('El titulo no puede estar vacio');
                        nuevoTitulo = prompt('Título: ');
                    }
                    tareaSeleccionada.titulo = nuevoTitulo;
                    break;
                case 'descripcion':
                    var nuevaDescripcion = prompt('Descripción: ');
                    tareaSeleccionada.descripcion = nuevaDescripcion;
                    break;
                case 'estado':
                    var nuevoEstado = prompt('Estado(Pendiente/En curso/ Terminada/ Cancelada): ');
                    if (nuevoEstado !== 'Pendiente' && nuevoEstado !== 'En curso' && nuevoEstado !== 'Terminada' && nuevoEstado !== 'Cancelada') {
                        nuevoEstado = 'Pendiente';
                    }
                    tareaSeleccionada.estado = nuevoEstado;
                    break;
                case 'edicion':
                    var nuevaEdicion = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
                    tareaSeleccionada.ultimaEdicion = nuevaEdicion;
                    break;
                case 'vencimiento':
                    var nuevoVencimiento = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
                    tareaSeleccionada.vencimiento = nuevoVencimiento;
                    break;
                default:
                    console.log('Opcion no valida');
                    break;
            }
        }
        else if (decision_1 === 'N') {
            return;
        }
        else {
            console.log('Opcion no valida');
            return;
        }
    }
}
// Función para ver las tareas
function verTareas() {
    if (tareas.length === 0) {
        console.log('No hay tareas para mostrar.');
        return;
    }
    console.log('Que tareas desea ver? \n'
        + ' 1. Todas \n'
        + ' 2. Pendientes \n'
        + ' 3. En curso \n'
        + ' 4. Terminadas \n'
        + ' 0. Volver \n');
    decision = parseInt(prompt(''));
    switch (decision) {
        case 1:
            console.log('Todas las tareas \n');
            console.log("\n");
            tareas.forEach(function (tarea, index) {
                console.log(index + 1 + ".", tarea.titulo);
                console.log("\n");
            });
            verDetallesTarea(tareas);
            break;
        case 2:
            console.log('Tareas pendientes');
            var tareasPendientes = tareas.filter(function (tarea) { return tarea.estado == 'Pendiente'; });
            tareasPendientes.forEach(function (tarea, index) {
                console.log(index + 1 + ".", tarea.titulo);
                console.log("\n");
            });
            verDetallesTarea(tareasPendientes);
            break;
        case 3:
            console.log('Tareas en curso');
            var tareasEnCurso = tareas.filter(function (tarea) { return tarea.estado == 'En curso'; });
            tareasEnCurso.forEach(function (tarea, index) {
                console.log(index + 1 + ".", tarea.titulo);
                console.log("\n");
            });
            verDetallesTarea(tareasEnCurso);
            break;
        case 4:
            console.log('Tareas terminadas');
            var tareasTerminadas = tareas.filter(function (tarea) { return tarea.estado == 'Terminada'; });
            tareasTerminadas.forEach(function (tarea, index) {
                console.log(index + 1 + ".", tarea.titulo);
                console.log("\n");
            });
            verDetallesTarea(tareasTerminadas);
            break;
        case 0:
            console.log('Volver');
            return;
        default:
            console.log('Opcion no valida');
            break;
    }
}
// Función para buscar tarea por titulo
function buscarTarea() {
    if (tareas.length === 0) {
        console.log('No hay tareas para buscar.');
        return;
    }
    var cadenaBusqueda = prompt('Ingrese el título o parte del título de la tarea: ');
    // Filtrar las tareas cuyos títulos contienen la cadena de búsqueda
    var tareasEncontradas = tareas.filter(function (tarea) { return tarea.titulo.includes(cadenaBusqueda); });
    if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas con el t\u00EDtulo que contiene \"".concat(cadenaBusqueda, "\"."));
        return;
    }
    console.log("Estas son las tareas relacionadas con el titulo \"".concat(cadenaBusqueda, "\":"));
    console.log("\n \n");
    tareasEncontradas.forEach(function (tarea, index) {
        console.log(index + 1 + ".", tarea.titulo);
        console.log("\n");
    });
    verDetallesTarea(tareasEncontradas);
}
// Función para ya tener tareas agregadas de manera predeterminada
function tareaEjemplo(titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad) {
    var tarea = {
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        creacion: creacion,
        ultimaEdicion: ultimaEdicion,
        vencimiento: vencimiento,
        dificultad: dificultad,
    };
    tareas.push(tarea);
}
// Ejecucion del Programa
tareaEjemplo('Hacer el TP', 'Hacer el TP de Javascript', 'Pendiente', '2021-04-01', '2021-04-01', '2021-04-01', 'Facil');
tareaEjemplo('jugar al Cs', 'Jugar al Cs con los pibes', 'En curso', '2021-04-01', '2021-04-01', '2021-04-01', 'Facil');
tareaEjemplo('Tomar mate', 'Tomar mate con los pibes', 'Terminada', '2021-04-01', '2021-04-01', '2021-04-01', 'Facil');
generarInterfaz();
decision = parseInt(prompt(''));
while (decision !== 4) {
    switch (decision) {
        case 1:
            verTareas();
            break;
        case 2:
            console.log('Buscar tarea');
            buscarTarea();
            break;
        case 3:
            agregarTarea();
            break;
        case 4:
            console.log('Salir');
            break;
        default:
            console.log('Opcion no valida');
            break;
    }
    generarInterfaz();
    decision = parseInt(prompt(''));
}
