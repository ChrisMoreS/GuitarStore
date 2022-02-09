<?php

    include 'conexion.php';

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Rquest-With, Content-type, Accept");
    header("Content-Type: Aplication/Json; charset=utf8");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    $pdo = new Conexion();


    if ($_SERVER['REQUEST_METHOD'] == 'GET') {  

        }
?>