var express = require('express');
var router = express.Router();

let users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/', function(req, res, next) {
  users.push(req.body);
  console.log(users);
  
  res.send('ok');
});

module.exports = router;
