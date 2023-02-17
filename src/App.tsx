import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import HelloWorld from './components/HelloWorld';

const App: Component = () => {

  return (
    <div>
        <h1>Welcome</h1>
        <HelloWorld/>
    </div>
  );
};

export default App;
