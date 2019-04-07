import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    quote: '',
    author: '',
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    axios.get("https://quota.glitch.me/random")
    .then(res => {
      this.setState({
        quote: res.data.quoteText,
        author: res.data.quoteAuthor
      })
    })
    .catch(err => {
      alert(err);
    });
  }

  render() {
    const {quote, author} = this.state;
    const twitterLink = `https://twitter.com/intent/tweet?text="${quote}" by ${author}.`
    return (
      <div id="quote-box" className="container">
        <div className="center">
          <h4 id="text">{this.state.quote}</h4>
          <h5 id="author">&mdash; <em>{this.state.author}</em></h5>
          <div className="row pt-2">
            <div className="col-md-8">
              <a href={twitterLink} target="_blank" rel="noopener noreferrer" role="button" id="tweet-quote" className="btn btn-info btn-lg">Tweet The Quote</a>
            </div>
            <div className="col-md-4">
              <button id="new-quote" className="btn btn-secondary btn-lg btn-block" onClick={this.getNewQuote}>Get New Quote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
