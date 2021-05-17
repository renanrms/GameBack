const DbConn = require('./mongo')
var SHA256 = require("crypto-js/sha256");


class AdminTable {
    //tries to check password on database
    static async loginAdmin(username,passwd){
        let collections = await DbConn.getCollection("admin");
        let result = await collections.find().toArray()
        let adminData = result[0]
        console.log(adminData,adminData.username)
        if (passwd ===adminData.password && username===adminData.username){
            return true;
        }
        console.log("[INFO] Login attempted failed")
        return false
    }

}



module.exports = AdminTable; // This is ok.
