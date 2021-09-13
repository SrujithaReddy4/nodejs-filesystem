
const fs = require("fs");
let currenttime_stamp = new Date();

fs.readFile("index.js",'utf8',function(err,data) {
    console.log(data);
});

fs.writeFile("currentdate_time.txt", "currenttime_stamp",  function(err) {
    console.log("currenttime_stamp:"+currenttime_stamp);
});