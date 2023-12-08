const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

router
.post('/getTodoList', async (req, res)=>{
    try {
        const todoList = await Todo.getodoList()
        res.send(todoList)
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})
//get todo item based on the userid and title
.post('/addTodoItem', async (req, res)=>{
    try {
        const todoitem = await Todo.addTodoItem(req.body)
        res.send(todoitem)
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})
//update
.put('/updateTodoItem', async (req,res)=>{
    try {
        const user = await Todo.updateTodo(req.body);
         res.send(user)
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})
//delete
.delete('/deleteTodoItem', async (req, res)=>{
    try {
        await Todo.deleteTodoItem(req.body)
         res.send({success: 'item deleted'})
    } catch (error) {
        res.status(401).send({message: error.message})
    }
})

module.exports = router