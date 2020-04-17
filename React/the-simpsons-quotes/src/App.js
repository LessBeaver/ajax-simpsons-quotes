import React from "react";
import "./App.css";
//import QuoteList from './components/QuoteList';
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: ""
    };
    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          quotes: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard quotes={this.state.quotes} />
        <button className="button" type="button" onClick={this.getQuotes}>
          Random quote
        </button>
      </div>
    );
  }
}

export default App;
