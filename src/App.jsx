import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import NavBar from './components/navBar';
import Snackbar from './components/snackBar';
import Cart from './components/cart';
import { useDispatch } from 'react-redux';
import { addFilteredProducts, addProducts, addSearchedProducts, isLoading } from './redux/reducer';
import ErrorPage from './components/errorPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(' https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(({ data }) => {
        dispatch(addProducts(data));
        dispatch(addSearchedProducts(data));
        dispatch(addFilteredProducts(data));
        // setTimeout(() => {
        dispatch(isLoading(false));
        // }, 3000);
      })
      .catch(() => {
        dispatch(isLoading(false));
      });

    return () => {};
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Snackbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
