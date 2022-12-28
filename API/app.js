const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const rotaProdutor = require('./routes/produtor');
const rotaPropriedade = require('./routes/propriedade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*' )
    res.header('Acces-Control-Allow-Header', 
    'Origin, X-requrested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Method', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE');
        return res.status(200).send({OK});
    }
    next();
})

app.use('/produtor', rotaProdutor);
app.use('/propriedade', rotaPropriedade);

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