
//【ES2015における引数の記法】
//* ES2015では引数の記法として、以下がとても楽に記述できるようになった
//* 1.引数のデフォルト値　2.可変長引数　3.名前付き引数

//** [4.5.1引数のデフォルト値]
function getTriangle(base = 1, height = 1){
  return base * height /2;
}
//***引数baseに5を渡している
//***関数ブロックの先頭にif文でデフォルト値の指定をする必要がなくなった
console.log('triangle：' + getTriangle(5));

function multi(a, b = a){
  //***注意 = はデフォルト値なので、値が入っている場合一緒にはならない。
  return a * b;
}
console.log('multi：'+multi(10,5));
console.log('multi：'+multi(3));

//** [デフォルト値使用の注意点]
//***デフォルト値が適用されない場合
//NULLなどを入れてしまうとデフォルト値は適用されない
//Undifinedを入れるとデフォルト値が適用される、この違い

console.log(getTriangle(5,null));

//***デフォルト値を持つ仮引数は、引数リストの末尾に入れること
function getTriangleError(base = 1, height){
  return base * height /2;
}
console.log(getTriangleError(10));//NaN
//***なぜか、引数１つだと自動的にbaseへ代入されるため、どう転んでも引数1つでheightへのアクセスができないため

//***デフォルト値を持たない引数で必須なものがあった時
//エラーは自分で作る必要がある
/*function required(){
  throw new Error('引数が不足しています!');
}

function hoge(value = required()){
  return value;
  //もしrequiredがないと、valueは空でもエラーは返らない
}

hoge();//結果：Error：引数が不足しています!*/

//** [4.5.2可変長引数の使い方]
//***　実例：例えばこれから無限に増えていく引数（URLの一覧）で個別に名前指定してるリソースがかかる場合の対処によい
function sum (...nums){
  let result = 0;
  for (let num of nums) {
    if(typeof num !== 'number'){
      throw new Error('指定値が数値ではありません:' + num);
    }
    result += num;
  }
  return result;
}

const sumNumber = [1,3,5,7,9];

//別内容だが、エラーを関数内に定義しておいて、Try catchでエラー文を処理している。（エラーだけだとコンソールにしか出てこないので）
try {
  console.log(sum(...sumNumber));
  //関数実行で可変長引数の書き方をすると、変数を自動的に処理して可変長として渡してくれる!すごい！
  console.log(Math.max(15,-3,78,1));//78
  console.log(Math.max([15,-3,78,1]));
  //maxメソッドに配列を放り込んでも処理してくれない（arrayオブジェクトがママ渡させれいるため）
  //そこで可変長引数を利用すると個別で値を引き出して処理してくれる
  console.log(Math.max(...[15,-3,78,1]));
}catch(e){
  window.alert(e.message);
}

//** [4.5.3分割代入]
//*** オブジェクトから特定のプロパティを分割代入で取り出す
//*** 引数で渡したオブジェクトから特定のプロパティだけを取り出すこともできます。
function show ({name}){
  console.log(name);
}
let member = {
  mid :  'Y10000',
  name : '太郎山田',
  address : 't_yamada@example.com'
};
show(member);
