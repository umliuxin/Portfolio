window.onload=function(){
	// Fixed Top
	$(document).scroll(function(){
		if ($(this).scrollTop()>700){
			$('#header-navbar').removeClass('navbar-static-top')
			$('#header-navbar').addClass('navbar-fixed-top')
			$('body').css("margin-top","60px")
		}
		else{
			$('#header-navbar').removeClass('navbar-fixed-top')
			$('#header-navbar').addClass('navbar-static-top')
			$('body').css('margin-top',0)
		}});
	// scrolldown
	$('.scrolldown').hover(function(){
		$('.scrolldown').animate({
			'background-position-y':'70px'
		},70,'linear')
		$('.scrolldown').animate({
			'background-position-y':'50px'
		},30,'linear')
		$('.scrolldown').animate({
			'background-position-y':'70px'
		},30,'linear')
		

	},function(){
		$('.scrolldown').animate({
			'background-position-y':'40px'
		},50,'linear')

	});

	// Work header
	var scrollflag1=$('.section-header-1').offset().top-60;
	$(document).scroll(function(){
		if ($(this).scrollTop()<scrollflag1){
			var height=$(this).scrollTop()
			percentage1=(height-0)/(scrollflag1-0)*90+'%'
			// console.log(height)
			$('.section-header-1').css('background-position-y',percentage1)
		}
		else if($(this).scrollTop()>scrollflag1){
			$('.section-header-1').css('background-position-y','90%')
		}
	});
	// About header
	var scrollflag2=$('.section-header-2').offset().top-60;
	$(document).scroll(function(){
		if ($(this).scrollTop()<scrollflag2&&$(this).scrollTop()>scrollflag1){
			var height=$(this).scrollTop()
			// console.log((height-scrollflag1)/(scrollflag2-scrollflag1)*300)
			percentage2=(height-scrollflag1)/(scrollflag2-scrollflag1)*90+'%'
			$('.section-header-2').css('background-position-y',percentage2)
		}
		else if($(this).scrollTop()>scrollflag2){
			$('.section-header-2').css('background-position-y','90%')
		}
	});

	//Contact header
	var scrollflag3=$('.section-header-3').offset().top-60;
	$(document).scroll(function(){
		if ($(this).scrollTop()<scrollflag3&&$(this).scrollTop()>scrollflag2){
			var height=$(this).scrollTop()
			percentage3=(height-scrollflag2)/(scrollflag3-scrollflag2)*90+'%'
			$('.section-header-3').css('background-position-y',percentage3)
		}
		else if($(this).scrollTop()>scrollflag3){
			$('.section-header-3').css('background-position-y','90%')
		}
	});
	// Resume Header
	var scrollflag4=$('.section-header-4').offset().top-60;
	$(document).scroll(function(){
		if ($(this).scrollTop()<scrollflag4&&$(this).scrollTop()>scrollflag3){
			var height=$(this).scrollTop()
			percentage4=(height-scrollflag3)/(scrollflag4-scrollflag3)*90+'%'
			$('.section-header-4').css('background-position-y',percentage4)
		}
		else if($(this).scrollTop()>scrollflag4){
			$('.section-header-4').css('background-position-y','90%')
		}
	});

	// Scroll to section
	$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top-60
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});
	});

	// Navi Menu Selection
	$(document).scroll(function(){
		if($(this).scrollTop()<scrollflag1-20){
			naviSelection(4)
		}
		else if ($(this).scrollTop()<scrollflag2-20&&$(this).scrollTop()>=scrollflag1-20){
			naviSelection(0)
		}
		else if($(this).scrollTop()<scrollflag3-20&&$(this).scrollTop()>=scrollflag2-20){
			naviSelection(1)
		}
		else if($(this).scrollTop()<scrollflag4-20&&$(this).scrollTop()>=scrollflag3-20){
			naviSelection(2)
		}
		else{
			naviSelection(3)
		}

	});

	// Brand Button
	$(document).scroll(function(){
		if($(this).scrollTop()<scrollflag1){
			$('#brand-button').css('display','none');
		}
		else{
			if($('#brand-button').css('display')=='none'){
				$('#brand-button').css({
					'display':'inline',
					'left':'-120px'
				});
				$('#brand-button').animate({
				'left':'10px'
				},150,'linear')
				$('#brand-button').animate({
				'left':'0px'
				},50,'linear')

			}
			
			
		}
	})

	// Project-list
	$('.project-list').each(function(){
		$(this).hover(function(){
			$(this).find('.project-detail').animate({
			'opacity':'1'
		},300,'linear')},function(){
			$(this).find('.project-detail').animate({'opacity':'0'},200,'swing');
		})
	});

	$('.project-list').each(function(){
		$(this).click(function(){
			location.href='#works-section'
			$('#project-fixed').css('display','inline')
			$('#project-fixed').animate({
			'opacity':'1'
		},300,'linear')
			$('body').css('overflow','hidden')
		})
	});

	$('#fixed-close').click(function(){
		location.href='#works-section'
		
		$('#project-fixed').animate({
			'opacity':'0'
		},300,'linear',function(){
			$(this).css('display','none')
		})
		$('body').css('overflow','visible')

	});


	
};

$(window).load(function(){
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
   $('#overlay').fadeOut();

});

function naviSelection(idx){
	if (idx==4){
		$('#navi-button>li').each(function(){
			if ($(this).hasClass('active')){
				$(this).removeClass('active')
			}
		})
	}
	else{
		$('#navi-button>li').each(function(){
			if ($(this).hasClass('active')){
				$(this).removeClass('active')
			}
		})
		$('#navi-button>li').eq(idx).addClass('active')
	}
	
}

