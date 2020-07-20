//dotenv
require('dotenv').config();

// modulo de firebase
const admin = require("firebase-admin");

// keys
const serviceAccount =require(process.env.API_KEY);

// iniciar firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_URI,
});




module.exports = admin;
