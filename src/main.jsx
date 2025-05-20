// src/main.jsx (More standard Vite version)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Typically import the whole ReactDOM
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);