import React, { useState, useMemo } from 'react';

import style from './App.module.scss';
import SampleCustomHook from './components/SampleCustomHook';
import SampleUseEffect from './components/SampleUseEffect';
import SampleUseEffectWithClean from './components/SampleUseEffectWithClean';
import SampleUseReducer from './components/SampleUseReducer';
import SampleUseState from './components/SampleUseState';
import SampleUseStateAdvanced from './components/SampleUseStateAdvanced';
import SampleUseCallback from './components/SampleUseCallback';
import SampleUseMemo from './components/SampleUseMemo';
import { ReactComponent as Logo } from './logo.svg';

function App() {
  const [useStateVisible, setUseStateVisible] = useState(true);
  const [useStateAdvancedVisible, setUseStateAdvancedVisible] = useState(true);
  const [useEffectVisible, setUseEffectVisible] = useState(true);
  const [useEffectWithCleanVisible, setUseEffectWithCleanVisible] = useState(
    true,
  );
  const [useCustomHookVisible, setCustomHookVisible] = useState(true);
  const [useReducerVisible, setUseReducerVisible] = useState(true);
  const [useCallbackVisible, setUseCallbackVisible] = useState(true);

  const memoizedSampleUseState = useMemo(
    () => useStateVisible && <SampleUseState />, [useStateVisible],
  );

  const memoizedSampleUseStateAdvanced = useMemo(
    () => useStateAdvancedVisible && <SampleUseStateAdvanced />, [useStateAdvancedVisible],
  );

  const memoizedSampleEffect = useMemo(
    () => useEffectVisible && <SampleUseEffect />, [useEffectVisible],
  );

  const memoizedSampleUseEffectWithClean = useMemo(
    () => useEffectWithCleanVisible && <SampleUseEffectWithClean />, [useEffectWithCleanVisible],
  );

  const memoizedSampleCustomHook = useMemo(
    () => useCustomHookVisible && <SampleCustomHook />, [useCustomHookVisible],
  );

  const memoizedSampleUseReducer = useMemo(
    () => useReducerVisible && <SampleUseReducer />, [useReducerVisible],
  );

  const memoizedSampleUseCallback = useMemo(
    () => useCallbackVisible && <SampleUseCallback />, [useCallbackVisible],
  );

  return (
    <div className={style.App}>
      <header className={style['App-header']}>
        <Logo className={style['App-logo']} />
        <p>React Hooks</p>
      </header>

      <div className={style['App-sample']}>
        <h3>Sample useState basic</h3>

        {memoizedSampleUseState}

        <div className={style.actions}>
          <button
            type="button"
            onClick={() => setUseStateVisible(!useStateVisible)}
          >
            {useStateVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use State
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample useState advanced</h3>

        {memoizedSampleUseStateAdvanced}

        <div className={style.actions}>
          <button
            type="button"
            onClick={() => setUseStateAdvancedVisible(!useStateAdvancedVisible)}
          >
            {useStateAdvancedVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use State
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample useEffect</h3>

        {memoizedSampleEffect}

        <div className={style.actions}>
          <button
            type="button"
            onClick={() => setUseEffectVisible(!useEffectVisible)}
          >
            {useEffectVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Effect
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample useEffect With Clean</h3>

        {memoizedSampleUseEffectWithClean}

        <div className={style.actions}>
          <button
            type="button"
            onClick={() => setUseEffectWithCleanVisible(!useEffectWithCleanVisible)}
          >
            {useEffectWithCleanVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use
            Effect With Clean
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample custom hook</h3>

        {memoizedSampleCustomHook}

        <div className={style.actions}>
          <button
            type="button"
            onClick={() => setCustomHookVisible(!useCustomHookVisible)}
          >
            {useCustomHookVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Custom
            Hooks
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample Use Reducer</h3>

        {memoizedSampleUseReducer}

        <div className={style.actions}>
          <button
            type="button"
            onClick={() => setUseReducerVisible(!useReducerVisible)}
          >
            {useReducerVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Reducer
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample Use Callback</h3>

        {memoizedSampleUseCallback}

        <div className={style.actions}>
          <button
            type="button"
            onClick={() => setUseCallbackVisible(!useCallbackVisible)}
          >
            {useCallbackVisible ? 'Esconder' : 'Mostrar'}
            {' '}
            Sample Use Callback
          </button>
        </div>
      </div>

      <div className={style['App-sample']}>
        <h3>Sample Use Memo</h3>
        <SampleUseMemo />
        <div className={style.actions} />
      </div>
    </div>
  );
}

export default App;
