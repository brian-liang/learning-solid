import type { Component } from 'solid-js';


import logo from './logo.svg';
import styles from './App.module.css';
import HelloWorld from './components/HelloWorld';
import { AddBook } from './components/AddBook';
import { BookList } from './components/BookList';

const App: Component = () => {

  return (
    <>
        <h1>My Bookshelf</h1>
        <BookList/>
        <AddBook/>
    </>
  );
};

export default App;
