import React, { useState } from "react";
import { FaVolumeUp, FaStop } from "react-icons/fa";

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text) => {
    if (!window.speechSynthesis) {
      alert("Tu navegador no soporta la API de síntesis de voz.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const cancelSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button
        onClick={() => speak(text)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1E90FF',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#1C86EE';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#1E90FF';
          e.target.style.transform = 'scale(1)';
        }}
      >
        <FaVolumeUp />
        Leer texto
      </button>
      {isSpeaking && (
        <button
          onClick={cancelSpeech}
          style={{
            padding: '10px 20px',
            backgroundColor: '#FF4500',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#FF6347';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#FF4500';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <FaStop />
          Cancelar
        </button>
      )}
    </div>
  );
};

export default TextToSpeech;
