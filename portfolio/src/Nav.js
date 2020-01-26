import React from 'react';
import logo from './logo.svg';
import './App.css';

function Nav() {
  return (
    <nav id="navbar">
        <ul id="nav"> 
          <li className= "navItem"><a href="#projects">Projects</a></li>
          <li className= "navItem"><a href="#contact">Contact</a></li>
          <li className= "navItem"><a href="#top">Top</a></li>
          <li className= "navItem" ><a id="profile-link" href="https://github.com/keating916/" target="_blank">Github</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
