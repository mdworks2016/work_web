var wW,
wH,
dH = 200,
menuFlg = false;



//SETTING
function setting(){
	wW = $(window).width();
	wH = $(window).height();
	$('.fix_w').css({'width':wW+'px'});
	$('.fix_h').css({'height':wH+'px'});
	if(wW > 768){
		$('body').addClass('pc');
		$('body').removeClass('sp');
	}else{
		$('body').addClass('sp');
		$('body').removeClass('pc');	
	}	
}



//LOADING
function loading(){
	$('.loading img').delay(500).animate({'opacity':'0'},500,function(){
		$('.loading').animate({'opacity':'0'},500,function(){
			$(this).addClass('none');
			opening();
		});
	});
}



//OPENING
function opening(){
	$('.opening_parts > div:nth-child(1)').animate({'left':'0','opacity':'1'},1000);
	$('.opening_logo > div:nth-child(1)').animate({'opacity':'1'},750,'easeInOutQuad');  
	$('.opening_logo > div:nth-child(2)').delay(125).animate({'opacity':'1'},750,'easeInOutQuad');  
	$('.opening_logo > div:nth-child(3)').delay(250).animate({'opacity':'1'},750,'easeInOutQuad',function(){
		$('.opening_parts > div:nth-child(1)').delay(1000).animate({'left':'5%','opacity':'0'},1000); 			
		$('.opening_logo > div:nth-child(3)').delay(1000).animate({'left':'60%','opacity':'0'},750,'easeInOutQuad');		
		$('.opening_logo > div:nth-child(2)').delay(1125).animate({'left':'55%','opacity':'0'},750,'easeInOutQuad',function(){		
			$('.opening_parts > div:nth-child(2)').delay(125).animate({'left':'0','opacity':'1'},1000);
			$('.opening_logo > div:nth-child(4)').delay(125).animate({'left':'0','opacity':'1'},750,'easeInOutQuad');				
			$('.opening_logo > div:nth-child(5)').delay(250).animate({'left':'0','opacity':'1'},750,'easeInOutQuad',function(){
				$('.opening_parts > div:nth-child(2)').delay(1000).animate({'left':'5%','opacity':'0'},1000,function(){
					$('.opening_parts > div:nth-child(3)').delay(125).animate({'left':'0','opacity':'1'},1000);					
					$('.opening_logo > div:nth-child(6)').delay(125).animate({'opacity':'1'},750,'easeInOutQuad',function(){
						$('.opening_parts > div:nth-child(3)').delay(1000).animate({'left':'5%','opacity':'0'},1000);
						$('.opening_logo').delay(1250).animate({'opacity':'0'},750,'easeInOutQuad',function(){		
							$('.opening_parts > div:nth-child(4)').delay(125).animate({'left':'0','opacity':'1'},1000);	
							$('.opening_copy').delay(125).animate({'opacity':'1'},750,'easeInOutQuad',function(){	
								$('.opening').delay(3000).animate({'opacity':'0'},2500,'easeInOutQuad',function(){
									$(this).addClass('none');
								});
							}); 							
						}); 		
					}); 	
				}); 	
			}); 	
		});  		
	});  
}



