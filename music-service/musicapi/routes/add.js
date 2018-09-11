var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径
// 删除按照id来删除对应的数据
router.post('/', function (req, res, next) {
    // post请求获取数据，通过请求头来传输数据，数据的格式必须正确
    var query = req.body;
    console.log(query);
    // node的写入文件只认识字符串或者二进制数，所以把json对象转为字符串
    var str = '';
    // fs.writeFile(`${ PATH }catlist.json`, str, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log('---修改成功-----');

    // })
});

module.exports = router;