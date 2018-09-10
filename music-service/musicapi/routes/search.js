var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径
// 接口传人num参数俩获得第几页
router.get('/', function (req, res, next) {
    var type = req.param('type') || ''; //获取url传递的参数，没有传递参数为空
    // 读取本地文件data中的
    var query = req.query;
    var searchText = query.search;
    console.log(searchText);

    // console.log(page);
    fs.readFile(`${ PATH }catlist.json`, function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: '读取文件异常',
                log: '为什么出错'
            });
        }
        // 异常处理，如果文件中保存的不是json格式的文件
        var len = 0 // 数据的总的条数
        var obj = {}
        var arr = [];
        var filterLen = 0;
        try {
            obj = JSON.parse(data.toString());
            len = obj.playlists.length;
            for (let i = 0; i < len; i++) {
                let name = obj.playlists[i].creator.nickname;
                if (name.indexOf(searchText) !== -1) {
                    arr.push(obj.playlists[i]);
                }
            }
            filterLen = arr.length;

        } catch (e) {
            arr = [];
        }
        return res.send({
            status: 1,
            arr,
            len,
            filterLen
        });
    })
});

module.exports = router;