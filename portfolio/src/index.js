import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Form from './Form';
import etch from './assets/etch.jpg';
import rps from './assets/rps.png';
import snip from './assets/snip.png';
const data = [
    {
        src: './projects/rps.html',
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
        description: "Browser calculator using HTML and Javascript"
    },
    {
        src: './projects/etch.html',
        img: etch,
        title: "Etch-A-Sketch",
        description: "Etch-A-Sketch with your mouse!",
    }
]

class Page extends React.Component {
    
    render() {
        return(
            <div>
                <Nav />
                <Header />
                <Form />
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
