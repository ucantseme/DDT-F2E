const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const order = require('./data.js')
app.get('/order/list', (req, res) => {
  res.json(order)
})
app.listen(3000, () => {
  console.log(`server listening at port 3000`)
})
