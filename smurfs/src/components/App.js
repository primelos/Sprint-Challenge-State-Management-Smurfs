import React, { Component } from "react";
import "./App.css";

import Smurfs from "./Smurfs";
import SmurfData from "./SmurfData";

import { connect } from 'react-redux'
import { getData } from '../actions'



class App extends Component {

  componentDidMount(){
    this.props.getData ()
  }


  render() {
    if (props.isLoading){
      return <h3>Waiting.........Data is Loading...../\/\/\/\/\/\/\/\/\/\/\/\</h3>
  } 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs />
        <SmurfData smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		smurfData: state.smurfData,
		isLoading: state.isLoading
	};
};

export default connect(
	mapStateToProps,
	{ getData }
)(App);
