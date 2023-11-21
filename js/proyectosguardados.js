// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);
console.log(db.proyectos);

function mostrarProyectos() {
  var proyectosList = document.getElementById('proyectosList');

  // Limpiar el contenido existente en proyectosList
  proyectosList.innerHTML = '';

  var proyectos = db.proyectos;

  proyectos.forEach(function (proyecto) {
    // Crear un div para el proyecto
    var proyectoDiv = document.createElement('div');

    // Crear un enlace para el proyecto
    var enlace = document.createElement('a');
    if (proyecto.nombre === "-espacio libre-") {
      enlace.href = "target:_self";
    } else {
      enlace.href = "accesorios.html";
    }
    enlace.addEventListener('click', function () {
      db.proyecto_actual = proyecto
      var proyectoDB = db.proyectos.find(proyecto => proyecto.id === db.proyecto_actual.id);
      // Guarda BD en almacenamiento local
      db_str = JSON.stringify(db);
      localStorage.setItem('db', db_str);
    });

    // Crear una imagen
    var imagen = document.createElement('img');
    imagen.src = "images/nuevoproyecto.png";
    imagen.style.width = "25%";
    imagen.style.verticalAlign = "middle";

    // Crear un elemento para mostrar el valor del campo "ID"
    var idElement = document.createElement('p');
    idElement.className = 'body-font-blue';
    idElement.style.display = 'inline';
    idElement.textContent = proyecto.nombre;
    idElement.style.width = "10%";
    
    // Crear un párrafo para mostrar la información del proyecto
    var parrafo = document.createElement('p');
    parrafo.className = "body-font-yellow";
    parrafo.style.display = 'inline'; // Mostrar en línea
    // parrafo.style.display = "inline-block";
    // parrafo.style.verticalAlign = "middle";
    parrafo.style.width = "90%";
    // parrafo.style.marginLeft = "5%";

    // Construir el texto con la información del proyecto
    var proyectoInfo = " | Fecha: " + proyecto.fecha
      + "<br>Ancho: " + proyecto.ancho + " | Largo: " + proyecto.largo + " | Alto: " + proyecto.alto
      + "<br>Planta: " + proyecto.planta + " | Lampara: " + proyecto.lampara + " | Cuadro: " + proyecto.cuadro 
      + "<br>Sillon: " + proyecto.sillon + " | RackTV: " + proyecto.racktv + " | Mesa: " + proyecto.ratona 
      + "<br>Comedor: " + proyecto.comedor + " | Habitacion: " + proyecto.habitacion 
      + "<br><br>";

    // parrafo.textContent = proyectoInfo;
    parrafo.innerHTML = proyectoInfo;

    // Agregar la imagen y el párrafo al enlace
    // enlace.appendChild(imagen);   
    enlace.appendChild(idElement);
    enlace.appendChild(parrafo);

    // Agregar un botón para "Borrar" el proyecto
    var botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'Borrar';
    botonBorrar.className = 'button-yellow-small';
    botonBorrar.style.display = 'inline-block';
    botonBorrar.addEventListener('click', function () {
      // Mostrar una confirmación antes de borrar el proyecto
      var confirmar = window.confirm('¿Desea borrar el proyecto ID ' + proyecto.id + '?');

      if (confirmar) {
        BorrarProyecto(proyecto.id);
        // Mostrar un mensaje con el nombre del proyecto borrado
        alert('Proyecto "' + db.proyecto_actual.nombre + '" ha sido borrado.');
      }
    });

    // Agregar el enlace al div del proyecto
    proyectoDiv.appendChild(enlace);

    // Agregar el botón de "Borrar" al div del proyecto
    proyectoDiv.appendChild(botonBorrar);

    // Agregar el div del proyecto al proyectoList
    proyectosList.appendChild(proyectoDiv);

    // Agregar una línea horizontal después de cada div de proyecto
    var hr = document.createElement('hr');
    hr.className = "body-horizontal-bar";
    proyectosList.appendChild(hr);
  });
}

// Llama a la función para mostrar los proyectos después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', mostrarProyectos);

// Función para "Borrar" un proyecto
function BorrarProyecto(id) {
  // Encuentra el proyecto en el arreglo 'proyectos' por su ID
  var proyecto = db.proyectos.find(function (proyecto) {
    return proyecto.id === id;
  });

  // Si se encontró el proyecto, actualiza sus campos
  if (proyecto) {
    proyecto.nombre = "-espacio libre-";
    proyecto.fecha = (new Date()).toLocaleDateString('en-GB');
    proyecto.ancho = 0;
    proyecto.largo = 0;
    proyecto.alto = 0;

    // Actualiza el almacenamiento local con la nueva información
    localStorage.setItem('db', JSON.stringify(db));

    // Actualiza la lista de proyectos
    mostrarProyectos();
  }
}
