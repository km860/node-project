const express = require('express')
const bodyParser = require('body-parser')
const { ObjectId } = require('mongodb')
const passport = require('passport')

const { mongoose } = require('../db/mongoose')
const { User } = require('../models/user')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

// Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

app.get('/', (req, res) => {
  res.send('Hello')
})


app.listen(port, () => {
  console.log(`Started up at port ${port}...`)
})

