


const { MongoClient } = require('mongodb');


// Replace the following with values for your environment.
const username = encodeURIComponent(process.env.MONGO_INITDB_ROOT_USERNAME);
const password = encodeURIComponent(process.env.MONGO_INITDB_ROOT_PASSWORD);
const clusterUrl = "mongo:27017";
const authMechanism = 'DEFAULT';




// Connection URI
const uri = `mongodb://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;
// Create a new MongoClient
const client = new MongoClient(uri);


class Database{
    constructor() {
        console.log('Trying connection to server');
        client.connect();
        client.db('game').command({ ping: 1 });
        console.log('Connected successfully to server');
    }

}

module.exports = { Database: Database }; // This is ok.

