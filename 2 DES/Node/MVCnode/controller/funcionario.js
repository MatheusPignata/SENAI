const { response } = require('express');
const{con} = require('./connectionDB.js');
const model = require('../model/funcionario.js')

const get = (req, res) => {
    let query = 'SELECT * FROM funcionarios'

    con.query(query, (err, result) => {
        let array = [];
        result.forEach( e => {
            array.push(model.calcIRRF(e))
        })
        res.json(array);
    })
}

const getOne = (req, res) => {
    let query = 'SELECT * FROM funcionarios WHERE matricula = ' + req.params.matricula;

    con.query(query, (err, result) => {
        if(result != ''){
            res.json(model.calcIRRF(result[0]));
        }else{
            res.status(404).end();
        }
    })
}

const post = (req, res) => {
    let matricula = req.body.matricula;
    let nome_completo = "'"+ req.body.nome_completo +"'";
    let data_desligamento = "'"+ req.body.data_desligamento +"'";
    let ultimo_salario = req.body.ultimo_salario;

    let query = `INSERT INTO funcionarios VALUES (DEFAULT, ${nome_completo}, ${data_desligamento}, ${ultimo_salario})`;
    let queryMatricula = `INSERT INTO funcionarios VALUES (${matricula}, ${nome_completo}, ${data_desligamento}, ${ultimo_salario})`;

    if(req.body.matricula != undefined){
        con.query(queryMatricula, (err, result) => {
            if(result.affectedRows == 1){
                res.status(201).json(req.body).end();
            }else{
                res.status(400).end();
            }
        })
    }else{
        con.query(query, (err, result) => {
            if(result.affectedRows == 1){
                res.status(201).json(model.refromJson(req.body, result.insertId)).end();
            }else{
                res.status(400).end();
            }
        })
    }
    
}

const put = (req, res) => {
    let matricula = req.body.matricula;
    let nome_completo = "'"+ req.body.nome_completo +"'";
    let data_desligamento = "'"+ req.body.data_desligamento +"'";
    let ultimo_salario = req.body.ultimo_salario;

    let query = `UPDATE funcionarios SET nome_completo = ${nome_completo}, data_desligamento = ${data_desligamento}, ultimo_salario = ${ultimo_salario} WHERE matricula = ${matricula}`;

    con.query(query, (err, result) => {
        if(result.changedRows == 1) {
            res.json(req.body)
        }else{
            res.status(404).end();
        }
    })
}

const deletee = (req, res) => {
    let query = `DELETE FROM funcionarios WHERE matricula = ${req.params.matricula}`;

    con.query(query, (err, result) => {
        if(result.affectedRows == 1){
            res.status(410).end();
        }else{
            res.status(404).end();
        }
    })
}

module.exports = {
    get,
    getOne,
    post,
    put,
    deletee
}