const DbConn = require('./mongo')

const collectionName = "statistics"

class StatisticsTable {

    static async registerStatistic(date,value){
        let collections = await DbConn.getCollection(collectionName);


        let entry={'_id':date,'value':value}
        collections.insertOne(entry)
        return true

    }

    static async returnAllStatistics(){
        let collections = await DbConn.getCollection(collectionName);

        let result =  await collections.find().toArray()
        return result
        
    }

    static async returnOneStatistics(date){
        let collections = await DbConn.getCollection(collectionName);

        let result =  await collections.findOne({'_id':date})
        return result
        

    }

    static async updateOneStatistics(dateBefore,valueAfter){
        let collections = await DbConn.getCollection(collectionName);
 
        await collections.updateOne(
            {'_id':dateBefore},
            { $set:  {'value':valueAfter} }
            
        )
        return true
    }


    static async deleteOneStatistics(date){
        let collections = await DbConn.getCollection(collectionName);

        await collections.deleteOne({'_id':date})
        return true
    }

}

module.exports = StatisticsTable;