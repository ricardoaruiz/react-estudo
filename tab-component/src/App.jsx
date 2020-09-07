import './App.css';

import React, { useEffect } from 'react';

import { Tab, Tabs } from './component';

const Tab1Content = () => {
  useEffect(() => {
    console.log('Criando o Tab1Content');

    return () => {
      console.log('Removendo o Tab1Content');
    };
  });

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" />
      </div>
      <div>
        <label htmlFor="email1">E-mail</label>
        <input type="email" id="email1" />
      </div>
      <button type="button">Send</button>
    </div>
  );
};

const Tab2Content = () => {
  useEffect(() => {
    console.log('Criando o Tab2Content');

    return () => {
      console.log('Removendo o Tab2Content');
    };
  });

  return (
    <div>
      <div>
        <label htmlFor="email2">E-mail</label>
        <input type="email" id="email2" />
      </div>
      <button type="button">Send</button>
    </div>
  );
};

const App = () => (
  <div className="main">
    <Tabs>
      <Tab title="National">
        <Tab1Content />
      </Tab>
      <Tab title="International">
        <Tab2Content />
      </Tab>
      <Tab title="Disabled tab" disabled>
        <div>
          <button type="button">Tab 03 Button</button>
        </div>
      </Tab>
    </Tabs>
  </div>
);

export default App;
