import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import HelloWorld from './components/HelloWorld';

const App: Component = () => {

  return (
    <>
        <h1>Welcome</h1>
        <HelloWorld/>
    </>
  );
};

export default App;
