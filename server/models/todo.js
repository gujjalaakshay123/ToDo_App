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

let getTodoList = () => todoList

function getList(){
    return todoList;
}

module.exports = {getList}