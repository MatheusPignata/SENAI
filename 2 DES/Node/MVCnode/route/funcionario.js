const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionario.js');

router.get('/api', controller.get);
router.get('/api/:matricula', controller.getOne);
router.post('/api/post', controller.post);
router.put('/api/put', controller.put);
router.delete('/api/delete/:matricula', controller.deletee);

module.exports = router;