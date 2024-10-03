<?php
include 'db_connection.php';

$codigo_producto = $_POST['codigo_producto'];
$cantidad = 1;  // Estático por ahora, puedes permitir que el usuario lo elija.
$id_compra = 1;  // ID de la compra en progreso, deberás manejar esto dinámicamente.

$sql = "INSERT INTO Items_X_compra (id_compra, codigo_producto, cantidad_comprada, precio_item) 
        VALUES (?, ?, ?, (SELECT precio FROM Productos WHERE codigo_producto = ?))";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iiii", $id_compra, $codigo_producto, $cantidad, $codigo_producto);

if ($stmt->execute()) {
    header("Location: ../carrito.html");
} else {
    echo "Error al agregar el producto al carrito: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
