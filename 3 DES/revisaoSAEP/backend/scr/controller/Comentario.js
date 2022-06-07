const con = require('../../connection.js');

const listar = (req, res) => {
    const query = 'SELECT * FROM comentarios';
    con.query(query, (err, results) => {
        if (err === null) {
            res.status(200).json(results).end();
        }else{
            res.status(400).json(err).end();
        }
    })
};

const cadastrar = (req, res) => {
    const id_user = req.body.id_user;
    const id_salgado = req.body.id_salgado;
    const avaliacao = req.body.avaliacao;
    const nota = req.body.nota;

    const query = `INSERT INTO comentarios VALUES (DEFAULT, ${id_user}, ${id_salgado}, ${nota}, '${avaliacao}')`;

    con.query(query, (err, results) => {
        if (err === null) {
            res.status(200).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}


module.exports = {
    listar,
    cadastrar
}