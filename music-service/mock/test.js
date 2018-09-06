var fs = require('fs');
var params = {
    id:5,
    name:'zhouyuan'
}
// 增加数据
function writeJson(params) {
    // 读取json文件
    fs.readFile('./music.json',function (err, data) {
        if(err){
            return console.err(err);
        }
        var musicdata = data.toString();// 将二进制的数据转换为字符串
        musicdata = JSON.parse(musicdata);// 将字符串转为json对象
        musicdata.musicListInfo.musicMsgArray.push(params); //定义的两条数据传人到json文件中的musicMsgArray数组中
        musicdata.musicListInfo.musicMsgArray.length;// 数据的总的条数
        console.log(musicdata.musicListInfo.musicMsgArray);// 打印下数据
        var str = JSON.stringify(musicdata);// node的写入文件只认识字符串或者二进制数，所以把json对象转为字符串
        fs.writeFile('./music.json',str,function (err) {
            if (err) {
                console.log(err);
            }
            console.log('---增加成功——-----');
            
        })
    })
}
writeJson(params);