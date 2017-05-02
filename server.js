var express = require('express');

var App = express();

App.use(express.static('public'));


App.listen(9000,function(){
    console.log('running on port 9000, this is so cool')
});