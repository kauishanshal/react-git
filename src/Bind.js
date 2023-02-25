import React, { Component } from 'react'

class Bind extends Component {
  constructor(){
      super();
      this.state={
        name:'Kaushal',
        city:'Jewar',
        count:5
      }
      // this.changeEvent=this.changeEvent.bind(this)
    }
    changeeEvent=()=>{
      this.setState={
        name:'Ishan',
        city:'London',
        count:20
      }
      console.log('clicked')
    }
  render() {
    return (
      <div>
        <h1>Name : - {this.state.name}</h1>
        <h1>City : - {this.state.city}</h1>
        <h2>Count value is :- {this.state.count}</h2>
        <button onClick={this.changeeEvent}>Change</button>
      </div>
    )
 
     }
}

export default Bind;