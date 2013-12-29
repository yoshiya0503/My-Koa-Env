/**
 * @fileoverview sample using koa web framework
 * @name app.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagent.co.jp>
 */

var koa = require('koa');
//routes, statjic-file, and views
var route = require('koa-route');
var static = require('koa-static');
var views = require('koa-render');
//common middleware
var common = require('koa-common');

var app = koa();

//middleware setting
app.use(views(__dirname + '/views', {
    //html : 'underscore',
    jade : 'jade'
}));
app.use(static(__dirname + '/public'));

//routing
/*
app.use(route.get('/views', function *(next) {
    this.body = yield this.render('index', {message : 'Koa'});
}));
*/
app.use(route.get('/views', function *(next) {
    this.body = yield this.render('index', {message : 'Koa'});
}));

app.use(route.get('/hello', function *(next) {
    this.body = 'Hello!!';
}));


app.listen(3000);
