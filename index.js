const express = require("express");
const bodyParser = require('body-parser')
const server = express();
const PORT = process.env.PORT
server.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();
let id = 1, name = "user number", num = 3;

let UPDATE = 'UPDATE user SET num = '+ num + ' WHERE id =' + id;



let db = new sqlite3.Database('sqlite.db',(err)=>{
    if(err){
        console.log(err.message);
    }  
    console.log('connected to db'); 
});


server.post("/api/user/test", (req, res) => {


    let db = new sqlite3.Database('sqlite.db',(err)=>{
        if(err){
            console.log(err.message);
        }  
        console.log('connected to db'); 
    });

    let users = 
    [{
        id : 1,
        name : "user number",
        num : 1
    }];

    console.log(req.body.num);

    users = req.body;

    num = req.body.num;

    let UPDATE = 'UPDATE user SET num = '+ num + ' WHERE id =' + id;

    db.run(UPDATE, function(err){
        if(err){
            return console.log(err.message);
        }
    
        console.log(UPDATE);
        console.log('UPDATE');
    });

    });

db.each("SELECT * FROM user", function(err, row){

    let users = 
    [{
        id : 1,
        name : "user number",
        num : 1
    }];
    users = row;

    server.get("/api/user", (req, res) => {
        res.json(users);
        });
        
        server.listen(PORT);
        /*
        server.listen(3000, () => {
            console.log(`3000번 port에 http server를 띄웠습니다.`)
          });*/
        

});


db.close();


/*
let users = 
    [{
        id : 1,
        name : "user",
        num : 1
    }
];
*/


server.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://mapleaing.netlify.app");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
   
 
/*
server.get("/api/user", (req, res) => {
res.json(users);
});

server.get("/api/user/:id", (req, res) => {
    const user = users.find((u)=>{
        return u.id === req.params.id;
    });
    if(user){
        res.json(user);
    } else{
        res.status(404).json({ errorMessage : "User was not found"});
    }
});

server.post("/api/user", (req, res) => {
    res.json(users);
    });

server.listen(PORT);
*/