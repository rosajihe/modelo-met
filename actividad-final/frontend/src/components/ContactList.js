import React from "react";
import ContactItem from "./ContactItem";
//Mostrar una lista de contactos y gestionar las acciones para eliminarlos o editarlos
export default function ContactList({ contactos, onDelete, onEdit }) {
  return (
    <ul>
      {contactos.map(c => (
        <ContactItem key={c.id} contacto={c} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
}
