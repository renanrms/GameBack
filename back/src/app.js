const express = require('express');
var jwt = require('jsonwebtoken');
var cors = require('cors');
const crypto = require('crypto');
const PlayersTable = require('./mongodb/player');
const AdminTable = require('./mongodb/admin');
const RulesTable = require('./mongodb/rules');
const { ok } = require('assert');


const SIGN_SECRET = process.env.SIGN_SECRET || crypto.randomBytes(127).toString('hex');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

function requireAuth(jwtToken,role="admin") {
    try {
        var decoded = jwt.verify(jwtToken, SIGN_SECRET);
        return decoded.role==role
        
    } catch (err) {
        return false;
    }
}


//check if admin username and password are ok
app.post('/login', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    let loginOk=await AdminTable.loginAdmin(username,password)

    if (loginOk){
        
        return res.json({"token":jwt.sign({ role: 'admin' }, SIGN_SECRET)})

    }
    else{
        res.statusCode = 403;
        return  res.json({})
    }

})


//list all rules created
app.get('/rules/returnAllRules', async (req, res) => {

    let rules=await RulesTable.returnAllRules()
    return  res.json(rules)
})


app.post('/rules/registerRule', async (req, res) => {

    const ruleName = req.body.name;
    const ruleValue = req.body.rule;
    let rules=await RulesTable.registerRule(ruleName,ruleValue)
    return  res.json({result:rules})
})


app.get('/rules/returnOneRule', async (req, res) => {

    const ruleName = req.query.name;
    console.log("searching for name",ruleName)
    let rule=await RulesTable.returnOneRule(ruleName)
    return  res.json(rule)
})

app.post('/rules/updateOneRule', async (req, res) => {

    const ruleNameBefore = req.body.name;
    const ruleContentAfter = req.body.rule;

    let rules=await RulesTable.updateOneRule(ruleNameBefore,ruleContentAfter)
    return  res.json(rules)
})


app.post('/rules/deleteOneRule', async (req, res) => {

    const ruleName = req.body.name;
    let rules=await RulesTable.deleteOneRule(ruleName)
    return  res.json(rules)
})

app.listen(port, async () => {    
    console.log(`App listening at http://localhost:${port}`)
})