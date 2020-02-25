import React from 'react'

export default class Goog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt) {
        let input = evt.target.value
        this.setState({value: input})
    }

    handleClick(evt) {
        let btn = evt.target.id;
        let q = this.state.value.split(" ").join("+")
        if(btn === "search") {
            let string = `http://www.google.com/search?hl=en&q=${q}`
            window.open(string, "_blank");
        }else {
            const string = `http://www.google.com/search?hl=en&q=${q}&btnI=I%27m+Feeling+Lucky&aq=f&oq=`
            window.open(string, "_blank");
        }
    }
    render() {
        return(
                <body>
                    <div className="header">
                        <ul>
                            <li className="left"><a href="https://about.google/intl/en/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header">About</a></li>
                            <li className="left"><a href="https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042">Store</a></li>
                        </ul>
                        <ul>
                            <li className="right"><a href="https://mail.google.com/mail/u/0/?tab=wm">GMail</a></li>
                            <li className="right"><a href="https://www.google.com/imghp?hl=en&tab=wi">Images</a></li>
                        </ul>
                    </div>
                    <div id="main">
                        <img id="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" id="google" />
                        <input id="q" type="text" onChange={e => this.handleChange(e)} value={this.state.value} placeholder="Google Search" />
                    </div>
                    <div id="buttons">
                        <button className="search" id="search" onClick={this.handleClick}>Google Search</button>
                        <button className="search" id="lucky" onClick={this.handleClick}>I'm Feeling Lucky</button>
                    </div>
                    <div className="footer">
                        <ul id = "leftfoot">
                            <li className="left">Advertising</li>
                            <li className="left">Business</li>
                        </ul>
                        <ul>
                            <li className="right">Privacy</li>
                            <li className="right">Terms</li>
                            <li className="right">Settings</li>
                        </ul>
                    </div>
                </body>

        )
    }
}