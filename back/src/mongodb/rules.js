const DbConn = require('./mongo')

const collectionName = "rules"

class RulesTable {

    
    static async registerRule(rule,content){
        let collections = await DbConn.getCollection(collectionName);


        let entry={'_id':rule,'content':content}
        collections.insertOne(entry)
        return true

    }

    static async returnAllRules(){
        let collections = await DbConn.getCollection(collectionName);

        let result =  await collections.find().toArray()
        return result
        
    }

    static async returnOneRule(rule){
        let collections = await DbConn.getCollection(collectionName);

        let result =  await collections.findOne({'_id':rule})
        return result
        

    }

    static async updateOneRule(ruleBefore,contentAfter){
        let collections = await DbConn.getCollection(collectionName);
 
        await collections.updateOne(
            {'_id':ruleBefore},
            { $set:  {'content':contentAfter} }
            
        )
        return true
    }


    static async deleteOneRule(rule){
        let collections = await DbConn.getCollection(collectionName);

        await collections.deleteOne({'_id':rule})
        return true
    }

}

module.exports = RulesTable;