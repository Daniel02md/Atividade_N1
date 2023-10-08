var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3000;


var indexRouter = require('./routes/index');
var indexTecs = require('./routes/minhas-tecs')
var indexSobre = require('./routes/sobre')
var indexLogin = require('./routes/login')
var indexCadastro = require('./routes/cadastro')
var indexAdicionar = require('./routes/adicionar-tecnologias')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/minhas-tecs', indexTecs);
app.use('/sobre', indexSobre);
app.use('/login', indexLogin);
app.use('/cadastro', indexCadastro);
app.use('/adicionar-tecnologias', indexAdicionar);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log("Rodando...")
})

module.exports = app;
