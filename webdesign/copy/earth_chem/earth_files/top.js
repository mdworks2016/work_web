/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


//100vhとアドレスバー問題の補正
$(function () {
	"use strict";
    $(window).on('resize', function () { //on('load resize')だとiPhoneで発火しない時がある
        ajustHeight();
    });
    ajustHeight();
    function ajustHeight(){
        var wh = $(window).height();
        $('#js-visualArea').css({'height': wh + 'px'});
    }
});



$(function () {
	"use strict";
	$.support.cors = true;
    var transitionEndEvents = [
        'webkitTransitionEnd',
        'mozTransitionEnd',
        'oTransitionEnd',
        'transitionend'
    ];
    var transEnd = transitionEndEvents.join(' ');
    var animationEndEvents = [
        'webkitAnimationEnd',
        'mozAnimationEnd',
        'oAnimationEnd',
        'animationend'
    ];
    var animEnd = animationEndEvents.join(' ');
    var allph = $('.js-visualPhItem');
    //初期の4枚を選択
    var initialph = $('.js-visualPhItem:lt(4)');
    initialph.addClass('visualPhItemNow');
    initialph.first().addClass('visualPhItemNow1');
    initialph.eq(1).addClass('visualPhItemNow2');
    initialph.eq(2).addClass('visualPhItemNow3');
    initialph.eq(3).addClass('visualPhItemNow4');
    var readycount = allph.length + 1; //ロード待ちする要素の数 画像 + ロゴ
    console.log(readycount);
    var splashsec = 1500; //splashを表示する最低秒数
    var splashready = false; //上記秒数を待ち終わったか否か
    //オープニングを既に見たか
    function setLocalStorage(key, value) {
      if (!window.localStorage) return;
      try {
        localStorage.setItem(key, value);
      } catch (err) {
        console.error(err);
      }
    }
    var seenFlagExpire = 24; //「既に見た」フラグの期限（24時間）
    var nowdate = new Date();
    var recentdatestring = window.localStorage.getItem('earthHomeSeen');
    if(recentdatestring){
        var recentdate = new Date(parseInt(recentdatestring));
        var diff=(nowdate.getTime()-recentdate.getTime())/(1000*60*60);
        if (diff < seenFlagExpire){
            $('#js-visualSplash').hide();
            $('.js-headerArea').addClass('animQueued');
            $('#js-visualCatchEn').addClass('animQueued');
            $('#js-visualCatchJp').addClass('animQueued');
            $('.js-contentsArea').addClass('animQueued');
            $('#js-homefooter').addClass('animQueued');
            startmainanim();
        } else {
            setLocalStorage('earthHomeSeen', +new Date);
            loadOpening();
        }
    } else {
        setLocalStorage('earthHomeSeen', +new Date);
        loadOpening();
    }

    //オープニングを開始する
    function loadOpening(){
        //SVG埋め込み・ロード検知
        var $img = $('#js-visualsvg');
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.ajax({
            url: imgURL,
            success: function (data) {
                var $svg = jQuery(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
                if ($svg.attr('viewBox')) {
                    var svg_arr = $svg.attr('viewBox').split(' ');
                }
                $img.replaceWith($svg);
                window.setTimeout(function(){
                    $('#js-visualSplash').addClass('animQueued');
                    window.setTimeout(function(){
                        splashready = true;
                        queueAnim();
                    }, splashsec);
                },100);
            },
            error: function (d) {
                console.log(d);
            }
        });
    }
    function queueAnim(){
        window.setTimeout(function(){
            $('#js-visualSplash').addClass('animEndQueued');
        }, 1250); //splashのアニメーション1s + 間隔0.25s
        $('.visualSplashText').on(transEnd, function(e){
            $(this).off();
            $('#js-visualCatchEn').addClass('animQueued');
                $('#js-visualCatchJp').addClass('animQueued')
                .on(animEnd, function(e){
                    $(this).off();
                    window.setTimeout(function(){
                        startmainanim();
                    }, 250);
                });
        });
    }
    //スプラッシュを飛ばす場合はここから
    /*
    function startmainanim(){
        allph.addClass('subanimQueued');
        window.setTimeout(function(){
            $('.js-visualPhBgblock').addClass('animQueued');
            $('.js-visualPhBgblock').first().on(animEnd, function(){
                $(this).off();
                window.setTimeout(function(){
                    initialph.addClass('animQueued');
                    swapph();
                    window.setTimeout(function(){
                        allph.addClass('subanimEndQueued');
                    }, 1000);
                    window.setTimeout(function(){
                        $('.js-headerArea').addClass('animQueued');
                    }, 1500);
                    window.setTimeout(function(){
                        $('.js-contentsArea').addClass('animQueued');
                        $('#js-homefooter').addClass('animQueued');
                    }, 1650);
                    $('.visualPhItemNow1').on(animEnd, function(){
                        $(this).off();
                    });
                }, 250);
            });
        }, 250);
    }
    */

    //画像入れ替え
    /*
    function swapph(){
        $('.visualPhItemNow1.animQueued').on(animEnd, function(){
            $(this).off();
            allph.removeClass('visualPhItemNow visualPhItemNow1 visualPhItemNow2 visualPhItemNow3 visualPhItemNow4 animQueued');
            window.setTimeout(function(){
                var randomarr = randomarray(4, allph.length);
                $.each(randomarr,function(index,val){
                    allph.eq(val).addClass('visualPhItemNow visualPhItemNow'+(index+1)+' animQueued');
                });
                swapph();
            }, 10)
        });
    }*/

    //先輩の声ランダム表示
    //単独インタビュー
    var allstaff = $('.js-interview_staff');
    var staffrandomarr = randomarray(3, allstaff.length);
    $.each(staffrandomarr,function(index,val){
        allstaff.eq(val).addClass('interview_staff_now interview_staff_now'+(index+1));
    });
    //座談会グループとメンバー
    var alltalk = $('.js-interview_talk');
    var talkrandomarr = randomarray(3, alltalk.length);
    $.each(talkrandomarr,function(index,val){
        var showntalk = alltalk.eq(val);
        showntalk.addClass('interview_talk_now interview_talk_now'+(index+1));
        var alltalkmember = showntalk.find('.js-interview_talk_photo');
        var talkmemberrandomarr = randomarray(1, alltalkmember.length);
        alltalkmember.eq(talkmemberrandomarr[0]).addClass('interview_talk_photo_now');
        showntalk.find('.js-interview_talk_btn').eq(talkmemberrandomarr[0]).addClass('interview_talk_btn_now');
    });

    //重複しないランダムな値の配列を得る
    function randomarray(select, maxlength){
        var checkarr = new Array();
        var resultarr = new Array();
        while(resultarr.length < select){
            var seed = Math.floor(Math.random()*maxlength);
            if($.inArray(seed, checkarr) == -1){
                checkarr.push(seed);
                resultarr.push(seed);
            }
        }
        return resultarr;
	}
});
//IE11
$(function () {
	"use strict";
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('trident/7') > -1) {
        $('html').addClass('ie11');
    }
    if ((ua.indexOf('android') > -1) && (ua.indexOf('chrome') <= -1) || (ua.indexOf('chrome/3') > -1)) {
        $('html').addClass('androidbrowser');
    }
});


//MESSAGEエリアリンク無効化
$(function(){
    $(".messageArea > a").click(function(){
		if( $(window).width() <= 767) {
			return false;
		}
    });
});
