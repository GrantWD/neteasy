var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径
// 删除按照id来删除对应的数据
router.get('/', function (req, res, next) {
    var type = req.param('type') || ''; //获取url传递的参数，没有传递参数为空
    // 读取本地文件data中的
    var query = req.query;
    // 传人的id,
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
        // 当传人delet,不传入参数时候，那么执行了50次，传人了id时候只执行了一次
        // 通过参数传来的id来删除对应的数据
        try {
            obj = JSON.parse(data.toString());
            len = obj.playlists.length;
            for (var i = 0; i < len; i++) {
                // console.log(obj.playlists[i].id)
                if (delid == obj.playlists[i].id) {
                    console.log(`删除的id是${obj.playlists[i].id}`)
                    arr.push(obj.playlists[i].id);
                    obj.playlists.splice(i,1)
                    var str = JSON.stringify(obj);
                    // 将obj转为字符串在写入到文件中
                    fs.writeFile(`${ PATH }catlist.json`, str, function (err) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('---删除成功-----');
                        return res.send({
                            status:200,
                            obj
                        })

                    })
                }
            }
            filterLen = arr.length;

        } catch (e) {
            arr = [];
        }
    })
});

module.exports = router;