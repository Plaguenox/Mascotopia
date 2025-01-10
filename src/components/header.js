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

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f8f8f8' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Mascotopia Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <div style={{ fontWeight: 'bold' }}>Mascotopia</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Buscar alimentos, accesorios..." style={{ marginRight: '10px', padding: '5px' }} />
        <button style={{ padding: '5px 10px' }}>Buscar</button>
      </div>
      <div>
        <button onClick={handleAccountClick} style={{ marginRight: '10px', padding: '5px 10px' }}>Cuenta</button>
        <button onClick={handleCartClick} style={{ padding: '5px 10px' }}>Carrito</button>
      </div>
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '500px', textAlign: 'center' }}>
            <h2>Registro</h2>
            <form>
              <div style={{ marginBottom: '10px' }}>
                <input type="text" placeholder="Nombre" style={{ width: '100%', padding: '10px' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="email" placeholder="Correo Electrónico" style={{ width: '100%', padding: '10px' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <input type="password" placeholder="Contraseña" style={{ width: '100%', padding: '10px' }} />
              </div>
              <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Registrar</button>
            </form>
            <button onClick={closeModal} style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}>Cerrar</button>
          </div>
        </div>
      )}
      {isCartOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', width: '80%', maxWidth: '600px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Carrito</h2>
              <button onClick={closeCart} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}>Cerrar</button>
            </div>
            <div style={{ margin: '20px 0' }}>
              {cartItems.length === 0 ? (
                <p>No hay artículos en el carrito.</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button onClick={() => removeItem(item.id)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}>Eliminar</button>
                  </div>
                ))
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <button onClick={clearCart} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer' }}>Vaciar Carrito</button>
              <span>Total: ${totalPrice}</span>
              <button style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>Confirmar Pago</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;