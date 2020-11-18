import React from 'react';
import SearchButton from './SearchButton';
import Library from './Library';
const BookList = ({bookshelves,books,onShelfChange})=>{

    return (

        <div className="list-books">
        <div className="list-books-title">
          <h1>Library</h1>
        </div>
        <Library onShelfChange={onShelfChange} books={books} bookshelves={bookshelves} />
        <SearchButton />
      </div>
    );

}
export default BookList;