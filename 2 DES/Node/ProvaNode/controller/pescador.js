const { response } = require('express');
const{con} = require('./connectionDB.js');
const model = require('../model/pescador.js');

const doGetAll = (req, res) => {
    let query = 'SELECT * FROM pescador'; 

    con.query(query, (err, result) => {
        let array = [];
        result.forEach(e => {
            array.push(model.calc(e));
        })
        res.json(array);
    })
}

const doGetOne = (req, res) => {
    let query = 'SELECT * FROM pescador WHERE id = ' + req.params.id;
    
    con.query(query, (err, result) => {
        if(result != ''){
            res.json(model.calc(result[0]));
        }else{
            res.status(404).end();
        }
    })
}

const doPost = (req, res) => {

    let id = req.body.id;
    let cidade =  req.body.cidade;
    let quantidade = req.body.quantidade;

    let query = `INSERT INTO pescador VALUES (DEFAULT, ${cidade}, ${quantidade})`;
    let queryId = `INSERT INTO pescador VALUES (${id}, '${cidade}', ${quantidade})`;

    if(req.body.id != undefined){
        con.query(queryId, (err, result) => {
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


const doPut = (req, res) => {
    let id = req.body.id;
    let cidade = "'" + req.body.cidade + "'";
    let quantidade = req.body.quantidade;

    let query = `UPDATE pescador SET cidade = ${cidade}, quantidade = ${quantidade} WHERE id = ${id}`;
    
    con.query(query, (err, result) => {
        if(result.changedRows == 1) {
            res.json(req.body)
        }else{
            res.status(404).end();
        }
    })
}

const doDelete = (req, res) => {
    let query = `DELETE FROM pescador WHERE id = ${req.params.id}`;

    con.query(query, (err, result) => {
        if(result.affectedRows == 1){
            res.status(410).end();
        }else{
            res.status(404).end();
        }
    })
}

module.exports = {
    doGetAll,
    doGetOne,
    doPost,
    doPut,
    doDelete,
}