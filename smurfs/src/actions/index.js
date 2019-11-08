import axios from 'axios'

export const START_FETCHING = 'START_FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const NEW_SMURF = 'NEW_SMURF'
export const SEND_SUCCESS = 'SEND_SUCCESS'
export const SEND_FAILED = 'SEND_FAILED'


export const getData = () => (dispatch) => {
        dispatch({ type: START_FETCHING })

        axios.get('http://localhost:3333/')
            .then(res => dispatch({  type: FETCH_SUCCESS, payload: res.data}))
            .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.res}))
    }

    export const newSmurf = newSmurfs =>dispatch => {
        dispatch({ type: NEW_SMURF})
        axios.post('http://localhost:3333/smurfs', newSmurfs)
        .then(res => dispatch({ type: SEND_SUCCESS, payload: res.data }))
        .catch(error => dispatch({ type: SEND_FAILED, payload: error}))
        
    }
