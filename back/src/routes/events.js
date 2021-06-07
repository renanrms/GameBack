
const EventsTable = require('../mongodb/events');
const eventList = require('../events/actionsList')
const { checkToken, generateToken } = require('../auth/auth.js')
var express = require('express')
var router = express.Router()


router.get('/getAllEvents', async (req, res) => {
    let events = await EventsTable.returnAllEvents()
    return res.json(events)
  })
  
  router.post('/addEvent', async (req, res) => {
    const name = req.body.name;
    const route = req.body.route;
  
    let result = await EventsTable.addEvent(name, route)
    return res.json({"result": result})
  })
  
  router.get('/getOneEvent', async (req, res) => {
    const route = req.query.route;
  
    let event = await EventsTable.getOneEvent(route)
    return res.json(event)
  })
  
  router.post('/updateOneEvent', async (req, res) => {
    const name = req.body.name;
    const route = req.body.route;
  
    let event = await EventsTable.updateOneEvent(name, route)
    return res.json(event)
  })
  
  router.post('/deleteOneEvent', async (req, res) => {
    const id = req.body.id
  
    let event = await EventsTable.deleteOneEvent(id)
    return res.json(event)
  })
  
  router.post('/getAviables', async (req, res) => {
    return res.json(eventList)
  })
  
  
  router.post('/', async (req, res) => {
      const route = req.body.route
      const authToken = req.header('X-Auth-Token')
      const check = checkToken(authToken)
  
      if (!check.isOk){
          res.statusCode=403
          return res.json({})
      }
      console.log("route",route)
      console.log("eventList",eventList)
      let response ={}
      if (route in eventList){
          const fun =  eventList[route]
          response = fun(check.username,req.body.data)
      } else {
          res.statusCode=404
      }
      return  res.json(response)
  })
  

  
module.exports = router