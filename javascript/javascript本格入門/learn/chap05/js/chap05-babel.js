
//5.5.3 アプリを機能単位にまとめる-モジュール- 3回目
//インポート命令の記法いろいろ
import * as app from './lib/util'

var m = new app.Member('太郎','なんとか');
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
