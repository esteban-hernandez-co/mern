const express = require('express')
const app = express()

//MongoDB connection
const BD = require('./connection')

app.get('/', (req, res) => {
    res.end('Welcome to backend server Node.js')
})

//basic server set up
app.listen(5000, function(){
    console.log('Node Server is up and running')
})