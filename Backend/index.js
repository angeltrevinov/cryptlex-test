require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// CONFIG SERVER
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// HEADERS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,Authorization,content-type,application/json');
    next();
});

// MODULES
const crytplexRoutes = require('./Routes/CryptlexRoutes');

app.use('/cryptlex', crytplexRoutes);

// START SERVER
app.listen(process.env.PORT || '8080', () => {
    console.log('Server is running...');
});

const distDir = __dirname + "/build/";
app.use(express.static(distDir));

module.exports = app;
