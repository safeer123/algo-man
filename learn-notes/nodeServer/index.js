const mysql = require('mysql');
const express = require("express");
const app = express();

const PORT = 3000;

const connection = mysql.createConnection({
  host: 'db_server',
  user: 'testuser',
  password: 'admin123',
  database: 'db01'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.get("/users",(req,res) => {
  
  connection.query('SELECT * from users', (err, rows) => {
      if(err) throw err;
      console.log('The data from users table are: \n', rows);
      res.send({
        records: rows,
      });
      // connection.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});