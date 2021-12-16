const express = require('express');
const router = express.Router();
const controller = require('../controller/pescador.js');

router.get('/api', controller.doGetAll);
router.get('/api/:id', controller.doGetOne);
router.post('/api/post', controller.doPost);
router.put('/api/put', controller.doPut);
router.delete('/api/delete/:id', controller.doDelete);

module.exports = router;