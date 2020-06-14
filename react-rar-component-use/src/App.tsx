import React from 'react';
import './App.scss';
import { Button } from 'react-rar-component';

function App() {

  const handleButtonClick = () => {
    alert('Botão clicado');
  }

  return (
    <div className="App">
      <Button label="Cliqui aqui" success onClick={handleButtonClick}/>
    </div>
  );
}

export default App;
