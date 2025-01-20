import React, { useState } from 'react';

const Dropdown = ({ onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('Alimentos'); // Opción por defecto

  const handleOptionClick = (option) => {
    if (selectedOption !== option) {
      setSelectedOption(option);
      onOptionSelect(option);
    }
  };

  const optionStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: '#87CEEB', // Color celeste
    color: 'black',
    textAlign: 'center',
    border: '1px solid #ccc',
    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
    fontFamily: 'Itim, cursive',
    fontSize: '18px',
    borderRadius: '10px',
    margin: '5px',
  };

  const selectedOptionStyle = {
    ...optionStyle,
    backgroundColor: '#1E90FF', // Color diferente para la opción seleccionada
    color: 'white',
  };

  const optionHoverStyle = {
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
    transform: 'scale(1.1)',
  };

  return (
    <div style={{ width: '100%', margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '600px' }}>
        <div
          style={selectedOption === 'Alimentos' ? selectedOptionStyle : optionStyle}
          onClick={() => handleOptionClick('Alimentos')}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = optionHoverStyle.boxShadow; e.currentTarget.style.transform = optionHoverStyle.transform; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          Alimentos
        </div>
        <div
          style={selectedOption === 'Accesorios' ? selectedOptionStyle : optionStyle}
          onClick={() => handleOptionClick('Accesorios')}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = optionHoverStyle.boxShadow; e.currentTarget.style.transform = optionHoverStyle.transform; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          Accesorios
        </div>
        <div
          style={selectedOption === 'Juguetes' ? selectedOptionStyle : optionStyle}
          onClick={() => handleOptionClick('Juguetes')}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = optionHoverStyle.boxShadow; e.currentTarget.style.transform = optionHoverStyle.transform; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          Juguetes
        </div>
        <div
          style={selectedOption === 'Otros' ? selectedOptionStyle : optionStyle}
          onClick={() => handleOptionClick('Otros')}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = optionHoverStyle.boxShadow; e.currentTarget.style.transform = optionHoverStyle.transform; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          Otros
        </div>
      </div>
    </div>
  );
};

export default Dropdown;