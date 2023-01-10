// import logo from './logo.svg';
// import Header from './header/header.js'
// import Body from './body/body.js'
import React, {useState, useEffect, Component } from "react";
import './css/App.css';

// class Timer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time : props.start
//     }
//   }

//   // lifecycle
//   componentDidMount(){
//     this.addInterval = setInterval(()=>{
//       this.increase()
//     }, 1000)
//   }

//   componentWillUnmount(){
//     clearInterval(this.addInterval)
//   }

//   increase(){
//     this.setState((state, props) => ({
//       time: parseInt(state.time) + 1
//     }))
//   }




//   render(){
//   return (
//     <div>
//       <h1>
//       {console.log(this.state.time)}{this.state.time}detik
//       </h1>
//     </div>
//   )
// }
// }

// class App extends Component  {
//   render(){
//     return(
//       <div>
//         <Timer start="0"/>
//       </div>
//     )
//   }
// }

// function Clicker(){
//   function handleClick(e){
//     alert('berhasil mengklick')
//     e.preventDefault()
//   }
//   return (
//     <a href="#" onClick={handleClick}>klik brosis</a>
//   )
// }

// class Toggle extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       toggleStatus: true
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState(state => ({
//       toggleStatus: !state.toggleStatus
//     }))
//   }
//   render(){
//     return(
//     <button onClick={this.handleClick}>
//       {this.state.toggleStatus ? 'ON' : 'OFF'}
//     </button>
//     )
//   }



// }


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Toggle />
//       </div>
//     )
//   }
// }




// function App() {
//   return (
//     <div className="App">
//       {/* <Header name="yasashi" umur="19 tahun"/>
//       <Body logo1="rumah" logo2="tentang"/> */}

//     </div>
//   );
// }



// BUAT TODO LIST


// function Hasil(props) {
//   return(
//     <div>
//       <ul>
//       {
//         props.items.map((m,i) =>
//           <li key={i}>{m}</li>
//         )
//       }
//       </ul>
//     </div>
//   )
// }

// class App extends Component {
//   constructor(props){
//     super(props) 
//     this.state = {
//       todoItem: '',
//       items: []
//     }
//   }


//   handleSubmit = (event) =>{
//     event.preventDefault()
//     this.setState({
//       items: [...this.state.items, this.state.todoItem],
//       todoItem: ''
//     })
//   }

//   handleChange = (event) => {
//     this.setState({
//       todoItem: event.target.value
//     })
//     console.log(this.state.todoItem)
//   }

//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input value={this.state.todoItem} onChange={this.handleChange}/>
//           <button>Add</button>
//         </form>
//         <Hasil items={this.state.items}/>
//       </div>
//     )
//   }
// }


function App(){
  return(
    <div>
      kkk
    </div>
  )
}


export default App;
