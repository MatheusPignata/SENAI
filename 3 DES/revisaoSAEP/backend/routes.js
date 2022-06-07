const expree = require('express');

const routes = expree.Router();

const Comentario = require('./scr/controller/Comentario');

routes.get('/comentarios', Comentario.listar);
routes.post('/cadastrar', Comentario.cadastrar);

module.exports = routes;