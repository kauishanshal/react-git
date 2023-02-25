import React, { Component } from "react";

export class Eventcls extends Component {
  constructor() {
    super();
    this.state={count:0};
  }
  render() {
    return (
      <div>
        <h1>Eventcls Component :- {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Counter</button>
      </div>
    );
  }
}

export default Eventcls;
