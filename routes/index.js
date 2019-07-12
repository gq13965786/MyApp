var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

// Bring in Models
let Article = require('../models/article');
// Home Route
router.get('/', function(req, res){
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    } else {
      res.render('index',
       {
        title:'标题',
        articles: articles
      }
    );
    }
  });
});


module.exports = router;
