
//ifelseで条件が先に出ているとそれは判定されない
window.onload = function(){
document.getElementById('sel').onclick = function(){
    let tdata=document.getElementById('textdata').value;
    try{
    console.log('トライされたよ!');
        tdata.hashCode();
    }catch(e){
        console.log('キャッチされたよ！');
        console.log(e.message);
    }
}
}
