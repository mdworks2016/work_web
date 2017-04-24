
//ifelseで条件が先に出ているとそれは判定されない
window.onload = function(){
document.getElementById('sel').onclick = function(){
    var x = document.getElementById('textdata').value;
    x = Number(x);
    switch (x){
        case 0:
            console.log('これは数字の0です');
            break;
        case '0':
            console.log('これは文字の0です');
            break;
        default:
            console.log('これは0以外です');
            break;
    }
}
}
