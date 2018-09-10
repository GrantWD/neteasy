var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径
// 删除按照id来删除对应的数据
router.get('/', function (req, res, next) {
    var type = req.param('type') || ''; //获取url传递的参数，没有传递参数为空
    // 读取本地文件data中的
    var query = req.query;
    var delid = query.id;
    console.log(delid)

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
        var len = 0 ;// 数据的总的条数
        var obj = {};
        var arr = [];
        var filterLen = 0;
        var allId='';
        try {
            obj = JSON.parse(data.toString());
            len = obj.playlists.length;
            for (let i = 0; i < len; i++) {
                let allId = obj.playlists[i].id;
                console.log(i)
                if (delid == allId) {
                    // 找到要删除的数据
                    arr.push(obj.playlists[i]);
                    //删除一条数据
                    console.log(`删除数据的id是${playlists[i]}`)
                    // obj.playlists.slice(i,1)
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