/*============================================================
Global Menu
============================================================*/
$(function(){
	"use strict";
    var animationEndEvents = [
        'webkitAnimationEnd',
        'mozAnimationEnd',
        'oAnimationEnd',
        'animationend'
    ];
    var animEnd = animationEndEvents.join(' ');
    var nownum = 0;
    var menuitem =  $('.js-header_gnav_main');
    var maxnum = menuitem.length - 1;
    var menuitemcts = $('.js-menu_inner');
    var menubg = $('#js-header_menu');
    var openbtn = $('#js-btn_menu');
    var closebtn = $('#js-btn_close');
    var scrollrock;

    //モバイル判定
    var ua = navigator.userAgent.toLowerCase();
    var ismobile = false;
    if ((ua.indexOf('android') > -1) || (ua.indexOf('iphone') > -1)|| (ua.indexOf('ipad') > -1)){
        ismobile = true;
        $('html').addClass('mobile');
    }

    menuitem.on('mouseenter click', function(){
        menuitem.removeClass('menu_now');
        $(this).addClass('menu_now');
        nownum = menuitem.index(this);
    }).on('mouseleave', function(){
        $(this).removeClass('menu_now').find('.js-menu_inner').addClass('menu_inner_closing')
        .on(animEnd, function(e){
            $(this).off().removeClass('menu_inner_closing');
        });
    });
    openbtn.on('click', function(){
        menubg.addClass('header_menu_open');
        closebtn.addClass('btn_close_shown');
        //ここで最初に出すメニューを制御します。
        menuitem.removeClass('menu_now');
        shownowitem();
        window.setTimeout(function(){
            adjustmenu();
        },1);
        //スクロール抑止
        scrollrock = function (e) {
            e.preventDefault();
        };
        document.addEventListener('touchmove', scrollrock, {passive: false});
    });
    closebtn.on('click', function(){
        menubg.removeClass('header_menu_open');
        closebtn.removeClass('btn_close_shown');
        //スクロール再開
        document.removeEventListener('touchmove', scrollrock);
    });
    $(window).on('resize', function(){
        adjustmenu();
    })
    function adjustmenu(){
        var mh = 0;
        if (!window.innerWidth) {
            return;
        }
        if(window.innerWidth < 768 || ismobile){
            menuitemcts.each(function(){
                var h = $(this).height();
                if(h > mh){
                    mh = h;
                }
                menubg.css({'height': mh + $('.js-headerArea').outerHeight() + $('#js-header_gnav').outerHeight() + $('#js-header_link').outerHeight()});
            });
        } else {
            menubg.css({'height': '100%'});
        }
    }
	//スワイプ
	$('#js-header_gnav').on('touchstart', onTouchStart)
		.on('touchmove', onTouchMove)
		.on('touchend', onTouchEnd);
	var direction, position, positiony;

	function onTouchStart(event) {
		position = getPosition(event);
		positiony = getPositionY(event);
		direction = '';
	}

	function onTouchMove(event) {
        var movemin = $(window).width() * 0.05;
        if(Math.abs(positiony - getPositionY(event)) < movemin ){
            if (position - getPosition(event) > movemin) {
                direction = 'left';
                event.preventDefault();
            } else if (position - getPosition(event) < movemin * -1) {
                direction = 'right';
                event.preventDefault();
            }
        }
	}

	function onTouchEnd(event) {
		if (direction == 'right') {
			nownum++;
            if (nownum > maxnum ){
                nownum = maxnum;
            }
            shownowitem();
		} else if (direction == 'left') {
			nownum--;
            if (nownum < 0 ){
                nownum = 0;
            }
            shownowitem();
        }
	}

	function getPosition(event) {
		return event.originalEvent.touches[0].pageX;
	}
	function getPositionY(event) {
		return event.originalEvent.touches[0].pageY;
	}
    function shownowitem(){
        $('.menu_now').removeClass('menu_now').find('.js-menu_inner').addClass('menu_inner_closing')
        .on(animEnd, function(e){
            $(this).off().removeClass('menu_inner_closing');
        });
        menuitem.eq(nownum).addClass('menu_now');
    }
});

