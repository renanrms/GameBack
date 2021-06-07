const express = require('express');
var cors = require('cors');
const { checkToken, generateToken } = require('./auth/auth.js')
const playerRoutes = require('./routes/player.js')
const adminRoutes = require('./routes/admin.js')
const rulesRoutes = require('./routes/rules.js')
const statisticsRoutes = require('./routes/statistics.js')
const eventsRoutes = require('./routes/events.js')


const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3001


app.use('/player', playerRoutes)
app.use('/admin', adminRoutes)
app.use('/rules', rulesRoutes)
app.use('/statistics', statisticsRoutes)
app.use('/events', eventsRoutes)

app.listen(port, async () => {
  console.log(`App listening at http://localhost:${port}`)
})

