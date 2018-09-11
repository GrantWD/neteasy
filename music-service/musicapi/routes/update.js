var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/'; // 配置文件的路径
// 根据id来更新数据
router.get('/', function (req, res, next) {
    // post请求获取数据，通过请求头来传输数据，数据的格式必须正确
    var query = req.query;
    var updateId = query.id;
    fs.readFile(`${ PATH }catlist.json`, function (err, data) {
       if (err) {
           return console.err(err);
       }
       // 根据id来选择当前的数据
        var len = 0; // 数据的总的条数
        var obj = {};
        var arr = [];
        try{
             obj = JSON.parse(data.toString());
             len = obj.playlists.length;
              for (let i = 0; i < len; i++) {
                  if (updateId == obj.playlists[i].id) {
                      console.log(`要更新的数据id${updateId}`);
                    // 修改数据
                    //  musicdata.musicListInfo.musicMsgArray[i].id = params;
                  }
                  else{
                      console.log(obj.playlists[i].id);
                  }
              }
        }catch(e){
             arr = [];
        }
        return res.send({
            status: 1,
            arr,
            len
        });
   })
});

module.exports = router;