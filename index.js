
const express = require("express");
const bodyParser = require('body-parser')
const server = express();
const PORT = process.env.PORT
server.use(bodyParser.json());
let id = 1, name = "user number", num = 3;


var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'us-cdbr-east-03.cleardb.com',
    port     : '3306',
    user     : 'b932d2fb62d529',
    password : 'b5b268a8',
    database : 'heroku_a3e154cc90440ef'
   });
/*
   connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to mysql!");
  });

  */

let users =
    [{
        id: 1,
        name: "user number",
        num: 1
    }];

/*
connection.query('select * from table ', function (err, result) {

    console.log(result);

});*/



server.get("/api/user", (req, res) => {

    

    connection.query("SELECT * FROM user", function (err, row) {

    
        user = row;
        users = req.body;
        res.json(user);                                  // 서버에 json으로 보내기
        console.log(row);
        num = users.num, id= users.id;
        let UPDATE = "UPDATE user SET num = '" + num + "'"+ " WHERE id ='" + id+"'";
    
        connection.query(UPDATE, function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log('UPDATE');
        
        
        });
    });

});





/*

server.get("/api/user", (req, res) => {

    users = req.body;
    console.log(users);
    num = users.num, id= users.id;
    let UPDATE = 'UPDATE user SET num = ' + num + ' WHERE id =' + id;

    console.log(UPDATE);
    
    let db = new sqlite3.Database('sqlite.db', (err) => { // 디비 불러오기
        if (err) {
            console.log(err.message);
        }
        console.log('connected to db');
    });

    db.run(UPDATE, function (err) {
        if (err) {
            return console.log(err.message);
        }
        console.log('UPDATE');
    });

    db.close();

});
*/


server.listen(PORT);

/*
server.listen(3000, () => {
    console.log(`3000번 port에 http server를 띄웠습니다.`)
  });


*/


server.all('/*', function (req, res, next) {
    //res.header("Access-Control-Allow-Origin", "https://mapleaing.netlify.app");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


/*
db.run(UPDATE, function (err) {
    if (err) {
        return console.log(err.message);
    }

    console.log('UPDATE');
});
*/

/*

ClearDB
mysql://[user name]:[password]@[Host name]/[password2]?reconnect=true
mysql://b932d2fb62d529:b5b268a8@us-cdbr-east-03.cleardb.com/heroku_a3e154cc90440ef?reconnect=true
Username:	b932d2fb62d529
Password:	b5b268a8 (Reset)
*/ 
