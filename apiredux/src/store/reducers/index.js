import {FETCHING_PLAYER_START, FETCHING_PLAYER_SUCCESS, FETCHING_PLAYER_FAILURE} from '../actions'


export const initialState = {
    players: null,
    isFetching: false,
    error: ''
}

export const PlayerReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_PLAYER_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_PLAYER_SUCCESS:
            return{
                ...state,
                player: action.payload,
                isFetching: false
            }
        // case FETCHING_PLAYER_FAILURE:
        //     return{
        //         ...state,
        //         isFetching: false,
        //         error: action.payload
        //     }
        default:
            return state
        }
        
    }

