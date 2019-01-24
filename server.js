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

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
})

app.get('/', (req, res) => {
    res.json({"message" : "Welcome to REST API Mahasiswa"});
});

require('./app/routes/mahasiswa.routes.js')(app);

app.listen(3002, () => {
    console.log("Server is listening port 3002");
});


