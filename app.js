const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const reducer = require('./routes/reducer');
const stamp = require('./routes/stamp');
const destination = require('./routes/destination');
const condition = require('./routes/condition');
const drawing = require('./routes/drawing');
const assembly = require('./routes/assembly_var');
const specification = require('./routes/specification');
const specification2 = require('./routes/specification2');
const parameters = require('./routes/parameters');
const parameters2 = require('./routes/parameters2');
const service = require('./routes/service');

const app = express();

// const q = require('./query');
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', index);
app.use('/reducer', reducer);
app.use('/stamp', stamp);
app.use('/destination', destination);
app.use('/condition', condition);
app.use('/drawing', drawing);
app.use('/assembly_var', assembly);
app.use('/specification', specification);
app.use('/specification2', specification2);
app.use('/parameters', parameters);
app.use('/parameters2', parameters2);
app.use('/service', service);

app.listen(3000, ()=>{
	console.log('Сервер работает на 3000 порту');
});
