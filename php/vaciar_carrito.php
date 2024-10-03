<?php
include 'db_connection.php';

$id_compra = $_POST['id_compra'];

$sql = "DELETE FROM Items_X_compra WHERE id_compra = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id_compra);

if ($stmt->execute()) {
    header("Location: ../carrito.html");
} else {
    echo "Error al vaciar el carrito: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
