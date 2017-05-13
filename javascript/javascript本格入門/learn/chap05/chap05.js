
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

//5.3.2 継承関係は動的に変更可能
/*何が言いたいのかというと
  コードの末尾でDogにはanimalのプロトタイプが入っているのでwalkはだだだになるはず
  ところがトコトコと出てくる
  つまり
  初回の継承時点でd1に入ったプロトタイプは固定されるということ
*/
(function(){
  'use strict'
  var Animal = function(){};
  var word = '5.3.2 継承関係は動的：'

  Animal.prototype = {
    walk : function(word){
      console.log(word + 'トコトコ');
    }
  }

  var SuperAnimal = function(){};
  SuperAnimal.prototype = {
    walk : function(word){
      console.log(word + 'だだだだだ！');
    }
  }

  var Dog = function(){};
  Dog.prototype = new Animal();
  var d1 = new Dog();//この時点でDogのプロトタイプが固定されている
  d1.walk(word);//結果：トコトコ

  Dog.prototype = new SuperAnimal();
  var d2 = new Dog();
  d2.walk(word);//結果：だだだだだ！
  d1.walk(word);//結果：トコトコ

})();

//5.4 継承関係は動的に変更可能
//5.4.1 プライベートメンバーを定義する
/*
パブリックメンバーはクラス外から自由にアクセス可能なのか検証
*/
//失敗例
(function(){
  'use strict'
  function Triangle_pablic(){
    var _base = 10;
    var _height = 5;
    var word = '5.4.1 プライベートメンバーを定義する：'

    this.output = function(){
      return _base * _height;
    }

  }

  var t = new Triangle_pablic();
  t._base = 4;
  t._height = 5;
  //どのよにやってもプライベートメンバーへは上書きできないし、あくせすもできない

  console.log(t.output());

})();

//成功例
(function(){
  'use strict'
  var word = {
    comment : '5.4.1 プライベートメンバーを定義する：'
  }
  function TrianglePrivate(){

    var num = {
      _base : '',
      _height : '',
    }
    //引数valが正の値かをチェックするためのスクリプト
    var _checkArgs = function(val){
      return (typeof val == 'number' && val > 0);
    }

    //プライベートメンバーにアクセスするためのメソッドを定義
    this.setBase = function(base){
      //正の値かチェックを挟んでからプライベートプロパティの_baseに格納する
      if(_checkArgs(base)){
        num._base = base;
      }
    }

    this.getBase = function() {
      return num._base;
    }

    this.setHeight = function(height){
      //仕組みはbaseと同じ
      if(_checkArgs(height)){
        num._height = height;
      }
    }
    this.getHeight = function(){
      return num._height;
    }
  }

  //プライベートメンバーにアクセスしない普通のメソッドを定義
  //つまり コンストラクタさえ作ってしまえば
  //var 内部にはアクセスできないが、this.メソッドにはアクセスできるということ
  TrianglePrivate.prototype.getArea = function(){
    return this.getBase() * this.getHeight() / 2;
  }

  var t = new TrianglePrivate();
  t._base = 10;
  t._height = 2;
  //プライベートメンバーにアクセスできていないので初期値が返ってくる
  console.log(word.comment + '三角形の面積：' + t.getArea());

  t.setBase(10);
  t.setHeight(2);
  console.log(word.comment + '三角形の底辺：' + t.getBase());
  console.log(word.comment + '三角形の高さ：' + t.getHeight());
  console.log(word.comment + '三角形の面積：' + t.getArea());

})();
