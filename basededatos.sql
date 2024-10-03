CREATE TABLE Usuarios (
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
	provincia VARCHAR(30) NOT NULL,
	);


CREATE TABLE Productos (
	codigo_producto INT PRIMARY KEY,
	nombre VARCHAR(30) NOT NULL,
	precio INT NOT NULL,
	);

CREATE TABLE Compras (
	id_compra INT PRIMARY KEY,
	id_usuario INT NOT NULL,
	total_compra INT NOT NULL,
	nro_ticket INT NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES Usuarios (Id),
	);

CREATE TABLE Items_X_compra (
	id_item INT PRIMARY KEY,
	id_compra INT,
	codigo_producto INT NOT NULL,
	cantidad_comprada INT NOT NULL,
	precio_item INT NOT NULL,
	FOREIGN KEY (id_compra) REFERENCES Compras (id_compra),
	FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto),
	);

CREATE TABLE Stock_productos (
	id_stock INT PRIMARY KEY,
	codigo_producto INT NOT NULL,
	stock_disponible INT NOT NULL,
	FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto),
	);

