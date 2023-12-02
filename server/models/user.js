const users = [
    {
        username: 'akshay123',
        password: 'ak1234'
    },
    {
        username: 'dummy345',
        password: 'dummypass'

    }
]
let getusers = () => users

function getUsers() {
    return users;
}
module.exports = {getUsers, getusers};