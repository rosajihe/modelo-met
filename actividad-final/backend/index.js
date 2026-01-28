//Importa express
const express = require("express");
//Importa los cors
const cors = require("cors");
// Instancia de la aplicación
const app = express();
const PORT = 3001; app.use(cors());
app.use(express.json());

// Arreglo de Contactos en memoria
let contactos = [
    { id: 1, nombre: "Juana Torres", telefono: "7223333969", email: "juana56@gmail.com" },
    { id: 2, nombre: "Pedro Lopez", telefono: "7275849403", email: "pedrolo@gmail.com" },
    { id: 3, nombre: "Jose Vazquez", telefono: "7955798839", email: "joseol@gmail.com" },
    { id: 4, nombre: "Ricardo Flores", telefono: "7233444776", email: "rich@gmail.com" },
    { id: 5, nombre: "Carolina Ramos", telefono: "7094848778", email: "caro09@gmail.com" }

];

// Get - obtener todos los contactos
app.get("/api/contactos", (req, res) => { res.json(contactos); });

// Post - crear contacto
app.post("/api/contactos", (req, res) => { const nuevo = { id: Date.now(), ...req.body }; contactos.push(nuevo); res.json(nuevo); });

// Put - actualizar contacto ya existente
app.put("/api/contactos/:id", (req, res) => { const id = parseInt(req.params.id); contactos = contactos.map(c => (c.id === id ? { ...c, ...req.body } : c)); res.json({ mensaje: "Contacto actualizado" }); });

// Delete - eliminar contacto 
app.delete("/api/contactos/:id", (req, res) => { const id = parseInt(req.params.id); contactos = contactos.filter(c => c.id !== id); res.json({ mensaje: "Contacto eliminado" }); });

app.listen(PORT, () => { console.log(`Servidor corriendo en http://localhost:${PORT}`); });
