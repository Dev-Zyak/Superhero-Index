import React, { Component } from "react";

class Superhero extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }
  render() {
    return (
      <div
        className={"superheroDisplay"}
        style={
          this.props.info.biography.alignment === "good"
            ? { border: "1px solid blue" }
            : { border: "1px solid red" }
        }
      >
        <img src={this.props.info.image.url} />
        <div className="nameInfo">
          <h3>{this.props.info.name}</h3>
        </div>
      </div>
    );
  }
}

export default Superhero;
