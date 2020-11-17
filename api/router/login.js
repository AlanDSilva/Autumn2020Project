var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var db = require('../database');

router.post('/', function(request, response) {
if(request.body.email && request.body.password){
  var email = request.body.email;
  var password = request.body.password;
  db.query('SELECT * FROM users WHERE email = $1',[email], 
  function(error, dbResults, fields) {
    if (dbResults.rows.length > 0) {
        bcrypt.compare(password,dbResults.rows[0].password, function(err,res) {
          if(res) {
            console.log("succes");
            response.send(true);
          }
          else {
              console.log("wrong password");
              response.send(false);
          }			
            response.end();
          });
        }
        else{
          console.log("user does not exists");
          response.send(false);
        }
    });
}
else{
  console.log("Give the username and password");
  response.send(false);
}
});

module.exports=router;