import "./App.css";
import React, { Component } from "react";
import Scorekeeper from "./scorekeeper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scorekeeper />
      </div>
    );
  }
}

export default App;
