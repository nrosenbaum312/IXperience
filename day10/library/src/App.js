import React, {useState, useEffect} from 'react';

import logo from './logo.svg';

import './App.css';



// import bootstrap styling from node_modules
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';    

import {Book} from './models/Book';

import BookService from "./services/library.service";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LibraryPage from './components/libraryPage/LibraryPage';
import Register from './components/auth/Register';
import Login from "./components/auth/Login";
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/common/Navbar';
import {auth} from "./firebase/firebase";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
    <Navbar user = {user}/>
    <Routes>
      <Route path="/" element = {<LibraryPage/>} ></Route>
      <Route path="/login" element = {<Login/>} ></Route>
      <Route path="/register" element = {<Register/>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
