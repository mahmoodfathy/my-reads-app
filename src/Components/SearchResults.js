import React from 'react';
import Books from './Books';

const SearchResults = ({searchedBooks,books,onShelfChange})=>{
    const updatedBooks = searchedBooks.map(book => {
        books.map(b => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
          return b;
        });
        return book;
      });

return (

    <div className="search-books-results">
        <ol className="books-grid">
            {updatedBooks.map(book=>{
                return(

                    <Books 
                    key={book.id} 
                    books={book} 
                    shelf={book.shelf ? book.shelf: 'none'}
                    onShelfChange={onShelfChange}
                     />      
                );
            })}
            
        </ol>
    </div>
);

}
export default SearchResults;