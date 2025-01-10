import React, { useState } from 'react';

const ProductCard = ({ image, brand, productName, price }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedWeight, setSelectedWeight] = useState('1 Kg');

    const handleWeightClick = (weight) => {
        setSelectedWeight(weight);
    };

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
            <img src={image} alt={productName} style={{ width: '100%', height: 'auto' }} />
            <h3>{brand}</h3>
            <h4>{productName}</h4>
            <div style={{ margin: '10px 0' }}>
                <button onClick={() => handleWeightClick('1 Kg')} style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: selectedWeight === '1 Kg' ? '#ddd' : '#fff' }}>1 Kg</button>
                <button onClick={() => handleWeightClick('5 Kg')} style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: selectedWeight === '5 Kg' ? '#ddd' : '#fff' }}>5 Kg</button>
                <button onClick={() => handleWeightClick('10 Kg')} style={{ margin: '0 5px', padding: '5px 10px', backgroundColor: selectedWeight === '10 Kg' ? '#ddd' : '#fff' }}>10 Kg</button>
            </div>
            <div style={{ margin: '10px 0' }}>
                <button onClick={() => handleQuantityChange(-1)} style={{ margin: '0 5px', padding: '5px 10px' }}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} style={{ margin: '0 5px', padding: '5px 10px' }}>+</button>
            </div>
            <p>Price: ${price}</p>
            <button style={{ padding: '10px 20px', backgroundColor: '#ddd', cursor: 'pointer' }}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;