var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('minhas-tecs', { title: 'Minhas Tecnologias' });
});

module.exports = router;
