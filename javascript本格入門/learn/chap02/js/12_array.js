
//通常配列
let data = ['javascript','Ajax','ASP.net'];
console.log(data[0]);

//通常配列2回呼び出し
let data2 = ['1回目','2回目','3回目'];
console.log(data[0][2]);

//オブジェクトリテラル(連想配列)
//ドット呼び出しだと数値名や予約語は全く使えない。ブラケットだとそれでも可能だが、命名ルールが曖昧になりがち
var obj = {x:'オブジェクト1',y:'オブジェクト2',z:'オブジェクト3'};
console.log(obj.y);
console.log(obj['x']);
