<?php

    include 'conexion.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Rquest-With, Content-type, Accept");
    header("Content-Type: Aplication/Json; charset=utf8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    $pdo = new Conexion();

// PRODUCTOS

    //Mostrar Productos

    if ($_SERVER['REQUEST_METHOD']=='GET') {

        if (isset($_GET['idProducto'])) {
            $sql = $pdo->prepare('SELECT IDProducto, NombreProducto, DescripcionProducto, PrecioProducto, PesoProducto, ColorProducto, NombreMarca as MarcaProducto, NombreCategoria as CategoriaProducto, ImagenProducto, ExistenciasProducto, ActivadoProducto FROM productos inner join marca inner JOIN categoria inner JOIN categoriamarca on marca.IDMarca = categoriamarca.IDMarca and categoria.IDCategoria = categoriamarca.IDCategoria and categoriamarca.IDMarca = productos.IDMarca and categoriamarca.IDCategoria = productos.IDCategoria and productos.IDProducto = :idProducto;');
            $sql->bindValue(':idProducto', $_GET['idProducto']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");

            echo json_encode($sql -> fetchAll());
            exit;

        } elseif (isset($_GET['NombreCategoria'])) {
            $sql = $pdo->prepare('SELECT IDProducto, NombreProducto, DescripcionProducto, PrecioProducto, PesoProducto, ColorProducto, NombreMarca as MarcaProducto, NombreCategoria as CategoriaProducto, ImagenProducto, ExistenciasProducto, ActivadoProducto FROM productos inner join marca inner JOIN categoria inner JOIN categoriamarca on marca.IDMarca = categoriamarca.IDMarca and categoria.IDCategoria = categoriamarca.IDCategoria and categoriamarca.IDMarca = productos.IDMarca and categoriamarca.IDCategoria = productos.IDCategoria and categoria.NombreCategoria = :NombreCategoria;');
            $sql->bindValue(':NombreCategoria', $_GET['NombreCategoria']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");

            echo json_encode($sql -> fetchAll());
            exit;

        } elseif (isset($_GET['NombreMarca'])) {
            $sql = $pdo->prepare('SELECT IDProducto, NombreProducto, DescripcionProducto, PrecioProducto, PesoProducto, ColorProducto, NombreMarca as MarcaProducto, NombreCategoria as CategoriaProducto, ImagenProducto, ExistenciasProducto, ActivadoProducto FROM productos inner join marca inner JOIN categoria inner JOIN categoriamarca on marca.IDMarca = categoriamarca.IDMarca and categoria.IDCategoria = categoriamarca.IDCategoria and categoriamarca.IDMarca = productos.IDMarca and categoriamarca.IDCategoria = productos.IDCategoria and marca.NombreMarca = :NombreMarca;');
            $sql->bindValue(':NombreMarca', $_GET['NombreMarca']);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");

            echo json_encode($sql -> fetchAll());
            exit;

        } else {
            $sql = $pdo->prepare('SELECT IDProducto, NombreProducto, DescripcionProducto, PrecioProducto, PesoProducto, ColorProducto, NombreMarca as MarcaProducto, NombreCategoria as CategoriaProducto, ImagenProducto, ExistenciasProducto, ActivadoProducto FROM productos inner join marca inner JOIN categoria inner JOIN categoriamarca on marca.IDMarca = categoriamarca.IDMarca and categoria.IDCategoria = categoriamarca.IDCategoria and categoriamarca.IDMarca = productos.IDMarca and categoriamarca.IDCategoria = productos.IDCategoria;');
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
    
            header("HTTP/1.1 200 OK");
    
            echo json_encode($sql -> fetchAll());
        }
    }
    
    //Agregar Productos

    if ($_SERVER['REQUEST_METHOD']=='POST') {
        $sql = "INSERT INTO Productos(NombreProducto, DescripcionProducto, PrecioProducto, PesoProducto, ColorProducto, IDMarca, IDCategoria, ImagenProducto, ExistenciasProducto, ActivadoProducto)
                values (:nombreProducto, :descripcionProducto, :precioProducto, :pesoProducto, :colorProducto, (SELECT IDMarca FROM Marca WHERE NombreMarca = :nombreMarca), (SELECT IDCategoria FROM Categoria WHERE NombreCategoria = :nombreCategoria), :nombreImagen, :Existencias, :Activado)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nombreProducto', $params->NombreProducto);
        $stmt->bindValue(':descripcionProducto', $params->DescripcionProducto);
        $stmt->bindValue(':precioProducto', $params->PrecioProducto);
        $stmt->bindValue(':pesoProducto', $params->PesoProducto);
        $stmt->bindValue(':colorProducto', $params->ColorProducto);
        $stmt->bindValue(':nombreMarca', $params->MarcaProducto);
        $stmt->bindValue(':nombreCategoria', $params->CategoriaProducto);
        $stmt->bindValue(':nombreImagen', $params->ImagenProducto);
        $stmt->bindValue(':Existencias', $params->ExistenciasProducto);
        $stmt->bindValue(':Activado', $params->ActivadoProducto);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha agregado.');
        exit;
    }

    //Actualizar Productos

    if ($_SERVER['REQUEST_METHOD']=='PUT') {
        $sql = "UPDATE Productos 
                SET NombreProducto=:nombreProducto, DescripcionProducto=:descripcionProducto, PrecioProducto=:precioProducto, PesoProducto=:pesoProducto, ColorProducto=:colorProducto, IDMarca=(SELECT IDMarca FROM Marca WHERE NombreMarca = :nombreMarca), IDCategoria=(SELECT IDCategoria FROM Categoria WHERE NombreCategoria = :nombreCategoria), ImagenProducto=:nombreImagen, ExistenciasProducto=:Existencias, ActivadoProducto=:Activado 
                WHERE idProducto=:idProducto";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':nombreProducto', $params->NombreProducto);
        $stmt->bindValue(':descripcionProducto', $params->DescripcionProducto);
        $stmt->bindValue(':precioProducto', $params->PrecioProducto);
        $stmt->bindValue(':pesoProducto', $params->PesoProducto);
        $stmt->bindValue(':colorProducto', $params->ColorProducto);
        $stmt->bindValue(':nombreMarca', $params->MarcaProducto);
        $stmt->bindValue(':nombreCategoria', $params->CategoriaProducto);
        $stmt->bindValue(':nombreImagen', $params->ImagenProducto);
        $stmt->bindValue(':Existencias', $params->ExistenciasProducto);
        $stmt->bindValue(':Activado', $params->ActivadoProducto);
        $stmt->bindValue(':idProducto', $_GET['idProducto']);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha actualizado.');
        exit;
    }

    //Eliminar Productos

    if ($_SERVER['REQUEST_METHOD']=='DELETE') {
        $sql = "DELETE FROM Productos WHERE idProducto=:idProducto";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(':idProducto', $_GET['idProducto']);
        $stmt->execute();
        
        header('HTML/1.1 200 OK');

        echo json_encode('El registro se ha eliminado.');
        exit;
    }

?>