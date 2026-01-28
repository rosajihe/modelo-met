import React from "react";

//Funcion que nos muestra la lista un contacto proporcionando los botones de eliminar y editar
export default function ContactItem({ contacto, onDelete, onEdit }) {
  return (
    <li>
      {contacto.nombre} - {contacto.telefono} - {contacto.email}
      <button onClick={() => onDelete(contacto.id)}>Eliminar</button>
      <button onClick={() => onEdit(contacto.id)}>Editar</button>
    </li>
  );
}
