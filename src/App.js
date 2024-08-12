import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';  // Importar todo como htmlToImage
import download from 'downloadjs';
import Factura from './Factura';

function App() {
    const facturaRef = useRef(null);

    const handleDownload = () => {
        if (facturaRef.current === null) {
            return;
        }

        htmlToImage.toJpeg(facturaRef.current, { quality: 0.95 })
            .then((dataUrl) => {
                download(dataUrl, 'factura.jpg');
            })
            .catch((err) => {
                console.error('Error al generar la imagen:', err);
            });
    };

    return (
        <div>
            <Factura ref={facturaRef} />
            <button onClick={handleDownload}>Descargar como JPG</button>
        </div>
    );
}

export default App;