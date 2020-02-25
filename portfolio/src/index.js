import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/calc.css'
import Nav from './Nav';
import Calculator from './projects/reactCalc';
import Goog from './projects/googReact'
import Etch from './projects/etchReact'
import RPS from './projects/rpsReact'
import * as serviceWorker from './serviceWorker';
import Header from './Header';
//import Form from './Form';
import etch from './assets/etch.jpg';
import rps from './assets/rps.png';
import snip from './assets/snip.png';
const data = [
    {
        src: null,
        img: rps,
        title: "Rock Paper Scissors",
        description: 'Text based RPS game'
    },
    {
        src: "./projects/goog.html",
        img: "https://blog.hubspot.com/hubfs/image8-2.jpg",
        title: "Google Home Page",
        description: "Reproduction of Google's Home page",
    },
    {
        src: './projects.calc.html',
        img: snip,
        title: 'Javascript Calculator',
        description: "Browser calculator using React.js"
    },
    {
        src: './projects/etch.html',
        img: etch,
        title: "Etch-A-Sketch",
        description: "Etch-A-Sketch with your mouse!",
    }
]

const form = (render, name, email, comments, change, sub) => {
    if(render) {
      return(
        <section id="contact">
              <form id="survey_form" onSubmit={sub} name="EmailForm">
                <div>
                  <label className="labels" htmlFor="name" id="name-label">Name</label>
                  <input className = "input" type="textbox" id="name" name="name" placeholder="Enter your name" value={name} onChange={change} required />
                </div>
                <div>
                  <label className="labels" id="email-label" htmlFor="email">Email</label>
                  <input className = "input" type="email" id="email" name="email" placeholder="Enter your Email Address" value={email} onChange={change} required />
                </div>
                <div>
                  <label className="labels" id="comments-label" htmlFor="comments">Comments?</label>
                  <textarea className = "input" type="textbox" id="comments" name="comments" value={comments} onChange={change} ></textarea>
                </div>
                <div>
                  <button type="submit" id="submit">Submit</button>
                </div>
              </form>
            </section>
      )
    }else {
      return(
        <section id="contact">
            <h3>Thank you for sending, we will be in touch as soon as possible</h3>
        </section>
      )
    }
  }

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formRender: true,
            name: "",
            email: "",
            comments: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({formRender: false})
    const apiKey = "FB4FEF0944EFF7500083DCFD8AB8EFDC8B36498212EA1BB34BD5A6531634B791BDFB466C973322B991BBFDBC17AB4061";
    const myEmail = "keating916@gmail.com";
    const reciever = "keatingdev25@gmail.com";
    const tail = `&subject=${this.state.name}&from=${myEmail}&replyTo=${myEmail}&to=${reciever}&bodyText=${this.state.email}%0A${this.state.comments}`
    const hostname= "http://smtp.elasticemail.com"
    let path= `/v2/email/send?apikey=${apiKey}${tail}`
    const options = {
      port: 2525, 
      method: 'POST',
      keepalive: false,
    }

    fetch(hostname+path, options)
  }
    
    render() {
        return(
            <div>
                <Nav />
                <RPS />
                <Header />
                {form(this.state.formRender, this.state.name, this.state.email, this.state.comments, this.handleChange, this.handleSubmit)}
                {data.map(item => (<div className="card project-tile"><a href={item.src}>
                    <img src={item.img} alt={item.title} class="tiles-images" />
                    <div className="container">
                        <h4><b>{item.title}</b></h4>
                        <p>{item.description}</p>
                    </div>
                </a></div>))}
            </div>
        )
    }
}


ReactDOM.render(<Page />, document.getElementById('root')); /*

*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
