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
        $sqlprev = $pdo->prepare('SELECT * FROM usuarios WHERE (Usuario=:user OR EmailUsuario=:user)');
        $sqlprev->bindValue(':user', $_GET['user']);
        $sqlprev->execute();

        while ($fila1 = $sqlprev->fetch()) {
            $hash = $fila1['Contraseña'];

            if (password_verify($_GET['contrasena'], $hash)) {

                $sql = $pdo->prepare('SELECT * FROM usuarios WHERE (Usuario=:user OR EmailUsuario=:user) and contraseña = :contrasena');
                $sql->bindValue(':user', $_GET['user']);
                $sql->bindValue(':contrasena', $hash);
                $sql->execute();
    
                    
                    if ($sql->rowCount() < 1) {
                        echo json_encode('error');
                    }   

                $sql->setFetchMode(PDO::FETCH_ASSOC);
                header("HTTP/1.1 200 OK");
                echo json_encode($sql->fetchAll());
                exit;
            } else {
                echo json_encode('error contraseñas');
            }
                
    
        }


    }
