<?php
include 'db_connection.php';

$id_item = $_POST['id_item'];

$sql = "DELETE FROM Items_X_compra WHERE id_item = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id_item);

if ($stmt->execute()) {
    header("Location: ../carrito.html");
} else {
    echo "Error al eliminar el producto: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
