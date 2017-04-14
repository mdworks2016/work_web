(function(){
'use strict'
//3章
///3.7.1 エスケープ
////文字列でクォートが被る場合はバックスラッシュでエスケープ
const dialog = "Sam looked up and \"don't do that!\" to Max.";

///3.7.3 テンプレートリテラル
let currentTemp = 19.5;
////注意「""や’’」だと通常の文字列になってしまう。テンプレートリテラル使いたかったら、``のバッククォートを使用しないと機能しない。
const message = `現在の温度は${currentTemp}です。`;
console.log(message);
}());
