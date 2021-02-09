import React from "react";

import data from "../data";
import "./styles.scss";

import Pokemon from "./components/Pokemon";

class App extends React.Component {
  state = {
    pokemon: [],
    highlightedPokemon: {},
  };

  // set up componentDidMount, set "data" to the pokemon state

  render() {
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
