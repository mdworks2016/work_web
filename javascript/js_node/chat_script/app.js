
var fs = require('fs');
var server = require('http').createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var output = fs.readFileSync('./index.html','utf-8');
    res.end(output);
}).listen(8080);

var io = require('socket.io').listen(server);

// ユーザー管理ハッシュ
var userHash = {};

// 2.イベントの定義
io.sockets.on('connection',function (socket){

    //接続開始カスタムイベント（接続元ユーザーを保存し、他ユーザーへ通知）
    socket.on('connected',function(name){
        var msg = name + 'が入室しました';
        io.sockets.emit('publish',{value:msg});
    });

    //メッセージ送信カスタムイベント
    socket.on('publish', function(data){
        io.sockets.emit('publish',{value:data.value});
    });

    //接続終了組み込みイベント(接続元ユーザーを削除し、他ユーザーへ通知)
    //ハッシュとは不可逆的なキーのことである、これで送信データと受信データに（その間に）データの齟齬が生まれていないかチェックする
    //だが今回はただの配列として使用されている
    socket.on('disconnect',function(){
        if(userHash[socket.id]){
            var msg = userHash[socket.id] + 'が退出しました';
            io.sockets.eimt('publish',{value:msg});
        }
    });
});
