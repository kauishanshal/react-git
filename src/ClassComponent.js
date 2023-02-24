import React, { PureComponent } from "react";
import Fun from "./FunctionalComponent";

class Cls extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 10,
      name: "Ishan",
    };
  }

  render() {
    console.log("render click");
    return (
      <div>
        <Fun name={this.state.name} />
        {
          <>
            <h1>Counter is :-{this.state.count}</h1>
            <h1>Counter iname :-{this.state.name}</h1>
          </>
        }

        <button onClick={() => this.setState({ count: this.state.count+1 })}>Counter</button>
        <button onClick={() => this.setState({ name: "Kaushal" })}>
          Update Name
        </button>
      </div>
    );
  }
}

export default Cls;
