// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);
console.log(db.usuarios);

// Botón start
function botonStart() {
    // Leer valores de pantalla
    db.usuario_actual.id = document.getElementById("usuario_actual_id").value;
    db.usuario_actual.password = document.getElementById("usuario_actual_password").value;

    // Buscar el usuario en BD
    var usuarioEncontrado = db.usuarios.find(usuario => usuario.id === db.usuario_actual.id 
        && usuario.password === db.usuario_actual.password);
    if (!usuarioEncontrado) {
        alert("El usuario o contraseña son incorrectos");
        return;
    }

    console.log(usuarioEncontrado);
    // Confirmar antes de eliminar el usuario
    var confirmarEliminar = confirm("¿Confirma que desea eliminar su usuario?");
    if (confirmarEliminar) {
        // Eliminar el usuario de la base de datos local
        var index = db.usuarios.indexOf(usuarioEncontrado);
        db.usuarios.splice(index, 1);
        localStorage.setItem('db', JSON.stringify(db));
        alert("Usuario eliminado exitosamente");
        // Redirigir a otra página
        window.location.href = "login.html";
    }
}
