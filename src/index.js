import React from 'react';
import ReactDOM from 'react-dom';
import Login from './views/login';
import * as serviceWorker from './serviceWorker';
import 'sanitize.css/sanitize.css';
import './global-styles';
import '../src/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
