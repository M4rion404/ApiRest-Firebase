const admin = require("firebase-admin");

// Cargar la clave privada de Firebase (descárgala desde Firebase Console)
const serviceAccount = require("./config/firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // Base de datos Firestore

module.exports = { db };
