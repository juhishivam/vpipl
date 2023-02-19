import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,HashRouter } from 'react-router-dom';
// import {hashHistory} from 'react-router-hash-history'

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import GotoTop from './MyComponents/GotoTop'
ReactDOM.render(
  <>
    <BrowserRouter >
    <GotoTop>
      <App />
      </GotoTop>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
