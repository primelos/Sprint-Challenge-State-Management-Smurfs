import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, NEW_SMURF, SEND_SUCCESS, SEND_FAILED } from '../actions/index'


const initialState = {
    smurfData: [],
    isLoading: false,
    error: null,
    addedSmurf:false
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
                smurfData: [...state.smurfData, ...action.payload]
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case NEW_SMURF:
            return{
                ...state,
                isLoading: false,
                addedSmurf: true,
                error: null
            }
        case SEND_SUCCESS:
                return{
                    ...state,
                    smurfData: action.payload,
                    isLoading: false,
                    addedSmurf:false,
                    error: null
                }
         case SEND_FAILED:
                return{
                    ...state,
                    isLoading: false,
                    addedSmurf: false,
                    error: null
                }
        default:
            return state;
    }
}

export default reducer