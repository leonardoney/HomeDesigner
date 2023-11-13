// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);

// Actualizar valores escaneados
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("proyecto_actual_ancho").textContent = ("Ancho: " + db.proyecto_actual.ancho);
    document.getElementById("proyecto_actual_largo").textContent = ("Largo: " + db.proyecto_actual.largo);
    document.getElementById("proyecto_actual_alto").textContent = ("Alto: " + db.proyecto_actual.alto);
});

// Botón guardar
function botonGuardar() {

    // Evaluar nombre de proyecto
    db.proyecto_actual.nombre = document.getElementById("nombreProyecto").value;
    if (db.proyecto_actual.nombre.trim() === "") {
        alert("Por favor, ingrese un nombre de proyecto antes de guardar.");
    } else {
        crearProyecto();    // Crear el proyecto
    }
}

// Crear proyecto
function crearProyecto() {
    var proyectoLibre = (db.proyectos.find(proyecto => proyecto.nombre === "-espacio libre-"))
    if (proyectoLibre) {
        db.proyecto_actual.id = proyectoLibre.id;
        proyectoLibre.nombre = db.proyecto_actual.nombre;
        proyectoLibre.fecha = db.proyecto_actual.fecha = (new Date()).toLocaleDateString('en-GB');
        proyectoLibre.ancho = db.proyecto_actual.ancho;
        proyectoLibre.largo = db.proyecto_actual.largo;
        proyectoLibre.alto = db.proyecto_actual.alto;
        
        // Guarda BD almacenamiento local
        db_str = JSON.stringify(db);
        localStorage.setItem('db', db_str);
        alert("Se ha generado el proyecto " + db.proyecto_actual.nombre);
        window.location.href = "seleccionaroperacion.html";
    } else {
        alert("No puede generar más proyectos, debe ampliar su suscripción");
    }
}