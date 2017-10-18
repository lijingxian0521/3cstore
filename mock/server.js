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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
    res.header('Access-Control-Allow-Method', 'GET,POST');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
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
    res.json(cart)
});