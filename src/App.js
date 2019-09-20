import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(<WelcomeScreen />);
	}
}

const Screen = () => (<div>hello</div>);

class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
		this.state = {
			input: '',
			submit: ''
		};
	}
 handleChange(event){
   this.setState({
     input: event.target.value
   });
 }
	handleSubmit(event) {
  event.preventDefault();
		this.setState({
			input: event.target.value,
   submit: this.state.input
		});
	}
	render() {
		return ( <div className = "App">
															<form onSubmit={this.handleSubmit}>
																<label> Enter number of nodes you want </label> 
																		<input type = "text" placeholder = "7" value={this.state.input} onChange={this.handleChange} ></input> 
  												   <button> Click for Random Nodes </button> 
  												</form> 
  												<br></br>
  												<h1>{this.state.submit}</h1>
  									</div>
		       );
	     }
    }

export default App;
