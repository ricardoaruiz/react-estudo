import React, { useState } from 'react';

import style from './App.module.scss';
import SampleCustomHook from './components/SampleCustomHook';
import SampleUseEffect from './components/SampleUseEffect';
import SampleUseEffectWithClean from './components/SampleUseEffectWithClean';
import SampleUseReducer from './components/SampleUseReducer';
import SampleUseState from './components/SampleUseState';
import SampleUseStateAdvanced from './components/SampleUseStateAdvanced';
import { ReactComponent as Logo } from './logo.svg';


function App() {
  const [useStateVisible, setUseStateVisible] = useState(true);
  const [useStateAdvancedVisible, setUseStateAdvancedVisible] = useState(true);
  const [useEffectVisible, setUseEffectVisible] = useState(true);
  const [useEffectWithCleanVisible, setUseEffectWithCleanVisible] = useState(true);
  const [useCustomHookVisible, setCustomHookVisible] = useState(true);
  const [useReducerVisible, setUseReducerVisible] = useState(true);

  return (
    <div className={style.App}>
      <header className={style['App-header']}>
        <Logo className={style['App-logo']} />
        <p>
          React Hooks
        </p>
      </header>

      <div className={style['App-sample']}>
        <h3>Sample useState basic</h3>

        {useStateVisible && <SampleUseState />}

        <div className={style.actions}>
          <button type="button" onClick={() => setUseStateVisible(!useStateVisible)}>
            {useStateVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use State
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample useState advanced</h3>

        {useStateAdvancedVisible && <SampleUseStateAdvanced />}

        <div className={style.actions}>
          <button type="button" onClick={() => setUseStateAdvancedVisible(!useStateAdvancedVisible)}>
            {useStateAdvancedVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use State
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample useEffect</h3>

        {useEffectVisible && <SampleUseEffect />}

        <div className={style.actions}>
          <button type="button" onClick={() => setUseEffectVisible(!useEffectVisible)}>
            {useEffectVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Effect
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample useEffect With Clean</h3>

        {useEffectWithCleanVisible && <SampleUseEffectWithClean />}

        <div className={style.actions}>
          <button type="button" onClick={() => setUseEffectWithCleanVisible(!useEffectWithCleanVisible)}>
            {useEffectWithCleanVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Effect With Clean
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample custom hook</h3>

        {useCustomHookVisible && <SampleCustomHook />}

        <div className={style.actions}>
          <button type="button" onClick={() => setCustomHookVisible(!useCustomHookVisible)}>
            {useCustomHookVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Custom Hooks
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample Use Reducer</h3>

        {useReducerVisible && <SampleUseReducer />}

        <div className={style.actions}>
          <button type="button" onClick={() => setUseReducerVisible(!useReducerVisible)}>
            {useReducerVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Reducer
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
