import React from 'react';
import BookShelf from './Bookshelf';

const Library = ({bookshelves,books,onShelfChange})=>{

    return (
        <div className="list-books-content">
              <div>
                {bookshelves.map((shelf)=>{
                    return (
                        <BookShelf onShelfChange={onShelfChange} key={shelf.key} books={books} shelf={shelf} />
                    );
                })}
              </div>
        </div>
    );
}
export default Library;