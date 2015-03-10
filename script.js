// JavaScript Document

var slide = 1;
var nextslide;
var t;

$(function(){
	
	
	var url = window.location.pathname; 
	
	if(url !== '/'){
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); 
        $('a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                 if($(this).attr('href') !== ''){
                	$(this).parent().addClass('active');
                	$(this).parent().parent().parent().addClass('active');
            	}
            }
        });
	}else{
		$('a').each(function(){
            // and test its normalized href against the url pathname regexp
            if($(this).attr('href') === '/'){
                $(this).addClass('active');
            }
        });
	}
	var overactive = 'n';
	
	$('.nav .how').mouseenter(function(){
		if($(this).hasClass('active')){
			overactive = 'y';
			$('.how.active ul').show();
		}else{
			overactive = 'n';
			$('.how.active ul').hide();
		}
	});
	
	$('.nav').mouseleave(function(){
		if(overactive == 'n'){
			$('.nav .active ul').show();
			overactive = 'n';
		}
	});	


	$('.hb_toggle').click(function(){
		
		//Hamburger Navigation
		if($('.hb_nav').hasClass('open') === true){
			//Close It
			$('.hb_nav').animate({
				right:'-261'
			}, 100);
			$('.Page').animate({
				left:'0'
			}, 100);
			$('.header').animate({
				left:'0'
			}, 100);
			$('.hb_nav').removeClass('open');
			$('.hb_toggle').removeClass('open');
		}else{
			$(window).scrollTop('0');
			//Open It
			$('.hb_nav').animate({
				right:'0'
			}, 100);
			$('.Page').animate({
				left:'-261'
			}, 100);
			$('.header').animate({
				left:'-261'
			}, 100);
			$('.hb_nav').addClass('open');
			$('.hb_toggle').addClass('open');
		}
		
	});	
	
	$('.hb_nav').find('ul li ul').each(function(){
		$(this).parent().addClass('hasSub');
	});	

	$('.hasSub').click(function(){
		
		if($(this).hasClass('open')){
			$(this).find('ul').hide();
			$(this).removeClass('open');
		}else{
			$(this).find('ul').show();
			$(this).addClass('open');
		}
	});

	$('h1').each(function(){
	    var text = $(this).html().split(' '),
	        len = text.length,
	        result = []; 

	    for( var i = 0; i < len; i++ ) {
	        result[i] = '<span>' + text[i] + '</span>';
	    }
	    $(this).html(result.join(' '));
	});	
	$('.quote em').each(function(){
	    var text = $(this).html().split(' '),
	        len = text.length,
	        result = []; 

	    for( var i = 0; i < len; i++ ) {
	        result[i] = '<span>' + text[i] + '</span>';
	    }
	    $(this).html(result.join(' '));
	});
		
	var sh = 0;
	$('.white').find('h2').each(function(){
		if(sh === 0){
			$(this).next('p').addClass('subheader');
		}
		sh++;
	});	

	if($('.need_more').length > 0){
		$('.subheader').css('max-width','530px');
		$('.sideblock.red').addClass('underForm');
		//$('.sideblock.red').css('margin-top',' 285px');
	}	


	if($('.hero_emppic').length > 0){
		var hero_img = $('.hero_emppic').attr('data-src');
		/*var img = new Image();
		img.onload = function() {
			Pixastic.process(img, "mosaic", {blockSize:12});
		}
		$('.hero').html(img);
		img.src = hero_img;
		$('.hero').css('text-align','center');*/
		$('.hero').css('background-image', 'url('+hero_img+')');

	}else{
		var hero_img = $('.hero_img').find('img').attr('src');
		$('.hero').css('background-image', 'url('+hero_img+')');
	}


	t = setTimeout(homepage_slider, 8000);


	$('.arw_left').click(function(){
		clearTimeout(t);
		homepage_slider_back();
	});
	$('.arw_right').click(function(){
		clearTimeout(t);
		homepage_slider();
	});

	$('.wide.white .content').each(function(){
		if($(this).find('div').length === 0){
			$(this).parent().css('padding','0');
		} 
		
	});
		
	


});


function homepage_slider(){
	clearTimeout(t);
	$('.slide').fadeOut();
	slide = slide + 1;
	if(slide === 5){slide = 1;}
	$('.slide_'+ slide).fadeIn();

	t = setTimeout(homepage_slider, 8000);
}

function homepage_slider_back(){
	clearTimeout(t);
	$('.slide').fadeOut();
	slide = slide - 1;
	if(slide === 0){slide = 4;}
	$('.slide_'+ slide).fadeIn();

	t = setTimeout(homepage_slider, 8000);
}


