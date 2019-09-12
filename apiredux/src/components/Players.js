import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getPlayer} from '../store/actions';

const Players = ({getPlayer, players, isFetching, error}) => {

    useEffect(() => {
        //call the action and watch the action

        getPlayer()
    },[getPlayer])
    
    if (isFetching){
        return <h2>fetching data from the api</h2>
    }

    
    return(
        <div>
            <h1>NBA PLAYERS</h1>
            {players.map(player => {
                return <h3>{player.first_name}</h3>
            })}
            {/* <button onClick={getPlayer}> GET A NEW PLAYER </button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        players: state.players,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, 
    {getPlayer}
    )(Players)