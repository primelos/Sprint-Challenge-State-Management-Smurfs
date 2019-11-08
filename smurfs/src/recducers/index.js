import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions'


const initialState = {
    smurfData: [],
    isLoading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                smurfData: action.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer