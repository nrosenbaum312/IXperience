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
import RequireAuth from './components/common/RequireAuth';
import Spinner from './components/common/Spinner';

function App() {

  const [user, setUser] = useState(null);
   const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsUserUpdated(true);
    });
  }, []);

  return (
    
    <BrowserRouter>
    <Navbar user = {user}/>
   { isUserUpdated ?
    <Routes>
      <Route path="/" element = {<RequireAuth user={user}>
          <LibraryPage/>
        </RequireAuth>
      }/>
      <Route path="/login" element = {<Login/>} ></Route>
      <Route path="/register" element = {<Register/>} ></Route>
    </Routes>
    : 
    <div className='mt-3 text-center'>
            <Spinner />
          </div>
    }

    </BrowserRouter>
  );
}

export default App;
