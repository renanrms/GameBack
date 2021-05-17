
const PlayersTable = require('../mongodb/player')

//api format player_id, request object
function addPoints(player_id,request){

    
    let state = PlayersTable.getData(player_id).state
    if ("points" in state){
        state.points += request.pointsGained
    }
    else{
        state.points = request.pointsGained
    }

    PlayersTable.updateState(player_id,state)

}

module.exports = addPoints;

