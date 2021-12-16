const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const mysql = require('mysql');
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'irrf'
});

app.get('/api', (req, res) => {
    let query = 'SELECT * FROM funcionarios';
    con.query(query, (err, result) => {
        res.json(result);
    })
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});