import React from 'react';
import './App.css';
import { MyButton, MyButtonType } from './components/my-button/my-button';

function App() {

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('o botão foi clicado clicado', event);
  };

  return (
    <div className="App">
      <MyButton onClick={handleButtonClick} category={MyButtonType.PRIMARY}>
        Clique aqui
      </MyButton>
      <MyButton label="Clique aqui" onClick={handleButtonClick} category={MyButtonType.SUCCESS} />
      <MyButton label="Clique aqui" onClick={handleButtonClick} category={MyButtonType.DANGER} />
      <MyButton label="Clique aqui" onClick={handleButtonClick} category={MyButtonType.WARN} />
      <MyButton label="Clique aqui" onClick={handleButtonClick} category={MyButtonType.WARN} disable />
    </div>
  );
}

export default App;
