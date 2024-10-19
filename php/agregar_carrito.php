<?php
include 'db_connection.php';
$codigo_producto = $_POST['codigo_producto'];
$cantidad = 1;  // Estático por ahora, puedes permitir que el usuario lo elija.
$id_compra = 1;

// Obtener el precio del producto desde la tabla Productos.
$sql_precio = "SELECT precio FROM productos WHERE codigo_producto = :codigo_producto LIMIT 1";
$stmt = $pdo->prepare($sql_precio);
$stmt->bindParam(':codigo_producto', $codigo_producto, PDO::PARAM_STR);
$stmt->execute();
$precio_item = $stmt->fetch(PDO::FETCH_ASSOC)['precio'];

if ($precio_item) {
    try {
        // Agregar el producto al carrito
        $sql_insert = "INSERT INTO items_X_compra (id_compra, codigo_producto, cantidad_comprada, precio_item) 
                       VALUES (:id_compra, :codigo_producto, :cantidad_comprada, :precio_item)";
        $stmt = $pdo->prepare($sql_insert);
        $stmt->bindParam(':id_compra', $id_compra, PDO::PARAM_INT);
        $stmt->bindParam(':codigo_producto', $codigo_producto, PDO::PARAM_INT);
        $stmt->bindParam(':cantidad_comprada', $cantidad, PDO::PARAM_INT);
        $stmt->bindParam(':precio_item', $precio_item, PDO::PARAM_INT);
        
        if ($stmt->execute()) {
            // Mensaje de éxito
            echo "<script>
                    alert('Producto agregado al carrito con éxito.');
                    window.location.href = '" . $_SERVER['HTTP_REFERER'] . "';
                  </script>";
        }
    } catch (PDOException $e) {
        // Mensaje de error
        echo "<script>
                alert('Hubo un error al agregar el producto al carrito: " . $e->getMessage() . "');
                window.location.href = '" . $_SERVER['HTTP_REFERER'] . "';
              </script>";
        exit();
    }
    

} else {
    echo "<script>
            alert('No se encontró el precio del producto.');
            window.location.href = '" . $_SERVER['HTTP_REFERER'] . "';
          </script>";
    exit();
}
?>
