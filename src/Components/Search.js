import React from 'react';
import CloseSearchButton from './CloseSearchButton';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const Search = ({onSearch,searchedBooks,books,onShelfChange,onReset})=>{
   
    return (
    <div className="search-books-bar">
        <CloseSearchButton onReset={onReset} />
        <SearchInput onSearch={onSearch} />
        <SearchResults
          searchedBooks={searchedBooks}
          books={books}
          onShelfChange={onShelfChange}
        />
    </div>
    );
}
export default Search;