// Función asíncrona para obtener y mostrar los usuarios
        async function Users() {
            const url = 'https://jsonplaceholder.typicode.com/users'; // URL del endpoint

            try {
                // Realiza la petición usando fetch
                const response = await fetch(url);

                // Comprueba si la respuesta es correcta
                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.status}`);
                }

                // Convierte la respuesta a formato JSON
                const users = await response.json();

                // Muestra el nombre y correo de cada usuario en la consola
                console.log("Nombre y correo de los usuarios:");
                users.forEach(user => {
                    console.log(`Nombre: ${user.name}, Correo: ${user.email}`);
                });

                // Muestra la lista de usuarios en la página web
                displayUsersInWebPage(users);

            } catch (error) {
                // Maneja cualquier error durante la petición
                console.error("Hubo un problema con la operación fetch:", error);
                document.getElementById('user-list').innerHTML = '<li>Error al cargar los usuarios.</li>';
            }
        }

        // Función para mostrar la lista 
        function displayUsersInWebPage(users) {
            const userListElement = document.getElementById('list');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `${user.name}`;
                userListElement.appendChild(listItem);
            });
        }

        // Llama a la función al cargar la página
        Users();