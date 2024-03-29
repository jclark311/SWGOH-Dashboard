import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './containers/Header/Header.js';
import Main from './containers/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Main />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