/*============================================================
Page scroll
============================================================*/
$(function() {
	$(".scroll").click(function(event){
		event.preventDefault();
		var url = this.href;
		var parts = url.split("#");
		var target = parts[1];
		var target_offset = $("#"+target).offset();
		var target_top = target_offset.top;
		//$('html, body').animate({scrollTop:target_top}, 'slow','swing');
		$('html, body').stop(true, false).animate({scrollTop:target_top}, 1000, 'easeOutCubic');
	});
});

/*============================================================
Pagetop Button
============================================================*/
$(function() {
	var topBtn = $('.gotop');
	//topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
//			topBtn.fadeIn();
            topBtn.addClass('shown');
		} else {
//			topBtn.stop(true, true).fadeOut();
            topBtn.removeClass('shown');
		}
	});

	var setTimeoutId = null;
	window.addEventListener( "scroll", function(){
		if(setTimeoutId) {
			clearTimeout(setTimeoutId);
		}
		setTimeoutId = setTimeout(function(){
//			topBtn.fadeOut();
            topBtn.removeClass('shown');
            setTimeoutId = null;
		}, 3000);
	});
    topBtn.on('mouseleave', function(){
        topBtn.addClass('shown');
        clearTimeout(setTimeoutId);
		setTimeoutId = setTimeout(function(){
            topBtn.removeClass('shown');
            setTimeoutId = null;
		}, 3000);
    })

	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 'slow','swing');
		return false;
	});


	var topBtn2 = $('.gotop_sp');

	topBtn2.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 'slow','swing');
		return false;
	});
});


/*============================================================
Accordion
============================================================*/
$(function() {
$('.cmn_accordion').each(function(){
	var $wrap = $(this);
	var $sw = $('.cmn_accordion_switch', $wrap);
	var $target = $('.cmn_accordion_cts', $wrap);
	//
	$target.removeClass('active');

	$($sw).click(function(){
		if( window.matchMedia("(max-width:767px)").matches ){
			$wrap.toggleClass('active');
			// on
			if( $wrap.hasClass('active') ){
				$target.slideDown(400);
			// off
			} else {
				$target.slideUp(400, function(){ $target.attr('style', ''); });
			}
			return false;
		}
	});
});

});
$(function() {
$('.cmn_accordion2').each(function(){
	var $wrap = $(this);
	var $sw = $('.cmn_accordion2_switch', $wrap);
	var $target = $('.cmn_accordion2_cts', $wrap);
	//
	$target.removeClass('active');

	$($sw).click(function(){
			$wrap.toggleClass('active');
			// on
			if( $wrap.hasClass('active') ){
				$target.slideDown(400);
			// off
			} else {
				$target.slideUp(400, function(){ $target.attr('style', ''); });
			}
			return false;
	});
});

});

/*============================================================
Popup Movie
============================================================*/
$(function(){
	"use strict";
    $('.movieLink').magnificPopup({
       type: 'iframe',
           iframe: {
               patterns: {
                   youtube: {
                       index: 'youtube.com',
                       id: 'v=',
                       src: '//www.youtube.com/embed/%id%?rel=0&autoplay=1'
                    }
               }
           },
        fixedBgPos:true,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
    });
});

/*============================================================
Image Change
============================================================*/
$(function(){
	var $elem = $('.js-image-switch');
	var sp = '_sp.';
	var pc = '_pc.';
	var replaceWidth = 768;

	function imageSwitch(){
		var windowWidth = parseInt($(window).width());
		$elem.each(function(){
			var $this = $(this);
			if(windowWidth >= replaceWidth){
				$this.attr('src', $this.attr('src').replace(sp, pc));
			} else {
				$this.attr('src', $this.attr('src').replace(pc, sp));
				}
			});
		}
	imageSwitch();

	var resizeTimer;
	$(window).on('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			imageSwitch();
		}, 100);
	});
});


/*============================================================
Text ellipsis
============================================================*/
$(function(){
	$(".breadcrumbArea li:nth-child(4)").each(function(){
		if( $(window).width() <= 767) {
			var txt = $(this).text();
			$(this).text(
				txt.replace(/INTERVIEW「/g,"")
			);
			if ($(this).text().length > 8) {
				$(this).text($(this).text().substr(0, 7));
				$(this).append("…");
			}
		}
	});
});
