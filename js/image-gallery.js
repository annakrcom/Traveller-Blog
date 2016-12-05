

$(document).ready(function(){

		var $recepient = $('.gallery-wrapper'); //caching in DOM for better performance

		$('.gallery-item img').click(function(){   //onclick full-screening for images in gallery

			var imageAddress = $(this).attr('src');
			$recepient.prepend('<div class="photo-fullscreen"><img src=""></div>');
			$('.photo-fullscreen img').attr('src', imageAddress);
			$('.photo-fullscreen').click(function(){
				$(this).remove();
			});
		       
		});

		

		pageSize = 5;                   //pagination setup

		showPage = function(page) {
		    $(".col").hide();
		    $(".col").each(function(n) {

		        if (n >= pageSize * (page - 1) && n < pageSize * page)
		            $(this).show();
		    });        
		}
		    
		showPage(1);

		$(".pagin li a").click(function() {
		    $(".pagin li a").removeClass("current");
		    $(this).addClass("current");
		    showPage(parseInt($(this).text()));  //pagination activate and take the parameter of chosen page
	});
    

});


