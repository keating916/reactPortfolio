import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Form from './Form';


ReactDOM.render(<Nav />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById("about-me"));
ReactDOM.render(<Form />, document.getElementById('contact-form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
