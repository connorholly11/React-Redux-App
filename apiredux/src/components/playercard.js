import React from 'react';
import {connect} from 'react'

const PlayerCard = ({player}) => {

    return(
        <div>
            <h3>{player.first_name}</h3>
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
    {})
    (PlayerCard)