require("dotenv").config();

const express           = require('express');
const cors              = require('cors');
const bodyParser        = require('body-parser');
const helmet            = require('helmet');
const morgan            = require('morgan');

const authRouter        = require('./routes/auth');


require('./models/Asso');

const server = express();

// For body encore url
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));
server.use(cors());
server.use(bodyParser.json());
server.use(helmet());

// Home Page
server.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

server.use('/', authRouter);

server.use((req, res, next) => {
    res.status(404).json({
        error: 'Not found !'
    });
});

// Setting up the server
server.listen(process.env.PORT, function() {
    console.log('Server running on localhost:' + process.env.PORT);
});

module.exports = server;