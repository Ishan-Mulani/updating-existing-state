import React, { Component } from "react";
class Scorekeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.singleKill = this.singleKill.bind(this);
    this.trippleKill = this.trippleKill.bind(this);
  }
  singleKill() {
    // Not a good idea to update state like this
    // if it relies on existing state values
    return this.setState({ score: this.state.score + 1 });
  }

  //Below fn will always increment by one because
  // i) setState is asynchronus we never know when next setstate is call as react is calling it based on calculations
  // ii) many setState are combine as one so as reduce number of render therefore react sqaush all three and consider only last
  //     setState

  //   trippleKill() {
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState({ score: this.state.score + 1 });
  //   }

  //   we can make use of callback to get it right
  //   trippleKill() {
  //     this.setState((currState) => {
  //       return { score: currState.score + 1 };
  //     });
  //     this.setState((currState) => {
  //       return { score: currState.score + 1 };
  //     });
  //     this.setState((currState) => {
  //       return { score: currState.score + 1 };
  //     });
  //   }

  //   Common approach to declare callback fn seperate
  incrementScore = (currState) => {
    return { score: currState.score + 1 };
  };
  trippleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }
  render() {
    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill</button>
        <button onClick={this.trippleKill}>Tripple Kil</button>
      </div>
    );
  }
}

export default Scorekeeper;
