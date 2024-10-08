<?php

include 'db_connection.php';

// Procesar el formulario de inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre_usuario = $_POST['nombre_usuario']; // Cambiado de 'email' a 'nombre_usuario'
    $clave_usuario = $_POST['password'];

    // Verificar si el usuario existe en la base de datos
    $sql = "SELECT * FROM usuarios WHERE nombre_usuario = :nombre_usuario LIMIT 1"; // Cambiado de 'email' a 'nombre_usuario'
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nombre_usuario', $nombre_usuario, PDO::PARAM_STR);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        // Verificar la contraseña
        if (password_verify($clave_usuario, $usuario['password'])) {
            // Iniciar la sesión y redirigir al usuario
            session_start();
            $_SESSION['user_id'] = $usuario['id'];
            $_SESSION['nombre_usuario'] = $usuario['nombre_usuario']; // Guardar nombre de usuario en la sesión
            header("Location: index.html");
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "No se encontró una cuenta con ese nombre de usuario.";
    }
}


?>