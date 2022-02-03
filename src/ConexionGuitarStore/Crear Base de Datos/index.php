<?php
    $servername = "localhost";
    $namedb = "GuitarStore";
    $userRoot = "root";
    $passwordRoot = "";
    $userAdmin = "Admin";
    $passwordAdmin = "Admin";

    
    try {
      $conn = new PDO("mysql:host=$servername;", $userRoot, $passwordRoot);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
    }
    
    try {
        $conn->exec("DROP DATABASE IF EXISTS $namedb ;
                     CREATE DATABASE $namedb;
                     USE $namedb;
                     CREATE USER $userAdmin@localhost identified by '$passwordAdmin';
                     grant all privileges on *.* to $userAdmin@localhost with grant option;
                     grant create user on *.* to $userAdmin@localhost;");
    } catch (PDOException $e) {
    }

    try {
        $conn = NULL;
        $connAdmin = new PDO("mysql:host=$servername;dbname=$namedb", $userAdmin, $passwordAdmin);
        $connAdmin->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
    }

    try {
        $connAdmin->exec("CREATE TABLE Usuarios(
                              IDUsuario INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              NombreUsuario VARCHAR(255) DEFAULT NULL,
                              ApellidosUsuario VARCHAR(255) DEFAULT NULL,
                              EmailUsuario VARCHAR(255) DEFAULT NULL,
                              UsuarioUsuario VARCHAR(255) DEFAULT NULL,
                              ContraseñaUsuario VARCHAR(255) DEFAULT NULL,
                              FotoPerfilUsuario VARCHAR(255) DEFAULT NULL,
                              CategoriaUsuario
                          );
                          
                          CREATE TABLE Sesion_Compra (
                              IDSesion INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              IDUsuario INT NOT NULL,
                              Total DECIMAL(30,4) DEFAULT NULL,
                              FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario)
                          );
                          
                          CREATE TABLE Marca (
                              IDMarca INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              NombreMarca VARCHAR(100) DEFAULT NULL
                          );
                          
                          CREATE TABLE Categoria (
                              IDCategoria INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              NombreCategoria VARCHAR(255) DEFAULT NULL
                          );
                          
                          CREATE TABLE CategoriaMarca(
                              IDMarca INT DEFAULT NULL,
                              IDCategoria INT DEFAULT NULL,
                              FOREIGN KEY (IDMarca) REFERENCES Marca(IDMarca),
                              FOREIGN KEY (IDCategoria) REFERENCES Categoria(IDCategoria)
                          );
                          
                          CREATE TABLE Productos(
                              IDProducto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                              NombreProducto VARCHAR(255) DEFAULT NULL,
                              DescripcionProducto TEXT DEFAULT NULL,
                              PrecioProducto DECIMAL(30,2) DEFAULT NULL,
                              PesoProducto INT DEFAULT NULL,
                              LongitudProducto INT DEFAULT NULL,
                              AnchuraProducto INT DEFAULT NULL,
                              AlturaProducto INT DEFAULT NULL,
                              ColorProducto VARCHAR(255) DEFAULT NULL,
                              IDMarca INT DEFAULT NULL,
                              IDCategoria INT DEFAULT NULL,
                              ImagenProducto VARCHAR(255) DEFAULT NULL,
                              ExistenciasProducto INT DEFAULT NULL,
                              ActivadoProducto tinyint(1) DEFAULT NULL,
                              FOREIGN KEY (IDMarca) REFERENCES Marca(IDMarca),
                              FOREIGN KEY (IDCategoria) REFERENCES Categoria(IDCategoria)
                          );
                          
                          CREATE TABLE Carrito (
                              IDCarrito INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              IDSesion INT NOT NULL,
                              IDProducto INT NOT NULL,
                              CantidadCarrito INT DEFAULT NULL,
                              FOREIGN KEY (IDSesion) REFERENCES Sesion_Compra(IDSesion),
                              FOREIGN KEY (IDProducto) REFERENCES Productos(IDProducto)
                          );
                          
                          CREATE TABLE Pago (
                              IDPago INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              Estado VARCHAR(255) DEFAULT NULL
                          );
                          
                          CREATE TABLE Compra_Detalles(
                              IDCompra INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              IDUsuario INT NOT NULL,
                              TotalCompra DECIMAL(30,4) DEFAULT NULL,
                              IDPago INT NOT NULL,
                              FOREIGN KEY (IDUsuario) REFERENCES Usuarios(IDUsuario),
                              FOREIGN KEY (IDPago) REFERENCES Pago(IDPago)
                          );
                          
                          CREATE TABLE ItemsCompra(
                              IDItem INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
                              IDCompra INT NOT NULL,
                              IDProducto INT NOT NULL,
                              Cantidad INT DEFAULT NULL,
                              FOREIGN KEY (IDCompra) REFERENCES Compra_Detalles(IDCompra),
                              FOREIGN KEY (IDProducto) REFERENCES Productos(IDProducto)
                          );"
                        );
    } catch (PDOException $e) {
    }
    try {
        $connAdmin->exec("INSERT INTO Marca(NombreMarca) VALUES ('Gibson');
                          INSERT INTO Marca(NombreMarca) VALUES ('Fender');
                          INSERT INTO Marca(NombreMarca) VALUES ('Jackson');
                          INSERT INTO Marca(NombreMarca) VALUES ('Pearl');
                          INSERT INTO Marca(NombreMarca) VALUES ('Paiste');
                          INSERT INTO Marca(NombreMarca) VALUES ('Remo');
                          INSERT INTO Marca(NombreMarca) VALUES ('Shure');
                          INSERT INTO Marca(NombreMarca) VALUES ('Rhode');
                          INSERT INTO Marca(NombreMarca) VALUES ('Roland');
                          INSERT INTO Marca(NombreMarca) VALUES ('Yamaha');
                          INSERT INTO Marca(NombreMarca) VALUES ('NativeInstruments');
                          INSERT INTO Marca(NombreMarca) VALUES ('Hercules');
                          INSERT INTO Marca(NombreMarca) VALUES ('JodyJazz');
                          INSERT INTO Marca(NombreMarca) VALUES ('Stentor');
                          INSERT INTO Marca(NombreMarca) VALUES ('LarsenStrings');
                          INSERT INTO Marca(NombreMarca) VALUES ('ImagineLine');
                          INSERT INTO Marca(NombreMarca) VALUES ('Steinberg');

                          INSERT INTO categoria(NombreCategoria) VALUES ('Guitarras');
                          INSERT INTO categoria(NombreCategoria) VALUES ('Bajos');
                          INSERT INTO categoria(NombreCategoria) VALUES ('Baterias');
                          INSERT INTO categoria(NombreCategoria) VALUES ('Microfonos');
                          INSERT INTO categoria(NombreCategoria) VALUES ('Teclados');
                          INSERT INTO categoria(NombreCategoria) VALUES ('DJ');
                          INSERT INTO categoria(NombreCategoria) VALUES ('Vientos');
                          INSERT INTO categoria(NombreCategoria) VALUES ('Tradicional');
                          INSERT INTO categoria(NombreCategoria) VALUES ('Software');

                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Pearl'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Paiste'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Remo'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Shure'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Rhode'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Roland'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'NativeInstruments'), (select IDCategoria from categoria where NombreCategoria like 'DJ'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Hercules'), (select IDCategoria from categoria where NombreCategoria like 'DJ'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'JodyJazz'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Stentor'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'LarsenStrings'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'ImagineLine'), (select IDCategoria from categoria where NombreCategoria like 'Software'));
                          INSERT INTO categoriamarca VALUES ((select IDMarca from Marca where NombreMarca like 'Steinberg'), (select IDCategoria from categoria where NombreCategoria like 'Software'));"
                          
                          );
    } catch (PDOException $e) {
    }

    try {
        $connAdmin->exec("INSERT INTO productos VALUES (null, 'Gibson BB King Lucille Legacy', 'Usada por el mítico B.B. King, con más de 70 años de historia.', '6899', '5', '628', null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'G-Lucille-BBKing.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Gibson Les Paul Slash Standart', 'Usada por el mítico Slash, icono del Hard Rock, y guitarrista de Gun N Roses.', '2859', '5', '628', null, null, 'Naranja', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'G-LP-Slash.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Gibson SG Special Toni Iommi', 'Usada por el mítico Toni Iommi, guitarrista de Black Sabbath, con ella escribió uno de los riff de guitarra más famosos, Paranoid.', '2390', '5', '628', null, null, 'Rojo', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'G-SG-ToniIommi.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Gibson EDS-1275 Double Neck Jimmy Page', 'Usada por el mítico Jimmy Page, icono del Rock y del Rock n Roll, con ella escribió Stairway to Heaven, uno de sus temas más famosos.', '6608', '7', '628', null, null, 'Rojo', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'G-DN-JimiPage.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Gibson Les Paul Signature Buckethead', 'Usada por una legenda moderna, Buckedhead, esta guitarra ha escrito canciones para Guns N Roses y temas míticos como Jordan.', '6980', '5', '686', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'G-LP-Buckethead.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Kurt Cobain Jag-Stang', 'Usada por el mítico Kurt Cobain, icono del grunge, varias guitarras iguales a esta fueron destruidas.', '1249', '2', '610', null, null, 'Azul', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'F-JS-KurtCobain.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Jimi Hendrix Stratocaster', 'Usada por El Padre de la Guitarra Eléctrica, varios temas fueron escritos con esta guitarra, incluso una terminó quemada.', '990', '2', '648', null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'F-Strat-JimiHendrix.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Yngwie Malmsteem Stratocaster', 'Usada por Yngwie Malmsteem, varios temas fueron escritos con esta guitarra, entre ellos Far Beyond The Sun.', '2539', '2', '648', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'F-Strat-YngwieMalmsteem.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Tom Morello Stratocaster', 'Usada por el artista Tom Morello, es un exponente importante en el mundo del Rock moderno, con grupos como Rage Against The Machine o Audioslave.', '1422', '2', '648', null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'F-Strat-TomMorello.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Eric Johnson Stratocaster', 'Usada por Eric Johnson, principal exponente del Soft-Rock o blues, con canciones como Cliff of Dover.', '2639', '2', '648', null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'F-PC1-PhilCollen.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson Adrian Smith San Dimas', 'Usada por el famoso guitarrista Adrian Smith, miembro de la banda Iron Maiden.', '9799', '5', '648', null, null, 'Azul', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'J-AdrianSmith.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson Mick Thomson Soloist', 'Usada por el guitarrista Mick Thomson, miembro de la banda Slipknot.', '3899', '5', '648', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'J-MickThomson.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson RRT Rhoads MJ Series', 'Usada por la leyenda Randy Rhoads, el mejor guitarrista que hubo en los 80/90s, participó en Ozzy Osbourne, para Ozzy Osbourne', '2259', '5', '648', null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'J-RandyRhoads.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson MF-1 Marty Friedman', 'Usada por Marty Friedman, el guitarrista más tecnico de los 90, ex-miembro de la banda Megadeth.', '815', '5', '648', null, null, 'Morado', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'J-MartyFriedman.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson PC-1 Phil Collen USA', 'Usada por Phil Collen, guitarrista con buena técnica y buen sonido.', '3899', '5', '648', null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'J-PhilCollen.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha RevStar RS820 CR', 'Guitarra Moderna, para el que le guste una buena guitarra estética y con buen sonido.', '1086', '5', '628', null, null, 'Azul', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'Y-RevStar.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha SG 1820', 'Guitarra SG Moderna, para los amantes de las SG, y quiera adaptarse a los nuevos tiempos.', '3019', '5', '628', null, null, 'blanco', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'Y-SG.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Serie A', 'Guitarra Acústica con buen sonido, cómoda y fácil de tocar.', '1490', '2', '628', null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'Y-SerieA.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha SLG 200s', 'Guitarra Acústica Concepto, moderna y con una imagen básica, pero con un sonido increíble.', '679', '2', '628', null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'Y-SLG.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Pacifica', 'Guitarra Clásica Stratocaster, perfecta para el que quiera iniciar en el mundo de la guitarra.', '223', '5', '648', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Guitarras'), 'Y-Pacifica.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'Gibson ThunderBird-NonReversed Bass', 'Bajo ThunderBird, Mejorado para dar la nota en cada pulso.', '1739', '5', '863', null, null, 'Azul', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'GB-ThunderBird-NonReversed.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Gibson SG Bass', 'Bajo tributo al modelo SG de guitarras.', '1325', '5', '863', null, null, 'Rojo', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'GB-SG.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Gibson ThunderBird Bass', 'Bajo ThunderBird, tributo al modelo ThunderBird de Guitarra', '2980', '5', '863', null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'GB-ThunderBid.jpg','50', '1');
                          INSERT INTO productos VALUES (null, 'Gibson Les Paul Junior Tribute DC Bass', 'Bajo para aquellos que quieran empezar a darle ritmo a la vida.', '888', '5', '863', null, null, 'Rojo', (select IDMarca from Marca where NombreMarca like 'Gibson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'GB-LesPaul-Tribute.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender 62 Jazz Bass', 'Bajo especial para tocar Jazz y sus derivados.', '5772', '5', '863', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'FB-JazzBass.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Mustang Bass', 'Bajo con características para poder tocar Rock en todo su esplendor.', '10900', '5', '863', null, null, 'Color', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'FB-MustangBass.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Precision Bass', 'Bajo perfecto para tocar variedad de estilos, desde Metal a Jazz, pasando por blues.', '4059', '5', '863', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'FB-PlayerSe.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Fender Boxer Pj-Bass', 'Bajo estético, perfecto para algún concierto psicodélico.', '1168', '5', '863', null, null, 'Rojo', (select IDMarca from Marca where NombreMarca like 'Fender'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'FB-BoxerPJBass.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson Pro Series Spectra SBP CBL', 'Bajo super estético, con sonido muy preciso y con cuerpo.', '866', '5', '863', null, null, 'Azul', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'JB-Spectra.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson X Series Concert Bass CBXNT DX', 'Bajo pensado para conciertos, con muchas características para darte el mejor sonido en vivo.', '689', '5', '863', null, null, 'Verde', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'JB-XSeries.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson David Ellefson CBXV', 'Bajo utilizado por David Ellefson, ex-miembro de Megadeth.', '555', '5', '863', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'JB-DavidEllefson.jpd', '50', '1');
                          INSERT INTO productos VALUES (null, 'Jackson J53Q Kelly Bird TRB AH', 'Bajo para tener un sonido más blues.', '393', '5', '863', null, null, 'Rojo', (select IDMarca from Marca where NombreMarca like 'Jackson'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'JB-KellyBird.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Attitude 30th', 'Bajo Attitude en su edición 30, con tanta historia, debe ser tan bueno como suena.', '4215', '5', '863', null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'YB-Attitude30.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha BBNE2', 'Bajo de 5 cuerdas, con un sonido tan puro que te hará sentir como en una nube.', '5235', '6', '863', null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'YB-BBNE2.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Attitude Limited 3', 'Edición limitada del Attitude, aunque sea raro, solo cambian los colores.', '5335', '5', '863', null, null, 'Azul', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'YB-AttitudeL3.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha TRBJP2', 'Bajo de 6 cuerdas, con buen sonido y buena presencia.', '5523', '8', '863', null, null, 'Rojo', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Bajos'), 'YB-TRBJP2.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'Pearl Export Double Bass', 'Set de bateria con doble bombo, para todo tipo de estilos, pero especialmente pensada para tocar Metal.', '1269', '100', null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Pearl'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Pearl-DoubleBass.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Pearl EXX725 BR/C Export', 'Set de batería Standart, incluye 2 Toms, 1 Tom de suelo, 1 caja y 1 bombo, 1 ride, 1 crash y 1 hi-hat.', '759', '80', null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Pearl'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Pearl-EXX725.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Pearl Roadshow Plus', 'Set de batería, de configuración junior, incluye 2 Toms, 1 Tom de suelo, 1 caja y 1 bombo, 1 ride, 1 crash y 1 hi-hat.', '659', '80', null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Pearl'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Pearl-Roadshow.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Pearl Export EXL725SBR', 'Set de batería Fusión, incluye 2 Toms, 1 Tom de suelo, 1 caja y 1 bombo, 1 ride, 1 crash y 1 hi-hat.', '900', '80', null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Pearl'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Pearl-EXL725SBR.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Pearl Export EXL725BR', 'Set de batería Standart, incluye 2 Toms, 1 Tom de suelo, 1 caja y 1 bombo, 1 ride, 1 crash y 1 hi-hat.', '759', '80', null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Pearl'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Pearl-EXL725BR.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Paiste Big Beat Universal Cymbal Set', 'Set de platillos para batería. Serie Big Beat.', '1090', '20', null, null, null, 'Bronce', (select IDMarca from Marca where NombreMarca like 'Paiste'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Paiste-BigBeat.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Paiste Rude Wild Cymbal Set', 'Set de platillos para batería. Serie Rude Wild.', '990', '40', null, null, null, 'Bronce', (select IDMarca from Marca where NombreMarca like 'Paiste'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Paiste-RudeWild.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Paiste 900 Series Heavy Set FX', 'Set de platillos para batería. Serie 900 para Heavy Metal.', '595', '18', null, null, null, 'Bronce', (select IDMarca from Marca where NombreMarca like 'Paiste'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Paiste-900S.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Paiste 900 Color Rock Cymbal Set', 'Set de platillos para batería. Serie 900 Color para Rock.', '539', '15', null, null, null, 'Red', (select IDMarca from Marca where NombreMarca like 'Paiste'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Paiste-900C.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Paiste PST7 Universal Set + 16mm Crash', 'Set de platillos para batería. Incluye Crash de 16mm.', '417', '20', null, null, null, 'Bronce', (select IDMarca from Marca where NombreMarca like 'Paiste'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Paiste-PST7.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Remo DJembe African Coll', 'Djembe Remo, perfecto para sonidos exóticos.', '398', '8', null, null, null, 'Varios', (select IDMarca from Marca where NombreMarca like 'Remo'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Remo-Djembe.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Remo Bongos African Coll', 'Bongo Remo, perfecto para sonidos exóticos.', '44', '10', null, null, null, 'Varios', (select IDMarca from Marca where NombreMarca like 'Remo'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Remo-Bongo.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Remo Roto-Tom Set', 'Set de Roto-tom, para orquestas y Cumbias.', '449', '30', null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Remo'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Remo-Roto-Tom.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Remo Riq Layne Redmond', 'Pandereta Remo, para acompañar ritmos exóticos.', '209', '1', null, null, null, 'Verde', (select IDMarca from Marca where NombreMarca like 'Remo'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Remo-RiqLayne.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Remo Rhythm Club Conga', 'Conga Remo, perfecto para sonidos exóticos.', '29', '10', null, null, null, 'Varios', (select IDMarca from Marca where NombreMarca like 'Remo'), (select IDCategoria from categoria where NombreCategoria like 'Baterias'), 'Remo-Conga.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'Shure KSM 9', 'Microfono Shure serie KMS.', '586', null, null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Shure'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Shure-KMS9.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Shure KSM 8', 'Microfono Shure serie KMS.', '379', null, null, null, null, 'Plata', (select IDMarca from Marca where NombreMarca like 'Shure'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Shure-KMS8.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Shure Beta 87', 'Microfono Shure serie Beta.', '279', null, null, null, null, 'Azul', (select IDMarca from Marca where NombreMarca like 'Shure'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Shure-Beta87A.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Shure Super 5 Deluxe', 'Microfono Shure serie Super.', '224', null, null, null, null, 'Plata', (select IDMarca from Marca where NombreMarca like 'Shure'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Shure-Super55.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Shure SH55 Series II', 'Microfono Shure serie SH55.', '159', null, null, null, null, 'Plata', (select IDMarca from Marca where NombreMarca like 'Shure'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Shure-SH55.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Rode NT2000', 'Microfono Rode serie NT2000.', '472', null, null, null, null, 'Plata', (select IDMarca from Marca where NombreMarca like 'Rode'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Rode-NT2000.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Rode Broadcaster', 'Microfono Rode serie Broadcaster.', '389', null, null, null, null, 'Plata', (select IDMarca from Marca where NombreMarca like 'Rode'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Rode-Broadcaster.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Rode NT1000', 'Microfono Rode serie NT1000.', '299', null, null, null, null, 'Plata', (select IDMarca from Marca where NombreMarca like 'Rode'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Rode-NT1000.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Rode Podcaster', 'Microfono Rode serie Podcaster.', '177', null, null, null, null, 'Blanco', (select IDMarca from Marca where NombreMarca like 'Rode'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Rode-Podcaster.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Rode Procaster', 'Microfono Rode serie Procaster.', '159', null, null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Rode'), (select IDCategoria from categoria where NombreCategoria like 'Microfonos'), 'Rode-Procaster.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'Roland Fantom 8', 'Sintetizador Roland serie Fantom.', '3799', '20', '1432', '439', '153', 'Negro', (select IDMarca from Marca where NombreMarca like 'Roland'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Roland-Fantom.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Roland JupiterX', 'Sintetizador Roland serie Jupiter.', '2269', '20', '1090', '447', '119', 'Negro', (select IDMarca from Marca where NombreMarca like 'Roland'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Roland-Jupiter.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Roland JD-XA', 'Sintetizador Roland serie JD-XA.', '1699', '20', '889', '388', '111', 'Negro', (select IDMarca from Marca where NombreMarca like 'Roland'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Roland-JD-AX.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Roland AX-Edge', 'Sintetizador Roland serie AX-Edge.', '899', '15', '1252', '291', '85', 'Negro', (select IDMarca from Marca where NombreMarca like 'Roland'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Roland-AX-Edge.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Roland JD-XI', 'Sintetizador Roland serie JD-XI.', '499', '5', '575', '245', '85', 'Negro', (select IDMarca from Marca where NombreMarca like 'Roland'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Roland-JD-XI.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha CP88', 'Teclado Yamaha serie CP88.', '2150', '15', '1298', '364', '141', 'Negro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Yamaha-CP88.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha P-515 Set', 'Teclado Yamaha serie Piano.', '1639', '20', '1336', '376', '145', 'Negro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Yamaha-P-515-B-Set.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha p-125', 'Teclado Yamaha serie Piano.', '774', '11', '1326', '166', '295', 'Negro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Yamaha-P-125.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha P-45', 'Teclado Yamaha serie Piano.', '527', '10', '1114', '295', '166', 'Negro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Yamaha-P-45.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha P-121', 'Teclado Yamaha serie Piano.', '525', '11', '1326', '154', '295', 'Negro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Teclados'), 'Yamaha-P-121.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'NativeInstruments Maschine+', 'Set para DJ.', '985', '10', '332', '301', '51', 'Negro', (select IDMarca from Marca where NombreMarca like 'NativeInstruments'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'NativeInstruments-Maschine.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'NativeInstruments Tracktor S4 MK3', 'Set para DJ.', '835', '5', '542', '339', '60', 'Negro', (select IDMarca from Marca where NombreMarca like 'NativeInstruments'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'NativeInstruments-Tracktor54.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'NativeInstruments Tracktor S3', 'Set para DJ.', '444', '5', '544', '305', '62', 'Negro', (select IDMarca from Marca where NombreMarca like 'NativeInstruments'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'NativeInstruments-Tracktor53.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'NativeInstruments Tracktor Kontrol Z1', 'Set para DJ.', '166', '1', '120', '294', '52', 'Negro', (select IDMarca from Marca where NombreMarca like 'NativeInstruments'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'NativeInstruments-TracktorKontrolz1.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'NativeInstruments Tracktor Kontrol F1', 'Set para DJ.', '155', '1', '120', '294', '52', 'Negro', (select IDMarca from Marca where NombreMarca like 'NativeInstruments'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'NativeInstruments-TracktorKontrolf1.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Hercules DJControl Impulse 500', 'Set para DJ.', '249', '5', '542', '294', '70', 'Negro', (select IDMarca from Marca where NombreMarca like 'Hercules'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'Hercules-DJ-ControlImpulse.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Hercules P32 DJ', 'Set para DJ.', '250', '5', '120', '90', '51', 'Negro', (select IDMarca from Marca where NombreMarca like 'Hercules'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'Hercules-P32-DJ.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Hercules DJControl Mix', 'Set para DJ.', '95', '5', '340', '100', '49', 'Blanco', (select IDMarca from Marca where NombreMarca like 'Hercules'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'Hercules-DJControl.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Hercules HDP DJ45', 'Set para DJ.', '27', null, null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Hercules'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'Hercules-HDP-DJ45.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Hercules HDP DJ60', 'Set para DJ.', '56', null, null, null, null, 'Negro', (select IDMarca from Marca where NombreMarca like 'Hercules'), (select IDCategoria from categoria where NombreCategoria like 'DJ'), 'Hercules-HDP-DJ60.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'JodyJazz Tenor DV BEATBoX', 'Boquilla para Saxofón edición colaborativa con BEATBoX. Para Saxofón Tenor.', '599', null, null, null, null, 'Plata', (select IDMarca from Marca where NombreMarca like 'JodyJazz'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'JodyJazz-Tenor.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'JodyJazz Baritone DV 7', 'Boquilla para Saxofón Barítono', '555', null, null, null, null, 'Oro', (select IDMarca from Marca where NombreMarca like 'JodyJazz'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'JodyJazz-Baritono.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'JodyJazz Alto DV 7', 'Boquilla para Saxofón Alto.', '477', null, null, null, null, 'Oro', (select IDMarca from Marca where NombreMarca like 'JodyJazz'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'JodyJazz-Alto.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'JodyJazz Soprano DV 7', 'Boquilla para Saxofón Soprano.', '463', null, null, null, null, 'Oro', (select IDMarca from Marca where NombreMarca like 'JodyJazz'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'JodyJazz-Soparano.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Alto Sax YAS-280', 'Saxofón Alto Yamaha.', '975', '3', null, null, null, 'Oro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'Yamaha-Alto-Sax.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Tenor Sax YTS-480', 'Saxofón Tenor Yamaha.', '2259', '2', null, null, null, 'Oro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'Yamaha-Tenor-Sax.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Soprano Sax YSS-475 II', 'Saxofón Soprano Yamaha.', '199', '4', null, null, null, 'Oro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'Yamaha-Soprano-Sax.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Yamaha Baritone Sax YBS-82', 'Saxofón Barítono Yamaha.', '10090', '5', null, null, null, 'Oro', (select IDMarca from Marca where NombreMarca like 'Yamaha'), (select IDCategoria from categoria where NombreCategoria like 'Vientos'), 'Yamaha-Baritone-Sax.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'Stentor SR1550 Violin Conservatorie', 'Violín Stentor.', '272', '4', null, null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Stentor'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'), 'Stentor-SR1550.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Stentor SR1877 Viola Arcadia', 'Viola Stentor.', '858', '4', null, null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Stentor'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'), 'Stentor-SR1877.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Stentor SR1108 Cello Student II', 'Cello Stentor.', '545', '4', null, null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Stentor'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'), 'Stentor-SR1108.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Stentor SRB1533A Bow', 'Arco Stentor.', '62', '0', null, null, null, 'Marron', (select IDMarca from Marca where NombreMarca like 'Stentor'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'), 'Stentor-SRB1533.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'LarsenStrings Aurora Violin Set', 'Pack de cuerdas para Violin de LarsenString.', '75', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'LarsenStrings'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'), 'LarsenStrings-AuroraViolin.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'LarsenStrings Viola Virtuoso Set', 'Pack de cuerdas para Viola de LarsenString.', '80', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'LarsenStrings'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'), 'LarsenStrings-ViolaVirtuoso.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'LarsenStrings Cello Strings Set', 'Pack de cuerdas para Cello de LarsenString.', '128', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'LarsenStrings'), (select IDCategoria from categoria where NombreCategoria like 'Tradicional'), 'LarsenStrings-CelloStrings.jpg', '50', '1');

                          INSERT INTO productos VALUES (null, 'ImagineLine FL Studio All Plugins Edition', 'Todos los plugins para FL Studio.', '425', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'ImagineLine'), (select IDCategoria from categoria where NombreCategoria like 'Software'), 'ImagineLine-FLStudio-AllPlugins.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'ImagineLine FL Studio Signature Blundle', 'FL Studio Signature, con Plugins dedicados.', '249', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'ImagineLine'), (select IDCategoria from categoria where NombreCategoria like 'Software'), 'ImagineLine-FLStudio-Signature-Bundle.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'ImagineLine FL Studio Producer Edition', 'Fl Studio Edición Productor.', '177', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'ImagineLine'), (select IDCategoria from categoria where NombreCategoria like 'Software'), 'ImagineLine-FLStudio-Producer-Edition.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Steinberg Cubase Artist 11', 'Cubase Edición Artista.', '269', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'Steinberg'), (select IDCategoria from categoria where NombreCategoria like 'Software'), 'Steinberg-Artist.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Steinberg Cubase Pro 11', 'Cubase Edición Pro', '489', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'Steinberg'), (select IDCategoria from categoria where NombreCategoria like 'Software'), 'Steinberg-Pro.jpg', '50', '1');
                          INSERT INTO productos VALUES (null, 'Steinberg Cubase Elements 11', 'Cubase Edición Elements.', '95', null, null, null, null, null, (select IDMarca from Marca where NombreMarca like 'Steinberg'), (select IDCategoria from categoria where NombreCategoria like 'Software'), 'Steinberg-Elements.jpg', '50', '1');
                        ");
    } catch (PDOException $e) {
    }
?>