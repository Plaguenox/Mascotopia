import React, { useState } from 'react';
import axios from 'axios';

const ActualizarSplash = () => {
    const [nombre, setNombre] = useState('');
    const [nombreArchivo, setNombreArchivo] = useState('');
    const [id, setId] = useState('');
    const [archivo, setArchivo] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setArchivo(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !nombreArchivo || !id || !archivo) {
            setMensaje('Todos los campos son obligatorios');
            return;
        }
        const params = {
            nombre,
            nombreArchivo,
            id,
            base64textString: archivo
        };
        try {
            const response = await axios.post('/contenido/actualizarsplash.php', params, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMensaje(response.data.mensaje);
        } catch (error) {
            setMensaje('Error al subir el archivo');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="text" value={nombreArchivo} onChange={(e) => setNombreArchivo(e.target.value)} placeholder="Nombre Archivo" />
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Subir</button>
            {mensaje && <p>{mensaje}</p>}
        </form>
    );
};

export default ActualizarSplash;
