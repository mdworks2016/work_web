
//コンストラクター「new」で初期化して、インスタンスを生成する
//インスタンスとはプログラム上での衝突を防ぐためのオブジェクトのコピーのメソッドである。

const Member = function (firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function(){
    return this.lastName + '' + this.firstName;
  }
};

const men = new Member('祥宏','山田');
console.log(men.getName());

//5.1.5
//文脈によって中身が変化する変数　-thisキーワード-
//call / apply メソッドを使って説明
//注目するべきは 引数：that の動き

const data = 'Global data';
const obj1 = {data:'obj1 data'};
const obj2 = {data:'obj2 data'};

function hoge(){
  console.log(this.data);
}

hoge.call(null); //結果：Global
hoge.call(obj1); //結果：obj1 data
hoge.call(obj2); //結果：obj2 data

//5.2
//コンストラクターはやめて、プロトタイプ使いましょうって話
(function(){
  //ここは関数
  var Member = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
      return this.lastName + '' + this.firstName;
    }
  };
  //ここでnewを宣言してコンストラクタ関数を呼び出している
  //Memberは自作だが、ObjectとかNumberとかあらかじめ決められた形があれば分かりやすいかも
  var men = new Member('小広','山田');
  console.log('5.2復習用 コンストラクターの初期化'+men.getName()); //
})();


//5.2
//5.2.5 オブジェクトリテラルでプロトタイプを定義する
//■修正前のファイル
(function(){
  var Member1 = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  };
  Member1.prototype.getName = function(){
    return this.lastName + '' +this.firstName;
  };
  Member1.prototype.toString = function(){
    return this.lastName + this.firstName;
  }
  var mem1 = new Member1('ファーストネーム','ラストネーム');
  console.log('5.2.5 オブジェクトリテラル宣言前'+mem1.getName());
})();
//■修正後のファイル
(function(){
  var Member1 = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  };
  Member1.prototype ={
    getName : function(){
      return this.lastName + '' +this.firstName;
    },
    toString : function(){
      return this.lastName + this.firstName;
    }
  };
  //オブジェクトリテラルで格納した。
  var mem1 = new Member1('ファーストネーム','ラストネーム');
  console.log('5.2.5 オブジェクトリテラル宣言後'+mem1.getName());
  //結果は同じだが、記述が最小限で済むようになった。
})();

//5.3 オブジェクトの継承-プロトタイプチェーン-
//5.3.1 プロトタイプチェーンの基礎
(function(){
  'use strict'
  var Animal = function(){};
  Animal.prototype = {
    walk: function(){
      console.log('tokotoko');
    }
  };

  var Dog = function(){
    Animal.call(this);
  };

  Dog.prototype = new Animal();
  Dog.prototype.bark = function(){
    console.log('wanwan!');
  }

  var d = new Dog();
  d.walk();
  d.bark();

})();
