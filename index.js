const express = require("express");
const server = express();

const port = process.env.PORT;

let users = [
    {
        id: "1"
        ,name:"NumberOfUsers"
        ,number:"1"
    }
];

sever.get("/users",(res,res)=>{
    res.json(users);
});

server.listen(port, () => {
    console.log("The server is running");
});



 /*
app.get("/", (req, res) => {
res.send(result);
});
app.listen(port);
*/