const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());

const router = express.Router();
app.use(cors());

const funcionario = require('./route/funcionario.js');
app.use(funcionario);

app.use('/', router);
app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});