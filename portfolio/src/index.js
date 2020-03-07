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
import simpsons from './assets/simpsons.png'


import './index.css';
import './small.css';
import './tablet.css';
import './large.css';


const projectData = [
  {
      id: 'reactRps',
      func: RPS,
      img: rps,
      title: "Rock Paper Scissors",
      description: 'Text based RPS game'
  },
  {
      id: 'goog',
      func: Goog,
      img: "https://blog.hubspot.com/hubfs/image8-2.jpg",
      title: "Google Home Page",
      description: "Reproduction of Google's Home page",
  },
  {
      id: 'reactCalc',
      func: Calculator,
      img: snip,
      title: 'Javascript Calculator',
      description: "Browser calculator using React.js"
  },
  {
      id: 'reactEtch',
      func: Etch,
      img: etch,
      title: "Etch-A-Sketch",
      description: "Etch-A-Sketch with your mouse!",
  }, 
  {
      id: 'quote',
      func: Quote,
      img: simpsons,
      title: "Simpsons Quote Generator",
      description: "Funny Quotes pulled from an API"
  }, 
  {
      id: 'markdown',
      func: Markdown,
      img: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
      title: "Markdown Previewer",
      description: "Github Style HTML Markdown Previewer",
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
      reactEtch: false, 
      markdown: false,
      quote: false,

    }
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(evt) {
    console.log(evt.target.id)
    let b = this.state[evt.target.id]
    console.log(b);
    this.setState({[evt.target.id]: !b})
    console.log(this.state)
  }


  render() {

    return(
          <div id="projects">
            {this.props.projects.map(item => 
              (<div><div className="card project-tile" onClick={e => this.toggleShow(e)} id={item.id} style={{display: 'inline-block'}}>
                <a href={item.src}>
                    <img id={item.id}  src={item.img} alt={item.title} class="tiles-images" />
                    <div id={item.id} className="cardContainer">
                        <h4 id={item.id}><b id={item.id}>{item.title}</b></h4>
                        <p id={item.id}>{item.description}</p>
                    </div>
                    
                </a>
              </div>
              <div style={{display: this.state[item.id] === true ? 'block' : 'none'}} class="popup">
                <button type="close" class="close" id={item.id} onClick={e => this.toggleShow(e)}>X</button>
                <div id="functionContents">
                <item.func class="function" />
                </div>
              </div></div>
              ))}
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
                <div id="topDiv">
                  <Header />
                </div>
                
                <div id="formDiv">
                  {form(this.state.formRender, this.state.name, this.state.email, this.state.comments, this.handleChange, this.handleSubmit)}
                </div>
                <div id="projectDiv">
                  <Projects projects={projectData} />
                </div>
                
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
//git push -f --set-upstream git@github.com:keating916/keating916.github.io.git master