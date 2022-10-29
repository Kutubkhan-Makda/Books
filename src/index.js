import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './Layout';
import Books from './Books'
import BooksID from './BooksID';
import Payment from './Payment';
import AddBook from './AddBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Books/>}></Route>
        <Route path='/Books' element={<Books/>}></Route>
        <Route path='/AddBook' element={<AddBook/>}></Route>
        <Route path='/Update/:id' element={<AddBook/>}></Route>
        <Route path='/BooksID/:id' element={<BooksID/>}></Route>
        <Route path='/Payment/:id' element={<Payment/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);
