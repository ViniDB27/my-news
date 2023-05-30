import React, { useState } from 'react';

const Reader = () => {

  const [speaking, setSpeaking] = useState<boolean>(false);

  const speakText = () => {
    const text = document.body.innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'pt-BR'; // Defina o idioma conforme necessário
    speech.rate = .85;
    window.speechSynthesis.speak(speech);
    setSpeaking(true);

  };

  const stopSpeakText = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div>
      <button
        onClick={speaking ? stopSpeakText : speakText}
        style={{ position: "fixed", right: 0, top: '50%', zIndex: 999 }}
      >{speaking ? <i className="bi bi-volume-mute-fill"></i> : <i className="bi bi-volume-up-fill"></i>}</button>
    </div>
  );
};

export default Reader;