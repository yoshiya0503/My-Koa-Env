/**
 * @fileoverview sample using koa web framework
 * @name app.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagent.co.jp>
 */

var koa = require('koa');
var app = koa();
var router = require('koa-router');
var views = require('koa-render');
var bodyParser = require('./lib/koa-bodyParser');
var common = require('koa-common');
var server = require('http').Server(app.callback());
var io = require('socket.io').listen(server);

//middleware setting
app.use(common.logger());
app.use(common.favicon());
app.use(common.etag());
app.use(common.static(__dirname + '/public'));
app.use(views(__dirname + '/views', 'jade'));
app.use(bodyParser());
app.use(router(app));

// routing Restfull
app.get('/views', function *(next) {
    console.log(this.query);
    this.body = yield this.render('index', {message : 'Koa'});
    yield next;
});

app.post('/views', function *(next) {
    console.log(this.body);
    this.redirect('/views');
    yield next;
});

io.on('connection', function() {
    console.log('!!!');
});

app.listen(3000);
