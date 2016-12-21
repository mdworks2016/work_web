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
