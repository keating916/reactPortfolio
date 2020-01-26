import React from "react";

function Form() {
    return(
        <section id="contact">
        <form id="survey_form" action="/" method="POST" name="EmailForm">
        <div>
          <label className="labels" for="name" id="name-label">Name</label>
          <input className = "input" type="textbox" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div>
          <label className="labels" id="email-label" for="email">Email</label>
          <input className = "input" type="email" id="email" name="email" placeholder="Enter your Email Address" required />
        </div>
        <div>
          <label className="labels" id="number-label" for="number">Estimated Length of meeting (minutes)</label>
          <input className = "input" type="number" min="1" max="60" id="number" name="number" placeholder="30" required />
        </div>
        <div id= "time-selector">
          <p className="labels dropdown" >Preferred Day</p>
          <p className="labels dropdown" id="dropdown2">Preferred Time of Day</p>
          <select name="day" className="dropdown" id="dropdown">
            <option selected value="any">Any</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value= "thursday">Thursday</option>
            <option value= "friday">Friday</option>
            <option value= "saturday">Saturday</option>
          </select>
          <select className="dropdown" name="TOD">
            <option default value = "any" selected>Any</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div>
          <p className="labels">What type of employment/Project?</p>
          <div className="radios">
            <div><label className="radioLabel" for="personal">Personal Project</label>
            <input className="radio" type="radio" name="employment" id="personal" value="personal" />
          </div>
          <div>
            <label className="radioLabel" for="part-time">Part-Time</label>
            <input className="radio" type="radio" name="employment" value="part-time" id="part-time" />
          </div>
          <div>
            <label className="radioLabel" for="full-time">Full-Time</label>
            <input className="radio" type="radio" name="employment" value="full-time" id="full-time" />
          </div>
          </div>
        </div>
        <div>
          <p className="labels">What technologies will be used?</p>
          <div className="checks" name="languages">
            <div><input type="checkbox" value="html" /><label className ="check" for="html">HTML</label></div>
            <div><input type="checkbox" value="css" /><label className ="check" for="css">CSS</label></div>
            <div><input type="checkbox" value="js" /><label className ="check" for="js">Vanilla JavaScript</label></div>
            <div><input type="checkbox" value="react" /><label className ="check" for="react">React</label></div>
            <div><input type="checkbox" value="vue.js" /><label className ="check" for="vue.js">Vue.js</label></div>
            <div><input type="checkbox" value="python" /><label className ="check" for="python">Python</label></div>
            <div><label className ="check" for="ruby">Ruby</label><input type="checkbox" value="ruby" /></div>
          </div>
        </div>
        <div>
          <label className="labels" id="comments-label" for="comments">Any additional comments?</label>
          <textarea className = "input" type="textbox" id="comments" name="comments"></textarea>
        </div>
        <div>
          <button type="submit" id="submit">Submit</button>
        </div>
    </form>
  </section>
    )
}

export default Form;