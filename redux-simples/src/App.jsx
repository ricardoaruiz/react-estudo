import React from 'react';

import style from './App.module.scss';
import Average from './components/Average';
import Draw from './components/Draw';
import Interval from './components/Interval';
import Sum from './components/Sum';

function App() {
  return (
    <div className={style.app}>
      <h1>Exercício React-Redux (Simples)</h1>
      <div className={style.line}>
        <Interval />
      </div>
      <div className={style.line}>
        <Average />
        <Sum />
        <Draw />
      </div>
    </div>
  );
}

export default App;
