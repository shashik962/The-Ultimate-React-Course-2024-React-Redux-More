import React from 'react';
import ReactDOM from 'react-dom/client';
import StarReating from './StarRating';
// import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarReating maxRating={5}/>
  </React.StrictMode>
);
