const express = require('express');
const app = express();

const rotaProdutor = require('./routes/produtor');
const rotaPropriedadde = require('./routes/propriedade');

app.use('/produtor', rotaProdutor);
app.use('/propriedade', rotaPropriedadde);

module.exports = app;