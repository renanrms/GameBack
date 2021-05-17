const {Database} =require( './mongodb/mongodatabase.js');

function checkAdminPassword(username,password){
    return true;
}



module.exports = checkAdminPassword;