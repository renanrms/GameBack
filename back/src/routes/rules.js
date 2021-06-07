const RulesTable = require('../mongodb/rules');
var express = require('express')
var router = express.Router()


//list all rules created
router.get('/returnAllRules', async (req, res) => {
    let rules = await RulesTable.returnAllRules()
    return res.status(200).json(rules)
})

router.post('/registerRule', async (req, res) => {
    const name = req.body.name;
    const content = req.body.content;
    let rules = await RulesTable.registerRule(name, content)
    return res.status(200).json({ result: rules })
})

router.get('/returnOneRule', async (req, res) => {
    const ruleName = req.query.name;
    console.log("searching for name", ruleName)
    let rule = await RulesTable.returnOneRule(ruleName)
    return res.status(200).json(rule)
})

router.post('/updateOneRule', async (req, res) => {
    const ruleNameBefore = req.body.name;
    const ruleContentAfter = req.body.content;

    let rules = await RulesTable.updateOneRule(ruleNameBefore, ruleContentAfter)
    return res.status(200).json(rules)
})

router.post('/deleteOneRule', async (req, res) => {
    const ruleName = req.body.name;

    let rules = await RulesTable.deleteOneRule(ruleName)
    return res.status(200).json(rules)
})

module.exports = router