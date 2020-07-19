// modulo de firebase
const admin = require("firebase-admin");

// api firebase
const serviceAccount = require("./serviceAccountKey.json");

// iniciar firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fazt-community-desktop-app.firebaseio.com"
})

module.exports = admin;
