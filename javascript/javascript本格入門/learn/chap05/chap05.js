
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
