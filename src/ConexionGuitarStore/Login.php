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
        $sqlprev = $pdo->prepare('SELECT * FROM usuarios WHERE (UsuarioUsuario=:user OR EmailUsuario=:user)');
        $sqlprev->bindValue(':user', $_GET['user']);
        $sqlprev->execute();

        while ($fila1 = $sqlprev->fetch()) {
            $hash = $fila1['ContraseñaUsuario'];

            if (password_verify($_GET['contrasena'], $hash)) {

                $sql = $pdo->prepare('SELECT * FROM usuarios WHERE UsuarioUsuario=:user and contraseñaUsuario = :contrasena');
                $sql->bindValue(':user', $_GET['user']);
                $sql->bindValue(':contrasena', $hash);
                $sql->execute();
                
                if ($sql->rowCount() < 1) {
                    echo json_encode('error');
                }

                $sql->setFetchMode(PDO::FETCH_ASSOC);
                header("HTTP/1.1 200 OK");
                echo json_encode($sql->fetchAll());
                
                $sql3 = $pdo->prepare('SELECT * FROM usuarios WHERE UsuarioUsuario=:user and contraseñaUsuario = :contrasena');
                $sql3->bindValue(':user', $_GET['user']);
                $sql3->bindValue(':contrasena', $hash);
                $sql3->execute();

                while ($fila2 = $sql3->fetch()) {
                    $sqlsesion = $pdo->prepare('INSERT INTO sesion_compra values (null, :idCliente)');
                    $sqlsesion->bindValue(':idCliente', $fila2['IDUsuario']);
                    $sqlsesion->execute();
                }

                exit;
                

            } else {
                echo json_encode('error contraseñas');
            }
                
    
        }


    }
