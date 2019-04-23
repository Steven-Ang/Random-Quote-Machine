import React, { Component } from "react";

import axios from "axios";

import Quote from "../../components/Quote";
import Button from "../../components/Button";

export default class QuoteContainer extends Component {
  state = {
    quote: "",
    author: ""
  };

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    axios
      .get("https://quota.glitch.me/random")
      .then(res => {
        this.setState({
          quote: res.data.quoteText,
          author: res.data.quoteAuthor
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    const { quote, author } = this.state;
    const twitterLink = `https://twitter.com/intent/tweet?text="${quote}" by ${author}.`;

    return (
      <div id="quote-box" className="container">
        <Quote quote={quote} author={author} />
        <div className="row pt-2">
          <Button
            id="tweet-quote"
            classname="col-md-8"
            color="btn-info"
            link={twitterLink}
            text="Tweet The Quote"
            displayBlock=""
            target="_blank"
          />
          <Button
            id="new-quote"
            classname="col-md-4"
            color="btn-secondary"
            link="#quote-box"
            text="Get New Quote"
            onClick={this.getNewQuote}
            displayBlock="btn-block"
            target=""
          />
        </div>
      </div>
    );
  }
}
