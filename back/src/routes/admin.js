const AdminTable = require('../mongodb/admin');
var express = require('express')
var router = express.Router()




//check if admin username and password are ok
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    let loginOk = await AdminTable.loginAdmin(username, password)
  
    if (loginOk) {
      return res.status(200).json(generateToken(username,"admin"))
    } else {
      res.statusCode = 403;
      return res.json({})
    }
  })
  
  //Admin signup
  router.post('/signup', async (req, res) => {
  
    const username = req.body.username;
    const password = req.body.password;
  
    let result = await AdminTable.createAdmin(username, password)
    return res.json({ "result": result })
  })
  

  module.exports = router