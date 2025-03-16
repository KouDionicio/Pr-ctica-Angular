// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Crear una instancia de Express
const app = express();

// Usar middleware
app.use(cors()); // Permite las peticiones CORS desde el frontend
app.use(bodyParser.json()); // Permite leer el cuerpo de las solicitudes HTTP

// Datos simulados (esto debería ser reemplazado por una base de datos)
let users = [];

// Ruta POST para registrar un usuario
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  // Simula el registro del usuario
  const newUser = { username, password };
  users.push(newUser);

  console.log(`Usuario registrado: ${username}, Contraseña: ${password}`);

  // Responder con mensaje de éxito
  res.json({ message: 'Usuario registrado exitosamente' });
});

// Ruta POST para login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Simula la lógica de login
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    console.log(`Login exitoso para: ${username}`);
    // Responder con mensaje de éxito y un token simulado
    res.json({ message: 'Login exitoso', token: '1234567890abcdef' });
  } else {
    console.log(`Login fallido para: ${username}`);
    // Responder con error si no se encuentra el usuario
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

// Ruta GET para obtener todos los usuarios (solo para fines de demostración)
app.get('/api/users', (req, res) => {
  // Aquí podrías consultar una base de datos real en lugar de los datos simulados
  res.json(users);
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
