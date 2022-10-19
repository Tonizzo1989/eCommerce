import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/cart' exact>
        <Cart/>
      </Route>
    </div>
   </BrowserRouter>
  );
}

export default App;
