// Router module
const { Router } = require('express');
const router = Router();

// firebase
const { database } = require('../models/firebase');

const db = database();

// routes
router.get('/', (req, res) => {
  db.ref('users').once('value', (snapshot) => {
    data = snapshot.val();
    res.json(data);
  });
})

router.post('/register', (req, res) => {
  res.json('new user add');
  const { user, email, password } = req.body;
  const newUser = {
    user,
    email,
    password,
  };
  db.ref('users').push(newUser);
})

// login user
router.get('/:id', (req, res) => {
 res.json('user id login');
})

// exportar
module.exports = router;
