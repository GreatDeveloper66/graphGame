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
		this.state = {
			input: '',
			submit: ''
		};
	}
	handleSubmit(event) {
		this.setState({
			input: event.target.value
		});
	}
	render() {
		return ( <div className = "App">
															<form>
																<label> Enter number of nodes you want </label> 
																		<input type = "text" placeholder = "7" ></input> 
  												</form> 
  												<button> Click for Random Nodes </button> 
  									</div>
		       );
	     }
    }

export default App;
