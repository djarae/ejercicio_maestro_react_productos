import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
ReactDOM.render(
    <App></App>   ,   
  document.getElementById('root')
);
reportWebVitals(sendToVercelAnalytics);
