var scanf = require("scanf");

console.log("Mi Lista de Tareas\n");

var listaDeTareas = [];
let salir;

do {
    console.log("-----------------------------------");
    console.log("1. Agregar una Tarea");
    console.log("2. Listar mis tareas");
    console.log("3. Actualizar mis tareas");
    console.log("4. Eliminar una tarea");
    console.log("5. Salir\n");

    console.log("Escoje tu opción:");
    let opcionSelecionada = scanf("%d");
    console.log("");
    salir = opcionSelecionada;

    switch (opcionSelecionada) {
        case 1:
            console.log("Ingresa el nombre de tu tarea:");
            let tituloTarea = scanf("%S");
            console.log("Ingrese la descripcion de la tarea:");
            let contenidoTarea = scanf("%S");

            let nuevaTarea = {};

            nuevaTarea["titulo"] = tituloTarea;
            nuevaTarea["contenido"] = contenidoTarea;

            if (listaDeTareas.find((tarea) => tarea.titulo == tituloTarea)) {
                console.log("Esta tarea ya existe, por favor ingresa otra");
            } else {
                listaDeTareas.push(nuevaTarea);
            }
            console.log("Tarea guardada exitosamente..!");
            break;
        case 2:
            listaDeTareas.forEach(function (tareaActual, i) {
                let indice = i + 1;
                console.log(`${indice}. Nombre: ${tareaActual.titulo}`);
                console.log(`Contenido: ${tareaActual.contenido}`);
            });
            break;
        case 3:
            listaDeTareas.forEach(function (tareaActual, i) {
                let indice = i + 1;
                console.log(`${indice}. Nombre: ${tareaActual.titulo}`);
            });

            console.log("Ingrese el numero de la tarea a actualizar:");
            let indiceTarea = scanf("%d") - 1;
            console.log(
                "Que deseas actualizar de la tarea: \n1. Titulo\n2. Contenido"
            );
            let eleccion = scanf("%d");
            if (eleccion == 1) {
                console.log("Ingrese el nuevo titulo");
                let nuevoTitulo = scanf("%S");
                listaDeTareas[indiceTarea].titulo = nuevoTitulo;
            } else if (eleccion == 2) {
                console.log("Ingrese el nuevo contenido");
                let nuevoContenido = scanf('%S');
                listaDeTareas[indiceTarea].contenido = nuevoContenido;
            } else {
                console.log("Opcion equivocada.");
            }
            console.log("Tarea guardada exitosamente..!");
            break;
        case 4:
            listaDeTareas.forEach(function (tareaActual, i) {
                let indice = i + 1;
                console.log(`${indice}. Nombre: ${tareaActual.titulo}`);
            });

            console.log("Ingrese el numero de la tarea a eliminar:");

            listaDeTareas.splice(scanf("%d") - 1, 1);
            console.log("Tarea eliminada exitosamente..!");
            break;
        default:
            console.log("Error: no existe esa opción");
            break;
    }
} while (salir !== 5);
