import React from 'react';
import './App.css';
import resume from "./assets/Patrick-KeatingIndeed.pdf";

function Nav() {
  return (
    <nav id="navbar">
        <ul id="nav"> 
          <li className= "navItem"><a href="#projectDiv">Projects</a></li>
          <li className= "navItem"><a href="#formDiv">Contact</a></li>
          <li className= "navItem"><a href="#topDiv">Top</a></li>
          <li className= "navItem" ><a id="profile-link" href="https://github.com/keating916/" target="_blank">Github</a></li>
          <li className="navItem"><a id="resume" href={resume} targer="_blank">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
