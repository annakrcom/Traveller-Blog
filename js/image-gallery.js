

$(document).ready(function(){

		var $recepient = $('.gallery-wrapper'); //caching in DOM for better performance

		$('.gallery-item img').click(function(){   //onclick full-screening & vise versa for images in gallery

			var imageAddress = $(this).attr('src');
			$recepient.prepend('<div class="photo-fullscreen"><img src=""></div>');
			$('.photo-fullscreen img').attr('src', imageAddress);
			$('.photo-fullscreen').click(function(){
				$(this).remove();
			});
		       
		});     


		showPage = function(page) {
		    $(".col").hide();
		    $(".col").each(function(n) {   //pagination setup

		    	if (page == 1) {
		        	pageSize = 4;
		        } else {
		        	pageSize = 3;	
		       };

		       if(n >= pageSize * (page - 1) && n <= pageSize * page){
		            $(this).show();
		        }
		    });        
		}
		    
		showPage(1);

		$(".pagin li a").click(function(evt) {
			evt.preventDefault();
		    $(".pagin li a").removeClass("current");
		    $(this).addClass("current");
		    showPage(parseInt($(this).text()));  //activate pagination and take the parameter of chosen page
	});
    

});


