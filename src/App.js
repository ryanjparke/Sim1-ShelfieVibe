import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/landing/Header.js';
import ShelfA from '../src/components/landing/ShelfA.js';
import router from './router.js';
import Bin1 from './components/bins/Bin1';




class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      
      {router}


      </div>
    );
  }
}



export default App;
