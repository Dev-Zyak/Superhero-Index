import React, { Component } from "react";

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
      })
      .then((response) => {
        this.setState({ results: response });
        console.log(this.state.results);
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
          </div>
        </div>
      </div>
    );
  }
}

export default Charinfo;
