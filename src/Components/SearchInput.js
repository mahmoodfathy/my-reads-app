import React, {  useState } from 'react';

const SearchInput =({onSearch})=>{
  const [searchTerm,setSearchTerm]=useState("");
  console.log(searchTerm);
  
  const handleChange=(e)=>{
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
    
  }

    return (
        <div className="search-books-input-wrapper">
       
        <input value={searchTerm} onChange={handleChange} type="text" placeholder="Search by title" />
      </div>
    );
}
export default SearchInput;