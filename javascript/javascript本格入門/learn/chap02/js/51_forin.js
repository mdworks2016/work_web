
//ifelseで条件が先に出ているとそれは判定されない
window.onload = function(){
document.getElementById('sel').onclick = function(){
    let data={a:'apple',b:'banana',c:'cout'}
    for (var key in data){
        console.log(key + '=' + data[key]);
    }
}
}
