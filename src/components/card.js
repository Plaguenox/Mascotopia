import React, { useState } from 'react';

const ProductCard = ({ brand, productName, price, imageUrl }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('1 Kg');

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const buttonStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: '#87CEEB',
    border: '1px solid #87CEEB',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
    fontFamily: 'Itim, cursive',
    fontSize: '14px',
    color: '#fff',
    borderRadius: '10px',
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#1E90FF',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '20px',
        width: '300px',
        margin: '10px',
        textAlign: 'center',
        boxSizing: 'border-box',
        borderRadius: '10px',
        backgroundColor: '#bbd988',
        borderColor: 'black',
      }}
    >
      <img
        src={imageUrl}
        alt={productName}
        style={{ width: '100%', height: 'auto' }}
      />
      <h3 style={{ fontFamily: 'Itim, cursive' }}>{brand}</h3>
      <h4 style={{ fontFamily: 'Itim, cursive' }}>{productName}</h4>
      <p style={{ fontFamily: 'Itim, cursive' }}>Precio: ${price}</p>
      <div style={{ margin: '10px 0' }}>
        <button
          onClick={() => handleWeightChange('1 Kg')}
          style={selectedWeight === '1 Kg' ? selectedButtonStyle : buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
        >
          1 Kg
        </button>
        <button
          onClick={() => handleWeightChange('2 Kg')}
          style={selectedWeight === '2 Kg' ? selectedButtonStyle : buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
        >
          2 Kg
        </button>
        <button
          onClick={() => handleWeightChange('5 Kg')}
          style={selectedWeight === '5 Kg' ? selectedButtonStyle : buttonStyle}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
        >
          5 Kg
        </button>
      </div>
      <div>
        <button
          onClick={() => handleQuantityChange(-1)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            borderRadius: '10px',
            fontFamily: 'Itim, cursive',
            fontWeight: 'bold',
          }}
        >
          -
        </button>
        <span style={{ fontFamily: 'Itim, cursive' }}>{quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            borderRadius: '10px',
            fontFamily: 'Itim, cursive',
            fontWeight: 'bold',
          }}
        >
          +
        </button>
      </div>
      <p style={{ fontFamily: 'Itim, cursive' }}>Precio: ${price}</p>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff7d96',
          cursor: 'pointer',
          transition: 'box-shadow 0.3s ease-in-out',
          borderRadius: '10px',
          fontFamily: 'Itim, cursive',
          fontWeight: 'bold',
          color: '#fff',
          border: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;