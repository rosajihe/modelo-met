
  //Obtener todos los posts
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log('Obtener los posts:', json))
  .catch(error => console.error('Error:', error));

  //Crear post
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Mi primer Post',
    body: 'Contenido de ejemplo',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(json => console.log('Respuesta POST :', json))
  .catch(error => console.error('Error:', error));

//Actualizar post
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'Título actualizado',
    body: 'Cuerpo de la publicación actualizado.',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(json => console.log('Respuesta PUT:', json))
  .catch(error => console.error('Error :', error));

//Borrar post
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => response.json()) 
  .then(json => console.log('Respuesta DELETE:', json))
  .catch(error => console.error('Error :', error));