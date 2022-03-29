const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

router.get('/articulos', controlador.consultarArticulos);

module.exports = router;