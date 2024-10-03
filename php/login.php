<?php
// Iniciar sesión
session_start();

// Conectar a la base de datos
$host = 'localhost';
$db = 'homedesign';
$user = 'root'; // Cambia por tu usuario de la BD
$password = ''; // Cambia por tu contraseña de la BD
$dsn = "mysql:host=$host;dbname=$db;charset=utf8";

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Procesar el formulario de inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre_usuario = $_POST['nombre_usuario']; // Cambiado de 'email' a 'nombre_usuario'
    $password = $_POST['password'];

    // Verificar si el usuario existe en la base de datos
    $sql = "SELECT * FROM usuarios WHERE nombre_usuario = :nombre_usuario LIMIT 1"; // Cambiado de 'email' a 'nombre_usuario'
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nombre_usuario', $nombre_usuario); // Cambiado de 'email' a 'nombre_usuario' // Asignar el valor de nombre_usuario
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        // Verificar la contraseña
        if (password_verify($password, $usuario['password'])) {
            // Iniciar la sesión y redirigir al usuario
            $_SESSION['user_id'] = $usuario['id'];
            $_SESSION['nombre_usuario'] = $usuario['nombre_usuario']; // Cambiado de 'email' a 'nombre_usuario'// Guardar nombre de usuario en la sesión
            header("Location: index.html");
            exit();
        } else {
            $error = "Contraseña incorrecta.";
        }
    } else {
        $error = "No se encontró una cuenta con ese nombre de usuario.";
    }
}

