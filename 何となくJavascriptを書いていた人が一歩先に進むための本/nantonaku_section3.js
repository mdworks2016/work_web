
//3-2 プロパティとメソッド

var human = [];
human.name = 'igarashi'; //名前
human.age = 35; //年齢
human.sex = 'M'; //性別
human.getInfo = function(){
    return human.name + '' + human.age + '' +  human.sex;//情報を結合してる
}
console.log(human.getInfo());

///変形タイプ　上と同じ結果が出る上に、こちらのほうが可読性が高い!
var human = {
    name:'igarashi',
    age:35,
    sex: 'M',
    getInfo: function(){
        return human.name + '' + human.age  + '' + human.sex;
    }
}
console.log(human.getInfo());

///New演算子
////実はインスタンス宣言の演算子ではない！
////本当はオブジェクトのインスタンスを返却しなさい！とコンストラクタに命令する演算子

var myFunc =  function(){
    this.prop1 = 'bar';
    this.prop2 = 'foo';
    this.method =  function(){
        return this.prop1 + this.prop2;
    }
}

var obj1 = new myFunc();
var obj2 = myFunc();

console.log(obj1.method());
console.log(obj2.method());//こっちはエラー
