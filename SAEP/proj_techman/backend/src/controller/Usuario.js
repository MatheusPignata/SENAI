const con = require('../../connection.js');

const login = (req, res) => {
    const senha = req.body.senha;

    const query = `SELECT u.id, p.perfil FROM usuarios u inner join perfis p on p.id = u.perfil WHERE senha = '${senha}'`;

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    login
}