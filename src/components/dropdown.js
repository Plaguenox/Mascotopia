import React, { useState } from 'react';

const Dropdown = ({ onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
    onOptionSelect(option);
  };

  const optionStyle = {
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: '#abd937',
    color: 'black',
    textAlign: 'center',
    border: '1px solid #ccc',
    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
    fontFamily: 'Itim, cursive',
    fontSize: '18px',
    borderRadius: '10px',
    margin: '5px',
  };

  const optionHoverStyle = {
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
    transform: 'scale(1.1)',
  };

  return (
    <div style={{ width: '100%', margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '600px' }}>
        <div
          onClick={() => handleOptionClick('Alimentos')}
          style={optionStyle}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = optionHoverStyle.boxShadow; e.currentTarget.style.transform = optionHoverStyle.transform; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          Alimentos
        </div>
        <div
          onClick={() => handleOptionClick('Accesorios')}
          style={optionStyle}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = optionHoverStyle.boxShadow; e.currentTarget.style.transform = optionHoverStyle.transform; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          Accesorios
        </div>
        <div
          onClick={() => handleOptionClick('Juguetes')}
          style={optionStyle}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = optionHoverStyle.boxShadow; e.currentTarget.style.transform = optionHoverStyle.transform; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}
        >
          Juguetes
        </div>
        <div
          onClick={() => handleOptionClick('Otros')}
          style={optionStyle}
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