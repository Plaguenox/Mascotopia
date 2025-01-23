import React from 'react';

const Card = ({ image, price, onAddToCart }) => {
  return (
    <div className="card" style={styles.card}>
      <img src={image} alt="Product" style={styles.image} />
      <div style={styles.price}>${price}</div>
      <button style={styles.button} onClick={onAddToCart}>Añadir al carrito</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  price: {
    margin: '16px 0',
    fontSize: '18px',
    fontWeight: 'bold',
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

export default Card;
