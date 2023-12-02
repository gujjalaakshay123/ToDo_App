const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

router.get('/getTodoList', (req, res)=>{
    try {
        const todoList = Todo.getList()
        res.send(todoList)
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})

module.exports = router