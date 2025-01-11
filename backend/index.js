const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
  const body = req.body;

  let data = [];
  try {
    const archivo = fs.readFileSync('usuarios.json', 'utf-8');
    data = JSON.parse(archivo);
  } catch (error) {
    console.log('No se encontró el archivo o está vacío, comenzamos con un arreglo vacío');
  }

  data.push(body);
  fs.writeFileSync('usuarios.json', JSON.stringify(data, null, 2));

  res.status(200).json({
    message: 'usuarios guardados exitosamente',
    body
  });
});

app.get('/users', (req, res) => {
  try {
    const archivo = fs.readFileSync('usuarios.json', 'utf-8');
    const datos = JSON.parse(archivo);
    res.status(200).json({
      message: 'Usuarios encontrados',
      users: datos
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al leer los datos del archivo',
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
