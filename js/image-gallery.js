

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



	    var columnsOnPage = 4;
	    var allColumns = $('.col');
	    var galleryColumnCount = $('.col').length;

	    function pagination(){
	    	var paginationLinksContainer = $('.pagin');
	    	
	    	var paginationLinksCount = Math.ceil(galleryColumnCount / columnsOnPage);
	    	var hiddenLinks;
	    	var currentLinkSet;

	    	if (galleryColumnCount > columnsOnPage){
		    	$(paginationLinksContainer).append('<ul></ul>');

		    	for(var indx = 0; indx < paginationLinksCount; indx ++){
		    		$('.pagin ul').append('<li class="pagin-page">'+ (indx + 1) +'</li>');
		    	}
	   		}
	    }

	    function showPage(page){


	    	var hiddenColumns = allColumns.filter(":lt(" + ((page - 1) * columnsOnPage) + ")");
	    	$.merge(hiddenColumns, allColumns.filter(":gt(" + ((page * columnsOnPage) - 1) + ")") );
	    	var visibleColumns = $('.col').not(hiddenColumns);

	    	hiddenColumns.hide();
	    	visibleColumns.show();
	    	
	    }
	    

		pagination();  
		showPage(1);
	    

		$(".pagin li").click(function(evt) {
		    $(".pagin li").removeClass("current");
		    $(this).addClass("current");
		    showPage(parseInt($(this).text()));  //activate pagination and take the parameter of chosen page
	}); 


});


