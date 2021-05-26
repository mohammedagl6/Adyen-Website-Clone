

$(document).ready(function(){
	
	const navBtn = $('#nav-btn');
	const navIcon = $('.nav-btn');
	const coverBackground = $('#main_background');
	const links = $('.links');
	
	navBtn.click(function(){
		
		navIcon.toggleClass('nav-btn-close');
		$(document.body).toggleClass('main_menu_fixed');
		coverBackground.toggleClass('main_background');
		if($('.show_sub_sm').length){ $('.show_sub_sm').removeClass('show_sub_sm'); }
		if($('.show_back_main_btn').length){ $('.show_back_main_btn').removeClass('show_back_main_btn'); }
		if($('.main_menu_fixed').length){
			$('.nav_sticky').css('background-color', 'transparent');
		}else{
			$('.nav_sticky').css('background-color', '#fff');
		}		
	});

	coverBackground.click(function(){
		navIcon.removeClass('nav-btn-close');
		$(document.body).removeClass('main_menu_fixed');
		coverBackground.removeClass('main_background');
		//if(coverBackground.hasClass('subMenuBigTag')){
			//links.removeClass('links_white');
			// $('nav .sub_menu').each(function(){
			// 	if ($(this).hasClass('display_flex')){
			// 		$(this).removeClass('display_flex');
			// 	}
			// });
		resetClasses();
			
			//coverBackground.removeClass('subMenuBigTag');	
		//}
			

	})
	// document.addEventListener('click', function (event) {
	// 	if (event.target.classList.contains('main_background')){
	// 		if (navIcon.hasClass('nav-btn-close')) {
	// 			navIcon.removeClass('nav-btn-close');
	// 			$(document.body).removeClass('main_menu_fixed');
	// 			coverBackground.removeClass('main_background');			
	// 		}
	// 	}
	// });
	$(window).resize(function(){
		if (navIcon.hasClass('nav-btn-close')) {
			navIcon.removeClass('nav-btn-close');
			$(document.body).removeClass('main_menu_fixed');								
		}
		if(coverBackground.hasClass('main_background')){
			coverBackground.removeClass('main_background');	
		}
		
		resetClasses();
	});

	function resetClasses(){
		if($('.links_white').length){ $('.links_white').removeClass('links_white'); }
		if($('.display_flex'.length)){ $('.display_flex').removeClass('display_flex');	}
		if($('.rotate_180').length){ $('.rotate_180').removeClass('rotate_180'); }
		if($('.border_top').length){ $('.border_top').removeClass('border_top'); }
		if($('.show_sub_sm').length){ $('.show_sub_sm').removeClass('show_sub_sm'); }
		if($('.show_back_main_btn').length){ $('.show_back_main_btn').removeClass('show_back_main_btn'); }
		if($('.hide_scroll').length){$('.hide_scroll').removeClass('hide_scroll'); }
		if($('.nav_sticky').length){$('.nav_sticky').css('background-color', '#fff');}
	}
	
	const navMenu = $('.main_menu');
	let lastScrollTop = 0;
	let timerSet = 0
	$(window).scroll(function(){
		clearTimeout(timerSet);
		timerSet = setTimeout(function(){
			let nowScrollTop = $(this).scrollTop();			
			if(nowScrollTop > lastScrollTop){
				if(navMenu.hasClass('nav_sticky')){
					navMenu.removeClass('nav_sticky');
				}
			}else{
				if(!navMenu.hasClass('nav_sticky')){
					navMenu.addClass('nav_sticky');
				}
			}
			lastScrollTop = nowScrollTop;
		}, 50);
		
	});


	const modalVideoClose = $('.video_modal-close');
	const videoModal = $('.video_modal');
	const btnPlay = $('#btn-play');
	btnPlay.click(function(e){
		e.preventDefault();
		videoModal.css('display', 'block');
		$(document.body).addClass('hide_scroll');
	});
	modalVideoClose.click(function(){
		videoModal.css('display', 'none');
		$(document.body).removeClass('hide_scroll');
		stopVideo();
	});
	videoModal.click(function(){
		videoModal.css('display', 'none');
		$(document.body).removeClass('hide_scroll');
		stopVideo();
	});

	function stopVideo(){
		var iframe = videoModal[0].getElementsByTagName("iframe")[0];
		var url = iframe.getAttribute('src');
		iframe.setAttribute('src', '');
		iframe.setAttribute('src', url);
	}

	let lastBtn, the_same=false;
	$('.sub_menu-btn').click(function(e){
		e.preventDefault();
		if($('.nav_sticky').length){$('.nav_sticky').css('background-color', 'transparent');}
		if($('.main_menu_fixed').length){
			let subMenu = $(this).find('.sub_menu');
			let backMainBtn = $(this).find('.back_main_btn');			
			subMenu.addClass('show_sub_sm');
			backMainBtn.addClass('show_back_main_btn');
		}else{
			if(lastBtn == this){
				console.log("true");
				the_same = true;
			}else{
				the_same = false;
			}
			lastBtn = this;		
			let subMenu = $(this).find('.sub_menu');
			let subMenuIcon = $(this).find('.fa-chevron-down');
			
			if($('.links_white').length){			
				$('.links_white').removeClass('links_white');
				$('.display_flex').removeClass('display_flex');
				$('.rotate_180').removeClass('rotate_180');
				$('.border_top').removeClass('border_top');
				$(document.body).removeClass('hide_scroll');
				coverBackground.removeClass('main_background');
				if($('.nav_sticky').length){$('.nav_sticky').css('background-color', '#fff');}
				
				// close the last menu and open the other menu automaticaly
				if(!the_same){
					if($('.nav_sticky').length){$('.nav_sticky').css('background-color', 'transparent');}
					$(document.body).addClass('hide_scroll');
					coverBackground.addClass('main_background');
					//coverBackground.addClass('subMenuBigTag');
					links.addClass('links_white');	
					subMenu.addClass('display_flex');			
					subMenuIcon.addClass('rotate_180');
					$(this).addClass('border_top');
				}
				
			}else{
				$(document.body).addClass('hide_scroll');
				coverBackground.addClass('main_background');
				//coverBackground.addClass('subMenuBigTag');
				links.addClass('links_white');	
				subMenu.addClass('display_flex');			
				subMenuIcon.addClass('rotate_180');
				$(this).addClass('border_top');
				
			}
		}		
	});

	$('.back_main_btn').click(function(e){		
		$(this).parent().removeClass("show_sub_sm");
		$(this).removeClass("show_back_main_btn");
		e.stopPropagation()
	});



	$('.search-options-btn').click(function(e){			
		e.preventDefault();		
		if($('.border_bottom_green').length){ $('.border_bottom_green').removeClass('border_bottom_green'); }
		$(this).addClass('border_bottom_green');
	});
	$('.search-close-btn').click(function(){
		$('#search').css('display', 'none');
	});
	$('#search_open_btn').click(function(){
		$('#search').css('display', 'block');
	});


	
});


//companies slider
const companiesFeaturesItems = document.querySelectorAll('.companies-features-item');
const smSliderBtns = document.querySelectorAll('.sm-slider-btn');

// if(window.innerWidth < 769){
// 	slide(1);	
// }



smSliderBtns[1].classList.add('sm-slider-btn-active');
let lastSliderBtn = 1;
smSliderBtns.forEach(function(btn, index){
	btn.addEventListener('click', function(){
		if(index != lastSliderBtn){
			smSliderBtns[lastSliderBtn].classList.remove('sm-slider-btn-active');
			btn.classList.add('sm-slider-btn-active');
			lastSliderBtn = index;
			slide(index);
		}
		
	});
})

function slide(index){		
	companiesFeaturesItems.forEach(function(item, item_index){
		item.style.transform = `translate(${(item_index - index)*100}%)`;			
	});
}