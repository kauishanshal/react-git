import React, { Component } from "react";

class Bind extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kaushal",
      city: "Jewar",
      count: 5,
      show: true,
    };
  }
  changeeEvent = () => {
    this.setState({
      name: "Ishan",
      city: "London",
      count: this.state.count + 1,
      show:!this.state.show
    });

    console.log("clicked");

    this.showHide = () => {
      this.setState({show:!this.state.show})
  }
}
  render() {
    return (
      <div> 
        {
          this.state.show ? (
          <>
            <h1>Name : - {this.state.name}</h1>
            <h1>City : - {this.state.city}</h1>
            <h2>Count value is :- {this.state.count}</h2>
          </>
        ) : null
        }

        <button onClick={this.changeeEvent}>Change</button>
        <button onClick={this.showHide}>Toggle</button>
      </div>
    );
  }
  }


export default Bind;
