import React from 'react';
const certs = [["Responsive Web Design", 'FreeCodeCamp'], ["Javascript Algorithms and Data Structures", "FreeCodeCamp"], ["SEO Fundamentals", "SemRush"], ["Technical SEO Exam", "SemRush"]];
const facts = ["I really like Programming in almost any language", "I learn really really fast. Like really fast", "I like beer", "I wrote this page from scratch!"];

function Header() {
    return (
        <header id="welcome-section">
            <br id="top">
            <h1 >Hi! I'm <givenName>Patrick</givenName> <familyName>Keating</familyName></h1>
            <h2>I'm a Web Developer</h2><br>
            <p>
              I have been studying programming since December 2018, and I have been devouring material as fast as humanly possible. I started out with the basics of Python, as everything I read said that was the easiest to get started with. Then my current employer needed help with his website, so I dove into HTML/CSS/JS, and I haven't come back up for air!
            </p>
            <p>
              I have completed the equivilent of 600 hours of curriculum from <a href="https://www.freecodecamp.org">FreeCodeCamp</a> and have loved every minute of it. I have read books on Node.Js and Express server setup, and I am simultaneously going through <a target="_new" href="https://www.theodinproject.com/">The Odin Project</a>.
            </p>
            <h3>Current Certifications</h3>
            <div id="cert-div"class="toplistdiv">
              <ul id="certs"class="topItems">
                
              </ul>
            </div>
            <br>
            <h3>Some quick facts about me:</h3>
            <div id="list-div" class="toplistdiv">
              <ul id="facts" class="topItems">

              </ul>
            </div>
          </header>
    )
}
        