require('./db/conn');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const ejs = require('ejs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));
app.set('view engine', 'ejs');

app.listen(3000, (req, res)=>{
    console.log(`http://localhost:3000`);
});

const registrationRouter = require('./routes/index');
app.use('/', registrationRouter);

