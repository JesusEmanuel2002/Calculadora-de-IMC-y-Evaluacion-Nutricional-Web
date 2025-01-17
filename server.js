const express = require('express');
const session = require('express-session');
const path = require('path');
const router = require('./routes/index'); // Importa las rutas definidas en routes/index.js
const dotenv = require('dotenv'); // Para manejar variables de entorno
const bodyParser = require('body-parser'); // Para procesar los datos de los formularios
const { Sequelize } = require('sequelize'); // Importa Sequelize para conectar con la base de datos

// Cargar las variables de entorno desde un archivo .env (si es necesario)
dotenv.config();

// Crear la aplicación Express
const app = express();

// Configurar sesiones (opcional, dependiendo de si planeas almacenar información de usuario en la sesión)
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret-key', // Define una clave secreta
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Establece si la cookie debe ser segura (depende de si usas HTTPS)
}));

// Middleware para manejar datos de formularios
app.use(bodyParser.urlencoded({ extended: false })); // Procesar datos de formularios

// Configuración del motor de plantillas PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas definidas en routes/index.js
app.use('/', router);

// Configuración de la base de datos utilizando Sequelize y SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Ruta donde se guardará la base de datos SQLite
});

async function conectarBaseDeDatos() {
  try {
    await sequelize.authenticate(); // Verifica la conexión
    console.log('Conexión a la base de datos establecida con éxito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Conectar a la base de datos
conectarBaseDeDatos();

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

// Configurar el puerto del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
