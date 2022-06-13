import React, {useState, useEffect} from 'react';

import {Book} from "../../models/Book";
import Inputs from "../Inputs";
import Table from "../Table";

import BookService from "../../services/library.service";

export default function LibraryPage() {
    const [books, setBooks] = useState([]);

  useEffect(()=>{
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad(){
    const books = await BookService.fetchBooks();
    setBooks(books);
  }

  async function onBookCreate(title, author, isbn) {
    const book = await BookService.createBook(new Book(title, author, isbn, null));

    setBooks([...books, book]);
    console.log(book.id);
  }

  async function onBookRemove(bookId){
    console.log("test 1");
    await BookService.deleteBook(bookId);
    console.log("test 2");
    setBooks(books.filter((book) => book.id !== bookId));
    console.log("test 3");
  }
  return (
    <div className = "container my-4"> 
        < div className="card card-body text-center App">

        <h1>Add Book</h1>
        
        <Inputs onBookCreate={onBookCreate}/>
        <Table onBookRemove = {onBookRemove} books ={books}/>
        </div>
    </div>
  )
}
