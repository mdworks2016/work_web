
//ifelseで条件が先に出ているとそれは判定されない
window.onload = function(){
document.getElementById('sel').onclick = function(){
    //スクリプト内の正規表現を使って、ヒットさせる
    var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
    var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
    str += 'サンプル紹介サイトhttp://www.web-deli.com/もよろしく！';
    var result = str.match(p);
    for (var i = 0, len = result.length; i < len; i++){
        console.log(result[i]);
    }

    //スクリプト内の正規表現を使って、ヒットさせる
    //ただしグローバルがついていないので、初回の検索ヒットで終了する
    //かつ、サブマッチ()の部分が配列に格納される
    var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;
    var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
    str += 'サンプル紹介サイトhttp://www.web-deli.com/もよろしく！';
    var result = str.match(p);
    for (var i = 0, len = result.length; i < len; i++){
        console.log(result[i]);
    }

    //スクリプト内の正規表現を使って、ヒットさせる
    //大文字小文字の判別がついているので2件目はヒットしない。
    var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;
    var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
    str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
    var result = str.match(p);
    for (var i = 0, len = result.length; i < len; i++){
        console.log(result[i]);
    }


}
}
