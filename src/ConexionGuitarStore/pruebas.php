<?php
    include 'conexion.php';

    $pdo = new Conexion();

    try {
        $sql = $pdo->query("SELECT * FROM productos");
        while ($producto = $sql->fetch()) {
            echo $producto['IDProducto']. "<br>";
        }
    } catch (\Throwable $th) {
        //throw $th;
    }

?>