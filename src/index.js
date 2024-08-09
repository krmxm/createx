import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/style.scss';


import App from './components/app/App';

// import './style/_variables.module.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
