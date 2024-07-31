import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const AgregarProducto = () => {
    const [titulo, setTitulo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = { titulo, precio, descripcion };

        try {
            const response = await axios.post('http://localhost:8080/productos/agregar', nuevoProducto);
            alert('¡Producto Agregado!')
            console.log('Producto agregado:', response.data);
            setTitulo('');
            setPrecio(0);
            setDescripcion('');
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    return (
        <div className='formulario'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>
                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    );
};

export default AgregarProducto;
