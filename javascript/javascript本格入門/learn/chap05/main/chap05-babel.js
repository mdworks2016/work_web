
//5.5.3 アプリを機能単位にまとめる-モジュール-
  import {Member,Area} from 'util'

  var m = new Member('太郎','山田');
  console.log(m.getName());


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
