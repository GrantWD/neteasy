var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径

// 所有歌单数据
router.get('/', function (req, res, next) {
    var type = req.param('type') || ''; //获取url传递的参数，没有传递参数为空
    // 读取本地文件data中的
    fs.readFile(`${ PATH }dayrecommend.json`, function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: '读取文件异常',
                log: '为什么出错'
            });
        }
        var obj = [];
        // 异常处理，如果文件中保存的不是json格式的文件
        try {
            obj = JSON.parse(data.toString());
        } catch (e) {
            obj = [];
        }
        return res.send({
            status: 1,
            obj
        });
    })
});

module.exports = router;
