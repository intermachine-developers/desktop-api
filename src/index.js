// modules
const express = require('express');
const morgan = require('morgan');

// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//route
app.use('/api', require('./routes/index.js'));

// start server
app.listen(app.get('port'),()=> {
  console.log('api on port', app.get('port'));
});
