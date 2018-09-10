var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径
// 接口传人num参数俩获得第几页
router.get('/', function (req, res, next) {
    var type = req.param('type') || ''; //获取url传递的参数，没有传递参数为空
    // 读取本地文件data中的
    var  query  =  req.query;
    var page = query.num;
    console.log(page);
    
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
        var start = (page - 1) * 10;
        var end = page * 10;;
        var obj = {}
        var arr = [];
        if(end>50){
            end = 50;
        }
        try {
            obj = JSON.parse(data.toString());
            len = obj.playlists.length;
            console.log(obj);
            console.log(len);
            for(let i = start; i < end; i++){
                arr.push(obj.playlists[i]);
            }

        } catch (e) {
            arr = [];
        }
        return res.send({
            status: 1,
            arr,
            len
        });
    })
});

// router.get('/',function(req,  res, next) {
//     var filename = req.params().filename;
//     var page = req.params().page;
//     console.log(filename);
//     console.log(page);
//     fs.readFile(`${ PATH }catlist.json`, function (err, data) {
//         if (err) {
//             return res.send({
//                 status: 0,
//                 info: '读取文件异常',
//                 log: '为什么出错'
//             });
//         }
//         var obj = [];
//         // 异常处理，如果文件中保存的不是json格式的文件
//         try {
//             obj = JSON.parse(data.toString());
//         } catch (e) {
//             obj = [];
//         }
//         return res.send({
//             status: 1,
//             obj
//         });
//     })
//     //获取url传递的参数，没有传递参数为空解析 参数，根据传递 的参数来判断是第几页的
//     // get参数 需要传递读取的文件名，和第几页

    
// });
// function pagination(filename,p, num) {
//     // 从本地读取数据
//     fs.readFile('./music.json', function (err, data) {
//         if (err) {
//             return console.err(err);
//         }
//         var musicdata = data.toString(); // 将二进制的数据转换为字符串
//         musicdata = JSON.parse(musicdata); // 将字符串转为json对象

//         var len = musicdata.musicListInfo.musicMsgArray.length; // 数据的总的条数
//         console.log(len);
//         var start = (num - 1) * p;
//         var end = num * p;
//         for (let i = start; i < end; i++) {
//             //  if (musicId == musicdata.musicListInfo.musicMsgArray[i].musicId) {
//             console.log(musicdata.musicListInfo.musicMsgArray[i]);
//             //    console.log(`第${i}页`);
//             //  }

//         }

//     })
// }
// pagination(2, 3)
module.exports = router;