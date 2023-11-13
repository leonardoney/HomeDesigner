// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);

// Verificar la URL y asignar valores correspondientes
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("dis-clasico.html")) {
        prediseno = "clásico";
    } else if (window.location.href.includes("dis-contemporaneo.html")) {
        prediseno = "contemporáneo";
    } else if (window.location.href.includes("dis-minimalista.html")) {
        prediseno = "minimalista";
    } else if (window.location.href.includes("dis-moderno.html")) {
        prediseno = "moderno";
    }
});

// Botón guardar
function botonGuardar() {
    var proyectoDB = db.proyectos.find(proyecto => proyecto.id === db.proyecto_actual.id);
    if (proyectoDB) {
        proyectoDB.prediseno = prediseno;
        db.proyecto_actual.prediseno = prediseno;

        // Guarda BD almacenamiento local
        db_str = JSON.stringify(db);
        localStorage.setItem('db', db_str);
        alert("Se ha asignado el prediseño " + prediseno);
        console.log(db);
        //window.location.href = "seleccionaroperacion.html";
    } else {
        alert("Debe crear un nuevo proyecto para poder asignarle el prediseño");
    }
}

