<?php
ob_start();                     // Iniciar un buffer de salida para capturar cualquier texto
include 'db_connection.php';    // Conexión a la base de datos
ob_clean();                     // Limpiar cualquier salida generada durante conexión a BD

// ID de la compra actual
$id_compra = 1;

// Consultar los productos del carrito para la compra específica
$sql = "SELECT * FROM items_x_compra WHERE id_compra = :id_compra";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':id_compra', $id_compra, PDO::PARAM_INT);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

$total = 0;
$items = [];

// Recorrer los resultados de la consulta
foreach ($result as $row) {
    $subtotal = $row['cantidad_comprada'] * $row['precio_item'];
    $total += $subtotal;
    $items[] = [
        'id_compra' => $row['id_compra'],
        'producto' => $row['codigo_producto'],
        'precio' => $row['precio_item'],
        'cantidad' => $row['cantidad_comprada'],
        'subtotal' => $subtotal,
    ];
}

// Cerrar la conexión
$stmt = null;
$pdo = null;

// Devolver los resultados como JSON
header('Content-Type: application/json');
echo json_encode(['items' => $items, 'total' => $total]);
?>
