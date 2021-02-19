'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const customerRoute = require('./routes/customer');
const cardRoute = require('./routes/card');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', (req, res) => { 
//     res.send('Welcome to Rest API');
// })
app.use('/customer', customerRoute);
app.use('/card', cardRoute);

app.listen(port, () => { 
    console.log(`App is running on port ${port}`);
})