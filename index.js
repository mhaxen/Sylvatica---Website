//imports
const express = require("express");



//application behavior
app = express();
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Server is up and listening on port 3000");
});
