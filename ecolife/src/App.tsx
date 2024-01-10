import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Brownie from './Food/Brownie';
import Cokiee from './Food/Cokiee';
import Porridge from './Food/Porridge';
import Steak from './Food/Steak';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/header' element={<Header />} />
        <Route path='/' element={<Main />}/>
        <Route path='/brownie' element={<Brownie />}/>
        <Route path='/cokiee' element={<Cokiee />}/>
        <Route path='/porridge' element={<Porridge />}/>
        <Route path='/steak' element={<Steak />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
