import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import SmurfData from './SmurfData'
import { getData } from '../actions/'
import { newSmurf } from '../actions'


class Smurfs extends Component {
    state={
        name: '',
        age: '',
        height: ''
    }

    handleChange  = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    smurfPlusOne = e => {
        e.preventDefault()
        const smurf = this.state
        this.props.newSmurf(smurf)
        this.setState({
            name:'',
            age:'',
            height: ''
        })
    }


render(){
    return (
        <div>
            <form onSubmit={this.smurfPlusOne}>

                <input
                type='text'
                name='name'
                placeholder='name'
                value= {this.state.name}
                onChange={this.handleChange} >
                </input>
                <input
                type='text'
                name='age'
                placeholder='age'
                value= {this.state.age}
                onChange={this.handleChange} >
                </input>
                <input
                type='text'
                name='height'
                placeholder='height'
                value= {this.state.height}
                onChange={this.handleChange} >
                </input>
                <button onClick={this.smurfPlusOne}>Enter New Smurf</button>

            </form>
        </div>
    )
        }
    }

const mapStateToProps = state => {

    return{
        smurfData: state.smurfData,
        isLoading: state.isLoading,
        error: state.error,
        addedSmurf: state.addedSmurf
    }
}

export default connect (mapStateToProps,{newSmurf})(Smurfs)
