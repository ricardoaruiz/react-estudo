import React from 'react';
import './App.css';
import { Tabs, Tab } from './component';

function App() {
  return (
    <div className="main">
      <Tabs>
        <Tab title="National">
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="name" id="name" />
            </div>
            <div>
              <label htmlFor="email1">E-mail</label>
              <input type="email" id="email1" />
            </div>
            <button>Send</button>
          </div>
        </Tab>
        <Tab title="International">
          <div>
            <div>
              <label htmlFor="email2">E-mail</label>
              <input type="email" id="email2" />
            </div>
            <button>Send</button>
          </div>
        </Tab>
        <Tab title="Disabled tab" disabled>
          <div>
            <button>Tab 03 Button</button>
          </div>
        </Tab>
        <Tab title="Tab 4">
          <div>
            <button>Tab 04 Button</button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
