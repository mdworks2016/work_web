
////////* マウスの動きで移動（ジャイロセンサー） *////////
function parallax(){
  $('#port,#illust').parallax({
      bgImage:true
  });
}

////////* スクロールで徐々に表示 *////////
$(function(){
  $('.effect img,.textColor1 .step1,.textColor1 .step2').css("opacity","0");
  $(window).scroll(function (){
    $(".effect").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $("div, img ,h2 ,h3 ,p.text" ,this).css("opacity","1" );
      } else {
        $("div, img",this).css("opacity","0" );
      }
    });
  });
});

////////* スクロールポイントアクション *////////
$(function(){
  $(".textColor1 .text-box h2,.textColor1 .text-box h3").css({
      "color":"#fff",
  });
  $(".textColor1 .text-box span").css({
      right       :"0",
      width    :"0",
  });
  $(".textColor1 .text-box p.text").css({
      marginLeft    :"100px",
      opacity:0
  });
  /*peekabooで発火タイミングをコントロールしている*/
  $('body').peekaboo(function(){
    /*if(direction === 'down')*/
      setTimeout(function () {
        $('.textColor1 .text-box h2 span.back2').delay(200).animate({
          width    :"100%",
          left    :"0",
        },500,'easeInOutCubic');
      }, 100);
      setTimeout(function () {
        $(".textColor1 .text-box h2").css({
          "color":"#e970a5",
        });
      }, 1000);
      setTimeout(function () {
        $('.textColor1 .text-box h2 span.back2').delay(200).animate({
          width    :"0",
        },500,'easeInOutCubic');
      }, 200);
      setTimeout(function () {
        $('.textColor1 .text-box h2 span.back1').delay(300).animate({
          width    :"100%",
          left    :"0",
        },500,'easeInOutCubic');
      }, 300);
      setTimeout(function () {
        $('.textColor1 .text-box h2 span.back1').delay(300).animate({
          width    :"0",
        },500,'easeInOutCubic');
      }, 400);

      setTimeout(function () {
        $('.textColor1 .text-box h3 span.back2').delay(200).animate({
          width    :"100%",
          left    :"0",
        },500,'easeInOutCubic');
      }, 200);
      setTimeout(function () {
        $(".textColor1 .text-box h3").css({
          "color":"#e970a5",
        });
      }, 1100);
      setTimeout(function () {
        $('.textColor1 .text-box h3 span.back2').delay(200).animate({
          width    :"0",
        },500,'easeInOutCubic');
      }, 300);
      setTimeout(function () {
        $('.textColor1 .text-box h3 span.back1').delay(200).animate({
          width    :"100%",
          left    :"0",
        },500,'easeInOutCubic');
      }, 400); // 0.3秒後に実行
      setTimeout(function () {
        $('.textColor1 .text-box h3 span.back1').delay(300).animate({
          width    :"0",
        },500,'easeInOutCubic');
      }, 500);
      setTimeout(function () {
        $('.textColor1 .text-box p.text').delay(1000).animate({
          marginLeft    :"0",
          opacity:1
        },1000,'easeOutExpo');
      }, 500);
  });

});
