import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux'
import SmurfData from './SmurfData'
import { getData } from '../actions/'



class Smurf extends Component {
    state=
}
const Smurfs = (props) => {
    console.log(`Smurfs`, props)
    useEffect(()=> {
        props.getData()

    },[])
    

    return (
        <div>
            {/* {props.error && <p>{props.error}</p>}
            {props.smurfData.map(blue => (
                <SmurfData key={blue.id} blue={blue} />
            ))} */}

        </div>
    )
}

const mapStateToProps = state => {

    return{
        smurfData: state.smurfData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (mapStateToProps,{getData})(Smurfs)
