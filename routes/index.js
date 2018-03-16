var express = require('express');
var router = express.Router();

let menuNames =["首 页","测试","哈哈哈"]
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: '首页', companyName: "xxxx公司"/*,menuNames:menuNames*/});
});

router.get('/services', function (req, res, next) {
    res.render('services', {title: '服务', companyName: "xxxx公司"});
});

router.get('/contact', function (req, res, next) {
    res.render('contact', {title: '联系我们', companyName: "xxxx公司"});
});
router.get('/about', function (req, res, next) {
    res.render('about', {title: '关于我们', companyName: "xxxx公司"});
});
router.get('/projects', function (req, res, next) {
    res.render('projects.ejs', {title: '项目', companyName: "xxxx公司"});
});
router.get('/baidumap', function (req, res, next) {
    res.render('publicview/baidumap', {title: '百度地图', companyName: "xxxx公司"});
});
module.exports = router;
