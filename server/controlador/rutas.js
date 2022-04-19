const express = require('express');
const router = express.Router();
const controlador = require('./controlador');

router.get('/articulos', controlador.consultarArticulos);
router.get('/ley/:leyId', controlador.consultarLeyes);

module.exports = router;