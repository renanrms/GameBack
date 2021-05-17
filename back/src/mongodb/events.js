const DbConn = require('./mongo')

const collectionName = "events"

class EventsTable {

    
    static async addEvent(route,eventName){
        let collections = await DbConn.getCollection(collectionName);


        let entry={'_id':route,'event':eventName}
        collections.insertOne(entry)
        return true

    }

    static async getAllEvents(){
        let collections = await DbConn.getCollection(collectionName);
        let result =  await collections.find().toArray()
        return result
        
    }

    static async getOneEvent(route){
        let collections = await DbConn.getCollection(collectionName);

        let result =  await collections.findOne({'_id':route})
        return result
    }


    static async updateOneEvent(route,newEvent){
        let collections = await DbConn.getCollection(collectionName);
 
        await collections.updateOne(
            {'_id':route},
            { $set:  {'event':newEvent} }
            
        )
        return true
    }


    static async deleteRoute(route){
        let collections = await DbConn.getCollection(collectionName);

        await collections.deleteOne({'_id':route})
        return true
    }

}

module.exports = EventsTable;