<?php 

    class Conexion extends PDO {

        private $servername = "localhost";
        private $namedb = "GuitarStore";
        private $userAdmin = "root";
        private $passwordAdmin = "";

        public function __Construct(){

            try {
                parent::__Construct('mysql:host=' . $this->servername . '; dbname=' . $this->namedb . '; charset=utf8',
                $this->userAdmin, $this->passwordAdmin, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            } catch (PDOException $e) {
                echo 'Error: '. $e->getMessage();
                exit;
            }

        }

    }

?>