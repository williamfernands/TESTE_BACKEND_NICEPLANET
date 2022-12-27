const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const rotaProdutor = require('./routes/produtor');
const rotaPropriedadde = require('./routes/propriedade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/produtor', rotaProdutor);
app.use('/propriedade', rotaPropriedadde);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensage
        }
    });
});

module.exports = app;