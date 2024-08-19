const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mern');

const objectDB = mongoose.connection

objectDB.on('connected', ()=>{console.log('MongoDB connection is successful')})
objectDB.on('error', ()=>{console.log('Unsuccessful MongoDB connection ')})

module.exports = mongoose