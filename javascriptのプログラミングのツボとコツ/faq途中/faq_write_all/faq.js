
'use strict'
//ただしこのやり方は画像の読み込みまで待つので、非常にレスポンスが悪くエラーを誘発する！
//Jqueryの即時関数は画像の読み込みを待たないため、基本はそちらを使うように
    //ドキュメントの読み込み
    var taglist = document.getElementsByTagName('dd');
    //evaluateは3つあるがこれが配列で格納されている
    var elms = document.getElementsByClassName('evaluate');
    var buttons = document.getElementsByTagName('button');
    var quertions = document.getElementsByTagName('dt');
    for (var i = 0; i < quertions.length; i++) {
        quertions.item(i).onclick = toggleAnswer;
        var answer = quertions.item(i).nextSibling.nextSibling;
        var link = answer.getElementsByTagName('a');
        link.item(0).addEventListener('click',addStar,false);
        link.item(1).addEventListener('click',removeStar,false);
    }
    var links = document.getElementsByClassName('evaluate');
//関数宣言
function allChange(mode){
    for (var i = 0; i < taglist.length; i++) {
      taglist.item(i).className = mode;
    }
}
  //イベントオブジェクトは、HTMLに直書きされた関数だと入ってこない
  //あくまで、イベントハンドラが設定された関数でなければならない
  function toggleAnswer(event){
      var question = event.target;
      var answer = question.nextSibling.nextSibling;
      if (answer.className === 'close'){
          answer.className = 'open';
      }else{
          answer.className = 'close';
      }
  }
  function addStar(event){
      //ターゲットのイベントでaタグにhrefの値をキャンセルする
      event.preventDefault();
      //クリックされた回数入れるには毎回starを生成する必要がある!
      //createElementでimg要素を作成している。
      //createElementはあくまでノード上のデータなので、DOMには影響を及ぼさない
      var star = document.createElement('img');
      star.src =  'star.png';
      var link = event.target;
      var elm = link.parentNode;
      elm.appendChild(star);
    }
   function removeStar(event){
       //ターゲットのイベントでaタグにhrefの値をキャンセルする
       event.preventDefault();
       var link = event.target;
       console.log(link);
       var elm = link.parentNode;
       if(elm.lastChild.nodeName == 'IMG'){
           elm.removeChild(elm.lastChild);
       }
   }
   //イベントハンドラ
   buttons.item(0).addEventListener('click',function(){allChange('open');},false);
   buttons.item(1).addEventListener('click',function(){allChange('close');},false);


   //ノードの取り出しテスト
   //結果：そもそもノードの呼び出しはByIdにしか対応してなかった...
   var nodeTest =  document.getElementById('node_test').childNodes;
   var nodeTest2 =  document.getElementById('wrapper').nextSibling;
   console.log('わラッパの子供ノード1こめ：' + nodeTest.item(2));
   console.log('わラッパの兄弟ノード次：' + JSON.stringify(nodeTest2));
