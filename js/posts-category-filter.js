/* stored for backup possibility

$(document).ready(function(){

	$('.top-dest').addClass('js-category-active');

 $('.btn-topdest').click(function(){
	$('.top-dest').addClass('js-category-active').removeClass('js-category-hidden');
	$('.new-dest, .tr-hacks, .tr-style').removeClass('js-category-active').addClass('js-category-hidden');
});


$('.btn-newdest').click(function(){
	$('.new-dest').addClass('js-category-active').removeClass('js-category-hidden');
	$('.top-dest, .tr-hacks, .tr-style').removeClass('js-category-active').addClass('js-category-hidden');
});


$('.btn-style').click(function(){
	$('.tr-style').addClass('js-category-active').removeClass('js-category-hidden');
	$('.new-dest, .tr-hacks, .top-dest').removeClass('js-category-active').addClass('js-category-hidden');
});


$('.btn-hacks').click(function(){
	$('.tr-hacks').addClass('js-category-active').removeClass('js-category-hidden');
	$('.new-dest, .top-dest, .tr-style').removeClass('js-category-active').addClass('js-category-hidden');
});


}); */  


// for TOP DESTINATIONS PAGE 

$(document).ready(function(){

		$('.all-posts').addClass('js-category-active').removeClass('js-category-hidden');


	//top destinations & new destinations

		$('.btn-all-posts').click(function(){
			$('.all-posts').addClass('js-category-active').removeClass('js-category-hidden');


		});	
		
			$('.btn-summer').click(function(){
			$('.summer-dests').addClass('js-category-active').removeClass('js-category-hidden');
			$('.winter-dests').removeClass('js-category-active').addClass('js-category-hidden');
		});

			$('.btn-winter').click(function(){
			$('.winter-dests').addClass('js-category-active').removeClass('js-category-hidden');
			$('.summer-dests').removeClass('js-category-active').addClass('js-category-hidden');

		});

		// travellers lifehacks



			$('.btn-saving-money').click(function(){
			$('.saving-money').addClass('js-category-active').removeClass('js-category-hidden');
			$('.being-smart').removeClass('js-category-active').addClass('js-category-hidden');

		});
			$('.btn-being-smart').click(function(){
			$('.being-smart').addClass('js-category-active').removeClass('js-category-hidden');
			$('.saving-money').removeClass('js-category-active').addClass('js-category-hidden');

		});


});








 







