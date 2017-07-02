
//モジュール実験用ユーティリティjs
const AUTHOR = 'Yamada,Yoshihiro';

export class Member {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName(){
    return this.lastName + this.firstName;
  }
}

export class Area {
  //発見！コンストラクターは宣言されてればからでもよい！
  constructor(){}

  static getTriangle(base,height){
    return base * height / 2;
  };

  static getDiamond(width, height){
    return width * height / 2;
  };
}
