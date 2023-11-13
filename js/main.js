// BD simulada
var db = {
  "proyecto_actual": {
    "id": "",
    "nombre": "test",
    "fecha": "",
    "ancho": 0,
    "largo": 0,
    "alto": 0,
    "prediseno": "",
    "planta": "",
    "lampara": "",
    "cuadro": "",
    "sillon": "",
    "racktv": "",
    "ratona": "",
    "comedor": "",
    "habitacion": "",
  },
  "usuario_actual": {
    "id": "",
    "correo": "",
    "password": ""
  },
  "usuarios": [
    {
      "id": "a",
      "correo": "a@gmail.com",
      "password": "a"
    },
    {
      "id": "usuario1",
      "correo": "usuario1@gmail.com",
      "password": "1234"
    },
    {
      "id": "usuario2",
      "correo": "usuario2@gmail.com",
      "password": "1234"
    }
  ],
  "proyectos": [
    {
      "id": "1",
      "nombre": "-espacio libre-",
      "fecha": "10/10/2023",
      "ancho": 0,
      "largo": 0,
      "alto": 0,
      "prediseno": "",
      "planta": "",
      "lampara": "",
      "cuadro": "",
      "sillon": "",
      "racktv": "",
      "ratona": "",
      "comedor": "",
      "habitacion": "",
    },
    {
      "id": "2",
      "nombre": "-espacio libre-",
      "fecha": "11/10/2023",
      "ancho": 0,
      "largo": 0,
      "alto": 0,
      "prediseno": "",
      "planta": "",
      "lampara": "",
      "cuadro": "",
      "sillon": "",
      "racktv": "",
      "ratona": "",
      "comedor": "",
      "habitacion": "",
    },
    {
      "id": "3",
      "nombre": "-espacio libre-",
      "fecha": "12/10/2023",
      "ancho": 0,
      "largo": 0,
      "alto": 0,
      "prediseno": "",
      "planta": "",
      "lampara": "",
      "cuadro": "",
      "sillon": "",
      "racktv": "",
      "ratona": "",
      "comedor": "",
      "habitacion": "",
    }
  ]
};

// Guarda BD almacenamiento local
localStorage.clear(); //Esto va abajo pero acá sirve para testing
if (localStorage.getItem('db') === null) {
  //localStorage.clear();
  var db_str = JSON.stringify(db);
  localStorage.setItem('db', db_str);
} else {
  // 'db' ya existe en localStorage
}