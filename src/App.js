import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import Returnarea from "./components/Returnarea";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Charinfo from "./components/Charinfo";

class App extends Component {
  constructor() {
    super();
    this.state = { searchtext: "", searchresults: {} };
    this.search = this.search.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }
  //https://superheroapi.com/ids.html
  search() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    let URL =
      proxy +
      `https://superheroapi.com/api/10222858219473795/search/${this.state.searchtext}`;
    fetch(URL)
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
      <Router basename="/superhero">
        <Switch>
          <Route path="/" exact>
            <Searchbar search={this.search} handleEvent={this.handleEvent} />
            <Returnarea results={this.state.searchresults.results} />
          </Route>

          <Route path="/info/:id" component={Charinfo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
