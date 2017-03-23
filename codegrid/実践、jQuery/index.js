$('button').on('keyup paste',function(){
    alert('処理されました');
})

//onの魅力は
//1.複数のイベントとイベントハンドラを一括定義できる

$('img').on({
    'mouseenter': function(){
        alert('オーバーしました');
    },
    'mouseleave': function(){
        alert('アウトしました');
    }
})
