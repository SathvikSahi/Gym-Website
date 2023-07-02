import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import App from './App';

import RefProvider from './context/RefContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RefProvider>
      <App />
    </RefProvider>
  </React.StrictMode>
);