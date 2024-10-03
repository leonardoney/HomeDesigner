<?php
include 'db_connection.php';

$id_compra = $_POST['id_compra'];

// Actualizar stock de productos
$sql_items = "SELECT codigo_producto, cantidad_comprada FROM Items_X_compra WHERE id_compra = ?";
$stmt_items = $conn->prepare($sql_items);
$stmt_items->bind_param("i", $id_compra);
$stmt_items->execute();
$result_items = $stmt_items->get_result();

while ($row = $result_items->fetch_assoc()) {
    $codigo_producto = $row['codigo_producto'];
    $cantidad_comprada = $row['cantidad_comprada'];

    $sql_stock = "UPDATE Stock_productos SET stock_disponible = stock_disponible - ? WHERE codigo_producto = ?";
    $stmt_stock = $conn->prepare($sql_stock);
    $stmt_stock->bind_param("ii", $cantidad_comprada, $codigo_producto);
    $stmt_stock->execute();
}

echo "Compra finalizada y stock actualizado.";

$stmt_items->close();
$stmt_stock->close();
$conn->close();
?>
