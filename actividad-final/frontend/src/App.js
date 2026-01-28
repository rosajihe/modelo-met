import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { getContactos, crearContacto, eliminarContacto, editarContacto } from "./services/api";

function App() {
  const [contactos, setContactos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  //Cargar datos iniciales
  useEffect(() => {
    getContactos().then(setContactos);
  }, []);

  //Crear contacto
  const handleCreateOrUpdate = async (contacto) => {
    if (editingId) {
      // Editar contacto existente
      await editarContacto(editingId, contacto);
      setContactos(contactos.map(c => (c.id === editingId ? { ...c, ...contacto } : c)));
      setEditingId(null);
    } else {
      // Crear nuevo contacto
      const nuevo = await crearContacto(contacto);
      setContactos([...contactos, nuevo]);
    }
  };

  //Borrar contacto
  const handleDelete = async (id) => {
    await eliminarContacto(id);
    setContactos(contactos.filter(c => c.id !== id));
  };

//Cambiar el estado de la aplicación de un modo visualización-edición 
  const handleEdit = (id) => {
    setEditingId(id);
  };

  const contactoEnEdicion = contactos.find(c => c.id === editingId);

  return (
    //Contenedor de Formulario y lista
    <div className="container cont-form">
      <h1>Gestión de Contactos</h1>
      <ContactForm
        onSubmit={handleCreateOrUpdate}
        contactoInicial={contactoEnEdicion}
        isEditing={!!editingId}
      />
      <ContactList contactos={contactos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
