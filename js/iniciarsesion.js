// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);

// Botón start
function botonStart() {

    // Leer valores de pantalla
    db.usuario_actual.usuario = document.getElementById("usuario_actual_id").value;
    db.usuario_actual.password = document.getElementById("usuario_actual_password").value;

    // Buscar el usuario en BD
    if ((db.usuarios.find(usuario => usuario.id === db.usuario_actual.usuario)) &&
        (db.usuarios.find(usuario => usuario.password === db.usuario_actual.password))) {
        alert("Sesión Iniciada");
        window.location.href = "seleccionaroperacion.html";
    } else {
        alert("El usuario o contraseña son incorrectos");
    }
}
