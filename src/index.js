import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/App.css' // 应用的通用样式
import App from './app/App'; // 引入 App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);