const express = require('express');
const router = express.Router();
const mysql = require('mysql2').pool;

// RETORNA TODOS PRODUTOR
router.get('/', (req, res, ext) => {
  mysql.getConnection((error, conn) => {
    if (error) { return res.status(500).send({ error }); }npm;
    conn.query(
      'SELECT * FROM produtor;',
      (error, resultado, fields) => {
        if (error) { return res.status(500).send({ error }); }
        const response = {
          quantidade: resultado.length,
          produtor: resultado.map((prod) => ({
            idProdutor: prod.idProdutor,
            nomeProdutor: prod.nomeProdutor,
            cpfProdutor: prod.cpfProdutor,
            request: {
              tipo: 'GET',
              descricao: 'Retorna todos os produtor',
              url: `http://localhost:3000/${prod.idProdutor}`,
            },
          })),
        };
        return res.status(200).send({ response: resultado });
      },
    );
  });
});

// INSERE UM PRODUTOR
router.post('/', (req, res, ext) => {
  mysql.getConnection((error, conn) => {
    if (error) { return res.status(500).send({ error }); }
    conn.query(
      'INSERT INTO produtor (nomeProdutor, cpfProdutor) VALUES (?,?)',
      [req.body.nomeProdutor, req.body.cpfProdutor],
      (error, resultado, field) => {
        conn.release();
        if (error) { return res.status(500).send({ error }); }
        const response = {
          mensagem: 'Produtor inserido com sucesso',
          produtorCriado: {
            idProdutor: resultado.idProdutor,
            nomeProdutor: req.body.nomeProdutor,
            cpfProdutor: req.body.cpfProdutor,
            request: {
              tipo: 'POST',
              descricao: 'Insere um produtor',
              url: 'http://localhost:3000/produtor/',
            },
          },
        };
        return res.status(201).send(response);
      },
    );
  });
});

// RETORNA OS DADOS DE UM PRODUTOR
router.get('/:idProdutor', (req, res, ext) => {
  mysql.getConnection((error, conn) => {
    if (error) { return res.status(500).send({ error }); }
    conn.query(
      'SELECT * FROM produtor WHERE idProdutor =  ?;',
      [req.params.idProdutor],
      (error, resultado, fields) => {
        if (error) { return res.status(500).send({ error }); }
        if (resultado.length == 0) {
          return res.status(404).send({
            mensagem: 'Não foi encontrado um produtor com esse ID',
          });
        }
        const response = {

          produtor: {
            idProdutor: resultado[0].idProdutor,
            nomeProdutor: resultado[0].nomeProdutor,
            cpfProdutor: resultado[0].cpfProdutor,
            request: {
              tipo: 'GET',
              descricao: 'Retorna todos os produtor',
              url: 'http://localhost:3000/produtor',
            },
          },
        };
        return res.status(200).send(response);
      },
    );
  });
});

module.exports = router;
