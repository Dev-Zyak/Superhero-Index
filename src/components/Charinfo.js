import React, { Component } from "react";
import Returnarea from "./Returnarea";

class Charinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      characterID: "1",
    };
  }

  fetchdata = () => {
    let apiURL = `/api/10222858219473795/${this.props.match.params.id}`;
    fetch(apiURL)
      .then((response) => {
        return response.json();
        console.log(response);
      })
      .then((response) => {
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
            <h1 id="superName">
              {this.state.results.name ? this.state.results.name : null}
            </h1>
            <h3>
              {this.state.results.biography &&
              this.state.results.biography["full-name"].length > 4
                ? this.state.results.biography["full-name"]
                : null}
            </h3>

            <div className="stats">
              <div>
                {this.state.results.powerstats &&
                this.state.results != "null" ? (
                  <div className="row">
                    <h3 className="statname">
                      Intelligence: {this.state.results.powerstats.intelligence}
                    </h3>
                    <div className="loadbar">
                      <div
                        className="progress"
                        style={
                          this.state.results.powerstats.intelligence !=
                            "null" &&
                          this.state.results.powerstats && {
                            width: 0,
                            width:
                              this.state.results.powerstats.intelligence.toString() +
                              "%",
                          }
                        }
                      ></div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="stats">
              <div>
                {this.state.results.powerstats &&
                this.state.results != "null" ? (
                  <div className="row">
                    <h3 className="statname">
                      Durability: {this.state.results.powerstats.durability}
                    </h3>
                    <div className="loadbar">
                      <div
                        className="progress"
                        style={
                          this.state.results.powerstats.durability != "null" &&
                          this.state.results.powerstats && {
                            width: 0,
                            width:
                              this.state.results.powerstats.durability.toString() +
                              "%",
                          }
                        }
                      ></div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="stats">
              <div>
                {this.state.results.powerstats &&
                this.state.results != "null" ? (
                  <div className="row">
                    <h3 className="statname">
                      Speed: {this.state.results.powerstats.speed}
                    </h3>
                    <div className="loadbar">
                      <div
                        className="progress"
                        style={
                          this.state.results.powerstats.speed != "null" &&
                          this.state.results.powerstats && {
                            width: 0,
                            width:
                              this.state.results.powerstats.speed.toString() +
                              "%",
                          }
                        }
                      ></div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="stats">
              <div>
                {this.state.results.powerstats &&
                this.state.results != "null" ? (
                  <div className="row">
                    <h3 className="statname">
                      Strength: {this.state.results.powerstats.strength}
                    </h3>
                    <div className="loadbar">
                      <div
                        className="progress"
                        style={
                          this.state.results.powerstats.strength != "null" &&
                          this.state.results.powerstats && {
                            width: 0,
                            width:
                              this.state.results.powerstats.strength.toString() +
                              "%",
                          }
                        }
                      ></div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="stats">
              <div>
                {this.state.results.powerstats &&
                this.state.results != "null" ? (
                  <div className="row">
                    <h3 className="statname">
                      Combat: {this.state.results.powerstats.combat}
                    </h3>
                    <div className="loadbar">
                      <div
                        className="progress"
                        style={
                          this.state.results.powerstats.combat != "null" &&
                          this.state.results.powerstats && {
                            width: 0,
                            width:
                              this.state.results.powerstats.combat.toString() +
                              "%",
                          }
                        }
                      ></div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="stats">
              <div>
                {this.state.results.powerstats &&
                this.state.results != "null" ? (
                  <div className="row">
                    <h3 className="statname">
                      Power: {this.state.results.powerstats.power}
                    </h3>
                    <div className="loadbar">
                      <div
                        className="progress"
                        style={
                          this.state.results.powerstats.power != "null" &&
                          this.state.results.powerstats && {
                            width: 0,
                            width:
                              this.state.results.powerstats.power.toString() +
                              "%",
                          }
                        }
                      ></div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div
              className="row"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3>
                {this.state.results.appearance
                  ? "Height:   " + this.state.results.appearance.height[0]
                  : null}
              </h3>
              <h3>
                {this.state.results.appearance
                  ? "Weight:   " + this.state.results.appearance.weight[0]
                  : null}
              </h3>
              <h3>
                {this.state.results.appearance
                  ? "Race:   " + this.state.results.appearance.race
                  : null}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charinfo;
