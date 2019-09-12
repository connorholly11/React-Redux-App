import axios from 'axios'

export const FETCHING_PLAYER_START = 'FETCHING_PLAYER_START'
export const FETCHING_PLAYER_SUCCESS = 'FETCHING_PLAYER_SUCCESS'
export const FETCHING_PLAYER_FAILURE = 'FETCHING_PLAYER_FAILURE'

export const getPlayer = () => dispatch => {

    dispatch({type: FETCHING_PLAYER_START})

    axios.get('https://www.balldontlie.io/api/v1/players')
        .then(response => {
            console.log(response);
            dispatch({type: FETCHING_PLAYER_SUCCESS, payload: response.data.first_name})
        })
        .catch(error => {
            dispatch({type: FETCHING_PLAYER_FAILURE, payload: `${error.response}`})
        })
}

