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


server.get("/", (req, res) => {
res.send(users);
});

server.listen(PORT);