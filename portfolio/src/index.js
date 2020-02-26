import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


import Header from './Header';
import Nav from './Nav';

import Calculator from './projects/reactCalc';
import Goog from './projects/googReact'
import Etch from './projects/etchReact'
import RPS from './projects/rpsReact'
import Quote from './projects/simpsonQuote'
import Markdown from './projects/markdownPreviewer'

import etch from './assets/etch.jpg';
import rps from './assets/rps.png';
import snip from './assets/snip.png';

import './index.css';
import './assets/calc.css'

const data = [
  {
      value: 'reactRps',
      func: RPS,
      img: rps,
      title: "Rock Paper Scissors",
      description: 'Text based RPS game'
  },
  {
      value: 'goog',
      func: Goog,
      img: "https://blog.hubspot.com/hubfs/image8-2.jpg",
      title: "Google Home Page",
      description: "Reproduction of Google's Home page",
  },
  {
      value: 'reactCalc',
      func: Calculator,
      img: snip,
      title: 'Javascript Calculator',
      description: "Browser calculator using React.js"
  },
  {
      value: 'reactEtch',
      func: Etch,
      img: etch,
      title: "Etch-A-Sketch",
      description: "Etch-A-Sketch with your mouse!",
  }, 
  {
      value: 'quote',
      func: Quote,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdT2Y_WWGYds4UsHq1Yk-J_CyWXRQu-41DwuXm6mC8HboAzNWD',
      title: "Simpsons Quote Generator",
      description: "Funny Quotes pulled from API"
  }, 
  {
      value: 'markdown',
      func: Markdown,
      img: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
      title: "Markdown Previewer",
      description: "Github Style HTML Markdown Previewer,
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
                  <button type="submit" id="formSubmit">Submit</button>
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

class Projects extends React.Component {
  constructor(props) {
    super(props); 
    this.state ={
      reactRps: false,
      goog: false, 
      reactCalc: false,
      reactEtch: false      
    }
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(evt) {
    console.log(evt.target.value)
    let b = this.state[evt.target.value]
    this.setState({[evt.target.value]: !b})
    console.log(this.state)
  }


  render() {

    return(
          <div>
            {this.props.projects.map(item => 
              (<div className="card project-tile" onClick={e => this.toggleShow(e)} value={item.value}><a href={item.src}>
                    <img value={item.value} onClick={e => this.toggleShow(e)} src={item.img} alt={item.title} class="tiles-images" />
                    <div value={item.value} onClick={e => this.toggleShow(e)} className="container">
                        <h4 value={item.value} onClick={e => this.toggleShow(e)}><b>{item.title}</b></h4>
                        <p value={item.value} onClick={e => this.toggleShow(e)}>{item.description}</p>
                    </div>
                    <div style={{display: this.state[item.value] === true ? 'block' : 'none'}}>
                      <item.func  />
                      <button type="close" value={item.value} {e => this.toggleShow(e)}>Close</button>
                    </div>
                    
                </a></div>))}
          </div>
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
        //this.renderProject = this.renderProject.bind(this);
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
                <Header />
                {form(this.state.formRender, this.state.name, this.state.email, this.state.comments, this.handleChange, this.handleSubmit)}
                <Projects projects={data} />
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
