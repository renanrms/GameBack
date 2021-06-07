const StatisticsTable = require('../mongodb/statistics.js')
const ManagerStatistics = require('../manager-statistics.js')
var express = require('express')
var router = express.Router()


router.post('/update', async (req, res) => {
    let run= await ManagerStatistics.update()
    return  res.json(run)
})

router.get('/get', async (req, res) => {
    let run= await ManagerStatistics.list()
    return  res.json(run)
})

//list all statistics created
router.get('/returnAllStatistics', async (req, res) => {
    //console.log('a')
    let statistics=await StatisticsTable.returnAllStatistics()
    console.log(statistics)
    return  res.json(statistics)
})


router.post('/registerStatistic', async (req, res) => {

    const dateName = req.body.date;
    const ValueName = req.body.value;
    let statistics=await StatisticsTable.registerStatistic(dateName,ValueName)
    return  res.json({result:statistics})
})


router.get('/returnOneStatistic', async (req, res) => {

    const dateName = req.query.date;
    console.log("searching for name",dateName)
    let statistics=await StatisticsTable.returnOneStatistics(dateName)
    return  res.json(statistics)
})

router.post('/updateOneStatistic', async (req, res) => {

    const dateBefore = req.body.date;
    const valueAfter = req.body.value;

    let statistics=await StatisticsTable.updateOneStatistics(dateBefore,valueAfter)
    return  res.json(statistics)
})


router.post('/deleteOneStatistic', async (req, res) => {

    const dateName = req.body.date;
    let statistics=await StatisticsTable.deleteOneStatistics(dateName)
    return  res.json(statistics)
})

module.exports = router