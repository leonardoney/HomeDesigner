<?php
ob_start();                     // Iniciar el buffer de salida para capturar cualquier texto
include 'db_connection.php';    // Conexión a la base de datos
ob_clean();                     // Limpiar cualquier salida generada durante la conexión a BD

// Verificar si se ha enviado el parámetro necesario (id_compra y producto)
if (isset($_POST['id_compra']) && isset($_POST['producto'])) {
    $id_compra = $_POST['id_compra'];
    $producto = $_POST['producto'];

    // Preparar la consulta SQL para eliminar el item del carrito
    $sql = "DELETE FROM items_x_compra WHERE id_compra = :id_compra AND codigo_producto = :producto";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id_compra', $id_compra, PDO::PARAM_INT);
    $stmt->bindParam(':producto', $producto, PDO::PARAM_INT);

    // Ejecutar la consulta y verificar el resultado
    if ($stmt->execute()) {
        $response = [
            'status' => 'success',
            'message' => 'Item eliminado exitosamente'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'No se pudo eliminar el item'
        ];
    }

    // Cerrar la conexión
    $stmt = null;
    $pdo = null;

    // Devolver los resultados como JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Si no se recibieron los parámetros necesarios, enviar un error
    $response = [
        'status' => 'error',
        'message' => 'Parámetros faltantes'
    ];
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
