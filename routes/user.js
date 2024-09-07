const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaUser = new schema({
    name: String,
    email: String,
    phone: String,
    mobile: String,
    userId: String
})

const userModel = mongoose.model('users', schemaUser)
module.exports = router

//test

router.get('/test', (req, res) => {
    res.end('greeting from testing route ')
})

//add User
router.post('/adduser', (req, res) => {
    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        userId: req.body.userId
    })

    let error
    try{
        newUser.save()
        res.send('User created successfully')
        
    }catch(err){
        error = err
        res.send(err)
    }
})

//get Users
router.get('/getusers', async (req, res)=> {
    try{
        let docs = await userModel.find({})
        res.send(docs)
    }catch(err){
        res.send(err)
    }
})

//User
router.route('/userdata')
.get(async (req, res) =>{
    try{
        let docs = await userModel.find({_id:req.body._id})
        res.send(docs)
    }catch(err){
        res.send(err)
    }
})
.post(async (req, res) => {
    try{
        let docs = await userModel.find({_id:req.body._id})
        res.send(docs)
    }catch(err){
        res.send(err)
    }
})
.put(async(req, res) =>{
    try{
        let docs = await userModel.findOneAndUpdate({_id:req.body._id}, {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
        })
        res.send('User updated successfully')
    }catch(err){
        res.send(err)
    }
})

router.route('/deleteuserdata')
.post(async(req, res) =>{
    try{
        let docs = await userModel.findOneAndDelete({_id:req.body._id})
        res.send(`${docs.name} has been deleted succesfully`)
    }catch(err){
        res.send(err)
    }
})
 


    