const conn = require('../config/db_conn')

async function createTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS user (
        UserId INT NOT NULL AUTO_INCREMENT,
        userName VARCHAR(25) NOT NULL,
        password VARCHAR(255) NOT NULL,
        CONSTRAINT UserPK PRIMARY KEY(UserId));`
        await conn.query(sql)
  }
  
  createTable()
async function getUsers() {
    let sql = `SELECT * FROM user`;
    return await conn.query(sql, (err, result) => {
        if (!result || err) return console.log(err);
    }
    )
}
//  login
async function login(user) {
    let userR = await getUser(user.username)
    if(!userR[0]) throw Error("Username not found!!")
    if(userR[0].Password != userR.password) throw Error("Password Incorrect!!")
    return userR[0]
  }

async function register(userDetails){
    let userR = await getUser(userDetails.userName);
    if(userR[0]) throw Error("Username already exists!!")
    let sql = `INSERT INTO user (userName, password) VALUES ("${userDetails.userName}","${userDetails.password}")`;
    await conn.query(sql)
    const insertedUser = await getUser(userDetails.userName)
    return insertedUser[0]
}

//update user
async function updateUser(userDetails){
    let userR = await getUser(userDetails.userName);
    if(!userR[0]) throw Error("Username not found!!")
    let sql = `UPDATE user SET password = "${userDetails.password}" WHERE userName = "${userDetails.userName}"`;
    await conn.query(sql)
    updatedUser = await getUser(userDetails.userName)
    return updateUser[0]
}

//delete user
async function deleteUser(userDetails){
    let sql = `DELETE FROM user
    WHERE UserId = ${userDetails.UserId}`
    await conn.query(sql)
}


async function getUser(username) {
    let sql = `
      SELECT * FROM user 
      WHERE UserName = "${username}" 
    `
    return await conn.query(sql)
  }

// let getusers = () => users

// function getUsers() {
//     return users;
// }
module.exports = { getUsers,getUser, register, updateUser, deleteUser, login };