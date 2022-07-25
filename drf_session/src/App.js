import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import WritePost from './WritePost';
import Login from './Login';
import Home from './Home';
import Borad from "./Borad";
import PostView from './PostView';
import items from "./mockup.json";
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
            <Route path="/board" element={<Borad items={items}/>} /> 
            <Route path="/postview/:id" element={<PostView />} />         
          
          
        </Routes>

        
     
      <Footer/>
      
    </div>
  );
}

export default App;
