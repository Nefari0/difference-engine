import React from 'react';
import ReactDOM from 'react-dom/client';
import Offline from './Components/Offline';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter } from 'react-router-dom';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Offline>
      <Router>
        <App />
      </Router>
    </Offline>
  </React.StrictMode>
);
reportWebVitals();
