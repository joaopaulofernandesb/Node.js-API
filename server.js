const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o App
const app = express();

app.use(express.json()); // permite recebimento de dados no formato json
app.use(cors());
//iniciando o Banco de Dados (DB)

mongoose.connect('mongodb://user:admin123@ds153096.mlab.com:53096/heroku_0qc0335c',{useNewUrlParser: true});

requireDir('./src/models');

//const Product = mongoose.model('Product');

//Rotas
app.use('/v1', require('./src/routes'));




app.listen(3001);
