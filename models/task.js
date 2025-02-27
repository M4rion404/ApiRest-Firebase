const { db } = require("../firebase"); // Asegúrate de que la conexión a Firebase está configurada correctamente

// Función para obtener todas las tareas
const getAllTasks = async () => {
  try {
    const snapshot = await db.collection("tasks").get();
    const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return tasks;
  } catch (error) {
    throw new Error("Error obteniendo las tareas: " + error.message);
  }
};

// Función para obtener una tarea por ID
const getTaskById = async (id) => {
  try {
    const doc = await db.collection("tasks").doc(id).get();
    if (!doc.exists) {
      return null; // Si no existe la tarea, devolvemos null
    }
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    throw new Error("Error obteniendo la tarea: " + error.message);
  }
};

// Función para agregar una nueva tarea
const createTask = async (title) => {
  try {
    const newTask = { title };
    const docRef = await db.collection("tasks").add(newTask);
    return { id: docRef.id, title }; // Retornamos el ID del nuevo documento
  } catch (error) {
    throw new Error("Error creando la tarea: " + error.message);
  }
};

// Función para actualizar una tarea existente
const updateTask = async (id, title) => {
  try {
    const taskRef = db.collection("tasks").doc(id);
    const doc = await taskRef.get();
    if (!doc.exists) {
      return null; // Si no existe la tarea, devolvemos null
    }
    await taskRef.update({ title });
    return { id, title }; // Retornamos el ID y el nuevo título
  } catch (error) {
    throw new Error("Error actualizando la tarea: " + error.message);
  }
};

// Función para eliminar una tarea
const deleteTask = async (id) => {
  try {
    const taskRef = db.collection("tasks").doc(id);
    const doc = await taskRef.get();
    if (!doc.exists) {
      return null; // Si no existe la tarea, devolvemos null
    }
    await taskRef.delete();
    return { message: "Tarea eliminada" }; // Confirmación de eliminación
  } catch (error) {
    throw new Error("Error eliminando la tarea: " + error.message);
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
