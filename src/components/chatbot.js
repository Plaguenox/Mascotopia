import React, { useState } from 'react';

const responses = {
  'hola': '¡Hola! ¿En qué puedo ayudarte con tu mascota?',
  '¿cómo estás?': '¡Estoy bien! ¿Y tú?',
  '¿qué comida es buena para perros?': 'La comida balanceada para perros es una buena opción. Consulta con tu veterinario para recomendaciones específicas.',
  '¿cuánto ejercicio necesita un gato?': 'Los gatos necesitan ejercicio diario. Jugar con ellos durante 20-30 minutos al día es ideal.',
  'adiós': '¡Adiós! ¡Que tengas un buen día!',
  '¿cuándo debo llevar a mi perro al veterinario?': 'Se recomienda llevar a tu perro al veterinario al menos una vez al año para un chequeo general.',
  '¿cómo puedo entrenar a mi perro?': 'Usa refuerzos positivos como golosinas y elogios. Sé consistente y paciente con los comandos.',
  '¿cuál es la mejor raza de perro para niños?': 'Razones como el Golden Retriever y el Labrador Retriever son excelentes con los niños.',
  '¿qué hacer si mi gato no come?': 'Si tu gato no come por más de 24 horas, consulta a un veterinario. Puede haber una razón subyacente.',
  '¿cuánto debe pesar mi perro?': 'El peso ideal depende de la raza y la edad de tu perro. Consulta con tu veterinario para obtener una recomendación específica.',
  '¿cuánto cuesta adoptar una mascota?': 'El costo de adopción varía, pero generalmente incluye vacunas, microchip y esterilización.',
  '¿cómo presento a un nuevo perro a mi gato?': 'Hazlo gradualmente y bajo supervisión. Permite que ambos se acostumbren al olor del otro primero.',
  '¿qué juguetes son buenos para gatos?': 'Los juguetes interactivos como las plumas y los ratones de juguete son excelentes opciones.',
  '¿cómo puedo evitar que mi perro muerda los muebles?': 'Proporciona juguetes adecuados para morder y usa productos disuasorios en los muebles.',
  '¿qué alimentos son tóxicos para los perros?': 'Chocolate, uvas, pasas, cebolla y ajo son tóxicos para los perros y deben evitarse.',
  '¿qué hago si mi gato tiene pulgas?': 'Usa un tratamiento antipulgas y consulta a tu veterinario para obtener el mejor producto.',
  '¿cómo puedo ejercitar a mi perro en casa?': 'Juega a buscar, usa rompecabezas de alimentos y practica comandos de entrenamiento.',
  '¿cómo puedo cepillar los dientes de mi perro?': 'Usa un cepillo y pasta dental específicos para perros. Introduce el cepillado gradualmente.',
  '¿qué debo hacer si mi mascota está enferma?': 'Lleva a tu mascota al veterinario lo antes posible para un diagnóstico y tratamiento adecuados.',
  '¿cómo puedo mantener a mi perro fresco en verano?': 'Proporciona sombra y agua fresca, y evita paseos durante las horas más calurosas del día.',
  '¿cuál es la mejor comida para gatos?': 'La comida balanceada de alta calidad es esencial. Consulta con tu veterinario para recomendaciones específicas.',
  '¿cómo puedo entrenar a mi gato para usar la caja de arena?': 'Coloca la caja en un lugar tranquilo y muestra a tu gato dónde está. Mantén la caja limpia.',
  '¿qué razas de perros no sueltan mucho pelo?': 'Razas como el Poodle y el Schnauzer son conocidas por soltar poco pelo.',
  '¿cómo puedo hacer que mi perro deje de ladrar tanto?': 'Identifica la causa del ladrido y usa entrenamiento positivo para reducirlo. Proporciona ejercicio y estimulación mental.',
  '¿qué hago si mi gato araña los muebles?': 'Proporciona rascadores y usa productos disuasorios en los muebles.',
  '¿cuánto debe dormir mi perro?': 'Los perros adultos generalmente necesitan entre 12 y 14 horas de sueño al día.',
  '¿cómo puedo ayudar a mi perro a socializar con otros perros?': 'Lleva a tu perro a parques para perros y organiza citas de juego con otros perros en un entorno controlado.',
  '¿qué debo hacer si mi gato tiene problemas para usar la caja de arena?': 'Consulta a un veterinario para descartar problemas de salud y asegúrate de que la caja esté limpia y en un lugar adecuado.',
  '¿cuál es el mejor lugar para adoptar una mascota?': 'Refugios locales y organizaciones de rescate son excelentes lugares para adoptar una mascota.',
  '¿cómo puedo mantener a mi gato entretenido en casa?': 'Usa juguetes interactivos, rascadores y crea lugares altos para que trepe.',
  '¿qué razas de perros son buenas para apartamentos?': 'Razas pequeñas como el Chihuahua, el Shih Tzu y el Bulldog Francés son buenas para apartamentos.',
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const botResponse = getBotResponse(input);
    setMessages([...messages, userMessage, botResponse]);

    setInput('');
    setSuggestions([]);
  };

  const handleClear = () => {
    setMessages([]);
    setInput('');
    setSuggestions([]);
  };

  const getBotResponse = (message) => {
    const responseText = responses[message.toLowerCase()] || 'Lo siento, no entiendo la pregunta. ¿Puedes reformularla?';
    return { sender: 'bot', text: responseText };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const possibleSuggestions = Object.keys(responses).filter((key) =>
      key.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(possibleSuggestions);
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={styles.input}
          placeholder="Escribe tu mensaje... (Ej: ¿qué comida es buena para perros?)"
        />
        <button onClick={handleSend} style={styles.sendButton}>Enviar</button>
        <button onClick={handleClear} style={styles.clearButton}>Borrar</button>
      </div>
      {suggestions.length > 0 && (
        <div style={styles.suggestionsContainer}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              style={styles.suggestion}
              onClick={() => {
                setInput(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '350px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    border: '2px solid #1E90FF',
  },
  chatWindow: {
    maxHeight: '450px',
    overflowY: 'auto',
    padding: '15px',
    backgroundColor: '#fff',
  },
  userMessage: {
    textAlign: 'right',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#1E90FF',
    color: 'white',
    borderRadius: '12px',
  },
  botMessage: {
    textAlign: 'left',
    padding: '10px',
    margin: '5px',
    backgroundColor: '#e0e0e0',
    color: '#333',
    borderRadius: '12px',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ddd',
    backgroundColor: '#f1f1f1',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    outline: 'none',
  },
  sendButton: {
    padding: '10px',
    backgroundColor: '#1E90FF',
    color: 'white',
    border: 'none',
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    cursor: 'pointer',
  },
  clearButton: {
    padding: '10px',
    backgroundColor: '#FF6347',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    marginLeft: '5px',
  },
  suggestionsContainer: {
    position: 'absolute',
    bottom: '60px',
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },
  suggestion: {
    padding: '10px',
    cursor: 'pointer',
  },
};

export default Chatbot;
