var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adicionar-tecnologias', { title: 'Adicionar Tecnologias' });
});

module.exports = router;