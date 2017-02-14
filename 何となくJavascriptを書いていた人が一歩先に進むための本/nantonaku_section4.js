
//4-2 関数の定義方法
///4-2-1
///4-2-2 何と関数は変数に代入できます！
//4-3 変数のスコープ
///4-3-1 ややこしいぞ!グローバル変数とローカル変数
//4-4 argumentsオブジェクト
///4-4-1 関数のやりたい放題に触れる

function addNumber(num1,num2){
    return num1 + num2;
}

console.log(addNumber(1,2)); //3

///4-2-2 何と関数は変数に代入できます！
var addNuber = function(num1,num2){
    return num1 + num2;
};

////無名関数を変数に投入してから使用している
console.log(addNumber(1,2)); ///3


///4-3-1 ややこしいぞ!グローバル変数とローカル変数
////グローバル変数は関数の外、ローカル変数は関数の中という認識には例外がある！

var val = 'Globl!';

function getVal(){
    //なぜここの値がundefinedになっているかというと
    //1.ローカル変数は関数全体で有効になる
    //2.*の時点ではすでに「val」変数がローカル変数として解釈されている
    //3.*の時点ではまだローカル変数「val」のvar命令が実行されていない
    console.log(val); // undefined
    var val = 'Local!';
    return val;
}

console.log(getVal()); //Local!
console.log(val); // Global!

///4-4-1 関数のやりたい放題に触れる
function showVal(val){
    console.log(val);
}

showVal(); //undefined
showVal('bar'); //bar
showVal('hoge','foo'); //hoge

///4-4-2 引数のチェックなしに対抗するargumentsオブジェクト

var addFunc = function(){
    console.log(arguments[0] + arguments[1]);
}

addFunc(1,2);//3

///4-4-3 すごいぞargumentsオブジェクト

var addFunc = function (val1, val2){
    if(arguments.length != 2){
        throw new Error('引数が不正です!');
    }
    console.log(val1 + val2);
}
addFunc(10,10); //20
//addFunc(1); 例外発生

///4-4-4 argumentsオブジェクトを使えば可変長数も実装可能

var addFunc = function(){
    var result = 0;
    //引数の数だけforを回す
    //これにより、自由に引数の数を変えても答えが返ってくる
    for(var i=0 ; i< arguments.length; i++){
        //Argumentsというコレクションオブジェクトの中に入っている引数を出してくる
        result += arguments[i];
    }
    console.log(result);
}

addFunc(1,1); //2
addFunc(1,2,3,4,5); //15
