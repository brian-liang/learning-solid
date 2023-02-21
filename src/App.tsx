import { Component, createSignal, Show } from 'solid-js';


import logo from './logo.svg';
import styles from './App.module.css';
import HelloWorld from './components/HelloWorld';
import { AddBook } from './components/AddBook';
import { BookList } from './components/BookList';
import { Counter } from './components/Counter';

export type Book = {
    title: string;
    author: string;
}

const initialBooks: Book[] = [
    { title: "Code Complete", author: "Steve McConnell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Living a Feminist Life", author: "Sarah Ahmed" },
]
interface BookshelfProps{
    name: string
}
function Bookshelf(props: BookshelfProps){
    const [books, setBooks] = createSignal(initialBooks)
    const [showForm, setShowForum] = createSignal(false)

    const toggleForm = () => {
        setShowForum(!showForm())
    }

    return(
        <div>
            <h1>{props.name}'s' Bookshelf</h1>
            <BookList books={books()}/>
            <Show
                when={showForm()}
                fallback={<button onClick={toggleForm}>Add a book</button>}
            >
                <AddBook setBooks={setBooks}/>
            </Show>
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
