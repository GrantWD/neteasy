var fs = require('fs');

// 增加数据
function searchJson(musicId) {
  // 读取json文件
  fs.readFile('./music.json', function (err, data) {
    if (err) {
      return console.err(err);
    }
    var musicdata = data.toString(); // 将二进制的数据转换为字符串
    musicdata = JSON.parse(musicdata); // 将字符串转为json对象

    var len = musicdata.musicListInfo.musicMsgArray.length; // 数据的总的条数
    console.log(len);
    for (let i = 0; i < len; i++) {
      if (musicId == musicdata.musicListInfo.musicMsgArray[i].musicId) {
          console.log(musicdata.musicListInfo.musicMsgArray[i]);
          return '返回数据'
      }
      
    }
    console.log('要查找的数据不存在')
    // console.log(musicdata.musicListInfo.musicMsgArray); // 打印下数据
    // var str = JSON.stringify(musicdata); // node的写入文件只认识字符串或者二进制数，所以把json对象转为字符串
    // fs.writeFile('./music.json', str, function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log('---修改成功-----');

    // })
  })
  
}
// searchJson(201809001);
// 分页思路，每一页有多少条数据p，然后根据传人的数值得到数据的区间，返回数据
// 每一页数据的起始位置[(num-1)*p,(num)*p),左闭右开

function pagination(p, num) {
    // 从本地读取数据
     fs.readFile('./music.json', function (err, data) {
       if (err) {
         return console.err(err);
       }
       var musicdata = data.toString(); // 将二进制的数据转换为字符串
       musicdata = JSON.parse(musicdata); // 将字符串转为json对象

       var len = musicdata.musicListInfo.musicMsgArray.length; // 数据的总的条数
       console.log(len);
       var start = (num - 1) * p;
       var end = num * p;
       for (let i = start; i < end; i++) {
        //  if (musicId == musicdata.musicListInfo.musicMsgArray[i].musicId) {
           console.log(musicdata.musicListInfo.musicMsgArray[i]);
        //    console.log(`第${i}页`);
        //  }

       }
    //    console.log('要查找的数据不存在')
       // console.log(musicdata.musicListInfo.musicMsgArray); // 打印下数据
       // var str = JSON.stringify(musicdata); // node的写入文件只认识字符串或者二进制数，所以把json对象转为字符串
       // fs.writeFile('./music.json', str, function (err) {
       //   if (err) {
       //     console.log(err);
       //   }
       //   console.log('---修改成功-----');

       // })
     })
}
pagination(2,3)
