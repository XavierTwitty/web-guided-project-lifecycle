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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.pokemon !== prevState.pokemon) {
      // ! ==  ==> tells us that our pokemon state has changed
      // only run if this.state.pokemon has been changed
      console.log("component has re-rendered, pokemon state has been updated");
    }

    if () {
      // only run this if this.state.highlightedPokemon has changed
      console.log("component has re-rendered, highlightedPokemon state has been updated")
    }
  }

  render() {
    console.log("App is rendering");

    // if (this.state.pokemon.length === 0) {
    //   return <h3>Loading Pokemon Deck...</h3>;
    // }

    return (
      <div className="App">
        {this.state.pokemon.length === 0 ? (
          <h3>Loading Pokemon Deck...</h3>
        ) : (
          <Pokemon pokemon={this.state.pokemon} />
        )}
      </div>
    );
  }
}

export default App;
