
//ifelseで条件が先に出ているとそれは判定されない
window.onload = function(){
document.getElementById('sel').onclick = function(){
    var ary1 = ['Sato','Takae','Osada','Hio','Saitho','Sato'];
    var ary2 = ['Yabuki','Aoki','Moriyama','Yamada'];

    console.log('配列のサイズ：'+ary1.length);
    console.log('指定したオブジェクトは配列かどうか：'+Array.isArray(ary1));
    console.log('要素,要素,　の形で文字列に変換：'+ary1.toString());
    console.log('指定した要素に合致した最初の要素を取得：'+ary1.indexOf('Sato'));
    console.log('指定した要素に合致した最後の要素を取得：'+ary1.lastIndexOf('Sato'));

    console.log('指定した配列を対象の配列に連結：'+ary1.concat(ary2));

    console.log('配列内の要素を指定した文字で区切る：'+ary1.join('／'));

    console.log('配列内の要素をstart+1〜end番目まで抜き出し：'+ary1.slice(1,3));

    console.log('【破壊的メソッド】配列内の要素をstart+1〜end番目まで抜き出し：'+ary1.splice(1,2,'Kakeya','Yamagucchi'));

    console.log(ary1);

    console.log(Array.of(20,40,60));
    //2015

    console.log(ary1.pop());
    console.log(ary1);

    console.log(ary1.push('Kondo'));
    console.log(ary1);

    console.log(ary1.shift());
    console.log(ary1);

    console.log(ary1.unshift('Ozawa','Kugo'));
    console.log(ary1);

    console.log(ary1.reverse());
    console.log(ary1);

    console.log(ary1.sort());
    console.log(ary1);
}
}
