import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
  };

  return (
    <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div onClick={() => handleOptionClick('Alimentos')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0' }}>
            Alimentos
          </div>
          {selectedOption === 'Alimentos' && (
            <div style={{ padding: '10px', backgroundColor: '#e0e0e0', width: '150px', margin: '10px auto', textAlign: 'center' }}>
              <div>Alimentos Secos</div>
              <div>Alimentos Húmedos</div>
            </div>
          )}
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div onClick={() => handleOptionClick('Accesorios')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0' }}>
            Accesorios
          </div>
          {selectedOption === 'Accesorios' && (
            <div style={{ padding: '10px', backgroundColor: '#e0e0e0', width: '150px', margin: '10px auto', textAlign: 'center' }}>
              <div>Comederos</div>
              <div>Bebederos</div>
            </div>
          )}
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div onClick={() => handleOptionClick('Juguetes')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0' }}>
            Juguetes
          </div>
          {selectedOption === 'Juguetes' && (
            <div style={{ padding: '10px', backgroundColor: '#e0e0e0', width: '150px', margin: '10px auto', textAlign: 'center' }}>
              <div>Mordederos</div>
              <div>Pelotas</div>
            </div>
          )}
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div onClick={() => handleOptionClick('Otros')} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f0f0f0' }}>
            Otros
          </div>
          {selectedOption === 'Otros' && (
            <div style={{ padding: '10px', backgroundColor: '#e0e0e0', width: '150px', margin: '10px auto', textAlign: 'center' }}>
              <div>Correas</div>
              <div>Arneses</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
