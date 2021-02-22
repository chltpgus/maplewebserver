const express = require("express");
const bodyParser = require('body-parser')
const server = express();
const PORT = process.env.PORT
server.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();
let id = 1, name = "user number", num = 3;

let users = 
    [{
        id : 1,
        name : "user number",
        num : 1
    }];



global.users = users;


let UPDATE = 'UPDATE user SET num = '+ num + ' WHERE id =' + id;



let db = new sqlite3.Database('sqlite.db',(err)=>{
    if(err){
        console.log(err.message);
    }  
    console.log('connected to db'); 
});


db.run(UPDATE, function(err){
    if(err){
        return console.log(err.message);
    }

    console.log('UPDATE');
});

 db.each("SELECT * FROM user", function(err, row){   
    console.log(row);

    server.get("/api/user", (req, res) => {
        res.json(row);
        });

});


server.get("/api/user", (req, res) => {
    res.json(req);
    console.log(req.body);   

    });

    server.get("/api/user", (req, res) => {
        res.json(users);
        });
        
     server.listen(PORT);

        /*
        server.listen(3000, () => {
            console.log(`3000번 port에 http server를 띄웠습니다.`)
          });*/




db.close();



server.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://mapleaing.netlify.app");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
   
 
