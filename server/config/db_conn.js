require('dotenv').config();
const mysql = require('mysql2')
const conn = mysql.createPool({
    host: '127.0.0.1',
    user: 'root', 
    password: 'todoapp123',
    database: 'toDoApp'  
})

// conn.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//       return;
//     }
//     console.log('Connected to MySQL');
//   });
const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    conn.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
module.exports = {conn, query};