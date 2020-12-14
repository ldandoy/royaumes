require("dotenv").config();

const express           = require('express');
const cors              = require('cors');
const bodyParser        = require('body-parser');
const helmet            = require('helmet');
const morgan            = require('morgan');

const errors             = require('./middlewares/errors')

const authRouter        = require('./routes/auth');
const kingdomsRouter    = require('./routes/kingdoms');
const worldRouter       = require('./routes/world');
const barracksRouter    = require('./routes/barracks');
const unitsRouter       = require('./routes/units');
const usersRouter       = require('./routes/users');

require('./models/Asso');

const server = express();

// For body encore url
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));
server.use(cors());
server.use(express.json());
server.use(helmet());

// Home Page
server.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'It works !'
    });
});

server.use('/', authRouter);
server.use('/kingdoms', kingdomsRouter);
server.use('/world', worldRouter);
server.use('/barracks', barracksRouter);
server.use('/units', unitsRouter);
server.use('/users', usersRouter);

server.use(errors.notFound);
server.use(errors.errorHandler);

// Setting up the server
server.listen(process.env.PORT, function() {
    console.log('Server running on http://localhost:' + process.env.PORT);
});

module.exports = server;