const con = require('../../connection.js');

const listar = (req, res) => {
    const query = "SELECT * FROM comentarios WHERE equipamento = " + req.params.equipamento;

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const avaliar = (req, res) => {
    const comentario = req.body.comentario;
    const equipamento = req.body.equipamento;
    const perfil = req.body.perfil;
    const data = req.body.data;

    const query = `INSERT INTO comentarios VALUES (DEFAULT, ${comentario}, ${equipamento}, ${perfil}, '${data}')`;

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listar,
    avaliar
}