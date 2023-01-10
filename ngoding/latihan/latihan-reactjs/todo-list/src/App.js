import logo from './logo.svg';
import React, { useState, useEffect, Component } from 'react';
import './App.css';
import List from './list.js'






class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoItem : "",
      items : []
    }
  };



  handleClick = (e) => {
    alert("kk")
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      todoItem: e.target.value
    }) 
  }

  render() {
    return(
      <div className='App'>

      <form onSubmit={this.handleSubmit}>
        <input value={this.state.todoItem} onChange={this.handleChange} />
        <button>Ok</button>
      </form>
        <List items={this.state.items}/>
      </div>
    )
  }
}



export default App;
