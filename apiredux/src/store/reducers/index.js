import {FETCHING_PLAYER_START, FETCHING_PLAYER_SUCCESS, FETCHING_PLAYER_FAILURE, getPlayer} from '../actions'


export const initialState = {
    players: [],
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
                players: action.payload,
                isFetching: false
            }

        //     return {
        //     state.map(state => {
        //             ...state,
        //             state.first_name
                
        //     })
        // }
            



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

