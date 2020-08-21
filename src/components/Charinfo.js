import React, { Component } from "react";
import Returnarea from "./Returnarea";

class Charinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      characterID: "1",
    };
  }

  fetchdata = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    let apiURL =
      proxy +
      `https://superheroapi.com/api/10222858219473795/${this.props.match.params.id}`;
    fetch(apiURL)
      .then((response) => {
        return response.json();
        console.log(response);
      })
      .then((response) => {
        console.log(response);
        Object.entries(response.powerstats).forEach(([key, value]) => {
          if (value === "null") {
            console.log("changed");
            return (response.powerstats[key] = "0");
          }
        });
        console.log(response.powerstats);
        console.log(response);
        this.setState({ results: response });
        //console.log(this.state.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchdata();
  }

  render() {
    return (
      <div className="Charinfo">
        <div className="row">
          <img
            src={this.state.results.image ? this.state.results.image.url : null}
          />
          <div className="column">
            <div style={{ alignItems: "center" }} className="row">
              <h1 id="superName" style={{ textDecoration: "underline" }}>
                {this.state.results.name ? this.state.results.name : null}
              </h1>
              <h3 style={{ color: "#a8a8a8", paddingLeft: "5px" }}>
                {this.state.results.biography &&
                this.state.results.biography["full-name"].length > 4
                  ? " -   " + this.state.results.biography["full-name"]
                  : null}
              </h3>
            </div>
            {this.state.results.powerstats
              ? Object.entries(this.state.results.powerstats).map(
                  ([keys, value], index) => {
                    return (
                      <div className="stats" key={index}>
                        <div>
                          {this.state.results.powerstats &&
                          this.state.results != "null" ? (
                            <div className="row">
                              <h3 className="statname">{keys + ":" + value}</h3>
                              <div className="loadbar">
                                <div
                                  className="progress"
                                  style={
                                    this.state.results.powerstats[keys] !=
                                      "null" &&
                                    this.state.results.powerstats && {
                                      width: value.toString() + "%",
                                    }
                                  }
                                ></div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  }
                )
              : null}

            <div className="column">
              <h3 className="appearance">
                {this.state.results.appearance
                  ? "Height:   " + this.state.results.appearance.height[0]
                  : null}
              </h3>
              <h3 className="appearance">
                {this.state.results.appearance
                  ? "Weight:   " + this.state.results.appearance.weight[0]
                  : null}
              </h3>
              <h3 className="appearance">
                {this.state.results.appearance
                  ? "Race:   " + this.state.results.appearance.race
                  : null}
              </h3>
            </div>
          </div>
        </div>
        <div className="moreinfo">
          <h3>
            {this.state.results.connections &&
            this.state.results.connections["group-affiliation"].length > 3
              ? this.state.results.name +
                ":    " +
                this.state.results.connections["group-affiliation"]
              : null}
          </h3>

          <h3>
            {this.state.results.connections &&
            this.state.results.connections.relatives.length > 2
              ? "Relatives:   " + this.state.results.connections.relatives
              : null}
          </h3>
          <h3>
            {this.state.results.work &&
            this.state.results.work.occupation.length > 2
              ? "Occupation:    " + this.state.results.work.occupation
              : null}
          </h3>
          <h3>
            {this.state.results.work && this.state.results.work.base.length > 2
              ? "Base: " + this.state.results.work.base
              : null}
          </h3>

          <h3>
            {this.state.results.biography &&
            this.state.results.biography["first-appearance"].length > 1
              ? "First Appearence:    " +
                this.state.results.biography["first-appearance"]
              : null}
          </h3>
          <div className="row">
            <h3>
              {this.state.results.biography &&
              this.state.results.biography.aliases[0].length > 1
                ? "Aliases:"
                : null}
            </h3>
            {this.state.results.biography &&
            this.state.results.biography.aliases[0].length > 1
              ? Object.values(this.state.results.biography.aliases).map(
                  (values) => {
                    return (
                      <h3 style={{ marginLeft: "5px" }}>{values + ";"}</h3>
                    );
                  }
                )
              : null}
          </div>
          <h3>
            {this.state.results.biography &&
            this.state.results.biography["place-of-birth"].length > 1
              ? "Place of birth:" +
                this.state.results.biography["place-of-birth"]
              : null}
          </h3>
        </div>
      </div>
    );
  }
}

export default Charinfo;
