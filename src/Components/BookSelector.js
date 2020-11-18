import React, { useState } from 'react';

const BookSelector = ({shelf,onShelfChange,book})=>{
    const [Shelf,setShelf]=useState(shelf);
    const handleChange=(e)=>{
        setShelf(e.target.value);
        onShelfChange(book,e.target.value);
    }
    
    return (
        <div className="book-shelf-changer">
                <select value = {Shelf} onChange={handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
        </div>


    );
}
export default BookSelector;