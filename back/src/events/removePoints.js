
const PlayersTable = require('../mongodb/player')

//api format player_id, request object
function removePoints(player_id,request){

    
    let state = PlayersTable.getData(player_id).state
    if ("points" in state){
        state.points = Math.max(0,state.points - request.pointsGained)
    }
    else{
        state.points = 0
    }

    PlayersTable.updateState(player_id,state)

}

module.exports = removePoints;

