// 利用fetch方法访问本地文件
// 在文件中执行这个文件就获得了数据
fetch('../json/index.json').then(function(res){
    if(res.ok){
        res.json().then(function (data) {
            console.log(data);
        });
    }else{
        console.log('Looks like the response wasn\'t perfect',res.status);
    }
}, function (e) {
    console.log('fetch failed', e);
})