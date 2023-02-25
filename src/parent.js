import React, { Component } from "react";
import Child from "./child";

export class Parent extends Component {
    constructor(){
        super();
    }
    clickEve(type){
        console.log('working on click ',type)
    }
  render() {
    return (
      <div>
      <Child name="Ishan" parFun={this.clickEve}/>
        <h1>Parent Component</h1>
        <button onClick={()=>this.clickEve("parent")}>Parent Button</button>
      </div>
    );
  }
}

export default Parent;
