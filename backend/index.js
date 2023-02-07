const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8800;

app.use(express.json());

//create mysql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nat@1408',
    multipleStatements: true
})

//connect to mysql
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySql Connected');

    //create database
    const createDb = 'CREATE DATABASE IF NOT EXISTS nodejs_login';

    //create table
    const createTable = 'CREATE TABLE IF NOT EXISTS nodejs_login.users (id int AUTO_INCREMENT, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id));';

    // create database and table
    db.query(createDb, (err, result) => {
        if(err) {
            throw err;
        }
        console.log('Database created');
    })

    // create table
    db.query(createTable, (err, result) => {
        if(err) {
            console.log("Error in creating table");
        }
        console.log('Table created');
    })
})



// get all users
app.get('/users', (req, res) => {
    const q = 'SELECT * FROM nodejs_login.users';
    db.query(q, (err, result) => {
        if(!err) {
            res.send(result);
        }
        else {
            console.log(err);
        }
    })
})

// post data
app.post('/users', (req, res) => {

    const {username, email, password} = req.body;
    const q = `INSERT INTO nodejs_login.users (username, email, password) VALUES ('${username}', '${email}', '${password}');`;

    db.query(q, (err, result) => {
        if(!err) {
            // console.log(req.body)
            res.send("Data inserted successfully");
            db.end();
        }
        else {
            console.log("Error in inserting data");
            res.send("Error in inserting data")
        }
    })
})

//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})