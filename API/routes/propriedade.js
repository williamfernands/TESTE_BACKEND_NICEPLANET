const express = require('express');
const router = express.Router();

//RETORNA TODAS PROPRIEDADE
router.get('/', (req, res, ext) => {
    res.status(200).send({
        mensagem: 'retorna todas propriedade'
    });
});

//INSERE UMA PROPRIEDADE
router.post('/', (req, res, ext) => {
    res.status(201).send({
        mensagem: 'insere uma propriedade'
    });
});

//RETORNA OS DADOS DA PROPRIEDADDE
router.get('/:id_propriedade', (req, res, ext) => {
    const id = req.params.id_produtor
        res.status(200).send({
            mensagem: 'detalhes da propriedade',
            id_propriedade: id
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