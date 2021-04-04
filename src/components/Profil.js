import React, { Component } from 'react'

export default class Profil extends Component {
    state={
        Person : {
            FullName:"Ben Belgacem Sarra",
            Bio:"FB: Sarra",
            imageSrc:"",
            Profession : "Developpeuse"
        } ,
        Chrono : 0 ,
        date : ""
    
    }
    componentDidMount(){
    setInterval(() => {
        this.setState({Chrono : this.state.Chrono +1})
        
        }, 1000);
        let date = new Date();
        this.setState({date : date.toString()})
  }

    render() {
        return (
            <div>
                <h1>{this.state.Person.FullName}</h1>
                <h2>{this.state.Person.Bio}</h2>
                <img src="nature.jpg" />
                <h2>{this.state.Person.Profession}</h2>
                <p>{this.state.Chrono}</p>
                <p>{this.state.date}</p>


            </div>
        )
  }  
}
