const Productos = require('../modelos/modeloProductos');

module.exports.todosLosProductos = (req, res) => {
    Productos.find()
        .then((listaProductos) => {
            return res.status(200).json(listaProductos);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.agregarProducto = (req, res) => {
    const { titulo, precio, descripcion } = req.body;

    if (!titulo || !precio || !descripcion) {
        res.statusMessage = 'Por favor proporcionar todos los campos';
        return res.status(406).json({ mensaje: 'Por favor proporcionar todos los campos' });
    }

    Productos.create(req.body)
        .then((nuevoProducto) => {
            return res.status(201).json(nuevoProducto);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};