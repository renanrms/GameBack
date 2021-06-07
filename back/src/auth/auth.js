var jwt = require('jsonwebtoken');

const SIGN_SECRET = process.env.SIGN_SECRET || "DEBUG_SECRET";
const validUntil = 3600*24*7 



function checkToken(jwtToken,roleRequired) {
    try {
        let decoded = jwt.verify(jwtToken, SIGN_SECRET);
        
        let isTrue = Date.now() < decoded.validUntil
        let username = decoded.username
        return {
            isOk:isTrue,
            username:username
        }
        
    } catch (err) {
        console.log(err)
        return {
            
            isOk:false,
            username:null
        }
    }

}

function generateToken(username,role) {

    let token = {
        "role": role,
        "username":username,
        "validUntil": Date.now()+validUntil
    }
    return jwt.sign(token, SIGN_SECRET)

}

module.exports = {checkToken,generateToken}