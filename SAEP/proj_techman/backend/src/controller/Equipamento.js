const con = require('../../connection.js');

const listar = (req, res) => {
    const query = "SELECT * FROM equipamentos";

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrar = (req, res) => {
    const equipamento = req.body.equipamento;
    const imagem = req.body.imagem;
    const descricao = req.body.descricao;
    const ativo = req.body.ativo;
    const data = req.body.data;
    

    const query = `INSERT INTO equipamentos VALUES (DEFAULT, '${equipamento}', '${imagem}', '${descricao}', '${ativo}', '${data}')`;

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const deletar = (req, res) => {
    const id = req.params.id;

    const query = `DELETE FROM equipamentos WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listar,
    cadastrar,
    deletar
}