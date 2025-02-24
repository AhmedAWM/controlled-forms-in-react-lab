import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    function handleInputChange(event) {
        const { name, value } = event.target;

        // Set the attributes dynamically
        setNewBook((b) => ({ ...b, [name]: value }));

    }

    function handleSubmit(event) {
        // Prevent the page from reloading
        event.preventDefault();

        // Adding new book
        if (newBook.title && newBook.author) {
            // Add new book
            setBooks(b => [...b, newBook]);

            // Reset input fields
            setNewBook({ title: "", author: "" });
        }
    }

    return (
        <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    value={newBook.title}
                    onChange={handleInputChange}
                />
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={handleInputChange}
                />
                <button type="submit" onClick={ handleSubmit }>Add Book</button>
            </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => (
                <div key={ index } className="bookCard">
                    <h4>{ book.title }</h4>
                    <p>{ book.author }</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Bookshelf;