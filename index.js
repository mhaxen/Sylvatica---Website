//imports
const express = require("express");



//application behavior
app = express()
app.use(express.static(__dirname + "/css/styles.css"))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Server is up and listening on port 3000");
});


//mouse behavior
// $(".home").mouseenter(
//   function(){
//   $(".home").animate({
//     width: "100%"
//   });
// });
//
// $(".home").mouseleave(
//   function(){
//   $(".home").animate({
//     width: "80%"
//   });
// });
//
// $(".navtitle").click(
//   function(){
//   $(this).css("color", "red");
//   setTimeout(function () {
//     $(".navtitle").css("color", "white");
//   }, 10);
//
//   $("#" + this.parentNode.id + " .togglable-section").slideToggle("slow");
// });
