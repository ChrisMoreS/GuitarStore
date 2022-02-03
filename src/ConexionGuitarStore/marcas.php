<?php

    include 'conexion.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Rquest-With, Content-type, Accept");
    header("Content-Type: Aplication/Json; charset=utf8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    $pdo = new Conexion();


// MARCAS

    //Mostrar Info

    if ($_SERVER['REQUEST_METHOD']=='GET') {

        if (isset($_GET['idMarca'])) {
            $sql = $pdo->prepare('SELECT * FROM Marca WHERE IDMarca=:idMarca');
            $sql->bindValue(':idMarca', $_GET['idMarca']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");

            echo json_encode($sql -> fetchAll());
            exit;

        }else{
            $sql = $pdo->prepare('SELECT * FROM Marca');
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");

            echo json_encode($sql -> fetchAll());
            exit;

        }

    }

    //Agregar MARCA

    if ($_SERVER['REQUEST_METHOD']=='POST') {
        $sql = "INSERT INTO Marca(NombreMarca) 
        values (:NombreMarca)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':NombreMarca', $params->NombreMarca);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha agregado.');
        exit;
    }

    //Actualizar MARCA

    if ($_SERVER['REQUEST_METHOD']=='PUT') {
        $sql = "UPDATE Marca 
                SET NombreMarca=:NombreMarca
                WHERE IDMarca=:idMarca";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':NombreMarca', $params->NombreMarca);
        $stmt->bindValue(':idMarca', $_GET['idMarca']);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha actualizado.');
        exit;
    }

    //Eliminar MARCA
    
    if ($_SERVER['REQUEST_METHOD']=='DELETE') {
        $sql = "DELETE FROM Marca WHERE IDMarca=:idMarca";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':idMarca', $_GET['idMarca']);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha eliminado.');
        exit;
    }


?>