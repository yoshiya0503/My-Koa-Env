var koa = require('koa');
var route = require('koa-route');
var static = require('koa-static');
var views = require('co-views');
var app = koa();

var render = views(__dirname + '/views', {map : {html : 'jade'}});

app.use(route.get('/views', function *(next) {
    this.body = yield render('index.jade', {name : 'koa'});
}));

app.use(route.get('/hello', function *(next) {
    this.body = 'Hello!!';
}));

app.use(static(__dirname + '/public'));

app.listen(3000);
