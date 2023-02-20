import type { Component } from 'solid-js';


import logo from './logo.svg';
import styles from './App.module.css';
import HelloWorld from './components/HelloWorld';
import { AddBook } from './components/AddBook';
import { BookList } from './components/BookList';
import { Counter } from './components/Counter';

interface BookshelfProps{
    name: string
}
function Bookshelf(props: BookshelfProps){
    return(
        <div>
            <h1>My Bookshelf</h1>
            <BookList/>
            <AddBook/>
        </div>
    )
}
const App: Component = () => {
  return (
    <>
        <Bookshelf name="solid"/>
    </>
  );
};

export default App;
