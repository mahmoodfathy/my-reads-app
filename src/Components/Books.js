import React from 'react';
import BookSelector from './BookSelector';


const Books= ({books,shelf,onShelfChange})=>{
  console.log(shelf);
 
    return (
      <li  >
        <div  className="book">
              <div  className="book-top">
                <div   className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${  books.imageLinks? books.imageLinks.thumbnail:'icons/book-placeholder.svg'})` }}></div>
               <BookSelector book={books} onShelfChange={onShelfChange}  shelf={shelf} />
              </div>
    <div  className="book-title">{books.title}</div>
              <div   className="book-authors">{books.authors}</div>
            </div>
            </li>
    );
}
export default Books;