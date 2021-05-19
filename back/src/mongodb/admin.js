const DbConn = require('./mongo')
var SHA256 = require("crypto-js/sha256");

const collectionName = "admin"

class AdminTable {
    //tries to check password on database
    static async loginAdmin(username, password){
      let collections = await DbConn.getCollection(collectionName);
      
      let query = await collections.findOne({"username": username})

      if (query==null) // não encontrou usario
      {
        console.log("[INFO] Login attempted failed")
        return false
      }
      else if (password === query.password && username === query.username){
        return true;
      }
      else {// senha errada
        console.log("[INFO] Login attempted failed")
        return false
      }

    }

  static async createAdmin(username, password) {
    let collections = await DbConn.getCollection(collectionName);

    let entry = { 'username': username, 'password': password }
    collections.insertOne(entry)
    return true
  }

}



module.exports = AdminTable; // This is ok.
