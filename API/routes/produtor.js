const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

//RETORNA TODOS PRODUTOR
router.get('/', (req, res, ext) => {
    res.status(200).send({
        mensagem: 'retorna todos produtores'
    });
});

//INSERE UM PRODUTOR
router.post('/', (req, res, ext) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO produtor (nomeProdutor, cpfProdutor) VALUES (?,?)',
            [req.body.nomeProdutor, req.body.cpfProdutor],
            (error, resultado, field) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                } 
                res.status(201).send({
                    mensagem: 'Produtor inserido com sucesso!',
                    idProdutor: resultado.insertId
                });
            }
        )
    })
});

//RETORNA OS DADOS DO PRODUTOR
router.get('/:idProdutor', (req, res, ext) => {
    const id = req.params.idProdutor
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