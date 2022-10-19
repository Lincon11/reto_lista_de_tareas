var scanf = require("scanf");

var contactList = [];

console.log("Mi Lista de Tareas");
console.log();

var listaDeTareas = [];
let salir;

do {
  console.log("1. Agregar una Tarea");
  console.log("2. Enlistar mis tareas");
  console.log("3. Actualizar mis tareas");
  console.log("4. Eliminar un Contacto");
  console.log("5. Salir\n");

  console.log("Escoje tu opción:");
  opcionSelecionada = scanf("%d");
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
      console.log("Mi Lista de tareas");
      console.log();

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
        listaDeTareas[indiceTarea].titulo = scanf("%d");
      } else if (eleccion == 2) {
        console.log("Ingrese el nuevo contenido");
        listaDeTareas[indiceTarea].contenido = scanf("%d");
      } else {
        console.log("Opcion equivocada.");
      }

    case 4:
      listaDeTareas.forEach(function (tareaActual, i) {
        let indice = i + 1;
        console.log(`${indice}. Nombre: ${tareaActual.titulo}`);
      });

      console.log("Ingrese el numero de la tarea a eliminar:");

      listaDeTareas.splice(scanf("%d") - 1, 1);

      break;
    default:
      console.log("Error: no existe esa opción");
      break;
  }
} while (salir !== 5);
