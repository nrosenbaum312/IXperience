import React, {useState} from 'react';

import logo from './logo.svg';

import './App.css';
import Inputs from "./components/Inputs";
import Table from "./components/Table";

// import bootstrap styling from node_modules
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';

import {Book} from './models/Book';

function App() {

  const [books, setBooks] = useState([]);

  function onBookCreate(title, author, isbn) {
    const book = new Book(title, author, isbn)

    setBooks([...books, book]);
  }

  function onBookRemove(isbn){
    setBooks(books.filter((book) => book.isbn !== isbn));
  }


  return (
    <div className = "container my-4"> 
        < div className="card card-body text-center App">

        <h1>Add Book</h1>
        
        <Inputs onBookCreate={onBookCreate}/>
        <Table onBookRemove = {onBookRemove} books ={books}/>
        </div>
    </div>
  );
}

export default App;
