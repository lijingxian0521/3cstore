let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let {computers,phones,other} = require('./goodsList');
let swiper = require('./homeSwiper');
let cart = require('./cart');
let app = express();
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx'
}));
app.listen(3000);

/*app.use(function (req, res, next) {
  setTimeout(() => {
    next();
  }, 500)
});*/

app.use(function (req, res, next) {
    //如果客户端要向服务器发送cookie的话，绝不对写*
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
    //允许跨域传cookie
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end('');
    } else {
        next();
    }
});

app.get('/',function (req,res) {
    res.end('welcome')
});
app.get('/swiper', function (req, res) {
    res.json(swiper);
});
app.get('/computers',function (req,res) {
    res.json(computers)
});
app.get('/phones',function (req,res) {
    res.json(phones)
});
app.get('/other',function (req,res) {

    res.json(other)
});
app.get('/cart',function (req,res) {
    res.cart
});
