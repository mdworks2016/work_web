(function () {
'use strict'
//ECMA6における新しい記法
//6-2.ブロックスコープの宣言
///元々ifやforにはスコープという概念が存在しなかったが
///letを使うと{}の中だけで存在する変数（スコープ）の宣言が可能になっている。
if(true){
  let hoge = 'hoge';
}
//エラーconsole.log(hoge);

//6.3定数の宣言
const hoge = 'hoge';
//再代入しちゃっているのでエラーhoge = 'fuga';

const arr = [1,3,5];
arr[0] = 2;
// 何とこれは再代入ではない、arrの一部を変更しているだけなので再代入扱いにはなっていない
// ただし、この使い方は例外的である。
console.log(arr); //[2,3,5]

}());
