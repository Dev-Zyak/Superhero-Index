import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="Searchbar">
        <input
          onChange={this.props.handleEvent}
          type="Text"
          placeholder="Enter hero"
        />
        <button onClick={this.props.search}>Search</button>
      </nav>
    );
  }
}

export default SearchBar;
