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
                <body id="goog">
                    <div className="googheader">
                        <ul id="gLefthead">
                            <li className="googleft"><a href="https://about.google/intl/en/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header">About</a></li>
                            <li className="googleft"><a  href="https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042">Store</a></li>
                        </ul>
                        <ul id="gRighthead">
                            <li className="googright"><a href="https://mail.google.com/mail/u/0/?tab=wm">GMail</a></li>
                            <li className="googright"><a href="https://www.google.com/imghp?hl=en&tab=wi">Images</a></li>
                        </ul>
                    </div>
                    <div id="googmain">
                        <img id="googlogo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"  />
                        <input id="query" type="text" onChange={e => this.handleChange(e)} value={this.state.value} placeholder="Google Search" />
                    </div>
                    <div id="googbuttons">
                        <button className="googsearch" id="search" onClick={this.handleClick}>Google Search</button>
                        <button className="search" id="lucky" onClick={this.handleClick}>I'm Feeling Lucky</button>
                    </div>
                    <div className="googfooter">
                        <ul id = "gleftfoot">
                            <li className="googleft">Advertising</li>
                            <li className="googleft">Business</li>
                        </ul>
                        <ul  id="grightfoot">
                            <li className="googright">Privacy</li>
                            <li className="googright">Terms</li>
                            <li className="googright">Settings</li>
                        </ul>
                    </div>
                </body>

        )
    }
}