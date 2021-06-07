const DbConn = require('./mongo')



class PlayersTable {

    //tries to register player on database
    static async register(username,passwd,state={},inventory={}){
        let collection = await DbConn.getCollection("players")

        let entry={'_id':username,'password':passwd,'state':state,'inventory':inventory}
        let result = collection.insertOne(entry)
        return result
    }

    static async getData(username){

        let collection = await DbConn.getCollection("players")
        let result = await collection.findOne({'_id':username})
        delete result.password

        return result
    }

    static async getState(username){

        let player = await this.getData(username)
        return player.state
    }

    static async login(username,password){
        let collection = await DbConn.getCollection("players")
        let result = await collection.findOne({'_id':username})
        return username===result._id && password === result.password
    }

    //should not be accessible over api
    static async updateState(username,state){
        let collection = await DbConn.getCollection("players")
        await collection.updateOne(
            {'_id':username},
            { $set:  {'state':state} }
        )
    }

    //should not be accessible over api
    static async updateInventory(username,inventory){
        let collection = await DbConn.getCollection("players")

        await collection.updateOne(
            {'_id':username},
            { $set:  {'inventory':inventory} }
        )
    }

}


module.exports = PlayersTable;
