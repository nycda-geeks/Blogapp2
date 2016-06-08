 



//NODE MODULES
var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var flash        = require('connect-flash')


//MODELS
var setupPassport   = require('./models/setupPassport.js')


//ROUTES
var index      = require('./routes/index');
var users      = require('./routes/users');
var login      = require('./routes/login');
var logout     = require('./routes/logout');
var findpost   = require('./routes/findpost');
var createpost = require('./routes/createpost');

var allposts   = require('./routes/allposts');
var unknown    = require('./routes/unknown');
var signup     = require('./routes/signup');

// APP
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))
app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});

setupPassport(app)







// USE ROUTES
app.use('/index', index);
app.use('/users', users);
app.use('/allposts', allposts);

app.use('/createpost', createpost);
app.use('/findpost', findpost);
app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/unknown', unknown);


app.get('/', function(req, res) {
  res.redirect('/index')
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
