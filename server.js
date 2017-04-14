var express    = require('express');
var app        = express();
var mongoose   = require('mongoose');
var session    = require('express-session')
var bodyParser = require('body-parser');
var passport   = require('passport');
var multer     = require('multer');
var routes     = require('./routes/index');

app.use(session({
	secret: 'testsecret',
	resave: false,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

routes(app);

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
