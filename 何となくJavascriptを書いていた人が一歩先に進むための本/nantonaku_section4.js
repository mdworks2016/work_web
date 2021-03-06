
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

///4-5 Javascriptは引数に名前をつけることができる

function showInfo(args){
    var name = args.name;
    var age = args.age;
    console.log(name + '' + age);
}
showInfo({name:'iga',age:35});
showInfo({age:37,name:'tara'});

//4-6 高階関数、JavascriptにおいてはFunctionもデータ型の一部なので
//関数の中の引数として利用できる、それが高階関数
function higherOrder (values,fnc){
    for (var val in values){
        //つまりfucが宣言したfunctionに置き換えられて実行される!
        fnc(values[val]);
    }
}
higherOrder([1,3,5],function(val){console.log(val)});

///4-7スコープチェーン
////Javascript内での変数はCallオブジェクトに一括して格納されていく
////グローバル関数→outerFunc→innerFuncの順で内側にある変数ほど、Callオブジェクトの先頭に追加される
////変数を読み込むときはリストの先頭からたどって、一番先に合致した変数名が採用される。
console.log('4-7スコープチェーン');
var x = 'Global';
var y = 'Global';

function outerFunc(){
    var x = 'Local Outer';
    function innerFunc(){
        var x = 'Local Inner';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    console.log(x);
    innerFunc();
}
console.log(x);
outerFunc();

///4-7スコープチェーン2回目
////Javascript内での変数はCallオブジェクトに一括して格納されていく
////グローバル関数→outerFunc→innerFuncの順で内側にある変数ほど、Callオブジェクトの先頭に追加される
////変数を読み込むときはリストの先頭からたどって、一番先に合致した変数名が採用される。

var a = 'Global';
var b = 'Global';
function outerFunc(){
    var a = 'Local Outer';
    function innerFunc(){
        var a = 'Local Inner';
        var b = "更新されました";
        //Local inner
        console.log(a);

        //更新されました
        console.log(b);

        //undefined
        //console.log(z);
    }
    //Local Outer
    console.log(a);
    innerFunc();
    //Global　結局スコープチェーンは深堀はされない
    console.log(b + 'アウターの最後');
}
//Global
console.log(a);
outerFunc();

///4-8クロージャ2回目
////これを覚えればJavascript中級者は名乗ってもおk
////本来なら破棄されるはずのcountがなぜか関数の起動をまたいでも生きているのはなぜか？という点
function closure(initVal){
    //毎回initValが代入される
    var count = initVal;
    var innerFunc = function(){
        //関数内のcountはvar myClosureが消されるまで保持される。
        return ++count;
    };
    return innerFunc;
}

var myClosure = closure(100);
console.log('■4-8クロージャー');
//リターン文が関数以外だとエラーになる原因は
//myClosureを関数で宣言しているのでretrneが関数でないと
//エラーになってしまうから。
console.log(myClosure());//101
console.log(myClosure());//102
console.log(myClosure());//103

///4-9クロージャ3回目
////これを覚えればJavascript中級者は名乗ってもおk
////本来なら破棄されるはずのcountがなぜか関数の起動をまたいでも生きているのはなぜか？という点
function closure(initVal){
    var count = initVal;
    var innerFunc = function(){
        return ++count;
    };
    return innerFunc;
}

var myClosure = closure(100);
var myClosure2 = closure(200);

console.log('■4-8-2クロージャー2回目');
console.log(myClosure());//101
console.log(myClosure());//102
console.log(myClosure2());//201
console.log(myClosure2());//202
