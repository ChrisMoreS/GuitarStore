<?php

    include 'conexion.php';

    a

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Rquest-With, Content-type, Accept");
    header("Content-Type: Aplication/Json; charset=utf8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    $pdo = new Conexion();


// Clientes

    //Mostrar Info para Update

    if ($_SERVER['REQUEST_METHOD']=='GET') {

        if (isset($_GET['idCliente'])) {
            $sql = $pdo->prepare('SELECT * FROM Usuarios WHERE IDUsuario=:idCliente');
            $sql->bindValue(':idCliente', $_GET['idCliente']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql -> fetchAll());
            exit;

        } else {

            $sql = $pdo->prepare('SELECT * FROM Usuarios ORDER BY CategoriaUsuario');
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql -> fetchAll());
            exit;

        }
    }

    //Agregar Cliente

    if ($_SERVER['REQUEST_METHOD']=='POST') {

        if (isset($_FILES['FotoPerfil'])) {
            $temporal = $_FILES['FotoPerfil']['temp_name'];
            $ImagenPerfilNombre = $_FILES['FotoPerfil']['name'];
            $rutadestino = '../assets/img/users/'.$ImagenPerfilNombre;
            move_uploaded_file($temporal, $rutadestino);
        }


        $sql = "INSERT INTO Usuarios(NombreUsuario, ApellidosUsuario, EmailUsuario, Usuario, Contraseña, FotoPerfilUsuario) 
        values (:NombreCliente, :ApellidosCliente, :EmailCliente, :UsuarioCliente, PASSWORD_HASH(:ContraseñaCliente, PASSWORD_DEFAULT), :FotoPerfilCliente)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':NombreCliente', $params->NombreCliente);
        $stmt->bindValue(':ApellidosCliente', $params->ApellidosCliente);
        $stmt->bindValue(':EmailCliente', $params->EmailCliente);
        $stmt->bindValue(':UsuarioCliente', $params->UsuarioCliente);
        $stmt->bindValue(':ContraseñaCliente', $params->ContraseñaCliente);
        $stmt->bindValue(':FotoPerfilCliente', $ImagenPerfilNombre);
        $stmt->execute();
        header('HTML/1.1 200 OK');
        echo json_encode('El registro se ha agregado.');
        exit;
    }

    //Actualizar Clientes

    if ($_SERVER['REQUEST_METHOD']=='PUT') {

        if (isset($_FILES['FotoPerfil'])) {
            $prevsql = $pdo->prepare('SELECT FotoPerfilUsuario FROM Usuarios WHERE IDUsuario = :idCliente');
            $prevsql->bindValue(':idCliente', $_GET['idCliente']);
            $prevsql->execute();

            while ($imagen = $prevsql->fetch()) {
                $NombreImagenAnterior = $imagen['FotoPerfilUsuario'];
                unlink('../assets/img/users/'.$NombreImagenAnterior);
            }

            $temporal = $_FILES['FotoPerfil']['temp_name'];
            $ImagenPerfilNombre = $_FILES['FotoPerfil']['name'];
            $rutadestino = '../assets/img/users/'.$ImagenPerfilNombre;
            move_uploaded_file($temporal, $rutadestino);
        }

        if (isset($_POST['UsuarioCliente'])) {
            $prevsql = $pdo->prepare('SELECT * FROM Usuarios WHERE Usuario = :usurarioCliente');
            $prevsql->bindValue(':UsuarioCliente', $params->UsuarioCliente);
            $prevsql->execute();

            while ($user = $prevsql->fetch()) {
                $usuario = $user['Usuario'];
            }

            if ($usuario == $_POST['UsuarioCliente']) {
                echo json_encode("El Nombre de Usuario ya existe");
                exit;
            }
        }

        $sql = "UPDATE Usuarios 
        SET NombreUsuario=:NombreCliente, ApellidosUsuario=:ApellidosCliente, EmailUsuario=:EmailCliente, Usuario=:UsuarioCliente, Contraseña=PASSWORD_HASH(:ContraseñaCliente, PASSWORD_DEFAULT), FotoPerfilUsuario=:FotoPerfilCliente 
        WHERE IDUsuario=:idCliente";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':NombreCliente', $params->NombreCliente);
        $stmt->bindValue(':ApellidosCliente', $params->ApellidosCliente);
        $stmt->bindValue(':EmailCliente', $params->EmailCliente);
        $stmt->bindValue(':UsuarioCliente', $params->UsuarioCliente);
        $stmt->bindValue(':ContraseñaCliente', $params->ContraseñaCliente);
        $stmt->bindValue(':FotoPerfilCliente', $ImagenPerfilNombre);
        $stmt->bindValue(':idCliente', $_GET['idCliente']);
        $stmt->execute();
        header('HTML/1.1 200 OK');
        echo json_encode('El registro se ha actualizado.');
        exit;
    }

    //Eliminar
    if ($_SERVER['REQUEST_METHOD']=='DELETE') {
        $sql = "DELETE FROM Usuarios WHERE idUsuario=:idCliente";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':idCliente', $_GET['idCliente']);
        $stmt->execute();
        header('HTML/1.1 200 OK');
        echo json_encode('El registro se ha eliminado.');
        exit;
    }


?>