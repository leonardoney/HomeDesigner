// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);
var seleccion = "";

// Seleccion al hacer clic en accesorio
function seleccionarAccesorio(imgElement) {
  // Obtén una lista de todos los elementos con la clase "selected"
  var selectedElements = document.querySelectorAll('.selected');

  // Deseleccionar elementos que no se seleccionaron
  selectedElements.forEach(function (selectedElement) {
    selectedElement.classList.remove('selected');
  });

  // Obtén el índice del elemento seleccionado
  var allAccesorios = document.querySelectorAll('.acc');
  seleccion = Array.from(allAccesorios).indexOf(imgElement);

  // Luego, agrega la clase "selected" solo al elemento que se hizo clic
  imgElement.classList.add('selected');
}

// Botón guardar
function confirmar(accesorio) {
  // Pregunta al usuario si desea conservar los cambios seleccionados
  var confirmacion = confirm("¿Desea conservar los cambios seleccionados?");

  if (confirmacion) {
    var proyectoDB = db.proyectos.find(proyecto => proyecto.id === db.proyecto_actual.id);
    if (proyectoDB) {
      proyectoDB[accesorio] = seleccion;
      db.proyecto_actual[accesorio] = seleccion;

      // Guarda BD en almacenamiento local
      db_str = JSON.stringify(db);
      localStorage.setItem('db', db_str);
      alert("Cambios guardados");
    }
  }
  else {
    alert("Cambios descartados");
  }
  console.log(db);
  window.location.href = "accesorios.html";
}

