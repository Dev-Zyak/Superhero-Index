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
        <img
          src={this.state.results.image ? this.state.results.image.url : null}
        />
        <div className="superinfo">
          <h1>{this.state.results.name}</h1>
          <h1>
            {this.state.results.biography
              ? this.state.results.biography["full-name"]
              : "NOPE"}
          </h1>
          <h1>
            {this.state.results.biography
              ? this.state.results.biography.publisher
              : null}
          </h1>
          <div className="row statdiv">
            <div className="column stats">
              <h2>Appearance</h2>

              <div className="statwrapper">
                <h3>
                  {this.state.results.appearance
                    ? "Height:   " + this.state.results.appearance.height[0]
                    : null}
                </h3>
              </div>
              <div className="statwrapper">
                <h3>
                  {this.state.results.appearance
                    ? "Weight:   " + this.state.results.appearance.weight[0]
                    : null}
                </h3>
              </div>

              <div className="statwrapper">
                <h3>
                  {this.state.results.appearance
                    ? "Gender:   " + this.state.results.appearance.gender
                    : null}
                </h3>
              </div>
              <div className="statwrapper">
                <h3>
                  {this.state.results.appearance
                    ? "Race:   " + this.state.results.appearance.race
                    : null}
                </h3>
              </div>
            </div>

            <div className="column stats">
              <h2>Stats</h2>
              <div className="statwrapper">
                <h3>
                  {this.state.results.powerstats
                    ? "Strength:   " + this.state.results.powerstats.strength
                    : null}
                </h3>

                <h3>
                  {this.state.results.powerstats
                    ? "Combat:   " + this.state.results.powerstats.combat
                    : null}
                </h3>
              </div>
              <div className="statwrapper">
                <h3>
                  {this.state.results.powerstats
                    ? "Speed:   " + this.state.results.powerstats.power
                    : null}
                </h3>

                <h3>
                  {this.state.results.powerstats
                    ? "Power:   " + this.state.results.powerstats.power
                    : null}
                </h3>
              </div>
              <div className="statwrapper">
                <h3>
                  {this.state.results.powerstats
                    ? "Durability:   " +
                      this.state.results.powerstats.durability
                    : null}
                </h3>
                <h3>
                  {this.state.results.powerstats
                    ? "Intelligence:   " +
                      this.state.results.powerstats.intelligence
                    : null}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charinfo;
