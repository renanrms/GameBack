
const PlayersTable = require('../mongodb/player')

//api format player_id, request object
async function addPoints(player_id,requestData){

    
    let playerState = await PlayersTable.getState(player_id)
    console.log("state",playerState)
    console.log("player_id",player_id)
    console.log("request",requestData)
    if ("points" in playerState){
        //just update new record
        if (playerState.points < requestData.pointsGained){
            playerState.points = requestData.pointsGained
        }
        
    }
    else{
        playerState.points = requestData.pointsGained
    }
    console.log("saving state ",playerState)
    PlayersTable.updateState(player_id,playerState)

}

module.exports = addPoints;

