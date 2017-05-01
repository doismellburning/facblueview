import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pako from 'pako';

class App extends Component {
	constructor() {
		super();
		this.state = {
			dump: "Empty"
		};;
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		  <div>
			<h2>In</h2>
			<textarea onBlur={this.onBlur.bind(this)} />
			<h2>Dump</h2>
			<code>{this.state.dump}</code>
		  </div>
      </div>
    );
  }

	onBlur(event) {
		this.setState({dump: JSON.stringify(decodeBlueprint(event.target.value))});
	}
}

function decodeBlueprint(text) {
	// Blueprint string in, Either Error JSON out
	// (IN THEORY)
	// In practice: string -> JSON or some kind of boom
	
	var version = text.substring(0, 1);
	// TODO Ensure 0
	
	var encoded = text.substring(1);

	return JSON.parse(pako.inflate(atob(encoded), {to: 'string'}));
}

export default App;
