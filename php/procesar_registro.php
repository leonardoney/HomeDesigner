<?php
// Conexión a la base de datos
$host = "localhost";
$user = "root";
$password = "";
$dbname = "homedesign";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Verificar si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_usuario = mysqli_real_escape_string($conn, $_POST['nombre_usuario']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $apellido = mysqli_real_escape_string($conn, $_POST['apellido']);
    $dni = mysqli_real_escape_string($conn, $_POST['dni']);
    $telefono = mysqli_real_escape_string($conn, $_POST['telefono']);
    $direccion = mysqli_real_escape_string($conn, $_POST['direccion']);
    $codigo_postal = mysqli_real_escape_string($conn, $_POST['codigo_postal']);
    $localidad = mysqli_real_escape_string($conn, $_POST['localidad']);
    $provincia = mysqli_real_escape_string($conn, $_POST['provincia']);

    // Insertar los datos en la tabla de usuarios
    $sql = "INSERT INTO usuarios (nombre_usuario, password, email, nombre, apellido, dni, telefono, direccion, codigo_postal, localidad, provincia)
            VALUES ('$nombre_usuario', '$password', '$email', '$nombre', '$apellido', '$dni', '$telefono', '$direccion', '$codigo_postal', '$localidad', '$provincia')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
        // Redireccionar al usuario a la página de login
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
