const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

//archivo estático
app.use(express.static(path.join(__dirname, 'public')));

//Ruta para saber que la API  esta funcionando
app.get("/", (req, res) => {
    res.send("El api esta trabajando")
})
// Define una ruta para MOSTRAR LA LISTA
app.get('/users', async (req, res) => {
  try {
    // Realiza una petición GET a la API de JSONPlaceholder usando Axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data; // Los datos de la respuesta ya están en formato JSON gracias a Axios

    // Genera una respuesta HTML para mostrar en el navegador
    let htmlResponse = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Lista de Usuarios</title>
                <link rel="stylesheet" href="/style.css"> <!-- Enlaza el archivo CSS -->
            </head>
            <body>
                <div class="cont">
                <h1>Lista de Usuarios de JSONPlaceholder Axios</h1>
                <p>(Revisa la consola en VSC)</p>
               
            `;
    htmlResponse += '<ul>';
    users.forEach(user => {
      console.log(`Nombre: ${user.name} - ${user.email}`);
      htmlResponse += `<li>${user.name}</li>`;
      
    });
    htmlResponse += '</ul>';
    htmlResponse+= `
                </div>
            </body>
            </html>
        `;

    res.send(htmlResponse);
  } catch (error) {
    console.error(`Error al obtener los usuarios: ${error.message}`);
    res.status(500).send('Error al obtener los datos de la API');
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});