import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './router';
import { AliveScope } from 'react-activation'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AliveScope>
    <App />
  </AliveScope>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
