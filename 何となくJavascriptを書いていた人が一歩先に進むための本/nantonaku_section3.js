
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

///オブジェクトとプリミティブ型
////プリイティブはオブジェクト（何でも入る）方以外の変数の型
////つまりnumは実際にはnum2と同じ動きをしている、ただしnumはプロパティへのアクセスが完了した時点で
////プリミティブ型へと戻るため、実際のタイプはオブジェクトではなくNumberとなっている。
var num = 999;
var num2 = new Number(999);

console.log(typeof num);
console.log(typeof num2);

console.log(num.toString());
console.log(num2.toString());

///Javascriptは他の言語と違ってやりたい放題
////下記の例は一度宣言したオブジェクトでも、あとからどうとでも変更が加えられてしまう、ということ
var obj = {
    prop1 : 'bar',
    prop2 : 'foo'
}

console.log(obj.prop1); // bar
delete obj.prop1; // プロパティを削除
console.log(obj.prop1); //undefined

///Objectオブジェクト
////Objectのコンストラクタを定義していないくても直接宣言出来てしまう
////その簡便さがJavascript の罠

var obj = new Array();
obj.val = 'hoge';
console.log(obj.val);//hoge

///Global オブジェクト
////このオブジェクトはインスタンス化、メソッドの呼び出しは不可

var num = 10;
console.log(isNaN(num));
////(isNaNがグローバル関数)

///Nullとundefinedの違い
////Nullは定義しないとでない、undefinedは定義されていないと出る

var nuller = null;
var oioi

console.log(nuller);//null
console.log(oioi);//undifined
