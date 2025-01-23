import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { jsPDF } from 'jspdf';
import logo from '../resources/logo.png';

const FactPage = () => {
  const [cart, setCart] = useState([]);
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);

    const fakeProducts = [
      { name: 'Producto 1', weight: '1kg', flavor: 'Pollo', type: 'Seco' },
      { name: 'Producto 2', weight: '500g', flavor: 'Carne', type: 'Húmedo' },
      { name: 'Producto 3', weight: '2kg', flavor: 'Pescado', type: 'Seco' },
      { name: 'Producto 4', weight: '1.5kg', flavor: 'Cordero', type: 'Húmedo' },
    ];

    const randomData = savedCart.map(() => {
      const randomIndex = Math.floor(Math.random() * fakeProducts.length);
      return fakeProducts[randomIndex];
    });

    setFakeData(randomData);
  }, []);

  const total = cart.reduce((sum, product) => sum + parseFloat(product.price), 0).toFixed(2);

  const handlePrint = () => {
    const doc = new jsPDF();
    doc.addImage(logo, 'PNG', 10, 10, 50, 50);
    doc.setFontSize(20);
    doc.text('Factura', 105, 30, null, null, 'center');
    doc.setFontSize(12);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 10, 70);
    doc.text('Productos:', 10, 80);

    let y = 90;
    cart.forEach((product, index) => {
      const fakeProduct = fakeData[index];
      doc.text(`${index + 1}. ${fakeProduct.name} - ${fakeProduct.weight} - ${fakeProduct.flavor} - ${fakeProduct.type} - $${product.price}`, 10, y);
      y += 10;
    });

    doc.text(`Total: $${total}`, 10, y + 10);
    doc.save('factura.pdf');
  };

  return (
    <div>
      <Header />
      <div className="fact-container" style={styles.factContainer}>
        <img src={logo} alt="Mascotopia Logo" style={styles.logo} />
        <h2 style={styles.title}>Factura</h2>
        <p style={styles.date}>Fecha: {new Date().toLocaleDateString()}</p>
        <div style={styles.products}>
          <h3>Productos:</h3>
          <ul>
            {cart.map((product, index) => {
              const fakeProduct = fakeData[index];
              return (
                <li key={index} style={styles.productItem}>
                  {index + 1}. {fakeProduct.name} - {fakeProduct.weight} - {fakeProduct.flavor} - {fakeProduct.type} - ${product.price}
                </li>
              );
            })}
          </ul>
        </div>
        <p style={styles.total}>Total: ${total}</p>
        <button onClick={handlePrint} style={styles.button}>Imprimir Factura</button>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  factContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#4A4A4A',
  },
  date: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#4A4A4A',
  },
  fakeData: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#4A4A4A',
  },
  products: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  productItem: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#4A4A4A',
  },
  total: {
    fontSize: '20px',
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
    transition: 'background-color 0.3s',
  },
};

export default FactPage;
