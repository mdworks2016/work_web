var arr = ['java','JavaScript','HTML'];
console.log('配列 '+arr[1]);
var arr2 = ['java','JavaScript',['HTML','CSS']];
console.log('多次元配列 '+arr2[2][0]);
var obj = {a:1,b:2,c:3};
//ドット演算子でよびだせる
//通常はこっちでおk
console.log('連想配列'+obj.a);
//ブラケットは変数で連想配列を操作できるが、冗長なので意図して使用しない限りはドットでおk
console.log('連想配列'+obj['b']);

//加算演算子の挙動
//数字＋文字列=文字　数列＋数列=数列
console.log(10+100);//110の数列
console.log('10'+100);//10100の文字列
console.log(10+'9');//109の文字列

//Javascriptの演算の不整合について
//Javascriptは内部的に2進数で演算しているため、小数点同士の計算では誤差が生じる
console.log(0.2*3);
//整数に戻すことで誤差はなくなる
console.log(((0.2*10)*3)/10);

//比較演算子振り返り
/// == は例えオペランド型が異なっていても、型変換して等価とみなす
console.log(1 == true);//true
console.log(1 == '1');//true

///配列は参照先の実体が違う番地にあるため、データ上はどうやっても等価としては見られない
var arr1 = ['Javascript','HTML','css'];
var arr2 = ['Javascript','HTML','css'];
console.log(arr1 == arr2);

///同値比較（===）
//Javascriptはデータ形式が寛容すぎてバグの温床になるため、基本的には同値比較を使うようにしたほうがよい。

//論理演算子
///&&と||は左辺だけが評価されて、右辺は評価されない場合があります
console.log('論理演算子' + (10==='10'&&'AAA'==='AAA'));//false
console.log('論理演算子' + (10==='10'||'AAA'==='AAA'));//true

//*制御文
///if else
var a=1
if (a===2){
    console.log('制御文else if　1行目');
}else if(a===3){
    console.log('制御文else if　2行目');
}else{
    console.log('制御文else if　3行目');
}

///for文
////特に注意する点は「;（セミコロン）」は次の式にいくための演算子であるから、,で複数式を立てておくことも可能！
for (var i =1,j=1;i<3;i++,j++){
    console.log('i+j='+(i+j));
}

///for in文
////for...in命令は配列や連想配列、オブジェクト配下の要素やメンバー（つまり複数が集まった何か）に対して順番に処理を行う
////ただしできることは配列からインデックス番号やキーを取り出すだけなので、基本的にこの関数を使う意味がない
var member = ['たろう','じろう','さぶろう'];
for (var m in member){
    console.log('名前は' + m);
    console.log('名前は' + member[m]);
}

///〜break/continue文
////break 処理を任意のタイミングで抜ける
////continue 現在のループをスキップして　次のループへ入る
for (var i = 0;i < 100;i++){
    if(i>=2){
        break;
    }
    console.log('break/continue'+i);
}

for (var i = 0;i < 5;i++){
    if(i!=3){
        continue;
    }
    console.log('break/continue'+i);
}

label:for(var i = 1; i < 1000; i++){
    for (var t =1; t < 10; t++){
        var v = i * t;
        //vが5以上になったらネスとされたネスとされループを脱出する
        if(v > 5){
            break label;
        }
        console.log(v);
    }
}

///try catch finally文
////例外処理、ただしオーバーヘッドが高い処理なのでむやみやたらに記述するのは問題がある
