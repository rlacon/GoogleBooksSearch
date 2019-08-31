import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search.js";
import Results from "./components/Results.js";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
