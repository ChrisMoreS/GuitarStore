<?php

    include 'conexion.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Rquest-With, Content-type, Accept");
    header("Content-Type: Aplication/Json; charset=utf8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    $pdo = new Conexion();


// CATEGORIA

    //Mostrar Info

    if ($_SERVER['REQUEST_METHOD']=='GET') {

        if (isset($_GET['idCategoria'])) {
            $sql = $pdo->prepare('SELECT * FROM Categoria WHERE IDCategoria=:idCategoria');
            $sql->bindValue(':idCategoria', $_GET['idCategoria']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");

            echo json_encode($sql -> fetchAll());
            exit;

        }else{
            $sql = $pdo->prepare('SELECT * FROM Categoria');
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");

            echo json_encode($sql -> fetchAll());
            exit;
        }

    }

    //Agregar CATEGORIA

    if ($_SERVER['REQUEST_METHOD']=='POST') {
        $sql = "INSERT INTO Categoria(NombreCategoria) 
        values (:NombreCategoria)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':NombreCategoria', $params->NombreCategoria);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha agregado.');
        exit;
    }

    //Actualizar CATEGORIA

    if ($_SERVER['REQUEST_METHOD']=='PUT') {
        $sql = "UPDATE Marca 
                SET NombreCategoria=:NombreCategoria
                WHERE IDCategoria=:idCategoria";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':NombreCategoria', $params->NombreCategoria);
        $stmt->bindValue(':idCategoria', $_GET['idCategoria']);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha actualizado.');
        exit;
    }

    //Eliminar CATEGORIA
    
    if ($_SERVER['REQUEST_METHOD']=='DELETE') {
        $sql = "DELETE FROM Categoria WHERE IDCategoria=:idCategoria";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':idCategoria', $_GET['idCategoria']);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha eliminado.');
        exit;
    }


?>