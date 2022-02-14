<?php

    include 'conexion.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Rquest-With, Content-type, Accept");
    header("Content-Type: Aplication/Json; charset=utf8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    $pdo = new Conexion();

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $usu = $_GET['IDUsuario'];
        $producto = $_GET['IDProducto'];
        $Cantidad = $_GET['CantidadCarrito'];
        $sql = $pdo->prepare('SELECT * FROM Sesion_Compra WHERE IDUsuario = :usuario ORDER BY IDSesion DESC LIMIT 1');
        $sql->bindValue(':usuario', $usu);
        $sql->execute();
        while ($fila = $sql->fetch()) {
            $sesion = $fila['IDSesion'];
            $selectProducto = $pdo->prepare('SELECT * FROM productos WHERE IDProducto = :producto');
            $selectProducto->bindValue(':producto', $producto);
            $selectProducto->execute();
            while ($fila = $selectProducto->fetch()) {
                $nombreProducto = $fila['NombreProducto'];
                $ImagenProducto = $fila['ImagenProducto'];
            }
            $sql = $pdo->prepare('SELECT * FROM carrito WHERE IDSesion = :sesion AND IDProducto = :producto');
            $sql->bindValue(':sesion', $sesion);
            $sql->bindValue(':producto', $producto);
            $sql->execute();
            if ($sql->rowCount() < 1) {
                
                $sql = $pdo->prepare('INSERT INTO carrito VALUES (null, :sesion, :producto, :nombre, :cantidad, :imagen)');
                $sql->bindValue(':sesion', $sesion);
                $sql->bindValue(':producto', $producto);
                $sql->bindValue(':nombre', $nombreProducto);
                $sql->bindValue(':cantidad', $Cantidad);
                $sql->bindValue(':imagen', $ImagenProducto);
                $sql->execute();

                $sql->setFetchMode(PDO::FETCH_ASSOC);
                header("HTTP/1.1 200 OK");

                echo json_encode($sql -> fetchAll());
                exit;

            } else {
                $SelectUpdate = $pdo->prepare('SELECT * FROM carrito WHERE IDSesion = :sesion AND IDProducto = :producto');
                $SelectUpdate->bindValue(':sesion', $sesion);
                $SelectUpdate->bindValue(':producto', $producto);
                $SelectUpdate->execute();
                while ($fila = $SelectUpdate->fetch()) {
                    $cantidadNueva = $fila['CantidadCarrito'];
                    $sql = $pdo->prepare('UPDATE carrito SET CantidadCarrito = :carrito WHERE IDSesion = :sesion AND IDProducto = :producto');
                    $sql->bindValue(':sesion', $sesion);
                    $sql->bindValue(':producto', $producto);
                    $sql->bindValue(':carrito', $cantidadNueva + 1);
                    $sql->execute();
                    $sql->setFetchMode(PDO::FETCH_ASSOC);
                    header("HTTP/1.1 200 OK");

                    echo json_encode($sql -> fetchAll());
                    exit;
                }
            }
        }   
    }
?>