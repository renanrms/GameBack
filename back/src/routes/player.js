const PlayersTable = require('../mongodb/player');
const ManagerStatistics = require('../manager-statistics.js')
const { checkToken, generateToken } = require('../auth/auth.js')

var express = require('express')

var router = express.Router()


//check if username and password are ok
router.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password)

    PlayersTable.login(username,password)
    .then(async function(result){
        if (result){
            await ManagerStatistics.update()
            return res.json({"X-Auth-Token": generateToken(username,"player")})
        }
        else{
            res.statusCode = 403;
            return  res.json({"status":"forbidden"})
        }
    })
    .catch(function (err){
        res.statusCode =500
        console.error('Error',err);
        return res.json({"error":"Internal Server Error"})
    })

})

//check if admin username and password are ok
router.post('/register', (req, res) => {
    console.log("register hit")
    const username = req.body.username;
    const password = req.body.password;
    const state = req.body.state || {};
    const inventory = req.body.inventory || {};
    res.statusCode=200;
    
    PlayersTable.register(username,password,state,inventory)
    .then((result) => res.json({"status":"ok","player":result}))
    .catch((error) => res.json({"status":"server error"}))

})

router.get('/getData', async (req, res) => {
    const authToken = req.header('X-Auth-Token')
    console.log(authToken)
    const username = checkToken(authToken).username
    let result = await PlayersTable.getData(username)
    return res.json(result)



})



module.exports = router
