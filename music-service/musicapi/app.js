var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var heightqualityRouter = require('./routes/heightquality');
var personalizedRouter = require('./routes/personalized');
var newsongRouter = require('./routes/newsong');
var catlistRouter = require('./routes/catlist');
var mymusicRouter = require('./routes/mymusic');
var radioclassRouter = require('./routes/radioclass');
var radiodetailRouter = require('./routes/radiodetail');
var zfyRouter = require('./routes/zfy');
var videoRouter = require('./routes/video');
var videomissRouter = require('./routes/videomiss');
var videomuzicRouter = require('./routes/videomuzic');
var videoactiveRouter = require('./routes/videoactive');
var friendsRouter = require('./routes/friends');
var watchperRouter = require('./routes/watchper');
var hostStationRouter = require('./routes/hoststation');
var dayRecommendRouter = require('./routes/dayrecommend');
var rankingRouter = require('./routes/ranking');
var paginationRouter = require('./routes/pagination');
var searchRouter = require('./routes/search');
var deleteRouter = require('./routes/delete');
var addRouter = require('./routes/add');
var updateRouter = require('./routes/update');

var app = express();
// 跨域设置
app.all('*', function (req, res, next) {
  if (req.path !== "/" && !req.path.includes(".")) {
    res.header('"Access-Control-Allow-Credentials", true');
    res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
  }
  next();
  
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/heightquality', heightqualityRouter);
app.use('/personalized', personalizedRouter);
app.use('/newsong', newsongRouter);
app.use('/catlist', catlistRouter);
app.use('/mymusic', mymusicRouter);
app.use('/radioclass', radioclassRouter);
app.use('/radiodetail', radiodetailRouter);
app.use('/zfy', zfyRouter);
app.use('/video', videoRouter);
app.use('/videomiss', videomissRouter);
app.use('/videomuzic', videomuzicRouter);
app.use('/videoactive', videoactiveRouter);
app.use('/friends', friendsRouter);
app.use('/watchper', watchperRouter);
app.use('/hoststation', hostStationRouter);
app.use('/dayrecommend', dayRecommendRouter);
app.use('/ranking', rankingRouter);
app.use('/page', paginationRouter);
app.use('/delete', deleteRouter);
app.use('/add', addRouter);
app.use('/update', updateRouter);
app.use('/search', searchRouter);

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

module.exports = app;