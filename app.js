
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo.js');
const app = express();
const path = require('path');
const morgan = require('morgan');

const hostname = '127.0.0.1';
const port = 3000;
app.use(express.static(path.join(__dirname, 'src/public')));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./storage")));
app.set('src', path.join(__dirname, 'src'));
app.set('views', path.join(__dirname, 'src/views'));
app.set('css', path.join(__dirname, 'src/public/css'));
app.set('controllers', path.join(__dirname, 'controllers'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || port);
// const port = process.env.PORT || 3000;
app.use("/",require("./routes"));


app.use(express.json());
app.use(express.text());
app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false}));


app.listen(app.get('port'), hostname, () => {
    console.log(`Servidor escuchando en: http://${hostname} en el puerto: ` + port)
});

dbConnect();