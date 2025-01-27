import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

// Importar las imágenes de productos
import pro1 from '../assets/contenido/productos/pro1.jpeg';
import pro2 from '../assets/contenido/productos/pro2.jpeg';
import pro3 from '../assets/contenido/productos/pro3.jpeg';
import pro4 from '../assets/contenido/productos/pro4.jpeg';
import pro5 from '../assets/contenido/productos/pro5.jpeg';
import pro6 from '../assets/contenido/productos/pro6.jpeg';
import pro7 from '../assets/contenido/productos/pro7.jpeg';
import pro8 from '../assets/contenido/productos/pro8.jpeg';
import pro9 from '../assets/contenido/productos/pro9.jpeg';
import pro10 from '../assets/contenido/productos/pro10.jpeg';
import pro11 from '../assets/contenido/productos/pro11.jpeg';
import pro12 from '../assets/contenido/productos/pro12.jpeg';
import pro13 from '../assets/contenido/productos/pro13.jpeg';
import pro14 from '../assets/contenido/productos/pro14.jpeg';
import pro15 from '../assets/contenido/productos/pro15.webp';
import pro16 from '../assets/contenido/productos/pro16.webp';

const productImages = [
  pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8,
  pro9, pro10, pro11, pro12, pro13, pro14, pro15, pro16
];

const products = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  image: productImages[index],
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
            style={styles.productImage} // Asignar estilo a la imagen del producto
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
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
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
