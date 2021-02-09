import React from "react";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren",
    };
    console.log("1. APPCLASS: Component Constructed - 1st");
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison",
    });
  };

  // lifecycle methods - a way to run code at a _very specific_ point in time
  // in the lifecycle of a component
  componentDidMount() {
    console.log("2. APPCLASS: Component Mounted - 3rd");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("3. APPCLASS: Component Updated");
    console.log("4. PROPS---------------");
    console.log("5.", prevProps, this.props);
    console.log("6. STATE---------------");
    console.log("7.", prevState, this.state);

    if (this.state.name !== prevState.name) {
    }
  }

  render() {
    console.log("8. APPCLASS: Component Rendered - 2nd");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
