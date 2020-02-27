import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav id="navbar">
        <ul id="nav"> 
          <li className= "navItem"><a href="#projectDiv">Projects</a></li>
          <li className= "navItem"><a href="#formDiv">Contact</a></li>
          <li className= "navItem"><a href="#topDiv">Top</a></li>
          <li className= "navItem" ><a id="profile-link" href="https://github.com/keating916/" target="_blank">Github</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