//SCROLL
function onScroll(){
	if($(this).scrollTop() < wH/2){
		if($('.fix').hasClass('fix_on')){
			$('.fix').removeClass('fix_on');
			$('.fix').addClass('fix_off');
		}
	}else{
		if($('.fix').hasClass('fix_on') == false){
			$('.fix').removeClass('fix_off');
			$('.fix').addClass('fix_on');
		}
	}
	$('.screle').each(function(){
		var cT = $(this).offset().top,
		cH = $(this).height(),
		wT = $(window).scrollTop();
		if(wT > cT - wH + dH && wT < cT + cH){		
			if($(this).attr('id') == 'news'){			
				$('.header').removeClass('blue');
				$('.fix').removeClass('blue');
				$('.fix').removeClass('white');
				$('.fix_title_en p').addClass('none');
				$('.fix_title_ja p').addClass('none');
				$('.fix_title_en > p:nth-child(1)').removeClass('none');
				$('.fix_title_ja > p:nth-child(1)').removeClass('none');
				$('.fix_arrow a').attr('href','#concept');
			}else if($(this).attr('id') == 'concept'){					
				$('.header').addClass('blue');
				$('.fix').addClass('blue');
				$('.fix').addClass('white');							
				$('.fix_title_en p').addClass('none');
				$('.fix_title_ja p').addClass('none');
				$('.fix_title_en > p:nth-child(1)').removeClass('none');
				$('.fix_title_ja > p:nth-child(1)').removeClass('none');
				$('.fix_arrow a').attr('href','#menu');				
			}else if($(this).attr('id') == 'menu'){
				$('.header').addClass('blue');
				$('.fix').removeClass('white');
				$('.fix').addClass('blue');			
				$('.fix_title_en p').addClass('none');
				$('.fix_title_ja p').addClass('none');
				$('.fix_title_en > p:nth-child(2)').removeClass('none');
				$('.fix_title_ja > p:nth-child(2)').removeClass('none');	
				$('.fix_arrow a').attr('href','#floor');							
			}else if($(this).attr('id') == 'floor'){					
				$('.header').removeClass('blue');
				$('.fix').removeClass('blue');
				$('.fix').removeClass('white');
				$('.fix_title_en p').addClass('none');
				$('.fix_title_ja p').addClass('none');
				$('.fix_title_en > p:nth-child(3)').removeClass('none');
				$('.fix_title_ja > p:nth-child(3)').removeClass('none');	
				$('.fix_arrow a').attr('href','#access');					
			}else if($(this).attr('id') == 'access'){
				$('.header').addClass('blue');
				$('.fix').removeClass('white');
				$('.fix').addClass('blue');			
				$('.fix_title_en p').addClass('none');
				$('.fix_title_ja p').addClass('none');
				$('.fix_title_en > p:nth-child(4)').removeClass('none');
				$('.fix_title_ja > p:nth-child(4)').removeClass('none');								
			}
			if(wT < wH/2){
				$('.fix_arrow a').attr('href','#concept');	
			}
		}
		if(wT > cT - wH + dH && wT < cT + cH){
			if($(this).hasClass('screle_on') == false){
				$(this).removeClass('screle_off');
				$(this).addClass('screle_on');				
			}
		}else if(wT < cT - wH + dH && wT < cT + dH){
			if($(this).hasClass('screle_off') == false){
				$(this).removeClass('screle_on');
				$(this).addClass('screle_off');
			}
		}		
	});
}



//MENU_MOVE
function menuMove(){
	if(menuFlg == false){
		menuFlg = true;
		$('.header_menu').removeClass('none');
		$('.header').removeClass('header_off');
		$('.header').addClass('header_on');
	}else{
		$('.header').removeClass('header_on');
		$('.header').addClass('header_off');		
		$('.header_menu').delay(600).queue(function(){
			menuFlg = false;
    		$('.header_menu').addClass('none').dequeue();
		});
	}
}



//MENU_DETAIL
function menuDetail(){
	if($(this).hasClass('menu_pdf')){
		if($(this).hasClass('menu_pdf0')){
			$('.outer_contents0').css({'display':'block'});
		}else if($(this).hasClass('menu_pdf1')){
			$('.outer_contents1').css({'display':'block'});		
		}else{
			$('.outer_contents2').css({'display':'block'});		
		}
		$('.outer').stop().fadeTo(500,1);	
	}else{
		$('#ascrail2000').css({'display':'none'});
		$('#ascrail2001').css({'display':'none'});
		$('#ascrail2002').css({'display':'none'});
		$('.outer').stop().fadeTo(500,0,function(){
			$('.outer').css({'display':''});
			$('.outer_contents').css({'display':''});
		});
	}
}	



//GOOGLE_MAP
function initialize(){
	var myLatLng = new google.maps.LatLng('38.265288','140.869430');
	var myOptions = {
		zoom: 16,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControlOptions: {mapTypeIds: [ google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE ] },
		scrollwheel: false			
	};
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	var image1 = new google.maps.MarkerImage
	('../img/hiiki/marker01.png',
	new google.maps.Size(62,62),
	new google.maps.Point(0,0),
	new google.maps.Point(31,62),    
	new google.maps.Size(62,62));
	new google.maps.Marker({
		position: new google.maps.LatLng('38.265288','140.869430'),
		map: map,
		icon: image1,
		clickable: false
	});
}



