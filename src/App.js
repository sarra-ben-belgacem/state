
import React, { Component } from 'react'
import Profil from './components/Profil';
import './App.css';


export default class App extends Component {
  state= {
    display : true
  }
  render() {
    return (
      <div className="App">
        
        <button onClick={()=> this.setState({display :! this.state.display})} style={{marginTop:'100px' , backgroundColor:"red"}}>{this.state.display ? "Hide Profil" : "Display Profil"}</button> <br/>
        
        {
        this.state.display ?
        <Profil/> : ""
     }
      </div>
    )
  }
}

