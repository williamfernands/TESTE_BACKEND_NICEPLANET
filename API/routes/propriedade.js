const express = require('express');
const router = express.Router();

//RETORNA TODAS PROPRIEDADE
router.get('/', (req, res, ext) => {
    res.status(200).send({
        mensagem: 'retorna todas propriedades'
    });
});

//INSERE UMA PROPRIEDADE
router.post('/', (req, res, ext) => {

    const propriedade = {
        idPropriedade: req.body.idPropriedade,
        nomePropriedade: req.body.nomePropriedade,
        cadastroRural: req.body.cadastroRural
    }

    res.status(201).send({
        mensagem: 'insere uma propriedade',
        propriedadeCriado: propriedade
    });
});

//RETORNA OS DADOS DA PROPRIEDADDE
router.get('/:idPropriedade', (req, res, ext) => {
    const id = req.params.idProdutor
        res.status(200).send({
            mensagem: 'detalhes da propriedade',
            idPropriedade: id
        });
});
//ALTERA UMA PROPRIEDDADE
router.patch('/', (req, res, ext) => {
    res.status(201).send({
        mensagem: 'propriedade alterada'
    });
});

//EXCLUI UMA PROPRIEDADE
router.delete('/', (req, res, ext) => {
    res.status(201).send({
        mensagem: 'propriedade excluida'
    });
});

module.exports = router;