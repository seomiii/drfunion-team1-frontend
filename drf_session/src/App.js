import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import WritePost from './WritePost';
import Login from './Login';
import Home from './Home';
import React from 'react';
import { GlobalStyles } from './styles';
import { MediaDiv } from './styledComponent';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      
        <Routes>          
            <Route exact path='/' element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>          
      
            <Route path="/write" element={<WritePost/>}/>
          
          
        </Routes>

        
     
      <Footer/>
      
    </div>
  );
}

export default App;
