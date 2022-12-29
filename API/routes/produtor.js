const express = require('express');
const router = express.Router();
const mysql = require('mysql').pool;

//RETORNA TODOS PRODUTOR
router.get('/', (req, res, ext) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
             'SELECT * FROM produtor;',
             (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({response: resultado})
             }
        )
    });
});

//INSERE UM PRODUTOR
router.post('/', (req, res, ext) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'INSERT INTO produtor (nomeProdutor, cpfProdutor) VALUES (?,?)',
            [req.body.nomeProdutor, req.body.cpfProdutor],
            (error, resultado, field) => {
                conn.release();

        if (error) { return res.status(500).send({ error: error }) }

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
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
             'SELECT * FROM produtor WHERE idProdutor =  ?;',
             [req.params.idProdutor],
             (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({response: resultado})
             }
        )
    });
});

module.exports = router;