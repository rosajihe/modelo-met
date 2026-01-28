const API_URL = "http://localhost:3001/api/contactos";

//Funcion para obtener datos 
export const getContactos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

//Funcion para crear un contacto
export const crearContacto = async (contacto) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contacto),
  });
  return res.json();
};

//Funcion para editar un contacto
export const editarContacto = async (id, contacto) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contacto),
  });
};

//Funcion para eliminar un contacto
export const eliminarContacto = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
