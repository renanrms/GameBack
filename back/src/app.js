const express = require('express');
var cors = require('cors');
const PlayersTable = require('./mongodb/player');
const AdminTable = require('./mongodb/admin');
const RulesTable = require('./mongodb/rules');
const EventsTable = require('./mongodb/events');
const eventList = require('./events/actionsList')
const StatisticsTable = require('./mongodb/statistics.js')
const ManagerStatistics = require('./manager-statistics.js')
const {checkToken,generateToken} = require('./auth/auth.js')

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;

app.listen(port, async () => {    
    console.log(`App listening at http://localhost:${port}`)
})

//check if admin username and password are ok
app.post('/admin/login', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    let loginOk=await AdminTable.loginAdmin(username,password)

    if (loginOk){
        return res.json(generateToken(username,"admin"))
    }
    else{
        res.statusCode = 403;
        return  res.json({})
    }

})


//----------------------------PLAYER----------------------




//check if username and password are ok
app.post('/player/login', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    let loginOk=await PlayersTable.login(username,password)

    if (loginOk){
        return res.json(generateToken(username,"player"))
    }
    else{
        res.statusCode = 403;
        return  res.json({})
    }

})

//check if admin username and password are ok
app.post('/player/register', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const state = req.body.state || {};
    const inventory = req.body.inventory || {};

    let result = {status:"ok"};
    try {
        result.user = await PlayersTable.register(username,password,state,inventory)

    } catch (error) {
        res.statusCode=400
        result.status=error
    }

    return res.json(result)

})

app.get('/player/getData', async (req, res) => {

    const username = req.query.username;
    let result = await PlayersTable.getData(username)
    return res.json(result)

})











//----------------------------RULES----------------------


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






//----------------------------STATISTICS----------------------


app.post('/statistics/update', async (req, res) => {
    let run= await ManagerStatistics.update()
    return  res.json(run)
})

app.post('/statistics/get', async (req, res) => {
    let run= await ManagerStatistics.list()
    return  res.json(run)
})

//list all statistics created
app.get('/statistics/returnAllStatistics', async (req, res) => {
    //console.log('a')
    let statistics=await StatisticsTable.returnAllStatistics()
    console.log(statistics)
    return  res.json(statistics)
})


app.post('/statistics/registerStatistic', async (req, res) => {

    const dateName = req.body.date;
    const ValueName = req.body.value;
    let statistics=await StatisticsTable.registerStatistic(dateName,ValueName)
    return  res.json({result:statistics})
})


app.get('/statistics/returnOneStatistic', async (req, res) => {

    const dateName = req.query.date;
    console.log("searching for name",dateName)
    let statistics=await StatisticsTable.returnOneStatistics(dateName)
    return  res.json(statistics)
})

app.post('/statistics/updateOneStatistic', async (req, res) => {

    const dateBefore = req.body.date;
    const valueAfter = req.body.value;

    let statistics=await StatisticsTable.updateOneStatistics(dateBefore,valueAfter)
    return  res.json(statistics)
})


app.post('/statistics/deleteOneStatistic', async (req, res) => {

    const dateName = req.body.date;
    let statistics=await StatisticsTable.deleteOneStatistics(dateName)
    return  res.json(statistics)
})








//----------------------------Events----------------------

app.get('/events/getAllEvents', async (req, res) => {

    let events=await EventsTable.returnAllRules()
    return  res.json(events)
})


app.post('/events/addEvent', async (req, res) => {

    const route = req.body.route;
    const eventName = req.body.eventName;
    let result=await EventsTable.addEvent(route,eventName)
    return  res.json({"result":result})
})


app.get('/events/getOneEvent', async (req, res) => {

    const route = req.query.route;
    let event=await EventsTable.getOneEvent(route)
    return  res.json(event)
})

app.post('/events/updateOneEvent', async (req, res) => {

    const route = req.body.route;
    const eventName = req.body.eventName;

    let event=await EventsTable.updateOneEvent(route,eventName)
    return  res.json(event)
})


app.post('/events/getAviables', async (req, res) => {
    return res.json(eventList)
})



app.post('/events', async (req, res) => {

    const route = req.body.route
    const authToken = req.header('X-Auth-Token')
    const check = checkToken(authToken)
    if (!check.isOk){
        res.statusCode=403
        return res.json({})
    }

    let response ={}
    if (route in eventList){
        response = eventList.route(check.username,req.body)
    }
    else{
        res.statusCode=404
    }
    return  res.json(response)
})