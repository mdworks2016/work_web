
//ifelseで条件が先に出ているとそれは判定されない
window.onload = function(){
document.getElementById('sel').onclick = function(){
    //配列の内容を条件で絞り込む
    //変数にコールバック関数を格納して、発火させる

    var data = [4,9,16,25];
    var result = data.filter(function(value,index,array){
        return value % 2 === 1;
    });
    console.log(result);

    var data2 = [2,3,4,5];
    data2.forEach(funciton(value,index,array){
        console.log(value * value);
        //結果：4、9、16、25
    })
}
}
