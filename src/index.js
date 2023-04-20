import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from './store/product-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProductsContextProvider>
);

