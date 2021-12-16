const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());

const router = express.Router();
app.use(cors());

const pescador = require('./route/pescador.js');
app.use(pescador);

app.use('/', router);
app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
});