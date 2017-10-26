var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  var cyx = [];
  if(req.body.abc == 2){
    cyx=[1,2,3]
  }else{
    cyx=[4,5,6]
  }
  res.send({ title: cyx });
});

module.exports = router;
