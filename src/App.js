import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import Returnarea from "./components/Returnarea";

class App extends Component {
  constructor() {
    super();
    this.state = { searchtext: "", searchresults: [] };
    this.search = this.search.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }
  //https://superheroapi.com/ids.html
  search() {
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    let URL = `https://superheroapi.com/api/10222858219473795/search/${this.state.searchtext}`;
    fetch(proxyURL + URL)
      .then((Response) =>
        Response.json().then((Response) => {
          const newArray = Response;

          this.setState({ searchresults: newArray });
        })
      )
      .catch("ERROR");
  }

  handleEvent(event) {
    this.setState({ searchtext: event.target.value });
  }

  render() {
    return (
      <div>
        <Searchbar search={this.search} handleEvent={this.handleEvent} />
        <Returnarea results={this.state.searchresults.results} />
      </div>
    );
  }
}

export default App;
