import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import WritePost from './WritePost';
import React from 'react';
import { GlobalStyles } from './styles';
import { MediaDiv } from './styledComponent';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <MediaDiv>
        <WritePost/>

        
      </MediaDiv>
      <Footer/>
      
    </div>
  );
}

export default App;
