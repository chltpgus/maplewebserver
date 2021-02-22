const express = require("express");
const bodyParser = require('body-parser')
const server = express();
const PORT = process.env.PORT
server.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();
let id = 1, name = "user number", num = 3;

let users =
    [{
        id: 1,
        name: "user number",
        num: 1
    }];



// let UPDATE = 'UPDATE user SET num = ' + num + ' WHERE id =' + id;



let db = new sqlite3.Database('sqlite.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('connected to db');
});



/*
db.run(UPDATE, function (err) {
    if (err) {
        return console.log(err.message);
    }

    console.log('UPDATE');
});
*/

server.get("/api/user", (req, res) => {

    let db = new sqlite3.Database('sqlite.db', (err) => { // 디비 불러오기
        if (err) {
            console.log(err.message);
        }
        console.log('connected to db');
    });

    db.each("SELECT * FROM user", function (err, row) { // 디비에서 user정보 가져오기
        res.json(row);                                  // 서버에 json으로 보내기
    });
});


server.get("/api/users", (req, res) => {

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

});



server.listen(PORT);

/*
server.listen(3000, () => {
    console.log(`3000번 port에 http server를 띄웠습니다.`)
  });

*/

db.close();



server.all('/*', function (req, res, next) {
    //res.header("Access-Control-Allow-Origin", "https://mapleaing.netlify.app");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


