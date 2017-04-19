(function($){

$.fn.infiniteslide = function(options) {

var settings = $.extend( {
		'height':400,
		'speed':30,
		'direction':'left',
		'pauseonhover':true
		},options);

var opening = function(obj){
	var d = new $.Deferred;
	var ul = obj.find('ul');
	var li = obj.find('li');

	i = 0;
	obj.find('li').each(function(key,value){
		$('<img />').attr('src',$(this).attr('src'));
		i = i + parseInt($(this).width());
	});

	obj.css({
		overflow: 'hidden'
	});
	ul.css({
		width: i*2 + 'px',
		height: settings.height + 'px',
		position: 'relative',
		overflow: 'hidden'
	}).children('li').css({
		display: 'inline',
		float: 'left'
	});
	
	li.hide().each(function(key,value){
		$(this).delay(key*200).fadeIn('slow',function(){
			$(this).clone(true).css('display','inline').appendTo(ul);
		});
	});
	
	d.resolve();

	return d.promise();
}


var slide = function(obj){
	var d = new $.Deferred;
	var ul = obj.children('ul');
	
	if(settings.direction == 'right'){
		ul.css('left',-1*ul.width()/2 + 'px');
	}
	
	var anim = function(){
		if(settings.direction == 'left'){
			ul.animate({
				left: '-' + ul.width()/2 + 'px'
				},ul.width()/2*settings.speed,'linear',function(){
				ul.css('left',0);
				anim();
			});
		} else if(settings.direction == 'right'){
			ul.animate({
				left: '0px'
				},ul.width()/2*settings.speed,'linear',function(){
				ul.css('left',-1*ul.width()/2 + 'px');
				anim();
			});
		}

		if(settings.pauseonhover){
			ul.on('mouseenter',function(){
				$(this).pause();
			}).on('mouseleave',function(){
				$(this).resume();
			});
		}
	}

	var delay = ul.children().size() * 210;
	setTimeout(function(){anim();},delay);

	return d.promise();
}

	return this.each(function() {
		opening($(this)).then(slide($(this)));
	});

  };
})(jQuery);