import React from 'react';
import backgroundImage from './../imagenes/puntos.svg'; // Asegúrate de que la ruta sea correcta

const Fondo = ({ children }) => {
    const fondoStyle = {
        margin: 0,
        padding: 0,
        minHeight: '100vh', // Establecemos altura mínima para cubrir toda la pantalla
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        position: 'relative'
    };

    const contenedorStyle = {
        width: '90%', // Ajusta el ancho del contenedor al 90% del viewport
        height: '90%', // Ajusta la altura del contenedor al 90% del viewport
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const puntosStyle = {
        content: `url(${backgroundImage})`,
        position: 'absolute',
        width: '9vw', // Ajusta el tamaño de los puntos relativamente al ancho de la pantalla
        height: '9vw', // Ajusta el tamaño de los puntos relativamente al ancho de la pantalla
        zIndex: 2
    };

    const topLeft = {
        ...puntosStyle,
        top: '0',
        left: '0'
    };

    const bottomRight = {
        ...puntosStyle,
        bottom: '0',
        right: '0'
    };

    return (
        <div style={fondoStyle}>
            <div style={topLeft}></div>
            <div style={bottomRight}></div>
            <div style={contenedorStyle}>
                {children}
            </div>
        </div>
    );
};

export default Fondo;
