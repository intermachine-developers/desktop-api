// modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//route
app.use('/api', require('./routes/index.js'));

// start server
app.listen(app.get('port'),()=> {
  console.log('api on port', app.get('port'));
});
