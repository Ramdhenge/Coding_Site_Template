import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <>
      <div className='blockphone'>
        <App />
      </div>
      <h2 className='showInPhone'>Bola tha responsive nahi hai</h2>
      <h4 className='showInPhone'>Jaa Laptop/Desktop me open kr</h4>
    </>
  </BrowserRouter>
);
