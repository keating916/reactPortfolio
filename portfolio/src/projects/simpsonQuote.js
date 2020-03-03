import React from 'react';

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotation: "",
      author: "",
      tweetURL: ""
    }
    this.getQuote = this.getQuote.bind(this);
  }
  
  getQuote() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(res=> res.json())
      .then((data) => {
      this.setState({
        quotation: data[0].quote,
        author: data[0].character, 
        tweetURL: `https://twitter.com/intent/tweet?text=${data[0].quote.split(" ").join("%20")}%0A%0A-${data[0].character.split(" ").join("%20")}`
      })

    })    
  }

  componentDidMount() {
    this.getQuote();
  }
  
  render() {
    return(
      <body id="simpsons">
        <h1>Random Simpsons Quotes!</h1>
        <div id="quote-box">
          <div id="qa" className="qa">
          <div id="text">{this.state.quotation}</div>
          <div id="author">-{this.state.author}</div>
          </div>
          <div>
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
          </div>
          <a id="tweet-quote" href={this.state.tweetURL} target="_blank"><img id="twitterImg" src="https://i.ya-webdesign.com/images/twitter-bird-png-2.png" /></a>
        </div>
        <div><p>API Used: https://thesimpsonsquoteapi.glitch.me/</p><p>By <a href="https://jluboff-portfolio.glitch.me/" target="_blank">Jason Luboff</a></p></div>
      </body>
    
    )
  }
}
