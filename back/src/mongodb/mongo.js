//This file creates a wrapper to database tables. This should also be visible to game admin api
const { MongoClient } = require('mongodb');
var SHA256 = require("crypto-js/sha256");

// Replace the following with values for your environment.
const username = encodeURIComponent(process.env.MONGO_INITDB_ROOT_USERNAME || "root");
const password = encodeURIComponent(process.env.MONGO_INITDB_ROOT_PASSWORD || "example");
const dbName = process.env.DB_NAME || "gameBack";
const dbPort = process.env.DB_PORT || 27017;
const dbAddress = process.env.DB_ADDRESS || "localhost";//"172.20.0.3";
const authMechanism = 'DEFAULT';
const adminUsername = "admin" || process.env.ADMIN_USERNAME
const adminPassword = "password" || process.env.ADMIN_PASSWORD


// Connection URI parameters
const uri = `mongodb://${username}:${password}@${dbAddress}:${dbPort}/?authMechanism=${authMechanism}`
const client = new MongoClient(uri);



async function insertDefaultData(db){
    let collection = db.collection("admin")
    let admins = await collection.find().toArray()
    if (admins.length>0){
        console.log("[INFO] Admin already registred")
    }
    else{
        let passwd = SHA256(adminPassword);
        let entry={'username':adminUsername,'password':adminPassword}
        collection.insertOne(entry);
        console.log("[INFO] Admin registred successfully");
    }


}

//Use a singleton to ensure a single connection to the database
class DbConn {
    constructor() {
        if (!DbConn._instance) {
            DbConn._instance = this;
        }
        return DbConn._instance;
    }

    static async getCollection(collectionName) {
        if (!DbConn._dbConn) {
            await client.connect()
            DbConn._dbConn = await client.db(dbName)
            await insertDefaultData(DbConn._dbConn)
        }
        return DbConn._dbConn.collection(collectionName);
    }

}



module.exports = DbConn
