var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
   // res.sendFile('index.html');
    //It will find and locate index.html from View or Scripts
    res.render('index');
});


module.exports = router;
