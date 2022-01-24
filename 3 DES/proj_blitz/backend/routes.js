const express = require('express');

const route = express.Router();

const UsuarioController = require('./src/controller/UsuarioController');
const AlertaController = require('./src/controller/AlertaController');
const LocationController = require('./src/controller/LocalizacaoController');

route.post('/usuario', UsuarioController.create);
route.get('/usuario', UsuarioController.read);
route.get('/usuario/:id', UsuarioController.read);
route.put('/usuario/:id', UsuarioController.update);
route.delete('/usuario/:id', UsuarioController.remove);

route.post('/alerta', AlertaController.create);
route.get('/alerta', AlertaController.read);
route.get('/alerta/:id', AlertaController.read);
route.put('/alerta/:id', AlertaController.update);
route.delete('/alerta/:id', AlertaController.remove);

route.post('/localizacao', LocationController.create);
route.get('/localizacao', LocationController.read);
route.get('/localizacao/:id', LocationController.read);
route.put('/localizacao/:id', LocationController.update);
route.delete('/localizacao/:id', LocationController.remove);

module.exports = route;