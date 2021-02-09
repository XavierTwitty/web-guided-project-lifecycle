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
  componentDidMount() {
    setTimeout(() => {
      // this is to mimic an API call taking 2 seconds to run
      this.setState({
        pokemon: data,
      });
    }, 2000);
  }

  render() {
    console.log("App is rendering");

    if (this.state.pokemon.length === 0) {
      return <h3>Loading Pokemon Deck...</h3>;
    }

    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
