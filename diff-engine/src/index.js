import React from 'react';
import ReactDOM from 'react-dom/client';
import Offline from './Components/Offline';
import './index.css';
import App from './App';
import { ViewProvider } from './Components/Context/view.context';
// import reportWebVitals from './reportWebVitals';
import { register as registerServiceWorker } from './serviceWorkerRegistration';
// import { HashRouter, BrowserRouter } from 'react-router-dom';
// const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewProvider>
      <Offline>
        {/* <Router> */}
          <App />
        {/* </Router> */}
      </Offline>
    </ViewProvider>
  </React.StrictMode>
);
// reportWebVitals();
registerServiceWorker()