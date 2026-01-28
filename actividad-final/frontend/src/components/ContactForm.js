import React, { useState, useEffect } from "react";
import "../App.css";

//Funcion para manejar el formulario 
export default function ContactForm({ onSubmit, contactoInicial, isEditing }) {
  //Hook para manejar los datos del formulario
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "" });

  // Cuando seleccionamos un contacto para editar, cargamos sus datos en el formulario
  useEffect(() => {
    if (contactoInicial) {
      setForm(contactoInicial);
    }
  }, [contactoInicial]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ nombre: "", telefono: "", email: "" });
  };

  return (
    //Formulario 
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      <input
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">{isEditing ? "Guardar cambios" : "Agregar"}</button>
    </form>
  );
}
