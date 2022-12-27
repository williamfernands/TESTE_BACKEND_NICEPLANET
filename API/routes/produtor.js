const express = require('express');
const router = express.Router();

//RETORNA TODOS PRODUTOR
router.get('/', (req, res, ext) => {
    res.status(200).send({
        mensagem: 'retorna todos produtor'
    });
});

//INSERE UM PRODUTOR
router.post('/', (req, res, ext) => {
    res.status(201).send({
        mensagem: 'insere um produtor'
    });
});

//RETORNA OS DADOS DO PRODUTOR
router.get('/:id_produtor', (req, res, ext) => {
    const id = req.params.id_produtor
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'detalhes do produtor',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'voce passou um ID'
        })
    }
});
//ALTERA UM PRODUTOR
router.patch('/', (req, res, ext) => {
    res.status(201).send({
        mensagem: 'produtor alterado'
    });
});

//EXCUI UM PRODUTOR
router.delete('/', (req, res, ext) => {
    res.status(201).send({
        mensagem: 'produtor excluido'
    });
});

module.exports = router;