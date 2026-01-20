//carga el framework Express
const express = require('express');
// se le asigna una variable
const app = express();
//8Define el puerto que se utilizara
const PORT = 3000;

// Middleware---detecta si el cuerpo es JSON (por la cabecera Content-Type)
app.use(express.json());


//Clave API para autenticación
const API_KEY = "MMJ-UL4-610-2026";

// Arreglo de la lista de tareas
let tareas = [
    { id: 1, titulo: 'Comprar despensa', completada: false },
    { id: 2, titulo: 'Pagar la luz', completada: false },
    { id: 3, titulo: 'Sacar basura', completada: false },
    { id: 4, titulo: 'Pagar TDC', completada: false },
];
//  Middleware registrador de login
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pasar a la siguiente ruta
});

// Autenticación básica de API (x-api-key) ---
app.use((req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (apiKey === API_KEY) {
        next(); // Si la Clave es válida, continuar
    } else {
        res.status(401).json({ error: 'No autorizado. x-api-key inválida .' });
    }
});

// Rutas Get,Post,Put,

// Todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: req.body.titulo,
        completada: false
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

// Actualizar tarea 
app.put('/tareas/:id', (req, res) => {
    const tarea = tareas.find(t => t.id === parseInt(req.params.id));
    if (!tarea) return res.status(404).send('Tarea no encontrada');

    tarea.titulo = req.body.titulo || tarea.titulo;
    tarea.completada = req.body.completada !== undefined ? req.body.completada : tarea.completada;

    res.json(tarea);
});

// Eliminar tarea
app.delete('/tareas/:id', (req, res) => {
    const indice = tareas.findIndex(t => t.id === parseInt(req.params.id));
    if (indice === -1) return res.status(404).send('Tarea no encontrada');

    const tareaEliminada = tareas.splice(indice, 1);
    res.json(tareaEliminada);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});