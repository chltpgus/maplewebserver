const express = require("express");  //express 서버 구성
const bodyParser = require('body-parser') // 바디펄스로 POST로 온 것을 확인
const server = express();
const http = require("http");
const PORT = process.env.PORT  //포트번호 저장
server.use(bodyParser.json());
const cors = require('cors');   

let id = 1, name = "user number", num = 3;  //MYSQL UPDATE에 들어가는 변수들 선언
let users =   //사용자 수가 들어가는 객체 선언
    [{
        id: 1,
        name: "user number",
        num: 1
    }];

const corsOptions = {  //클라이언트가 cors문제 없이 들어 올 수 있게 권한을 줌
  origin: "https://mapleaing.netlify.app",
  credentials: true
}
server.use(cors(corsOptions));

let mysql = require('mysql');  //ClearDB MYSQL 사용

setInterval(() => {   //MYSQL이 방치되면 꺼지는 것을 막기위해 주소를 계속 보내줌
    http.get("http://mapleing.herokuapp.com/api/user");
}, 3000);

let connection = mysql.createConnection({    //MYSQL CONNECTION
    host     : 'us-cdbr-east-03.cleardb.com',
    port     : '3306',
    user     : 'b932d2fb62d529',
    password : 'b5b268a8',
    database : 'heroku_a3e154cc90440ef'
   });


server.get("/api/user", (req, res) => { // get요청이 오면 

    connection.query("SELECT * FROM user", function (err, row) {

        user = row;
        users = req.body;
        res.json(user);                                  // 서버에 json으로 보내기
        console.log(row); 
    });

    
});

server.post("/api/user", (req, res) => { // post 요청이 오면

    connection.query("SELECT * FROM user", function (err, row) {

        user = row;
        users = req.body;
        res.json(user);                                  // 서버에 json으로 보내기
        console.log(row);
        num = users.num, id= users.id;
        let UPDATE = "UPDATE user SET num = '" + num + "'"+ " WHERE id ='" + id+"'";
    
        connection.query(UPDATE, function (err) {  //클라이언트한테 온 정보를 업데이트
            if (err) {
                return console.log(err.message);
            }
            console.log('UPDATE');
        
        
        });
    });
});

server.listen(PORT);

/*

ClearDB
mysql://[user name]:[password]@[Host name]/[password2]?reconnect=true
mysql://b932d2fb62d529:b5b268a8@us-cdbr-east-03.cleardb.com/heroku_a3e154cc90440ef?reconnect=true
Username:	b932d2fb62d529
Password:	b5b268a8 (Reset)
*/ 
