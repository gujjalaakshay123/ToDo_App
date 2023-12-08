const express = require('express')
const router = express.Router()
const User = require('../models/user')

router
.get('/getUsers', async (req, res) => {
    try {
        const users = await User.getUsers();
        res.send(users)
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})
.post('/login', async (req, res)=>{
    try {
        const user = await User.login(req.body)
         res.send(user)
    }catch(error){
        res.status(401).send({message: error.message})
    }
})
//update
.put('/updateUser', async (req,res)=>{
    try {
        const user = await User.updateUser(req.body);
         res.send(user)
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})
.post('/register',async (req, res)=>{
    try {
        const user = await User.register(req.body)
         res.send(user)
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})
.delete('/deleteUser', async (req, res)=>{
    try {
        await User.deleteUser(req.body)
         res.send({success: 'user deleted'})
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})
module.exports = router