const todoList = [
    {
        title: 'get groceris',
        shortDescription: 'get groceries from  tops',
        userName: 'sdwewsd'
    },
    {
        title: 'laundry',
        shortDescription: ' get laundry done',
        userName: 'sdfwcsd'
    },
    {
        title: 'assignment',
        shortDescription: 'submit the assignment by deadline',
        userName: ' sdfusdfnsdf'
    }

]
const con = require('../config/db_conn')
// const userData = require('../models/user')

async function createTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS toDo (
        TodoID INT NOT NULL AUTO_INCREMENT,
        Titile VARCHAR(255),
        shortDescription VARCHAR(255),
        userID INT,
        CONSTRAINT UserPK PRIMARY KEY(TodoID));`
        await con.query(sql)
  }
  
  createTable()



async function getodoList(userDetails){
    let todoList = await getTodoList(userDetails);
    return todoList;

}

//get user todo list
async function getTodoList(userID) {
    let sql = `SELECT * FROM toDo WHERE userID = ${userID}`
    return await con.query(sql)
}
async function getTodoItem(todoID) {
    let sql = `SELECT * FROM toDo WHERE userID = ${todoID}`
    return await con.query(sql)
}
//add todo Item
async function addTodoItem(todoDetails) {
    let sql = `INSERT INTO toDo (Title, shortDescription, userID) Values ("${todoDetails.Title}","${todoDetails.shortDescription}", "${todoDetails.UserID}")`
    await con.query(sql)
    let queryTogetInsertedRow = `SELECT * FROM toDo WHERE userID = ${todoDetails.UserID} and Title = "${todoDetails.Title}`
    let insertedRow = con.query(queryTogetInsertedRow)
    return insertedRow[0]
}

//update the to item
async function updateTodo(todoDetails){
    // if(!userR[0]) throw Error("Username not found!!")
    let sql = `UPDATE toDo  SET  Title = "${todoDetails.Title}"  WHERE  UserID ="${todoDetails.UserID}"`
    await con.query(sql)
    let updateTodo = getTodoItem(todoDetails.todoID)
    return updateTodo[0]
}
//delete the todo item
async function deleteTodoItem(todoDetails){
    let sql = `DELETE FROM toDo where TodoID = "${todoDetails.todoID}`
    await con.query(sql)
}


// let getTodoList = () => todoList

// function getList(){
//     return todoList;
// }

module.exports = {getodoList,deleteTodoItem,updateTodo,getTodoItem, addTodoItem}