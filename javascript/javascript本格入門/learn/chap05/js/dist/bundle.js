(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _util = require('./lib/util');

var app = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var m = new app.Member('太郎', 'なんとか');
//5.5.3 アプリを機能単位にまとめる-モジュール- 3回目
//インポート命令の記法いろいろ

console.log(m.getName());

/*
//5.5.3 アプリを機能単位にまとめる-モジュール- 2回目
//ポイント　fromの先は../もしくは./で始めること、ディレクトリ名から始めるとトランスパイル上は名前判定になってしまう。
import {Member,Area} from './lib/util'

var m = new Member('太郎','山田');
console.log(m.getName());
*/

/*
//5.5.3 アプリを機能単位にまとめる-モジュール- 1回目
  import {Member,Area} from './lib/util'

  var m = new Member('太郎','山田');
  console.log(m.getName());
*/

//import 命令の様々な記法
//モジュール全体をまとめてインポート

/*(function(){
  'use strict'
  import * as app from 'lib/util';

  var m = new app.Member('太郎','山田');
})();
*/
//モジュール内の個々の要素に別名を付与する
/*(function(){
  'use strict'
  import {Member as MyMember, Arer as MyArea } from 'lib/util';

  var m = new Mymember('太郎','山田');
  console.log(m.getName());
  console.log(MyArea.getTriangle(10,5));

})();
*/

},{"./lib/util":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//モジュール実験用ユーティリティjs マークアップ2回目
var AUTHOR = 'YAMADA,YOSHIHIRO';

var Member = exports.Member = function () {
  function Member(firstName, lastName) {
    _classCallCheck(this, Member);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  _createClass(Member, [{
    key: 'getName',
    value: function getName() {
      return this.lastName + this.firstName;
    }
  }]);

  return Member;
}();

var Area = exports.Area = function () {
  function Area() {
    _classCallCheck(this, Area);
  }

  _createClass(Area, [{
    key: 'cunstructor',

    //コンストラクターは中身空でもおk
    value: function cunstructor() {}
  }], [{
    key: 'getTriangle',
    value: function getTriangle(base, height) {
      return base * height / 2;
    }
  }, {
    key: 'getDiamond',
    value: function getDiamond(width, height) {
      return width * height / 2;
    }
  }]);

  return Area;
}();

/*
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
*/

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jaGFwMDUtYmFiZWwuanMiLCJqcy9saWIvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDR0E7O0lBQVksRzs7OztBQUVaLElBQUksSUFBSSxJQUFJLElBQUksTUFBUixDQUFlLElBQWYsRUFBb0IsTUFBcEIsQ0FBUjtBQUpBO0FBQ0E7O0FBSUEsUUFBUSxHQUFSLENBQVksRUFBRSxPQUFGLEVBQVo7O0FBR0E7Ozs7Ozs7OztBQVNBOzs7Ozs7OztBQVFBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0EsSUFBTSxTQUFTLGtCQUFmOztJQUVhLE0sV0FBQSxNO0FBQ1gsa0JBQVksU0FBWixFQUF1QixRQUF2QixFQUFnQztBQUFBOztBQUM5QixTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDRDs7Ozs4QkFFUTtBQUNQLGFBQU8sS0FBSyxRQUFMLEdBQWdCLEtBQUssU0FBNUI7QUFDRDs7Ozs7O0lBR1UsSSxXQUFBLEk7Ozs7Ozs7O0FBQ1g7a0NBQ2EsQ0FBRTs7O2dDQUVJLEksRUFBSyxNLEVBQU87QUFDN0IsYUFBTyxPQUFPLE1BQVAsR0FBZ0IsQ0FBdkI7QUFDRDs7OytCQUVpQixLLEVBQU8sTSxFQUFPO0FBQzlCLGFBQU8sUUFBUSxNQUFSLEdBQWlCLENBQXhCO0FBQ0Q7Ozs7OztBQUlIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy81LjUuMyDjgqLjg5fjg6rjgpLmqZ/og73ljZjkvY3jgavjgb7jgajjgoHjgost44Oi44K444Ol44O844OrLSAz5Zue55uuXG4vL+OCpOODs+ODneODvOODiOWRveS7pOOBruiomOazleOBhOOCjeOBhOOCjVxuaW1wb3J0ICogYXMgYXBwIGZyb20gJy4vbGliL3V0aWwnXG5cbnZhciBtID0gbmV3IGFwcC5NZW1iZXIoJ+WkqumDjicsJ+OBquOCk+OBqOOBiycpO1xuY29uc29sZS5sb2cobS5nZXROYW1lKCkpO1xuXG5cbi8qXG4vLzUuNS4zIOOCouODl+ODquOCkuapn+iDveWNmOS9jeOBq+OBvuOBqOOCgeOCiy3jg6Ljgrjjg6Xjg7zjg6stIDLlm57nm65cbi8v44Od44Kk44Oz44OI44CAZnJvbeOBruWFiOOBry4uL+OCguOBl+OBj+OBry4v44Gn5aeL44KB44KL44GT44Go44CB44OH44Kj44Os44Kv44OI44Oq5ZCN44GL44KJ5aeL44KB44KL44Go44OI44Op44Oz44K544OR44Kk44Or5LiK44Gv5ZCN5YmN5Yik5a6a44Gr44Gq44Gj44Gm44GX44G+44GG44CCXG5pbXBvcnQge01lbWJlcixBcmVhfSBmcm9tICcuL2xpYi91dGlsJ1xuXG52YXIgbSA9IG5ldyBNZW1iZXIoJ+WkqumDjicsJ+WxseeUsCcpO1xuY29uc29sZS5sb2cobS5nZXROYW1lKCkpO1xuKi9cblxuLypcbi8vNS41LjMg44Ki44OX44Oq44KS5qmf6IO95Y2Y5L2N44Gr44G+44Go44KB44KLLeODouOCuOODpeODvOODqy0gMeWbnuebrlxuICBpbXBvcnQge01lbWJlcixBcmVhfSBmcm9tICcuL2xpYi91dGlsJ1xuXG4gIHZhciBtID0gbmV3IE1lbWJlcign5aSq6YOOJywn5bGx55SwJyk7XG4gIGNvbnNvbGUubG9nKG0uZ2V0TmFtZSgpKTtcbiovXG5cbi8vaW1wb3J0IOWRveS7pOOBruanmOOAheOBquiomOazlVxuLy/jg6Ljgrjjg6Xjg7zjg6vlhajkvZPjgpLjgb7jgajjgoHjgabjgqTjg7Pjg53jg7zjg4hcblxuLyooZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnXG4gIGltcG9ydCAqIGFzIGFwcCBmcm9tICdsaWIvdXRpbCc7XG5cbiAgdmFyIG0gPSBuZXcgYXBwLk1lbWJlcign5aSq6YOOJywn5bGx55SwJyk7XG59KSgpO1xuKi9cbi8v44Oi44K444Ol44O844Or5YaF44Gu5YCL44CF44Gu6KaB57Sg44Gr5Yil5ZCN44KS5LuY5LiO44GZ44KLXG4vKihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCdcbiAgaW1wb3J0IHtNZW1iZXIgYXMgTXlNZW1iZXIsIEFyZXIgYXMgTXlBcmVhIH0gZnJvbSAnbGliL3V0aWwnO1xuXG4gIHZhciBtID0gbmV3IE15bWVtYmVyKCflpKrpg44nLCflsbHnlLAnKTtcbiAgY29uc29sZS5sb2cobS5nZXROYW1lKCkpO1xuICBjb25zb2xlLmxvZyhNeUFyZWEuZ2V0VHJpYW5nbGUoMTAsNSkpO1xuXG59KSgpO1xuKi9cbiIsIi8v44Oi44K444Ol44O844Or5a6f6aiT55So44Om44O844OG44Kj44Oq44OG44KjanMg44Oe44O844Kv44Ki44OD44OXMuWbnuebrlxuY29uc3QgQVVUSE9SID0gJ1lBTUFEQSxZT1NISUhJUk8nO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVye1xuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWUsIGxhc3ROYW1lKXtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gIH1cblxuICBnZXROYW1lKCl7XG4gICAgcmV0dXJuIHRoaXMubGFzdE5hbWUgKyB0aGlzLmZpcnN0TmFtZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJlYXtcbiAgLy/jgrPjg7Pjgrnjg4jjg6njgq/jgr/jg7zjga/kuK3ouqvnqbrjgafjgoLjgYprXG4gIGN1bnN0cnVjdG9yKCl7fVxuXG4gIHN0YXRpYyBnZXRUcmlhbmdsZShiYXNlLGhlaWdodCl7XG4gICAgcmV0dXJuIGJhc2UgKiBoZWlnaHQgLyAyO1xuICB9O1xuXG4gIHN0YXRpYyBnZXREaWFtb25kKHdpZHRoLCBoZWlnaHQpe1xuICAgIHJldHVybiB3aWR0aCAqIGhlaWdodCAvIDI7XG4gIH07XG5cbn1cblxuLypcbi8v44Oi44K444Ol44O844Or5a6f6aiT55So44Om44O844OG44Kj44Oq44OG44KjanNcbmNvbnN0IEFVVEhPUiA9ICdZYW1hZGEsWW9zaGloaXJvJztcblxuZXhwb3J0IGNsYXNzIE1lbWJlciB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0TmFtZSxsYXN0TmFtZSl7XG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICB9XG4gIGdldE5hbWUoKXtcbiAgICByZXR1cm4gdGhpcy5sYXN0TmFtZSArIHRoaXMuZmlyc3ROYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmVhIHtcbiAgLy/nmbropovvvIHjgrPjg7Pjgrnjg4jjg6njgq/jgr/jg7zjga/lrqPoqIDjgZXjgozjgabjgozjgbDjgYvjgonjgafjgoLjgojjgYTvvIFcbiAgY29uc3RydWN0b3IoKXt9XG5cbiAgc3RhdGljIGdldFRyaWFuZ2xlKGJhc2UsaGVpZ2h0KXtcbiAgICByZXR1cm4gYmFzZSAqIGhlaWdodCAvIDI7XG4gIH07XG5cbiAgc3RhdGljIGdldERpYW1vbmQod2lkdGgsIGhlaWdodCl7XG4gICAgcmV0dXJuIHdpZHRoICogaGVpZ2h0IC8gMjtcbiAgfTtcbn1cbiovXG4iXX0=
