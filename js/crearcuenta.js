// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);

// Botón start
function botonStart() {

    // Leer valores de pantalla
    db.usuario_actual.id = document.getElementById("usuario_actual_id").value;
    db.usuario_actual.correo = document.getElementById("usuario_actual_correo").value;
    db.usuario_actual.password = document.getElementById("usuario_actual_password").value;
    console.log(db.usuario_actual)
    // Verificar que los campos no estén vacíos
    if (db.usuario_actual.id.trim() === ""
        || db.usuario_actual.correo.trim() === ""
        || db.usuario_actual.password.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return; // Detiene la ejecución si los campos están vacíos
    }

    // Verificar si el correo es válido
    if (!esCorreoValido(db.usuario_actual.correo)) {
        alert("Por favor, ingrese una dirección de correo válida.");
        return; // Detiene la ejecución si el correo no es válido
    }

    // Buscar el usuario en BD
    if ((db.usuarios.find(usuario => usuario.id === db.usuario_actual.id)) &&
        (db.usuarios.find(usuario => usuario.password === db.usuario_actual.password))) {
        alert("El usuario ya existe en la base de datos");
    } else {
        // Crear usuario
        db.usuarios.push(db.usuario_actual);
        alert("Registración exitosa, el usuario se ha creado")

        // Guarda BD almacenamiento local
        db_str = JSON.stringify(db);
        localStorage.setItem('db', db_str);

        // Redireccionar
        window.location.href = "login.html";
    }
}

// Función para verificar si un correo es válido
function esCorreoValido(correo) {
    // Expresión regular para validar una dirección de correo electrónico
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(correo);
}