import React, { Component } from "react";
import Superhero from "./Superhero";

class Returnarea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Returnarea">
        {this.props.results &&
          this.props.results.map((items, index) => {
            return <Superhero key={index} info={items} />;
          })}
      </div>
    );
  }
}

export default Returnarea;
