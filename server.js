const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(morgan('dev'));
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

mongoose.Promise;

app.get('/', (req, res) => {
    res.json({"message" : "Welcome to REST API Mahasiswa"});
});

require('./app/routes/mahasiswa.routes.js')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});