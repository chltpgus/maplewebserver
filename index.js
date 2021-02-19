const express = require("express");
const server = express();
const PORT = process.env.PORT

let users = [
    {
        id : "1",
        name : "sd",
        num : "2"
    }
];


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://mapleaing.netlify.app");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
       next();
   });
   
   출처: https://m.mkexdev.net/339 [박종명의 아름다운 개발 since 2010.06]

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