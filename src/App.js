import React ,{useEffect, useState} from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'

import {Route,BrowserRouter as Router} from 'react-router-dom';
import BookList from './Components/BooksList';
import Search from './Components/Search';

const App =  ()=>{
  const bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
    
  ];
  const [books,setBooks]=useState([]);
  console.log(books);
  const [searchedBooks,setSearchedBooks]=useState([]);
  console.log(searchedBooks);
  const reset = ()=>{
   setSearchedBooks([]);
  }
  const searchBooks = (query)=>{
    BooksAPI.search(query).then((res)=>{
      if(query.length>0){

     
      if(res.error!==undefined){
        setSearchedBooks([]);
      }else{
        setSearchedBooks(res);
      }
    }else{
      setSearchedBooks([]);
    }
    });
  };
  const changeShelf = (book,shelf)=>{
    BooksAPI.update(book,shelf);
    if(shelf==='none'){
      const newBooks =[...books];
      setBooks(newBooks.filter(b => b.id !== book.id));
    }else{
      const newBooks =[...books];
      book.shelf=shelf;
      setBooks(newBooks.filter(b => b.id !== book.id).concat(book));
    }
  }
  
  useEffect(()=>{
  
     BooksAPI.getAll().then((books)=>{
      console.log(books);
      setBooks(books);
     });
    
    
    
  },[]);
  
  

  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <BookList onShelfChange={changeShelf} books={books} bookshelves={bookshelves} />
        </Route>
        <Route exact path="/search">
          <Search onReset={reset} onShelfChange={changeShelf} searchedBooks={searchedBooks} books={books} onSearch={searchBooks} />
        </Route>
      </Router>
    </div>
  );
}
  

export default App;
