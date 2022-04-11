require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// CONFIG SERVER
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const crytplexRoutes = require('./Routes/CryptlexRoutes');

app.use('/cryptlex', crytplexRoutes);

// START SERVER
app.listen(process.env.PORT || '8080', () => {
    console.log('Server is running...');
});

module.exports = app;
