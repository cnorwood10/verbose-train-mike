const express = require('express')
const app = express()
const port = process.env.PORT || 5500;


//middle-ware
// app.get('/', function (req, res) {

//   res.send('Hello World from Express')
// })
app.get('/', function (req, res) {

  res.send("<h1> My name is Colby Norwood</h1> <h2>I am a type no.6</h2> <p>Type 6's are good in groups because we are reliable and hard-working. Type 6's need to work on being indecisive.</p>")
})

//app.listen(3000)

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})