import { createSignal } from "solid-js";

type Book = {
    title: string;
    author: string;
}

const initialBooks: Book[] = [
    { title: "Code Complete", author: "Steve McConnell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Living a Feminist Life", author: "Sarah Ahmed" },
]

export function BookList() {
    const [books, setBooks] = createSignal(initialBooks)

    return (
        <ul>
            <li>
                {books()[0].title}{" "}
                <span style={{ "font-style": "italic"}}>(Steve McConnell</span>
            </li>
            <li>
                {books()[1].title}{" "}
                <span style={{"font-style": "italic"}}>(J.R.R Tolkien)</span>
            </li>
        </ul>
    )
}