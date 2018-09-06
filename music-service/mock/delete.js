var fs = require('fs');

// 增加数据
function deleteJson(id) {
  // 读取json文件
  fs.readFile('./music.json', function (err, data) {
    if (err) {
      return console.err(err);
    }
    var musicdata = data.toString(); // 将二进制的数据转换为字符串
    musicdata = JSON.parse(musicdata); // 将字符串转为json对象

    var len = musicdata.musicListInfo.musicMsgArray.length; // 数据的总的条数
    console.log(len);
   for(let i = 0; i < len ;i ++){
       // 筛选删除指定的数据
       if (id == musicdata.musicListInfo.musicMsgArray[i].id) {
           console.log(musicdata.musicListInfo.musicMsgArray[i].id);
            musicdata.musicListInfo.musicMsgArray.splice(i,1);
       }
   }
    console.log(musicdata.musicListInfo.musicMsgArray); // 打印下数据
    var str = JSON.stringify(musicdata); // node的写入文件只认识字符串或者二进制数，所以把json对象转为字符串
    fs.writeFile('./music.json', str, function (err) {
      if (err) {
        console.log(err);
      }
      console.log('---删除成功-----');

    })
  })
}
deleteJson(5);