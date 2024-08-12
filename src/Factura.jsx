import React from 'react';

const Factura = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} style={{ padding: '20px', width: '600px', background: '#fff', color: '#000' }}>
            <h1>Factura</h1>
            <p>Cliente: Juan Pérez</p>
            <p>Fecha: 11/08/2024</p>
            <table style={{ width: '100%', marginTop: '20px', border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>Producto</th>
                        <th style={{ border: '1px solid black' }}>Cantidad</th>
                        <th style={{ border: '1px solid black' }}>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>Producto 1</td>
                        <td style={{ border: '1px solid black' }}>2</td>
                        <td style={{ border: '1px solid black' }}>$10</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>Producto 2</td>
                        <td style={{ border: '1px solid black' }}>1</td>
                        <td style={{ border: '1px solid black' }}>$15</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>Total</td>
                        <td></td>
                        <td style={{ border: '1px solid black' }}>$35</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});

export default Factura;
