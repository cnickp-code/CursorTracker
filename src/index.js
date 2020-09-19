import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MainContextProvider } from './contexts/MainContext';

ReactDOM.render(
  <BrowserRouter>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

