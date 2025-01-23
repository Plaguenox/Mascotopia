import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const products = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  image: `/resources/product${(index % 3) + 1}.jpg`,
  price: (Math.random() * 100).toFixed(2),
}));

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setShowModal(true);
  };

  const handleEmptyCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    setShowModal(false);
  };

  const handleCheckout = () => {
    setShowModal(false);
    navigate('/fact');
  };

  const total = cart.reduce((sum, product) => sum + parseFloat(product.price), 0).toFixed(2);

  return (
    <div>
      <Header />
      <div className="products-container" style={styles.productsContainer}>
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Producto Añadido al Carrito</h2>
            <p><strong>Total:</strong> ${total}</p>
            <p><strong>Cantidad:</strong> {cart.length}</p>
            <button onClick={handleEmptyCart} style={styles.button}>Vaciar Carrito</button>
            <button onClick={handleCheckout} style={styles.button}>Ir a Pagar</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

const styles = {
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4A4A4A',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px',
    transition: 'background-color 0.3s',
  },
};

export default ProductsPage;
