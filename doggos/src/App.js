import React from "react";
import axios from "axios";

// set up a class component that has state for doggos
// fetch data from "https://dog.ceo/api/breed/husky/images"
// set that data to state when it returns
// render the data in the render function

class App extends React.Component {
  state = {
    doggos: [],
  };

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <div className="doggos">
          {this.state.doggos.map((doggo) => (
            <img width="200" src={doggo} key={doggo} alt={doggo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
