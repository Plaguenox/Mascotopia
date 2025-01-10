import React from 'react';

const header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f8f8f8' }}>
      <div style={{ fontWeight: 'bold' }}>Mascotopia</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Buscar alimentos, accesorios..." style={{ marginRight: '10px', padding: '5px' }} />
        <button style={{ padding: '5px 10px' }}>Buscar</button>
      </div>
      <div>
        <button style={{ marginRight: '10px', padding: '5px 10px' }}>Cuenta</button>
        <button style={{ padding: '5px 10px' }}>Carrito</button>
      </div>
    </div>
  );
};

export default header;