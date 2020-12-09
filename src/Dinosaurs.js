// function Dinosaurs(props) {
//     return (
        // <div>
        //     <h1>Title: {props.title}</h1>
        //     <p>Author: {props.author}</p>
        //     <p>Body: {props.body}</p>
        //     <h2>Comments</h2>
            
        // </div>
//     )
// }

import React, { Component } from 'react'

class Dinosaurs extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
          body: this.props.body,
        
          input: ''
        }
       
    }
    change = () => {
        this.setState({ body: this.state.input })
    }



    changeInput = (evt) => {
        
        this.setState({input: evt.target.value})
      }  

    
    render() {
        return (
            <div>
            <h1>Title: {this.props.title}</h1>
            <p>Author: {this.props.author}</p>
            <p>Body: {this.state.body}</p>
            <input value ={this.state.input} onChange={this.changeInput}/>
            <button onClick={this.change}>Edit</button>
            <h2>Comments</h2>
            <p>{this.props.comments[0]}</p>
            
            </div>
        );
    }
}

export default Dinosaurs