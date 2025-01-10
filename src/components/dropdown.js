import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
  };

  return (
    <div style={{ width: '200px', margin: '20px' }}>
      <div onClick={() => handleOptionClick('Alimentos')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        Alimentos
      </div>
      {selectedOption === 'Alimentos' && (
        <div style={{ paddingLeft: '20px', backgroundColor: '#e0e0e0' }}>
          <div>Alimentos Secos</div>
          <div>Alimentos Húmedos</div>
        </div>
      )}
      <div onClick={() => handleOptionClick('Accesorios')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        Accesorios
      </div>
      {selectedOption === 'Accesorios' && (
        <div style={{ paddingLeft: '20px', backgroundColor: '#e0e0e0' }}>
          <div>Comederos</div>
          <div>Bebederos</div>
        </div>
      )}
      <div onClick={() => handleOptionClick('Juguetes')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        Juguetes
      </div>
      {selectedOption === 'Juguetes' && (
        <div style={{ paddingLeft: '20px', backgroundColor: '#e0e0e0' }}>
          <div>Mordederos</div>
          <div>Pelotas</div>
        </div>
      )}
      <div onClick={() => handleOptionClick('Otros')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        Otros
      </div>
      {selectedOption === 'Otros' && (
        <div style={{ paddingLeft: '20px', backgroundColor: '#e0e0e0' }}>
          <div>Correas</div>
          <div>Arneses</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;