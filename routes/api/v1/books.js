var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello");
});
router.post('/', function(req, res, next) {
    res.json({
        success: true,
        result: "This is Post method"
    });
  });

  router.post('/books/', function(req, res, next) {
    res.json({
        success: true,
        result: req.body.bookId
    });
  });

  router.put('/', function(req, res, next) {
    res.json({
        success: true,
        result: "This is put method"
    });
  });

  router.put('/books', function(req, res, next) {
    res.json({
        success: true,
        result: req.body.bookId,
        message: "book updated"
    });
  });

  router.delete('/books', function(req, res, next) {
    res.json({
        success: true,
        result: req.body.bookId,
        message: "book deleted"
    });
  });
module.exports = router;
