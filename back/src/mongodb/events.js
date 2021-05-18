const DbConn = require('./mongo')
const { v4: uuidv4 } = require('uuid');

const collectionName = "events"

class EventsTable {

    static async addEvent(name, route){
        let collections = await DbConn.getCollection(collectionName);

        let entry = {'_id': uuidv4(), 'name': name, 'route': route}
        collections.insertOne(entry)
        return true
    }

    static async returnAllEvents(){
        let collections = await DbConn.getCollection(collectionName);
        let result =  await collections.find().toArray()
        return result
    }

    static async getOneEvent(route){
        let collections = await DbConn.getCollection(collectionName);

        let result = await collections.findOne({'route': route})
        return result
    }

    static async updateOneEvent(route, newEvent){
        let collections = await DbConn.getCollection(collectionName);

        await collections.updateOne(
            {'route': route},
            { $set:  {'event': newEvent} }

        )
        return true
    }

    static async deleteRoute(route){
        let collections = await DbConn.getCollection(collectionName);

        await collections.deleteOne({'route': route})
        return true
    }
}

module.exports = EventsTable;