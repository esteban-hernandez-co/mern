const express = require('express')
const app = express()

//MongoDB connection
const BD = require('./connection')

//route file and user model
const routeUser = require('./routes/user')

//body parser import
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/user', routeUser)


app.get('/', (req, res) => {
    res.end('Welcome to backend server Node.js')
})

//basic server set up
app.listen(9000, function(){
    console.log('Node Server is up and running')
})