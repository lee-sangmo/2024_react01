import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from './components/step03/CommentList';
import Welcom from './components/step03/Welcom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <App2 /> */}
    {/* <CommentList /> */}
    {/* <Welcom name='hong'/> */}
    {/* <Welcom name='park'/> */}
  </React.StrictMode>
);

reportWebVitals();
