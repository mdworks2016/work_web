
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

///New演算子2
var myFunc = function(){
    this.prop1 = 'bar';
}

var obj1 = new myFunc();
var obj2 = myFunc(); //リターンがあれば帰ってこれるが...

console.log(obj1); // myFunc [prop1:"bar"]
console.log(obj2); // undefinded

///New演算子3
var myFunc = function(){
    this.prop1 = 'bar';
    return 'boo';
}

var obj1 = new myFunc();
var obj2 = myFunc(); //リターンがあれば帰ってこれるが...

console.log(obj1); // myFunc [prop1:"bar"]
console.log(obj2); // boo

///独自のコンストラクタを定義する
var Member = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getInfo = function(){
        return '氏名：' + this.lastName + '' + this.firstName + '(' + this.age + '歳)';
    }
}

var igarashi = new Member('啓','五十嵐',35);
var tarama = new Member('斎','多良間',37);
console.log(igarashi.getInfo());
console.log(tarama.getInfo());
