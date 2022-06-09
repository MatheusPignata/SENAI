const express = require('express');

const routes = express.Router();

const Equipamento = require('./src/controller/Equipamento');
const Usuario = require('./src/controller/Usuario');

routes.get('/equipamento', Equipamento.listar);
routes.post('/equipamento', Equipamento.cadastrar);
routes.delete('/equipamento', Equipamento.deletar);

routes.post('/login', Usuario.login);

module.exports = routes;