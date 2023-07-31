const express = require('express')
const cors    = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const conn = require('./db/conn')

conn()

const routes = require('./routes/router')

app.listen(3000, function() {
  console.log('BACKEND running on port: 3000')
})