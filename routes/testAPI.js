const express = require("express");
const router = express.Router();
var fs = require('fs');
var data = require('../CV_AOM.json');

router.get("/", function(req,res,next){
    fs.readFile('./CV_AOM.json', 'utf-8', (err,data) => {
        var data = JSON.parse(data)
        console.log(data);
        res.send(data);
    })    
})

module.exports=router;