import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child Component {this.props.name}</h1>
        <button onClick={()=>this.props.parFun("child")}>Child Button</button>
      </div>
    )
  }
}

export default Child
