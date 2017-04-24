
//ifelseで条件が先に出ているとそれは判定されない

window.onload = function(){
document.getElementById('sel').onclick = function(){
    let x = document.getElementById('textdata').value;
    if (x <= 20){
        console.log('変数は20以上です');
    }else if(x <=10){
        console.log('変数は10以上です');
    }else{
        console.log('変数は10未満です');
    }
}
}
