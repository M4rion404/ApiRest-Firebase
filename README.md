# ApiRest-Firebase
Este proyecto es una API RESTful que gestiona un conjunto de tareas utilizando Node.js y Firebase como base de datos. La API permite realizar las operaciones básicas de un sistema de gestión de tareas, tales como crear, leer, actualizar y eliminar tareas.

La aplicación está estructurada con el patrón MVC (Modelo-Vista-Controlador), donde el controlador gestiona las solicitudes HTTP, el modelo interactúa con Firebase y las rutas definen los puntos finales de la API.

El backend está construido utilizando Express.js, un framework de Node.js, y Firebase se utiliza para almacenar y gestionar las tareas de forma remota.

Funcionalidades
Obtener todas las tareas: Recupera todas las tareas almacenadas en Firebase.
Obtener tarea por ID: Recupera una tarea específica utilizando su identificador único (ID).
Crear nueva tarea: Permite agregar nuevas tareas a la base de datos.
Actualizar tarea: Permite editar los detalles de una tarea existente.
Eliminar tarea: Permite eliminar una tarea de la base de datos.

Requerimientos:
Instalar Node.js: Asegúrate de tener Node.js instalado en tu sistema.
Instalar dependencias: Ejecuta el siguiente comando en la terminal:
    npm install
Ejecutar el proyecto: Usa el siguiente comando para iniciar la aplicación:
    npm run dev
Configurar Firebase:
    Crea una cuenta en Firebase y configura una base de datos en Firestore.
    Agrega el archivo de conexión de Firebase dentro de una carpeta llamada "config" en la raíz del proyecto.