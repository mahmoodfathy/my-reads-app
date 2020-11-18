import React from 'react';
import Books from './Books'

const BookShelf = ({shelf,books,onShelfChange})=>{
    const orderBooksByShelf = books.filter(book=> book.shelf===shelf.key);
   
    return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {orderBooksByShelf.map(book=>{
                   return <Books key={book.id} onShelfChange={onShelfChange} shelf={shelf.key}  books={book}  />;
              })}
        
            </ol>

        </div>
    </div>
    );
}
export default BookShelf;