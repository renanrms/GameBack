const express = require('express')


const {Database} =require( './mongodb/mongodatabase.js');


const app = express()
const port = 30000


app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.listen(port, () => {
    const mydbWrapper = new Database ();

    console.log(`Example app listening at http://localhost:${port}`)
})