$(document).ready(function(){
	setting();
	$('.loading img').delay(250).animate({'opacity':'1'},500);
	var bxsliderLeft = $('.top_slider_left').bxSlider({
		mode:'fade',
		auto:true,
		speed:2500,
		pause:7500,
		autoDelay:14000,
		pager:false,
		controls:false,
		responsive:true,
		touchEnabled:false,
		onSlideBefore:function($slideElement,oldIndex,newIndex){
			$('.top_slider_left > div:nth-child('+(newIndex+1)+')').addClass('top_slider_on');
		},
		onSlideAfter:function($slideElement,oldIndex,newIndex){
			$('.top_slider_left > div:nth-child('+(oldIndex+1)+')').removeClass('top_slider_on');
			bxsliderLeft.startAuto();			
		}
	});
	var bxsliderRight = $('.top_slider_right').bxSlider({
		mode:'fade',
		auto:true,
		speed:2500,
		pause:7500,
		autoDelay:14000,
		pager:false,
		controls:false,
		responsive:true,
		touchEnabled:false,
		onSlideBefore:function($slideElement,oldIndex,newIndex){
			$('.top_slider_right > div:nth-child('+(newIndex+1)+')').addClass('top_slider_on');
		},
		onSlideAfter:function($slideElement,oldIndex,newIndex){
			$('.top_slider_right > div:nth-child('+(oldIndex+1)+')').removeClass('top_slider_on');
			bxsliderRight.startAuto();			
		}
	});
	$('.floor_area').infiniteslide({
		'height':350,
		'speed':15,
		'direction':'right',
		'pauseonhover':false
	});	
	var layer = document.getElementById('parallax');
	var parallax = new Parallax(layer,{
		scalarX:10,
		scalarY:10,
		frictionX:0.1,
		frictionY:0.1,
		originX:0.5,
		originY:0.5
	});
	initialize();
	$('.outer_contents').niceScroll({cursorcolor:"#f3efe7",cursorborder:"none",background:"rgba(255,255,255,0.25)",cursoropacitymin:"1",cursorborderradius:"0px",cursorwidth:"5",scrollspeed:"75",mousescrollstep:"50",zindex:"999"});		
});
$(window).load(function(){	
	$('html,body').animate({scrollTop:0},'1');
	$('.header').addClass('header_off');
	$.ajax({
		type:'GET',
		url:'../../components/fb_process_hiiki.php',
		dataType:'html',
		success:function(data){	     			
			$('.news_area ul').html($(data));
		},complete:function(XMLHttpRequest, textStatus){
			$('.news_area').infiniteslide({
				'height':350,
				'speed':15,
				'direction':'right',
				'pauseonhover':false
			});	
			$('.kerning_js').kerning();
			loading();
		}
	});
});
$('a[target!="_blank"]').on('click',function(e){
	e.preventDefault();
	var link = $(this).attr('href');
	if(link.match(/#/i)){
		var target = $(this.hash);			
		target = target.length && target;
		if(target.length){
			var sclpos = 0;
			var scldurat = 1000;
			var targetOffset = target.offset().top - sclpos;	
			$('html,body').animate({scrollTop:targetOffset},scldurat,"easeInOutExpo");
			return false;
		}else if(link == "#contact"){
			location.href = 'mailto:info@tf-corp.co.jp';
		}	
	}
});
$(window).on('resize',setting);
$(window).on('scroll resize',onScroll);
$(document).on('click','.header_button',menuMove);
$(document).on('click','.menu_pdf',menuDetail);
$('.outer_overlay').bind('click',menuDetail);
$(document).on('mouseenter','.pc .header_menulist',function(){
	$(this).removeClass('header_menulist_off');
	$(this).addClass('header_menulist_on');
});
$(document).on('mouseleave','.pc .header_menulist',function(){
	$(this).removeClass('header_menulist_on');
	$(this).addClass('header_menulist_off');
});
$(document).on('mouseenter','.pc .news_link',function(){
	$(this).find('.news_filter').stop().animate({'opacity':'1'},500);
});
$(document).on('mouseleave','.pc .news_link',function(){
	$(this).find('.news_filter').stop().animate({'opacity':'0'},500);
});
$(document).on('mouseenter','.pc .floor_link',function(){
	$(this).removeClass('floor_link_off');
	$(this).addClass('floor_link_on');
});
$(document).on('mouseleave','.pc .floor_link',function(){
	$(this).removeClass('floor_link_on');
	$(this).addClass('floor_link_off');
});
$(document).on('mouseenter','.pc .footer_company',function(){
	$(this).removeClass('footer_company_off');
	$(this).addClass('footer_company_on');
});
$(document).on('mouseleave','.pc .footer_company',function(){
	$(this).removeClass('footer_company_on');
	$(this).addClass('footer_company_off');
});
$(document).on('mouseenter','.pc .fade',function(){
	$(this).stop().animate({'opacity':'0.5'},500);
});
$(document).on('mouseleave','.pc .fade',function(){
	$(this).stop().animate({'opacity':'1'},500);
});