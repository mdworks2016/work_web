
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

//5-2-2 prototypeプロパティの補完
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
