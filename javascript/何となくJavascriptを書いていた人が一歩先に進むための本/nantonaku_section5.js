
(function(){
'use strict'
//5-2 prototypeプロパティ
///オブジェクトのprototypeプロパティを使って関数を継承、メソッドを追加する例
var Phone = function(name){
    this.name = name;
};
Phone.prototype.getName = function(){
    return this.name;
};
var featurePhone = new Phone('feature phone');
var smartPhone = new Phone('smart phone');

console.log(featurePhone.getName());
console.log(smartPhone.getName());

//5-2-1-2 prototypeプロパティの補完
///prototypeプロパティがなぜいいのか!
///Catの例だと、cat.barkを行った時点で毎回関数が生成されてしまう...
///Dogのようにprototypeプロパティに格納しておけば関数の宣言なし（暗黙参照）に実行結果が得られる
///つまりJavascriptの挙動に使う無駄で大量のメモリーを削減できる!ということ。

function Cat(){
    this.bark = function(){
        console.log('わんわん');
    }
}
var cat = new Cat();
cat.bark();
cat.bark();

var Dog = function(){};
Dog.prototype.bark = function(){
    console.log('わんわん');
};
Dog.prototype.cute = function(){
    console.log('わんわん可愛い!');
};

var dog = new Dog();
dog.bark();
dog.cute();dog.cute();dog.cute();

}());

//5-2-2 prototypeプロパティの2つ目のメリット
///コンストラクタでprototypeプロパティを宣言すると
var Phone = function(name){
    this.name = name;
};

var featurePhone = new Phone('feature phone');

Phone.prototype.getName = function(){
    return this.name;
}

var smartPhone = new Phone('smart phone');

console.log(featurePhone.getName()); //feature phone
console.log(smartPhone.getName()); //smart phone

//5-3-1 プロトタイプチェーン
///プロトタイプチェーンを使った継承方法

var Phone = function(){};
Phone.prototype = {
  getOwner: function(){console.log('Owner is'+this.owner);}
};

var SmartPhone = function(owner){ this.owner= owner};
SmartPhone.prototype = new Phone();
SmartPhone.prototype.tap = fuction(){console.log('tap!')};

var myPhone = new SmartPhone('igarashi');
myPhone.getOwner();
myPhone.tap();

/*1.関数の継承
  SmartPhoneオブジェクトの中に入っている関数のプロトタイプに
  Phoneを継承させて使えるようにしている */
/*2.関数継承の範囲
  グローバルオブエジェクトが消えなければ永遠にFunctionを参照し頭間にできるので
  otherPhoneにも同様のプロパティを備えることができる。
*/

var otherPhone = new SmartPhone('tarama');
otherPhone.getOwner();
otherPhone.tap();
