const express = require("express");
const app = express();
const port = process.env.PORT;
 
var o = {} // empty Object
var key = 'reponse';
o[key] = []; // empty Array, which you can push() values into
 
 
var data = {
    name: 'jason',
    age: '33'
};
var data2 = {
    name: 'mike',
    data: '34'
};
o[key].push(data);
o[key].push(data2);
 
var result = JSON.stringify(o);
 
app.get("/", (req, res) => {
res.send(result);
});
app.listen(port);
