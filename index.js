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


server.get("/api/user", (req, res) => {
res.json(users);
});

server.listen(PORT);