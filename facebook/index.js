var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(8000);
// app.get('/',(req,res) => {
//     res.send("HELLO")
//     res
// })
console.log('Server is ready!');