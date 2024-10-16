CREATE DATABASE homedesigner_db;

USE homedesigner_db;

CREATE TABLE usuarios (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	nombre_usuario VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL,
	email VARCHAR(20) NOT NULL,
	nombre VARCHAR(30) NOT NULL,
	apellido VARCHAR(30) NOT NULL,
	dni INT NOT NULL,
	telefono INT,
	direccion VARCHAR(30) NOT NULL,
	codigo_postal INT NOT NULL,
	localidad VARCHAR(30) NOT NULL,
	provincia VARCHAR(30) NOT NULL
	);

CREATE TABLE productos (
	codigo_producto INT PRIMARY KEY,
	nombre VARCHAR(30) NOT NULL,
	precio DECIMAL(10, 2) NOT NULL
	);

CREATE TABLE compras (
	id_compra INT PRIMARY KEY,
	id_usuario INT NOT NULL,
	total_compra INT NOT NULL,
	nro_ticket INT NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES Usuarios (Id)
	);

CREATE TABLE items_x_compra (
	id_compra INT AUTO_INCREMENT PRIMARY KEY,
	codigo_producto INT NOT NULL,
	cantidad_comprada INT NOT NULL,
	precio_item DECIMAL(10, 2) NOT NULL,
	FOREIGN KEY (codigo_producto) REFERENCES productos (codigo_producto)
	);

CREATE TABLE stock_productos (
	id_stock INT PRIMARY KEY,
	codigo_producto INT NOT NULL,
	stock_disponible INT NOT NULL,
	FOREIGN KEY (codigo_producto) REFERENCES productos (codigo_producto)
	);

-- Creación de datos
INSERT INTO productos (codigo_producto, nombre, precio) VALUES (1, 'Lampara', 19.99);
INSERT INTO productos (codigo_producto, nombre, precio) VALUES (2, 'Lampara doble', 29.99);
INSERT INTO productos (codigo_producto, nombre, precio) VALUES (3, 'Lampara triple', 39.99);
