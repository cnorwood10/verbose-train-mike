const express = require('express')
const app = express()

//middle-ware
app.get('/', function (req, res) {

  res.send('Hello World from Express')
})

app.listen(3000)