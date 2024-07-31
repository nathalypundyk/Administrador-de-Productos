const express = require('express');
const ControladorProductos = require('../controladores/controladorProductos');
const routerProductos = express.Router();

routerProductos.get('/productos', ControladorProductos.todosLosProductos);
routerProductos.post('/productos/agregar', ControladorProductos.agregarProducto);

module.exports = routerProductos;
