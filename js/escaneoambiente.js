// Verificamos si el navegador soporta la API de medios web
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Pedimos permiso para acceder a la cámara
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      // El objeto 'stream' contiene la transmisión de la cámara
      // Puedes usarlo, por ejemplo, para mostrar la transmisión en un elemento de video en la página.
      var videoElement = document.getElementById('videoElement'); // Reemplaza 'videoElement' con el ID de tu elemento de video
      videoElement.srcObject = stream;
    })
    .catch(function (error) {
      // En caso de que el usuario deniegue el acceso a la cámara o ocurra un error
      console.error('Error al acceder a la cámara:', error);
    });
} else {
  console.error('El navegador no admite la API de medios web.');
}

// Leer BD almacenamiento local
var json_str = localStorage.getItem('db');
var db = JSON.parse(json_str);

// Actualizar valores escaneados
db.proyecto_actual.ancho = 4;
db.proyecto_actual.largo = 6;
db.proyecto_actual.alto = 3;

// Guarda BD almacenamiento local
db_str = JSON.stringify(db);
localStorage.setItem('db', db_str);