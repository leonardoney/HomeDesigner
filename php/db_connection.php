<?php
// Definir las variables para la conexión
$servername = "localhost";  // Servidor de la base de datos
$username = "root";    // Tu usuario de MySQL
$password = "1234"; // Tu contraseña de MySQL
$dbname = "homedesigner_db"; // El nombre de la base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} 
echo "Conexión exitosa";
?>