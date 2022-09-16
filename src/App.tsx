import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";
import {Home} from "./components/Home";
import {Navbar} from "./components/Navbar";
import {Cart} from "./components/Cart";
import {ImagesPreview} from "./components/ImagesPreview";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <ImagesPreview/>
    <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
