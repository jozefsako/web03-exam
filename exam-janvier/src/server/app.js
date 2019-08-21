const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

const assetPath = require('./asset_path.js');

const db = require('./modules/db.js');
const authMiddleware = require('./modules/auth_middleware.js');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tasksRouder = require('./routes/tasks');

//const projectRoot = path.join(__dirname, '../..');
const serverRoot = path.join(__dirname, '.');
const app = express();

// Connect to DB, and insert default user if necessary
db
  .connect()
  .then(() => { db.boot() })

app.locals.assetPath = assetPath;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(serverRoot, 'public'),
    dest: path.join(serverRoot, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.use('/', indexRouter);
app.use('/api/tasks', tasksRouder);
app.use('/api/users', usersRouter);
app.use(authMiddleware);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
