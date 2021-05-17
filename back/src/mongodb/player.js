const DbConn = require('./mongo')



class PlayersTable {
    //tries to register player on database
    static async registerPlayer(user,passwd,state={},inventory={}){
        let collections = await DbConn.getCollection("players");

        let result = await collections.find({username:user}).toArray()

        //if player already registred
        if (result.length>0){
            throw 'Player already registred!';
        }
        else{
            let entry={'username':user,'password':passwd,'state':state,'inventory':inventory}
            result = collection.insertOne(entry);
            return result

        }
    }

}


module.exports = PlayersTable; // This is ok.
