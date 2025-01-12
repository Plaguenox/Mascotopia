import React, { useState } from 'react';
import logo from '../resources/logo.svg';

const Header = ({ setIsModalOpen }) => {
  const [isModalOpen, setIsModalOpenLocal] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
  ]);

  const handleAccountClick = () => {
    setIsModalOpen(true);
    setIsModalOpenLocal(true);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalOpenLocal(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#ff7d96', // Color rosa
    border: '1px solid #ff7d96', // Color rosa
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
    fontFamily: 'Itim, cursive', // Tipografía Itim
    fontSize: '16px',
    color: 'black',
    borderRadius: '20px', // Bordes redondeados
  };

  const buttonHoverStyle = {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#abd937', fontFamily: 'Itim, cursive' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Mascotopia Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <div style={{ fontWeight: 'bold', fontSize: '32px', color: '#333' }}>Mascotopia</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Buscar alimentos, accesorios..." style={{ marginRight: '10px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'Itim, cursive', fontSize: '14px' }} />
        <button style={buttonStyle} onMouseEnter={(e) => e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow} onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}>Buscar</button>
      </div>
      <div>
        <button onClick={handleAccountClick} style={{ ...buttonStyle, marginRight: '10px' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow} onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}>Cuenta</button>
        <button onClick={handleCartClick} style={buttonStyle} onMouseEnter={(e) => e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow} onMouseLeave={(e) => e.currentTarget.style.boxShadow = ''}>Carrito</button>
      </div>
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '500px', textAlign: 'center', fontFamily: 'Itim, cursive' }}>
            <h2>Registro</h2>
            <form>
              <div style={{ marginBottom: '10px' }}>
                <input type="text" placeholder="Nombre" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'Itim, cursive', fontSize: '14px' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="email" placeholder="Correo Electrónico" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'Itim, cursive', fontSize: '14px' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="password" placeholder="Contraseña" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontFamily: 'Itim, cursive', fontSize: '14px' }} />
              </div>
              <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '20px', fontFamily: 'Itim, cursive', fontSize: '14px', fontWeight: 'bold' }}>Registrar</button>
            </form>
            <button onClick={closeModal} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '20px', fontFamily: 'Itim, cursive', fontSize: '14px', fontWeight: 'bold' }}>Cerrar</button>
          </div>
        </div>
      )}
      {isCartOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '600px', textAlign: 'center', fontFamily: 'Itim, cursive' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Carrito</h2>
              <button onClick={closeCart} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '20px', fontFamily: 'Itim, cursive', fontSize: '14px', fontWeight: 'bold' }}>Cerrar</button>
            </div>
            <div style={{ margin: '20px 0' }}>
              {cartItems.length === 0 ? (
                <p>No hay artículos en el carrito.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button onClick={() => removeItem(item.id)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '20px', fontFamily: 'Itim, cursive', fontSize: '14px', fontWeight: 'bold' }}>Eliminar</button>
                  </div>
                ))
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <button onClick={clearCart} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '20px', fontFamily: 'Itim, cursive', fontSize: '14px', fontWeight: 'bold' }}>Vaciar Carrito</button>
              <span>Total: ${totalPrice}</span>
              <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '20px', fontFamily: 'Itim, cursive', fontSize: '14px', fontWeight: 'bold' }}>Confirmar Pago</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;