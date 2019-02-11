const express = require('express')
const bodyParser = require('body-parser')
const { ObjectId } = require('mongodb')
const passport = require('passport')

const { mongoose } = require('../db/mongoose')
const { User } = require('../models/user')
const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const app = express()
const port = process.env.PORT || 5000

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
/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */
app.get('/', (req, res) => {
  res.send('Hello')
})
/* app.post('/users', (req, res, next) => {
  let body = _.pick(req.body, ['username']);
  let user = new User(body);

  user.save().then((doc) => {
    console.log(doc)
    res.send(doc)
  }).catch((e) => {
    res.status(400).send(e);
  })
}); */

app.listen(port, () => {
  console.log(`Started up at port ${port}...`)
})

//module.exports = {app}