CREATE TABLE Productos (
    codigo_producto INT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    precio INT NOT NULL
);

CREATE TABLE Compras (
    id_compra INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    total_compra INT NOT NULL,
    nro_ticket INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios (Id)
);

CREATE TABLE Items_X_compra (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_compra INT,
    codigo_producto INT NOT NULL,
    cantidad_comprada INT NOT NULL,
    precio_item INT NOT NULL,
    FOREIGN KEY (id_compra) REFERENCES Compras (id_compra),
    FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto)
);

CREATE TABLE Stock_productos (
    id_stock INT PRIMARY KEY AUTO_INCREMENT,
    codigo_producto INT NOT NULL,
    stock_disponible INT NOT NULL,
    FOREIGN KEY (codigo_producto) REFERENCES Productos (codigo_producto)
);
